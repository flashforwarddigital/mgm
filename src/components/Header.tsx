import React from 'react';
import { Logo } from './ui/Logo';
import { NavigationButton } from './ui/NavigationButton';
import { siteContent } from '../config/content';

export const Header: React.FC = () => {
  const { header } = siteContent;

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
  };

  return (
    <header className="sticky top-0 w-full backdrop-blur-md bg-black/20 border-b border-white/10 z-50">
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

      {/* Mobile Navigation Menu - Hidden by default */}
      <div className="lg:hidden hidden bg-black/90 backdrop-blur-md border-t border-white/10">
        <div className="px-4 py-6 space-y-4">
          <NavigationButton onClick={() => scrollToSection('about-gmg')} className="block w-full text-left">
            About GMG
          </NavigationButton>
          <NavigationButton onClick={() => scrollToSection('our-services')} className="block w-full text-left">
            Our Services
          </NavigationButton>
          <NavigationButton onClick={() => scrollToSection('financial-health-check')} className="block w-full text-left">
            Health Check
          </NavigationButton>
          <NavigationButton onClick={() => scrollToSection('statistics')} className="block w-full text-left">
            Statistics
          </NavigationButton>
          <NavigationButton onClick={() => scrollToSection('contact-us')} className="block w-full text-left">
            Contact
          </NavigationButton>
          
          {/* Mobile CTA Button - Only "Book a meeting" */}
          <div className="pt-4">
            <NavigationButton href="/meeting" variant="primary" className="block w-full text-center">
              {header.cta.primary}
            </NavigationButton>
          </div>
        </div>
      </div>
    </header>
  );
};