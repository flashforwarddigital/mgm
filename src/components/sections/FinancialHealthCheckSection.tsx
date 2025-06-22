import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const FinancialHealthCheckSection: React.FC = () => {
  const { financialHealthCheck } = siteContent.sections;

  return (
    <section 
      id="financial-health-check"
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.financialHealthCheck }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title - ALL LOWERCASE */}
        <h2 
          className="font-extrabold leading-tight mb-8 lowercase"
          style={{ 
            fontSize: typography.sizes.hero,
            letterSpacing: typography.tracking.widest,
            color: colors.text.primary
          }}
        >
          {financialHealthCheck.title.split('\n').map((line, index) => (
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
            color: colors.text.secondary,
            lineHeight: typography.lineHeights.loose
          }}
        >
          {financialHealthCheck.description.map((line, index) => (
            <p key={index} className="mb-2">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};