import React, { useState, useEffect } from 'react';
import { Logo } from './ui/Logo';
import { NavigationButton } from './ui/NavigationButton';
import { siteContent } from '../config/content';

export const Header: React.FC = () => {
  const { header } = siteContent;
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Show sticky header after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Custom easing function for smooth scroll
      const start = window.pageYOffset;
      const target = element.offsetTop - 88; // Account for sticky header height
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
  };

  return (
    <>
      {/* Original Header - Shows on hero section */}
      <header className={`w-full backdrop-blur-md bg-black/20 border-b border-white/10 relative z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <nav className="w-full px-4 py-4 flex items-center justify-between">
          {/* Logo - Flush to left edge */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navigation Items - Centered on larger screens, hidden on mobile */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
            <NavigationButton onClick={() => scrollToSection('about-gmg')}>
              About GMG
            </NavigationButton>
            <NavigationButton onClick={() => scrollToSection('our-services')}>
              Our Services
            </NavigationButton>
            <NavigationButton onClick={() => scrollToSection('financial-health-check')}>
              Health Check
            </NavigationButton>
            <NavigationButton onClick={() => scrollToSection('statistics')}>
              Statistics
            </NavigationButton>
            <NavigationButton onClick={() => scrollToSection('contact-us')}>
              Contact
            </NavigationButton>
          </div>

          {/* Mobile Menu Button - Only visible on mobile */}
          <div className="lg:hidden flex-shrink-0">
            <button className="text-white p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* CTA Button - Only "Book a meeting" button, flush to right edge */}
          <div className="hidden md:flex flex-shrink-0">
            <NavigationButton href="/meeting" variant="primary" className="text-sm lg:text-base px-4 lg:px-6">
              {header.cta.primary}
            </NavigationButton>
          </div>
        </nav>
      </header>

      {/* Sticky Header - Shows when scrolling */}
      <header className={`sticky-header transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <nav className="w-full px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navigation Items - Centered */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6">
            <NavigationButton onClick={() => scrollToSection('about-gmg')}>
              About GMG
            </NavigationButton>
            <NavigationButton onClick={() => scrollToSection('our-services')}>
              Our Services
            </NavigationButton>
            <NavigationButton onClick={() => scrollToSection('financial-health-check')}>
              Health Check
            </NavigationButton>
            <NavigationButton onClick={() => scrollToSection('statistics')}>
              Statistics
            </NavigationButton>
            <NavigationButton onClick={() => scrollToSection('contact-us')}>
              Contact
            </NavigationButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-shrink-0">
            <button className="text-white p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <NavigationButton href="/meeting" variant="primary" className="text-sm px-4 py-2">
              {header.cta.primary}
            </NavigationButton>
          </div>
        </nav>
      </header>
    </>
  );
};