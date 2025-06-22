// Design System Configuration for GMG Financial Services
// This file contains all design tokens for easy customization

export const colors = {
  // Primary brand colors
  primary: {
    cyan: '#66E8FA',
    cyanHover: '#5dd8ea',
    dark: '#22282A',
    darkSecondary: '#394247',
  },
  
  // Section background colors - GMG Financial Services
  sections: {
    hero: '#22282A',              // Hero section - Dark professional
    aboutGMG: '#92A6B0',          // About GMG - Professional gray
    ourServices: '#66E8FA',       // Our Services - Bright cyan
    financialHealthCheck: '#E4EDF1', // Financial Health Check - Clean light
    statistics: '#22282A',        // Statistics - Dark for emphasis
    contactUs: '#66E8FA',         // Contact Us - Bright call-to-action
  },
  
  // Text colors
  text: {
    primary: '#22282a',
    secondary: '#394247',
    light: '#d5e1e7',
    muted: '#5f6f77',
    accent: '#92a6b0',
    neutral: '#b1c5ce',
  },
  
  // UI colors
  ui: {
    border: 'rgba(59,65,68,0.50)',
    overlay: 'rgba(57,66,71,0.50)',
  }
} as const;

export const typography = {
  // Font families
  families: {
    sans: 'system-ui, -apple-system, sans-serif',
    beanco: "'Dancing Script', cursive", // Beanco-style script font
  },
  
  // Font sizes - Responsive and scalable
  sizes: {
    xs: '14px',
    sm: '16px',
    base: '17.5px',
    lg: '19px',
    xl: '21px',
    '2xl': '22px',
    '3xl': '23px',
    '4xl': '25px',
    '5xl': '48px', // For carousel words
    hero: 'clamp(2.5rem, 5vw, 5.2rem)', // Responsive hero text
    heroMobile: '40px',
  },
  
  // Font weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  // Line heights
  lineHeights: {
    none: 1,
    tight: 1.2,
    normal: 1.5,
    loose: 1.75,
    hero: '1.1',
    heroMobile: '1.3',
  },
  
  // Letter spacing
  tracking: {
    tight: '-0.48px',
    normal: '-0.52px',
    wide: '-0.56px',
    wider: '-0.62px',
    widest: '-2.63px',
  }
} as const;

export const spacing = {
  // Standard spacing scale
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '32px',
  xl: '48px',
  '2xl': '64px',
  '3xl': '96px',
  '4xl': '128px',
  
  // Section-specific spacing - Optimized for full-width sections
  section: {
    paddingY: '8rem',        // 128px - Consistent vertical padding
    paddingYMobile: '4rem',  // 64px - Mobile vertical padding
    paddingX: '1rem',        // 16px - Minimal horizontal padding
    paddingXMobile: '1rem',  // 16px - Mobile horizontal padding
    gap: '4rem',             // 64px - Gap between section elements
  }
} as const;

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
} as const;

export const borderRadius = {
  sm: '10px',
  md: '13.79px',
  lg: '16.2px',
  xl: '21.89px',
  '2xl': '32.83px',
} as const;