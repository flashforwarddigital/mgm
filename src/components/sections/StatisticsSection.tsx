import React, { useEffect, useRef, useState } from 'react';
import { colors, typography } from '../../config/design-system';

interface StatItemProps {
  number: string;
  label: string;
  description: string;
  delay?: number;
  index: number;
  angle?: number;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const StatItem: React.FC<StatItemProps> = ({ 
  number, 
  label, 
  description, 
  delay = 0, 
  index, 
  angle = 0,
  size = 'medium',
  color = '#66E8FA'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState('0');
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            animateNumber();
          }, delay);
        }
      },
      { threshold: 0.2 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animateNumber = () => {
    const finalNumber = number;
    
    // Handle different number formats
    if (finalNumber.includes('in')) {
      // Handle "1 in 3" format
      const parts = finalNumber.split(' ');
      let currentNum = 0;
      const targetNum = parseInt(parts[0]);
      const duration = 1500;
      const steps = 30;
      const increment = targetNum / steps;

      const timer = setInterval(() => {
        currentNum += increment;
        if (currentNum >= targetNum) {
          setAnimatedNumber(finalNumber);
          clearInterval(timer);
        } else {
          setAnimatedNumber(`${Math.floor(currentNum)} in ${parts[2]}`);
        }
      }, duration / steps);
    } else if (finalNumber.includes('%')) {
      // Handle percentage
      const targetNum = parseInt(finalNumber.replace('%', ''));
      let currentNum = 0;
      const duration = 2000;
      const steps = 60;
      const increment = targetNum / steps;

      const timer = setInterval(() => {
        currentNum += increment;
        if (currentNum >= targetNum) {
          setAnimatedNumber(finalNumber);
          clearInterval(timer);
        } else {
          setAnimatedNumber(`${Math.floor(currentNum)}%`);
        }
      }, duration / steps);
    } else if (finalNumber.includes('$')) {
      // Handle currency
      const numericValue = parseFloat(finalNumber.replace(/[$,+]/g, ''));
      let currentNum = 0;
      const duration = 2500;
      const steps = 80;
      const increment = numericValue / steps;

      const timer = setInterval(() => {
        currentNum += increment;
        if (currentNum >= numericValue) {
          setAnimatedNumber(finalNumber);
          clearInterval(timer);
        } else {
          if (finalNumber.includes('billion')) {
            setAnimatedNumber(`$${(currentNum / 1000).toFixed(0)} billion`);
          } else if (finalNumber.includes('k') || finalNumber.includes('K')) {
            setAnimatedNumber(`$${(currentNum / 1000).toFixed(1)}k+`);
          } else {
            setAnimatedNumber(`$${Math.floor(currentNum)}+`);
          }
        }
      }, duration / steps);
    } else if (finalNumber.includes('out of')) {
      // Handle "7 out of 10" format
      const parts = finalNumber.split(' ');
      let currentNum = 0;
      const targetNum = parseInt(parts[0]);
      const duration = 1800;
      const steps = 35;
      const increment = targetNum / steps;

      const timer = setInterval(() => {
        currentNum += increment;
        if (currentNum >= targetNum) {
          setAnimatedNumber(finalNumber);
          clearInterval(timer);
        } else {
          setAnimatedNumber(`${Math.floor(currentNum)} out of ${parts[3]}`);
        }
      }, duration / steps);
    } else {
      // Handle regular numbers
      const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
      const suffix = finalNumber.replace(/\d/g, '');
      let currentNum = 0;
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;

      const timer = setInterval(() => {
        currentNum += increment;
        if (currentNum >= numericValue) {
          setAnimatedNumber(finalNumber);
          clearInterval(timer);
        } else {
          setAnimatedNumber(Math.floor(currentNum) + suffix);
        }
      }, duration / steps);
    }
  };

  const sizeClasses = {
    small: 'w-72 h-56 p-6',
    medium: 'w-80 h-64 p-8',
    large: 'w-96 h-72 p-10'
  };

  const numberSizes = {
    small: 'text-4xl',
    medium: 'text-5xl',
    large: 'text-6xl'
  };

  return (
    <div 
      ref={statRef}
      className={`
        relative group cursor-pointer
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}
      style={{ 
        transitionDelay: `${delay}ms`,
        transform: `rotate(${angle}deg) ${isVisible ? 'translateY(0)' : 'translateY(48px)'}`,
        zIndex: index % 2 === 0 ? 10 : 5
      }}
    >
      <div className={`
        relative ${sizeClasses[size]} bg-white/95 backdrop-blur-sm rounded-3xl 
        flex flex-col justify-center items-center border border-gray-200 
        hover:border-[${color}]/50 transition-all duration-500 hover-lift hover-glow 
        overflow-hidden shadow-lg hover:shadow-2xl
      `}>
        
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${color}10 0%, transparent 50%)`
          }}
        />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        {/* Floating particles */}
        <div 
          className="absolute top-4 right-4 w-2 h-2 rounded-full animate-ping" 
          style={{ 
            backgroundColor: `${color}80`,
            animationDelay: `${index * 500}ms` 
          }} 
        />
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${index * 300 + 200}ms` }} />
        
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Animated number */}
          <div 
            className={`
              ${numberSizes[size]} font-extrabold mb-4 transition-all duration-500
              ${isVisible ? 'scale-100' : 'scale-75'}
            `}
            style={{ 
              color: color,
              textShadow: `0 0 20px ${color}30`,
              fontWeight: '900'
            }}
          >
            {animatedNumber}
          </div>
          
          {/* Label */}
          <div 
            className={`
              text-lg font-bold uppercase tracking-wide text-center mb-2
              transition-all duration-700 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{ 
              color: '#1f2937',
              transitionDelay: `${delay + 300}ms`
            }}
          >
            {label}
          </div>

          {/* Description */}
          <div 
            className={`
              text-sm text-gray-600 leading-relaxed max-w-64
              transition-all duration-700 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{ 
              transitionDelay: `${delay + 500}ms`
            }}
          >
            {description}
          </div>
        </div>

        {/* Decorative corner elements */}
        <div 
          className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: `${color}50` }}
        />
        <div 
          className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ borderColor: `${color}50` }}
        />
        
        {/* Cutout number effect */}
        <div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(45deg, transparent 30%, ${color}20 50%, transparent 70%)`
          }}
        />
      </div>
    </div>
  );
};

