import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const InterfaceSection: React.FC = () => {
  const { interface: interfaceContent } = siteContent.sections;

  return (
    <section 
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.interface }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 
          className="font-extrabold leading-tight mb-8"
          style={{ 
            fontSize: typography.sizes.hero,
            letterSpacing: typography.tracking.widest,
            color: colors.text.light
          }}
        >
          {interfaceContent.title.split('\n').map((line, index) => (
            <div key={index} className="mb-2">
              {line}
            </div>
          ))}
        </h2>

        {/* Description */}
        <div 
          className="max-w-4xl mx-auto"
          style={{ 
            fontSize: typography.sizes['4xl'],
            color: colors.text.neutral,
            lineHeight: typography.lineHeights.loose
          }}
        >
          {interfaceContent.description.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};