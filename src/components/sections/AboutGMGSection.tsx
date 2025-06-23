import React, { useEffect, useRef, useState } from 'react';
import { colors, typography } from '../../config/design-system';

export const AboutGMGSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

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

            // Trigger content animation when section is 30% visible
            if (rect.top < windowHeight * 0.7 && !contentVisible) {
              setContentVisible(true);
            }

            if (isInViewport) {
              // Calculate progress through the section (0 to 1)
              const sectionHeight = rect.height;
              const sectionTop = rect.top;
              
              // Progress from when section enters viewport to when it leaves
              const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
              
              // Enhanced parallax calculation
              const parallaxRange = 100;
              const startOffset = -60;
              const parallaxY = startOffset + (progress * parallaxRange);
              
              // Smooth easing function for more natural movement
              const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
              const easedParallax = startOffset + (easeOutQuart(progress) * parallaxRange);
              
              // Apply transform with smooth interpolation
              const scale = 1 + (progress * 0.05);
              imageRef.current.style.transform = `translateY(${easedParallax}px) rotate(3deg) scale(${scale})`;
              
              // Add subtle opacity fade for extra smoothness
              const opacity = 0.8 + (progress * 0.2);
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
  }, [contentVisible]);

  return (
    <section 
      ref={sectionRef}
      id="about-gmg"
      className="w-full py-32 px-4 overflow-hidden relative"
      style={{ backgroundColor: colors.sections.aboutGMG }}
    >
      {/* GRADIENT FADE FROM CAROUSEL BACKGROUND - POSITIONED AT TOP AND FADES HIGH */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none z-20"
        style={{
          height: '200px', // Fade out high in the section
          background: `linear-gradient(to bottom, #22282A 0%, #22282A 20%, rgba(34, 40, 42, 0.8) 40%, rgba(34, 40, 42, 0.4) 70%, transparent 100%)`
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#66E8FA]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#22282A]/10 rounded-full blur-2xl animate-float animation-delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content with staggered animations */}
          <div 
            ref={contentRef}
            className="space-y-12"
          >
            {/* Title - Animated entrance */}
            <div className={`transform transition-all duration-1000 ease-out ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 
                className="font-extrabold leading-none lowercase"
                style={{ 
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  letterSpacing: typography.tracking.widest,
                }}
              >
                <div className="text-white mb-2 animate-fade-in-left animation-delay-200">
                  financial strategy,
                </div>
                <div className="text-[#22282a] animate-fade-in-left animation-delay-400">
                  built on trust
                </div>
              </h2>
            </div>

            {/* Description with animated highlights */}
            <div 
              className={`
                text-xl leading-relaxed transform transition-all duration-1000 ease-out
                ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
              style={{ 
                color: '#22282a',
                lineHeight: typography.lineHeights.loose,
                transitionDelay: '600ms'
              }}
            >
              <p className="mb-6">
                At GMG Financial Services, we combine deep industry knowledge with a personal approach to help you make confident, informed financial decisions. Our goal is simple: to give you the tools, structure, and{' '}
                <span className="relative inline-block group">
                  <span className="text-[#66E8FA] font-semibold relative z-10 transition-all duration-300 group-hover:scale-110">
                    clarity
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#66E8FA]/30 animate-pulse" />
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#66E8FA] group-hover:w-full transition-all duration-500" />
                </span>
                {' '}to grow — sustainably and{' '}
                <span className="relative inline-block group">
                  <span className="text-[#66E8FA] font-semibold relative z-10 transition-all duration-300 group-hover:scale-110">
                    strategically
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#66E8FA]/30 animate-pulse animation-delay-500" />
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#66E8FA] group-hover:w-full transition-all duration-500 animation-delay-200" />
                </span>
                .
              </p>
            </div>

            {/* CTA Button - Enhanced animation */}
            <div 
              className={`
                pt-4 transform transition-all duration-1000 ease-out
                ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
              style={{ transitionDelay: '800ms' }}
            >
              <button className="
                border-[#66E8FA] bg-[#66E8FA] text-[#22282a] 
                hover:bg-[#5dd8ea] hover:scale-105 hover:shadow-2xl
                justify-center items-center flex min-h-[55px] gap-[13px] 
                overflow-hidden px-[22px] py-[17px] rounded-[13.79px] 
                text-[21px] font-normal whitespace-nowrap uppercase 
                tracking-[-0.62px] leading-none 
                transition-all duration-300 btn-animated hover-glow
                relative group
              ">
                <span className="pb-px relative z-10 transition-transform duration-300 group-hover:scale-110">
                  learn more
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Parallax Image with micro-animations */}
          <div className="relative perspective-1000">
            {/* Main tilted container with enhanced parallax effect */}
            <div 
              ref={imageRef}
              className={`
                relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 
                min-h-[500px] flex items-center justify-center 
                hover:rotate-1 transition-all duration-700 ease-out
                ${isVisible ? 'animate-fade-in-scale animation-delay-1000' : ''}
                group hover-lift
              `}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transform: 'translateY(-60px) rotate(3deg)',
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
              }}
            >
              {/* Placeholder content with enhanced animations */}
              <div className="text-center transform -rotate-3">
                <div className="w-40 h-40 bg-[#66E8FA]/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border border-[#66E8FA]/30 hover:scale-110 transition-all duration-500 animate-pulse-glow group-hover:animate-bounce-in">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#66E8FA] transition-all duration-300 group-hover:scale-125">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <p className="text-white/80 text-xl font-medium transition-all duration-300 group-hover:text-white">
                  [Founder/Team Photo]
                  <br />
                  <span className="text-sm text-white/60 font-normal group-hover:text-white/80 transition-all duration-300">
                    Professional workspace image
                  </span>
                </p>
              </div>

              {/* Enhanced floating geometric elements with micro-animations */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#66E8FA]/20 rounded-2xl backdrop-blur-sm border border-[#66E8FA]/30 flex items-center justify-center transform rotate-12 hover:rotate-45 transition-all duration-500 animate-float hover-glow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#66E8FA] transition-transform duration-300 hover:scale-125">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex items-center justify-center transform -rotate-12 hover:-rotate-45 transition-all duration-500 animate-float-reverse hover-glow">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white transition-transform duration-300 hover:scale-125">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                </svg>
              </div>

              {/* Additional floating elements with enhanced animations */}
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-[#66E8FA]/30 rounded-full animate-bounce animation-delay-500 hover-scale" />
              <div className="absolute top-1/4 right-12 w-6 h-6 bg-white/30 rounded-full animate-ping animation-delay-1000" />
              <div className="absolute bottom-1/3 right-4 w-10 h-10 bg-[#66E8FA]/20 rounded-lg transform rotate-45 hover:rotate-90 transition-transform duration-700 animate-float animation-delay-1500" />
            </div>

            {/* Enhanced background decorative elements with animations */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#66E8FA]/10 rounded-full blur-xl animate-pulse animation-delay-200" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse animation-delay-1500" />
            
            {/* Additional depth elements with staggered animations */}
            <div className="absolute top-1/3 -left-6 w-24 h-24 bg-[#66E8FA]/5 rounded-full blur-lg animate-pulse animation-delay-500" />
            <div className="absolute bottom-1/4 -right-8 w-28 h-28 bg-white/5 rounded-full blur-xl animate-pulse animation-delay-2000" />
            
            {/* Floating particles */}
            <div className="absolute top-10 left-20 w-2 h-2 bg-[#66E8FA]/50 rounded-full animate-float animation-delay-300" />
            <div className="absolute bottom-20 right-16 w-3 h-3 bg-white/40 rounded-full animate-float-reverse animation-delay-800" />
            <div className="absolute top-1/3 right-8 w-1 h-1 bg-[#66E8FA]/60 rounded-full animate-ping animation-delay-1200" />
          </div>
        </div>
      </div>
    </section>
  );
};