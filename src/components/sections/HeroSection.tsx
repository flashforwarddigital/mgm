import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';
import { DecryptingText } from '../ui/DecryptingText';

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

      {/* Main Content - Centered vertically and horizontally */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title with Decrypting Effect */}
          <h1 className="w-full">
            <DecryptingText
              titles={ROTATING_TITLES}
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
        </div>
      </div>
    </section>
  );
};