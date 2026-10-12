export interface UrlValidationResult {
  isValid: boolean;
  normalizedUrl: string;
  errorMessage?: string;
  warningMessage?: string;
}

export function validateAndNormalizeUrl(rawInput: string): UrlValidationResult {
  const input = rawInput.trim();
  
  if (!input) {
    return {
      isValid: false,
      normalizedUrl: '',
      errorMessage: 'Please enter a web URL or text to generate a QR code.',
    };
  }

  // Security check: block dangerous protocols
  const lower = input.toLowerCase();
  if (lower.startsWith('javascript:') || lower.startsWith('vbscript:') || lower.startsWith('data:text/html')) {
    return {
      isValid: false,
      normalizedUrl: '',
      errorMessage: 'Unsafe URL protocol detected. Please enter a valid http(s) URL.',
    };
  }

  let testUrl = input;
  // If user just typed something like "example.com" or "github.com/myrepo", auto prefix https://
  const hasProtocol = /^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(input);
  if (!hasProtocol) {
    // If it looks like a domain or path
    if (input.includes('.') || input.startsWith('localhost')) {
      testUrl = `https://${input}`;
    }
  }

  try {
    const parsed = new URL(testUrl);
    // Protocols permitted
    const validProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'sms:', 'geo:', 'wifi:'];
    if (!validProtocols.includes(parsed.protocol)) {
      return {
        isValid: false,
        normalizedUrl: testUrl,
        errorMessage: `Protocol "${parsed.protocol}" is not supported. Use https:// or http://.`,
      };
    }

    let warningMessage: string | undefined;
    if (testUrl.length > 250) {
      warningMessage = 'Long URL detected. We automatically optimize error correction so your QR code scans quickly.';
    }

    return {
      isValid: true,
      normalizedUrl: testUrl,
      warningMessage,
    };
  } catch {
    // If URL constructor fails, but user wants plain text or raw string, allow with note if not totally malformed
    if (input.length > 0) {
      return {
        isValid: true,
        normalizedUrl: input,
        warningMessage: 'Plain text format (not a web URL).',
      };
    }
    return {
      isValid: false,
      normalizedUrl: input,
      errorMessage: 'Invalid URL format.',
    };
  }
}

export async function validateAndProcessLogoFile(file: File): Promise<{
  dataUrl: string;
  name: string;
  error?: string;
}> {
  const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/svg+xml'];
  
  if (!allowedTypes.includes(file.type)) {
    return {
      dataUrl: '',
      name: file.name,
      error: 'Please upload a PNG, JPG, SVG, or WebP image.',
    };
  }

  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return {
      dataUrl: '',
      name: file.name,
      error: 'File size exceeds 5MB. Please upload a smaller logo.',
    };
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // If SVG, perform basic sanitization check
      if (file.type === 'image/svg+xml') {
        const lower = result.toLowerCase();
        if (lower.includes('<script') || lower.includes('javascript:')) {
          resolve({
            dataUrl: '',
            name: file.name,
            error: 'SVG contains disallowed script tags for security.',
          });
          return;
        }
      }
      resolve({
        dataUrl: result,
        name: file.name,
      });
    };
    reader.onerror = () => {
      resolve({
        dataUrl: '',
        name: file.name,
        error: 'Failed to read image file.',
      });
    };
    reader.readAsDataURL(file);
  });
}
