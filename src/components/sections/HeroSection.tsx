import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';
import { useHeroActions } from '../../hooks/useHeroActions';

export const HeroSection: React.FC = () => {
  const { handleServicesClick, handleProductClick } = useHeroActions();
  const { hero } = siteContent.sections;

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-4 py-20"
      style={{ backgroundColor: colors.sections.hero }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/79c77e133f1e469be4013037f1808aad8a7d5d97?placeholderIfAbsent=true"
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Subtitle */}
        <div 
          className="flex justify-center gap-2 font-normal uppercase leading-none mb-8"
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
          className="font-extrabold text-center mb-12 max-w-4xl mx-auto"
          style={{
            fontSize: typography.sizes.hero,
            color: colors.text.light,
            letterSpacing: typography.tracking.widest,
            lineHeight: typography.lineHeights.hero,
          }}
        >
          {hero.title.split('\n').map((line, index) => (
            <div key={index} className="block">
              {line}
            </div>
          ))}
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {hero.buttons.map((button, index) => (
            <button 
              key={index}
              onClick={button.type === 'secondary' ? handleServicesClick : handleProductClick}
              className={`relative flex items-center justify-between min-w-[300px] px-6 py-4 rounded-2xl border transition-all duration-300 group ${
                button.type === 'primary' 
                  ? 'border-[#66E8FA] bg-[#66E8FA] hover:bg-[#5dd8ea] text-[#22282a]'
                  : 'border-[#394247] hover:bg-[#394247] text-[#b1c5ce]'
              }`}
            >
              <span 
                className="font-normal uppercase tracking-wide"
                style={{
                  fontSize: typography.sizes.xl,
                  letterSpacing: typography.tracking.wider,
                }}
              >
                {button.label}
              </span>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                button.type === 'primary' ? 'bg-[#22282A]' : 'bg-[#394247]'
              }`}>
                <img
                  src={button.type === 'primary' 
                    ? "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/87079097c902dcaa9db1e3f3dd09c33fe8b11caa?placeholderIfAbsent=true"
                    : "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/eac7943b8e97893c719da9019280ad5bdf5b7aa7?placeholderIfAbsent=true"
                  }
                  className="w-5 h-5"
                  alt={`${button.label} Icon`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};