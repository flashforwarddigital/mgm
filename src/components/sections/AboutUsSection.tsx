import React, { useEffect, useRef, useState } from 'react';

export const AboutUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView && !isVisible) {
          setIsVisible(true);
          // Animate the number from 0 to 20
          let start = 0;
          const end = 20;
          const duration = 2000;
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            setAnimatedNumber(Math.floor(start + (end - start) * easeOut));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // Parallax calculations
  const parallaxSlow = scrollY * 0.3;
  const parallaxMedium = scrollY * 0.5;
  const parallaxFast = scrollY * 0.8;

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 50%, #d4c4b0 100%)'
      }}
    >
      {/* Torn Paper Edge at Top */}
      <div 
        className="absolute top-0 left-0 w-full h-16 z-10"
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,0 C150,60 350,0 600,40 C850,80 1050,20 1200,60 L1200,0 Z' fill='%23f5f1eb'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          transform: `translateY(${parallaxSlow}px)`
        }}
      />

      {/* Background Texture Layers */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a0956b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: `translateY(${parallaxMedium}px) rotate(${scrollY * 0.02}deg)`
        }}
      />

      {/* Floating Abstract Shapes */}
      <div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-30"
        style={{
          background: 'linear-gradient(45deg, #c4a484, #b8956f)',
          transform: `translateY(${parallaxSlow}px) rotate(${scrollY * 0.05}deg)`
        }}
      />
      
      <div 
        className="absolute bottom-40 left-16 w-24 h-24 opacity-20"
        style={{
          background: '#8b7355',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: `translateY(${-parallaxMedium}px) rotate(${-scrollY * 0.03}deg)`
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20">
        {/* Main Headline - Left Aligned, Offset */}
        <div className="relative mb-32">
          <h1 
            className="text-6xl md:text-8xl font-bold text-[#3d3426] leading-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              transform: `translateY(${-parallaxSlow}px)`,
              marginLeft: '8%'
            }}
          >
            Finance is personal.
            <br />
            <span className="text-[#8b7355] italic">So is our approach.</span>
          </h1>
          
          {/* Hand-drawn underline */}
          <svg 
            className="absolute -bottom-4 left-0 w-96 h-8"
            style={{
              transform: `translateY(${-parallaxMedium}px) translateX(8%)`
            }}
            viewBox="0 0 400 30"
          >
            <path 
              d="M10,20 Q100,5 200,15 T390,18" 
              stroke="#c4a484" 
              strokeWidth="3" 
              fill="none"
              strokeLinecap="round"
              className={isVisible ? 'animate-draw' : ''}
            />
          </svg>
        </div>

        {/* Floating Text Block - Right Aligned, Offset */}
        <div 
          className="relative ml-auto max-w-2xl mb-24"
          style={{
            transform: `translateY(${-parallaxFast}px)`,
            marginRight: '5%',
            marginTop: '-8rem'
          }}
        >
          <div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#d4c4b0]/30"
            style={{
              transform: 'rotate(-1.5deg)',
              boxShadow: '0 20px 40px rgba(139, 115, 85, 0.15)'
            }}
          >
            <p className="text-xl text-[#3d3426] leading-relaxed font-light">
              With over <span className="font-bold text-[#8b7355]">{animatedNumber}</span> years of experience in finance, banking, and strategy — we know the numbers, but we never forget the people behind them.
            </p>
            
            {/* Handwritten accent */}
            <div 
              className="absolute -top-3 -right-3 text-[#c4a484] text-2xl"
              style={{ fontFamily: "'Dancing Script', cursive", transform: 'rotate(15deg)' }}
            >
              ✨
            </div>
          </div>
        </div>

        {/* Breakout Quote - Floating Box */}
        <div 
          className="relative max-w-3xl mx-auto mb-32"
          style={{
            transform: `translateY(${-parallaxMedium}px) translateX(-10%)`
          }}
        >
          <div 
            className="bg-[#8b7355] text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden"
            style={{
              transform: 'rotate(1deg)',
              boxShadow: '0 30px 60px rgba(139, 115, 85, 0.3)'
            }}
          >
            {/* Texture overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
            
            <blockquote className="text-3xl md:text-4xl font-light italic leading-relaxed relative z-10">
              "We don't just look at where you are — we plan for where you want to go."
            </blockquote>
            
            {/* Quote marks */}
            <div className="absolute top-4 left-4 text-6xl text-white/20 font-serif">"</div>
            <div className="absolute bottom-4 right-4 text-6xl text-white/20 font-serif">"</div>
          </div>
        </div>

        {/* Image Section - Right Overflow */}
        <div className="relative flex items-center justify-end mb-20">
          <div 
            className="relative"
            style={{
              transform: `translateY(${-parallaxSlow}px) rotate(${scrollY * 0.01}deg)`,
              marginRight: '-10%'
            }}
          >
            <div 
              className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                transform: 'rotate(-3deg)',
                boxShadow: '0 40px 80px rgba(139, 115, 85, 0.2)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=800&fit=crop&crop=faces"
                alt="Financial consultation"
                className="w-full h-full object-cover"
                style={{
                  filter: 'sepia(20%) saturate(80%) hue-rotate(15deg)'
                }}
              />
            </div>
            
            {/* Overlapping texture */}
            <div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#c4a484] rounded-full opacity-60"
              style={{
                transform: 'rotate(45deg)',
                mixBlendMode: 'multiply'
              }}
            />
          </div>
        </div>

        {/* Bottom Text - Left Aligned, Overlapping */}
        <div 
          className="relative max-w-xl"
          style={{
            transform: `translateY(${-parallaxFast}px)`,
            marginLeft: '12%',
            marginTop: '-6rem'
          }}
        >
          <div 
            className="bg-white/70 backdrop-blur-sm p-6 rounded-xl border border-[#d4c4b0]/40"
            style={{
              transform: 'rotate(0.5deg)',
              boxShadow: '0 15px 30px rgba(139, 115, 85, 0.1)'
            }}
          >
            <p className="text-lg text-[#3d3426] leading-relaxed">
              Every financial decision tells a story. Our role is to help you write the next chapter with confidence, clarity, and purpose.
            </p>
            
            {/* Misaligned button - intentionally imperfect */}
            <button 
              className="mt-6 px-8 py-3 bg-[#8b7355] text-white rounded-full font-medium hover:bg-[#7a6449] transition-all duration-300 shadow-lg"
              style={{
                transform: 'rotate(-1deg) translateX(8px)',
                boxShadow: '0 10px 20px rgba(139, 115, 85, 0.2)'
              }}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      {/* Torn Paper Edge at Bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-16 z-10"
        style={{
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,120 C150,60 350,120 600,80 C850,40 1050,100 1200,60 L1200,120 Z' fill='%23f5f1eb'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          transform: `translateY(${-parallaxSlow}px)`
        }}
      />

      {/* CSS for drawing animation */}
      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw {
          animation: draw 2s ease-out forwards;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Dancing+Script:wght@400;700&display=swap');
      `}</style>
    </section>
  );
};