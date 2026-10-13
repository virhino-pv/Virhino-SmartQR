import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UrlInputSection } from '../components/UrlInputSection';
import { LogoUploadSection } from '../components/LogoUploadSection';
import { PresetSelector } from '../components/PresetSelector';
import { CustomizerTabs } from '../components/CustomizerTabs';
import { QRPreviewCard } from '../components/QRPreviewCard';
import type { QRConfig, PresetId, LogoBadgeShape } from '../types/qr';
import { DEFAULT_CONFIG, QR_PRESETS } from '../utils/qrPresets';
import { ArrowLeft, RotateCcw, HelpCircle } from 'lucide-react';

export const StudioPage: React.FC = () => {
  const [config, setConfig] = useState<QRConfig>(DEFAULT_CONFIG);

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
      logoSize: logoUrl ? Math.min(prev.logoSize, 0.22) : prev.logoSize,
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
      logoSize: Math.min(prev.logoSize, 0.20),
      logoMargin: 3,
      logoBadgeShape: 'circle',
      logoBadgeColor: '#ffffff',
      backgroundColor: '#ffffff',
      margin: Math.max(prev.margin, 16),
      primaryColor: prev.primaryColor === '#ffffff' ? '#7047FF' : prev.primaryColor,
    }));
  };

  const handleReset = () => {
    if (window.confirm('Reset all settings to Virhino defaults?')) {
      setConfig(DEFAULT_CONFIG);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Studio Workspace Header Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#E5E7EB]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#697386] hover:text-brand-600 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200/60">
              QR Studio
            </span>
          </div>

          <h1 className="font-heading font-black text-2xl sm:text-3xl text-[#151827] tracking-tight">
            Virhino <span className="gradient-text">SmartQR</span> Studio
          </h1>
          <p className="text-xs sm:text-sm text-[#697386] font-medium mt-0.5">
            Configure data, brand logo, and gradients with real-time optical scan validation.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto">
          <Link
            to="/help"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#697386] hover:text-[#151827] bg-white hover:bg-[#F7F8FC] rounded-xl border border-[#E5E7EB] transition-colors shadow-xs"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand-600" />
            <span className="hidden sm:inline">Guide</span>
          </Link>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#697386] hover:text-[#151827] bg-white hover:bg-[#F7F8FC] rounded-xl border border-[#E5E7EB] transition-colors shadow-xs"
            title="Reset configuration to default"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
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
    </div>
  );
};
