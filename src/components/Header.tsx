import React from 'react';
import { Logo } from './ui/Logo';
import { NavigationButton } from './ui/NavigationButton';
import { NAVIGATION_ITEMS } from '../constants/navigation';

export const Header: React.FC = () => {
  return (
    <header className="w-full backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Left side */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Navigation Items - Centered */}
        <div className="hidden lg:flex items-center justify-center flex-1 gap-12">
          {NAVIGATION_ITEMS.map((item) => (
            <NavigationButton
              key={item.label}
              href={'href' in item ? item.href : undefined}
              hasDropdown={'hasDropdown' in item ? item.hasDropdown : false}
            >
              {item.label}
            </NavigationButton>
          ))}
        </div>

        {/* CTA Buttons - Right side */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <NavigationButton href="/contact" variant="secondary">
            Get in touch
          </NavigationButton>
          <NavigationButton href="/meeting" variant="primary">
            Book a meeting
          </NavigationButton>
        </div>
      </nav>
    </header>
  );
};