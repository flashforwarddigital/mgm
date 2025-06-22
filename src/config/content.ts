// Content Configuration for GMG Financial Services
// This file contains all text content and section data for easy editing

export const siteContent = {
  // Header content
  header: {
    navigation: [
      {
        label: 'Services',
        hasDropdown: true,
        items: [
          { label: 'Business Advisory', href: '/business-advisory' },
          { label: 'Financial Planning', href: '/financial-planning' },
          { label: 'Cash Flow Management', href: '/cash-flow' },
          { label: 'Investment Strategy', href: '/investment' }
        ]
      },
      {
        label: 'Solutions',
        hasDropdown: true,
        items: [
          { label: 'Health Check', href: '/health-check' },
          { label: 'Business Growth', href: '/business-growth' },
          { label: 'Restructuring', href: '/restructuring' }
        ]
      },
      {
        label: 'Resources',
        hasDropdown: true,
        items: [
          { label: 'Blog', href: '/blog' },
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Financial Tools', href: '/tools' },
          { label: 'Market Insights', href: '/insights' }
        ]
      },
      {
        label: 'About',
        href: '/about'
      }
    ],
    cta: {
      primary: 'Book a meeting',
      secondary: 'Get in touch'
    }
  },

  // Landing page sections for GMG Financial Services
  sections: {
    hero: {
      // Rotating titles with financial focus
      rotatingTitles: [
        "Real Advice for <span style='color: #66E8FA;'>Real Life</span> Goals",
        "Take Control of Your <span style='color: #66E8FA;'>Financial Future</span>", 
        "Confident <span style='color: #66E8FA;'>Financial Decisions</span> Start Here",
        "Your Trusted Partner in <span style='color: #66E8FA;'>Financial Clarity</span>",
        "Strategic Advice. <span style='color: #66E8FA;'>Lasting Results</span>"
      ]
    },

    aboutGMG: {
      title: 'About GMG\nFinancial Services',
      description: [
        'With over 20 years of experience in financial advisory,',
        'GMG provides strategic guidance to help businesses and individuals',
        'achieve their financial goals with confidence and clarity.'
      ]
    },

    ourServices: {
      subtitle: 'Comprehensive Financial Solutions',
      title: 'Our Services:\nTailored for Your Success',
      description: [
        'From business advisory to personal financial planning,',
        'our expert team delivers customized solutions that drive',
        'sustainable growth and long-term financial stability.'
      ]
    },

    financialHealthCheck: {
      title: 'Financial Health Check:\nYour Path to Financial Wellness',
      description: [
        'Our comprehensive financial health check provides deep insights',
        'into your current financial position and actionable strategies',
        'to optimize your financial performance and achieve your goals.'
      ]
    },

    statistics: {
      subtitle: 'Proven Track Record',
      title: 'Trusted by Clients\nAcross Industries',
      stats: [
        { number: '500+', label: 'Clients Served' },
        { number: '20+', label: 'Years Experience' },
        { number: '95%', label: 'Client Satisfaction' },
        { number: '$50M+', label: 'Funds Managed' }
      ]
    },

    contactUs: {
      subtitle: 'Ready to Get Started?',
      title: 'Contact Us:\nLet\'s Discuss Your Financial Future',
      description: [
        'Schedule a consultation with our expert team today.',
        'We\'re here to help you navigate your financial journey',
        'and achieve the success you deserve.'
      ]
    }
  },

  // Footer content
  footer: {
    cta: 'Take Control of Your\nFinancial Future',
    attribution: 'Design & Dev by Onion'
  }
} as const;