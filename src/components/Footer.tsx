import React, { useEffect, useRef, useState } from 'react';
import { Logo } from './ui/Logo';
import { SocialIcon } from './ui/SocialIcon';
import { colors } from '../config/design-system';
import { siteContent } from '../config/content';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  delay?: number;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <a 
      ref={linkRef}
      href={href} 
      className={`
        font-normal leading-[21px] hover:text-[#66E8FA] 
        transition-all duration-300 hover:scale-105 hover:translate-x-2
        transform
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </a>
  );
};

interface FooterSectionProps {
  title: string;
  links: readonly { readonly href: string; readonly label: string }[];
  className?: string;
  delay?: number;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={sectionRef}
      className={`
        min-w-60 grow shrink gap-[10.94px] 
        transform transition-all duration-800 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-bold leading-none w-full text-xl text-[#d5e1e7] whitespace-nowrap mb-4 relative group">
        {title}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#66E8FA] group-hover:w-full transition-all duration-500" />
      </h3>
      <div className="w-full text-[18px] text-[#5f6f77] font-normal leading-relaxed">
        {links.map((link, index) => (
          <div key={index} className="flex w-full mb-2">
            <FooterLink href={link.href} delay={delay + (index * 100)}>
              {link.label}
            </FooterLink>
          </div>
        ))}
      </div>
    </div>
  );
};

// GMG Financial Services Footer Links
const FOOTER_SECTIONS = {
  services: [
    { href: "/business-advisory", label: "Business Advisory" },
    { href: "/financial-planning", label: "Financial Planning" },
    { href: "/cash-flow", label: "Cash Flow Management" },
    { href: "/investment", label: "Investment Strategy" }
  ],
  solutions: [
    { href: "/health-check", label: "Financial Health Check" },
    { href: "/business-growth", label: "Business Growth" },
    { href: "/restructuring", label: "Restructuring" }
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/tools", label: "Financial Tools" },
    { href: "/insights", label: "Market Insights" }
  ],
  company: [
    { href: "/about", label: "About GMG" },
    { href: "/team", label: "Our Team" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" }
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/disclaimer", label: "Financial Disclaimer" }
  ]
} as const;

const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/company/gmg-financial",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/066d7b73132a09d15647d772d83cdb2eb910c366?placeholderIfAbsent=true",
    alt: "LinkedIn"
  },
  {
    href: "https://twitter.com/gmgfinancial",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/37d66a11a9e1b891dac4b26516c9478efba042ed?placeholderIfAbsent=true",
    alt: "Twitter"
  },
  {
    href: "https://facebook.com/gmgfinancial",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/6e70edc4014f090442af80410cf1fe6cda4172cd?placeholderIfAbsent=true",
    alt: "Facebook"
  }
] as const;

export const Footer: React.FC = () => {
  const { footer } = siteContent;
  const [ctaVisible, setCTAVisible] = useState(false);
  const [socialVisible, setSocialVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCTAVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const socialObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setSocialVisible(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (ctaRef.current) {
      ctaObserver.observe(ctaRef.current);
    }

    if (socialRef.current) {
      socialObserver.observe(socialRef.current);
    }

    return () => {
      ctaObserver.disconnect();
      socialObserver.disconnect();
    };
  }, []);

  return (
    <footer 
      className="w-full py-32 px-4 relative overflow-hidden"
      style={{ backgroundColor: colors.primary.dark }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#66E8FA]/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#66E8FA]/3 rounded-full blur-2xl animate-float animation-delay-1000" />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#66E8FA]/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5000}ms`,
              animationDuration: `${4000 + Math.random() * 3000}ms`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Links with staggered animations */}
        <nav className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <FooterSection 
            title="Services" 
            links={FOOTER_SECTIONS.services}
            delay={200}
          />
          <FooterSection 
            title="Solutions" 
            links={FOOTER_SECTIONS.solutions}
            delay={300}
          />
          <FooterSection 
            title="Resources" 
            links={FOOTER_SECTIONS.resources}
            delay={400}
          />
          <FooterSection 
            title="Company" 
            links={FOOTER_SECTIONS.company}
            delay={500}
          />
          <FooterSection 
            title="Legal" 
            links={FOOTER_SECTIONS.legal}
            delay={600}
          />
        </nav>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* CTA Section with enhanced animations */}
          <div ref={ctaRef} className="flex-1">
            <h2 
              className={`
                font-extrabold text-[#d5e1e7] leading-none tracking-[-2.63px] 
                text-6xl lg:text-8xl mb-8 relative
                transform transition-all duration-1200 ease-out
                ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
            >
              {footer.cta.split('\n').map((line, index) => (
                <div 
                  key={index}
                  className={`
                    transform transition-all duration-1000 ease-out
                    ${ctaVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                  `}
                  style={{ transitionDelay: `${index * 200 + 200}ms` }}
                >
                  {line.split(' ').map((word, wordIndex) => (
                    <span 
                      key={wordIndex}
                      className={`
                        inline-block mr-4 hover:text-[#66E8FA] transition-colors duration-300
                        transform transition-all duration-800 ease-out
                        ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                      `}
                      style={{ transitionDelay: `${(index * 3 + wordIndex) * 150 + 400}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              ))}
              
              {/* Animated accent line */}
              <div 
                className={`
                  absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#66E8FA] to-transparent
                  transition-all duration-1500 ease-out
                  ${ctaVisible ? 'w-48 opacity-100' : 'w-0 opacity-0'}
                `}
                style={{ transitionDelay: '800ms' }}
              />
            </h2>
          </div>

          {/* Social Links with enhanced animations */}
          <div ref={socialRef} className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social, index) => (
              <div
                key={index}
                className={`
                  transform transition-all duration-800 ease-out
                  ${socialVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-75'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <SocialIcon
                  href={social.href}
                  iconSrc={social.iconSrc}
                  alt={social.alt}
                  className="hover-lift hover-glow transition-all duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section with slide-in animation */}
        <hr className="border-[#D5E1E7] opacity-10 my-8 animate-fade-in-up animation-delay-1000" />

        <div 
          className={`
            flex flex-col md:flex-row items-center justify-between gap-8
            transform transition-all duration-1000 ease-out
            ${ctaVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}
          style={{ transitionDelay: '1200ms' }}
        >
          <div className="animate-fade-in-left animation-delay-1400">
            <Logo variant="footer" />
          </div>

          <div 
            className={`
              flex items-center gap-2
              transform transition-all duration-800 ease-out
              ${ctaVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
            `}
            style={{ transitionDelay: '1600ms' }}
          >
            <span className="text-[#5f6f77] text-[22px] font-medium hover:text-[#66E8FA] transition-colors duration-300">
              {footer.attribution}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};