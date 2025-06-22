import React from 'react';
import { Logo } from './ui/Logo';
import { NavigationButton } from './ui/NavigationButton';
import { NAVIGATION_ITEMS } from '../constants/navigation';

export const Header: React.FC = () => {
  return (
    <header className="relative justify-center items-stretch backdrop-blur-[15px] bg-[#22282A] flex mb-[-270px] min-h-[88px] py-3 max-md:mb-2.5">
      <nav className="justify-between items-center relative z-0 flex w-full gap-[40px_100px] h-full flex-1 shrink basis-[0%] px-[22px] py-[5px] max-md:max-w-full max-md:px-5">
        <Logo />

        <div className="absolute z-0 flex min-w-60 min-h-[63px] items-center justify-center gap-8 left-1/2 transform -translate-x-1/2 max-md:max-w-full">
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

        <div className="self-stretch z-0 flex min-w-60 gap-[11px] my-auto">
          <NavigationButton href="/contact" variant="secondary">
            Get in touch
          </NavigationButton>
          <NavigationButton href="/meeting" variant="primary">
            Book a meeting
          </NavigationButton>
        </div>
      </nav>
      <div className="bg-[rgba(59,65,68,0.50)] absolute z-0 flex min-h-px w-[1920px] h-px right-0 bottom-0 max-md:max-w-full" />
    </header>
  );
};