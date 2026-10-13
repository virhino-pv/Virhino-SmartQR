import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Globe, ExternalLink, QrCode } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, XTwitterIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-[#E5E7EB] bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E5E7EB]">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-xs p-1 flex items-center justify-center">
                <img
                  src="/brand/logo-icon.png"
                  alt="Virhino SmartQR Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-heading font-black text-lg text-[#151827]">
                Virhino <span className="gradient-text">SmartQR</span>
              </span>
            </Link>

            <p className="text-xs text-[#697386] leading-relaxed">
              High-resolution custom QR codes with center logos, electric blue & violet gradients, and real-time scan verification. 100% free and private.
            </p>

            <div className="pt-1">
              <a
                href="https://www.virhino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-700"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>www.virhino.com</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#151827] uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#697386]">
              <li>
                <Link to="/create" className="hover:text-brand-600 transition-colors flex items-center gap-1.5">
                  <QrCode className="w-3 h-3 text-brand-500" />
                  <span>QR Studio</span>
                </Link>
              </li>
              <li>
                <Link to="/#features" className="hover:text-brand-600 transition-colors">
                  Key Features
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:text-brand-600 transition-colors">
                  Design Presets
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-brand-600 transition-colors">
                  Print Resolution (300 DPI)
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#151827] uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#697386]">
              <li>
                <Link to="/about" className="hover:text-brand-600 transition-colors">
                  About Virhino
                </Link>
              </li>
              <li>
                <Link to="/about#founder" className="hover:text-brand-600 transition-colors">
                  Founder: Vignesh G
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-brand-600 transition-colors">
                  Help & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#151827] uppercase tracking-wider">
              Connect With Founder
            </h4>
            <p className="text-xs text-[#697386]">
              Follow Vignesh G and stay updated with new software releases from Virhino.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.linkedin.com/in/vignesh220904/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vignesh G LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#F7F8FC] hover:bg-[#0077b5] text-[#697386] hover:text-white flex items-center justify-center transition-all border border-[#E5E7EB]"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mass._.vignesh?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vignesh G Instagram"
                className="w-8 h-8 rounded-lg bg-[#F7F8FC] hover:bg-rose-500 text-[#697386] hover:text-white flex items-center justify-center transition-all border border-[#E5E7EB]"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Vignesh_22904"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vignesh G X Twitter"
                className="w-8 h-8 rounded-lg bg-[#F7F8FC] hover:bg-[#111827] text-[#697386] hover:text-white flex items-center justify-center transition-all border border-[#E5E7EB]"
                title="X (Twitter)"
              >
                <XTwitterIcon className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://www.virhino.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Virhino Website"
                className="w-8 h-8 rounded-lg bg-[#F7F8FC] hover:bg-brand-600 text-[#697386] hover:text-white flex items-center justify-center transition-all border border-[#E5E7EB]"
                title="Virhino Official Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#697386] text-center sm:text-left">
          <p>
            © 2026 <strong>Virhino SmartQR</strong>. Powered by{' '}
            <a href="https://www.virhino.com" target="_blank" rel="noopener noreferrer" className="text-[#151827] font-bold hover:underline">
              Virhino
            </a>
            . 100% Free, Private & Open.
          </p>

          <div className="flex items-center gap-1.5 text-[#697386]">
            <span>Crafted by</span>
            <span className="font-bold text-[#151827]">Vignesh G</span>
            <span>& Team</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 ml-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
};
