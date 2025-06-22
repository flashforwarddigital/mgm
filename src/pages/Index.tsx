import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { LogoCarousel } from '../components/ui/LogoCarousel';
import { CapabilitiesSection } from '../components/sections/CapabilitiesSection';
import { MVNOLaunchpadSection } from '../components/sections/MVNOLaunchpadSection';
import { InterfaceSection } from '../components/sections/InterfaceSection';
import { AwardsSection } from '../components/AwardsSection';
import { VisionSection } from '../components/sections/VisionSection';
import { Footer } from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section with Header */}
      <div className="relative w-full">
        <HeroSection />
        <div className="absolute top-0 left-0 right-0 z-50">
          <Header />
        </div>
      </div>

      {/* Logo Carousel - Bridge between hero and next section */}
      <LogoCarousel />

      {/* Main Content Sections */}
      <main className="w-full">
        <CapabilitiesSection />
        <MVNOLaunchpadSection />
        <InterfaceSection />
        <AwardsSection />
        <VisionSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;