import React from 'react';
import { carouselConfig } from '../../config/carousel-config';

export const LogoCarousel: React.FC = () => {
  // Create the scrolling content using the words from config
  const createWords = () => {
    return carouselConfig.words.map((word, index) => (
      <div
        key={index}
        className="flex-shrink-0 flex items-center justify-center"
        style={{
          marginLeft: carouselConfig.wordSpacing,
          marginRight: carouselConfig.wordSpacing,
          minWidth: '200px',
        }}
      >
        <span
          className="whitespace-nowrap uppercase"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: carouselConfig.fontSize,
            fontWeight: carouselConfig.fontWeight,
            letterSpacing: carouselConfig.letterSpacing,
            color: carouselConfig.color,
          }}
        >
          {word}
        </span>
      </div>
    ));
  };

  return (
    <section 
      className="w-full bg-[#22282A] relative z-20"
      style={{ 
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="w-full overflow-hidden">
        <div 
          className="flex items-center h-20"
          style={{
            justifyContent: carouselConfig.position === 'bottom' ? 'flex-end' : 
                           carouselConfig.position === 'top' ? 'flex-start' : 'center'
          }}
        >
          <div 
            className="carousel-scroll"
            style={{
              animationDuration: carouselConfig.speed,
            }}
          >
            {createWords()}
          </div>
        </div>
      </div>
    </section>
  );
};