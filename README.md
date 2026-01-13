# Calon Hafiz Indonesia - Website Tahfizh Online

Website resmi untuk Yayasan Calon Hafiz Indonesia, platform tahfizh online terpercaya dengan program intensif dan mentor berpengalaman.

## 🚀 Tech Stack

- **Vue 3** - Progressive JavaScript Framework
- **Tailwind CSS V4** - Utility-first CSS framework with CSS-first configuration
- **Vite** - Next generation frontend tooling
- **Vue Router** - Official router for Vue.js
- **AOS (Animate On Scroll)** - Scroll animation library
- **Flowbite** - Tailwind CSS component library and icons

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Design System

This project uses a comprehensive design system based on:

- `design_token.md` - Design tokens (colors, typography, spacing, etc.)
- `style_guide.md` - Complete style guide and component specifications

### Tailwind V4 Theme Configuration

Unlike Tailwind V3, this project uses Tailwind V4's CSS-first configuration with the `@theme` directive in `src/assets/styles/main.css`.

**Key Design Tokens:**

- **Primary Color**: Teal (#008080)
- **Accent Color**: Gold (#FFD700)
- **Font**: Segoe UI, Tahoma, Geneva, Verdana
- **Spacing Base**: 10px scale

## 📁 Project Structure

```
calontahfidz/
├── public/               # Static assets
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.css # Tailwind V4 theme config
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, WhatsAppFloat
│   │   └── common/      # Reusable components
│   ├── data/            # Mock data & constants
│   │   ├── images.js    # Placeholder image URLs
│   │   ├── faq.js       #FAQ data
│   │   ├── testimonials.js
│   │   ├── classes.js
│   │   └── team.js
│   ├── utils/
│   │   └── whatsapp.js  # WhatsApp integration
│   ├── views/           # Page components
│   │   ├── HomePage.vue
│   │   ├── KelasPage.vue
│   │   └── TentangKamiPage.vue
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
├── design_token.md
└── style_guide.md
```

## 🖼️ Replacing Placeholder Images

All images are currently placeholders from Unsplash and Pexels. To replace with actual images:

1. Save your images to `/public/images/`
2. Update the URLs in `src/data/images.js`
3. Example: Change `heroBg: 'https://...'` to `heroBg: '/images/hero.jpg'`

### Images Needed:

- Logo (200x60px recommended)
- Hero background (1920px wide recommended)
- Team member photos (400x400px recommended)
- Testimonial photos (150x150px recommended)

## 📱 WhatsApp Integration

WhatsApp contact: **+62 813-7391-4610**

The website includes WhatsApp integration for:

- Class registration (each package has unique pre-filled message)
- Floating WhatsApp button
- Footer contact

Configuration in `src/utils/whatsapp.js`

## 🎯 Pages

1. **Beranda (/)** - Homepage with hero, features, class preview, testimonials, and FAQ
2. **Kelas (/kelas)** - Detailed class packages comparison
3. **Tentang Kami (/tentang-kami)** - About us with team, vision/mission, values

## 🎭 Animations

AOS (Animate On Scroll) is configured with:

- Duration: 800ms
- Easing: ease-in-out
- Once: true (animations happen only once)
- Offset: 100px

Add animations to elements:

```html
<div data-aos="fade-up">...</div>
<div data-aos="zoom-in" data-aos-delay="200">...</div>
```

## 🎨 Tailwind V4 Custom Theme

Custom theme variables can be modified in `src/assets/styles/main.css`:

```css
@theme {
  --color-primary: #008080;
  --color-accent-gold: #ffd700;
  --spacing-lg: 30px;
  /* ... more variables */
}
```

These automatically generate utility classes like:

- `bg-primary`
- `text-accent-gold`
- `p-lg`

## 🔧 Development Notes

### Tailwind V4 Changes

- Configuration is now in CSS using `@theme` directive
- CSS variables are automatically generated
- No more `tailwind.config.js` needed for theme
- Use `@layer` for custom utilities

### Vue Router

- Hash mode disabled (uses HTML5 history mode)
- Smooth scroll behavior enabled
- Meta titles configured for each route
- AOS refreshes on route change

## 📝 TODO

- [ ] Replace placeholder images with actual photos
- [ ] Update team member information
- [ ] Add actual testimonials
- [ ] Configure SEO meta tags
- [ ] Add Google Analytics (optional)
- [ ] Setup deployment (Vercel/Netlify recommended)

## 📞 Contact

**Calon Hafiz Indonesia**

- WhatsApp: +62 813-7391-4610
- Website: [To be deployed]

---

Built with ❤️ using Vue 3 + Tailwind CSS V4
