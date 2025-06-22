
import React from 'react';
import { Logo } from './ui/Logo';
import { SocialIcon } from './ui/SocialIcon';
import { FOOTER_SECTIONS, SOCIAL_LINKS } from '../constants/navigation';

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
    <footer className="mr-[49px] pt-2 max-md:max-w-full max-md:mr-2.5">
      <div className="max-w-full w-[1905px] flex-1 bg-[#22282A] pt-[349px] rounded-[21.89px] max-md:pt-[100px]">
        <div className="max-w-[2188.8px] w-full pl-[310px] pr-[328px] max-md:max-w-full max-md:px-5">
          <nav className="justify-center items-stretch flex w-full gap-[8.8px] flex-wrap max-md:max-w-full">
            <FooterSection 
              title="Products" 
              links={FOOTER_SECTIONS.products}
              className="w-[193px] text-[21px] whitespace-nowrap"
            />
            <FooterSection 
              title="Solutions" 
              links={FOOTER_SECTIONS.solutions}
              className="w-[194px]"
            />
            <FooterSection 
              title="Resources" 
              links={FOOTER_SECTIONS.resources}
              className="w-[193px]"
            />
            <FooterSection 
              title="Main" 
              links={FOOTER_SECTIONS.main}
              className="w-[194px] text-[21px] whitespace-nowrap"
            />
            <FooterSection 
              title="Legals" 
              links={FOOTER_SECTIONS.legal}
              className="w-[193px]"
            />
          </nav>
        </div>

        <div className="max-w-[2188.8px] mt-[219px] pl-[310px] pr-[328px] max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="w-full max-md:max-w-full">
            <div className="items-stretch flex gap-[2.84px] flex-wrap">
              <div className="min-w-60 text-[#d5e1e7] font-extrabold tracking-[-2.63px] flex-1 shrink basis-[0%] max-md:max-w-full">
                <div className="w-full gap-[-17.5px] max-md:max-w-full">
                  <h2 className="font-extrabold leading-none tracking-[-2.627px] z-10 w-full overflow-hidden text-[82px] pb-[18px] max-md:text-[40px] max-md:max-w-full max-md:pr-5">
                    Take Your
                  </h2>
                  <h2 className="font-extrabold leading-none tracking-[-2.627px] z-10 w-full overflow-hidden text-[84px] pb-[18px] max-md:max-w-full max-md:text-[40px] max-md:pr-5">
                    Brand Mobile.
                  </h2>
                </div>
              </div>

              <div className="min-w-60 flex-1 shrink basis-[0%] pt-[142px] max-md:max-w-full max-md:pt-[100px]">
                <div className="flex w-full max-md:max-w-full">
                  <div className="flex items-center">
                    <div className="self-stretch flex gap-[5.5px] my-auto">
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
                </div>
              </div>
            </div>

            <hr className="flex shrink-0 h-px opacity-10 bg-[#D5E1E7] mt-[26px] max-md:max-w-full" />

            <div className="w-full mt-11 pb-11 max-md:max-w-full max-md:mt-10">
              <div className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
                <Logo variant="footer" />

                <div className="z-10 flex gap-[0.01px] font-medium pb-px max-md:-mr-1.5">
                  <span className="text-[#5f6f77] text-[22px] font-medium leading-[33px]">
                    Design & Dev by 
                  </span>
                  <a href="#" className="font-medium leading-loose text-[21px] text-[#92a6b0] whitespace-nowrap hover:text-[#66E8FA] transition-colors">
                    Onion
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-0 w-full max-md:max-w-full" />
    </footer>
  );
};
