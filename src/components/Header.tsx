import React, { useState, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { NavigationButton } from './ui/NavigationButton';
import { siteContent } from '../config/content';

export const Header: React.FC = () => {
  const { header } = siteContent;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Custom easing function for smooth scroll
      const start = window.pageYOffset;
      const target = element.offsetTop - 80; // Account for header height
      const distance = target - start;
      const duration = 1200; // 1.2 seconds
      let startTime: number | null = null;

      // Easing function - starts slow, speeds up, then slows down
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const easedProgress = easeInOutCubic(progress);
        window.scrollTo(0, start + distance * easedProgress);
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`
        sticky top-0 w-full z-50 transition-all duration-500 ease-out
        ${isScrolled 
          ? 'backdrop-blur-xl bg-black/40 border-b border-white/20 shadow-lg' 
          : 'backdrop-blur-md bg-black/20 border-b border-white/10'
        }
      `}
    >
      <nav className="w-full px-4 py-4 flex items-center justify-between animate-fade-in-down">
        {/* Logo - Animated entrance */}
        <div className="flex-shrink-0 animate-fade-in-left">
          <Logo />
        </div>

        {/* Navigation Items - Staggered animation */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
          <NavigationButton 
            onClick={() => scrollToSection('about-gmg')}
            className="animate-fade-in-up animation-delay-200 hover-lift"
          >
            About GMG
          </NavigationButton>
          <NavigationButton 
            onClick={() => scrollToSection('our-services')}
            className="animate-fade-in-up animation-delay-300 hover-lift"
          >
            Our Services
          </NavigationButton>
          <NavigationButton 
            onClick={() => scrollToSection('financial-health-check')}
            className="animate-fade-in-up animation-delay-400 hover-lift"
          >
            Health Check
          </NavigationButton>
          <NavigationButton 
            onClick={() => scrollToSection('statistics')}
            className="animate-fade-in-up animation-delay-500 hover-lift"
          >
            Statistics
          </NavigationButton>
          <NavigationButton 
            onClick={() => scrollToSection('contact-us')}
            className="animate-fade-in-up animation-delay-600 hover-lift"
          >
            Contact
          </NavigationButton>
        </div>

        {/* Mobile Menu Button - Animated */}
        <div className="lg:hidden flex-shrink-0">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover-scale transition-all duration-300 animate-fade-in-right"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`
                  absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out
                  ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}
                `}
              />
              <span 
                className={`
                  absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out translate-y-2
                  ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
                `}
              />
              <span 
                className={`
                  absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out translate-y-4
                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'}
                `}
              />
            </div>
          </button>
        </div>

        {/* CTA Button - Animated entrance */}
        <div className="hidden md:flex flex-shrink-0">
          <NavigationButton 
            href="/meeting" 
            variant="primary" 
            className="text-sm lg:text-base px-4 lg:px-6 animate-fade-in-right animation-delay-700 btn-animated hover-glow"
          >
            {header.cta.primary}
          </NavigationButton>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Slide animation */}
      <div 
        className={`
          lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 overflow-hidden transition-all duration-500 ease-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 py-6 space-y-4">
          {[
            { label: 'About GMG', id: 'about-gmg' },
            { label: 'Our Services', id: 'our-services' },
            { label: 'Health Check', id: 'financial-health-check' },
            { label: 'Statistics', id: 'statistics' },
            { label: 'Contact', id: 'contact-us' }
          ].map((item, index) => (
            <NavigationButton 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className={`
                block w-full text-left transform transition-all duration-500 ease-out hover-lift
                ${isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-8 opacity-0'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.label}
            </NavigationButton>
          ))}
          
          {/* Mobile CTA Button */}
          <div 
            className={`
              pt-4 transform transition-all duration-500 ease-out
              ${isMobileMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-8 opacity-0'
              }
            `}
            style={{ transitionDelay: '500ms' }}
          >
            <NavigationButton 
              href="/meeting" 
              variant="primary" 
              className="block w-full text-center btn-animated hover-glow"
            >
              {header.cta.primary}
            </NavigationButton>
          </div>
        </div>
      </div>
    </header>
  );
};