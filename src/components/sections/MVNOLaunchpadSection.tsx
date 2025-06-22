import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const MVNOLaunchpadSection: React.FC = () => {
  const { mvnoLaunchpad } = siteContent.sections;

  return (
    <section 
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.mvnoLaunchpad }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <div 
          className="flex justify-center gap-2 font-normal uppercase leading-none mb-16"
          style={{ 
            fontSize: typography.sizes.base,
            color: colors.text.muted,
            letterSpacing: typography.tracking.normal
          }}
        >
          <span>({mvnoLaunchpad.subtitle})</span>
        </div>

        {/* Title */}
        <h2 
          className="font-extrabold leading-tight mb-8"
          style={{
            fontSize: typography.sizes.hero,
            letterSpacing: typography.tracking.widest,
          }}
        >
          {mvnoLaunchpad.title.split('\n').map((line, index) => (
            <div key={index} className="mb-2">
              {index === 0 ? (
                <span style={{ color: colors.text.primary }}>{line}</span>
              ) : (
                <>
                  <span style={{ color: colors.text.primary }}>Launching </span>
                  <span style={{ color: colors.text.light }}>Your MVNO</span>
                </>
              )}
            </div>
          ))}
        </h2>

        {/* Description */}
        <div 
          className="max-w-4xl mx-auto"
          style={{ 
            fontSize: typography.sizes['3xl'],
            color: colors.text.secondary,
            lineHeight: typography.lineHeights.loose
          }}
        >
          {mvnoLaunchpad.description.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};