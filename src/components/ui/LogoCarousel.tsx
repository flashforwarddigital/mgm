import React from 'react';

interface LogoCarouselProps {
  className?: string;
}

// Words to display in the carousel
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
  'REFINANCING'
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
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Carousel container */}
          <div className="relative overflow-hidden">
            {/* Scrolling words */}
            <div className="flex animate-scroll">
              {/* First set of words */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '200px', height: '80px' }}
                >
                  <span className="text-white text-3xl font-bold whitespace-nowrap uppercase tracking-wide">
                    {word}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '200px', height: '80px' }}
                >
                  <span className="text-white text-3xl font-bold whitespace-nowrap uppercase tracking-wide">
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