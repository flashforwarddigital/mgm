import React from 'react';
import { colors, typography } from '../../config/design-system';
import { BackgroundGradient } from '../ui/background-gradient';

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-8 bg-white/80 backdrop-blur-sm">
      <div 
        className="group relative min-h-[200px] flex flex-col justify-center animate-fade-in-up"
        style={{
          animationDelay: `${delay}ms`,
          animationFillMode: 'forwards'
        }}
      >
        {/* Title */}
        <h3 
          className="font-bold mb-4 lowercase text-center"
          style={{ 
            fontSize: typography.sizes.xl,
            color: colors.text.primary,
            fontFamily: typography.families.sans
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p 
          className="font-normal leading-relaxed text-center"
          style={{ 
            fontSize: typography.sizes.base,
            color: colors.text.secondary,
            lineHeight: typography.lineHeights.loose,
            fontFamily: typography.families.sans
          }}
        >
          {description}
        </p>
      </div>
    </BackgroundGradient>
  );
};

export const OurServicesSection: React.FC = () => {
  const services = [
    {
      title: "planning & budgeting",
      description: "Realistic plans, goal alignment, everyday budgeting systems"
    },
    {
      title: "cash flow & performance",
      description: "Business insights, efficiency, profitability"
    },
    {
      title: "strategy & structuring",
      description: "Right setup, legal/accountant alignment, tax optimisation"
    },
    {
      title: "lending & finance",
      description: "Tailored loans, refinancing, equity access, full bank support"
    },
    {
      title: "investments",
      description: "Portfolio reviews, property strategy, tax-aware performance"
    },
    {
      title: "ongoing advisory",
      description: "Trusted advice, plain-English breakdowns, continuous support"
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
              color: colors.text.primary, // Dark color instead of light
              fontFamily: typography.families.sans
            }}
          >
            practical financial solutions that work
          </h2>
        </div>

        {/* Services Grid - 3 columns with background gradient cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              delay={index * 150}
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