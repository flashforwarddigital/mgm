import React from 'react';

interface LogoCarouselProps {
  className?: string;
}

// Financial services related words for GMG - now in UPPERCASE with ultra-thin condensed style
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
          {/* Carousel container - positioned at the very bottom of the section */}
          <div className="relative overflow-hidden mt-16 mb-0">
            {/* Scrolling words with ultra-thin condensed font - Ultra slow infinite seamless loop */}
            <div className="animate-scroll-infinite">
              {/* First set of words - maximum spacing between words */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-10 flex items-center justify-center" /* Increased mx from 8 to 10 for maximum word spacing */
                  style={{ minWidth: '200px', height: '60px' }} /* Increased minWidth from 180px to 200px */
                >
                  <span 
                    className="font-din-condensed whitespace-nowrap hover:opacity-80 transition-opacity duration-300 uppercase"
                    style={{
                      color: '#66E8FA', // Blue color
                      fontSize: '1.6rem', // Same size
                    }}
                  >
                    {word}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless infinite loop - ensures no blank spaces */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-10 flex items-center justify-center" /* Increased mx from 8 to 10 for maximum word spacing */
                  style={{ minWidth: '200px', height: '60px' }} /* Increased minWidth from 180px to 200px */
                >
                  <span 
                    className="font-din-condensed whitespace-nowrap hover:opacity-80 transition-opacity duration-300 uppercase"
                    style={{
                      color: '#66E8FA', // Blue color
                      fontSize: '1.6rem', // Same size
                    }}
                  >
                    {word}
                  </span>
                </div>
              ))}
              {/* Third set for extra seamless connection - eliminates any gaps */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`third-${index}`}
                  className="flex-shrink-0 mx-10 flex items-center justify-center" /* Increased mx from 8 to 10 for maximum word spacing */
                  style={{ minWidth: '200px', height: '60px' }} /* Increased minWidth from 180px to 200px */
                >
                  <span 
                    className="font-din-condensed whitespace-nowrap hover:opacity-80 transition-opacity duration-300 uppercase"
                    style={{
                      color: '#66E8FA', // Blue color
                      fontSize: '1.6rem', // Same size
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