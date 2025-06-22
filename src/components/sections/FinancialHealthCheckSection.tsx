import React, { useEffect, useRef, useState } from 'react';
import { colors, typography } from '../../config/design-system';

interface ProgressCircleProps {
  percentage: number;
  label: string;
  color: string;
  delay?: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({ percentage, label, color, delay = 0 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimatedPercentage(percentage);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, [percentage, delay]);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div ref={circleRef} className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-2000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      </div>
      <span className="text-sm text-white/80 text-center font-medium">{label}</span>
    </div>
  );
};

interface ChecklistItemProps {
  text: string;
  isChecked: boolean;
  delay?: number;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ text, isChecked, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className={`
        flex items-center gap-3 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 shadow-lg
        transform transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`
        w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500
        ${isChecked ? 'bg-[#66E8FA] border-[#66E8FA]' : 'border-gray-400'}
      `}>
        {isChecked && (
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path 
              d="M1 5L5 9L13 1" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="animate-[draw_0.5s_ease-out_forwards]"
              style={{
                strokeDasharray: '20',
                strokeDashoffset: isVisible ? '0' : '20',
                transition: 'stroke-dashoffset 0.5s ease-out'
              }}
            />
          </svg>
        )}
      </div>
      <span className="text-gray-800 text-sm font-medium">{text}</span>
    </div>
  );
};

interface FloatingCardProps {
  title: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  position: string;
  delay?: number;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ title, value, trend, position, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const trendColors = {
    up: '#10B981',
    down: '#EF4444',
    neutral: '#6B7280'
  };

  const trendIcons = {
    up: '↗',
    down: '↘',
    neutral: '→'
  };

  return (
    <div 
      ref={cardRef}
      className={`
        absolute ${position} bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-gray-200 shadow-xl
        transform transition-all duration-1000 ease-out hover:scale-105 hover:bg-white
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
      `}
      style={{ 
        transitionDelay: `${delay}ms`,
        minWidth: '160px'
      }}
    >
      <div className="text-gray-600 text-xs font-medium uppercase tracking-wide mb-1">
        {title}
      </div>
      <div className="flex items-center justify-between">
        <span className="text-gray-900 text-lg font-bold">{value}</span>
        <span 
          className="text-sm font-medium"
          style={{ color: trendColors[trend] }}
        >
          {trendIcons[trend]}
        </span>
      </div>
    </div>
  );
};

export const FinancialHealthCheckSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checklistItems = [
    { text: "Cash Flow Analysis", isChecked: true },
    { text: "Debt Structure Review", isChecked: true },
    { text: "Investment Portfolio Assessment", isChecked: true },
    { text: "Tax Optimization Opportunities", isChecked: false },
    { text: "Risk Management Strategy", isChecked: false },
    { text: "Growth Planning Roadmap", isChecked: false }
  ];

  return (
    <section 
      ref={sectionRef}
      id="financial-health-check"
      className="w-full py-32 px-4 relative overflow-hidden"
      style={{ backgroundColor: colors.sections.financialHealthCheck }}
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 50}px)`,
          background: 'radial-gradient(circle at 20% 80%, #66E8FA 0%, transparent 50%), radial-gradient(circle at 80% 20%, #22282A 0%, transparent 50%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-12">
            {/* Title - CLOSER SPACING WITH HIGHLIGHTED KEYWORDS */}
            <div>
              <h2 
                className="font-extrabold lowercase leading-none"
                style={{ 
                  fontSize: typography.sizes.hero,
                  letterSpacing: typography.tracking.widest,
                  color: colors.text.primary,
                  lineHeight: '0.9' // Tighter line height for closer spacing
                }}
              >
                <div className="mb-1">know exactly</div>
                <div className="mb-1">
                  <span className="text-[#22282a]">where you </span>
                  <span className="text-[#66E8FA] relative">
                    stand
                    <span className="absolute bottom-0 left-0 w-full h-2 bg-[#66E8FA]/20 -z-10"></span>
                  </span>
                </div>
              </h2>
            </div>

            {/* Description */}
            <div 
              className="text-xl leading-relaxed"
              style={{ 
                color: colors.text.secondary,
                lineHeight: typography.lineHeights.loose
              }}
            >
              <p className="mb-6">
                Our Financial Health Check reveals risks, inefficiencies, and opportunities — all in one easy-to-understand overview with{' '}
                <span className="relative inline-block">
                  <span className="text-[#66E8FA] font-semibold relative z-10">actionable steps</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#66E8FA]/30 animate-pulse"></span>
                </span>
                .
              </p>
            </div>

            {/* SINGLE COMBINED CTA BUTTON */}
            <div className="pt-4">
              <button className="border-[#66E8FA] bg-[#66E8FA] text-[#22282a] hover:bg-[#5dd8ea] hover:scale-105 justify-center items-center flex min-h-[55px] gap-[13px] overflow-hidden px-[22px] py-[17px] rounded-[13.79px] text-[21px] font-normal whitespace-nowrap uppercase tracking-[-0.62px] leading-none transition-all duration-300">
                <span className="pb-px">Check My Financial Health</span>
              </button>
            </div>
          </div>

          {/* Right Side - Interactive Dashboard */}
          <div className="relative">
            {/* Main Dashboard Container */}
            <div 
              className="relative bg-[#22282A]/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              style={{
                transform: `translateY(${scrollY * -20}px) rotateX(${scrollY * 5}deg)`,
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white text-xl font-bold">Financial Health Dashboard</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Progress Circles */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <ProgressCircle 
                  percentage={85} 
                  label="Cash Flow" 
                  color="#10B981" 
                  delay={200}
                />
                <ProgressCircle 
                  percentage={72} 
                  label="Debt Ratio" 
                  color="#F59E0B" 
                  delay={400}
                />
                <ProgressCircle 
                  percentage={91} 
                  label="Investment" 
                  color="#66E8FA" 
                  delay={600}
                />
              </div>

              {/* Mock Chart Area */}
              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <div className="flex items-end justify-between h-24 gap-2">
                  {[65, 78, 82, 75, 88, 92, 85].map((height, index) => (
                    <div 
                      key={index}
                      className="bg-[#66E8FA] rounded-t-sm transition-all duration-1000 ease-out"
                      style={{ 
                        height: `${height}%`,
                        transitionDelay: `${index * 100 + 800}ms`,
                        width: '12px'
                      }}
                    />
                  ))}
                </div>
                <div className="text-white/60 text-xs mt-2 text-center">
                  Financial Performance Trend
                </div>
              </div>

              {/* Health Score */}
              <div className="text-center">
                <div className="text-[#66E8FA] text-3xl font-bold mb-1">8.2/10</div>
                <div className="text-white/70 text-sm">Overall Health Score</div>
              </div>
            </div>

            {/* IMPROVED FLOATING UI CARDS - Better visibility with white backgrounds */}
            <FloatingCard
              title="Monthly Savings"
              value="$2,450"
              trend="up"
              position="top-4 -left-8"
              delay={1000}
            />

            <FloatingCard
              title="Debt Reduction"
              value="15%"
              trend="up"
              position="top-1/3 -right-12"
              delay={1200}
            />

            <FloatingCard
              title="Investment Growth"
              value="$12.5K"
              trend="up"
              position="bottom-8 -left-6"
              delay={1400}
            />

            {/* IMPROVED FLOATING CHECKLIST - Better visibility */}
            <div 
              className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-72 space-y-3"
              style={{
                transform: `translateY(${scrollY * 10}px) translateX(-50%)`
              }}
            >
              {checklistItems.map((item, index) => (
                <ChecklistItem
                  key={index}
                  text={item.text}
                  isChecked={item.isChecked}
                  delay={1600 + (index * 150)}
                />
              ))}
            </div>

            {/* Decorative Elements */}
            <div 
              className="absolute -top-12 -left-12 w-24 h-24 bg-[#66E8FA]/20 rounded-full blur-xl animate-pulse"
              style={{
                transform: `translateY(${scrollY * 30}px)`
              }}
            />
            <div 
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#22282A]/20 rounded-full blur-2xl animate-pulse"
              style={{
                transform: `translateY(${scrollY * -25}px)`,
                animationDelay: '1s'
              }}
            />
          </div>
        </div>
      </div>

      {/* Additional CSS for animations */}
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
};