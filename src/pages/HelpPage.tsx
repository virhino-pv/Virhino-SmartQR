import React from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  Printer,
  Smartphone,
  Sparkles,
  ArrowRight,
  Palette,
  Upload,
} from 'lucide-react';

export const HelpPage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/80 mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
          <span>Knowledge & Best Practices</span>
        </div>

        <h1 className="font-heading font-black text-3xl sm:text-5xl text-[#151827] tracking-tight">
          Help & Print Guide
        </h1>

        <p className="mt-3 text-sm sm:text-base text-[#697386]">
          Step-by-step guidance on designing scannable QR codes and preparing production files for print.
        </p>
      </div>

      {/* Guide Content Cards */}
      <div className="space-y-8">
        {/* Step 1: Quickstart */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h2 className="font-heading font-bold text-xl text-[#151827]">
              How to Create Your QR Code in 3 Steps
            </h2>
          </div>

          <ol className="list-decimal list-inside space-y-2 text-sm text-[#697386] ml-2 leading-relaxed">
            <li>
              <strong>Enter your destination URL:</strong> Type or paste any valid website address (e.g., <code>https://yourdomain.com</code>), social profile link, or text.
            </li>
            <li>
              <strong>Upload your brand logo (Optional):</strong> Select a transparent PNG or SVG icon. Virhino SmartQR automatically adds a contrast badge around it.
            </li>
            <li>
              <strong>Pick a preset or customize colors:</strong> Choose a preset such as Violet Glow or customize dots, corners, and caption text.
            </li>
          </ol>
        </div>

        {/* Logo Safety Rules */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-electric-50 text-electric-600 flex items-center justify-center font-bold text-sm">
              <Upload className="w-4 h-4" />
            </div>
            <h2 className="font-heading font-bold text-xl text-[#151827]">
              Logo Sizing & Safety Guidelines
            </h2>
          </div>

          <p className="text-sm text-[#697386] leading-relaxed">
            When you insert a logo in the center of a QR code, you are covering a percentage of the code's data modules. Follow these rules for flawless scanning:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#F7F8FC] border border-[#E5E7EB] space-y-1.5">
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Keep Logo Size at 18% – 22%
              </span>
              <p className="text-xs text-[#697386]">
                This is the optimal proportion for phone cameras to register finder patterns while prominently showing your brand mark.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F8FC] border border-[#E5E7EB] space-y-1.5">
              <span className="text-xs font-bold text-brand-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-600" />
                Always Use a White Badge
              </span>
              <p className="text-xs text-[#697386]">
                A solid white circular or square badge isolates your logo from adjacent QR data dots, preventing visual interference.
              </p>
            </div>
          </div>
        </div>

        {/* Contrast Guidelines */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center font-bold text-sm">
              <Palette className="w-4 h-4" />
            </div>
            <h2 className="font-heading font-bold text-xl text-[#151827]">
              Colour Contrast & Scanning Reliability
            </h2>
          </div>

          <p className="text-sm text-[#697386] leading-relaxed">
            Smartphone cameras depend on high optical contrast to detect the finder pattern corners:
          </p>

          <ul className="space-y-2.5 text-sm text-[#697386]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Dark Foreground on Light Background:</strong> Always keep dots darker than the background canvas. Standard white background with dark violet/electric blue modules is ideal.</span>
            </li>
            <li className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>Avoid Low Contrast Combinations:</strong> Never use light yellow or light gray on white, nor dark navy on black.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Quiet Zone Padding:</strong> Maintain at least a 16px white quiet zone around the QR code so surrounding artwork does not bleed into the matrix.</span>
            </li>
          </ul>
        </div>

        {/* Print 300 DPI Sizing Table */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
              <Printer className="w-4 h-4" />
            </div>
            <h2 className="font-heading font-bold text-xl text-[#151827]">
              Physical Print Sizing & 300 DPI Export
            </h2>
          </div>

          <p className="text-sm text-[#697386] leading-relaxed">
            Virhino SmartQR exports print masters at <strong>2400 × 2400 pixels</strong> (or scalable vector SVG). At commercial print standards (300 Dots Per Inch), 2400 pixels produces an ultra-crisp physical size of up to 8 × 8 inches (20 × 20 cm) with zero pixelation:
          </p>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-xs text-left text-[#151827] border border-[#E5E7EB] rounded-xl overflow-hidden">
              <thead className="bg-[#F7F8FC] uppercase tracking-wider text-[#697386] font-semibold border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-4 py-3">Use Case</th>
                  <th className="px-4 py-3">Minimum Physical Size</th>
                  <th className="px-4 py-3">Recommended Export</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr>
                  <td className="px-4 py-3 font-semibold">Business Cards / Badges</td>
                  <td className="px-4 py-3">2 × 2 cm (0.8 × 0.8 in)</td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">Print PNG (300 DPI) or SVG</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Restaurant Table Tents & Menus</td>
                  <td className="px-4 py-3">4 × 4 cm (1.6 × 1.6 in)</td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">Print PNG (300 DPI)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Flyers & Posters</td>
                  <td className="px-4 py-3">6 × 6 cm (2.4 × 2.4 in)</td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">Print PNG (300 DPI) or SVG</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Window Decals & Billboards</td>
                  <td className="px-4 py-3">25 × 25 cm (10+ in)</td>
                  <td className="px-4 py-3 text-brand-600 font-semibold">SVG Vector (Infinite Scalability)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Pre-Print Camera Test Checklist */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB] shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
              <Smartphone className="w-4 h-4" />
            </div>
            <h2 className="font-heading font-bold text-xl text-[#151827]">
              Pre-Print Camera Verification Checklist
            </h2>
          </div>

          <p className="text-sm text-[#697386] leading-relaxed">
            Before sending artwork for commercial bulk printing:
          </p>

          <ul className="space-y-2 text-sm text-[#697386]">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verify that the Live Studio shows "Real-Time Scan Verified".</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Print a single proof on office paper at 100% scale.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Scan from a standard distance (8–12 inches) with an iPhone and Android phone.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Confirm that the destination URL opens immediately.</span>
            </li>
          </ul>

          <div className="pt-4 border-t border-[#E5E7EB]">
            <Link
              to="/create"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-electric-500 text-white font-bold text-sm shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Open QR Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
