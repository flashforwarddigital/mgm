import React from 'react';

export const LogoCarousel: React.FC = () => {
  // Financial terms - repeated for seamless loop
  const words = [
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION',
    // Repeat for seamless loop
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION',
    // Third repeat
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION',
    // Fourth repeat
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION'
  ];

  return (
    <section className="w-full bg-[#22282A] py-8 overflow-hidden">
      <div className="carousel-container">
        <div className="carousel-track">
          {words.map((word, index) => (
            <span key={index} className="carousel-word">
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};