import React, { useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Download,
  Copy,
  Check,
  AlertTriangle,
  Smartphone,
  Printer,
  ShieldCheck,
  FileCode,
  Wand2,
  Maximize2,
} from 'lucide-react';
import type { QRConfig, ScanVerificationResult } from '../types/qr';
import {
  createQRStylingInstance,
  downloadQRPng,
  downloadQRSvg,
  copyQRToClipboard,
} from '../utils/exportQR';
import { validateCanvasQR } from '../utils/scannerValidator';

interface QRPreviewCardProps {
  config: QRConfig;
  onOptimize: () => void;
}

export const QRPreviewCard: React.FC<QRPreviewCardProps> = ({
  config,
  onOptimize,
}) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const qrInstanceRef = useRef<ReturnType<typeof createQRStylingInstance> | null>(null);

  const [verification, setVerification] = useState<ScanVerificationResult>({
    isChecking: true,
    isValid: null,
    decodedData: null,
    message: 'Initializing scan verification...',
    confidence: 'idle',
  });
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPhoneMockup, setShowPhoneMockup] = useState(false);

  // Initialize and update QRCodeStyling
  useEffect(() => {
    if (!qrRef.current) return;

    // Clear previous canvas
    qrRef.current.innerHTML = '';

    // Create instance with placeholder so dots are cleared in center
    const instance = createQRStylingInstance(config, 280, true);
    qrInstanceRef.current = instance;

    instance.append(qrRef.current);

    // Give the canvas a short tick to render, draw center logo directly, then validate
    const checkTimeout = setTimeout(async () => {
      const canvasEl = qrRef.current?.querySelector('canvas');
      if (canvasEl) {
        if (config.logoUrl) {
          try {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = async () => {
              const ctx = canvasEl.getContext('2d');
              if (ctx) {
                const { width, height } = canvasEl;
                const centerQRX = width / 2;
                const centerQRY = height / 2;
                const logoPixelSize = width * config.logoSize;
                const badgePadding = config.logoMargin * (width / 300);
                const badgeSize = logoPixelSize + badgePadding * 2;

                // Draw badge background
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
                  const r = badgeSize * 0.22;
                  ctx.beginPath();
                  ctx.moveTo(centerQRX - badgeSize / 2 + r, centerQRY - badgeSize / 2);
                  ctx.arcTo(centerQRX + badgeSize / 2, centerQRY - badgeSize / 2, centerQRX + badgeSize / 2, centerQRY + badgeSize / 2, r);
                  ctx.arcTo(centerQRX + badgeSize / 2, centerQRY + badgeSize / 2, centerQRX - badgeSize / 2, centerQRY + badgeSize / 2, r);
                  ctx.arcTo(centerQRX - badgeSize / 2, centerQRY + badgeSize / 2, centerQRX - badgeSize / 2, centerQRY - badgeSize / 2, r);
                  ctx.arcTo(centerQRX - badgeSize / 2, centerQRY - badgeSize / 2, centerQRX + badgeSize / 2, centerQRY - badgeSize / 2, r);
                  ctx.fill();
                  ctx.restore();
                }

                // Draw logo image
                ctx.drawImage(
                  img,
                  centerQRX - logoPixelSize / 2,
                  centerQRY - logoPixelSize / 2,
                  logoPixelSize,
                  logoPixelSize
                );
              }

              // Run validation after logo is drawn on canvas
              setVerification((prev) => ({ ...prev, isChecking: true }));
              const testResult = await validateCanvasQR(
                canvasEl,
                config.url,
                config.errorCorrectionLevel,
                config.logoSize,
                Boolean(config.logoUrl)
              );
              setVerification(testResult.result);
              setRecommendations(testResult.recommendations);
            };

            img.onerror = () => {
              // Fallback without crossOrigin
              const fallbackImg = new Image();
              fallbackImg.onload = async () => {
                const ctx = canvasEl.getContext('2d');
                if (ctx) {
                  const { width, height } = canvasEl;
                  const centerQRX = width / 2;
                  const centerQRY = height / 2;
                  const logoPixelSize = width * config.logoSize;
                  ctx.drawImage(
                    fallbackImg,
                    centerQRX - logoPixelSize / 2,
                    centerQRY - logoPixelSize / 2,
                    logoPixelSize,
                    logoPixelSize
                  );
                }
              };
              fallbackImg.src = config.logoUrl!;
            };

            img.src = config.logoUrl;
          } catch (e) {
            console.warn('Canvas overlay error:', e);
          }
        } else {
          // No logo, validate immediately
          setVerification((prev) => ({ ...prev, isChecking: true }));
          const testResult = await validateCanvasQR(
            canvasEl,
            config.url,
            config.errorCorrectionLevel,
            config.logoSize,
            false
          );
          setVerification(testResult.result);
          setRecommendations(testResult.recommendations);
        }
      }
    }, 120);

    return () => {
      clearTimeout(checkTimeout);
    };
  }, [
    config.url,
    config.dotType,
    config.colorType,
    config.primaryColor,
    config.secondaryColor,
    config.gradientAngle,
    config.backgroundColor,
    config.cornerSquareType,
    config.cornerSquareColor,
    config.cornerDotType,
    config.cornerDotColor,
    config.logoUrl,
    config.logoSize,
    config.logoMargin,
    config.logoBadgeShape,
    config.logoBadgeColor,
    config.errorCorrectionLevel,
    config.margin,
  ]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#7c3aed', '#2563eb', '#06b6d4', '#10b981'],
      });
    } catch {
      // fallback
    }
  };

  const handleDownload = async (isHighRes: boolean = false) => {
    try {
      setIsDownloading(true);
      const previewCanvas = qrRef.current?.querySelector('canvas') || null;
      await downloadQRPng(config, isHighRes, previewCanvas);
      triggerConfetti();
    } catch (e) {
      console.error('Download error:', e);
      const previewCanvas = qrRef.current?.querySelector('canvas');
      if (previewCanvas) {
        try {
          const link = document.createElement('a');
          link.download = `virhino-qr-${Date.now()}.png`;
          link.href = previewCanvas.toDataURL('image/png');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          triggerConfetti();
        } catch {
          alert('Could not download image. Please try again.');
        }
      } else {
        alert('Could not download image. Please try again.');
      }
    } finally {
      setIsDownloading(false);
    }
  };

  const handleDownloadSvg = async () => {
    try {
      setIsDownloading(true);
      await downloadQRSvg(config);
      triggerConfetti();
    } catch (e) {
      console.error('Download SVG error:', e);
      alert('Could not download SVG. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleCopy = async () => {
    const previewCanvas = qrRef.current?.querySelector('canvas') || null;
    const success = await copyQRToClipboard(config, previewCanvas);
    if (success) {
      setIsCopied(true);
      triggerConfetti();
      setTimeout(() => setIsCopied(false), 2500);
    } else {
      alert('Image could not be copied automatically. Use Download PNG.');
    }
  };

  const captionText = (config.captionText || 'SCAN ME').trim().toUpperCase();

  const logoSizePx = Math.round(280 * config.logoSize);
  const badgeSizePx = logoSizePx + config.logoMargin * 4;

  // The single unified QR Code and Logo block
  const qrDisplayContent = (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div
          ref={qrRef}
          className="flex items-center justify-center rounded-xl overflow-hidden transition-transform"
        />

        {/* Center Logo Overlay ensuring 100% visibility */}
        {config.logoUrl && (
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ zIndex: 10 }}
          >
            <div
              className={`flex items-center justify-center shadow-md transition-all ${
                config.logoBadgeShape === 'circle'
                  ? 'rounded-full'
                  : config.logoBadgeShape === 'square'
                  ? 'rounded-xl'
                  : ''
              }`}
              style={{
                backgroundColor:
                  config.logoBadgeShape !== 'none'
                    ? config.logoBadgeColor || '#ffffff'
                    : 'transparent',
                width: `${badgeSizePx}px`,
                height: `${badgeSizePx}px`,
                padding: `${config.logoMargin * 1.5}px`,
              }}
            >
              <img
                src={config.logoUrl}
                alt="Center logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>

      {/* Live Frame / Caption rendered in preview */}
      {config.frameStyle === 'scan-me-bottom' && (
        <div
          className="mt-3.5 px-6 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-sm flex items-center gap-1.5 transition-all"
          style={{
            backgroundColor: config.frameColor,
            color: config.frameTextColor,
          }}
        >
          <span>{captionText}</span>
        </div>
      )}

      {config.frameStyle === 'polaroid' && (
        <div
          className="mt-3 text-xs font-extrabold uppercase tracking-widest"
          style={{ color: config.frameColor }}
        >
          {captionText}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-brand-500/5 p-6 lg:p-7 sticky top-20 flex flex-col gap-6">
      {/* Top Preview Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <h3 className="font-heading font-bold text-base text-slate-900">
            Live Preview
          </h3>
        </div>

        <button
          type="button"
          onClick={() => setShowPhoneMockup(!showPhoneMockup)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
            showPhoneMockup
              ? 'bg-brand-50 border-brand-300 text-brand-700 shadow-sm'
              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
          }`}
        >
          {showPhoneMockup ? (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Standard View</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>Phone Simulator</span>
            </>
          )}
        </button>
      </div>

      {/* Main Preview Container */}
      <div className="flex flex-col items-center justify-center min-h-[360px] py-2 w-full overflow-hidden">
        {showPhoneMockup ? (
          /* Phone Mockup Screen with scaled container so QR never overflows */
          <div className="w-[310px] max-w-full bg-slate-900 p-3.5 rounded-[42px] shadow-2xl border-4 border-slate-800 ring-1 ring-slate-700/50 transition-all">
            {/* Speaker notch */}
            <div className="w-24 h-4 bg-slate-800 mx-auto rounded-b-xl mb-3 flex items-center justify-center">
              <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
            </div>

            {/* Inner Phone Screen */}
            <div className="bg-slate-100/90 rounded-[30px] p-3 text-center flex flex-col items-center overflow-hidden">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                Virhino Smart Pass
              </span>

              {/* Scaled QR Card inside Phone */}
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center w-full transform scale-[0.88] origin-top">
                {qrDisplayContent}
              </div>

              <p className="text-[11px] font-semibold text-slate-600 -mt-3 mb-1 truncate max-w-[200px]">
                {config.url}
              </p>
              <div className="w-16 h-1 bg-slate-300 rounded-full my-2 mx-auto"></div>
            </div>
          </div>
        ) : (
          /* Standard Live Canvas Card (Clean, stable, non-overflowing) */
          <div
            className={`p-6 rounded-2xl transition-all flex flex-col items-center justify-center w-full max-w-[340px] ${
              config.frameStyle === 'card-border' || config.frameStyle === 'polaroid'
                ? 'border-2 border-slate-200 bg-white shadow-md'
                : 'bg-white'
            }`}
            style={{
              backgroundColor: config.backgroundColor || '#ffffff',
            }}
          >
            {qrDisplayContent}
          </div>
        )}
      </div>

      {/* Real-Time Automated Scan Verification Status */}
      <div className="pt-2 border-t border-slate-100">
        {verification.isValid === true ? (
          <div className="p-3 bg-emerald-50/90 rounded-2xl border border-emerald-200/80">
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-emerald-900">
                    Real-Time Scan Verified
                  </p>
                  <span className="text-[10px] font-semibold bg-emerald-200/70 text-emerald-800 px-2 py-0.5 rounded-full">
                    Scannable
                  </span>
                </div>
                <p className="text-[11px] text-emerald-700 mt-0.5 leading-snug">
                  Decoded output matches your destination URL. Fast camera acquisition confirmed.
                </p>
              </div>
            </div>
          </div>
        ) : verification.isValid === false ? (
          <div className="p-3 bg-rose-50/90 rounded-2xl border border-rose-200">
            <div className="flex items-start gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-rose-900">
                    Scan Alert: Decoding Issue
                  </p>
                  <button
                    type="button"
                    onClick={onOptimize}
                    className="text-[10px] font-bold bg-rose-600 text-white px-2 py-0.5 rounded-lg flex items-center gap-1 hover:bg-rose-700 shadow-xs"
                  >
                    <Wand2 className="w-2.5 h-2.5" /> Auto-Fix
                  </button>
                </div>
                <p className="text-[11px] text-rose-700 mt-0.5 leading-snug">
                  The automated decoder recommends adjusting contrast or logo padding.
                </p>
                {recommendations.length > 0 && (
                  <ul className="text-[10px] text-rose-600 list-disc list-inside mt-1 space-y-0.5">
                    {recommendations.map((rec, idx) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-2.5 bg-slate-50 rounded-xl text-center text-xs text-slate-500">
            Testing scannability...
          </div>
        )}

        {/* Scan-Test reminder note */}
        <p className="text-[11px] text-slate-400 text-center mt-2">
          💡 Scan-test with your smartphone camera before bulk printing.
        </p>
      </div>

      {/* Prominent Download Actions */}
      <div className="space-y-2.5 pt-1">
        {/* Primary Download PNG */}
        <button
          type="button"
          disabled={isDownloading}
          onClick={() => handleDownload(false)}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-brand-600 via-brand-700 to-electric-600 hover:from-brand-700 hover:to-electric-700 text-white font-heading font-extrabold text-sm shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
        >
          <Download className="w-4 h-4 stroke-[2.5]" />
          <span>Download QR Code (PNG)</span>
        </button>

        <div className="grid grid-cols-3 gap-2">
          {/* Print 300 DPI High-Res */}
          <button
            type="button"
            disabled={isDownloading}
            onClick={() => handleDownload(true)}
            className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all shadow-xs"
            title="Download high-resolution 2400px image ready for 300 DPI physical printing"
          >
            <Printer className="w-4 h-4 text-brand-600" />
            <span className="text-[11px]">Print (300 DPI)</span>
          </button>

          {/* SVG Vector */}
          <button
            type="button"
            disabled={isDownloading}
            onClick={handleDownloadSvg}
            className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 text-slate-700 text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all shadow-xs"
            title="Download scalable vector graphic (infinite resolution)"
          >
            <FileCode className="w-4 h-4 text-electric-600" />
            <span className="text-[11px]">SVG Vector</span>
          </button>

          {/* Copy Image to Clipboard */}
          <button
            type="button"
            onClick={handleCopy}
            className={`p-2.5 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all shadow-xs ${
              isCopied
                ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
            }`}
            title="Copy PNG directly to clipboard to paste in Figma, Photoshop, or Slack"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
            ) : (
              <Copy className="w-4 h-4 text-slate-600" />
            )}
            <span className="text-[11px]">{isCopied ? 'Copied!' : 'Copy Image'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
