import React from 'react';
import { Globe, Sparkles, ExternalLink } from 'lucide-react';
import { LinkedInIcon, InstagramIcon, XTwitterIcon } from './SocialIcons';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-electric-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        {/* Founder Photo */}
        <div className="relative shrink-0 group">
          <div className="w-40 h-48 sm:w-48 sm:h-60 rounded-3xl p-1.5 bg-gradient-to-tr from-brand-600 via-electric-500 to-cyan-400 shadow-xl shadow-brand-500/20 group-hover:scale-[1.02] transition-transform duration-300">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
              <img
                src="/brand/founder.jpg"
                alt="Vignesh G - Founder of Virhino"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-900 text-white shadow-lg border border-slate-700 whitespace-nowrap">
            Founder
          </span>
        </div>

        {/* Bio & Details */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Leadership & Vision</span>
          </div>

          <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
            VIGNESH G
          </h3>
          <p className="text-sm font-bold text-brand-600 mb-3">
            Founder of Virhino
          </p>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed mb-5">
            Visionary tech entrepreneur passionate about creating high-impact digital experiences, seamless tools, and cutting-edge software solutions. Driving <strong>Virhino</strong> to build robust, secure, and user-centric technologies for the modern world.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/vignesh220904/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-[#0077b5] hover:text-white border border-slate-200 hover:border-transparent transition-all shadow-xs group"
            >
              <LinkedInIcon className="w-4 h-4 text-[#0077b5] group-hover:text-white" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mass._.vignesh?utm_source=ig_web_button_share_sheet&cplk=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-gradient-to-r hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:text-white border border-slate-200 hover:border-transparent transition-all shadow-xs group"
            >
              <InstagramIcon className="w-4 h-4 text-rose-500 group-hover:text-white" />
              <span>Instagram</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/Vignesh_22904"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-900 hover:text-white border border-slate-200 hover:border-transparent transition-all shadow-xs group"
            >
              <XTwitterIcon className="w-3.5 h-3.5 fill-current" />
              <span>X (Twitter)</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            {/* Official Website */}
            <a
              href="https://www.virhino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-electric-600 hover:from-brand-700 hover:to-electric-700 transition-all shadow-sm shadow-brand-500/20"
            >
              <Globe className="w-4 h-4" />
              <span>www.virhino.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
