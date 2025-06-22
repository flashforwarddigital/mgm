import React from 'react';
import { colors, typography } from '../../config/design-system';

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay = 0 }) => {
  return (
    <div 
      className={`
        bg-white/80 backdrop-blur-sm rounded-xl p-6 
        border border-gray-200 hover:border-gray-300 
        hover:shadow-md transition-all duration-300
        animate-fade-in-up
      `}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-3 capitalize">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const OurServicesSection: React.FC = () => {
  const services = [
    {
      title: "Planning & Budgeting",
      description: "Realistic plans, goal alignment, everyday budgeting systems"
    },
    {
      title: "Cash Flow & Performance", 
      description: "Business insights, efficiency, profitability"
    },
    {
      title: "Strategy & Structuring",
      description: "Right setup, legal/accountant alignment, tax optimisation"
    },
    {
      title: "Lending & Finance",
      description: "Tailored loans, refinancing, equity access, full bank support"
    },
    {
      title: "Investments",
      description: "Portfolio reviews, property strategy, tax-aware performance"
    },
    {
      title: "Ongoing Advisory",
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
          {/* Title */}
          <h2 
            className="font-extrabold leading-tight mb-8 text-gray-900"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              letterSpacing: '-0.02em'
            }}
          >
            Our Services
          </h2>
          
          {/* Subtitle */}
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored for your success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
};