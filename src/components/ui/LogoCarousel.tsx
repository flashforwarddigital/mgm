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
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#22282A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#22282A] to-transparent z-10 pointer-events-none" />
      
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#66E8FA]/5 to-transparent animate-shimmer" />
      
      <div className="carousel-container">
        <div className="carousel-track hover:animation-play-state-paused">
          {words.map((word, index) => (
            <span 
              key={index} 
              className="carousel-word hover-glow transition-all duration-300 hover:text-[#66E8FA] hover:scale-110"
              style={{
                animationDelay: `${index * 0.1}s`,
                filter: 'drop-shadow(0 0 10px rgba(102, 232, 250, 0.3))'
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