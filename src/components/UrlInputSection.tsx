import React, { useState } from 'react';
import { Link2, ClipboardPaste, X, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { validateAndNormalizeUrl } from '../utils/validation';

interface UrlInputSectionProps {
  value: string;
  onChange: (url: string) => void;
}

const SAMPLE_URLS = [
  { label: '🌐 Virhino', url: 'https://www.virhino.com' },
  { label: '💼 LinkedIn', url: 'https://www.linkedin.com/in/vignesh220904/' },
  { label: '📸 Instagram', url: 'https://www.instagram.com/mass._.vignesh' },
  { label: '📍 Google Maps', url: 'https://maps.google.com/?q=Virhino' },
  { label: '🐙 GitHub', url: 'https://github.com/vignesh220904' },
];

export const UrlInputSection: React.FC<UrlInputSectionProps> = ({ value, onChange }) => {
  const [pasteNotice, setPasteNotice] = useState<string | null>(null);
  const validation = validateAndNormalizeUrl(value);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        onChange(text.trim());
        setPasteNotice('Pasted from clipboard!');
        setTimeout(() => setPasteNotice(null), 2500);
      }
    } catch {
      setPasteNotice('Please press Ctrl+V to paste');
      setTimeout(() => setPasteNotice(null), 2500);
    }
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <section className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs">
            1
          </div>
          <h2 className="font-heading font-bold text-base text-slate-900">
            Destination URL or Text
          </h2>
        </div>

        <button
          type="button"
          onClick={handlePaste}
          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 rounded-lg transition-colors border border-brand-200/50"
        >
          <ClipboardPaste className="w-3.5 h-3.5" />
          <span>Paste URL</span>
        </button>
      </div>

      {/* Input container */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Link2 className="w-5 h-5 text-brand-500" />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://yourwebsite.com/profile or enter text..."
          className={`w-full pl-11 pr-24 py-3 bg-slate-50/70 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 text-sm font-medium rounded-xl border transition-all outline-none focus:ring-4 ${
            validation.isValid
              ? 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/15'
              : 'border-rose-300 focus:border-rose-500 focus:ring-rose-500/15'
          }`}
        />

        <div className="absolute inset-y-0 right-0 pr-2 flex items-center gap-1">
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
              title="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {validation.isValid ? (
            <span className="p-1 text-emerald-600" title="Valid URL">
              <CheckCircle2 className="w-5 h-5" />
            </span>
          ) : (
            value && (
              <span className="p-1 text-rose-500" title={validation.errorMessage}>
                <AlertCircle className="w-5 h-5" />
              </span>
            )
          )}
        </div>
      </div>

      {/* Status / Validation note */}
      <div className="mt-2 flex items-center justify-between text-xs">
        {pasteNotice && (
          <span className="text-brand-600 font-semibold animate-pulse">
            ✓ {pasteNotice}
          </span>
        )}
        
        {!pasteNotice && validation.isValid && (
          <span className="text-emerald-600 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 inline" />
            Scannable URL ready to encode ({value.length} characters)
          </span>
        )}

        {!pasteNotice && !validation.isValid && value && (
          <span className="text-rose-600 font-medium flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 inline" />
            {validation.errorMessage}
          </span>
        )}

        {!value && (
          <span className="text-slate-400">
            Enter any valid website URL, social link, or digital business card.
          </span>
        )}
      </div>

      {/* Quick sample chips */}
      <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-brand-500" /> Samples:
        </span>
        {SAMPLE_URLS.map((sample) => (
          <button
            key={sample.label}
            type="button"
            onClick={() => onChange(sample.url)}
            className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-brand-700 bg-slate-100/80 hover:bg-brand-50 hover:border-brand-200 rounded-lg border border-transparent transition-all"
          >
            {sample.label}
          </button>
        ))}
      </div>
    </section>
  );
};
