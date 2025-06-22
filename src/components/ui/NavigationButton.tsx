import React from 'react';

interface NavigationButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  hasDropdown?: boolean;
  className?: string;
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
  href,
  onClick,
  children,
  variant = 'default',
  hasDropdown = false,
  className = ""
}) => {
  const baseClasses = "transition-all duration-300 cursor-pointer";
  
  const variantClasses = {
    default: "text-[#b1c5ce] hover:text-[#66E8FA] text-[16px] font-normal uppercase tracking-[-0.48px] leading-none flex items-center gap-1 py-2",
    primary: "border-[#66E8FA] bg-[#66E8FA] text-[#22282a] hover:bg-[#5dd8ea] hover:scale-105 justify-center items-center flex min-h-[48px] lg:min-h-[55px] gap-[13px] overflow-hidden px-[16px] lg:px-[22px] py-[12px] lg:py-[17px] rounded-[13.79px] text-[18px] lg:text-[21px] font-normal whitespace-nowrap uppercase tracking-[-0.62px] leading-none",
    secondary: "border-[#394247] text-[#b1c5ce] border border-solid hover:bg-[#394247] hover:scale-105 justify-center items-center flex min-h-[48px] lg:min-h-[55px] gap-[13px] overflow-hidden px-[16px] lg:px-[22px] py-[12px] lg:py-[17px] rounded-[13.79px] text-[18px] lg:text-[21px] font-normal whitespace-nowrap uppercase tracking-[-0.62px] leading-none"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span className={variant === 'default' ? "" : "pb-px"}>
        {children}
      </span>
      {hasDropdown && variant === 'default' && (
        <span className="text-[#66E8FA] text-[16px] font-normal">+</span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};