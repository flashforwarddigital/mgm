import React from 'react';

interface AwardItemProps {
  imageUrl: string;
  year: string;
  isActive?: boolean;
  opacity?: number;
  height?: string;
}

const AwardItem: React.FC<AwardItemProps> = ({ 
  imageUrl, 
  year, 
  isActive = false, 
  opacity = 1,
  height = "416px"
}) => {
  const containerClass = opacity < 1 ? "opacity-20" : "";
  
  return (
    <div className={`self-stretch min-w-60 w-[417px] my-auto pr-1 ${containerClass}`} style={{ minHeight: height }}>
      <div className={`max-w-full w-[413px] rounded-[22px]`} style={{ minHeight: height }}>
        <div className="relative w-full overflow-hidden flex-1 bg-neutral-50 pt-11 pb-[33px] px-11 rounded-[32.83px] max-md:px-5">
          <div className="absolute z-0 flex w-full items-center justify-center inset-0" style={{ minHeight: height }}>
            <img
              src={imageUrl}
              className="aspect-[1] object-contain w-[219px] max-w-[219px] self-stretch my-auto"
              alt={`Award ${year}`}
            />
          </div>
          {isActive && (
            <div className="justify-between items-center z-0 flex h-[22px] w-full gap-[40px_100px] text-[19px] text-[#92a6b0] font-normal whitespace-nowrap uppercase tracking-[-0.56px] leading-normal">
              <span className="font-normal leading-[28px]">{year}</span>
              <img
                src={year === "2016" ? "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/c9121766f46fad8cdd16a23b98d973569d524f22?placeholderIfAbsent=true" : year === "2024" ? "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/8b3722509c407d34d0fb9937661f58d9b1c92558?placeholderIfAbsent=true" : "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/df014115721f64c77ab85783759808ec590f3e3e?placeholderIfAbsent=true"}
                className="aspect-[1] object-contain w-[22px] self-stretch shrink-0 my-auto"
                alt="Award Icon"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const AwardsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center mr-[25px] mt-[113px] pt-2 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
      <div className="justify-center items-stretch self-center z-0 flex w-full flex-col overflow-hidden flex-1 bg-[#E4EDF1] pt-[261px] pb-[438px] rounded-[21.89px] max-md:max-w-full max-md:pr-5 max-md:py-[100px]">
        <div className="max-w-[2188.8px] items-center flex mb-[-88px] flex-col pl-[323px] pr-[328px] max-md:max-w-full max-md:mb-2.5 max-md:px-5">
          <div className="max-w-full w-[1248px] flex-1 gap-[91.91px]">
            <div className="items-center flex w-full flex-col text-center gap-[65.66px] max-md:max-w-full">
              <div className="flex gap-[5.5px] text-lg text-[#92a6b0] font-normal uppercase tracking-[-0.52px] leading-none">
                <span className="text-[17.5px] font-normal leading-[18px]">(</span>
                <span className="text-[17.5px] font-normal leading-[18px]">
                  Industry Recognition and Awards
                </span>
                <span className="text-[17.5px] font-normal leading-[18px]">)</span>
              </div>

              <h2 className="w-[882px] max-w-full text-[83px] text-[#22282a] font-extrabold tracking-[-2.63px] leading-none gap-[-17.5px] mt-[66px] max-md:text-[40px] max-md:mt-10">
                <div className="font-extrabold leading-[96px] max-md:max-w-full max-md:text-[40px] max-md:px-5">
                  Recognized for
                </div>
                <div className="font-extrabold leading-[96px] max-md:max-w-full max-md:text-[40px]">
                  Excellence in BSS/OSS
                </div>
                <div className="font-extrabold leading-none tracking-[-2.627px] w-full overflow-hidden text-[84px] pt-[13px] pb-[35px] px-[46px] max-md:max-w-full max-md:text-[40px] max-md:px-5">
                  and MVNE Solutions
                </div>
              </h2>
            </div>

            <div className="flex w-full flex-col mt-[92px] max-md:max-w-full max-md:mt-10">
              <div className="flex mr-[-349px] w-full flex-col items-stretch max-md:max-w-full">
                <div className="flex">
                  <div className="flex min-w-60 min-h-[525px] w-full items-center justify-between flex-1 shrink basis-[0%] max-md:max-w-full">
                    <AwardItem 
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/a36fe1ce37f78fd4dbc7804c330bfeff5203ed6c?placeholderIfAbsent=true" 
                      year="2015" 
                      opacity={0.2}
                      height="328px"
                    />
                    <AwardItem 
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/ed383224f09a5d02968c9e182ff96d38d44a739a?placeholderIfAbsent=true" 
                      year="2016" 
                      isActive={true}
                      height="416px"
                    />
                    <AwardItem 
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/2e859ffd0a0870e46b7104116d7de2b77336b5ea?placeholderIfAbsent=true" 
                      year="2024" 
                      isActive={true}
                      height="525px"
                    />
                    <AwardItem 
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/7b486a95460b2d1f9c9a3be66f34b2b2c0366f83?placeholderIfAbsent=true" 
                      year="2024" 
                      isActive={true}
                      height="416px"
                    />
                    <AwardItem 
                      imageUrl="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/3bee870f99597690b012f11cf34132130d66b243?placeholderIfAbsent=true" 
                      year="2025" 
                      opacity={0.2}
                      height="328px"
                    />
                  </div>
                </div>

                <div className="self-center flex w-full justify-center mt-[87px] max-md:mt-10">
                  <div className="border-[#B1C5CE] gap-[2.84px] bg-[#B1C5CE] rounded-[16.42px] border-[2px] border-solid flex">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/5232323290b61bc2081e3410786229bf3eea6ce1?placeholderIfAbsent=true"
                      className="aspect-[0.99] object-contain w-[65px] min-h-[66px] shrink-0 rounded-[10px]"
                      alt="Navigation Previous"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/4d45f1136d8cea980b9d92386be4e9ef92575f74?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[66px] min-h-[66px] shrink-0 rounded-[10px]"
                      alt="Navigation Next"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-0 flex min-h-px max-w-full w-[1897px] opacity-20 bg-[#22282A] top-0 bottom-[1867px] inset-x-0" />
    </section>
  );
};
