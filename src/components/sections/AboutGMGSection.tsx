import React from 'react';
import { colors, typography } from '../../config/design-system';

export const AboutGMGSection: React.FC = () => {
  return (
    <section 
      id="about-gmg"
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.aboutGMG }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Title with much closer spacing */}
            <div>
              <h2 
                className="font-extrabold leading-none"
                style={{ 
                  fontSize: typography.sizes.hero,
                  letterSpacing: typography.tracking.widest,
                  color: colors.text.primary
                }}
              >
                <div className="text-[#22282a] mb-0">Financial Strategy,</div>
                <div className="text-[#22282a] -mt-4">Built on Trust</div>
              </h2>
            </div>

            {/* Experience Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-[#22282a]/20 backdrop-blur-sm rounded-full px-6 py-3 border border-[#22282a]/30">
                <span className="text-[#22282a] font-semibold text-lg">20+ Years Experience</span>
              </div>
              <div className="bg-[#22282a]/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-[#22282a]/20">
                <span className="text-[#22282a] font-medium">Accounting</span>
              </div>
              <div className="bg-[#22282a]/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-[#22282a]/20">
                <span className="text-[#22282a] font-medium">Finance</span>
              </div>
              <div className="bg-[#22282a]/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-[#22282a]/20">
                <span className="text-[#22282a] font-medium">Banking</span>
              </div>
            </div>

            {/* Description with animated highlights */}
            <div 
              className="text-xl leading-relaxed"
              style={{ 
                color: colors.text.secondary,
                lineHeight: typography.lineHeights.loose
              }}
            >
              <p className="mb-4">
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

            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-[#66E8FA] text-[#22282a] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#5dd8ea] hover:scale-105 transition-all duration-300">
                Learn More About Our Approach
              </button>
            </div>
          </div>

          {/* Right Side - Image/Visual */}
          <div className="relative">
            {/* Placeholder for founder/team photo or stylized workspace */}
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 min-h-[500px] flex items-center justify-center">
              {/* Temporary placeholder - replace with actual image */}
              <div className="text-center">
                <div className="w-32 h-32 bg-[#66E8FA]/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#66E8FA]">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <p className="text-[#22282a]/70 text-lg">
                  [Founder/Team Photo]
                  <br />
                  <span className="text-sm">Professional workspace image</span>
                </p>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute top-4 right-4 bg-[#66E8FA]/30 rounded-lg p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#66E8FA]">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>

              <div className="absolute bottom-4 left-4 bg-[#22282a]/20 rounded-lg p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#22282a]">
                  <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
                </svg>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[#22282a] font-semibold text-sm">Trusted by 500+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};