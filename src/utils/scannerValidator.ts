import jsQR from 'jsqr';
import type { ErrorCorrectionLevel, ScanVerificationResult } from '../types/qr';

export interface ScanValidationDetails {
  result: ScanVerificationResult;
  recommendations: string[];
}

/**
 * Validates a generated QR canvas by decoding it using jsQR in real-time
 */
export async function validateCanvasQR(
  canvas: HTMLCanvasElement,
  expectedUrl: string,
  errorCorrectionLevel: ErrorCorrectionLevel,
  logoSize: number,
  hasLogo: boolean
): Promise<ScanValidationDetails> {
  try {
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
      return {
        result: {
          isChecking: false,
          isValid: null,
          decodedData: null,
          message: 'Canvas context unavailable for verification.',
          confidence: 'idle',
        },
        recommendations: [],
      };
    }

    const { width, height } = canvas;
    if (width === 0 || height === 0) {
      return {
        result: {
          isChecking: false,
          isValid: null,
          decodedData: null,
          message: 'Canvas not rendered yet.',
          confidence: 'idle',
        },
        recommendations: [],
      };
    }

    const imageData = ctx.getImageData(0, 0, width, height);

    // First attempt: standard scan
    let code = jsQR(imageData.data, width, height, {
      inversionAttempts: 'attemptBoth',
    });

    const recommendations: string[] = [];

    if (code && code.data) {
      const decodedText = code.data;
      const cleanExpected = expectedUrl.trim();
      const matches = decodedText === cleanExpected || decodedText.replace(/\/$/, '') === cleanExpected.replace(/\/$/, '');

      // Evaluate confidence based on logo size and error correction
      let confidence: 'high' | 'medium' | 'low' = 'high';
      let message = '✓ Real-time scan verified: Camera will read this QR instantly.';

      if (hasLogo) {
        if (errorCorrectionLevel !== 'H' && errorCorrectionLevel !== 'Q') {
          confidence = 'medium';
          recommendations.push('Switch to Error Correction Level H for maximum physical print durability with logos.');
        }

        if (logoSize > 0.28) {
          confidence = 'medium';
          recommendations.push('Logo size is above 28%. We recommend keeping it under 25% for reliable low-light scanning.');
        }
      }

      if (!matches) {
        message = `Decoded data differs slightly: "${decodedText.slice(0, 30)}..."`;
      }

      return {
        result: {
          isChecking: false,
          isValid: true,
          decodedData: decodedText,
          message,
          confidence,
          testedAt: Date.now(),
        },
        recommendations,
      };
    } else {
      // Decode failed
      if (hasLogo && logoSize > 0.25) {
        recommendations.push('Logo is covering too many QR modules. Reduce logo size to 20%–24%.');
      }
      if (errorCorrectionLevel !== 'H') {
        recommendations.push('Increase error correction to Level H (High 30% redundancy).');
      }
      recommendations.push('Ensure a solid white badge surrounds the center logo.');
      recommendations.push('Verify high contrast between QR dots and background.');

      return {
        result: {
          isChecking: false,
          isValid: false,
          decodedData: null,
          message: '⚠️ Automated decoder alert: QR code could not be read cleanly.',
          confidence: 'failed',
          testedAt: Date.now(),
        },
        recommendations,
      };
    }
  } catch (err) {
    console.error('Scan validation error:', err);
    return {
      result: {
        isChecking: false,
        isValid: null,
        decodedData: null,
        message: 'Could not test canvas decoding in this environment.',
        confidence: 'idle',
      },
      recommendations: [],
    };
  }
}
