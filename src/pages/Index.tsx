import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { MVNOLaunchpadSection } from '../components/sections/MVNOLaunchpadSection';
import { InterfaceSection } from '../components/sections/InterfaceSection';
import { AwardsSection } from '../components/AwardsSection';
import { VisionSection } from '../components/sections/VisionSection';
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
            {/* Section 1: Capabilities */}
            <CapabilitiesSection />

            {/* Section 2: MVNO Launchpad */}
            <MVNOLaunchpadSection />

            {/* Section 3: Interface */}
            <InterfaceSection />

            {/* Section 4: Awards */}
            <AwardsSection />

            {/* Section 5: Vision */}
            <VisionSection />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;