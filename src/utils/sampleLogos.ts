export interface SampleLogo {
  id: string;
  name: string;
  category: string;
  svgDataUrl: string;
}

const createSvgDataUrl = (svgContent: string): string => {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
};

export const SAMPLE_LOGOS: SampleLogo[] = [
  {
    id: 'virhino',
    name: 'Virhino Rhino',
    category: 'Brand',
    svgDataUrl: '/brand/logo-icon.png',
  },
  {
    id: 'lightning',
    name: 'Flash Tech',
    category: 'Tech',
    svgDataUrl: createSvgDataUrl(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#7c3aed" />
            <stop offset="100%" stop-color="#2563eb" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#g1)" />
        <path d="M54 18 L32 50 L48 50 L44 82 L70 46 L52 46 Z" fill="#ffffff" />
      </svg>
    `)
  },
  {
    id: 'sparkle',
    name: 'Sparkle Star',
    category: 'Creative',
    svgDataUrl: createSvgDataUrl(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8b5cf6" />
            <stop offset="100%" stop-color="#ec4899" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#g2)" />
        <path d="M50 20 Q50 50 20 50 Q50 50 50 80 Q50 50 80 50 Q50 50 50 20 Z" fill="#ffffff" />
        <circle cx="68" cy="32" r="5" fill="#ffffff" opacity="0.9" />
      </svg>
    `)
  },
  {
    id: 'globe',
    name: 'Global Web',
    category: 'Business',
    svgDataUrl: createSvgDataUrl(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0284c7" />
            <stop offset="100%" stop-color="#2563eb" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#g3)" />
        <circle cx="50" cy="50" r="30" stroke="#ffffff" stroke-width="4" fill="none" />
        <ellipse cx="50" cy="50" rx="14" ry="30" stroke="#ffffff" stroke-width="4" fill="none" />
        <line x1="20" y1="50" x2="80" y2="50" stroke="#ffffff" stroke-width="4" />
      </svg>
    `)
  },
  {
    id: 'cube',
    name: '3D Matrix',
    category: 'Crypto',
    svgDataUrl: createSvgDataUrl(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4f46e5" />
            <stop offset="100%" stop-color="#06b6d4" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#g4)" />
        <polygon points="50,24 76,38 76,66 50,80 24,66 24,38" fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round"/>
        <line x1="50" y1="52" x2="50" y2="80" stroke="#ffffff" stroke-width="4"/>
        <line x1="50" y1="52" x2="76" y2="38" stroke="#ffffff" stroke-width="4"/>
        <line x1="50" y1="52" x2="24" y2="38" stroke="#ffffff" stroke-width="4"/>
      </svg>
    `)
  },
  {
    id: 'heart',
    name: 'Heart Brand',
    category: 'Social',
    svgDataUrl: createSvgDataUrl(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
        <defs>
          <linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#e11d48" />
            <stop offset="100%" stop-color="#7c3aed" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#g5)" />
        <path d="M50 72 C50 72 26 56 26 40 C26 28 36 24 43 28 C47 30 50 34 50 34 C50 34 53 30 57 28 C64 24 74 28 74 40 C74 56 50 72 50 72 Z" fill="#ffffff" />
      </svg>
    `)
  }
];
