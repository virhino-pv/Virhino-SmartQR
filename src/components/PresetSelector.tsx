import React from 'react';
import type { PresetId } from '../types/qr';
import { QR_PRESETS } from '../utils/qrPresets';
import { Sparkles, Check } from 'lucide-react';

interface PresetSelectorProps {
  currentPresetId?: PresetId;
  onSelectPreset: (presetId: PresetId) => void;
}

export const PresetSelector: React.FC<PresetSelectorProps> = ({
  currentPresetId,
  onSelectPreset,
}) => {
  return (
    <section className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
            3
          </div>
          <div>
            <h2 className="font-heading font-bold text-base text-slate-900">
              Smart Style Presets
            </h2>
          </div>
        </div>

        <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-brand-500" />
          Click to apply instantly
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {QR_PRESETS.map((preset) => {
          const isSelected = currentPresetId === preset.id;
          return (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset.id)}
              className={`relative p-3 rounded-xl text-left border transition-all flex flex-col justify-between group overflow-hidden ${
                isSelected
                  ? 'border-brand-600 bg-brand-50/60 ring-2 ring-brand-500/20 shadow-sm'
                  : 'border-slate-200 hover:border-brand-300 bg-slate-50/50 hover:bg-white'
              }`}
            >
              {isSelected && (
                <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-brand-600 text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              )}

              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{
                      background:
                        preset.config.colorType === 'linear'
                          ? `linear-gradient(135deg, ${preset.config.primaryColor}, ${preset.config.secondaryColor})`
                          : preset.config.primaryColor || '#000000',
                    }}
                  />
                  <span className="font-heading font-bold text-xs text-slate-900 truncate">
                    {preset.name}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                  {preset.tagline}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-brand-700 bg-white px-1.5 py-0.5 rounded border border-slate-200/80">
                  {preset.badge}
                </span>
                <span className="text-[10px] text-slate-400 group-hover:text-brand-600 font-medium transition-colors">
                  {isSelected ? 'Active' : 'Apply'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
