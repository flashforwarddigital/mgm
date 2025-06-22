import React from 'react';
import { colors, typography, spacing } from '../config/design-system';

interface ContentSectionProps {
  backgroundColor: string;
  children: React.ReactNode;
  className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ 
  backgroundColor, 
  children, 
  className = "" 
}) => {
  return (
    <section 
      className={`flex w-full flex-col items-center text-center rounded-[22px] max-md:max-w-full max-md:px-5 max-md:py-[100px] ${className}`}
      style={{ 
        backgroundColor,
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
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  subtitle: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  titleColor?: string;
  subtitleColor?: string;
  descriptionColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  titleColor = colors.text.primary,
  subtitleColor = colors.text.muted,
  descriptionColor = colors.text.secondary
}) => {
  return (
    <>
      <div 
        className="flex gap-[5.5px] font-normal uppercase leading-none"
        style={{ 
          fontSize: typography.sizes.base,
          color: subtitleColor,
          letterSpacing: typography.tracking.normal
        }}
      >
        <span>({subtitle})</span>
      </div>

      <div className="max-w-[910px] items-center flex w-[895px] flex-col gap-[15.31px] mt-[66px] max-md:mt-10">
        <h2 
          className="w-full font-extrabold gap-[-17.5px] max-md:text-[40px]"
          style={{ 
            fontSize: typography.sizes.hero,
            letterSpacing: typography.tracking.widest,
            color: titleColor
          }}
        >
          {title}
        </h2>
        
        {description && (
          <div 
            className="w-[750px] max-w-full font-medium gap-[-4.9px] mt-[15px]"
            style={{ 
              fontSize: typography.sizes['3xl'],
              lineHeight: typography.lineHeights.loose,
              color: descriptionColor
            }}
          >
            {description}
          </div>
        )}
      </div>
    </>
  );
};