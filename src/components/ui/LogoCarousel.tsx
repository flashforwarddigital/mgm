import React from 'react';

interface LogoCarouselProps {
  className?: string;
}

// Dummy logos - you can replace these URLs with your actual logos later
const DUMMY_LOGOS = [
  { name: 'Company 1', url: 'https://via.placeholder.com/120x60/ffffff/000000?text=Logo+1' },
  { name: 'Company 2', url: 'https://via.placeholder.com/120x60/ffffff/000000?text=Logo+2' },
  { name: 'Company 3', url: 'https://via.placeholder.com/120x60/ffffff/000000?text=Logo+3' },
  { name: 'Company 4', url: 'https://via.placeholder.com/120x60/ffffff/000000?text=Logo+4' },
  { name: 'Company 5', url: 'https://via.placeholder.com/120x60/ffffff/000000?text=Logo+5' },
  { name: 'Company 6', url: 'https://via.placeholder.com/120x60/ffffff/000000?text=Logo+6' },
  { name: 'Company 7', url: 'https://via.placeholder.com/120x60/ffffff/000000?text=Logo+7' },
  { name: 'Company 8', url: 'https://via.placeholder.com/120x60/ffffff/000000?text=Logo+8' },
];

export const LogoCarousel: React.FC<LogoCarouselProps> = ({ className = "" }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Trusted by text */}
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">
          Trusted by 100+ of the largest companies
        </p>
      </div>
      
      {/* Carousel container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#22282A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#22282A] to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling logos */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {DUMMY_LOGOS.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ minWidth: '120px', height: '60px' }}
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {DUMMY_LOGOS.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ minWidth: '120px', height: '60px' }}
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};