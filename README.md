# Effortel Landing Page

A modern, maintainable React landing page built with TypeScript, Tailwind CSS, and a comprehensive design system.

## 🎨 Design System

The project uses a centralized design system for easy customization:

### Configuration Files
- `src/config/design-system.ts` - Colors, typography, spacing, and other design tokens
- `src/config/content.ts` - All text content and section data

### Quick Customization

#### Colors
```typescript
// In src/config/design-system.ts
export const colors = {
  sections: {
    hero: '#22282A',        // Hero section background
    capabilities: '#92A6B0', // Capabilities section background
    mvnoLaunchpad: '#66E8FA', // MVNO section background
    interface: '#22282A',    // Interface section background
    awards: '#E4EDF1',      // Awards section background
    vision: '#66E8FA',      // Vision section background
  }
}
```

#### Typography
```typescript
// In src/config/design-system.ts
export const typography = {
  sizes: {
    hero: '83px',           // Main hero text size
    heroMobile: '40px',     // Mobile hero text size
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
      title: 'Your Custom Title Here',
      subtitle: 'Your Custom Subtitle',
      // ... other content
    }
  }
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/           # Individual page sections
│   │   ├── HeroSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   ├── MVNOLaunchpadSection.tsx
│   │   ├── InterfaceSection.tsx
│   │   └── VisionSection.tsx
│   ├── ui/                 # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── AwardsSection.tsx
├── config/
│   ├── design-system.ts    # Design tokens and theme
│   └── content.ts          # All text content
├── constants/
├── hooks/
└── pages/
    └── Index.tsx           # Main landing page
```

## 🚀 Features

- **Modular Architecture**: Each section is a separate component for easy editing
- **Design System**: Centralized colors, typography, and spacing
- **Content Management**: All text content in one configuration file
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **TypeScript**: Full type safety throughout the codebase
- **Easy Customization**: Change colors, fonts, and content without touching component code

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

## 🎯 Landing Page Sections

1. **Hero Section** - Main landing area with CTA buttons
2. **Capabilities Section** - BSS/OSS capabilities highlight
3. **MVNO Launchpad Section** - Product feature section
4. **Interface Section** - User interface showcase
5. **Awards Section** - Industry recognition
6. **Vision Section** - Company vision and goals

Each section has its own background color defined in the design system for easy customization.