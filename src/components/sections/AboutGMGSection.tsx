import React, { useEffect, useRef, useState } from 'react';
import { colors, typography } from '../../config/design-system';

export const AboutGMGSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (imageRef.current && sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Check if section is in viewport
            const isInViewport = rect.top < windowHeight && rect.bottom > 0;
            setIsVisible(isInViewport);

            if (isInViewport) {
              // Calculate progress through the section (0 to 1)
              const sectionHeight = rect.height;
              const sectionTop = rect.top;
              
              // Progress from when section enters viewport to when it leaves
              // 0 = section just entering from bottom, 1 = section just leaving from top
              const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
              
              // Enhanced parallax calculation
              // Start lower (-60px) and move to higher (+40px) as we scroll
              const parallaxRange = 100; // Total movement range
              const startOffset = -60; // Start position (lower)
              const parallaxY = startOffset + (progress * parallaxRange);
              
              // Smooth easing function for more natural movement
              const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
              const easedParallax = startOffset + (easeOutQuart(progress) * parallaxRange);
              
              // Apply transform with smooth interpolation
              imageRef.current.style.transform = `translateY(${easedParallax}px) rotate(3deg)`;
              
              // Add subtle scale effect for more depth
              const scale = 1 + (progress * 0.05); // Slight scale increase
              imageRef.current.style.transform = `translateY(${easedParallax}px) rotate(3deg) scale(${scale})`;
              
              // Optional: Add subtle opacity fade for extra smoothness
              const opacity = 0.8 + (progress * 0.2); // From 0.8 to 1.0
              imageRef.current.style.opacity = `${Math.min(1, opacity)}`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call to set position
    handleScroll();

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about-gmg"
      className="w-full py-32 px-4 overflow-hidden" // Added overflow-hidden for cleaner edges
      style={{ backgroundColor: colors.sections.aboutGMG }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-12">
            {/* Title - SMALLER SIZE, WHITE AND DARK STYLING */}
            <div>
              <h2 
                className="font-extrabold leading-none lowercase"
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)', // Smaller than hero size
                  letterSpacing: typography.tracking.widest,
                }}
              >
                <div className="text-white mb-2">financial strategy,</div>
                <div className="text-[#22282a]">built on trust</div>
              </h2>
            </div>

            {/* Description with animated highlights - DARK COLOR */}
            <div 
              className="text-xl leading-relaxed"
              style={{ 
                color: '#22282a', // Dark color as requested
                lineHeight: typography.lineHeights.loose
              }}
            >
              <p className="mb-6">
                At GMG Financial Services, we combine deep industry knowledge with a personal approach to help you make confident, informed financial decisions. Our goal is simple: to give you the tools, structure, and{' '}
                <span className="relative inline-block">
                  <span className="text-[#66E8FA] font-semibold relative z-10">clarity</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#66E8FA]/30 animate-pulse"></span>
                </span>
                {' '}to grow — sustainably and{' '}
                <span className="relative inline-block">
                  <span className="text-[#66E8FA] font-semibold relative z-10">strategically</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#66E8FA]/30 animate-pulse animation-delay-500"></span>
                </span>
                .
              </p>
            </div>

            {/* CTA Button - Same style as hero section - UPDATED TEXT */}
            <div className="pt-4">
              <button className="border-[#66E8FA] bg-[#66E8FA] text-[#22282a] hover:bg-[#5dd8ea] hover:scale-105 justify-center items-center flex min-h-[55px] gap-[13px] overflow-hidden px-[22px] py-[17px] rounded-[13.79px] text-[21px] font-normal whitespace-nowrap uppercase tracking-[-0.62px] leading-none transition-all duration-300">
                <span className="pb-px">learn more</span>
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Parallax Image */}
          <div className="relative perspective-1000"> {/* Added perspective for 3D effect */}
            {/* Main tilted container with enhanced parallax effect */}
            <div 
              ref={imageRef}
              className={`
                relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 
                min-h-[500px] flex items-center justify-center 
                hover:rotate-1 transition-all duration-700 ease-out
                ${isVisible ? 'animate-fade-in' : ''}
              `}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transform: 'translateY(-60px) rotate(3deg)', // Start lower
                willChange: 'transform, opacity', // Optimize for animations
                backfaceVisibility: 'hidden', // Prevent flickering
              }}
            >
              {/* Placeholder content */}
              <div className="text-center transform -rotate-3">
                <div className="w-40 h-40 bg-[#66E8FA]/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border border-[#66E8FA]/30 hover:scale-110 transition-transform duration-500">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#66E8FA]">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <p className="text-white/80 text-xl font-medium">
                  [Founder/Team Photo]
                  <br />
                  <span className="text-sm text-white/60 font-normal">Professional workspace image</span>
                </p>
              </div>

              {/* Enhanced floating geometric elements with micro-animations */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#66E8FA]/20 rounded-2xl backdrop-blur-sm border border-[#66E8FA]/30 flex items-center justify-center transform rotate-12 hover:rotate-45 transition-transform duration-500 animate-pulse">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#66E8FA]">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex items-center justify-center transform -rotate-12 hover:-rotate-45 transition-transform duration-500 animate-pulse animation-delay-1000">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                </svg>
              </div>

              {/* Additional floating elements with enhanced animations */}
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-[#66E8FA]/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/4 right-12 w-6 h-6 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 right-4 w-10 h-10 bg-[#66E8FA]/20 rounded-lg transform rotate-45 hover:rotate-90 transition-transform duration-700"></div>
            </div>

            {/* Enhanced background decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#66E8FA]/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse animation-delay-1500"></div>
            
            {/* Additional depth elements */}
            <div className="absolute top-1/3 -left-6 w-24 h-24 bg-[#66E8FA]/5 rounded-full blur-lg animate-pulse animation-delay-500"></div>
            <div className="absolute bottom-1/4 -right-8 w-28 h-28 bg-white/5 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};