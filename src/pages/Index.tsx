import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { LogoCarousel } from '../components/ui/LogoCarousel';
import { ParallaxBreak } from '../components/ui/ParallaxBreak';
import { AboutGMGSection } from '../components/sections/AboutGMGSection';
import { OurServicesSection } from '../components/sections/OurServicesSection';
import { FinancialHealthCheckSection } from '../components/sections/FinancialHealthCheckSection';
import { StatisticsSection } from '../components/sections/StatisticsSection';
import { ContactUsSection } from '../components/sections/ContactUsSection';
import { Footer } from '../components/Footer';
// import { CarouselControls } from '../components/ui/CarouselControls'; // Uncomment for development

const Index: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Sticky Header - Now positioned at the top level */}
      <Header />

      {/* Hero Section - No longer contains header */}
      <HeroSection />

      {/* Logo Carousel - Bridge between hero and next section - POSITIONED AT BOTTOM */}
      <LogoCarousel />

      {/* Parallax Break Section with Melbourne night image */}
      <ParallaxBreak />

      {/* Main Content Sections - GMG Financial Services */}
      <main className="w-full">
        <AboutGMGSection />
        <OurServicesSection />
        <FinancialHealthCheckSection />
        <StatisticsSection />
        <ContactUsSection />
      </main>

      <Footer />

      {/* Development Controls - Remove in production */}
      {/* <CarouselControls /> */}
    </div>
  );
};

export default Index;