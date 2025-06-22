import React, { useEffect, useRef } from 'react';

export const LogoCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Financial terms - spread across for immediate visibility
  const words = [
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION', 'RISK MANAGEMENT', 'PORTFOLIO',
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION', 'RISK MANAGEMENT', 'PORTFOLIO',
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION', 'RISK MANAGEMENT', 'PORTFOLIO'
  ];

  useEffect(() => {
    // Add floating particles effect
    const createParticle = () => {
      if (!carouselRef.current) return;

      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = `rgba(102, 232, 250, ${Math.random() * 0.5 + 0.2})`;
      particle.style.animationDelay = Math.random() * 6 + 's';
      
      carouselRef.current.appendChild(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 6000);
    };

    // Create particles periodically
    const particleInterval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <section 
      ref={carouselRef}
      className="w-full bg-[#22282A] overflow-hidden relative animate-fade-in-up animation-delay-1000"
    >
      {/* REMOVED: Gradient overlays that were causing light effects */}
      
      {/* REMOVED: Animated background glow that was causing shimmer */}
      
      <div className="carousel-container">
        <div className="carousel-track hover:animation-play-state-paused">
          {words.map((word, index) => (
            <span 
              key={index} 
              className="carousel-word transition-all duration-300 hover:scale-110"
              style={{
                animationDelay: `${index * 0.1}s`
                // REMOVED: filter drop-shadow that was causing light effects
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};