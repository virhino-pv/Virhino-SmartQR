import React from 'react';
import { X, ShieldCheck, Lock, EyeOff, CheckCircle2, Globe } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200/80 shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-sm">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-2xl text-slate-900">
              Privacy Policy
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Virhino SmartQR • Zero-Knowledge, 100% Client-Side Architecture
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-900">
            <p className="font-semibold text-xs sm:text-sm">
              🔒 <strong>Our Core Privacy Promise:</strong> Virhino SmartQR never collects, transmits, or stores your destination URLs or uploaded logos. Everything executes 100% inside your web browser.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-slate-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                <Lock className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  1. Zero Server Uploads
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  When you upload a logo (PNG, JPG, SVG, WebP) or enter a private link, it is processed locally using the browser’s native <code>FileReader</code> and HTML5 Canvas API. No network request containing your image or text is ever sent to our servers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-slate-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                <EyeOff className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  2. No Tracking & No Accounts
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  You never have to register, sign in, or provide an email address. We do not track who scans your QR codes or profile your visitors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-slate-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-slate-900 text-sm">
                  3. Permanent Scannability
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  The generated QR codes are direct, static QR codes that encode your destination URL directly into the matrix. They never redirect through third-party redirect links and will never expire.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 space-y-1">
            <p className="font-semibold text-slate-700">Virhino Commitment:</p>
            <p>
              This application is proudly built and maintained by <strong>Virhino</strong> (<a href="https://www.virhino.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline">www.virhino.com</a>) to advance accessible, secure web tools.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <a
              href="https://www.virhino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:underline"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>www.virhino.com</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
