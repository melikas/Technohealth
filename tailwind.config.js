/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
        },
        g: {
          primary: '#1A73E8',
          'primary-hover': '#1765CC',
          'primary-pressed': '#1557B0',
          link: '#1A0DAB',
          surface: '#FFFFFF',
          'surface-alt': '#F8F9FA',
          footer: '#F2F2F2',
          chip: '#F1F3F4',
          text: '#202124',
          secondary: '#5F6368',
          tertiary: '#80868B',
          border: '#DADCE0',
          'border-strong': '#BDC1C6',
        },
      },
      fontFamily: {
        sans: ['Roboto', '"Google Sans"', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        gbtn: '24px',
        gcard: '8px',
        gchip: '16px',
      },
      boxShadow: {
        gsearch: '0 1px 6px rgba(32, 33, 36, 0.28)',
        gcard: '0 1px 2px 0 rgba(60, 64, 67, 0.30), 0 1px 3px 1px rgba(60, 64, 67, 0.15)',
        gelevated:
          '0 1px 3px 0 rgba(60, 64, 67, 0.30), 0 4px 8px 3px rgba(60, 64, 67, 0.15)',
      },
    },
  },
  plugins: [],
};
