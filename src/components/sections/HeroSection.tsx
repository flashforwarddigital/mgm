import React from 'react';
import { colors, typography, spacing } from '../../config/design-system';
import { siteContent } from '../../config/content';
import { useHeroActions } from '../../hooks/useHeroActions';

export const HeroSection: React.FC = () => {
  const { handleServicesClick, handleProductClick } = useHeroActions();
  const { hero } = siteContent.sections;

  return (
    <section 
      className="justify-center items-center self-center z-0 flex max-w-full w-[1905px] flex-col flex-1 pt-[88px] rounded-[21.89px]"
      style={{ backgroundColor: colors.sections.hero }}
    >
      <div className="flex min-h-[175px] w-full" />
      <div className="flex min-h-11 w-full" />
      
      <div className="items-center flex w-full flex-col max-w-[2188.8px] px-[328px] max-md:px-5">
        <div className="max-w-[1061px] flex w-[1061px] flex-col items-center pr-20 max-md:pr-5">
          {/* Subtitle */}
          <div 
            className="z-10 flex gap-[5.5px] font-normal text-center uppercase leading-none"
            style={{ 
              fontSize: typography.sizes.base,
              color: colors.text.muted,
              letterSpacing: typography.tracking.normal
            }}
          >
            <span>({hero.subtitle})</span>
          </div>

          {/* Main Title */}
          <h1 
            className="w-[895px] max-w-full font-extrabold text-center mt-11 max-md:mt-10 whitespace-pre-line"
            style={{
              fontSize: typography.sizes.hero,
              color: colors.text.light,
              letterSpacing: typography.tracking.widest,
              lineHeight: typography.lineHeights.hero,
              '@media (max-width: 768px)': {
                fontSize: typography.sizes.heroMobile,
                lineHeight: typography.lineHeights.heroMobile,
              }
            }}
          >
            {hero.title}
          </h1>

          {/* Action Buttons */}
          <div className="flex gap-[10.94px] mt-11 pt-[22px] max-md:mt-10">
            {hero.buttons.map((button, index) => (
              <button 
                key={index}
                onClick={button.type === 'secondary' ? handleServicesClick : handleProductClick}
                className={`max-w-[398px] justify-center min-h-[63px] gap-[23px] pl-[23px] pr-[82px] py-[21px] rounded-[16.2px] border border-solid max-md:px-5 relative transition-colors ${
                  button.type === 'primary' 
                    ? `border-[${colors.primary.cyan}] hover:bg-[${colors.primary.cyanHover}]`
                    : `border-[${colors.primary.dark}] hover:bg-[${colors.primary.darkSecondary}]`
                }`}
                style={{
                  borderColor: button.type === 'primary' ? colors.primary.cyan : colors.primary.dark,
                  backgroundColor: button.type === 'primary' ? colors.primary.cyan : 'transparent'
                }}
              >
                <div className={`min-w-[59px] items-center absolute z-0 flex w-[59px] h-[59px] pr-5 py-5 rounded-[12.26px] right-0.5 top-0.5 bottom-px ${
                  button.type === 'primary' ? 'bg-[#22282A]' : 'bg-[#394247]'
                }`}>
                  <img
                    src={button.type === 'primary' 
                      ? "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/87079097c902dcaa9db1e3f3dd09c33fe8b11caa?placeholderIfAbsent=true"
                      : "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/eac7943b8e97893c719da9019280ad5bdf5b7aa7?placeholderIfAbsent=true"
                    }
                    className="aspect-[1] object-contain w-[17px] self-stretch my-auto"
                    alt={`${button.label} Icon`}
                  />
                </div>
                <span 
                  className="font-normal leading-none uppercase my-auto pb-px whitespace-nowrap z-0"
                  style={{
                    fontSize: typography.sizes.xl,
                    letterSpacing: typography.tracking.wider,
                    color: button.type === 'primary' ? colors.text.primary : colors.text.neutral
                  }}
                >
                  {button.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};