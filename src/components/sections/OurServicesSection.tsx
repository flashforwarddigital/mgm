import React from 'react';
import { colors, typography } from '../../config/design-system';

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
  variant?: 'left' | 'right' | 'center';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay = 0, variant = 'center' }) => {
  // Different layouts for visual variety
  const getCardLayout = () => {
    switch (variant) {
      case 'left':
        return 'text-left pl-6 pr-4 border-l-2 border-[#22282a]/20';
      case 'right':
        return 'text-right pr-6 pl-4 border-r-2 border-[#22282a]/20';
      default:
        return 'text-center border-b-2 border-[#22282a]/20 pb-6';
    }
  };

  return (
    <div 
      className={`
        group relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 
        border border-[#22282a]/10 hover:border-[#22282a]/30 
        hover:bg-white/80 transition-all duration-500 ease-out
        hover:shadow-lg hover:-translate-y-1
        animate-fade-in-up min-h-[180px] flex flex-col justify-center
        ${getCardLayout()}
      `}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Title - Tighter spacing, better hierarchy */}
      <h3 
        className="font-semibold mb-3 lowercase leading-tight"
        style={{ 
          fontSize: '1.1rem',
          color: colors.text.primary,
          fontFamily: typography.families.sans,
          letterSpacing: '-0.02em'
        }}
      >
        {title}
      </h3>

      {/* Description - Closer line spacing, better readability */}
      <p 
        className="font-normal leading-snug"
        style={{ 
          fontSize: '0.9rem',
          color: colors.text.secondary,
          lineHeight: '1.4', // Tighter line spacing
          fontFamily: typography.families.sans,
          letterSpacing: '-0.01em'
        }}
      >
        {description}
      </p>

      {/* Subtle accent line that appears on hover */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#66E8FA] group-hover:w-full transition-all duration-500 ease-out"></div>
    </div>
  );
};

export const OurServicesSection: React.FC = () => {
  const services = [
    {
      title: "planning & budgeting",
      description: "Realistic plans, goal alignment, everyday budgeting systems",
      variant: 'left' as const
    },
    {
      title: "cash flow & performance", 
      description: "Business insights, efficiency, profitability",
      variant: 'center' as const
    },
    {
      title: "strategy & structuring",
      description: "Right setup, legal/accountant alignment, tax optimisation",
      variant: 'right' as const
    },
    {
      title: "lending & finance",
      description: "Tailored loans, refinancing, equity access, full bank support",
      variant: 'right' as const
    },
    {
      title: "investments",
      description: "Portfolio reviews, property strategy, tax-aware performance", 
      variant: 'center' as const
    },
    {
      title: "ongoing advisory",
      description: "Trusted advice, plain-English breakdowns, continuous support",
      variant: 'left' as const
    }
  ];

  return (
    <section 
      id="our-services"
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.sections.ourServices }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Title - ALL LOWERCASE, DARK COLOR */}
          <h2 
            className="font-extrabold leading-tight mb-8 lowercase"
            style={{
              fontSize: typography.sizes.hero,
              letterSpacing: typography.tracking.widest,
              color: colors.text.primary,
              fontFamily: typography.families.sans
            }}
          >
            practical financial solutions that work
          </h2>
        </div>

        {/* Services Grid - Asymmetrical layout with varied card styles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              variant={service.variant}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Learn More Button - Same style as hero section */}
        <div className="flex justify-center mt-16">
          <button className="border-[#22282a] bg-[#22282a] text-[#66E8FA] hover:bg-[#394247] hover:scale-105 justify-center items-center flex min-h-[55px] gap-[13px] overflow-hidden px-[22px] py-[17px] rounded-[13.79px] text-[21px] font-normal whitespace-nowrap uppercase tracking-[-0.62px] leading-none transition-all duration-300">
            <span className="pb-px">learn more</span>
          </button>
        </div>
      </div>
    </section>
  );
};