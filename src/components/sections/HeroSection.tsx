import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';
import { SmoothTextTransition } from '../ui/SmoothTextTransition';

const ROTATING_TITLES = [
  "Real Advice for Real Life Goals",
  "Take Control of Your Financial Future", 
  "Confident Financial Decisions Start Here",
  "Your Trusted Partner in Financial Clarity",
  "Strategic Advice. Lasting Results"
];

export const HeroSection: React.FC = () => {
  const { hero } = siteContent.sections;

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col"
      style={{ backgroundColor: colors.sections.hero }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/79c77e133f1e469be4013037f1808aad8a7d5d97?placeholderIfAbsent=true"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      {/* Main Content - Centered with extra top spacing */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 pt-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title with Smooth Transition Effect */}
          <h1 className="w-full mb-12">
            <SmoothTextTransition
              titles={ROTATING_TITLES}
              effect="morphCharacter" // Try: 'typewriter', 'fade', 'slide', 'morphCharacter'
              className="font-extrabold text-center"
              style={{
                fontSize: typography.sizes.hero,
                color: colors.text.light,
                letterSpacing: typography.tracking.widest,
                lineHeight: typography.lineHeights.hero,
                minHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            />
          </h1>

          {/* Watch Video Button */}
          <div className="flex justify-center">
            <button className="group relative flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 hover:bg-white/20 transition-all duration-300">
              {/* Play Icon */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg 
                  width="16" 
                  height="18" 
                  viewBox="0 0 16 18" 
                  fill="none" 
                  className="ml-1"
                >
                  <path 
                    d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 0 17.4678 0 15.9282L0 2.0718C0 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" 
                    fill="#22282A"
                  />
                </svg>
              </div>
              
              {/* Button Text */}
              <span 
                className="text-white font-medium uppercase tracking-wide"
                style={{ fontSize: '18px' }}
              >
                Watch Video
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};