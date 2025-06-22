import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ContentSection, SectionHeader } from '../components/ContentSection';
import { AwardsSection } from '../components/AwardsSection';
import { Footer } from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="justify-center items-stretch flex w-full flex-col bg-black max-md:max-w-full">
        <div className="w-full bg-[#22282A] max-md:max-w-full">
          <div className="justify-center items-center relative flex min-h-[1440px] flex-col mr-[23px] pt-2 pb-[647px] max-md:max-w-full max-md:mr-2.5 max-md:pb-[100px]">
            <HeroSection />
            
            <div className="absolute z-0 flex max-w-full w-[1897px] flex-col inset-0">
              <div className="flex mr-[-23px] w-full flex-col items-stretch justify-center max-md:max-w-full">
                <div className="flex flex-col relative min-h-[1440px] w-full overflow-hidden flex-1 pb-[1352px] max-md:max-w-full max-md:pb-[100px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/79c77e133f1e469be4013037f1808aad8a7d5d97?placeholderIfAbsent=true"
                    className="absolute h-full w-full object-cover inset-0"
                    alt="Background"
                  />
                  <Header />
                </div>
              </div>
            </div>
          </div>

          <main>
            <section className="z-10 flex mt-[-147px] flex-col items-center text-[83px] font-extrabold text-center tracking-[-2.63px] justify-center pt-2 max-md:max-w-full max-md:text-[40px]">
              <div className="justify-center items-center flex w-full flex-col flex-1 bg-[#92A6B0] pt-[175px] pb-[1204px] px-20 rounded-[21.89px] max-md:max-w-full max-md:text-[40px] max-md:px-5 max-md:py-[100px]">
                <div className="items-center flex mb-[-241px] w-[1248px] max-w-full flex-col gap-[65.65px] max-md:text-[40px] max-md:mb-2.5">
                  <div className="w-[831px] max-w-full gap-[-17.5px] max-md:text-[40px]">
                    <div className="flex w-full flex-col overflow-hidden items-center text-neutral-50 whitespace-nowrap leading-none justify-center px-[70px] py-[18px] max-md:text-[40px] max-md:px-5">
                      <h2 className="font-extrabold leading-[96px] max-md:max-w-full max-md:text-[40px]">
                        Unparalleled
                      </h2>
                    </div>
                    <div className="font-extrabold leading-none tracking-[-2.627px] w-full overflow-hidden text-[#22282a] px-[5px] py-[17px] max-md:max-w-full max-md:text-[40px]">
                      BSS/OSS Capabilities
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ContentSection backgroundColor="#66E8FA">
              <SectionHeader
                subtitle="MVNO LaunchPad – Accelerate Your Journey"
                title={
                  <>
                    <div className="font-extrabold leading-none tracking-[-2.627px] w-full overflow-hidden px-[18px] py-4 max-md:max-w-full max-md:text-[40px]">
                      From Vision to Reality:
                    </div>
                    <div className="font-extrabold leading-none tracking-[-2.627px] w-full overflow-hidden px-[5px] py-4 max-md:max-w-full max-md:text-[40px]">
                      <span style={{ color: "rgba(34,40,42,1)" }}>Launching </span>
                      <span style={{ color: "rgba(250,250,250,1)" }}>Your MVNO</span>
                    </div>
                  </>
                }
                description={
                  <>
                    <div className="font-medium w-full overflow-hidden pb-[5px] max-md:max-w-full">
                      Effortel's MVNO LaunchPad and Mobile Suite provide the foundation
                    </div>
                    <div className="font-medium w-full overflow-hidden pb-[5px] max-md:max-w-full">
                      you need to not only launch your MVNO with unprecedented speed,
                    </div>
                    <div className="font-medium w-full overflow-hidden leading-loose pb-[5px] max-md:max-w-full">
                      but also thrive in the competitive telecommunications landscape.
                    </div>
                  </>
                }
              />
            </ContentSection>

            <section className="flex mt-[-1604px] flex-col items-center text-center justify-center mr-[29px] pt-2 max-md:max-w-full max-md:mt-[-200px] max-md:mr-2.5">
              <div className="justify-center items-center flex max-w-full w-[1905px] flex-col flex-1 bg-[#22282A] pt-[1690px] pb-[1048px] px-20 rounded-[21.89px] max-md:px-5 max-md:py-[100px]">
                <div className="items-center flex mb-[-210px] w-[1248px] max-w-full flex-col gap-[65.65px] max-md:mb-2.5">
                  <div className="max-w-[1213px] items-center flex w-[1082px] flex-col gap-[15.31px]">
                    <div className="w-full text-[#d5e1e7] font-extrabold tracking-[-2.63px] gap-[-17.5px]">
                      <div className="font-extrabold leading-none tracking-[-2.627px] w-full overflow-hidden text-[83px] pt-3.5 pb-[35px] px-[70px] max-md:max-w-full max-md:text-[40px] max-md:px-5">
                        Intuitive Interface and
                      </div>
                      <div className="font-extrabold leading-none tracking-[-2.627px] w-full overflow-hidden text-[82px] px-[5px] py-[17px] max-md:max-w-full max-md:text-[40px]">
                        Effortless Self-Management
                      </div>
                    </div>
                    <div className="w-[880px] max-w-full text-[25px] text-[#b1c5ce] font-normal gap-[-5.47px] mt-[15px]">
                      <div className="font-normal w-full overflow-hidden leading-loose pb-[5px] max-md:max-w-full">
                        Effortel Mobile Suite is designed and engineered to streamline operations,
                      </div>
                      <div className="font-normal w-full overflow-hidden leading-loose pb-[5px] max-md:max-w-full">
                        accelerate revenue growth, and deliver exceptional customer experiences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <AwardsSection />

            <ContentSection backgroundColor="#66E8FA">
              <SectionHeader
                subtitle="MVNO LaunchPad – Accelerate Your Journey"
                title={
                  <>
                    <div className="font-extrabold leading-none tracking-[-2.627px] w-full overflow-hidden px-[18px] py-4 max-md:max-w-full max-md:text-[40px]">
                      From Vision to Reality:
                    </div>
                    <div className="font-extrabold leading-none tracking-[-2.627px] w-full overflow-hidden px-[5px] py-4 max-md:max-w-full max-md:text-[40px]">
                      <span style={{ color: "rgba(34,40,42,1)" }}>Launching </span>
                      <span style={{ color: "rgba(250,250,250,1)" }}>Your MVNO</span>
                    </div>
                  </>
                }
                description={
                  <>
                    <div className="font-medium w-full overflow-hidden pb-[5px] max-md:max-w-full">
                      Effortel's MVNO LaunchPad and Mobile Suite provide the foundation
                    </div>
                    <div className="font-medium w-full overflow-hidden pb-[5px] max-md:max-w-full">
                      you need to not only launch your MVNO with unprecedented speed,
                    </div>
                    <div className="font-medium w-full overflow-hidden leading-loose pb-[5px] max-md:max-w-full">
                      but also thrive in the competitive telecommunications landscape.
                    </div>
                  </>
                }
              />
            </ContentSection>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
