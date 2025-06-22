// Carousel Configuration - Easy to edit all carousel settings in one place
export const carouselConfig = {
  // Animation settings - ULTRA SLOW
  animation: {
    duration: '180s', // Ultra slow - 3 minutes per cycle (was 90s, now doubled)
    timingFunction: 'linear',
    iterationCount: 'infinite',
    playState: 'running', // Can be 'paused' to stop
  },

  // Spacing settings - MAXIMUM SPACING
  spacing: {
    wordSpacing: '3rem', // Space between words (48px) - increased from 2.5rem
    letterSpacing: '0.25em', // Space between letters - increased from 0.2em
    minWordWidth: '220px', // Minimum width per word - increased from 200px
    containerHeight: '80px', // Height of carousel container
  },

  // Typography settings - ULTRA THIN
  typography: {
    fontSize: '1.8rem', // Size of text - increased slightly from 1.6rem
    fontWeight: '100', // Ultra thin - thinnest possible
    fontFamily: "'Barlow Condensed', 'Roboto Condensed', 'Oswald', sans-serif",
    textTransform: 'uppercase' as const,
    color: '#66E8FA',
  },

  // Position settings - BOTTOM OF SECTION
  position: {
    verticalPosition: 'bottom', // 'top', 'center', or 'bottom'
    marginTop: '0', // No top margin when at bottom
    marginBottom: '0', // No bottom margin
    paddingTop: '0', // No top padding
    paddingBottom: '2rem', // Small bottom padding (32px)
  },

  // Content - Financial services words
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
  ],

  // Seamless loop settings
  loop: {
    duplicateCount: 3, // How many times to duplicate words for seamless effect
    gapBetweenSets: '0px', // No gap between word sets
  }
} as const;