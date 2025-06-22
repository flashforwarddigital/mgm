import React from 'react';
import { colors, typography, spacing } from '../../config/design-system';
import { siteContent } from '../../config/content';
import { SectionHeader } from '../ui/SectionHeader';

export const VisionSection: React.FC = () => {
  const { vision } = siteContent.sections;

  return (
    <section 
      className="flex w-full flex-col items-center text-center rounded-[22px] max-md:max-w-full max-md:px-5"
      style={{ 
        backgroundColor: colors.sections.vision,
        paddingTop: spacing.section.paddingY,
        paddingBottom: '1016px',
        paddingLeft: spacing.section.paddingX,
        paddingRight: spacing.section.paddingX,
      }}
    >
      <div 
        className="items-center flex mb-[-203px] w-[1248px] max-w-full flex-col max-md:mb-2.5"
        style={{ gap: spacing.section.gap }}
      >
        <SectionHeader
          subtitle={vision.subtitle}
          title={
            <>
              <div 
                className="font-extrabold leading-none w-full overflow-hidden px-[18px] py-4 max-md:max-w-full"
                style={{ 
                  letterSpacing: typography.tracking.widest,
                  fontSize: typography.sizes.hero
                }}
              >
                {vision.title.split('\n')[0]}
              </div>
              <div 
                className="font-extrabold leading-none w-full overflow-hidden px-[5px] py-4 max-md:max-w-full"
                style={{ 
                  letterSpacing: typography.tracking.widest,
                  fontSize: typography.sizes.hero
                }}
              >
                <span style={{ color: colors.text.primary }}>Launching </span>
                <span style={{ color: colors.text.light }}>Your MVNO</span>
              </div>
            </>
          }
          description={
            <div style={{ color: colors.text.secondary }}>
              {vision.description.map((line, index) => (
                <div 
                  key={index}
                  className="font-medium w-full overflow-hidden pb-[5px] max-md:max-w-full"
                  style={{ 
                    fontSize: typography.sizes['3xl'],
                    lineHeight: typography.lineHeights.loose
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          }
          titleColor={colors.text.primary}
          subtitleColor={colors.text.muted}
          descriptionColor={colors.text.secondary}
        />
      </div>
    </section>
  );
};