import React from 'react';
import { Logo } from './ui/Logo';
import { NavigationButton } from './ui/NavigationButton';
import { NAVIGATION_ITEMS } from '../constants/navigation';

export const Header: React.FC = () => {
  return (
    <header className="w-full backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
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

        <div className="flex items-center gap-4">
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