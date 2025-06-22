import React from 'react';

interface LogoCarouselProps {
  className?: string;
}

// Financial services related words for GMG - now in UPPERCASE with DIN Condensed style
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
            {/* Scrolling words with DIN Condensed Light font - Infinite seamless loop */}
            <div className="animate-scroll-infinite">
              {/* First set of words - more spacing between words */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-6 flex items-center justify-center" /* Increased mx from 3 to 6 */
                  style={{ minWidth: '160px', height: '60px' }} /* Increased minWidth for more space */
                >
                  <span 
                    className="font-din-condensed whitespace-nowrap hover:opacity-80 transition-opacity duration-300 uppercase"
                    style={{
                      color: '#66E8FA', // Blue color
                      fontSize: '1.6rem', // Slightly smaller size
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
                  className="flex-shrink-0 mx-6 flex items-center justify-center" /* Increased mx from 3 to 6 */
                  style={{ minWidth: '160px', height: '60px' }} /* Increased minWidth for more space */
                >
                  <span 
                    className="font-din-condensed whitespace-nowrap hover:opacity-80 transition-opacity duration-300 uppercase"
                    style={{
                      color: '#66E8FA', // Blue color
                      fontSize: '1.6rem', // Slightly smaller size
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
                  className="flex-shrink-0 mx-6 flex items-center justify-center" /* Increased mx from 3 to 6 */
                  style={{ minWidth: '160px', height: '60px' }} /* Increased minWidth for more space */
                >
                  <span 
                    className="font-din-condensed whitespace-nowrap hover:opacity-80 transition-opacity duration-300 uppercase"
                    style={{
                      color: '#66E8FA', // Blue color
                      fontSize: '1.6rem', // Slightly smaller size
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