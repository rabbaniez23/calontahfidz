# Ngajilagi Design Tokens

This document serves as the single source of truth for the Ngajilagi design system.

## 1. Colors

### Primary Brand
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `color-primary-teal` | `#008080` | Main brand color, buttons, headings |
| `color-primary-dark` | `#006666` | Hover states, gradient end, depth |
| `color-bg-light` | `#f0f9f9` | Subtle backgrounds, hero section |
| `color-bg-extra-light` | `#e0f2f1` | Borders, very subtle backgrounds |

### Secondary & Accents
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `color-accent-gold` | `#FFD700` | Call-to-action buttons, highlights |
| `color-brand-whatsapp` | `#25D366` | Floating WhatsApp button |

### Neutrals
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `color-neutral-white` | `#FFFFFF` | Main backgrounds, card backgrounds |
| `color-neutral-off-white` | `#f8f8f8` | FAQ items, subtle backgrounds |
| `color-neutral-text-dark` | `#333333` | Primary text color |
| `color-neutral-gray-light` | `#cccccc` | Inactive dots, borders |

### Gradients
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `gradient-primary` | `linear-gradient(135deg, #008080 0%, #006666 100%)` | Feature cards, primary buttons |
| `gradient-soft` | `linear-gradient(135deg, #ffffff 0%, #f0f9f9 100%)` | Section backgrounds |
| `gradient-overlay-image` | `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)` | Story cards image overlay |
| `gradient-overlay-teal` | `linear-gradient(180deg, transparent 0%, rgba(0,128,128,0.9) 100%)` | Brand overlay effects |

---

## 2. Typography

### Font Family
| Token Name | Value |
| :--- | :--- |
| `font-family-base` | `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` |

### Font Sizes
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `font-size-h1-hero` | `32px` | Main hero headings |
| `font-size-h2-section` | `28px` | Section headings |
| `font-size-h2-cta` | `26px` | Call-to-action headings |
| `font-size-h2-feature` | `24px` | Feature card titles |
| `font-size-h3-story` | `18px` | Story card titles |
| `font-size-body-lg` | `16px` | Feature descriptions, main content |
| `font-size-body-reg` | `14px` | Story descriptions, secondary text |
| `font-size-footer-sm` | `13px` | Copyright text |
| `font-size-footer-xs` | `12px` | Footer legal text |

### Font Weights
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `font-weight-regular` | `400` | Body text |
| `font-weight-semibold` | `600` | Subheadings, FAQ questions |
| `font-weight-bold` | `700` | Headlines, CTA buttons |

### Line Heights
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `line-height-tight` | `1.2` | Hero headings |
| `line-height-snug` | `1.3` | Section headings |
| `line-height-normal` | `1.4` | Story titles, FAQ |
| `line-height-relaxed` | `1.6` | Body large, small text |
| `line-height-loose` | `1.8` | Body regular, footer |

---

## 3. Spacing & Layout

### Spacing Scale
**Base Unit:** 10px

| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `spacing-xs` | `10px` | Minimal spacing, tight gaps |
| `spacing-sm` | `15px` | Small gaps, compact layouts |
| `spacing-md` | `20px` | Standard spacing between elements |
| `spacing-lg` | `30px` | Section padding, larger gaps |
| `spacing-xl` | `40px` | Major section padding |
| `spacing-2xl` | `50px` | Large section separation |
| `spacing-3xl` | `60px` | Hero section top padding |

### Layout Specifics
| Token Name | Value | Context |
| :--- | :--- | :--- |
| `padding-hero` | `60px 30px 40px` | Hero section |
| `padding-card-feature` | `40px 30px` | Feature cards |
| `padding-card-story` | `40px 30px` | Story cards |
| `padding-faq` | `20px 25px` | FAQ items |
| `padding-button` | `12px 30px` | CTA Buttons |
| `gap-social` | `20px` | Social icons container |
| `gap-dots` | `8px` | Navigation dots |

### Breakpoints
| Token Name | Value |
| :--- | :--- |
| `breakpoint-mobile-max` | `480px` |

---

## 4. Borders & Radius

### Border Radius Scale
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `radius-sm` | `4px` | Active navigation dots |
| `radius-md` | `15px` | FAQ items |
| `radius-lg` | `20px` | Story cards |
| `radius-xl` | `25px` | Feature cards, CTA buttons (Pill) |
| `radius-full` | `50%` | Circular icons, Floating buttons |

---

## 5. Shadows (Elevation)

### Elevation Scale
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `shadow-level-1` | `0 2px 5px rgba(0,0,0,0.05)` | Subtle hover states |
| `shadow-level-2` | `0 4px 15px rgba(255, 215, 0, 0.3)` | CTA buttons default |
| `shadow-level-3` | `0 5px 15px rgba(0,0,0,0.1)` | Feature icons |
| `shadow-level-4` | `0 6px 20px rgba(255, 215, 0, 0.4)` | CTA buttons hover |
| `shadow-level-5` | `0 10px 30px rgba(0, 128, 128, 0.2)` | Feature cards |
| `shadow-level-6` | `0 10px 30px rgba(0,0,0,0.2)` | Story cards |

### Component Shadows
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `shadow-whatsapp` | `0 5px 20px rgba(37, 211, 102, 0.5)` | WhatsApp button default |
| `shadow-whatsapp-hover` | `0 8px 30px rgba(37, 211, 102, 0.6)` | WhatsApp button hover |

---

## 6. Opacity & Transparency

### Opacity Scale
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `opacity-20` | `0.2` | Social icon backgrounds |
| `opacity-30` | `0.3` | Pulse animation end state |
| `opacity-50` | `0.5` | Pulse animation start state |
| `opacity-90` | `0.9` | Text on dark backgrounds, taglines |
| `opacity-95` | `0.95` | Feature card text |
| `opacity-100` | `1.0` | Default |

### Transparency Overlays
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `overlay-glass` | `rgba(255,255,255,0.2)` | Social icons glass effect |

---

## 7. Animation & Transitions

### Timing
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `duration-standard` | `300ms` | Hover effects, state changes |
| `duration-long` | `3000ms` | Ambient animations (pulse) |

### Easing
| Token Name | Value |
| :--- | :--- |
| `ease-default` | `ease` |
| `ease-movement` | `ease-in-out` |

### Transforms
| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `transform-lift-sm` | `translateY(-2px)` | CTA Button Hover |
| `transform-lift-md` | `translateY(-3px)` | Icon Hover |
| `transform-scale-up` | `scale(1.1)` | WhatsApp Button Hover |

---

## 8. Z-Index

| Token Name | Value | Usage |
| :--- | :--- | :--- |
| `z-base` | `1` | Default content |
| `z-elevated` | `10` | Sticky elements |
| `z-floating` | `100` | Floating buttons (WhatsApp) |
| `z-modal` | `1000` | Modals, overlays |