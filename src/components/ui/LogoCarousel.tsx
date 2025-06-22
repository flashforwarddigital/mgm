import React from 'react';

export const LogoCarousel: React.FC = () => {
  // Financial terms - spread across for immediate visibility
  const words = [
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION', 'RISK MANAGEMENT', 'PORTFOLIO',
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION', 'RISK MANAGEMENT', 'PORTFOLIO',
    'BUDGETING', 'CASH FLOW', 'BUSINESS GROWTH', 'LENDING', 'INVESTMENT', 'STRUCTURING',
    'STRATEGY', 'ADVISORY', 'HEALTH CHECK', 'REFINANCING', 'PLANNING', 'WEALTH MANAGEMENT',
    'FORECASTING', 'ANALYSIS', 'CONSULTING', 'OPTIMIZATION', 'RISK MANAGEMENT', 'PORTFOLIO'
  ];

  return (
    <section className="w-full bg-[#22282A] overflow-hidden">
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