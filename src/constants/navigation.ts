
export const NAVIGATION_ITEMS = [
  {
    label: 'Products',
    hasDropdown: true,
    items: [
      { label: 'EMS', href: '/ems' },
      { label: 'Spotlight', href: '/spotlight' }
    ]
  },
  {
    label: 'Solutions',
    hasDropdown: true,
    items: [
      { label: 'MVNO Launchpad', href: '/mvno-launchpad' },
      { label: 'MnO', href: '/mno' }
    ]
  },
  {
    label: 'Resources',
    hasDropdown: true,
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Events', href: '/events' },
      { label: 'News', href: '/news' }
    ]
  },
  {
    label: 'Services',
    href: '/services'
  }
] as const;

export const FOOTER_SECTIONS = {
  products: [
    { href: "/ems", label: "Ems" },
    { href: "/spotlight", label: "Spotlight" }
  ],
  solutions: [
    { href: "/mvno-launchpad", label: "MVNO Launchpad" },
    { href: "/mno", label: "MnO" }
  ],
  resources: [
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case stuides" },
    { href: "/events", label: "Events" },
    { href: "/news", label: "news" }
  ],
  main: [
    { href: "/about", label: "About" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "contact" },
    { href: "/services", label: "Services" }
  ],
  legal: [
    { href: "/cookie-policy", label: "Cookie policy" },
    { href: "/privacy-policy", label: "Privacy policy" },
    { href: "/terms-of-use", label: "Terms of use" }
  ]
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://linkedin.com/company/effortel",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/066d7b73132a09d15647d772d83cdb2eb910c366?placeholderIfAbsent=true",
    alt: "LinkedIn"
  },
  {
    href: "https://twitter.com/effortel",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/37d66a11a9e1b891dac4b26516c9478efba042ed?placeholderIfAbsent=true",
    alt: "Twitter"
  },
  {
    href: "https://facebook.com/effortel",
    iconSrc: "https://cdn.builder.io/api/v1/image/assets/60f4999e82e146c4a58bdf49ad469d0d/6e70edc4014f090442af80410cf1fe6cda4172cd?placeholderIfAbsent=true",
    alt: "Facebook"
  }
] as const;
