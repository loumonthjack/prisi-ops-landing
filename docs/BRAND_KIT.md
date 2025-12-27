# Brand Kit

**Project**: Roppy Jack / Prisi-Ops
**Version**: 1.0
**Last Updated**: 2025-12-26

---

## Brand Identity

### Vision
Creating immersive, vault-themed digital experiences that blend minimalist luxury with industrial precision. The aesthetic combines refined elegance with mechanical sophistication, evoking trust, security, and technical excellence.

### Brand Archetype
- **Primary**: The Expert - Knowledgeable, confident, data-driven
- **Secondary**: The Innovator - Visionary, bold, forward-thinking

### Brand Attributes
- Authoritative
- Innovative
- Trustworthy
- Educational
- Refined

---

## Visual Design System

### Color Palette

#### Dark Theme (Default)
```css
--vault-black: #000000           /* Pure black - primary background */
--vault-dark-surface: #0a0a0a    /* Elevated surfaces */
--vault-dark-border: #1a1a1a     /* Subtle separation */
--vault-steel: #2d2d2d           /* Metallic accents */
--vault-metal: #4a4a4a           /* Interactive elements */
--vault-chrome: #6b6b6b          /* Mid-tone metals */
--vault-silver: #9a9a9a          /* Muted text */
--vault-text-secondary: #a0a0a0  /* Secondary text */
--vault-text-muted: #666666      /* Tertiary text */
--vault-white: #ffffff           /* Primary text & accents */
```

#### Light Theme
```css
--vault-white: #ffffff           /* Pure white - primary background */
--vault-light-surface: #fafafa   /* Elevated surfaces */
--vault-light-border: #e5e5e5    /* Subtle separation */
--vault-light-gray: #d4d4d4      /* Light accents */
--vault-text: #000000            /* Primary text */
--vault-text-secondary: #525252  /* Secondary text */
--vault-text-muted: #999999      /* Tertiary text */
```

