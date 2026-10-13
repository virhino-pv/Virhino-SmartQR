import React, { useState } from 'react';
import type {
  DotType,
  CornerSquareType,
  CornerDotType,
  GradientType,
  FrameStyle,
  ErrorCorrectionLevel,
  QRConfig,
} from '../types/qr';
import {
  Palette,
  Shapes,
  Frame,
  CheckCircle2,
  Wand2,
  Sliders,
} from 'lucide-react';

interface CustomizerTabsProps {
  config: QRConfig;
  onChange: (updated: Partial<QRConfig>) => void;
  onOptimize: () => void;
}

type TabKey = 'shapes' | 'colors' | 'frame' | 'advanced';

const COLOR_SWATCHES = [
  { name: 'Signature Violet & Blue', primary: '#7047FF', secondary: '#3563FF' },
  { name: 'Electric Cyan & Violet', primary: '#06b6d4', secondary: '#7047FF' },
  { name: 'Royal Navy & Blue', primary: '#111827', secondary: '#3563FF' },
  { name: 'Emerald & Teal', primary: '#059669', secondary: '#0d9488' },
  { name: 'Sunset Crimson & Violet', primary: '#e11d48', secondary: '#7047FF' },
  { name: 'Pitch Black & Slate', primary: '#111827', secondary: '#475569' },
];

