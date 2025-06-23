import React, { useEffect, useRef, useState } from 'react';
import { colors, typography } from '../../config/design-system';

interface ServiceCardProps {
  title: string;
  description: string;
  delay?: number;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, delay = 0, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`
        bg-white/80 backdrop-blur-sm rounded-xl p-6 
        border border-gray-200 hover:border-[#66E8FA]/50 
        hover:shadow-xl hover:shadow-[#66E8FA]/10
        transition-all duration-500 ease-out
        hover-lift hover-glow group relative overflow-hidden
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}
      style={{
        transitionDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#66E8FA]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card number indicator */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-[#66E8FA]/10 rounded-full flex items-center justify-center text-[#66E8FA] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 animate-bounce-in">
        {index + 1}
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {/* Title with enhanced hover effect */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 capitalize transition-all duration-300 group-hover:text-[#22282A] group-hover:scale-105 transform-gpu">
          {title}
        </h3>

        {/* Description with fade-in animation */}
        <p className="text-gray-700 text-sm leading-relaxed transition-all duration-300 group-hover:text-gray-800">
          {description}
        </p>
      </div>

      {/* Floating icon indicator */}
      <div className="absolute bottom-4 right-4 w-6 h-6 text-[#66E8FA] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </div>
    </div>
  );
};

export const OurServicesSection: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      className="w-full py-32 px-4 relative overflow-hidden"
      style={{ backgroundColor: colors.sections.ourServices }}
    >
      {/* GRADIENT FADE FROM CAROUSEL BACKGROUND - POSITIONED AT TOP AND FADES HIGH */}
      <div 
        className="absolute top-0 left-0 right-0 pointer-events-none z-20"
        style={{
          height: '200px', // Fade out high in the section
          background: `linear-gradient(to bottom, #22282A 0%, #22282A 20%, rgba(34, 40, 42, 0.8) 40%, rgba(34, 40, 42, 0.4) 70%, transparent 100%)`
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#22282A]/10 rounded-full blur-3xl animate-float-reverse" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-ping animation-delay-1000" />
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-white/15 rounded-lg rotate-45 animate-float animation-delay-1500" />
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-white/25 rounded-full animate-bounce animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with staggered animations */}
        <div ref={headerRef} className="text-center mb-20">
          {/* Title with enhanced animation */}
          <h2 
            className={`
              font-extrabold leading-tight mb-8 lowercase relative
              transform transition-all duration-1000 ease-out
              ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
            `}
            style={{
              fontSize: typography.sizes.hero,
              letterSpacing: typography.tracking.widest,
              color: colors.text.primary
            }}
          >
            <span className="relative inline-block">
              our services
              {/* Animated underline */}
              <div 
                className={`
                  absolute bottom-0 left-0 h-1 bg-[#22282A]/20 transition-all duration-1000 ease-out
                  ${headerVisible ? 'w-full' : 'w-0'}
                `}
                style={{ transitionDelay: '500ms' }}
              />
            </span>
          </h2>
          
          {/* Subtitle with fade-in */}
          <p 
            className={`
              text-xl text-gray-700 max-w-3xl mx-auto
              transform transition-all duration-1000 ease-out
              ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
            style={{ transitionDelay: '300ms' }}
          >
            Comprehensive financial solutions tailored for your success
          </p>
        </div>

        {/* Services Grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              delay={index * 150 + 600} // Staggered delay after header
              index={index}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-16 space-x-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`
                w-2 h-2 bg-[#22282A]/30 rounded-full
                animate-pulse
              `}
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};