import React, { useRef, useState } from 'react';
import { Upload, X, RefreshCw, AlertTriangle, ShieldCheck, Image as ImageIcon } from 'lucide-react';
import type { LogoBadgeShape } from '../types/qr';
import { validateAndProcessLogoFile } from '../utils/validation';
import { SAMPLE_LOGOS } from '../utils/sampleLogos';

interface LogoUploadSectionProps {
  logoUrl: string | null;
  logoFileName: string | null;
  logoSize: number;
  logoMargin: number;
  logoBadgeShape: LogoBadgeShape;
  logoBadgeColor: string;
  onLogoChange: (url: string | null, fileName: string | null) => void;
  onLogoSizeChange: (size: number) => void;
  onLogoMarginChange: (margin: number) => void;
  onBadgeShapeChange: (shape: LogoBadgeShape) => void;
  onBadgeColorChange: (color: string) => void;
}

export const LogoUploadSection: React.FC<LogoUploadSectionProps> = ({
  logoUrl,
  logoFileName,
  logoSize,
  logoMargin,
  logoBadgeShape,
  logoBadgeColor,
  onLogoChange,
  onLogoSizeChange,
  onLogoMarginChange,
  onBadgeShapeChange,
  onBadgeColorChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setUploadError(null);
    const result = await validateAndProcessLogoFile(file);
    if (result.error) {
      setUploadError(result.error);
    } else {
      onLogoChange(result.dataUrl, result.name);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemoveLogo = () => {
    onLogoChange(null, null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setUploadError(null);
  };

  return (
    <section className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center font-bold text-xs">
            2
          </div>
          <div>
            <h2 className="font-heading font-bold text-base text-slate-900">
              Center Logo & Badge
            </h2>
          </div>
        </div>

        {logoUrl && (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            Active
          </span>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      {/* Upload Zone / Active Logo Preview */}
      {!logoUrl ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all flex flex-col items-center justify-center group ${
            isDragging
              ? 'border-brand-500 bg-brand-50/50 scale-[0.99]'
              : 'border-slate-300 hover:border-brand-400 bg-slate-50/50 hover:bg-slate-50'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-50 transition-all mb-3">
            <Upload className="w-6 h-6 stroke-[1.8]" />
          </div>

          <p className="text-sm font-semibold text-slate-800">
            Click to upload logo or drag and drop
          </p>
          <p className="text-xs text-slate-400 mt-1">
            PNG, SVG, JPG, or WebP (up to 5MB)
          </p>
        </div>
      ) : (
        <div className="bg-slate-50/90 rounded-xl p-4 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-white p-1.5 shadow-sm border border-slate-200/80 flex items-center justify-center overflow-hidden">
              <img
                src={logoUrl}
                alt="Logo preview"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 truncate max-w-[200px]">
                {logoFileName || 'Custom Logo'}
              </p>
              <p className="text-xs text-slate-500">
                Centered with auto-contrast protection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 transition-colors shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Replace
            </button>
            <button
              type="button"
              onClick={handleRemoveLogo}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-600 bg-white hover:bg-rose-50 rounded-lg border border-rose-200 transition-colors shadow-sm"
            >
              <X className="w-3.5 h-3.5" />
              Remove
            </button>
          </div>
        </div>
      )}

      {uploadError && (
        <div className="mt-2.5 p-2.5 bg-rose-50 text-rose-700 rounded-lg border border-rose-200 text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>{uploadError}</span>
        </div>
      )}

      {/* 1-Click Sample Logos if no custom logo uploaded */}
      {!logoUrl && (
        <div className="mt-3 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <ImageIcon className="w-3.5 h-3.5" /> Or try a sample icon:
            </span>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {SAMPLE_LOGOS.map((sample) => (
              <button
                key={sample.id}
                type="button"
                onClick={() => onLogoChange(sample.svgDataUrl, `${sample.name}.svg`)}
                className="group flex flex-col items-center p-2 rounded-xl border border-slate-200 hover:border-brand-400 bg-slate-50/50 hover:bg-brand-50/40 transition-all text-center"
              >
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center p-0.5 group-hover:scale-110 transition-transform">
                  <img src={sample.svgDataUrl} alt={sample.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-medium text-slate-600 mt-1 truncate max-w-full">
                  {sample.name.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Customization controls when logo is present */}
      {logoUrl && (
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
          {/* Logo Size Control with Safe Zone Indicator */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <span>Logo Proportion</span>
                {logoSize <= 0.25 ? (
                  <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    Optimal Scan (Safe)
                  </span>
                ) : (
                  <span className="text-[10px] text-amber-600 font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    High Coverage
                  </span>
                )}
              </div>
              <span className="font-mono font-semibold text-slate-800">
                {Math.round(logoSize * 100)}%
              </span>
            </div>

            <input
              type="range"
              min="0.15"
              max="0.32"
              step="0.01"
              value={logoSize}
              onChange={(e) => onLogoSizeChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>Small (15%)</span>
              <span className="text-brand-600 font-semibold">Recommended (22%)</span>
              <span>Large (32%)</span>
            </div>
          </div>

          {/* Logo Margin / White Padding */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5 font-medium text-slate-700">
              <span>White Badge Padding / Margin</span>
              <span className="font-mono font-semibold text-slate-800">{logoMargin}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={logoMargin}
              onChange={(e) => onLogoMarginChange(parseInt(e.target.value, 10))}
              className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
          </div>

          {/* Logo Badge Shape */}
          <div>
            <span className="text-xs font-medium text-slate-700 block mb-2">
              Logo Background Badge
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => onBadgeShapeChange('circle')}
                className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center flex items-center justify-center gap-1.5 ${
                  logoBadgeShape === 'circle'
                    ? 'border-brand-600 bg-brand-50/80 text-brand-700 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-white border border-slate-300 inline-block shadow-xs"></span>
                <span>Circular Badge</span>
              </button>

              <button
                type="button"
                onClick={() => onBadgeShapeChange('square')}
                className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center flex items-center justify-center gap-1.5 ${
                  logoBadgeShape === 'square'
                    ? 'border-brand-600 bg-brand-50/80 text-brand-700 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-sm bg-white border border-slate-300 inline-block shadow-xs"></span>
                <span>Square Badge</span>
              </button>

              <button
                type="button"
                onClick={() => onBadgeShapeChange('none')}
                className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all text-center flex items-center justify-center gap-1.5 ${
                  logoBadgeShape === 'none'
                    ? 'border-brand-600 bg-brand-50/80 text-brand-700 shadow-sm'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>None (Raw)</span>
              </button>
            </div>

            {logoBadgeShape !== 'none' && (
              <div className="mt-2.5 flex items-center gap-2 pt-2">
                <span className="text-[11px] font-medium text-slate-600">Badge Background Color:</span>
                <input
                  type="color"
                  value={logoBadgeColor}
                  onChange={(e) => onBadgeColorChange(e.target.value)}
                  className="w-6 h-6 rounded-md cursor-pointer border border-slate-300 p-0.5"
                />
                <span className="text-[11px] font-mono text-slate-500">{logoBadgeColor}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
