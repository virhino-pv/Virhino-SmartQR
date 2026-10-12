import React from 'react';
import { ShieldCheck, RotateCcw, Globe, User, Info, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onReset: () => void;
  onOpenAbout: () => void;
  onOpenPrivacy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onReset,
  onOpenAbout,
  onOpenPrivacy,
}) => {
  const scrollToFounder = () => {
    const el = document.getElementById('founder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-2.5 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-slate-200/90 shadow-sm p-1 group-hover:scale-105 transition-transform">
              <img
                src="/brand/logo-icon.png"
                alt="Virhino SmartQR Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl tracking-tight text-slate-900">
                  Virhino <span className="gradient-text">SmartQR</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 text-brand-700 border border-brand-200/60">
                  FREE
                </span>
              </div>
              <p className="text-[11px] font-semibold text-slate-500 hidden sm:flex items-center gap-1">
                <span>Scan Smarter</span>
                <span>•</span>
                <span className="text-brand-600 font-bold">Powered by Virhino</span>
              </p>
            </div>
          </a>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* About link */}
          <button
            type="button"
            onClick={onOpenAbout}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>About</span>
          </button>

          {/* Founder link */}
          <button
            type="button"
            onClick={scrollToFounder}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-brand-700 hover:bg-brand-50 rounded-lg transition-colors"
          >
            <User className="w-3.5 h-3.5" />
            <span>Founder</span>
          </button>

          {/* Privacy link */}
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Privacy</span>
          </button>

          {/* Virhino.com Link */}
          <a
            href="https://www.virhino.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg border border-brand-200/80 transition-all shadow-xs"
          >
            <Globe className="w-3.5 h-3.5 text-brand-600" />
            <span className="hidden sm:inline">virhino.com</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          {/* Reset Defaults */}
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-lg border border-slate-200 transition-colors shadow-sm"
            title="Reset configuration to default"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
};
