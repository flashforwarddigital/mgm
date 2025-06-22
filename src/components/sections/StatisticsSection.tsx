import React, { useEffect, useRef, useState } from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

interface StatItemProps {
  number: string;
  label: string;
  delay?: number;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay = 0, index }) => {
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
      { threshold: 0.3 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animateNumber = () => {
    const finalNumber = number;
    const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
    const suffix = finalNumber.replace(/\d/g, '');
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;
      
      if (step >= steps) {
        setAnimatedNumber(finalNumber);
        clearInterval(timer);
      } else {
        setAnimatedNumber(Math.floor(current) + suffix);
      }
    }, duration / steps);
  };

  return (
    <div 
      ref={statRef}
      className={`
        relative group cursor-pointer
        transform transition-all duration-1000 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative w-full h-64 bg-white/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center items-center border border-white/20 hover:border-[#66E8FA]/50 transition-all duration-500 hover-lift hover-glow overflow-hidden">
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#66E8FA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {/* Floating particles */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#66E8FA]/50 rounded-full animate-ping" style={{ animationDelay: `${index * 500}ms` }} />
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: `${index * 300 + 200}ms` }} />
        
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Animated number */}
          <div 
            className={`
              text-6xl font-extrabold mb-4 transition-all duration-500
              ${isVisible ? 'scale-100' : 'scale-75'}
            `}
            style={{ 
              color: colors.primary.cyan,
              textShadow: '0 0 20px rgba(102, 232, 250, 0.3)'
            }}
          >
            {animatedNumber}
          </div>
          
          {/* Label with typewriter effect */}
          <div 
            className={`
              text-xl font-medium uppercase tracking-wide text-center
              transition-all duration-700 ease-out
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{ 
              color: colors.text.light,
              transitionDelay: `${delay + 500}ms`
            }}
          >
            {label}
          </div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-[#66E8FA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-[#66E8FA]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Pulsing glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-[#66E8FA]/5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
      </div>
    </div>
  );
};

export const StatisticsSection: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { statistics } = siteContent.sections;

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

  return (
    <section 
      id="statistics"
      className="w-full py-32 px-4 relative overflow-hidden"
      style={{ backgroundColor: colors.sections.statistics }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#66E8FA]/5 to-transparent" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#66E8FA]/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#66E8FA]/5 rounded-full blur-2xl animate-float animation-delay-1000" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-white/20 animate-pulse" 
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header with enhanced animations */}
        <div ref={headerRef}>
          {/* Subtitle with fade-in */}
          <div 
            className={`
              flex justify-center gap-2 font-normal uppercase leading-none mb-16
              transform transition-all duration-1000 ease-out
              ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
            style={{ 
              fontSize: typography.sizes.base,
              color: colors.text.accent,
              letterSpacing: typography.tracking.normal
            }}
          >
            <span className="animate-fade-in-left animation-delay-200">({statistics.subtitle})</span>
          </div>

          {/* Title with staggered word animation */}
          <h2 
            className="font-extrabold leading-tight mb-16 lowercase relative"
            style={{ 
              fontSize: typography.sizes.hero,
              letterSpacing: typography.tracking.widest,
              color: colors.text.light
            }}
          >
            {statistics.title.split('\n').map((line, lineIndex) => (
              <div 
                key={lineIndex} 
                className={`
                  mb-2 transform transition-all duration-1000 ease-out
                  ${headerVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
                `}
                style={{ transitionDelay: `${lineIndex * 200 + 300}ms` }}
              >
                {line.split(' ').map((word, wordIndex) => (
                  <span 
                    key={wordIndex}
                    className={`
                      inline-block mr-4 transform transition-all duration-800 ease-out
                      ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                    `}
                    style={{ transitionDelay: `${(lineIndex * 2 + wordIndex) * 150 + 500}ms` }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            ))}
            
            {/* Animated underline */}
            <div 
              className={`
                absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-[#66E8FA]/30
                transition-all duration-1500 ease-out
                ${headerVisible ? 'w-32' : 'w-0'}
              `}
              style={{ transitionDelay: '1000ms' }}
            />
          </h2>
        </div>

        {/* Statistics Grid with enhanced staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {statistics.stats.map((stat, index) => (
            <StatItem 
              key={index}
              number={stat.number}
              label={stat.label}
              delay={index * 200 + 800} // Staggered after header
              index={index}
            />
          ))}
        </div>

        {/* Decorative bottom elements */}
        <div className="flex justify-center mt-20 space-x-8">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`
                w-1 h-16 bg-gradient-to-t from-[#66E8FA]/30 to-transparent
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