import React from 'react';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'header', className = "" }) => {
  if (variant === 'footer') {
    return (
      <a href="/" className={`flex items-center ${className}`}>
        <img
          src="/templogo.png"
          className="h-10 w-auto object-contain"
          alt="GMG Financial Services"
        />
      </a>
    );
  }

  return (
    <a href="/" className={`flex items-center ${className}`}>
      <img
        src="/templogo.png"
        className="h-12 w-auto object-contain"
        alt="GMG Financial Services"
      />
    </a>
  );
};