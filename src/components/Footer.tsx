import React from 'react';
import { Logo } from './ui/Logo';
import { SocialIcon } from './ui/SocialIcon';
import { FOOTER_SECTIONS, SOCIAL_LINKS } from '../constants/navigation';
import { colors } from '../config/design-system';

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
    <h3 className="font-bold leading-none w-full text-xl text-[#d5e1e7] whitespace-nowrap">
      {title}
    </h3>
    <div className="w-full text-[21px] text-[#5f6f77] font-normal text-center uppercase tracking-[-0.62px] leading-none mt-[11px]">
      {links.map((link, index) => (
        <div key={index} className="flex w-full">
          <FooterLink href={link.href}>{link.label}</FooterLink>
        </div>
      ))}
    </div>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer 
      className="w-full py-32 px-4"
      style={{ backgroundColor: colors.primary.dark }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <nav className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <FooterSection 
            title="Products" 
            links={FOOTER_SECTIONS.products}
            className="text-[21px] whitespace-nowrap"
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
            title="Main" 
            links={FOOTER_SECTIONS.main}
            className="text-[21px] whitespace-nowrap"
          />
          <FooterSection 
            title="Legals" 
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
              Take Your<br />
              Brand Mobile.
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
              Design & Dev by 
            </span>
            <a href="#" className="font-medium text-[21px] text-[#92a6b0] hover:text-[#66E8FA] transition-colors">
              Onion
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};