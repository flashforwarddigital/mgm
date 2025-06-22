import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const ContactUsSection: React.FC = () => {
  const { contactUs } = siteContent.sections;

  return (
    <section 
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.contactUs }}
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
          <span>({contactUs.subtitle})</span>
        </div>

        {/* Title */}
        <h2 
          className="font-extrabold leading-tight mb-8"
          style={{
            fontSize: typography.sizes.hero,
            letterSpacing: typography.tracking.widest,
          }}
        >
          {contactUs.title.split('\n').map((line, index) => (
            <div key={index} className="mb-2">
              {index === 0 ? (
                <span style={{ color: colors.text.primary }}>{line}</span>
              ) : (
                <>
                  <span style={{ color: colors.text.primary }}>Let's Discuss Your </span>
                  <span style={{ color: colors.text.light }}>Financial Future</span>
                </>
              )}
            </div>
          ))}
        </h2>

        {/* Description */}
        <div 
          className="max-w-4xl mx-auto mb-12"
          style={{ 
            fontSize: typography.sizes['3xl'],
            color: colors.text.secondary,
            lineHeight: typography.lineHeights.loose
          }}
        >
          {contactUs.description.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            className="px-8 py-4 bg-white text-[#22282a] font-semibold rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Schedule Consultation
          </button>
          <button 
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#22282a] transition-colors text-lg"
          >
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};