export const CustomizerTabs: React.FC<CustomizerTabsProps> = ({
  config,
  onChange,
  onOptimize,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('shapes');

  return (
    <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all hover:shadow-md">
      {/* Tab Navigation Header */}
      <div className="flex border-b border-slate-200/80 bg-slate-50/60 p-1.5 gap-1 overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveTab('shapes')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'shapes'
              ? 'bg-white text-brand-700 shadow-sm border border-slate-200/80'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Shapes className="w-3.5 h-3.5" />
          <span>Pattern & Corners</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('colors')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'colors'
              ? 'bg-white text-brand-700 shadow-sm border border-slate-200/80'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>Colors & Gradients</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('frame')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'frame'
              ? 'bg-white text-brand-700 shadow-sm border border-slate-200/80'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Frame className="w-3.5 h-3.5" />
          <span>Frame & Caption</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('advanced')}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === 'advanced'
              ? 'bg-white text-brand-700 shadow-sm border border-slate-200/80'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Reliability & Print</span>
        </button>
      </div>

      <div className="p-5">
        {/* TAB 1: SHAPES & CORNERS */}
        {activeTab === 'shapes' && (
          <div className="space-y-5">
            {/* Dot Modules Style */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  QR Data Pattern (Modules)
                </label>
                <span className="text-xs text-slate-400 capitalize">{config.dotType}</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {(
                  [
                    { id: 'dots', label: 'Dots', desc: 'Modern circular' },
                    { id: 'rounded', label: 'Rounded', desc: 'Smooth curved' },
                    { id: 'classy', label: 'Classy', desc: 'Diamond subtle' },
                    { id: 'classy-rounded', label: 'Classy Round', desc: 'Elegant blend' },
                    { id: 'extra-rounded', label: 'Squircle', desc: 'Soft pill' },
                    { id: 'square', label: 'Square', desc: 'Crisp classic' },
                  ] as { id: DotType; label: string; desc: string }[]
                ).map((dot) => (
                  <button
                    key={dot.id}
                    type="button"
                    onClick={() => onChange({ dotType: dot.id })}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      config.dotType === dot.id
                        ? 'border-brand-600 bg-brand-50/70 text-brand-800 ring-2 ring-brand-500/15 font-bold shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-slate-50/50 text-slate-700'
                    }`}
                  >
                    <div className="text-xs">{dot.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Corner Finder Patterns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              {/* Corner Square Style */}
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Corner Outer Ring
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(
                    [
                      { id: 'extra-rounded', label: 'Rounded' },
                      { id: 'dot', label: 'Circle' },
                      { id: 'square', label: 'Square' },
                    ] as { id: CornerSquareType; label: string }[]
                  ).map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => onChange({ cornerSquareType: c.id })}
                      className={`p-2 rounded-xl border text-xs text-center transition-all ${
                        config.cornerSquareType === c.id
                          ? 'border-brand-600 bg-brand-50 text-brand-800 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Corner Center Dot Style */}
              <div>
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Corner Inner Dot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      { id: 'dot', label: 'Circle Dot' },
                      { id: 'square', label: 'Square Dot' },
                    ] as { id: CornerDotType; label: string }[]
                  ).map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => onChange({ cornerDotType: d.id })}
                      className={`p-2 rounded-xl border text-xs text-center transition-all ${
                        config.cornerDotType === d.id
                          ? 'border-brand-600 bg-brand-50 text-brand-800 font-bold'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COLORS & GRADIENTS */}
        {activeTab === 'colors' && (
          <div className="space-y-5">
            {/* Color Mode Selector */}
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                Color Mode
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(
                  [
                    { id: 'linear', label: 'Linear Gradient' },
                    { id: 'radial', label: 'Radial Gradient' },
                    { id: 'none', label: 'Solid Single Color' },
                  ] as { id: GradientType; label: string }[]
                ).map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => onChange({ colorType: mode.id })}
                    className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      config.colorType === mode.id
                        ? 'border-brand-600 bg-brand-50 text-brand-800 ring-2 ring-brand-500/15'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Palette Swatches */}
            <div>
              <span className="text-xs font-medium text-slate-600 block mb-2">
                Curated Color Palettes:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {COLOR_SWATCHES.map((swatch) => (
                  <button
                    key={swatch.name}
                    type="button"
                    onClick={() =>
                      onChange({
                        primaryColor: swatch.primary,
                        secondaryColor: swatch.secondary,
                        cornerSquareColor: swatch.primary,
                        cornerDotColor: swatch.secondary,
                        frameColor: swatch.primary,
                      })
                    }
                    className="flex items-center gap-2 p-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-white text-left transition-all"
                  >
                    <span
                      className="w-5 h-5 rounded-lg shrink-0 shadow-xs border border-white"
                      style={{
                        background: `linear-gradient(135deg, ${swatch.primary}, ${swatch.secondary})`,
                      }}
                    />
                    <span className="text-[11px] font-medium text-slate-700 truncate">
                      {swatch.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Hex Color Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
              {/* Primary Color */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                  Primary Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={config.primaryColor}
                    onChange={(e) =>
                      onChange({
                        primaryColor: e.target.value,
                        cornerSquareColor: e.target.value,
                      })
                    }
                    className="w-8 h-8 rounded-lg cursor-pointer border border-slate-300 bg-white p-0.5"
                  />
                  <input
                    type="text"
                    value={config.primaryColor}
                    onChange={(e) => onChange({ primaryColor: e.target.value })}
                    className="w-20 px-2 py-1 text-xs font-mono bg-white border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Secondary Color (for gradient) */}
              {config.colorType !== 'none' && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                    Secondary Gradient Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={config.secondaryColor}
                      onChange={(e) =>
                        onChange({
                          secondaryColor: e.target.value,
                          cornerDotColor: e.target.value,
                        })
                      }
                      className="w-8 h-8 rounded-lg cursor-pointer border border-slate-300 bg-white p-0.5"
                    />
                    <input
                      type="text"
                      value={config.secondaryColor}
                      onChange={(e) => onChange({ secondaryColor: e.target.value })}
                      className="w-20 px-2 py-1 text-xs font-mono bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {/* Background Color */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <label className="text-[11px] font-bold text-slate-600 block mb-1.5">
                  Background Color
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={config.backgroundColor === 'transparent' ? '#ffffff' : config.backgroundColor}
                    onChange={(e) => onChange({ backgroundColor: e.target.value })}
                    className="w-8 h-8 rounded-lg cursor-pointer border border-slate-300 bg-white p-0.5"
                  />
                  <input
                    type="text"
                    value={config.backgroundColor}
                    onChange={(e) => onChange({ backgroundColor: e.target.value })}
                    className="w-20 px-2 py-1 text-xs font-mono bg-white border border-slate-300 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Gradient Angle Slider if Linear */}
            {config.colorType === 'linear' && (
              <div>
                <div className="flex items-center justify-between text-xs text-slate-600 mb-1 font-medium">
                  <span>Gradient Direction Angle</span>
                  <span className="font-mono font-semibold">{config.gradientAngle}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="15"
                  value={config.gradientAngle}
                  onChange={(e) => onChange({ gradientAngle: parseInt(e.target.value, 10) })}
                  className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
              </div>
            )}
          </div>
        )}

        {/* TAB 3: FRAME & CAPTION */}
        {activeTab === 'frame' && (
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                Frame & Badge Presentation
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(
                  [
                    { id: 'scan-me-bottom', label: 'Bottom Pill ("SCAN ME")', desc: 'Most popular call-to-action' },
                    { id: 'card-border', label: 'Card Frame', desc: 'Minimalist clean border' },
                    { id: 'polaroid', label: 'Polaroid Card', desc: 'Frame with wide caption' },
                    { id: 'none', label: 'None (Pure QR)', desc: 'Direct scannable matrix' },
                  ] as { id: FrameStyle; label: string; desc: string }[]
                ).map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => onChange({ frameStyle: f.id })}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      config.frameStyle === f.id
                        ? 'border-brand-600 bg-brand-50 text-brand-800 font-bold ring-2 ring-brand-500/15'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs">{f.label}</div>
                    <div className="text-[10px] text-slate-400 font-normal mt-0.5">{f.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {config.frameStyle !== 'none' && (
              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Frame Call-to-Action Text / Caption
                  </label>
                  <input
                    type="text"
                    value={config.captionText}
                    onChange={(e) => onChange({ captionText: e.target.value })}
                    placeholder="SCAN ME, VISIT WEBSITE, VIEW MENU..."
                    maxLength={32}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold tracking-wider text-slate-900 outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-600">Frame Color:</span>
                    <input
                      type="color"
                      value={config.frameColor}
                      onChange={(e) => onChange({ frameColor: e.target.value })}
                      className="w-7 h-7 rounded-lg cursor-pointer border border-slate-300 p-0.5"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-600">Text Color:</span>
                    <input
                      type="color"
                      value={config.frameTextColor}
                      onChange={(e) => onChange({ frameTextColor: e.target.value })}
                      className="w-7 h-7 rounded-lg cursor-pointer border border-slate-300 p-0.5"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: RELIABILITY & PRINT */}
        {activeTab === 'advanced' && (
          <div className="space-y-5">
            {/* Auto-Optimize Highlight */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-brand-50 via-electric-50 to-brand-50 border border-brand-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-heading font-bold text-sm text-brand-900 flex items-center gap-1.5">
                  <Wand2 className="w-4 h-4 text-brand-600" />
                  Auto-Optimize for 100% Scan Reliability
                </h4>
                <p className="text-xs text-brand-700/80 mt-0.5">
                  Applies Level H error correction (30% redundancy), safe 22% logo scale, and high-contrast styling.
                </p>
              </div>

              <button
                type="button"
                onClick={onOptimize}
                className="shrink-0 px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-electric-600 hover:from-brand-700 hover:to-electric-700 rounded-xl shadow-sm transition-all"
              >
                Apply Optimization
              </button>
            </div>

            {/* Error Correction Setting */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Error Correction Level
                </label>
                <span className="text-xs font-semibold text-brand-600">
                  {config.errorCorrectionLevel === 'H' ? 'Recommended for Logos' : ''}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(
                  [
                    { id: 'H', label: 'Level H (30%)', desc: 'Highest recovery — Best for logos' },
                    { id: 'Q', label: 'Level Q (25%)', desc: 'High recovery' },
                    { id: 'M', label: 'Level M (15%)', desc: 'Medium standard' },
                    { id: 'L', label: 'Level L (7%)', desc: 'Low density' },
                  ] as { id: ErrorCorrectionLevel; label: string; desc: string }[]
                ).map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => onChange({ errorCorrectionLevel: lvl.id })}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      config.errorCorrectionLevel === lvl.id
                        ? 'border-brand-600 bg-brand-50 text-brand-800 font-bold ring-2 ring-brand-500/15'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs">{lvl.label}</div>
                    <div className="text-[10px] text-slate-400 font-normal mt-0.5">{lvl.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quiet Zone Margin */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-600 mb-1 font-medium">
                <span>Quiet Zone Margin (Outer Padding)</span>
                <span className="font-mono font-semibold">{config.margin}px</span>
              </div>
              <input
                type="range"
                min="8"
                max="32"
                step="4"
                value={config.margin}
                onChange={(e) => onChange({ margin: parseInt(e.target.value, 10) })}
                className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer"
              />
              <p className="text-[10px] text-slate-400 mt-1">
                A quiet zone of at least 16px ensures phone cameras easily distinguish the QR code from surrounding backgrounds.
              </p>
            </div>

            {/* Print advice */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                <strong>Print Tip:</strong> For business cards and flyers, we recommend downloading the <strong>Print PNG (2400px • 300 DPI)</strong> or <strong>SVG Vector</strong> to ensure razor-sharp edges without pixelation.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
