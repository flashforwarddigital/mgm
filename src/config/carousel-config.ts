// Carousel Configuration - Easy to edit all carousel settings in one place
export const carouselConfig = {
  // Animation settings - EXTREMELY SLOW
  animation: {
    duration: '300s', // EXTREMELY slow - 5 minutes per cycle (increased from 180s)
    timingFunction: 'linear',
    iterationCount: 'infinite',
    playState: 'running', // Can be 'paused' to stop
  },

  // Spacing settings - MAXIMUM SPACING
  spacing: {
    wordSpacing: '4rem', // Space between words (64px) - increased from 3rem
    letterSpacing: '0.3em', // Space between letters - increased from 0.25em
    minWordWidth: '280px', // Minimum width per word - increased from 220px
    containerHeight: '100px', // Height of carousel container - increased from 80px
  },

  // Typography settings - ULTRA THIN
  typography: {
    fontSize: '2rem', // Size of text - increased from 1.8rem
    fontWeight: '100', // Ultra thin - thinnest possible
    fontFamily: "'Barlow Condensed', 'Roboto Condensed', 'Oswald', sans-serif",
    textTransform: 'uppercase' as const,
    color: '#66E8FA',
  },

  // Position settings - VERY BOTTOM OF SECTION
  position: {
    verticalPosition: 'bottom', // 'top', 'center', or 'bottom'
    marginTop: '0', // No top margin when at bottom
    marginBottom: '0', // No bottom margin
    paddingTop: '0', // No top padding
    paddingBottom: '4rem', // Increased bottom padding (64px) - was 2rem
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
    duplicateCount: 4, // Increased from 3 for even smoother loop
    gapBetweenSets: '0px', // No gap between word sets
  }
} as const;