#### Usage Guidelines
- **Backgrounds**: Use pure black (#000000) or pure white (#ffffff)
- **Surfaces**: Elevated elements use #0a0a0a (dark) or #fafafa (light)
- **Borders**: Subtle borders with #1a1a1a (dark) or #e5e5e5 (light)
- **Text Hierarchy**: Primary (white/black), Secondary (#a0a0a0/#525252), Muted (#666666/#999999)
- **Metallic Accents**: Use steel (#2d2d2d) through chrome (#6b6b6b) for vault elements

### Typography

#### Font Families
```css
--font-display: 'DM Serif Display', Georgia, serif
--font-body: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif
--font-mono: 'IBM Plex Mono', 'SF Mono', Consolas, monospace
```

#### Type Scale
```css
/* Display - Hero sections */
.text-display-large: clamp(3rem, 8vw, 6rem)      /* 48-96px */
.text-display: clamp(2rem, 5vw, 3.5rem)          /* 32-56px */

/* Headings - Section titles */
.text-heading-large: clamp(1.5rem, 3vw, 2.25rem) /* 24-36px */
.text-heading: clamp(1.25rem, 2vw, 1.75rem)      /* 20-28px */

/* Body - Main content */
.text-body-large: 1.125rem                        /* 18px */
.text-body: 1rem                                  /* 16px */

/* Small - Captions & labels */
.text-caption: 0.875rem                           /* 14px */
.text-small: 0.8125rem                            /* 13px */
```

#### Typography Guidelines
- **Display Font**: Use for headings and titles (DM Serif Display)
- **Body Font**: Use for all body copy (IBM Plex Sans)
- **Mono Font**: Use for technical content, code, labels (IBM Plex Mono)
- **Line Height**: 1.1 for display, 1.2-1.3 for headings, 1.6 for body
- **Letter Spacing**: -0.03em (large), -0.02em (headings), -0.01em (body)
- **Font Weight**: 400 (regular) for refined minimalism

### Spacing System

#### Base Scale
```css
--space-minimal: 1rem      /* 16px - tight spacing */
--space-comfortable: 2rem  /* 32px - standard spacing */
--space-generous: 4rem     /* 64px - section spacing */
```

#### Layout Spacing
- **Component Internal**: 1-2rem
- **Between Components**: 2-4rem
- **Section Padding**: 4rem vertical, 2rem horizontal
- **Container Max Width**: 960px

#### Luxury of Space
- Embrace whitespace for elegance
- Use generous padding on containers (4rem on desktop, 2rem on mobile)
- Maintain consistent rhythm with 1rem/2rem/4rem scale

---

## Component Design Patterns

### Vault-Themed Elements

#### Vault Door
- Massive, imposing presence
- Metallic textures with gradients
- Mechanical animations (swing, rotation)
- Profile lock as circular dial centerpiece

#### Vault Panels
```css
/* Panel Styles */
background: var(--surface)
border: 1px solid var(--border)
border-radius: 0                    /* No rounding - industrial */
padding: 2rem
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)

/* Hover State */
border-color: var(--text)
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08)
transform: translateY(-2px)
```

#### Security Level Indicators
- Styled as vault depth levels
- Progress through security clearances
- Metallic progress bars or step indicators

### Buttons

#### Minimal Button
```css
.minimal-button {
  padding: 0.875rem 2rem;
  background-color: var(--accent);
  color: var(--bg);
  border: 1px solid var(--accent);
  border-radius: 0;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.minimal-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Cards

#### Minimal Card
```css
.minimal-card {
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.minimal-card:hover {
  border-color: var(--text);
  transform: translateY(-2px);
}
```

### Input Fields

#### Minimal Input
```css
.minimal-input {
  padding: 0.875rem 1rem;
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-radius: 0;
  font-size: 0.9375rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.minimal-input:focus {
  outline: none;
  border-color: var(--text);
  background-color: var(--bg);
}
```

### Badges

#### Tech Badge
```css
.minimal-badge {
  padding: 0.25rem 0.75rem;
  background-color: transparent;
  border: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-secondary);
}
```

---

## Animation & Motion

### Animation Principles
- **Mechanical Precision**: Animations should feel engineered and deliberate
- **Smooth Transitions**: Use cubic-bezier easing for natural motion
- **Purposeful Movement**: Every animation serves the vault narrative

### Timing Functions
```css
/* Standard Ease */
cubic-bezier(0.4, 0, 0.2, 1)    /* Gentle acceleration/deceleration */

/* Sharp */
ease-out                         /* Quick start, gentle end */

/* Smooth */
ease-in-out                      /* Balanced acceleration */
```

### Animation Durations
```css
/* Micro-interactions */
--duration-fast: 150ms           /* Hover states, focus */
--duration-quick: 300ms          /* Button clicks, toggles */
--duration-standard: 400ms       /* Panel slides, card hovers */
--duration-deliberate: 500ms     /* Theme transitions, lock rotation */
--duration-cinematic: 800ms-1s   /* Vault door opening, entry zoom */
```

### Key Animations

#### Vault Door Opening Sequence
1. Profile lock rotation: 500ms ease-out
2. Vault door swing: 1000ms cubic-bezier(0.4, 0, 0.2, 1)
3. Entry zoom transition: 800ms ease-in-out
4. Panel fade-in: 300ms ease-in

#### Hover States
```css
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-2px);
}
```

#### Fade In
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

#### Slide In
```css
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slide-in 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Theme System

### Dark/Light Toggle
- Smooth 500ms transition between themes
- Icon-based toggle in corner of viewport
- Preserves user preference in localStorage

### Theme CSS Variables
```css
:root {
  /* Dark theme (default) */
  --bg: var(--color-dark-bg);
  --surface: var(--color-dark-surface);
  --border: var(--color-dark-border);
  --text: var(--color-dark-text);
  --text-secondary: var(--color-dark-text-secondary);
  --text-muted: var(--color-dark-text-muted);
  --accent: var(--color-dark-accent);
}

:root[data-theme="light"] {
  /* Light theme */
  --bg: var(--color-light-bg);
  --surface: var(--color-light-surface);
  --border: var(--color-light-border);
  --text: var(--color-light-text);
  --text-secondary: var(--color-light-text-secondary);
  --text-muted: var(--color-light-text-muted);
  --accent: var(--color-light-accent);
}
```

### Theme Transition Class
```css
.theme-transition {
  transition:
    background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## Content & Voice

### Brand Voice Framework

#### Tone Attributes
- **Authoritative**: Position as industry expert with data-driven insights
- **Innovative**: Forward-thinking and cutting-edge
- **Trustworthy**: Reliable, transparent, and secure
- **Educational**: Informative, clear, actionable

#### Writing Principles
1. **Clarity First**: Use simple words, break complex ideas, lead with main point
2. **Customer-Centric**: Focus on benefits, address pain points, use "you" more than "we"
3. **Consistency**: Maintain voice across channels, use approved terminology
4. **Active Voice**: Use 80% active voice for directness

#### Words We Use
- Action verbs: Transform, accelerate, optimize, unlock, elevate
- Positive descriptors: Seamless, powerful, intuitive, strategic, refined
- Outcome-focused: Results, growth, success, impact, ROI

#### Words We Avoid
- Jargon: Synergy, leverage (as verb), bandwidth (for availability)
- Overused: Innovative (unless truly applicable), disruptive, cutting-edge
- Weak: Very, really, just, maybe, hopefully
- Negative: Can't, won't, impossible, problem (use "challenge")

### Messaging Pillars

1. **Innovation & Technology**
   - AI-powered solutions
   - Data-driven insights
   - Vault-level security

2. **Expertise & Trust**
   - Industry leadership
   - Proven methodologies
   - Transparent communication

3. **Growth & Transformation**
   - Scaling businesses
   - Digital transformation
   - Continuous improvement

---

## Technical Implementation

### Technology Stack
- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion
- **State Management**: React Context
- **Build Tool**: Vite

### File Structure Pattern
```
src/
├── components/
│   ├── ComponentName/
│   │   ├── ComponentName.tsx
│   │   ├── ComponentName.css (optional)
│   │   └── ComponentName.test.tsx
├── context/
│   ├── VaultContext.tsx
│   └── ThemeContext.tsx
├── index.css (design system)
└── App.tsx
```

### CSS Architecture
- Use CSS custom properties for theming
- Utility-first with Tailwind CSS v4
- Component-specific styles in dedicated files
- Global design system in index.css

### Design Tokens
```css
/* Defined in index.css @theme block */
@theme {
  /* Colors */
  --color-*-*: #hexvalue;

  /* Typography */
  --font-display: 'DM Serif Display', Georgia, serif;
  --font-body: 'IBM Plex Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}
```

---

## Responsive Design

### Breakpoints
```css
/* Mobile-first approach */
@media (max-width: 640px)   /* Mobile */
@media (max-width: 768px)   /* Tablet */
@media (max-width: 1024px)  /* Desktop */
@media (max-width: 1280px)  /* Large Desktop */
```

### Touch Targets
```css
@media (pointer: coarse) {
  button,
  a,
  [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }
}
```

### Mobile Adjustments
- Base font size: 15px on mobile, 16px on desktop
- Container padding: 1.5rem on mobile, 2-4rem on desktop
- Reduced animation complexity on lower-end devices

### Safe Area Insets
```css
@supports (padding: max(0px)) {
  body {
    padding-left: max(0px, env(safe-area-inset-left));
    padding-right: max(0px, env(safe-area-inset-right));
    padding-bottom: max(0px, env(safe-area-inset-bottom));
  }
}
```

---

## Accessibility

### Focus States
```css
.focus-minimal:focus {
  outline: 2px solid var(--text);
  outline-offset: 4px;
}

.focus-minimal:focus:not(:focus-visible) {
  outline: none;
}
```

### Color Contrast
- Dark theme: White text (#ffffff) on black background (#000000) = 21:1
- Light theme: Black text (#000000) on white background (#ffffff) = 21:1
- Secondary text meets WCAG AA standards (4.5:1 minimum)

### ARIA Labels
- Use semantic HTML elements
- Provide aria-labels for interactive elements
- Ensure screen reader compatibility

### Keyboard Navigation
- All interactive elements focusable
- Logical tab order
- Visible focus indicators
- Escape key closes modals/panels

---

## Usage Examples

### Creating a New Page Component

```tsx
import { motion } from 'framer-motion';
import { VaultPanel } from '../components/VaultPanel';

export function NewSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="container-luxury"
    >
      <h1 className="font-display text-display mb-8">
        Section Title
      </h1>

      <VaultPanel title="Content Panel" isOpen={true}>
        <p className="font-body text-body text-secondary">
          Your content here with proper hierarchy and spacing.
        </p>
      </VaultPanel>
    </motion.div>
  );
}
```

### Adding Theme-Aware Styles

```tsx
<div
  className="minimal-card theme-transition"
  style={{
    backgroundColor: 'var(--surface)',
    borderColor: 'var(--border)',
    color: 'var(--text)'
  }}
>
  Content automatically adapts to theme
</div>
```

### Creating a Custom Badge

```tsx
<span className="minimal-badge font-mono">
  React
</span>
```

---

## Brand Assets Checklist

When creating new components or pages, ensure:

- [ ] Uses correct color palette (dark/light theme variables)
- [ ] Typography follows scale and font families
- [ ] Spacing uses 1rem/2rem/4rem system
- [ ] Animations use specified timing functions
- [ ] Border radius is 0 (no rounding)
- [ ] Hover states include subtle lift
- [ ] Focus states are visible and accessible
- [ ] Theme transitions are smooth (0.5s)
- [ ] Mobile responsive with proper breakpoints
- [ ] Follows vault/security aesthetic
- [ ] Content uses brand voice guidelines

---

## Quick Reference

### Most Common CSS Variables
```css
var(--bg)               /* Background */
var(--surface)          /* Elevated surfaces */
var(--border)           /* Borders */
var(--text)             /* Primary text */
var(--text-secondary)   /* Secondary text */
var(--text-muted)       /* Tertiary text */
var(--accent)           /* Accent color */
```

### Most Common Classes
```css
.font-display           /* Headings */
.font-body              /* Body text */
.font-mono              /* Technical text */
.minimal-card           /* Card container */
.minimal-button         /* Primary button */
.minimal-badge          /* Label/tag */
.theme-transition       /* Smooth theme change */
.hover-lift             /* Hover elevation */
```

### Animation Snippet
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
>
  {content}
</motion.div>
```

---

## Version History

- **v1.0** (2025-12-26): Initial brand kit creation
  - Established color palette (dark/light themes)
  - Defined typography system
  - Documented component patterns
  - Created animation guidelines
  - Established voice and tone framework

---

## Contact & Support

For questions about brand usage or to suggest updates to this brand kit, please contact the project maintainers.

**Repository**: [Project repository location]
**Documentation**: See `.claude/` directory for additional guidelines
