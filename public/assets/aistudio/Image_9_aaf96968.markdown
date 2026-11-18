---
name: Obsidian Kinetic
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#171c25'
  surface-container: '#1b2029'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2f0'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#dfe2f0'
  inverse-on-surface: '#2c303b'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#b4c5ff'
  on-secondary: '#002a78'
  secondary-container: '#0053db'
  on-secondary-container: '#cdd7ff'
  tertiary: '#98d3ff'
  on-tertiary: '#00344d'
  tertiary-container: '#43bbff'
  on-tertiary-container: '#00486a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#0f131d'
  on-background: '#dfe2f0'
  surface-variant: '#31353f'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 4rem
    fontWeight: '800'
    lineHeight: '1.08'
    letterSpacing: -0.035em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '800'
    lineHeight: '1.12'
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.65'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.25'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  margin-tablet: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style
The design system positions Emanuel De Jesus as a world-class software engineer, product architect, and tech founder based in Luanda, Angola. The aesthetic bridges the engineering rigor of Linear and Vercel with the editorial polish of Stripe and Apple. 

The visual voice is precise, hyper-focused, and premium. It conveys uncompromised technical authority, craft, and architectural forward-thinking.

Key aesthetics:
- **Neo-Subtle Glassmorphism**: High-translucency backdrops layered over deep navy canvas, framed by razor-thin luminous borders.
- **Electric Precision**: Dark surfaces punctuated by restrained, hyper-saturated sapphire and cyan accents.
- **Editorial Technology**: High-contrast typography paired with spacious layouts, mathematical rhythms, and refined micro-interactions.

## Colors
The palette leverages a deep astronomical navy hierarchy paired with an intense cyan-to-sapphire spectrum.

### Surface Hierarchy (Dark Mode Default)
- **Canvas Base**: `#070b14` (Ultra-deep void canvas)
- **Canvas Raised**: `#0c1222` (Secondary section background)
- **Surface Translucent**: `#131c31` at `70%` to `85%` opacity with backdrop filter blur (16px–24px)
- **Surface Border / Ghost Stroke**: `#1e293b` (Hairline separators and structural framing)
- **Surface Hover / Highlight Stroke**: `rgba(56, 189, 248, 0.25)`

### Accents & Gradients
- **Primary Glow**: `#38bdf8` (Electric Cyan)
- **Secondary Energy**: `#2563eb` (Deep Sapphire Blue)
- **Accent Linear Gradient**: `135deg, #38bdf8 0%, #2563eb 100%`
- **Subtle Surface Glow**: Radial gradient overlay `radial-gradient(circle at top left, rgba(56, 189, 248, 0.08), transparent 60%)`

### Typography & Content
- **Text Contrast High (Primary)**: `#ffffff`
- **Text Contrast Medium (Secondary)**: `#94a3b8`
- **Text Contrast Low (Muted/Meta)**: `#64748b`

### Light Mode Adaptations
When toggled to light mode, surfaces invert to crisp off-whites (`#f8fafc` canvas, `#ffffff` card surfaces, `rgba(2, 6, 23, 0.06)` hairline borders), using `#0284c7` and `#1d4ed8` for focal accents, while `#0f172a` serves as the primary text tone.

## Typography
The typography pairing establishes geometric balance and technical legibility.

- **Plus Jakarta Sans**: Assigned to all display titles and sectional headlines. Its sculpted geometry provides a modern, executive presence. Tight negative tracking (`-0.02em` to `-0.035em`) produces dense, cohesive locks reminiscent of modern Silicon Valley platforms.
- **Inter**: Handles all body copy, forms, and functional UI metadata. Offers neutral, balanced horizontal proportions and high legibility at standard sizes.
- **Code Snippets**: Fall back to `JetBrains Mono` for developer-centric demonstrations, metrics, and terminal interactions.

## Layout & Spacing
The layout adheres to a strict 12-column responsive fluid grid with an enforced max-width container of `1280px` for optimal viewing ergonomics.

### Responsive Breakpoints & Rhythms
- **Desktop (≥ 1024px)**: 12 columns, `1.5rem` (24px) gutters, and `3rem` (48px) safe outer margins. Standard section spacing is `space-2xl` to `6rem`.
- **Tablet (768px – 1023px)**: 8 columns, `1.25rem` gutters, and `2rem` outer margins.
- **Mobile (< 768px)**: 4 columns, `1rem` gutters, and `1.25rem` outer margins. Stacks complex data layouts into vertical flows.

