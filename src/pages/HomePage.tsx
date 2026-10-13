import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Palette,
  CheckCircle2,
  Printer,
  FileCode,
  Lock,
  Layers,
  Smartphone,
  Check,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-500/10 to-electric-500/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/80 shadow-xs mb-6 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Virhino SmartQR • 100% Free, Private & Instant</span>
          </div>

          {/* Master Headline */}
          <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#151827] tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Create Beautiful QR Codes.{' '}
            <span className="gradient-text">Scan With Confidence.</span>
          </h1>

          {/* Supporting Text */}
          <p className="mt-5 text-base sm:text-lg text-[#697386] max-w-2xl mx-auto leading-relaxed font-medium">
            Create custom, high-resolution QR codes with your logo, personalized colours, and reliable scan testing. Free, private, and easy to use.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <Link
              to="/create"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-500 via-brand-600 to-electric-500 hover:from-brand-600 hover:to-electric-600 text-white font-heading font-bold text-sm sm:text-base shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Create QR in Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/help"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-[#F7F8FC] text-[#151827] font-semibold text-sm sm:text-base border border-[#E5E7EB] hover:border-slate-300 transition-all shadow-xs"
            >
              <span>Explore Help & Print Guide</span>
            </Link>
          </div>

          {/* 3 Quick Value Pillars */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-[#697386]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>No Account or Sign-up Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-200">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>100% Client-Side Private</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-electric-50 text-electric-600 flex items-center justify-center border border-electric-200">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>300 DPI Print & Vector SVG</span>
            </div>
          </div>

          {/* Prominent Product Preview Card */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-slate-200/50 via-white/80 to-white border border-[#E5E7EB] shadow-2xl shadow-brand-500/10">
              <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  {/* Left Mockup Explanation */}
                  <div className="text-left space-y-4 max-w-md">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Live Studio Architecture</span>
                    </div>

                    <h3 className="font-heading font-black text-2xl text-[#151827] tracking-tight">
                      Engineered for Zero Scan Failures
                    </h3>

                    <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                      Every code generated in <strong>Virhino SmartQR</strong> is verified in real-time by an internal optical decode engine before you print. We protect your center logo with adaptive contrast badges and Reed-Solomon redundancy.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#F7F8FC] border border-[#E5E7EB] text-[#151827]">
                        ⚡ Instant Real-Time Preview
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#F7F8FC] border border-[#E5E7EB] text-[#151827]">
                        🎨 7 Curated Presets
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#F7F8FC] border border-[#E5E7EB] text-[#151827]">
                        🖨️ 2400px Print Master
                      </span>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/create"
                        className="inline-flex items-center gap-2 text-xs font-bold text-brand-600 hover:text-brand-700 hover:underline"
                      >
                        <span>Open QR Studio</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Realistic Product Preview Card */}
                  <div className="w-full sm:w-auto flex flex-col items-center">
                    <div className="bg-[#F7F8FC] p-6 rounded-2xl border border-[#E5E7EB] shadow-sm flex flex-col items-center max-w-[320px]">
                      {/* Scaled Preview QR Box */}
                      <div className="relative bg-white p-4 rounded-2xl shadow-sm border border-[#E5E7EB] flex flex-col items-center">
                        <div className="w-48 h-48 relative flex items-center justify-center">
                          {/* Live preview image */}
                          <img
                            src="/brand/logo-square.png"
                            alt="Sample Branded QR Preview"
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>

                        {/* Caption pill */}
                        <div className="mt-3 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-500 text-white shadow-xs">
                          SCAN ME
                        </div>
                      </div>

                      {/* Verification Status Pill */}
                      <div className="mt-4 w-full p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
                        <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Optical Camera Scannable</span>
                        </div>
                        <p className="text-[10px] text-emerald-700 mt-0.5">
                          Verified against standard camera decoders
                        </p>
                      </div>

                      {/* Quick export pill row */}
                      <div className="mt-3 grid grid-cols-3 gap-1.5 w-full text-center">
                        <span className="py-1 px-1.5 bg-white rounded-lg border border-[#E5E7EB] text-[10px] font-semibold text-[#697386]">
                          PNG
                        </span>
                        <span className="py-1 px-1.5 bg-white rounded-lg border border-[#E5E7EB] text-[10px] font-semibold text-brand-600">
                          300 DPI
                        </span>
                        <span className="py-1 px-1.5 bg-white rounded-lg border border-[#E5E7EB] text-[10px] font-semibold text-electric-600">
                          SVG
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Benefits Section */}
      <section className="py-16 bg-[#F7F8FC] border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Why Virhino SmartQR
            </span>
            <h2 className="mt-1 font-heading font-black text-3xl sm:text-4xl text-[#151827] tracking-tight">
              Three Pillars of QR Excellence
            </h2>
            <p className="mt-2 text-sm text-[#697386]">
              Built to overcome the limitations of bloated generators and paid subscription gates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 border border-brand-100">
                <Palette className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#151827] mb-2">
                1. Custom QR Design
              </h3>
              <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                Add your brand logo with automated safe badge padding. Customize dot modules, squircle corners, signature violet-to-blue gradients, and call-to-action caption frames.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100">
                <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#151827] mb-2">
                2. Scan Verification
              </h3>
              <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                Never print an unreadable code. Our real-time optical decoder simulates camera acquisition and evaluates module contrast to confirm scannability before export.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-2xl p-7 border border-[#E5E7EB] shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-electric-50 text-electric-600 flex items-center justify-center mb-5 border border-electric-100">
                <Printer className="w-6 h-6 stroke-[1.8]" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#151827] mb-2">
                3. High-Resolution Export
              </h3>
              <p className="text-xs sm:text-sm text-[#697386] leading-relaxed">
                Download true 2400px 300 DPI PNGs ready for physical printing on flyers, business cards, and packaging, or infinite-resolution vector SVG for design software.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Overview */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Complete Feature Suite
            </span>
            <h2 className="mt-1 font-heading font-black text-3xl sm:text-4xl text-[#151827] tracking-tight">
              Everything You Need for Enterprise-Grade QRs
            </h2>
            <p className="mt-2 text-sm text-[#697386]">
              Every tool and customization control is completely unlocked with no account required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FC]/50 hover:bg-white hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#151827] mb-1.5">
                100% Client-Side Privacy
              </h4>
              <p className="text-xs text-[#697386] leading-relaxed">
                Your destination links and uploaded company logos never touch an external server. All canvas rendering happens locally in your browser memory.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FC]/50 hover:bg-white hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#151827] mb-1.5">
                7 Designer Presets
              </h4>
              <p className="text-xs text-[#697386] leading-relaxed">
                Choose from signature presets including Violet Glow, Modern Tech, Classic Pixel, Soft Dots, Minimal Black & White, Corporate Royal, and Cyber Cyan.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FC]/50 hover:bg-white hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                <FileCode className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#151827] mb-1.5">
                Vector SVG Export
              </h4>
              <p className="text-xs text-[#697386] leading-relaxed">
                Export clean, scalable SVG vector markup to import directly into Adobe Illustrator, Figma, Photoshop, or commercial printing RIP workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FC]/50 hover:bg-white hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#151827] mb-1.5">
                Phone Simulator
              </h4>
              <p className="text-xs text-[#697386] leading-relaxed">
                Preview your QR code on a simulated mobile smartphone screen before downloading to verify visual impact from the customer perspective.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FC]/50 hover:bg-white hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#151827] mb-1.5">
                Permanent Scannability
              </h4>
              <p className="text-xs text-[#697386] leading-relaxed">
                Generates static, direct QR codes with zero intermediary redirects. Your codes will never expire, break, or require ongoing subscription payments.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[#E5E7EB] bg-[#F7F8FC]/50 hover:bg-white hover:shadow-sm transition-all">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading font-bold text-base text-[#151827] mb-1.5">
                Level H Error Correction
              </h4>
              <p className="text-xs text-[#697386] leading-relaxed">
                High 30% Reed-Solomon redundancy ensures QR codes maintain fast scanning speeds even when center logos, wear, or lighting conditions degrade pixels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Callout Banner */}
      <section className="py-16 bg-[#F7F8FC] border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#151827]">
              Zero Tracking. Zero Server Uploads.
            </h3>

            <p className="text-xs sm:text-sm text-[#697386] max-w-xl mx-auto leading-relaxed">
              Your company assets and private URLs never leave your machine. Everything is computed within the HTML5 Canvas environment of your own browser.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/privacy"
                className="px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors"
              >
                Read Full Privacy Policy
              </Link>
              <Link
                to="/create"
                className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-500 to-electric-500 hover:from-brand-600 hover:to-electric-600 rounded-xl shadow-xs transition-all"
              >
                Launch QR Studio Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
