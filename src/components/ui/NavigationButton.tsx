
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
  const baseClasses = "justify-center items-center flex min-h-[55px] gap-[13px] overflow-hidden my-auto px-[22px] py-[17px] rounded-[13.79px] max-md:px-5 transition-colors";
  
  const variantClasses = {
    default: "hover:bg-[#394247] text-[#b1c5ce]",
    primary: "border-[#66E8FA] bg-[#66E8FA] text-[#22282a] hover:bg-[#5dd8ea]",
    secondary: "border-[#394247] text-[#b1c5ce] border border-solid hover:bg-[#394247]"
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      <span className="text-[21px] font-normal whitespace-nowrap uppercase tracking-[-0.62px] leading-none my-auto pb-px">
        {children}
      </span>
      {hasDropdown && (
        <div className="flex min-h-[17px] items-center justify-center w-[17px] my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/535eef930b11ff55d2d3ea82445fae422bfff462?placeholderIfAbsent=true"
            className="aspect-[1.07] object-contain w-4 flex-1 shrink basis-[0%] my-auto"
            alt="Dropdown Arrow"
          />
        </div>
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
