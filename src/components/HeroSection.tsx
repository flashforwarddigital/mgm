import React from 'react';
import { useHeroActions } from '../hooks/useHeroActions';

export const HeroSection: React.FC = () => {
  const { handleServicesClick, handleProductClick } = useHeroActions();

  return (
    <section className="justify-center items-center self-center z-0 flex max-w-full w-[1905px] flex-col flex-1 bg-[#22282A] pt-[88px] rounded-[21.89px]">
      <div className="flex min-h-[175px] w-full" />
      <div className="flex min-h-11 w-full" />
      
      <div className="items-center flex w-full flex-col max-w-[2188.8px] px-[328px] max-md:px-5">
        <div className="max-w-[1061px] flex w-[1061px] flex-col items-center pr-20 max-md:pr-5">
          <div className="z-10 flex gap-[5.5px] text-lg text-[#5f6f77] font-normal text-center uppercase tracking-[-0.52px] leading-none">
            <span className="text-[17.5px] font-normal leading-[18px]">(</span>
            <span className="text-[17.5px] font-normal leading-[18px]">
              RECOGNIZED AS THE BEST MVNE GLOBALLY
            </span>
            <span className="text-[17.5px] font-normal leading-[18px]">)</span>
          </div>

          <h1 className="w-[895px] max-w-full text-[83px] text-[#d5e1e7] font-extrabold text-center tracking-[-2.63px] leading-[96px] mt-11 max-md:text-[40px] max-md:leading-[51px] max-md:mt-10">
            <span className="font-extrabold leading-[96px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]">
              Streamline Operations,
              <br />
              Skyrocket Revenue,
              <br />
              and Delight Customers
            </span>
          </h1>

          <div className="flex gap-[10.94px] mt-11 pt-[22px] max-md:mt-10">
            <button 
              onClick={handleServicesClick}
              className="max-w-[398px] justify-center border-[#22282A] min-h-[63px] gap-[23px] pl-[23px] pr-[82px] py-[21px] rounded-[16.2px] border border-solid max-md:px-5 relative hover:bg-[#394247] transition-colors"
            >
              <div className="absolute z-0 flex min-h-[57px] items-center justify-center w-[59px] h-[57px] rounded-[10px] -left-16 bottom-[3px]">
                <div className="self-stretch flex min-h-[17px] w-[18px] my-auto" />
              </div>
              <div className="min-w-[57px] items-center absolute z-0 flex w-[57px] h-[57px] bg-[#394247] pr-5 py-5 rounded-[12.26px] right-[3px] inset-y-[3px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/eac7943b8e97893c719da9019280ad5bdf5b7aa7?placeholderIfAbsent=true"
                  className="aspect-[1.06] object-contain w-[18px] self-stretch my-auto"
                  alt="Services Icon"
                />
              </div>
              <span className="font-normal leading-none tracking-[-0.62px] self-stretch z-0 text-[21px] text-[#b1c5ce] whitespace-nowrap uppercase my-auto pb-px">
                Services
              </span>
            </button>

            <button 
              onClick={handleProductClick}
              className="max-w-[398px] justify-center border-[#66E8FA] min-h-[61px] gap-[23px] pl-[23px] pr-[82px] py-[20px] rounded-[13.79px] border border-solid max-md:px-5 relative hover:bg-[#5dd8ea] transition-colors"
            >
              <div className="absolute z-0 flex min-h-[57px] items-center justify-center left-[-65px] w-[59px] h-[57px] rounded-[10px] bottom-px">
                <div className="self-stretch flex min-h-[17px] w-[18px] my-auto" />
              </div>
              <div className="min-w-[59px] items-center absolute z-0 flex w-[59px] h-[59px] bg-[#22282A] pr-5 py-5 rounded-[12.26px] right-0.5 top-0.5 bottom-px">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/87079097c902dcaa9db1e3f3dd09c33fe8b11caa?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-[17px] self-stretch my-auto"
                  alt="Product Icon"
                />
              </div>
              <span className="font-normal leading-none tracking-[-0.62px] self-stretch z-0 text-[21px] text-[#22282a] whitespace-nowrap uppercase my-auto pb-px">
                Product
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
