import React from 'react';

export const ParallaxBreak: React.FC = () => {
  return (
    <section className="relative h-48 overflow-hidden">
      {/* Fixed parallax background image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/1.png)',
          backgroundAttachment: 'fixed',
          zIndex: -1
        }}
      />
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Optional content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          {/* You can add content here if desired */}
        </div>
      </div>
    </section>
  );
};