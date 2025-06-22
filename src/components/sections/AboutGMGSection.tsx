import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const AboutGMGSection: React.FC = () => {
  const { aboutGMG } = siteContent.sections;

  return (
    <section 
      id="about-gmg"
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.aboutGMG }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 
          className="font-extrabold leading-tight mb-8"
          style={{ 
            fontSize: typography.sizes.hero,
            letterSpacing: typography.tracking.widest,
            color: colors.text.primary
          }}
        >
          {aboutGMG.title.split('\n').map((line, index) => (
            <div 
              key={index} 
              className={index === 0 ? 'text-white mb-4' : 'text-[#22282a]'}
            >
              {line}
            </div>
          ))}
        </h2>

        {/* Description */}
        <div 
          className="max-w-4xl mx-auto mt-8"
          style={{ 
            fontSize: typography.sizes['3xl'],
            color: colors.text.secondary,
            lineHeight: typography.lineHeights.loose
          }}
        >
          {aboutGMG.description.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};