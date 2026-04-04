// TechnoHealth Design System
// Based on UI Design System Guidance from Product Journey Report

export const designSystem = {
  colors: {
    primary: {
      blue: '#1e40af', // Primary blue for headers/buttons
      darkBlue: '#1e3a8a',
      lightBlue: '#3b82f6',
    },
    accent: {
      green: '#16a34a', // Green accents for highlights/icons
      teal: '#14b8a6', // CTA accent
      orange: '#f97316', // Alternative CTA accent
    },
    neutral: {
      white: '#ffffff',
      gray50: '#f9fafb',
      gray100: '#f3f4f6',
      gray200: '#e5e7eb',
      gray300: '#d1d5db',
      gray400: '#9ca3af',
      gray500: '#6b7280',
      gray600: '#4b5563',
      gray700: '#374151',
      gray800: '#1f2937',
      gray900: '#111827',
    },
    state: {
      error: '#dc2626',
      success: '#16a34a',
      warning: '#f59e0b',
      info: '#3b82f6',
    },
  },

  typography: {
    fontFamily: {
      sans: '"Inter", "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    sizes: {
      h1: { size: '32px', weight: 700, lineHeight: 1.2 },
      h2: { size: '20px', weight: 600, lineHeight: 1.3 },
      h3: { size: '18px', weight: 600, lineHeight: 1.4 },
      body: { size: '12px', weight: 400, lineHeight: 1.5 },
      bodyLarge: { size: '14px', weight: 400, lineHeight: 1.6 },
      small: { size: '11px', weight: 400, lineHeight: 1.5 },
    },
    weights: {
      light: 300,
      normal: 400,
      semibold: 600,
      bold: 700,
    },
  },

  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    xxl: '3rem', // 48px
    xxxl: '4rem', // 64px
  },

  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },

  grid: {
    columns: 12,
    gutter: '24px',
  },

  components: {
    button: {
      primary: {
        bg: '#1e40af',
        hover: '#1e3a8a',
        text: '#ffffff',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontSize: '14px',
        fontWeight: 600,
      },
      secondary: {
        border: '2px solid #1e40af',
        bg: 'transparent',
        text: '#1e40af',
        hover: '#f3f4f6',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontSize: '14px',
        fontWeight: 600,
      },
    },
  },

  accessibility: {
    minContrast: 'AA', // WCAG 2.1 AA standard
    focusOutline: '2px solid #1e40af',
    focusOutlineOffset: '2px',
  },
};

export type DesignSystem = typeof designSystem;
