import React from 'react';

interface LogoCarouselProps {
  className?: string;
}

// Financial services related words for GMG - now in lowercase
const CAROUSEL_WORDS = [
  'budgeting',
  'cash flow', 
  'business growth',
  'lending',
  'investment',
  'structuring',
  'strategy',
  'advisory',
  'health check',
  'refinancing',
  'planning',
  'wealth management'
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
            {/* Scrolling words with Beanco font */}
            <div className="flex animate-scroll">
              {/* First set of words */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-12 flex items-center justify-center"
                  style={{ minWidth: '250px', height: '100px' }}
                >
                  <span className="font-beanco text-white text-5xl whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {word}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-12 flex items-center justify-center"
                  style={{ minWidth: '250px', height: '100px' }}
                >
                  <span className="font-beanco text-white text-5xl whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300">
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