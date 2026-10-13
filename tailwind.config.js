/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#7047FF', // Primary Violet
          600: '#5F35E8',
          700: '#4D24D0',
          800: '#3D1AB0',
          900: '#2C108A',
        },
        electric: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#6366F1',
          500: '#3563FF', // Electric Blue
          600: '#2550E8',
          700: '#1D3ED0',
          800: '#152FB0',
          900: '#0F2188',
        },
        navy: '#111827',
        surface: {
          primary: '#FFFFFF',
          secondary: '#F7F8FC',
          border: '#E5E7EB',
          text: '#151827',
          muted: '#697386',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'premium': '0 10px 25px -5px rgba(112, 71, 255, 0.08), 0 8px 10px -6px rgba(112, 71, 255, 0.04)',
        'glow-brand': '0 0 25px -5px rgba(112, 71, 255, 0.28)',
        'glow-electric': '0 0 25px -5px rgba(53, 99, 255, 0.28)',
      }
    },
  },
  plugins: [],
}
