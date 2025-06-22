import React from 'react';

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
      className={`flex w-full flex-col items-center text-center pt-[174px] pb-[1016px] px-20 rounded-[22px] max-md:max-w-full max-md:px-5 max-md:py-[100px] ${className}`}
      style={{ backgroundColor }}
    >
      <div className="items-center flex mb-[-203px] w-[1248px] max-w-full flex-col gap-[65.66px] max-md:mb-2.5">
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
  titleColor = "#22282a",
  subtitleColor = "#5f6f77",
  descriptionColor = "#394247"
}) => {
  return (
    <>
      <div className="flex gap-[5.5px] text-lg font-normal uppercase tracking-[-0.52px] leading-none" style={{ color: subtitleColor }}>
        <span className="text-[17.5px] font-normal leading-[18px]">(</span>
        <span className="text-[17.5px] font-normal leading-[18px]">{subtitle}</span>
        <span className="text-[17.5px] font-normal leading-[18px]">)</span>
      </div>

      <div className="max-w-[910px] items-center flex w-[895px] flex-col gap-[15.31px] mt-[66px] max-md:mt-10">
        <h2 className="w-full text-[84px] font-extrabold tracking-[-2.63px] gap-[-17.5px] max-md:text-[40px]" style={{ color: titleColor }}>
          {title}
        </h2>
        
        {description && (
          <div className="w-[750px] max-w-full text-[23px] font-medium leading-loose gap-[-4.9px] mt-[15px]" style={{ color: descriptionColor }}>
            {description}
          </div>
        )}
      </div>
    </>
  );
};
