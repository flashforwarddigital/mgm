# GMG Financial Services Website

A modern, responsive React website built with TypeScript, Tailwind CSS, and a comprehensive design system for GMG Financial Services.

## 🎨 Design System

The project uses a centralized design system for easy customization:

### Configuration Files
- `src/config/design-system.ts` - Colors, typography, spacing, and other design tokens
- `src/config/content.ts` - All text content and section data
- `src/config/carousel-config.ts` - **NEW**: Complete carousel configuration

### Quick Customization

#### Carousel Settings (NEW)
```typescript
// In src/config/carousel-config.ts
export const carouselConfig = {
  animation: {
    duration: '180s', // Ultra slow - easily adjustable
    timingFunction: 'linear',
    iterationCount: 'infinite',
  },
  spacing: {
    wordSpacing: '3rem', // Space between words
    letterSpacing: '0.25em', // Space between letters
    minWordWidth: '220px', // Minimum width per word
  },
  typography: {
    fontSize: '1.8rem',
    fontWeight: '100', // Ultra thin
    color: '#66E8FA',
  },
  position: {
    verticalPosition: 'bottom', // 'top', 'center', or 'bottom'
  }
}
```

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
│   │   ├── LogoCarousel.tsx    # **RESTRUCTURED**: Configurable carousel
│   │   ├── CarouselControls.tsx # **NEW**: Development controls
│   │   └── ...
│   ├── Header.tsx
│   └── Footer.tsx
├── config/
│   ├── design-system.ts        # Design tokens and theme
│   ├── content.ts              # All text content
│   └── carousel-config.ts      # **NEW**: Complete carousel configuration
├── constants/
├── hooks/
└── pages/
    └── Index.tsx               # Main landing page
```

## 🎠 Carousel System (RESTRUCTURED)

The carousel system has been completely restructured for easy editing:

### Easy Configuration
All carousel settings are now in `src/config/carousel-config.ts`:

- **Speed**: Change `duration` from '60s' to '240s' for ultra-slow
- **Spacing**: Adjust `wordSpacing` and `letterSpacing` independently
- **Position**: Set `verticalPosition` to 'top', 'center', or 'bottom'
- **Typography**: Control font size, weight, and color
- **Content**: Edit the `words` array to change carousel text

### CSS Variables System
The carousel uses CSS custom properties for runtime configuration:
- `--carousel-duration`: Animation speed
- `--carousel-word-spacing`: Space between words
- `--carousel-letter-spacing`: Space between letters
- `--carousel-font-weight`: Font thickness (100 = ultra-thin)

### Development Controls
Uncomment `<CarouselControls />` in `Index.tsx` for live editing during development.

## 🚀 Features

- **Modular Architecture**: Each section is a separate component for easy editing
- **Design System**: Centralized colors, typography, and spacing
- **Content Management**: All text content in one configuration file
- **Carousel System**: **NEW** - Completely configurable carousel with easy settings
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **TypeScript**: Full type safety throughout the codebase
- **Easy Customization**: Change colors, fonts, and content without touching component code
- **Financial Services Focus**: Tailored content and design for financial advisory

## 🛠️ Development

### Editing Carousel Settings
1. Open `src/config/carousel-config.ts`
2. Modify any setting (speed, spacing, position, etc.)
3. Changes apply immediately - no component editing needed

### Making Carousel Slower
```typescript
animation: {
  duration: '300s', // 5 minutes - ultra slow
}
```

### Adjusting Carousel Position
```typescript
position: {
  verticalPosition: 'bottom', // Moves to bottom of section
}
```

### Changing Carousel Spacing
```typescript
spacing: {
  wordSpacing: '4rem', // More space between words
  letterSpacing: '0.3em', // More space between letters
}
```

## 📱 Responsive Design

The design system includes responsive breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 GMG Financial Services Sections

1. **Hero Section** - Rotating financial advice titles with morphing text effect
2. **Logo Carousel** - **RESTRUCTURED** - Configurable scrolling financial terms
3. **About GMG Section** - Company introduction and experience
4. **Our Services Section** - Comprehensive financial solutions overview
5. **Financial Health Check Section** - Specialized service highlight
6. **Statistics Section** - Key performance metrics and achievements
7. **Contact Us Section** - Call-to-action with consultation booking

## 💼 Financial Services Features

- Professional color scheme optimized for financial services
- Trust-building statistics and testimonials
- Clear service offerings and value propositions
- Strong call-to-action elements
- Responsive design for all devices
- SEO-optimized structure
- **NEW**: Ultra-configurable carousel system for financial terms