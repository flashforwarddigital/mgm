import React from 'react';
import { colors, typography } from '../../config/design-system';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, className = "" }) => {
  return (
    <div 
      className={`group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer ${className}`}
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Icon */}
      <div className="w-14 h-14 bg-[#22282a]/10 backdrop-blur-sm rounded-xl border border-[#22282a]/20 flex items-center justify-center mb-6 group-hover:bg-[#22282a]/20 transition-colors duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 
        className="font-bold mb-4 lowercase"
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
        className="font-normal leading-relaxed"
        style={{ 
          fontSize: typography.sizes.base,
          color: colors.text.secondary,
          lineHeight: typography.lineHeights.loose,
          fontFamily: typography.families.sans
        }}
      >
        {description}
      </p>

      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#66E8FA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
    </div>
  );
};

export const OurServicesSection: React.FC = () => {
  const services = [
    {
      title: "planning & budgeting",
      description: "Realistic plans, goal alignment, everyday budgeting systems",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#22282a]">
          <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4"></path>
          <path d="M9 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
          <line x1="9" y1="16" x2="15" y2="16"></line>
        </svg>
      )
    },
    {
      title: "cash flow & performance",
      description: "Business insights, efficiency, profitability",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#22282a]">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline>
        </svg>
      )
    },
    {
      title: "strategy & structuring",
      description: "Right setup, legal/accountant alignment, tax optimisation",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#22282a]">
          <polygon points="12,2 2,7 12,12 22,7 12,2"></polygon>
          <polyline points="2,17 12,22 22,17"></polyline>
          <polyline points="2,12 12,17 22,12"></polyline>
        </svg>
      )
    },
    {
      title: "lending & finance",
      description: "Tailored loans, refinancing, equity access, full bank support",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#22282a]">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      title: "investments",
      description: "Portfolio reviews, property strategy, tax-aware performance",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#22282a]">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      title: "ongoing advisory",
      description: "Trusted advice, plain-English breakdowns, continuous support",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#22282a]">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
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
          {/* Title - ALL LOWERCASE, SAME SIZE AS HERO */}
          <h2 
            className="font-extrabold leading-tight mb-8 lowercase"
            style={{
              fontSize: typography.sizes.hero,
              letterSpacing: typography.tracking.widest,
              color: colors.text.light, // White color
              fontFamily: typography.families.sans
            }}
          >
            practical financial solutions that work
          </h2>
        </div>

        {/* Services Grid - 3 columns with minimal glass design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
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