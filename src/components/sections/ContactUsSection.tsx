import React, { useEffect, useRef, useState } from 'react';
import { colors, typography } from '../../config/design-system';
import { siteContent } from '../../config/content';

export const ContactUsSection: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const { contactUs } = siteContent.sections;

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const buttonsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setButtonsVisible(true), 500);
        }
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (buttonsRef.current) {
      buttonsObserver.observe(buttonsRef.current);
    }

    return () => {
      headerObserver.disconnect();
      buttonsObserver.disconnect();
    };
  }, []);

  return (
    <section 
      id="contact-us"
      className="w-full py-32 px-4 relative overflow-hidden"
      style={{ backgroundColor: colors.sections.contactUs }}
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-[#22282A]/10 to-transparent" />
        
        {/* Large floating elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#22282A]/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float animation-delay-1000" />
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-lg rotate-45 animate-float animation-delay-500" />
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-white/15 rounded-full animate-bounce animation-delay-1000" />
        <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-white/25 rounded-full animate-ping animation-delay-1500" />
        <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-white/10 rounded-xl rotate-12 animate-float-reverse animation-delay-2000" />
        
        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3000}ms`,
              animationDuration: `${3000 + Math.random() * 2000}ms`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header with enhanced animations */}
        <div ref={headerRef}>
          {/* Subtitle with bounce-in effect */}
          <div 
            className={`
              flex justify-center gap-2 font-normal uppercase leading-none mb-16
              transform transition-all duration-1000 ease-out
              ${headerVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'}
            `}
            style={{ 
              fontSize: typography.sizes.base,
              color: colors.text.muted,
              letterSpacing: typography.tracking.normal
            }}
          >
            <span className="animate-bounce-in animation-delay-200">({contactUs.subtitle})</span>
          </div>

          {/* Title with word-by-word reveal */}
          <h2 
            className="font-extrabold leading-tight mb-8 lowercase relative"
            style={{
              fontSize: typography.sizes.hero,
              letterSpacing: typography.tracking.widest,
            }}
          >
            {contactUs.title.split('\n').map((line, lineIndex) => (
              <div key={lineIndex} className="mb-2">
                {lineIndex === 0 ? (
                  <span 
                    className={`
                      inline-block transform transition-all duration-1000 ease-out
                      ${headerVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
                    `}
                    style={{ 
                      color: colors.text.primary,
                      transitionDelay: '300ms'
                    }}
                  >
                    {line}
                  </span>
                ) : (
                  <>
                    {line.split(' ').slice(0, 3).join(' ').split(' ').map((word, wordIndex) => (
                      <span 
                        key={wordIndex}
                        className={`
                          inline-block mr-2 transform transition-all duration-800 ease-out
                          ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                        `}
                        style={{ 
                          color: colors.text.primary,
                          transitionDelay: `${wordIndex * 150 + 500}ms`
                        }}
                      >
                        {word}
                      </span>
                    ))}
                    <span 
                      className={`
                        inline-block transform transition-all duration-800 ease-out
                        ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                      `}
                      style={{ 
                        color: colors.text.light,
                        transitionDelay: '950ms'
                      }}
                    >
                      financial future
                    </span>
                  </>
                )}
              </div>
            ))}
            
            {/* Animated accent line */}
            <div 
              className={`
                absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#66E8FA] to-transparent
                transition-all duration-1500 ease-out
                ${headerVisible ? 'w-64 opacity-100' : 'w-0 opacity-0'}
              `}
              style={{ transitionDelay: '1200ms' }}
            />
          </h2>

          {/* Description with typewriter effect */}
          <div 
            className={`
              max-w-4xl mx-auto mb-12 transform transition-all duration-1000 ease-out
              ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
            style={{ 
              fontSize: typography.sizes['3xl'],
              color: colors.text.secondary,
              lineHeight: typography.lineHeights.loose,
              transitionDelay: '800ms'
            }}
          >
            {contactUs.description.map((line, index) => (
              <p 
                key={index} 
                className={`
                  mb-2 transform transition-all duration-800 ease-out
                  ${headerVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 200 + 1000}ms` }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* CTA Buttons with enhanced animations */}
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary CTA Button */}
          <button 
            className={`
              px-8 py-4 bg-white text-[#22282a] font-semibold rounded-full 
              hover:bg-gray-100 hover:scale-105 hover:shadow-2xl
              transition-all duration-500 ease-out
              btn-animated hover-glow relative group overflow-hidden
              transform
              ${buttonsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Button shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {/* Button content */}
            <span className="relative z-10 text-lg transition-transform duration-300 group-hover:scale-110">
              Schedule Consultation
            </span>
            
            {/* Floating icon */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </button>

          {/* Secondary CTA Button */}
          <button 
            className={`
              px-8 py-4 border-2 border-white text-white font-semibold rounded-full 
              hover:bg-white hover:text-[#22282a] hover:scale-105 hover:shadow-2xl
              transition-all duration-500 ease-out
              btn-animated relative group overflow-hidden
              transform
              ${buttonsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Button background fill effect */}
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            {/* Button content */}
            <span className="relative z-10 text-lg transition-all duration-300 group-hover:text-[#22282a] group-hover:scale-110">
              Download Brochure
            </span>
            
            {/* Floating icon */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:text-[#22282a]">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </div>
          </button>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-16 space-x-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`
                w-2 h-2 bg-white/30 rounded-full
                transform transition-all duration-1000 ease-out
                ${buttonsVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
              `}
              style={{ 
                transitionDelay: `${i * 100 + 600}ms`,
                animation: buttonsVisible ? `pulse 2s infinite ${i * 200}ms` : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};