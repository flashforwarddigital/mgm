
import React from 'react';

interface SocialIconProps {
  href: string;
  iconSrc: string;
  alt: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ 
  href, 
  iconSrc, 
  alt, 
  className = "" 
}) => {
  return (
    <a 
      href={href} 
      className={`justify-center items-center flex min-h-[50px] flex-col w-[50px] h-[50px] max-w-[162px] bg-[rgba(57,66,71,0.50)] px-4 rounded-[10.94px] hover:bg-[#394247] transition-colors ${className}`}
    >
      <img
        src={iconSrc}
        className="aspect-[1.06] object-contain w-[18px] flex-1"
        alt={alt}
      />
    </a>
  );
};
