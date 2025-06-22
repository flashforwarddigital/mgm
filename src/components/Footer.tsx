import React from 'react';
import { Logo } from './ui/Logo';
import { SocialIcon } from './ui/SocialIcon';
import { colors } from '../config/design-system';
import { siteContent } from '../config/content';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <a href={href} className="font-normal leading-[21px] hover:text-[#66E8FA] transition-colors">
    {children}
  </a>
);

interface FooterSectionProps {
  title: string;
  links: readonly { readonly href: string; readonly label: string }[];
  className?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, className = "" }) => (
  <div className={`min-w-60 grow shrink gap-[10.94px] ${className}`}>
    <h3 className="font-bold leading-none w-full text-xl text-[#d5e1e7] whitespace-nowrap mb-4">
      {title}
    </h3>
    <div className="w-full text-[18px] text-[#5f6f77] font-normal leading-relaxed">
      {links.map((link, index) => (
        <div key={index} className="flex w-full mb-2">
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </div>
      ))}
    </div>
  </div>
);

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

  return (
    <footer 
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.primary.dark }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <FooterSection 
            title="Services" 
            links={FOOTER_SECTIONS.services}
          />
          <FooterSection 
            title="Solutions" 
            links={FOOTER_SECTIONS.solutions}
          />
          <FooterSection 
            title="Resources" 
            links={FOOTER_SECTIONS.resources}
          />
          <FooterSection 
            title="Company" 
            links={FOOTER_SECTIONS.company}
          />
          <FooterSection 
            title="Legal" 
            links={FOOTER_SECTIONS.legal}
          />
        </nav>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* CTA Section */}
          <div className="flex-1">
            <h2 
              className="font-extrabold text-[#d5e1e7] leading-none tracking-[-2.63px] text-6xl lg:text-8xl mb-8"
            >
              {footer.cta.split('\n').map((line, index) => (
                <div key={index}>
                  {line}
                </div>
              ))}
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social, index) => (
              <SocialIcon
                key={index}
                href={social.href}
                iconSrc={social.iconSrc}
                alt={social.alt}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-[#D5E1E7] opacity-10 my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo variant="footer" />

          <div className="flex items-center gap-2">
            <span className="text-[#5f6f77] text-[22px] font-medium">
              {footer.attribution}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};