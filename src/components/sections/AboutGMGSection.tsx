import React, { useEffect, useRef } from 'react';
import { colors, typography } from '../../config/design-system';

export const AboutGMGSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3; // Adjust speed of parallax
        imageRef.current.style.transform = `translateY(-${parallax}px) rotate(3deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="about-gmg"
      className="w-full py-32 px-4"
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

          {/* Right Side - Tilted Image Placeholder with Parallax */}
          <div className="relative">
            {/* Main tilted container with parallax effect */}
            <div 
              ref={imageRef}
              className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 min-h-[500px] flex items-center justify-center hover:rotate-1 transition-transform duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transform: 'rotate(3deg)' // Initial rotation
              }}
            >
              {/* Placeholder content */}
              <div className="text-center transform -rotate-3">
                <div className="w-40 h-40 bg-[#66E8FA]/20 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border border-[#66E8FA]/30">
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

              {/* Floating geometric elements */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#66E8FA]/20 rounded-2xl backdrop-blur-sm border border-[#66E8FA]/30 flex items-center justify-center transform rotate-12">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#66E8FA]">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 flex items-center justify-center transform -rotate-12">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                </svg>
              </div>

              {/* Additional floating elements for uniqueness */}
              <div className="absolute top-1/2 left-4 w-8 h-8 bg-[#66E8FA]/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 right-12 w-6 h-6 bg-white/30 rounded-full animate-pulse animation-delay-1000"></div>
              <div className="absolute bottom-1/3 right-4 w-10 h-10 bg-[#66E8FA]/20 rounded-lg transform rotate-45"></div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#66E8FA]/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};