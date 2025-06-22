import React from 'react';
import { colors, typography, spacing } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const InterfaceSection: React.FC = () => {
  const { interface: interfaceContent } = siteContent.sections;

  return (
    <section 
      className="flex mt-[-1604px] flex-col items-center text-center justify-center mr-[29px] pt-2 max-md:max-w-full max-md:mt-[-200px] max-md:mr-2.5"
    >
      <div 
        className="justify-center items-center flex max-w-full w-[1905px] flex-col flex-1 pt-[1690px] pb-[1048px] px-20 rounded-[21.89px] max-md:px-5 max-md:py-[100px]"
        style={{ backgroundColor: colors.sections.interface }}
      >
        <div 
          className="items-center flex mb-[-210px] w-[1248px] max-w-full flex-col max-md:mb-2.5"
          style={{ gap: spacing.section.gap }}
        >
          <div className="max-w-[1213px] items-center flex w-[1082px] flex-col gap-[15.31px]">
            <div 
              className="w-full font-extrabold gap-[-17.5px]"
              style={{ 
                color: colors.text.light,
                letterSpacing: typography.tracking.widest
              }}
            >
              <div 
                className="font-extrabold leading-none w-full overflow-hidden pt-3.5 pb-[35px] px-[70px] max-md:max-w-full max-md:px-5"
                style={{ 
                  fontSize: typography.sizes.hero,
                  letterSpacing: typography.tracking.widest
                }}
              >
                {interfaceContent.title.split('\n')[0]}
              </div>
              <div 
                className="font-extrabold leading-none w-full overflow-hidden px-[5px] py-[17px] max-md:max-w-full"
                style={{ 
                  fontSize: '82px',
                  letterSpacing: typography.tracking.widest
                }}
              >
                {interfaceContent.title.split('\n')[1]}
              </div>
            </div>
            <div 
              className="w-[880px] max-w-full font-normal gap-[-5.47px] mt-[15px]"
              style={{ 
                fontSize: typography.sizes['4xl'],
                color: colors.text.neutral
              }}
            >
              {interfaceContent.description.map((line, index) => (
                <div 
                  key={index}
                  className="font-normal w-full overflow-hidden pb-[5px] max-md:max-w-full"
                  style={{ lineHeight: typography.lineHeights.loose }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};