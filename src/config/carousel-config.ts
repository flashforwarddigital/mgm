// Simple Carousel Configuration - All settings in one place
export const carouselConfig = {
  // Animation settings - MUCH SLOWER
  speed: '300s', // 5 minutes per cycle - ULTRA SLOW
  
  // Spacing settings
  wordSpacing: '4rem', // Space between words (64px)
  letterSpacing: '0.3em', // Space between letters
  
  // Typography
  fontSize: '2rem',
  fontWeight: '100', // Ultra thin
  color: '#66E8FA',
  
  // Position
  position: 'bottom', // bottom of carousel section
  
  // Content - Financial terms
  words: [
    'BUDGETING',
    'CASH FLOW', 
    'BUSINESS GROWTH',
    'LENDING',
    'INVESTMENT',
    'STRUCTURING',
    'STRATEGY',
    'ADVISORY',
    'HEALTH CHECK',
    'REFINANCING',
    'PLANNING',
    'WEALTH MANAGEMENT',
    'FORECASTING',
    'ANALYSIS',
    'CONSULTING',
    'OPTIMIZATION'
  ]
} as const;