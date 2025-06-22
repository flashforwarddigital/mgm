import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const CapabilitiesSection: React.FC = () => {
  const { capabilities } = siteContent.sections;

  return (
    <section 
      className="z-10 flex mt-[-147px] flex-col items-center font-extrabold text-center justify-center pt-2 max-md:max-w-full"
      style={{ 
        fontSize: typography.sizes.hero,
        letterSpacing: typography.tracking.widest
      }}
    >
      <div 
        className="justify-center items-center flex w-full flex-col flex-1 pt-[175px] pb-[1204px] px-20 rounded-[21.89px] max-md:px-5 max-md:py-[100px]"
        style={{ backgroundColor: colors.sections.capabilities }}
      >
        <div className="items-center flex mb-[-241px] w-[1248px] max-w-full flex-col gap-[65.65px] max-md:mb-2.5">
          <div className="w-[831px] max-w-full gap-[-17.5px]">
            <div 
              className="flex w-full flex-col overflow-hidden items-center whitespace-nowrap leading-none justify-center px-[70px] py-[18px] max-md:px-5"
              style={{ color: colors.text.light }}
            >
              <h2 
                className="font-extrabold max-md:max-w-full"
                style={{ 
                  lineHeight: typography.lineHeights.hero,
                  fontSize: typography.sizes.hero
                }}
              >
                {capabilities.title.split('\n')[0]}
              </h2>
            </div>
            <div 
              className="font-extrabold leading-none w-full overflow-hidden px-[5px] py-[17px] max-md:max-w-full"
              style={{ 
                color: colors.text.primary,
                letterSpacing: typography.tracking.widest,
                fontSize: typography.sizes.hero
              }}
            >
              {capabilities.title.split('\n')[1]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};