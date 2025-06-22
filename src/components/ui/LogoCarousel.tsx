import React from 'react';
import { carouselConfig } from '../../config/carousel-config';

interface LogoCarouselProps {
  className?: string;
}

export const LogoCarousel: React.FC<LogoCarouselProps> = ({ className = "" }) => {
  // Generate CSS custom properties from config with FORCED values
  const carouselStyles = {
    '--carousel-duration': carouselConfig.animation.duration,
    '--carousel-timing': carouselConfig.animation.timingFunction,
    '--carousel-iteration': carouselConfig.animation.iterationCount,
    '--carousel-font-family': carouselConfig.typography.fontFamily,
    '--carousel-font-weight': carouselConfig.typography.fontWeight,
    '--carousel-font-size': carouselConfig.typography.fontSize,
    '--carousel-letter-spacing': carouselConfig.spacing.letterSpacing,
    '--carousel-color': carouselConfig.typography.color,
    '--carousel-text-transform': carouselConfig.typography.textTransform,
    '--carousel-word-spacing': carouselConfig.spacing.wordSpacing,
    '--carousel-min-width': carouselConfig.spacing.minWordWidth,
    '--carousel-height': carouselConfig.spacing.containerHeight,
    '--carousel-align': carouselConfig.position.verticalPosition === 'bottom' ? 'flex-end' : 
                       carouselConfig.position.verticalPosition === 'top' ? 'flex-start' : 'center',
  } as React.CSSProperties;

  // Create word elements with FORCED maximum spacing
  const createWordSet = (setKey: string) => {
    return carouselConfig.words.map((word, index) => (
      <div
        key={`${setKey}-${index}`}
        className="carousel-word"
        style={{
          marginLeft: '4rem', // FORCED spacing
          marginRight: '4rem', // FORCED spacing
          minWidth: '280px', // FORCED width
        }}
      >
        <span 
          className="carousel-text whitespace-nowrap"
          style={{
            fontSize: '2rem', // FORCED size
            letterSpacing: '0.3em', // FORCED spacing
            fontWeight: '100', // FORCED weight
          }}
        >
          {word}
        </span>
      </div>
    ));
  };

  return (
    <section 
      className={`w-full relative z-20 ${className}`}
      style={{ 
        backgroundColor: '#22282A',
        marginTop: carouselConfig.position.marginTop,
        marginBottom: carouselConfig.position.marginBottom,
        paddingTop: carouselConfig.position.paddingTop,
        paddingBottom: carouselConfig.position.paddingBottom,
        minHeight: '200px', // Ensure enough space for lower positioning
      }}
    >
      <div className="w-full" style={{ backgroundColor: '#22282A' }}>
        <div className="max-w-6xl mx-auto px-8">
          {/* Carousel container - positioned at the VERY BOTTOM of the section with extra padding */}
          <div 
            className="carousel-container"
            style={{
              ...carouselStyles,
              paddingBottom: '4rem', // FORCED bottom padding
              marginBottom: '2rem', // FORCED bottom margin
              alignItems: 'flex-end', // FORCED bottom alignment
              height: '120px', // Increased height for lower positioning
            }}
          >
            {/* Scrolling words with EXTREMELY slow infinite seamless loop */}
            <div 
              className="carousel-animate"
              style={{
                animationDuration: '300s', // FORCED 5-minute duration
              }}
            >
              {/* Generate multiple sets for seamless infinite loop */}
              {Array.from({ length: carouselConfig.loop.duplicateCount }, (_, setIndex) => 
                createWordSet(`set-${setIndex}`)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};