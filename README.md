# GMG Financial Services Website

A modern, responsive React website built with TypeScript, Tailwind CSS, and a comprehensive design system for GMG Financial Services.

## 🎨 Design System

The project uses a centralized design system for easy customization:

### Configuration Files
- `src/config/design-system.ts` - Colors, typography, spacing, and other design tokens
- `src/config/content.ts` - All text content and section data

### Quick Customization

#### Section Colors
```typescript
// In src/config/design-system.ts
export const colors = {
  sections: {
    hero: '#22282A',              // Hero section - Dark professional
    aboutGMG: '#92A6B0',          // About GMG - Professional gray
    ourServices: '#66E8FA',       // Our Services - Bright cyan
    financialHealthCheck: '#E4EDF1', // Financial Health Check - Clean light
    statistics: '#22282A',        // Statistics - Dark for emphasis
    contactUs: '#66E8FA',         // Contact Us - Bright call-to-action
  }
}
```

#### Typography
```typescript
// In src/config/design-system.ts
export const typography = {
  sizes: {
    hero: 'clamp(2.5rem, 5vw, 5.2rem)', // Responsive hero text
    heroMobile: '40px',                  // Mobile hero text size
    // ... other sizes
  }
}
```

#### Content
```typescript
// In src/config/content.ts
export const siteContent = {
  sections: {
    hero: {
      rotatingTitles: [
        "Real Advice for <span style='color: #66E8FA;'>Real Life</span> Goals",
        // ... more titles
      ]
    }
  }
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/               # GMG Financial Services sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutGMGSection.tsx
│   │   ├── OurServicesSection.tsx
│   │   ├── FinancialHealthCheckSection.tsx
│   │   ├── StatisticsSection.tsx
│   │   └── ContactUsSection.tsx
│   ├── ui/                     # Reusable UI components
│   ├── Header.tsx
│   └── Footer.tsx
├── config/
│   ├── design-system.ts        # Design tokens and theme
│   └── content.ts              # All text content
├── constants/
├── hooks/
└── pages/
    └── Index.tsx               # Main landing page
```

## 🚀 Features

- **Modular Architecture**: Each section is a separate component for easy editing
- **Design System**: Centralized colors, typography, and spacing
- **Content Management**: All text content in one configuration file
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **TypeScript**: Full type safety throughout the codebase
- **Easy Customization**: Change colors, fonts, and content without touching component code
- **Financial Services Focus**: Tailored content and design for financial advisory

## 🛠️ Development

### Adding a New Section
1. Create a new component in `src/components/sections/`
2. Add section content to `src/config/content.ts`
3. Add section colors to `src/config/design-system.ts`
4. Import and use in `src/pages/Index.tsx`

### Changing Section Colors
Edit the `colors.sections` object in `src/config/design-system.ts`:

```typescript
sections: {
  newSection: '#YOUR_COLOR_HERE',
}
```

### Updating Content
Edit the `siteContent.sections` object in `src/config/content.ts`:

```typescript
sections: {
  yourSection: {
    title: 'New Title',
    subtitle: 'New Subtitle',
    description: ['Line 1', 'Line 2']
  }
}
```

## 📱 Responsive Design

The design system includes responsive breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 GMG Financial Services Sections

1. **Hero Section** - Rotating financial advice titles with morphing text effect
2. **About GMG Section** - Company introduction and experience
3. **Our Services Section** - Comprehensive financial solutions overview
4. **Financial Health Check Section** - Specialized service highlight
5. **Statistics Section** - Key performance metrics and achievements
6. **Contact Us Section** - Call-to-action with consultation booking

Each section has its own background color defined in the design system for easy customization.

## 💼 Financial Services Features

- Professional color scheme optimized for financial services
- Trust-building statistics and testimonials
- Clear service offerings and value propositions
- Strong call-to-action elements
- Responsive design for all devices
- SEO-optimized structure