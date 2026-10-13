import QRCodeStyling from 'qr-code-styling';
import type { QRConfig } from '../types/qr';

// 1x1 transparent GIF placeholder so qr-code-styling clears center dots without embedding heavy image data
const TRANSPARENT_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * Creates and configures a QRCodeStyling instance based on QRConfig
 */
export function createQRStylingInstance(
  config: QRConfig,
  targetSize: number = config.size,
  usePlaceholderForDots: boolean = false
): QRCodeStyling {
  const gradient = config.colorType === 'linear'
    ? {
        type: 'linear' as const,
        rotation: (config.gradientAngle * Math.PI) / 180,
        colorStops: [
          { offset: 0, color: config.primaryColor },
          { offset: 1, color: config.secondaryColor },
        ],
      }
    : config.colorType === 'radial'
    ? {
        type: 'radial' as const,
        colorStops: [
          { offset: 0, color: config.primaryColor },
          { offset: 1, color: config.secondaryColor },
        ],
      }
    : undefined;

  // Calculate cleared area for logo + badge so dots behind the badge are properly cleared
  let effectiveImageSize = config.logoSize;
  if (config.logoUrl) {
    const ecCap = config.errorCorrectionLevel === 'H' ? 0.3 : config.errorCorrectionLevel === 'Q' ? 0.25 : config.errorCorrectionLevel === 'M' ? 0.15 : 0.07;
    // Calculate total badge fraction relative to active QR size
    const paddingFraction = (config.logoBadgeShape !== 'none' ? (config.logoMargin * 2) : 0) / 300;
    const badgeFraction = Math.min(0.30, config.logoSize + paddingFraction);
    // qr-code-styling formula: hiddenDotsAxis = Math.sqrt(imageSize * ecCap) * moduleCount
    // We want hiddenDotsFraction = Math.sqrt(imageSize * ecCap) >= badgeFraction
    effectiveImageSize = Math.min(0.38, Math.max(config.logoSize, (badgeFraction * badgeFraction) / ecCap + 0.03));
  }

  // If usePlaceholderForDots is true, we pass transparent 1x1 image so dots are cleared in center
  const imageSource = usePlaceholderForDots && config.logoUrl
    ? TRANSPARENT_PLACEHOLDER
    : (config.logoUrl || undefined);

  return new QRCodeStyling({
    width: targetSize,
    height: targetSize,
    type: 'canvas',
    data: config.url || 'https://www.virhino.com',
    image: imageSource,
    margin: config.margin,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: config.errorCorrectionLevel,
    },
    imageOptions: {
      hideBackgroundDots: Boolean(config.logoUrl),
      imageSize: effectiveImageSize,
      margin: 0,
      saveAsBlob: false, // critical: avoids XMLHttpRequest issues with data URLs
    },
    dotsOptions: {
      type: config.dotType,
      color: config.colorType === 'none' ? config.primaryColor : undefined,
      gradient: gradient,
    },
    cornersSquareOptions: {
      type: config.cornerSquareType,
      color: config.cornerSquareColor,
    },
    cornersDotOptions: {
      type: config.cornerDotType,
      color: config.cornerDotColor,
    },
    backgroundOptions: {
      color: config.backgroundColor || '#ffffff',
    },
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => {
      // If anonymous fails on data: URL, retry without crossOrigin
      const fallbackImg = new Image();
      fallbackImg.onload = () => resolve(fallbackImg);
      fallbackImg.onerror = () => reject(err);
      fallbackImg.src = src;
    };
    img.src = src;
  });
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const radius = Math.min(Math.max(0, r), w / 2, h / 2);
  if (typeof ctx.roundRect === 'function') {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.closePath();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.arcTo(x + w, y, x + w, y + radius, radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.arcTo(x + w, y + h, x + w - radius, y + h, radius);
  ctx.lineTo(x + radius, y + h);
  ctx.arcTo(x, y + h, x, y + h - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

/**
 * Prepares a composite canvas including QR code, center logo, custom badge, and frame/caption
 */
export async function generateCompositeCanvas(
  config: QRConfig,
  targetQRSize: number = 1000,
  fallbackPreviewCanvas?: HTMLCanvasElement | null
): Promise<HTMLCanvasElement> {
  let baseQrCanvas: HTMLCanvasElement | null = null;

  try {
    // 1. Generate base QR code using SVG to bypass btoa limitations
    const qrInstance = createQRStylingInstance(config, targetQRSize, true);
    // Use 'svg' export to get clean vector XML without btoa crash
    const svgBlob = await qrInstance.getRawData('svg');

    if (svgBlob) {
      const svgUrl = URL.createObjectURL(svgBlob as Blob);
      const img = await loadImage(svgUrl);
      URL.revokeObjectURL(svgUrl);

      baseQrCanvas = document.createElement('canvas');
      baseQrCanvas.width = targetQRSize;
      baseQrCanvas.height = targetQRSize;
      const baseCtx = baseQrCanvas.getContext('2d')!;
      baseCtx.fillStyle = config.backgroundColor || '#ffffff';
      baseCtx.fillRect(0, 0, targetQRSize, targetQRSize);
      baseCtx.drawImage(img, 0, 0, targetQRSize, targetQRSize);
    }
  } catch (err) {
    console.warn('SVG-to-canvas generation fallback:', err);
  }

  // Fallback to preview canvas if high-res SVG conversion failed
  if (!baseQrCanvas && fallbackPreviewCanvas) {
    baseQrCanvas = fallbackPreviewCanvas;
  }

  if (!baseQrCanvas) {
    // Last resort: create a canvas directly from preview instance
    const directInstance = createQRStylingInstance(config, targetQRSize, false);
    const tempDiv = document.createElement('div');
    directInstance.append(tempDiv);
    baseQrCanvas = tempDiv.querySelector('canvas');
    if (!baseQrCanvas) throw new Error('Could not create QR canvas');
  }

  const hasFrame = config.frameStyle !== 'none' || Boolean(config.captionText?.trim());

  let totalWidth = targetQRSize;
  let totalHeight = targetQRSize;
  let paddingX = 0;
  let paddingTop = 0;
  let frameHeight = 0;

  if (hasFrame) {
    paddingX = Math.round(targetQRSize * 0.08);
    paddingTop = Math.round(targetQRSize * 0.08);
    frameHeight = Math.round(targetQRSize * 0.22);
    totalWidth = targetQRSize + paddingX * 2;
    totalHeight = targetQRSize + paddingTop + frameHeight + Math.round(targetQRSize * 0.04);
  }

  const masterCanvas = document.createElement('canvas');
  masterCanvas.width = totalWidth;
  masterCanvas.height = totalHeight;
  const ctx = masterCanvas.getContext('2d')!;

  // 1. Master Background
  ctx.fillStyle = config.backgroundColor || '#ffffff';
  ctx.fillRect(0, 0, totalWidth, totalHeight);

  // 2. Card frame if applicable
  if (config.frameStyle === 'card-border' || config.frameStyle === 'polaroid') {
    ctx.save();
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = Math.round(targetQRSize * 0.008);
    const radius = Math.round(targetQRSize * 0.04);
    roundRect(ctx, 4, 4, totalWidth - 8, totalHeight - 8, radius);
    ctx.stroke();
    ctx.restore();
  }

  // 3. Draw base QR code
  ctx.drawImage(baseQrCanvas, paddingX, paddingTop, targetQRSize, targetQRSize);

  // 4. Draw Center Logo & Badge directly on canvas
  if (config.logoUrl) {
    try {
      const logoImg = await loadImage(config.logoUrl);
      const centerQRX = paddingX + targetQRSize / 2;
      const centerQRY = paddingTop + targetQRSize / 2;
      const logoPixelSize = targetQRSize * config.logoSize;
      const badgePadding = config.logoMargin * (targetQRSize / 300);
      const badgeSize = logoPixelSize + badgePadding * 2;

      // Draw Badge background
      if (config.logoBadgeShape === 'circle') {
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerQRX, centerQRY, badgeSize / 2, 0, Math.PI * 2);
        ctx.fillStyle = config.logoBadgeColor || '#ffffff';
        ctx.fill();
        ctx.restore();
      } else if (config.logoBadgeShape === 'square') {
        ctx.save();
        ctx.fillStyle = config.logoBadgeColor || '#ffffff';
        const badgeRadius = badgeSize * 0.22;
        roundRect(
          ctx,
          centerQRX - badgeSize / 2,
          centerQRY - badgeSize / 2,
          badgeSize,
          badgeSize,
          badgeRadius
        );
        ctx.fill();
        ctx.restore();
      }

      // Draw Center Logo Image
      ctx.drawImage(
        logoImg,
        centerQRX - logoPixelSize / 2,
        centerQRY - logoPixelSize / 2,
        logoPixelSize,
        logoPixelSize
      );
    } catch (logoErr) {
      console.warn('Could not overlay logo onto canvas:', logoErr);
    }
  }

  // 5. Draw Frame / Caption / "SCAN ME" pill
  if (hasFrame) {
    const caption = (config.captionText || 'SCAN ME').trim().toUpperCase();
    const centerY = paddingTop + targetQRSize + Math.round(frameHeight * 0.45);

    if (config.frameStyle === 'scan-me-bottom' || config.frameStyle === 'badge-ribbon') {
      const pillHeight = Math.round(targetQRSize * 0.12);
      const pillWidth = Math.min(
        totalWidth - paddingX * 2,
        Math.max(targetQRSize * 0.58, caption.length * 34)
      );
      const pillX = (totalWidth - pillWidth) / 2;
      const pillY = paddingTop + targetQRSize + (frameHeight - pillHeight) / 2;
      const pillRadius = pillHeight / 2;

      // Draw pill background
      ctx.fillStyle = config.frameColor || '#7c3aed';
      roundRect(ctx, pillX, pillY, pillWidth, pillHeight, pillRadius);
      ctx.fill();

      // Draw pill text
      ctx.fillStyle = config.frameTextColor || '#ffffff';
      ctx.font = `bold ${Math.round(pillHeight * 0.44)}px 'Outfit', 'Plus Jakarta Sans', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(caption, totalWidth / 2, pillY + pillHeight / 2 + 1);
    } else {
      // Clean text caption
      ctx.fillStyle = config.frameColor || '#1e293b';
      ctx.font = `700 ${Math.round(targetQRSize * 0.055)}px 'Outfit', 'Plus Jakarta Sans', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(caption, totalWidth / 2, centerY);
    }
  }

  return masterCanvas;
}

function triggerDownload(dataUrlOrBlobUrl: string, filename: string) {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrlOrBlobUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Downloads PNG with standard or high print resolution
 */
export async function downloadQRPng(
  config: QRConfig,
  isHighRes: boolean = false,
  fallbackPreviewCanvas?: HTMLCanvasElement | null
): Promise<void> {
  const qrSize = isHighRes ? 2400 : 1000;
  const canvas = await generateCompositeCanvas(config, qrSize, fallbackPreviewCanvas);
  const filename = `virhino-qr-${isHighRes ? 'print-300dpi' : 'web'}-${Date.now()}.png`;

  try {
    if (canvas.toBlob) {
      canvas.toBlob((blob) => {
        if (blob) {
          const blobUrl = URL.createObjectURL(blob);
          triggerDownload(blobUrl, filename);
          setTimeout(() => URL.revokeObjectURL(blobUrl), 3000);
        } else {
          triggerDownload(canvas.toDataURL('image/png'), filename);
        }
      }, 'image/png');
    } else {
      triggerDownload(canvas.toDataURL('image/png'), filename);
    }
  } catch (err) {
    console.warn('Standard canvas export failed, attempting direct dataUrl:', err);
    triggerDownload(canvas.toDataURL('image/png'), filename);
  }
}

/**
 * Downloads SVG vector output
 */
export async function downloadQRSvg(config: QRConfig): Promise<void> {
  const qrInstance = createQRStylingInstance(config, 1000, false);
  const blob = await qrInstance.getRawData('svg');
  if (!blob) throw new Error('Failed to generate SVG');

  const url = URL.createObjectURL(blob as Blob);
  triggerDownload(url, `virhino-qr-vector-${Date.now()}.svg`);
  setTimeout(() => URL.revokeObjectURL(url), 3000);
}

/**
 * Copies PNG directly to user clipboard
 */
export async function copyQRToClipboard(
  config: QRConfig,
  fallbackPreviewCanvas?: HTMLCanvasElement | null
): Promise<boolean> {
  try {
    const canvas = await generateCompositeCanvas(config, 1000, fallbackPreviewCanvas);
    return new Promise((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          resolve(false);
          return;
        }
        try {
          await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob }),
          ]);
          resolve(true);
        } catch (e) {
          console.warn('Clipboard write failed:', e);
          resolve(false);
        }
      }, 'image/png');
    });
  } catch (e) {
    console.error('Clipboard copy error:', e);
    return false;
  }
}
