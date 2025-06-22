// Content Configuration
// This file contains all text content and section data for easy editing

export const siteContent = {
  // Header content
  header: {
    navigation: [
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
    ],
    cta: {
      primary: 'Book a meeting',
      secondary: 'Get in touch'
    }
  },

  // Landing page sections
  sections: {
    hero: {
      // Removed subtitle - now using rotating titles with decrypting effect
      rotatingTitles: [
        "Real Advice for Real Life Goals",
        "Take Control of Your Financial Future", 
        "Confident Financial Decisions Start Here",
        "Your Trusted Partner in Financial Clarity",
        "Strategic Advice. Lasting Results"
      ],
      buttons: [
        { label: 'Services', type: 'secondary', action: '/services' },
        { label: 'Product', type: 'primary', action: '/products' }
      ]
    },

    capabilities: {
      title: 'Unparalleled\nBSS/OSS Capabilities'
    },

    mvnoLaunchpad: {
      subtitle: 'MVNO LaunchPad – Accelerate Your Journey',
      title: 'From Vision to Reality:\nLaunching Your MVNO',
      description: [
        'Effortel\'s MVNO LaunchPad and Mobile Suite provide the foundation',
        'you need to not only launch your MVNO with unprecedented speed,',
        'but also thrive in the competitive telecommunications landscape.'
      ]
    },

    interface: {
      title: 'Intuitive Interface and\nEffortless Self-Management',
      description: [
        'Effortel Mobile Suite is designed and engineered to streamline operations,',
        'accelerate revenue growth, and deliver exceptional customer experiences.'
      ]
    },

    awards: {
      subtitle: 'Industry Recognition and Awards',
      title: 'Recognized for\nExcellence in BSS/OSS\nand MVNE Solutions'
    },

    vision: {
      subtitle: 'MVNO LaunchPad – Accelerate Your Journey',
      title: 'From Vision to Reality:\nLaunching Your MVNO',
      description: [
        'Effortel\'s MVNO LaunchPad and Mobile Suite provide the foundation',
        'you need to not only launch your MVNO with unprecedented speed,',
        'but also thrive in the competitive telecommunications landscape.'
      ]
    }
  },

  // Footer content
  footer: {
    cta: 'Take Your\nBrand Mobile.',
    attribution: 'Design & Dev by Onion'
  }
} as const;