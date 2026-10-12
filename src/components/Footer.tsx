import React from 'react';
import { ShieldCheck, Heart, Globe, ExternalLink } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, XTwitterIcon } from './SocialIcons';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenPrivacy }) => {
  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-100">
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <img
              src="/brand/logo-icon.png"
              alt="Virhino SmartQR Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="font-heading font-black text-slate-900 text-lg">
                Virhino <span className="gradient-text">SmartQR</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Virhino smartQR powered by <a href="https://www.virhino.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline">Virhino</a>
              </p>
              <a
                href="https://www.virhino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-electric-600 hover:text-electric-700 mt-1"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>www.virhino.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links & Founder Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-xs font-semibold text-slate-600">
            <button
              onClick={onOpenAbout}
              className="hover:text-brand-600 transition-colors"
            >
              About Virhino
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-emerald-600 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Privacy Policy
            </button>
            <a
              href="#founder"
              className="hover:text-brand-600 transition-colors"
            >
              Founder: Vignesh G
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/vignesh220904/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vignesh G LinkedIn"
              className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-[#0077b5] text-slate-500 hover:text-white flex items-center justify-center transition-all border border-slate-200"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/mass._.vignesh?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vignesh G Instagram"
              className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-rose-500 text-slate-500 hover:text-white flex items-center justify-center transition-all border border-slate-200"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/Vignesh_22904"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vignesh G X Twitter"
              className="w-8 h-8 rounded-lg bg-slate-50 hover:bg-slate-900 text-slate-500 hover:text-white flex items-center justify-center transition-all border border-slate-200"
            >
              <XTwitterIcon className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong>Virhino SmartQR</strong>. Powered by{' '}
            <a href="https://www.virhino.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-bold hover:underline">
              Virhino
            </a>
            . 100% Free & Private.
          </p>

          <div className="flex items-center gap-1 text-slate-500">
            <span>Built with passion by</span>
            <span className="font-bold text-slate-700">Vignesh G</span>
            <span>& Team</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 ml-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
};
