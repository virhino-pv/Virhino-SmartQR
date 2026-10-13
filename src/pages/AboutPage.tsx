import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Zap,
  Globe,
  ExternalLink,
  ArrowRight,
  Lock,
  Layers,
} from 'lucide-react';
import { LinkedInIcon, InstagramIcon, XTwitterIcon } from '../components/SocialIcons';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/80 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>Our Story & Mission</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl text-[#151827] tracking-tight">
          About <span className="gradient-text">Virhino SmartQR</span>
        </h1>

        <p className="mt-4 text-base text-[#697386] max-w-2xl mx-auto leading-relaxed font-medium">
          A modern, privacy-first QR generation suite built to deliver high-resolution, branded barcodes with zero paywalls and automated camera scan verification.
        </p>
      </div>

      {/* Main Mission Card */}
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-sm mb-12 space-y-6">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#E5E7EB] p-1 shadow-xs flex items-center justify-center">
            <img
              src="/brand/logo-icon.png"
              alt="Virhino Rhino Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="font-heading font-bold text-xl text-[#151827]">
              The Virhino Vision
            </h2>
            <p className="text-xs text-[#697386]">
              Powered by <a href="https://www.virhino.com" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline">Virhino (www.virhino.com)</a>
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#697386] leading-relaxed">
          QR codes are the ubiquitous bridge between the physical and digital world, yet most commercial generators lock essential features behind recurring monthly fees, add unauthorized redirect tracking, or produce blurry downloads that fail at the printing press.
        </p>

        <p className="text-sm sm:text-base text-[#697386] leading-relaxed">
          <strong>Virhino SmartQR</strong> was engineered from the ground up to guarantee three core standards: <strong>uncompromising visual elegance</strong>, <strong>genuine client-side privacy</strong>, and <strong>optical scan verification</strong> before anything is published or printed.
        </p>

        {/* 3 Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E7EB]">
          <div className="p-4 rounded-2xl bg-[#F7F8FC] border border-[#E5E7EB]">
            <div className="w-8 h-8 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-2.5">
              <Lock className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-[#151827] mb-1">
              Zero Server Storage
            </h4>
            <p className="text-xs text-[#697386]">
              100% in-browser generation. No company links or logos are sent to external databases.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F8FC] border border-[#E5E7EB]">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2.5">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-[#151827] mb-1">
              Optical Decode Testing
            </h4>
            <p className="text-xs text-[#697386]">
              Automated camera decoding tests ensure your logo never obscures vital QR timing patterns.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F7F8FC] border border-[#E5E7EB]">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="font-heading font-bold text-sm text-[#151827] mb-1">
              Permanent Codes
            </h4>
            <p className="text-xs text-[#697386]">
              Direct static encoding ensures your QR codes never expire and need no subscriptions.
            </p>
          </div>
        </div>
      </div>

      {/* Authentic Founder Profile Section */}
      <section id="founder" className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-sm relative overflow-hidden mb-12">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Founder Photo */}
          <div className="relative shrink-0 group">
            <div className="w-44 h-52 sm:w-52 sm:h-64 rounded-3xl p-1.5 bg-gradient-to-tr from-brand-500 via-electric-500 to-cyan-400 shadow-xl shadow-brand-500/15 group-hover:scale-[1.02] transition-transform duration-300">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                <img
                  src="/brand/founder.jpg"
                  alt="Vignesh G - Founder of Virhino"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#111827] text-white shadow-md border border-slate-700 whitespace-nowrap">
              Founder
            </span>
          </div>

          {/* Bio & Leadership */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Leadership & Vision</span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#151827] tracking-tight">
              VIGNESH G
            </h3>
            <p className="text-sm font-bold text-brand-600 mb-3">
              Founder of Virhino
            </p>

            <p className="text-xs sm:text-sm text-[#697386] max-w-2xl leading-relaxed mb-6">
              Visionary tech entrepreneur passionate about creating high-impact digital experiences, seamless tools, and cutting-edge software solutions. Leading <strong>Virhino</strong> to build robust, secure, and user-centric technologies for creators and businesses worldwide.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              <a
                href="https://www.linkedin.com/in/vignesh220904/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#151827] bg-[#F7F8FC] hover:bg-[#0077b5] hover:text-white border border-[#E5E7EB] hover:border-transparent transition-all shadow-xs group"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0077b5] group-hover:text-white" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://www.instagram.com/mass._.vignesh?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#151827] bg-[#F7F8FC] hover:bg-gradient-to-r hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white border border-[#E5E7EB] hover:border-transparent transition-all shadow-xs group"
              >
                <InstagramIcon className="w-4 h-4 text-rose-500 group-hover:text-white" />
                <span>Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://x.com/Vignesh_22904"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-[#151827] bg-[#F7F8FC] hover:bg-[#111827] hover:text-white border border-[#E5E7EB] hover:border-transparent transition-all shadow-xs group"
              >
                <XTwitterIcon className="w-3.5 h-3.5 fill-current" />
                <span>X (Twitter)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href="https://www.virhino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-500 to-electric-500 hover:from-brand-600 hover:to-electric-600 transition-all shadow-sm shadow-brand-500/20"
              >
                <Globe className="w-4 h-4" />
                <span>www.virhino.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="text-center p-8 bg-[#F7F8FC] rounded-3xl border border-[#E5E7EB]">
        <h3 className="font-heading font-black text-xl sm:text-2xl text-[#151827] mb-2">
          Ready to generate your branded QR code?
        </h3>
        <p className="text-xs sm:text-sm text-[#697386] mb-5">
          Takes under 30 seconds. No signup required.
        </p>
        <Link
          to="/create"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-electric-500 text-white font-bold text-sm shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Open QR Studio</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
