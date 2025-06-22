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
      className={`
        justify-center items-center flex min-h-[50px] flex-col w-[50px] h-[50px] 
        max-w-[162px] bg-[rgba(57,66,71,0.50)] px-4 rounded-[10.94px] 
        hover:bg-[#394247] hover:scale-110 hover:rotate-3
        transition-all duration-300 ease-out
        relative group overflow-hidden
        ${className}
      `}
    >
      {/* Hover shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Icon with enhanced hover effect */}
      <img
        src={iconSrc}
        className="aspect-[1.06] object-contain w-[18px] flex-1 transition-all duration-300 group-hover:scale-125 group-hover:brightness-125 relative z-10"
        alt={alt}
      />
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-[10.94px] bg-[#66E8FA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
    </a>
  );
};