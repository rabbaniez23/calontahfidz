# Ngajilagi Website - Complete Style Guide

## 📋 Overview

This style guide documents the design system for the Ngajilagi online learning platform. The design emphasizes cleanliness, modernity, and accessibility with a focus on the Islamic education context. The color scheme centers around teal (#008080) representing trust, wisdom, and spirituality, paired with clean white backgrounds for maximum readability.

**Design Philosophy:**
- **Clean & Minimal**: Avoiding visual clutter while maintaining engaging interactions
- **Modern & Professional**: Contemporary design patterns with smooth animations
- **Mobile-First**: Optimized for smartphone users (primary target audience)
- **Accessible**: High contrast ratios and readable typography
- **Trustworthy**: Colors and layouts that inspire confidence in educational content

---

## 🎨 Color Palette

### Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Primary Teal** | `#008080` | `rgb(0, 128, 128)` | Main brand color, buttons, headings, feature cards |
| **Dark Teal** | `#006666` | `rgb(0, 102, 102)` | Gradient end, hover states, depth |
| **Light Teal Background** | `#f0f9f9` | `rgb(240, 249, 249)` | Subtle backgrounds, hero section |
| **Extra Light Teal** | `#e0f2f1` | `rgb(224, 242, 241)` | Borders, very subtle backgrounds |

### Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Accent Gold** | `#FFD700` | `rgb(255, 215, 0)` | Call-to-action buttons, highlights |
| **WhatsApp Green** | `#25D366` | `rgb(37, 211, 102)` | Floating WhatsApp button |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Pure White** | `#FFFFFF` | `rgb(255, 255, 255)` | Main backgrounds, card backgrounds |
| **Off-White** | `#f8f8f8` | `rgb(248, 248, 248)` | FAQ items, subtle backgrounds |
| **Dark Text** | `#333333` | `rgb(51, 51, 51)` | Primary text color |
| **Light Gray** | `#cccccc` | `rgb(204, 204, 204)` | Inactive dots, borders |

### Color Usage Guidelines

**Primary Teal (#008080)**
- Main headings and titles
- Feature card backgrounds (with gradient)
- Links and interactive elements
- Footer background
- Active state indicators

**Accent Gold (#FFD700)**
- Primary CTA buttons only
- Should be used sparingly for maximum impact
- Always paired with dark text for contrast

**White (#FFFFFF)**
- Main content backgrounds
- Text on dark backgrounds
- Card surfaces

**Gradient Combinations**
```css
/* Primary Gradient */
background: linear-gradient(135deg, #008080 0%, #006666 100%);

/* Soft Background Gradient */
background: linear-gradient(135deg, #ffffff 0%, #f0f9f9 100%);

/* Overlay Gradient for Images */
background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%);

/* Teal Overlay */
background: linear-gradient(180deg, transparent 0%, rgba(0,128,128,0.9) 100%);
```

### Color Accessibility

All color combinations meet WCAG 2.1 AA standards:
- **Teal on White**: Contrast ratio 4.52:1 ✓
- **Dark Text on White**: Contrast ratio 12.63:1 ✓
- **White on Teal**: Contrast ratio 4.52:1 ✓
- **Dark Text on Gold**: Contrast ratio 8.21:1 ✓

---

## 📝 Typography

### Font Stack

**Primary Font Family:**
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

This font stack provides:
- **Segoe UI**: Modern, clean appearance on Windows
- **Tahoma**: Fallback for older Windows systems
- **Geneva**: macOS alternative
- **Verdana**: Universal fallback
- **sans-serif**: System default

### Type Scale

| Element | Font Size | Font Weight | Line Height | Letter Spacing | Usage |
|---------|-----------|-------------|-------------|----------------|-------|
| **H1 - Hero** | `32px` | `700 (Bold)` | `1.2` | `normal` | Main hero headings |
| **H2 - Section** | `28px` | `700 (Bold)` | `1.3` | `normal` | Section headings |
| **H2 - Feature** | `24px` | `600 (Semi-Bold)` | `1.3` | `normal` | Feature card titles |
| **H2 - CTA** | `26px` | `700 (Bold)` | `1.3` | `normal` | Call-to-action headings |
| **H3 - Story** | `18px` | `600 (Semi-Bold)` | `1.4` | `normal` | Story card titles |
| **Body Large** | `16px` | `400 (Regular)` | `1.6` | `normal` | Feature descriptions, main content |
| **Body Regular** | `14px` | `400 (Regular)` | `1.8` | `normal` | Story descriptions, secondary text |
| **Button Text** | `16px` | `700 (Bold)` | `normal` | `normal` | CTA button labels |
| **FAQ Text** | `16px` | `600 (Semi-Bold)` | `1.4` | `normal` | FAQ questions |
| **Small Text** | `14px` | `400 (Regular)` | `1.6` | `normal` | Taglines, captions |
| **Footer Info** | `12px` | `400 (Regular)` | `1.8` | `normal` | Footer legal text |
| **Footer Small** | `13px` | `400 (Regular)` | `normal` | `normal` | Copyright text |

### Typography Examples

```css
/* H1 - Hero Heading */
.hero h1 {
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    color: #008080;
}

/* H2 - Section Heading */
.section-heading {
    font-size: 28px;
    font-weight: 700;
    color: #008080;
}

/* Body Text */
.body-text {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: #333333;
}

/* Button Text */
.button-text {
    font-size: 16px;
    font-weight: 700;
}
```

### Responsive Typography

Typography scales appropriately on smaller screens:

```css
@media (max-width: 480px) {
    .hero h1 { font-size: 28px; }
    .feature-card h2 { font-size: 20px; }
}
```

### Font Weight Usage Guidelines

- **700 (Bold)**: Headlines, CTA buttons, emphasis
- **600 (Semi-Bold)**: Subheadings, FAQ questions, card titles
- **400 (Regular)**: Body text, descriptions, general content

---

## 📏 Spacing System

### Base Unit: 10px

The spacing system uses a **10px base unit** for consistency and scalability.

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | `10px` | Minimal spacing, tight gaps |
| `sm` | `15px` | Small gaps, compact layouts |
| `md` | `20px` | Standard spacing between elements |
| `lg` | `30px` | Section padding, larger gaps |
| `xl` | `40px` | Major section padding |
| `2xl` | `50px` | Large section separation |
| `3xl` | `60px` | Hero section top padding |

### Applied Spacing

**Padding Values:**
```css
/* Hero Section */
padding: 60px 30px 40px; /* vertical horizontal */

/* Feature Cards */
padding: 40px 30px;

/* Story Section */
padding: 40px 30px;

/* FAQ Items */
padding: 20px 25px;

/* Footer */
padding: 50px 30px 30px;
```

**Margin Values:**
```css
/* Heading Bottom Margin */
margin-bottom: 10px; /* Tight spacing after hero title */
margin-bottom: 15px; /* Standard heading spacing */
margin-bottom: 30px; /* Section heading spacing */
margin-bottom: 40px; /* Large section spacing */

/* Card Margin */
margin-bottom: 30px; /* Feature cards */
margin-bottom: 20px; /* Story cards */
margin-bottom: 15px; /* FAQ items */

/* Element Margin */
margin: 20px 0; /* Buttons */
margin-top: 30px; /* Footer dividers */
```

**Gap Values:**
```css
/* Social Icons */
gap: 20px;

/* Dots Navigation */
gap: 8px;
```

### Spacing Guidelines

1. **Consistent Rhythm**: Use multiples of 5 or 10 for predictable spacing
2. **Breathing Room**: Maintain adequate whitespace (30-40px between sections)
3. **Mobile Optimization**: Reduce padding on mobile (20-30px instead of 40-50px)
4. **Vertical Rhythm**: Maintain consistent vertical spacing for better readability

---

## 🧩 Component Styles

### 1. Buttons

#### Primary CTA Button

**Visual Characteristics:**
- Background: Gold (#FFD700)
- Text Color: Dark (#333)
- Font Weight: 700 (Bold)
- Font Size: 16px
- Padding: 12px 30px
- Border Radius: 25px (pill shape)
- Shadow: `0 4px 15px rgba(255, 215, 0, 0.3)`

```css
.cta-button {
    background: #FFD700;
    color: #333;
    padding: 12px 30px;
    border-radius: 25px;
    border: none;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
}
```

**States:**
- **Default**: Gold background with soft shadow
- **Hover**: Lifts up 2px with enhanced shadow
- **Active**: (Can add pressed state)

#### Floating WhatsApp Button

```css
.whatsapp-float {
    width: 60px;
    height: 60px;
    background: #25D366;
    color: white;
    border-radius: 50%;
    font-size: 30px;
    box-shadow: 0 5px 20px rgba(37, 211, 102, 0.5);
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
}

.whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
}
```

### 2. Cards

#### Feature Card

**Visual Characteristics:**
- Background: Teal gradient
- Padding: 40px 30px
- Border Radius: 25px
- Shadow: `0 10px 30px rgba(0, 128, 128, 0.2)`
- Text Color: White
- Text Alignment: Center

```css
.feature-card {
    background: linear-gradient(135deg, #008080 0%, #006666 100%);
    border-radius: 25px;
    padding: 40px 30px;
    margin-bottom: 30px;
    color: white;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 128, 128, 0.2);
    position: relative;
    overflow: hidden;
}

/* Animated background effect */
.feature-card::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: pulse 3s infinite;
}
```

#### Story Card

**Visual Characteristics:**
- Height: 350px
- Border Radius: 20px
- Gradient Overlay: Bottom to top, transparent to dark
- Shadow: `0 10px 30px rgba(0,0,0,0.2)`

```css
.story-card {
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%);
    border-radius: 20px;
    height: 350px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    overflow: hidden;
}
```

#### FAQ Item

```css
.faq-item {
    background: #f8f8f8;
    padding: 20px 25px;
    margin-bottom: 15px;
    border-radius: 15px;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease;
}

.faq-item:hover {
    border-color: #008080;
    background: #f0f9f9;
}
```

### 3. Icons

#### Feature Icon

```css
.feature-icon {
    width: 80px;
    height: 80px;
    background: white;
    border-radius: 50%;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
```

#### Social Icon

```css
.social-icon {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: all 0.3s ease;
}

.social-icon:hover {
    background: white;
    color: #008080;
    transform: translateY(-3px);
}
```

### 4. Navigation Dots

```css
.dot {
    width: 8px;
    height: 8px;
    background: #ccc;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.dot.active {
    background: #008080;
    width: 24px;
    border-radius: 4px;
}
```

---

## 🌓 Shadows & Elevation

### Shadow System

Shadows create depth and hierarchy in the design. The system uses **6 elevation levels**:

| Level | CSS Shadow | Usage |
|-------|------------|-------|
| **Level 1** | `0 2px 5px rgba(0,0,0,0.05)` | Subtle hover states |
| **Level 2** | `0 4px 15px rgba(255, 215, 0, 0.3)` | CTA buttons default |
| **Level 3** | `0 5px 15px rgba(0,0,0,0.1)` | Feature icons |
| **Level 4** | `0 6px 20px rgba(255, 215, 0, 0.4)` | CTA buttons hover |
| **Level 5** | `0 10px 30px rgba(0, 128, 128, 0.2)` | Feature cards |
| **Level 6** | `0 10px 30px rgba(0,0,0,0.2)` | Story cards |

### Special Shadows

**WhatsApp Button:**
```css
/* Default */
box-shadow: 0 5px 20px rgba(37, 211, 102, 0.5);

/* Hover */
box-shadow: 0 8px 30px rgba(37, 211, 102, 0.6);
```

**Teal-Colored Shadows:**
- Used on teal elements to reinforce brand color
- Creates color harmony in the design
- Shadow color matches element background

### Elevation Guidelines

1. **Higher = More Important**: Elevated elements draw more attention
2. **Hover Enhancement**: Increase shadow on hover for interactivity feedback
3. **Color-Matched Shadows**: Use tinted shadows for colored elements
4. **Soft Shadows**: Prefer larger, softer shadows over harsh ones

---

## ✨ Animations & Transitions

### Transition Timing

**Standard Duration:** `0.3s` (300ms)
- Used for most hover effects and state changes
- Provides smooth, responsive feel without sluggishness

**Longer Duration:** `3s` (3000ms)
- Used for ambient animations (pulse effect)
- Creates subtle, atmospheric movement

### Transition Easing

**Primary Easing:** `ease`
- Default for most transitions
- Natural acceleration and deceleration

**Alternative Easing:** `ease-in-out`
- Can be used for more pronounced effects

### Animation Examples

#### 1. Pulse Animation (Ambient Background)

```css
@keyframes pulse {
    0%, 100% { 
        transform: scale(1); 
        opacity: 0.5; 
    }
    50% { 
        transform: scale(1.1); 
        opacity: 0.3; 
    }
}

/* Applied to feature cards */
animation: pulse 3s infinite;
```

**Characteristics:**
- Infinite loop
- Subtle scale change (1.0 to 1.1)
- Opacity variation (0.3 to 0.5)
- Creates breathing effect

#### 2. Button Hover Animation

```css
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Hover state */
transform: translateY(-2px);
```

**Effect:** Button lifts up 2px when hovered

#### 3. Icon Hover Animation

```css
transition: all 0.3s ease;

/* Hover state */
transform: translateY(-3px);
```

**Effect:** Icon lifts up 3px with color change

#### 4. Scale Animation (WhatsApp Button)

```css
transition: all 0.3s ease;

/* Hover state */
transform: scale(1.1);
```

**Effect:** Button grows 10% on hover

### Transition Properties

**Common Transitions:**
```css
/* Transform and shadow */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* All properties */
transition: all 0.3s ease;

/* Multiple specific properties */
transition: background 0.3s ease, border-color 0.3s ease;
```

### Animation Guidelines

1. **Subtle is Better**: Keep animations understated
2. **Performance**: Use `transform` and `opacity` for better performance
3. **Consistency**: Use same duration (300ms) across similar elements
4. **Purpose**: Every animation should enhance UX, not just decoration
5. **Accessibility**: Consider `prefers-reduced-motion` for users with motion sensitivity

---

## 🔘 Border Radius

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `small` | `4px` | Active navigation dots |
| `medium` | `15px` | FAQ items |
| `large` | `20px` | Story cards |
| `xlarge` | `25px` | Feature cards, CTA buttons |
| `full` | `50%` | Circular elements (icons, WhatsApp button) |

### Usage Examples

```css
/* Pill-shaped buttons */
border-radius: 25px;

/* Rounded cards */
border-radius: 20px;
border-radius: 25px;

/* Circular icons */
border-radius: 50%;

/* Small rounded elements */
border-radius: 4px; /* active dots */
border-radius: 15px; /* FAQ items */
```

### Border Radius Guidelines

1. **Consistency**: Use values from the scale
2. **Size Relationship**: Larger elements = larger radius
3. **Circular Elements**: Always use 50% for perfect circles
4. **Pill Shapes**: Use large radius (25px+) for button-like elements
5. **Cards**: 20-25px creates modern, friendly appearance

---

## 👁️ Opacity & Transparency

### Opacity Scale

| Value | Percentage | Usage |
|-------|------------|-------|
| `0.2` | 20% | Social icon backgrounds, very subtle overlays |
| `0.3` | 30% | Pulse animation end state |
| `0.5` | 50% | Pulse animation start state |
| `0.9` | 90% | Text on dark backgrounds, taglines |
| `0.95` | 95% | Feature card text, footer info |
| `1.0` | 100% | Default state for most elements |

### Transparency Applications

#### Background Overlays

```css
/* Social icons - subtle glass effect */
background: rgba(255,255,255,0.2);

/* Card text overlay - readable text on images */
background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%);

/* Teal overlay */
background: linear-gradient(180deg, transparent 0%, rgba(0,128,128,0.9) 100%);
```

#### Text Opacity

```css
/* Tagline in hero */
opacity: 0.9;

/* Feature card descriptions */
opacity: 0.95;

/* Story card text */
opacity: 0.9;

/* Footer info */
opacity: 0.9;
```

#### Animated Elements

```css
/* Pulse effect background */
background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
```

### Opacity Guidelines

1. **Subtle Overlays**: Use 10-30% for background effects
2. **Text Legibility**: Keep text at 90-100% opacity
3. **Hover States**: Can increase opacity on hover for feedback
4. **Layering**: Lower opacity for background layers
5. **Accessibility**: Ensure sufficient contrast even with opacity

---

## 🎯 Tailwind CSS Alternative (If Using Tailwind)

While this project uses vanilla CSS, here's how to replicate the design system with **Tailwind CSS**:

### Color Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#008080',
        'primary-dark': '#006666',
        'primary-light': '#f0f9f9',
        'accent-gold': '#FFD700',
        'whatsapp': '#25D366',
      }
    }
  }
}
```

### Common Tailwind Classes Used (Conceptually)

| CSS Property | Tailwind Equivalent | Usage |
|--------------|---------------------|-------|
| `background: #008080` | `bg-primary` | Teal backgrounds |
| `color: #FFFFFF` | `text-white` | White text |
| `padding: 20px` | `p-5` | Standard padding |
| `padding: 40px 30px` | `py-10 px-8` | Vertical/horizontal padding |
| `margin-bottom: 20px` | `mb-5` | Bottom margin |
| `border-radius: 25px` | `rounded-[25px]` | Large rounded corners |
| `border-radius: 50%` | `rounded-full` | Circular elements |
| `font-size: 32px` | `text-[32px]` | Custom font size |
| `font-weight: 700` | `font-bold` | Bold text |
| `display: flex` | `flex` | Flexbox layout |
| `justify-content: center` | `justify-center` | Center justify |
| `align-items: center` | `items-center` | Center align |
| `text-align: center` | `text-center` | Center text |
| `box-shadow: ...` | `shadow-lg` | Large shadow |
| `transition: all 0.3s` | `transition-all duration-300` | Smooth transition |
| `transform: translateY(-2px)` | `hover:-translate-y-0.5` | Hover lift |

### Example Component in Tailwind

```html
<!-- CTA Button -->
<button class="
  bg-accent-gold 
  text-gray-800 
  font-bold 
  text-base 
  py-3 
  px-8 
  rounded-[25px] 
  shadow-lg 
  hover:shadow-xl 
  hover:-translate-y-0.5 
  transition-all 
  duration-300
">
  Gabung Ya!
</button>

<!-- Feature Card -->
<div class="
  bg-gradient-to-br 
  from-primary 
  to-primary-dark 
  rounded-[25px] 
  p-10 
  text-white 
  text-center 
  shadow-xl 
  mb-8
">
  <h2 class="text-2xl font-bold mb-4">Kenalin, Ngajilagi.</h2>
  <p class="text-base opacity-95">Teman belajar ngaji terbaikmu.</p>
</div>
```

---

## 📦 Design Tokens

Design tokens are the single source of truth for design decisions. They can be implemented in CSS variables, SCSS, or JavaScript.

### CSS Custom Properties (Variables)

```css
:root {
  /* Colors */
  --color-primary: #008080;
  --color-primary-dark: #006666;
  --color-primary-light: #f0f9f9;
  --color-accent: #FFD700;
  --color-whatsapp: #25D366;
  --color-white: #FFFFFF;
  --color-off-white: #f8f8f8;
  --color-text-dark: #333333;
  --color-gray-light: #cccccc;
  
  /* Typography */
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 24px;
  --font-size-2xl: 26px;
  --font-size-3xl: 28px;
  --font-size-4xl: 32px;
  
  --font-weight-regular: 400;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.2;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.8;
  
  /* Spacing */
  --spacing-xs: 10px;
  --spacing-sm: 15px;
  --spacing-md: 20px;
  --spacing-lg: 30px;
  --spacing-xl: 40px;
  --spacing-2xl: 50px;
  --spacing-3xl: 60px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 15px;
  --radius-lg: 20px;
  --radius-xl: 25px;
  --radius-full: 50%;
  
  /* Shadows */
  --shadow-sm: 0 2px 5px rgba(0,0,0,0.05);
  --shadow-md: 0 5px 15px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 30px rgba(0,0,0,0.2);
  --shadow-gold: 0 4px 15px rgba(255, 215, 0, 0.3);
  --shadow-teal: 0 10px 30px rgba(0, 128, 128, 0.2);
  --shadow-whatsapp: 0 5px 20px rgba(37, 211, 102, 0.5);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Z-index */
  --z-base: 1;
  --z-elevated: 10;
  --z-floating: 100;
  --z-modal: 1000;
}
```

### Using Design Tokens

```css
/* Example usage */
.feature-card {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl) var(--spacing-lg);
  box-shadow: var(--shadow-teal);
  transition: all var(--transition-base);
}

.cta-button {
  background: var(--color-accent);
  color: var(--color-text-dark);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  padding: 12px var(--spacing-lg);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-gold);
}
```

### JSON Design Tokens (for Design Tools)

```json
{
  "color": {
    "primary": {
      "value": "#008080",
      "type": "color"
    },
    "primaryDark": {
      "value": "#006666",
      "type": "color"
    },
    "accent": {
      "value": "#FFD700",
      "type": "color"
    }
  },
  "spacing": {
    "xs": {
      "value": "10px",
      "type": "spacing"
    },
    "md": {
      "value": "20px",
      "type": "spacing"
    },
    "xl": {
      "value": "40px",
      "type": "spacing"
    }
  },
  "typography": {
    "fontFamily": {
      "value": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      "type": "fontFamily"
    },
    "fontSize": {
      "base": {
        "value": "16px",
        "type": "fontSize"
      },
      "heading": {
        "value": "32px",
        "type": "fontSize"
      }
    },
    "fontWeight": {
      "regular": {
        "value": "400",
        "type": "fontWeight"
      },
      "bold": {
        "value": "700",
        "type": "fontWeight"
      }
    }
  }
}
```

---

## 🔨 Example Component Reference

### Complete Hero Section Component

```html
<section class