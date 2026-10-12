import { useState } from 'react';
import { Header } from './components/Header';
import { UrlInputSection } from './components/UrlInputSection';
import { LogoUploadSection } from './components/LogoUploadSection';
import { PresetSelector } from './components/PresetSelector';
import { CustomizerTabs } from './components/CustomizerTabs';
import { QRPreviewCard } from './components/QRPreviewCard';
import { ReliabilityGuide } from './components/ReliabilityGuide';
import { FounderSection } from './components/FounderSection';
import { AboutModal } from './components/AboutModal';
import { PrivacyModal } from './components/PrivacyModal';
import { Footer } from './components/Footer';
import type { QRConfig, PresetId, LogoBadgeShape } from './types/qr';
import { DEFAULT_CONFIG, QR_PRESETS } from './utils/qrPresets';
import { Sparkles, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<QRConfig>(DEFAULT_CONFIG);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleUrlChange = (url: string) => {
    setConfig((prev) => ({ ...prev, url }));
  };

  const handleLogoChange = (logoUrl: string | null, logoFileName: string | null) => {
    setConfig((prev) => ({
      ...prev,
      logoUrl,
      logoFileName,
      // If adding a logo, automatically set Level H error correction and safe circular badge
      errorCorrectionLevel: logoUrl ? 'H' : prev.errorCorrectionLevel,
      logoBadgeShape: logoUrl ? 'circle' : prev.logoBadgeShape,
      logoBadgeColor: '#ffffff',
    }));
  };

  const handleLogoSizeChange = (logoSize: number) => {
    setConfig((prev) => ({ ...prev, logoSize }));
  };

  const handleLogoMarginChange = (logoMargin: number) => {
    setConfig((prev) => ({ ...prev, logoMargin }));
  };

  const handleBadgeShapeChange = (logoBadgeShape: LogoBadgeShape) => {
    setConfig((prev) => ({ ...prev, logoBadgeShape }));
  };

  const handleBadgeColorChange = (logoBadgeColor: string) => {
    setConfig((prev) => ({ ...prev, logoBadgeColor }));
  };

  const handleSelectPreset = (presetId: PresetId) => {
    const selected = QR_PRESETS.find((p) => p.id === presetId);
    if (!selected) return;

    setConfig((prev) => ({
      ...prev,
      ...selected.config,
      presetId,
    }));
  };

  const handleCustomizerChange = (updated: Partial<QRConfig>) => {
    setConfig((prev) => ({
      ...prev,
      ...updated,
      presetId: undefined, // Custom changes supersede default presets
    }));
  };

  const handleOptimizeForReliability = () => {
    setConfig((prev) => ({
      ...prev,
      errorCorrectionLevel: 'H',
      logoSize: Math.min(prev.logoSize, 0.22),
      logoMargin: 4,
      logoBadgeShape: 'circle',
      logoBadgeColor: '#ffffff',
      backgroundColor: '#ffffff',
      margin: Math.max(prev.margin, 16),
      primaryColor: prev.primaryColor === '#ffffff' ? '#7c3aed' : prev.primaryColor,
    }));
  };

  const handleReset = () => {
    if (window.confirm('Reset all settings to Virhino defaults?')) {
      setConfig(DEFAULT_CONFIG);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbff] selection:bg-brand-500 selection:text-white">
      {/* Top Header */}
      <Header
        onReset={handleReset}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Hero Headline */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200/80 shadow-xs mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Virhino SmartQR • 100% Free & No Sign-up Needed</span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            Virhino <span className="gradient-text">SmartQR</span> Studio
          </h1>

          <p className="mt-2.5 text-sm sm:text-base font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Scan Smarter — Create high-resolution custom QR codes with your center logo, electric blue & violet gradients, and instant automated scan verification.
          </p>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-bold text-slate-500">
            <span>Powered by</span>
            <a
              href="https://www.virhino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 hover:underline"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Virhino (www.virhino.com)</span>
            </a>
          </div>

          {/* Quick value props */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-brand-600" /> Instant Real-Time Preview
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Optical Camera Decode Check
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-electric-600" /> 300 DPI Print PNG & Vector SVG
            </span>
          </div>
        </div>

        {/* Responsive Two-Column Generator Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Generator Steps (Inputs & Customization) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Destination URL */}
            <UrlInputSection value={config.url} onChange={handleUrlChange} />

            {/* Step 2: Center Logo */}
            <LogoUploadSection
              logoUrl={config.logoUrl}
              logoFileName={config.logoFileName}
              logoSize={config.logoSize}
              logoMargin={config.logoMargin}
              logoBadgeShape={config.logoBadgeShape}
              logoBadgeColor={config.logoBadgeColor}
              onLogoChange={handleLogoChange}
              onLogoSizeChange={handleLogoSizeChange}
              onLogoMarginChange={handleLogoMarginChange}
              onBadgeShapeChange={handleBadgeShapeChange}
              onBadgeColorChange={handleBadgeColorChange}
            />

            {/* Step 3: Presets */}
            <PresetSelector
              currentPresetId={config.presetId}
              onSelectPreset={handleSelectPreset}
            />

            {/* Step 4: Fine Tuning Customizer Tabs */}
            <CustomizerTabs
              config={config}
              onChange={handleCustomizerChange}
              onOptimize={handleOptimizeForReliability}
            />
          </div>

          {/* Right Column: Live Sticky Preview & Download Actions */}
          <div className="lg:col-span-5">
            <QRPreviewCard
              config={config}
              onOptimize={handleOptimizeForReliability}
            />
          </div>
        </div>

        {/* Founder Section */}
        <FounderSection />

        {/* Bottom Reliability Guide */}
        <ReliabilityGuide />
      </main>

      {/* Footer */}
      <Footer
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Modals */}
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}