export const StatisticsSection: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    // Parallax scroll effect
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => {
      headerObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Financial statistics data - ALL USING BLUE COLOR NOW
  const statistics = [
    {
      number: "68%",
      label: "Feel Anxious",
      description: "of Australians feel anxious about their personal finances",
      angle: -3,
      size: 'medium' as const,
      color: '#66E8FA' // Changed to blue
    },
    {
      number: "1 in 3",
      label: "Business Failure",
      description: "small businesses fail in the first 2 years — mostly due to poor cash flow management",
      angle: 2,
      size: 'large' as const,
      color: '#66E8FA' // Changed to blue
    },
    {
      number: "80%",
      label: "No Financial Plan",
      description: "of people don't have a structured financial plan",
      angle: -2,
      size: 'medium' as const,
      color: '#66E8FA' // Changed to blue
    },
    {
      number: "$4,000+",
      label: "Potential Savings",
      description: "the average amount people could save yearly with better budgeting and loan structuring",
      angle: 4,
      size: 'large' as const,
      color: '#66E8FA' // Changed to blue
    },
    {
      number: "7 out of 10",
      label: "Wish Started Earlier",
      description: "Australians say they wish they'd started financial planning earlier",
      angle: -1,
      size: 'medium' as const,
      color: '#66E8FA' // Changed to blue
    },
    {
      number: "$150 billion",
      label: "Lost Annually",
      description: "lost annually by Australian SMEs due to preventable financial inefficiencies",
      angle: 3,
      size: 'large' as const,
      color: '#66E8FA' // Changed to blue
    },
    {
      number: "Up to 40%",
      label: "Income Redirection",
      description: "of income can be redirected toward long-term goals with expert strategy",
      angle: -4,
      size: 'medium' as const,
      color: '#66E8FA' // Changed to blue
    },
    {
      number: "63%",
      label: "No Portfolio Review",
      description: "of property investors don't regularly review their portfolio performance",
      angle: 1,
      size: 'medium' as const,
      color: '#66E8FA' // Changed to blue
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="statistics"
      className="w-full py-32 px-4 relative overflow-hidden"
      style={{ backgroundColor: colors.sections.statistics }}
    >
      {/* Enhanced animated background with 3D parallax */}
      <div className="absolute inset-0">
        {/* Gradient overlays with parallax */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-[#66E8FA]/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 20}px)` }}
        />
        
        {/* Large floating elements with 3D parallax */}
        <div 
          className="absolute top-20 left-20 w-64 h-64 bg-[#66E8FA]/10 rounded-full blur-3xl animate-float-slow"
          style={{ transform: `translateY(${scrollY * -30}px) translateX(${scrollY * 10}px)` }}
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-reverse"
          style={{ transform: `translateY(${scrollY * 25}px) translateX(${scrollY * -15}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#66E8FA]/5 rounded-full blur-2xl animate-float animation-delay-1000"
          style={{ transform: `translateY(${scrollY * -20}px) rotate(${scrollY * 45}deg)` }}
        />
        
        {/* Animated geometric shapes with parallax */}
        <div 
          className="absolute top-1/4 right-1/4 w-8 h-8 bg-[#66E8FA]/20 rounded-lg rotate-45 animate-float animation-delay-500"
          style={{ transform: `translateY(${scrollY * 40}px) rotate(${45 + scrollY * 90}deg)` }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-white/15 rounded-full animate-bounce animation-delay-1000"
          style={{ transform: `translateY(${scrollY * -35}px)` }}
        />
        
        {/* Floating particles with 3D movement */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#66E8FA]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3000}ms`,
              animationDuration: `${3000 + Math.random() * 2000}ms`,
              transform: `translateY(${scrollY * (Math.random() * 60 - 30)}px) translateX(${scrollY * (Math.random() * 40 - 20)}px)`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header with enhanced animations */}
        <div ref={headerRef}>
          {/* Subtitle with bounce-in effect */}
          <div 
            className={`
              flex justify-center gap-2 font-normal uppercase leading-none mb-8
              transform transition-all duration-1000 ease-out
              ${headerVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}
            `}
            style={{ 
              fontSize: typography.sizes.base,
              color: colors.text.accent,
              letterSpacing: typography.tracking.normal
            }}
          >
            <span className="animate-bounce-in animation-delay-200">(Statistics That Speak for Themselves)</span>
          </div>

          {/* Main title with word-by-word reveal */}
          <h2 
            className="font-extrabold leading-tight mb-6 lowercase relative"
            style={{
              fontSize: typography.sizes.hero,
              letterSpacing: typography.tracking.widest,
              color: colors.text.light
            }}
          >
            <div className="mb-2">
              {['statistics', 'that', 'speak', 'for'].map((word, index) => (
                <span 
                  key={index}
                  className={`
                    inline-block mr-4 transform transition-all duration-800 ease-out
                    ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                  `}
                  style={{ 
                    transitionDelay: `${index * 150 + 300}ms`
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
            <div>
              <span 
                className={`
                  inline-block transform transition-all duration-800 ease-out
                  ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `}
                style={{ 
                  color: colors.primary.cyan,
                  transitionDelay: '900ms'
                }}
              >
                themselves
              </span>
            </div>
            
            {/* Animated underline */}
            <div 
              className={`
                absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#66E8FA] to-transparent
                transition-all duration-1500 ease-out
                ${headerVisible ? 'w-64 opacity-100' : 'w-0 opacity-0'}
              `}
              style={{ transitionDelay: '1200ms' }}
            />
          </h2>

          {/* Intro copy */}
          <p 
            className={`
              text-xl text-[#92a6b0] max-w-4xl mx-auto mb-16
              transform transition-all duration-1000 ease-out
              ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
            style={{ transitionDelay: '600ms' }}
          >
            The numbers are real — and they show just how critical smart financial guidance can be.
          </p>
        </div>

        {/* Statistics Grid - Masonry-style layout with overlapping cards */}
        <div className="relative max-w-6xl mx-auto">
          {/* Grid container with custom positioning */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                className={`
                  ${index === 1 || index === 3 || index === 5 ? 'lg:col-span-1 xl:col-span-1' : ''}
                  ${index === 1 ? 'lg:transform lg:translate-y-8' : ''}
                  ${index === 3 ? 'lg:transform lg:-translate-y-4' : ''}
                  ${index === 5 ? 'lg:transform lg:translate-y-12' : ''}
                  ${index === 7 ? 'lg:transform lg:-translate-y-8' : ''}
                `}
                style={{
                  zIndex: statistics.length - index
                }}
              >
                <StatItem 
                  number={stat.number}
                  label={stat.label}
                  description={stat.description}
                  delay={index * 200 + 800}
                  index={index}
                  angle={stat.angle}
                  size={stat.size}
                  color={stat.color}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bottom elements with enhanced animations */}
        <div className="flex justify-center mt-20 space-x-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`
                w-1 bg-gradient-to-t from-[#66E8FA]/30 to-transparent
                transform transition-all duration-1000 ease-out
                ${headerVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
              `}
              style={{ 
                transitionDelay: `${i * 100 + 1500}ms`,
                height: `${Math.random() * 32 + 16}px`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};