import React from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

interface StatItemProps {
  number: string;
  label: string;
  isActive?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, isActive = true }) => {
  return (
    <div 
      className={`flex-shrink-0 w-80 mx-4 ${!isActive ? "opacity-20" : ""}`}
    >
      <div className="relative w-full h-64 bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center items-center border border-white/20">
        <div 
          className="text-6xl font-extrabold mb-4"
          style={{ color: colors.primary.cyan }}
        >
          {number}
        </div>
        <div 
          className="text-xl font-medium uppercase tracking-wide text-center"
          style={{ color: colors.text.light }}
        >
          {label}
        </div>
      </div>
    </div>
  );
};

export const StatisticsSection: React.FC = () => {
  const { statistics } = siteContent.sections;

  return (
    <section 
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.statistics }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Subtitle */}
        <div 
          className="flex justify-center gap-2 font-normal uppercase leading-none mb-16"
          style={{ 
            fontSize: typography.sizes.base,
            color: colors.text.accent,
            letterSpacing: typography.tracking.normal
          }}
        >
          <span>({statistics.subtitle})</span>
        </div>

        {/* Title */}
        <h2 
          className="font-extrabold leading-tight mb-16"
          style={{ 
            fontSize: typography.sizes.hero,
            letterSpacing: typography.tracking.widest,
            color: colors.text.light
          }}
        >
          {statistics.title.split('\n').map((line, index) => (
            <div key={index} className="mb-2">
              {line}
            </div>
          ))}
        </h2>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {statistics.stats.map((stat, index) => (
            <StatItem 
              key={index}
              number={stat.number}
              label={stat.label}
              isActive={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};