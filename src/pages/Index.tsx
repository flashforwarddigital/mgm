import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/sections/HeroSection';
import { LogoCarousel } from '../components/ui/LogoCarousel';
import { AboutGMGSection } from '../components/sections/AboutGMGSection';
import { OurServicesSection } from '../components/sections/OurServicesSection';
import { FinancialHealthCheckSection } from '../components/sections/FinancialHealthCheckSection';
import { StatisticsSection } from '../components/sections/StatisticsSection';
import { ContactUsSection } from '../components/sections/ContactUsSection';
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

      {/* Main Content Sections - GMG Financial Services */}
      <main className="w-full">
        <AboutGMGSection />
        <OurServicesSection />
        <FinancialHealthCheckSection />
        <StatisticsSection />
        <ContactUsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;