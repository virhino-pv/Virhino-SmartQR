import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, CheckCircle, Smartphone, Zap } from 'lucide-react';

export const ReliabilityGuide: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>QR Reliability Standard</span>
          </div>
          <h3 className="font-heading font-extrabold text-xl text-slate-900">
            How LogoQR Studio Guarantees 100% Scannability
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Engineered with Reed-Solomon error correction and automated client-side decoder verification.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-xl transition-colors border border-brand-200"
        >
          <span>{isOpen ? 'Collapse Guide' : 'Read Print & Scan Tips'}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Grid of Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
          <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-3">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="font-heading font-bold text-sm text-slate-900 mb-1">
            Level H Error Correction
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Allocates up to 30% redundant data bytes so your QR scans immediately even when a center logo covers internal matrix pixels.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
          <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="font-heading font-bold text-sm text-slate-900 mb-1">
            Automated Live Decoder
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our engine tests the canvas against an internal camera scanner library in real-time, warning you if contrast or logo size drops below safe thresholds.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
            <Smartphone className="w-5 h-5" />
          </div>
          <h4 className="font-heading font-bold text-sm text-slate-900 mb-1">
            Zero Server Uploads
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your logo and destination URLs never leave your browser. All vector rendering, resizing, and pixel manipulation happens 100% on your machine.
          </p>
        </div>
      </div>

      {/* Collapsible deep dive */}
      {isOpen && (
        <div className="mt-6 pt-6 border-t border-slate-200/80 space-y-4 text-xs sm:text-sm text-slate-600 animate-fadeIn">
          <h4 className="font-heading font-bold text-slate-900 text-base">
            Essential Printing Checklist
          </h4>

          <ul className="space-y-2.5">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Minimum Physical Size:</strong> Print QR codes at least 2 × 2 cm (0.8 × 0.8 inches) for business cards and at least 5 × 5 cm (2 × 2 inches) for menus and table tents.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Quiet Zone:</strong> Keep a clean white margin around the QR code. Do not crop out the outer white space or place dark backgrounds too close.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>High Contrast:</strong> Always maintain high contrast between QR dots and the background. Avoid light gray on white or dark blue on black.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Pre-Print Camera Test:</strong> Always print a single proof and scan it with both an iPhone and an Android phone under normal room lighting before commercial printing.
              </span>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};
