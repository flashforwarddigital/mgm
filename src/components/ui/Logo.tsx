
import React from 'react';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'header', className = "" }) => {
  if (variant === 'footer') {
    return (
      <a href="/" className={`max-w-[1248px] justify-center items-stretch flex flex-col ${className}`}>
        <div className="max-w-[126px] w-[126px] overflow-hidden flex-1">
          <div className="flex min-h-[38px] w-full flex-col overflow-hidden items-center justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/cf727eda30d98d38162a16f458ce5624ee5a0eea?placeholderIfAbsent=true"
              className="aspect-[3.31] object-contain w-full"
              alt="Effortel"
            />
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className={`max-w-[1920px] justify-center items-stretch z-0 flex min-h-[53px] flex-col w-[174px] my-auto ${className}`}>
      <a href="/" className="max-w-full w-[174px] overflow-hidden flex-1">
        <div className="flex min-h-[53px] w-full max-w-[174px] flex-col overflow-hidden items-center justify-center">
          <div className="flex w-full items-stretch gap-[18px] overflow-hidden px-0.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/eade35e8613e3f8559c8ac3fdf9e55359f664df6?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-[52px] fill-[#66E8FA] shrink-0"
              alt="Effortel Logo Icon"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/2284d8e38c3cd0254b1abf04d401e7a5bd219809?placeholderIfAbsent=true"
              className="aspect-[4.2] object-contain w-[101px] fill-neutral-50 shrink-0 max-w-full my-auto"
              alt="Effortel Logo Text"
            />
          </div>
        </div>
      </a>
    </div>
  );
};
