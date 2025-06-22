import React from 'react';

interface LogoCarouselProps {
  className?: string;
}

// Words to display in the carousel
const CAROUSEL_WORDS = [
  'Budgeting',
  'Cash Flow', 
  'Business Growth',
  'Lending',
  'Investment',
  'Structuring',
  'Strategy',
  'Advisory',
  'Health Check',
  'Refinancing'
];

export const LogoCarousel: React.FC<LogoCarouselProps> = ({ className = "" }) => {
  return (
    <section 
      className={`w-full relative z-20 ${className}`}
      style={{ 
        backgroundColor: '#22282A',
      }}
    >
      {/* Rounded top section */}
      <div 
        className="w-full"
        style={{
          backgroundColor: '#22282A',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderBottom: 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-8 py-12">
          {/* Carousel container */}
          <div className="relative">
            {/* Scrolling words */}
            <div className="flex animate-scroll">
              {/* First set of words */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '180px', height: '60px' }}
                >
                  <span className="text-white text-xl font-medium whitespace-nowrap">
                    {word}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {CAROUSEL_WORDS.map((word, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ minWidth: '180px', height: '60px' }}
                >
                  <span className="text-white text-xl font-medium whitespace-nowrap">
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