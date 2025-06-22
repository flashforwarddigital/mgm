// Design System Configuration
// This file contains all design tokens for easy customization

export const colors = {
  // Primary brand colors
  primary: {
    cyan: '#66E8FA',
    cyanHover: '#5dd8ea',
    dark: '#22282A',
    darkSecondary: '#394247',
  },
  
  // Section background colors
  sections: {
    hero: '#22282A',
    capabilities: '#92A6B0',
    mvnoLaunchpad: '#66E8FA',
    interface: '#22282A',
    awards: '#E4EDF1',
    vision: '#66E8FA',
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
  // Font sizes
  sizes: {
    xs: '14px',
    sm: '16px',
    base: '17.5px',
    lg: '19px',
    xl: '21px',
    '2xl': '22px',
    '3xl': '23px',
    '4xl': '25px',
    hero: '83px',
    heroMobile: '40px',
  },
  
  // Font weights
  weights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800,
  },
  
  // Line heights
  lineHeights: {
    none: 1,
    tight: 1.2,
    normal: 1.5,
    loose: 1.75,
    hero: '96px',
    heroMobile: '51px',
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
  
  // Section-specific spacing
  section: {
    paddingY: '174px',
    paddingYMobile: '100px',
    paddingX: '80px',
    paddingXMobile: '20px',
    gap: '65.66px',
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