### Structural Rules
- Always preserve breathing space around hero headers and feature showcases.
- Internal component paddings rely on an 8pt base grid: `space-xs` (4px), `space-sm` (8px), `space-md` (16px), `space-lg` (24px), `space-xl` (40px).

## Elevation & Depth
Depth relies on translucent layering, razor-thin borders, and low-opacity chromatic glows rather than heavy drop shadows.

### Elevation Hierarchy
1. **Level 0 (Base Canvas)**: Flat `#070b14`.
2. **Level 1 (Card & Module Resting)**: Background `rgba(19, 28, 49, 0.7)` with `backdrop-filter: blur(16px)` and a continuous hairline stroke of `1px solid rgba(255, 255, 255, 0.08)`.
3. **Level 2 (Interactive Hover / Floating Panels)**: Background `rgba(19, 28, 49, 0.85)` with `1px solid rgba(56, 189, 248, 0.35)` and an ambient aura:
   `box-shadow: 0 12px 32px -8px rgba(7, 11, 20, 0.75), 0 0 24px -4px rgba(56, 189, 248, 0.12)`.
4. **Level 3 (Overlays, Modals, Menus)**: Background `#0c1222` with `backdrop-filter: blur(24px)`, framed by `1px solid rgba(255, 255, 255, 0.14)` and a broad diffused shadow `0 24px 60px -12px rgba(0, 0, 0, 0.8)`.

### Border Highlights (The "Linear Edge")
Cards use a subtle top-edge highlight using a linear gradient overlay (`linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.3), transparent)`) to simulate light grazing from above.

## Shapes
Shapes balance fluid rounded edges with architectural precision.

- **Base Radius (0.5rem / 8px)**: Reserved for badges, micro-tags, tooltips, and compact input elements.
- **Card / Surface Radius (`rounded-lg` / 1rem / 16px)**: Standard for containers, code blocks, project preview boxes, and modal envelopes.
- **Feature Surfaces (`rounded-xl` / 1.5rem / 24px)**: Used for standout hero cards, case study highlights, and main dashboard units.
- **Full Pill (`rounded-full`)**: Strictly designated for contextual status tags, pill buttons, floating quick-launch actions, and avatar indicators.

## Components

### Buttons
- **Primary Action**: Solid gradient background (`linear-gradient(135deg, #38bdf8 0%, #2563eb 100%)`), text `#ffffff`, `font-medium`, rounded-lg (`0.5rem`). Subtle inset top light: `box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.3), 0 4px 14px rgba(37, 99, 235, 0.3)`.
- **Secondary / Glass Action**: Translucent fill `rgba(255, 255, 255, 0.05)`, border `1px solid rgba(255, 255, 255, 0.1)`, text `#ffffff`. On hover: `border-color: #38bdf8`, background `rgba(56, 189, 248, 0.08)`.
- **Ghost Action**: Transparent background, text `#94a3b8`, hover state transitions to `#ffffff` text with zero border disruption.

### Badges & Micro-Pills
- Pill-shaped (`rounded-full`), padding `0.25rem 0.75rem`.
- Background `rgba(56, 189, 248, 0.08)`, border `1px solid rgba(56, 189, 248, 0.25)`, text `#38bdf8`, typography `label-sm`.
- Include an active pulse dot: a 6px green or cyan circle (`#38bdf8`) with an animated radial ping effect for status availability.

### Cards & Modules
- Glassmorphic panels with `1rem` padding on mobile and `1.5rem` on desktop.
- Resting border `#1e293b`; transitions seamlessly to `rgba(56, 189, 248, 0.4)` on hover.
- Gradient border accent on hover using CSS `mask-composite` or pseudo-elements.

### Inputs & Search Bars
- Background `rgba(12, 18, 34, 0.6)`, text `#ffffff`, placeholder text `#64748b`.
- Border `1px solid #1e293b`, radius `0.5rem`.
- Focus ring: No bulky browser outlines; uses clean glow `box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.3)` and border `#38bdf8`.

### Code & Terminal Blocks
- Deep contrast background `#070b14` encased in `1px solid #1e293b`.
- Top metadata header with traffic light dots (`#ef4444`, `#eab308`, `#22c55e`) and copy-to-clipboard button.

### Lists & Activity Feeds
- Hairline dividers with `border-bottom: 1px solid rgba(30, 41, 59, 0.6)`.
- Hover state lights up the row with `rgba(255, 255, 255, 0.02)` along with an electric cyan indicator tick on the far left.