import React from 'react';
import { Logo } from './ui/Logo';
import { NavigationButton } from './ui/NavigationButton';
import { siteContent } from '../config/content';

export const Header: React.FC = () => {
  const { header } = siteContent;

  return (
    <header className="w-full backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="w-full px-0 py-4 flex items-center">
        {/* Logo - Flush to left edge */}
        <div className="pl-6">
          <Logo />
        </div>

        {/* Navigation Items - Absolutely centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center gap-12">
          {header.navigation.map((item) => (
            <NavigationButton
              key={item.label}
              href={'href' in item ? item.href : undefined}
              hasDropdown={'hasDropdown' in item ? item.hasDropdown : false}
            >
              {item.label}
            </NavigationButton>
          ))}
        </div>

        {/* CTA Buttons - Flush to right edge */}
        <div className="ml-auto pr-6 flex items-center gap-4">
          <NavigationButton href="/contact" variant="secondary">
            {header.cta.secondary}
          </NavigationButton>
          <NavigationButton href="/meeting" variant="primary">
            {header.cta.primary}
          </NavigationButton>
        </div>
      </nav>
    </header>
  );
};