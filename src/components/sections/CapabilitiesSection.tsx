import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const CapabilitiesSection: React.FC = () => {
  const { capabilities } = siteContent.sections;

  return (
    <section 
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.capabilities }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 
          className="font-extrabold leading-tight"
          style={{ 
            fontSize: typography.sizes.hero,
            letterSpacing: typography.tracking.widest,
            color: colors.text.primary
          }}
        >
          {capabilities.title.split('\n').map((line, index) => (
            <div 
              key={index} 
              className={index === 0 ? 'text-white mb-4' : 'text-[#22282a]'}
            >
              {line}
            </div>
          ))}
        </h2>
      </div>
    </section>
  );
};