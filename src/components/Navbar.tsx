import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Globe, Menu, X, ArrowRight, ShieldCheck, HelpCircle, Info, QrCode } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 py-3 flex items-center justify-between">
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] shadow-xs p-1 group-hover:scale-105 transition-transform">
              <img
                src="/brand/logo-icon.png"
                alt="Virhino SmartQR Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-lg tracking-tight text-[#151827]">
                  Virhino <span className="gradient-text">SmartQR</span>
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 text-brand-700 border border-brand-200/60">
                  FREE
                </span>
              </div>
              <p className="text-[11px] font-medium text-[#697386] hidden sm:flex items-center gap-1.5 -mt-0.5">
                <span>Scan Smarter</span>
                <span>•</span>
                <span className="text-brand-600 font-semibold">Powered by Virhino</span>
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-semibold text-[#697386]">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              isActive('/') ? 'text-[#151827] bg-[#F7F8FC] font-bold' : 'hover:text-[#151827] hover:bg-[#F7F8FC]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/create"
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              isActive('/create') ? 'text-brand-700 bg-brand-50 font-bold' : 'hover:text-brand-700 hover:bg-brand-50'
            }`}
          >
            <QrCode className="w-3.5 h-3.5 text-brand-600" />
            <span>QR Studio</span>
          </Link>
          <Link
            to="/about"
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              isActive('/about') ? 'text-[#151827] bg-[#F7F8FC] font-bold' : 'hover:text-[#151827] hover:bg-[#F7F8FC]'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>About</span>
          </Link>
          <Link
            to="/help"
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              isActive('/help') ? 'text-[#151827] bg-[#F7F8FC] font-bold' : 'hover:text-[#151827] hover:bg-[#F7F8FC]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help & Guide</span>
          </Link>
          <Link
            to="/privacy"
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              isActive('/privacy') ? 'text-emerald-700 bg-emerald-50 font-bold' : 'hover:text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Privacy</span>
          </Link>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://www.virhino.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#697386] hover:text-[#151827] bg-white hover:bg-[#F7F8FC] rounded-lg border border-[#E5E7EB] transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-brand-600" />
            <span>virhino.com</span>
          </a>

          <Link
            to="/create"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-electric-500 hover:from-brand-600 hover:to-electric-600 rounded-xl shadow-sm shadow-brand-500/20 hover:shadow-brand-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Create QR</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#697386] hover:text-[#151827] hover:bg-[#F7F8FC] rounded-xl border border-[#E5E7EB] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white px-4 pt-3 pb-5 space-y-2 animate-fadeIn shadow-lg">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
              isActive('/') ? 'bg-brand-50 text-brand-700' : 'text-[#151827] hover:bg-[#F7F8FC]'
            }`}
          >
            Home
          </Link>
          <Link
            to="/create"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
              isActive('/create') ? 'bg-brand-50 text-brand-700' : 'text-[#151827] hover:bg-[#F7F8FC]'
            }`}
          >
            <QrCode className="w-4 h-4 text-brand-600" />
            <span>QR Studio</span>
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
              isActive('/about') ? 'bg-brand-50 text-brand-700' : 'text-[#151827] hover:bg-[#F7F8FC]'
            }`}
          >
            <Info className="w-4 h-4 text-brand-600" />
            <span>About Virhino</span>
          </Link>
          <Link
            to="/help"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
              isActive('/help') ? 'bg-brand-50 text-brand-700' : 'text-[#151827] hover:bg-[#F7F8FC]'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-brand-600" />
            <span>Help & Print Guide</span>
          </Link>
          <Link
            to="/privacy"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
              isActive('/privacy') ? 'bg-emerald-50 text-emerald-700' : 'text-[#151827] hover:bg-[#F7F8FC]'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Privacy Policy</span>
          </Link>
          <div className="pt-2 border-t border-[#E5E7EB]">
            <a
              href="https://www.virhino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-brand-700 bg-brand-50 rounded-xl border border-brand-200"
            >
              <Globe className="w-4 h-4" />
              <span>Visit www.virhino.com</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
