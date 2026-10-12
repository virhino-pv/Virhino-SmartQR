import React from 'react';
import { X, Sparkles, ShieldCheck, Zap, Globe, ExternalLink } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
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

        {/* Header with Virhino Logo */}
        <div className="flex items-center gap-3.5 mb-6">
          <img
            src="/brand/logo-icon.png"
            alt="Virhino Rhino Logo"
            className="w-12 h-12 object-contain drop-shadow-md"
          />
          <div>
            <h2 className="font-heading font-extrabold text-2xl text-slate-900 flex items-center gap-2">
              About <span className="gradient-text">Virhino SmartQR</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Powered by <a href="https://www.virhino.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline">Virhino (www.virhino.com)</a>
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-50 to-electric-50 border border-brand-100">
            <h3 className="font-heading font-bold text-slate-900 text-base mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              Our Mission
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              <strong>Virhino SmartQR</strong> was engineered to solve the frustration of generic, low-resolution QR generators that lock users behind paywalls, degrade scannability, or collect private data. We believe high-performance, branded QR creation should be <strong>100% free, private, and instant for everyone</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-2.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">
                Zero Data Storage
              </h4>
              <p className="text-xs text-slate-500">
                100% browser-side processing. Your logos and destination links never touch a server database or third-party cloud.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-slate-900 text-sm mb-1">
                Smart Verification
              </h4>
              <p className="text-xs text-slate-500">
                Automated optical decoding tests every QR code before you download, ensuring your logo does not block camera scans.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-slate-900 text-base mb-2">
              Why Virhino?
            </h3>
            <p>
              At <strong>Virhino</strong>, we develop intelligent digital tools designed for creators, startups, and enterprises. Inspired by the strength and resilience of the rhino, our products deliver uncompromising speed, reliability, and security.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href="https://www.virhino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 px-4 py-2.5 rounded-xl border border-brand-200 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Official Website: www.virhino.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
