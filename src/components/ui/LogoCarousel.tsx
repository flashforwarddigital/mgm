import React from 'react';

interface LogoCarouselProps {
  className?: string;
}

// Financial services related words for GMG - now in UPPERCASE with Schabo X Condensed style
const CAROUSEL_WORDS = [
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
  'WEALTH MANAGEMENT'
];

export const LogoCarousel: React.FC<LogoCarouselProps> = ({ className = "" }) => {
  return (
    <section 
      className={`w-full relative z-20 ${className}`}
      style={{ 
        backgroundColor: '#22282A',
      }}
    >
      {/* Clean section without borders */}
      <div 
        className="w-full"
        style={{
          backgroundColor: '#22282A',
        }}
      >
        <div className="max-w-6xl mx-auto px-8 py-16">
          {/* Carousel container */}
          <div className="relative overflow-hidden">
            {/* Scrolling words with Schabo X Condensed font - Updated styling */}
            <div className="flex animate-scroll">
              {/* First set of words */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '220px', height: '80px' }}
                >
                  <span 
                    className="font-schabo whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300 uppercase"
                    style={{
                      color: '#66E8FA', // Blue color instead of white
                      fontSize: '2.5rem', // Smaller size - reduced from text-5xl (3rem) to 2.5rem
                    }}
                  >
                    {word}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '220px', height: '80px' }}
                >
                  <span 
                    className="font-schabo whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300 uppercase"
                    style={{
                      color: '#66E8FA', // Blue color instead of white
                      fontSize: '2.5rem', // Smaller size - reduced from text-5xl (3rem) to 2.5rem
                    }}
                  >
                    {word}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};