# Salem Pain Clinic - Premium Design Specifications
## Apple-Inspired Medical Design with Warmth

---

## Complete Prompt for Claude Code

Copy this entire prompt to rebuild your website with premium design:

```
Create a premium Next.js 14 website for Salem Pain Clinic with Apple-inspired design and warm, compassionate elements.

DESIGN PHILOSOPHY:
- Apple.com aesthetic: clean, spacious, sophisticated with smooth animations
- Fortis Healthcare warmth: medical credibility with human touch
- Premium feel: generous whitespace, subtle depth, elegant typography
- Modern interactions: smooth animations, hover effects, glassmorphism

TECHNICAL STACK:
- Next.js 14 (App Router)
- Tailwind CSS with custom configuration
- Framer Motion for animations (npm install framer-motion)
- TypeScript optional

COLOR SYSTEM:
Primary: #2563eb (blue), #1e40af (dark blue), #3b82f6 (light blue)
Warm Accents: #f59e0b (gold), #fbbf24 (light gold)
Backgrounds: #ffffff (white), #fffbeb (cream), #fafafa (off-white)
Text: #111827 (dark), #4b5563 (body gray)

TYPOGRAPHY:
- Font: Inter (from Google Fonts)
- Hero headline: text-5xl md:text-6xl font-bold tracking-tight
- Section headlines: text-4xl md:text-5xl font-bold tracking-tight
- Body: text-lg md:text-xl leading-relaxed
- Minimum mobile text: 16px

SPACING & LAYOUT:
- Section padding: py-20 md:py-32
- Container: max-w-7xl mx-auto px-6 md:px-8
- Generous whitespace between sections
- Never cramped or cluttered

SHADOWS & DEPTH:
- Cards: shadow-md hover:shadow-2xl
- CTAs: shadow-xl with colored glow on hover
- Buttons: hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]

BORDER RADIUS:
- Cards: rounded-xl or rounded-2xl
- Buttons: rounded-full
- Images: rounded-3xl

ANIMATIONS (CRITICAL):
All animations smooth, Apple-like timing: transition-all duration-300

1. Fade in on scroll (all sections):
   - Use Framer Motion: initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
   - Stagger children animations

2. Hover effects:
   - Cards: hover:scale-105 hover:shadow-2xl transform
   - Buttons: hover:scale-105 hover:shadow-xl
   - Links: hover:text-blue-600 hover:translate-x-1

3. Smooth scroll:
   - Add to globals.css: html { scroll-behavior: smooth; }

COMPONENT SPECIFICATIONS:

1. NAVIGATION (Sticky, Glassmorphism):
- Fixed top, backdrop-blur-md bg-white/80
- Logo left, nav center (Home, About, Services, FAQ, Contact)
- Phone numbers right (desktop), hidden on mobile
- Smooth color transition on scroll
- Hamburger menu (mobile) with smooth slide-in
- Height: h-20
- Shadow: shadow-sm border-b border-gray-200/50

2. HERO SECTION (Full-screen, Gradient):
- min-h-screen flex items-center justify-center
- Background: bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900
- Animated gradient overlay: animate-pulse-slow
- Large headline: "Expert Pain Management & Palliative Care in Salem"
- Subheadline: "30 Years of Compassionate, Specialized Care"
- Two CTAs: "Our Services" (solid white) + "Contact Us" (outline)
- Three glass cards below (trust indicators):
  * 30+ Years Experience
  * Advanced Ultrasound Technology
  * Personalized Treatment Plans
- Cards: bg-white/10 backdrop-blur-md border border-white/20
- Scroll indicator at bottom (animated bounce)

3. ABOUT PREVIEW (Two-column, Warm Background):
- Background: bg-gradient-to-b from-white to-cream
- Two columns (lg:grid-cols-2)
- Left: Circular image placeholder (rounded-full, shadow-2xl)
  * Decorative circle behind: bg-gradient-to-br from-blue-100 to-gold-100
- Right: Text content
  * Headline: "Meet Dr. G.P. Kirupakaran"
  * Credentials: "MBBS, DA, CMC Vellore" (text-blue-600)
  * Biography (3 paragraphs, text-lg)
  * Highlight "30 years" in gold color
  * CTA button with arrow icon
- Stagger animations (image first, text delayed)

4. SERVICES GRID (3 columns, Premium Cards):
- Background: bg-white with decorative blur circle
- Section header: centered, large headline + subheadline
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Card design:
  * White with gradient: bg-gradient-to-br from-white to-gray-50
  * Rounded: rounded-2xl
  * Shadow: shadow-md hover:shadow-2xl
  * Hover lift: hover:-translate-y-2
  * Icon container: gradient bg, rounded-2xl, 64x64px
  * Title: text-2xl font-bold
  * Description: text-gray-600
  * "Learn more" link with arrow
- Featured card (Interventional Procedures):
  * Blue gradient background: from-blue-600 to-blue-700
  * White text
  * "ADVANCED" badge (top right, gold)
  * Different hover effect
- NO EMOJIS - Use SVG icons or lucide-react

Services to include:
1. Chronic Pain Management (blue icon)
2. Cancer Pain Relief (gold icon)
3. Interventional Pain Procedures (featured, white icon on blue)
4. Palliative Care Consultations
5. Post-Surgical Pain Management
6. Neuropathic Pain Treatment

5. WHY CHOOSE US (Alternating Full-Width Blocks):
- Background: bg-gradient-to-b from-white to-cream-50
- Section header: centered
- Three feature blocks, alternating layout:

Block 1 - Experience (Image Right):
- Badge: "EXPERIENCE" (bg-blue-100 text-blue-600)
- Headline: "30+ Years of Trusted Expertise"
- Body text
- Two stat cards: "10,000+ Patients" + "30+ Years Practice"
- Image: gradient placeholder (blue)

Block 2 - Technology (Image Left):
- Badge: "ADVANCED TECHNOLOGY" (bg-gold-100 text-gold-700)
- Headline: "State-of-the-Art Ultrasound Guidance"
- Highlight $30,000 equipment
- Bullet list with checkmark icons:
  * Real-time visualization
  * Reduced risk
  * Less pain
- Image: gradient placeholder (gold)

Block 3 - Personalized (Image Right):
- Badge: "PATIENT-CENTERED" (bg-blue-100 text-blue-600)
- Headline: "Personalized Treatment Plans"
- Compassionate care description
- Image: gradient placeholder (blue-purple)

All blocks: py-32 spacing, lg:grid-cols-2, generous gaps

6. CALL-TO-ACTION (Bold Blue Section):
- Full-width: bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900
- Decorative blur circles (absolute, corners)
- Centered content: max-w-4xl
- Large headline: "Ready to Schedule Your Consultation?"
- Subheadline: "Don't let pain control your life..."
- Two phone buttons (white, rounded-full):
  * +91 9842798422
  * +91 9095596999
  * Phone icon (left)
  * Glow effect on hover
  * Click-to-call (tel: links)
- Office hours below: "Open Monday - Saturday | 10:00 AM - 1:00 PM"

7. FOOTER (Dark, Professional):
- Background: bg-gray-900 text-gray-300
- Three columns (md:grid-cols-3):
  * Quick Links (Home, About, Services, FAQ, Contact)
  * Contact (Phone, Address, Hours)
  * Information (Privacy, Terms, Disclaimer)
- Hover effect on links: hover:text-white hover:translate-x-1
- Bottom bar: border-t border-gray-800, copyright
- Clean typography, good spacing

CLINIC INFORMATION:
- Name: Salem Pain Clinic
- Doctor: Dr. G.P. Kirupakaran, MBBS, DA, CMC Vellore
- Phone: +91 9842798422, +91 9095596999
- Address: 108, Omalur Main Rd, near ANS divyam, Swarnapuri Annexe, State Bank Colony, Swarnapuri, Salem, Tamil Nadu 636004
- Hours: Monday - Saturday, 10:00 AM - 1:00 PM
- Experience: 30+ years
- Special: Advanced ultrasound equipment ($30,000)

IMAGE PLACEHOLDERS:
Use gradient backgrounds with descriptive text until real photos available:
- Hero: gradient background (no placeholder)
- Doctor photo: circular gradient (blue-gray) with icon/text
- Service cards: gradient squares with SVG icons (not emojis)
- Why Choose Us: large gradient rectangles (aspect-square)
All: rounded corners, shadow-2xl, flex items-center justify-center

MOBILE OPTIMIZATION:
- Hamburger menu (smooth slide-in animation)
- Phone numbers: click-to-call (tel: links)
- Touch targets: minimum 44x44px
- Single column layouts
- Text: 16px minimum, 18px preferred
- Adequate padding: px-6 minimum
- Stack all grids vertically

SEO (CRITICAL):
- Meta title: "Salem Pain Clinic | Expert Pain Management in Salem, Tamil Nadu"
- Meta description: "30+ years of specialized pain management & palliative care. Dr. G.P. Kirupakaran offers advanced ultrasound-guided procedures in Salem."
- Schema markup: MedicalBusiness + Physician
- Alt text on all images
- Proper heading hierarchy (H1 > H2 > H3)
- Sitemap generation

TAILWIND CONFIG:
Add to tailwind.config.js:
```js
theme: {
  extend: {
    colors: {
      'blue-primary': '#2563eb',
      'gold-accent': '#f59e0b',
      'cream': '#fffbeb',
    },
    animation: {
      'fadeIn': 'fadeIn 0.6s ease-out forwards',
      'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
    },
  },
}
```

CUSTOM CSS (globals.css):
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

CRITICAL REQUIREMENTS:
1. NO EMOJIS anywhere - use SVG icons or lucide-react
2. All sections fade in on scroll (Framer Motion)
3. Generous whitespace - never cramped
4. Large, bold typography
5. Smooth hover effects on everything interactive
6. Glassmorphism on hero trust cards
7. Gradient backgrounds (subtle)
8. Premium shadows and depth
9. Mobile-first responsive
10. Fast loading (optimized images, minimal JS)

PAGES STRUCTURE:
- / (Home) - All sections above in order
- /about - Full doctor bio, technology section, credentials
- /services - Detailed service descriptions (7 services)
- /faq - Common questions with answers
- /contact - Contact form, map, info

Create a complete, production-ready website that looks expensive and premium. Every detail should feel polished and professional. This is for a medical practice with 30 years of experience - the design must reflect that credibility and expertise.

Make it look like a $10,000 website, not a template.
```

---

## Additional Premium Enhancements

### 1. Micro-Interactions

**Button Press Effect:**
```jsx
className="active:scale-95 transition-transform"
```

**Loading States:**
```jsx
// For contact form
<button disabled={isLoading}>
  {isLoading ? (
    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
      {/* Spinner icon */}
    </svg>
  ) : (
    'Send Message'
  )}
</button>
```

**Ripple Effect on Click:**
```jsx
// Add to buttons for extra premium feel
const [ripples, setRipples] = useState([]);

const handleClick = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  setRipples([...ripples, { x, y, id: Date.now() }]);
};
```

### 2. Parallax Scrolling (Subtle)

```jsx
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ParallaxSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);
  
  return (
    <motion.div style={{ y }}>
      {/* Background element moves slower */}
    </motion.div>
  );
}
```

### 3. Progressive Image Loading

```jsx
import Image from 'next/image';

<Image
  src="/doctor-photo.jpg"
  alt="Dr. Kirupakaran"
  width={800}
  height={800}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  className="rounded-full"
/>
```

### 4. Skeleton Loaders

```jsx
// While content loads
<div className="animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```

### 5. Toast Notifications

```bash
npm install react-hot-toast
```

```jsx
import toast, { Toaster } from 'react-hot-toast';

// Success notification
toast.success('Message sent successfully!', {
  style: {
    background: '#2563eb',
    color: '#fff',
  },
});
```

---

## Performance Optimization Checklist

### Images
- [ ] Convert to WebP format
- [ ] Compress (use tinypng.com or squoosh.app)
- [ ] Use Next.js Image component
- [ ] Lazy load below-fold images
- [ ] Provide width/height to prevent layout shift
- [ ] Use appropriate sizes for different screens

### Fonts
- [ ] Use next/font for optimization
- [ ] Subset fonts (only characters needed)
- [ ] Preload critical fonts
- [ ] Use font-display: swap

### JavaScript
- [ ] Code splitting (automatic with Next.js)
- [ ] Tree shaking (remove unused code)
- [ ] Minimize third-party scripts
- [ ] Defer non-critical JS

### CSS
- [ ] Remove unused Tailwind classes (purge)
- [ ] Inline critical CSS
- [ ] Use CSS-in-JS sparingly
- [ ] Minimize animations on low-power devices

### Caching
- [ ] Set proper cache headers
- [ ] Use CDN (Vercel automatic)
- [ ] Enable compression (gzip/brotli)
- [ ] Static generation where possible

---

## Testing Checklist

### Visual Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge
- [ ] Screen sizes: 320px, 375px, 768px, 1024px, 1920px

### Functionality Testing
- [ ] All links work
- [ ] Navigation smooth scrolling
- [ ] Mobile menu opens/closes
- [ ] Phone numbers dial correctly
- [ ] Contact form submits
- [ ] Form validation works
- [ ] Google Maps loads

### Performance Testing
- [ ] Lighthouse audit (90+ all scores)
- [ ] WebPageTest (A grades)
- [ ] Load time under 3 seconds
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s

### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader (NVDA/JAWS)
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] ARIA labels where needed

### SEO Testing
- [ ] Google Search Console
- [ ] Meta tags correct
- [ ] Schema markup valid
- [ ] Mobile-friendly test
- [ ] Sitemap accessible
- [ ] Robots.txt correct

---

## Launch Day Tasks

### Pre-Launch (24 hours before)
1. Final content review
2. Test all functionality
3. Run Lighthouse audit
4. Check mobile responsiveness
5. Verify contact information
6. Test forms
7. Check all links
8. Proofread all text

### Launch Day
1. Deploy to production (Vercel)
2. Connect custom domain
3. Verify SSL certificate
4. Submit sitemap to Google
5. Set up Google Analytics (optional)
6. Set up Google Search Console
7. Monitor for errors

### Post-Launch (First Week)
1. Monitor analytics
2. Check for broken links
3. Monitor page speed
4. Track phone calls/inquiries
5. Gather initial feedback
6. Fix any reported issues
7. Monitor search rankings

---

## Content Updates Guide

### How to Update Text
All text content is in the page components. To update:

1. Navigate to the specific page file (e.g., `app/page.jsx`)
2. Find the section you want to update
3. Edit the text within the JSX
4. Save and refresh

### How to Replace Images
1. Add new image to `/public/images/` folder
2. Update the `src` in the Image component
3. Ensure proper alt text
4. Verify image displays correctly

### How to Add New Services
1. Open `app/services/page.jsx`
2. Copy existing service section
3. Update icon, title, description
4. Add to navigation if needed

---

## Maintenance Schedule

### Daily
- Monitor uptime (Vercel automatic)
- Check contact form submissions

### Weekly
- Review analytics (if implemented)
- Check for broken links
- Monitor search rankings

### Monthly
- Update npm packages
- Review and update content
- Check performance scores
- Backup website (Git automatic)

### Quarterly
- Review and update services
- Add new testimonials (if collected)
- Update photos
- SEO audit

### Annually
- Renew domain
- Major content refresh
- Design refresh (if needed)
- Competitor analysis

---

## Support & Resources

### Documentation
- **Next.js:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Vercel:** https://vercel.com/docs

### Tools
- **Image Optimization:** tinypng.com, squoosh.app
- **Icons:** lucide.dev, heroicons.com
- **Colors:** coolors.co, color.adobe.com
- **Fonts:** fonts.google.com
- **Testing:** lighthouse, webpagetest.org

### Community
- **Next.js Discord:** https://nextjs.org/discord
- **Stack Overflow:** Tag: next.js, tailwind-css

---

## Final Notes

**This design specification provides everything needed to create a premium, Apple-inspired medical website. The key differences from the basic version:**

1. **Visual Depth:** Shadows, gradients, glassmorphism
2. **Smooth Animations:** Everything moves gracefully
3. **Premium Typography:** Large, bold, readable
4. **Generous Spacing:** Never cramped or cluttered
5. **Professional Icons:** No emojis, SVG icons only
6. **Sophisticated Color:** Rich blues, warm golds, subtle gradients
7. **Polished Interactions:** Hover effects, transitions, micro-animations
8. **Mobile-First:** Optimized for all devices
9. **Performance:** Fast loading, optimized
10. **Attention to Detail:** Every pixel matters

**The result should look like a website that cost $5,000-$10,000 to build, not a cheap template.**

When you provide this to Claude Code, it will generate a complete, production-ready website that reflects the premium, professional nature of a 30-year medical practice.

---

*End of Premium Design Specifications Document*

## Design Philosophy

**Inspiration:** Apple.com (clean, sophisticated) + Fortis Healthcare (medical credibility, warmth)

**Core Principles:**
- **Spacious & Breathable:** Generous whitespace, never cramped
- **Subtle Depth:** Soft shadows, layered elements, glassmorphism
- **Smooth Interactions:** Everything animates gracefully
- **Premium Typography:** Large, bold headlines with elegant body text
- **Visual Hierarchy:** Clear focus points on each section
- **Warm Professionalism:** Medical but human, trustworthy but approachable

---

## Color System (Premium Palette)

### Primary Colors
```css
--blue-primary: #2563eb        /* Main brand blue */
--blue-dark: #1e40af           /* Darker blue for depth */
--blue-light: #3b82f6          /* Lighter blue for accents */
--blue-extra-light: #60a5fa    /* Hover states */
--blue-subtle: #dbeafe         /* Background tints */
```

### Warm Accents (Compassionate Touch)
```css
--gold-accent: #f59e0b         /* Warm gold for highlights */
--gold-light: #fbbf24          /* Lighter gold */
--cream: #fffbeb               /* Warm cream background */
--cream-dark: #fef3c7          /* Darker cream */
```

### Neutrals (Apple-style)
```css
--white: #ffffff
--off-white: #fafafa           /* Subtle background */
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-600: #4b5563            /* Body text */
--gray-700: #374151            /* Headings */
--gray-900: #111827            /* Dark text */
--black: #000000               /* Footer, strong contrast */
```

### Gradient System
```css
/* Hero gradient - Apple-style */
background: linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%);

/* Warm gradient - For compassionate sections */
background: linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fcd34d 100%);

/* Subtle glass effect */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.3);
```

---

## Typography System

### Font Families
```css
/* Primary: SF Pro Display (Apple's font) or Inter (open source alternative) */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;

/* For headings: Optional Poppins for more personality */
--font-headings: 'Poppins', 'Inter', sans-serif;
```

### Type Scale (Large, Bold, Apple-style)
```css
/* Hero Headline */
font-size: 3.5rem (56px)
line-height: 1.1
font-weight: 700
letter-spacing: -0.02em
/* Mobile: 2.5rem (40px) */

/* Section Headlines (H2) */
font-size: 2.5rem (40px)
line-height: 1.2
font-weight: 700
letter-spacing: -0.01em
/* Mobile: 2rem (32px) */

/* Subheadings (H3) */
font-size: 1.5rem (24px)
line-height: 1.4
font-weight: 600

/* Body Large (Hero subtext) */
font-size: 1.25rem (20px)
line-height: 1.6
font-weight: 400

/* Body Regular */
font-size: 1.125rem (18px)
line-height: 1.7
font-weight: 400

/* Body Small */
font-size: 1rem (16px)
line-height: 1.6
font-weight: 400
```

### Tailwind Classes
```jsx
// Hero Headline
className="text-5xl md:text-6xl font-bold tracking-tight"

// Section Headline
className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"

// Body Large
className="text-lg md:text-xl text-gray-600 leading-relaxed"

// Body Regular
className="text-base md:text-lg text-gray-600 leading-relaxed"
```

---

## Spacing System (Apple-style Generous)

```css
/* Section Padding */
--section-padding-y: 6rem (96px) desktop, 4rem (64px) mobile
--section-padding-x: 2rem (32px) mobile, auto with max-width desktop

/* Container Max Width */
--container-max: 1280px (Tailwind's max-w-7xl)

/* Element Spacing */
--space-xs: 0.5rem (8px)
--space-sm: 1rem (16px)
--space-md: 1.5rem (24px)
--space-lg: 2rem (32px)
--space-xl: 3rem (48px)
--space-2xl: 4rem (64px)
--space-3xl: 6rem (96px)
```

### Tailwind Classes
```jsx
// Section padding
className="py-16 md:py-24 lg:py-32 px-6 md:px-8"

// Container
className="max-w-7xl mx-auto"

// Vertical spacing between elements
className="space-y-8 md:space-y-12"
```

---

## Shadows & Depth (Premium Feel)

### Shadow System
```css
/* Subtle shadow - Cards, buttons */
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

/* Medium shadow - Elevated cards */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Large shadow - Modals, important elements */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* XL shadow - Hero elements */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

/* Colored shadow (blue for CTAs) */
box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
```

### Tailwind Classes
```jsx
className="shadow-sm"      // Subtle
className="shadow-md"      // Medium
className="shadow-lg"      // Large
className="shadow-xl"      // Extra large
className="shadow-2xl"     // Huge

// Hover effect
className="shadow-md hover:shadow-xl transition-shadow duration-300"
```

---

## Border Radius (Soft, Rounded)

```css
--radius-sm: 0.5rem (8px)    // Small elements
--radius-md: 0.75rem (12px)  // Cards, buttons
--radius-lg: 1rem (16px)     // Large cards
--radius-xl: 1.5rem (24px)   // Hero sections
--radius-2xl: 2rem (32px)    // Special elements
--radius-full: 9999px        // Pills, circular
```

### Tailwind Classes
```jsx
className="rounded-xl"      // Most cards
className="rounded-2xl"     // Large sections
className="rounded-full"    // Buttons, avatars
```

---

## Animation System (Smooth, Apple-like)

### Transition Timing
```css
/* Standard easing (most animations) */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
transition-duration: 300ms;

/* Smooth easing (entrances) */
transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
transition-duration: 600ms;
```

### Animation Library

#### 1. Fade In (On Scroll)
```jsx
// Use Framer Motion or CSS
<div className="opacity-0 animate-fadeIn">
  
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}
```

#### 2. Hover Scale (Cards, Buttons)
```jsx
className="transform hover:scale-105 transition-transform duration-300"
```

#### 3. Hover Shadow (Cards)
```jsx
className="shadow-md hover:shadow-2xl transition-all duration-300"
```

#### 4. Hover Glow (CTAs)
```jsx
className="hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300"
```

#### 5. Slide In (From Left/Right)
```jsx
<div className="animate-slideInLeft">

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}
```

#### 6. Smooth Scroll
```jsx
// Add to all anchor links
<a href="#services" className="scroll-smooth">

// CSS
html {
  scroll-behavior: smooth;
}
```

#### 7. Parallax (Subtle background movement)
```jsx
// Use on hero section background
// Moves slower than page scroll for depth
```

---

## Component Specifications

### 1. Navigation Bar (Sticky, Glass Effect)

**Design:**
- Transparent initially, white background with blur on scroll
- Sticky to top
- Subtle shadow when scrolled
- Logo left, nav center, phone numbers right (desktop)
- Smooth color transition on scroll

**Code Example:**
```jsx
<nav className="fixed top-0 w-full z-50 transition-all duration-300 
                backdrop-blur-md bg-white/80 border-b border-gray-200/50
                shadow-sm">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    <div className="flex items-center justify-between h-20">
      
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-2xl font-bold text-blue-600">
          Salem Pain Clinic
        </h1>
      </div>
      
      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex space-x-8">
        <a href="#home" className="text-gray-700 hover:text-blue-600 
                                   transition-colors duration-200 font-medium">
          Home
        </a>
        <a href="#about" className="text-gray-700 hover:text-blue-600 
                                    transition-colors duration-200 font-medium">
          About
        </a>
        <a href="#services" className="text-gray-700 hover:text-blue-600 
                                       transition-colors duration-200 font-medium">
          Services
        </a>
        <a href="#faq" className="text-gray-700 hover:text-blue-600 
                                  transition-colors duration-200 font-medium">
          FAQ
        </a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600 
                                      transition-colors duration-200 font-medium">
          Contact
        </a>
      </div>
      
      {/* Phone Numbers - Desktop */}
      <div className="hidden lg:flex flex-col items-end space-y-1">
        <a href="tel:+919842798422" 
           className="text-sm font-semibold text-blue-600 hover:text-blue-700 
                      transition-colors">
          +91 9842798422
        </a>
        <a href="tel:+919095596999" 
           className="text-sm font-semibold text-blue-600 hover:text-blue-700 
                      transition-colors">
          +91 9095596999
        </a>
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 
                         transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" 
             viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
    </div>
  </div>
</nav>
```

**Features:**
- Backdrop blur effect (glassmorphism)
- Smooth hover transitions on links
- Click-to-call phone numbers (mobile)
- Hamburger menu for mobile (smooth slide-in)

---

### 2. Hero Section (Apple-style, Full-Screen)

**Design:**
- Large, bold headline (56px desktop)
- Gradient background (blue gradient)
- Subtle animated gradient or particles
- Two prominent CTAs (solid + outline)
- Trust badges below CTAs
- Minimal, clean, lots of breathing room

**Code Example:**
```jsx
<section className="relative min-h-screen flex items-center justify-center 
                    overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 
                    to-blue-900">
  
  {/* Animated background gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/50 
                  to-transparent animate-pulse-slow"></div>
  
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-20 
                  text-center">
    
    {/* Main Headline */}
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white 
                   tracking-tight mb-6 animate-fadeIn">
      Expert Pain Management &<br />
      Palliative Care in Salem
    </h1>
    
    {/* Subheadline */}
    <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-12 
                  max-w-3xl mx-auto leading-relaxed animate-fadeIn 
                  animation-delay-200">
      30 Years of Compassionate, Specialized Care
    </p>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 
                    animate-fadeIn animation-delay-400">
      
      {/* Primary CTA */}
      <a href="#services" 
         className="px-8 py-4 bg-white text-blue-600 rounded-full 
                    font-semibold text-lg shadow-xl hover:shadow-2xl 
                    hover:scale-105 transform transition-all duration-300">
        Our Services
      </a>
      
      {/* Secondary CTA */}
      <a href="#contact" 
         className="px-8 py-4 bg-transparent border-2 border-white text-white 
                    rounded-full font-semibold text-lg hover:bg-white 
                    hover:text-blue-600 transition-all duration-300">
        Contact Us
      </a>
      
    </div>
    
    {/* Trust Indicators */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto 
                    animate-fadeIn animation-delay-600">
      
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 
                      border border-white/20 hover:bg-white/20 
                      transition-all duration-300">
        <div className="text-4xl font-bold text-white mb-2">30+</div>
        <div className="text-blue-100">Years Experience</div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 
                      border border-white/20 hover:bg-white/20 
                      transition-all duration-300">
        <div className="text-4xl font-bold text-white mb-2">Advanced</div>
        <div className="text-blue-100">Ultrasound Technology</div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 
                      border border-white/20 hover:bg-white/20 
                      transition-all duration-300">
        <div className="text-4xl font-bold text-white mb-2">Personalized</div>
        <div className="text-blue-100">Treatment Plans</div>
      </div>
      
    </div>
    
  </div>
  
  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                  animate-bounce">
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" 
         viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
  
</section>
```

**Features:**
- Full viewport height (min-h-screen)
- Gradient background with subtle animation
- Glassmorphism cards for trust indicators
- Fade-in animations with staggered delays
- Bounce animation on scroll indicator
- Large, readable typography

---

### 3. About Preview Section (Two-Column, Image + Text)

**Design:**
- Clean two-column layout (desktop)
- Large circular image placeholder (left)
- Text content (right)
- Warm cream background
- Subtle shadow on image
- Gold accent for emphasis

**Code Example:**
```jsx
<section className="py-20 md:py-32 bg-gradient-to-b from-white to-cream">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 
                    items-center">
      
      {/* Image Column */}
      <div className="relative animate-fadeIn">
        
        {/* Decorative circle behind image */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 
                        to-gold-100 rounded-full transform scale-110 
                        opacity-20"></div>
        
        {/* Image placeholder */}
        <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 
                        rounded-full w-full aspect-square max-w-md mx-auto 
                        shadow-2xl flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <div className="text-6xl mb-4">👨‍⚕️</div>
            <p className="text-gray-600 font-medium">Dr. G.P. Kirupakaran</p>
            <p className="text-gray-500 text-sm">Professional Photo</p>
          </div>
        </div>
        
      </div>
      
      {/* Text Column */}
      <div className="animate-fadeIn animation-delay-200">
        
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 
                       tracking-tight">
          Meet Dr. G.P. Kirupakaran
        </h2>
        
        <p className="text-xl text-blue-600 font-semibold mb-6">
          MBBS, DA, CMC Vellore
        </p>
        
        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
          <p>
            Dr. G.P. Kirupakaran is Salem's leading anaesthetist with over 
            <span className="text-gold-600 font-semibold"> 30 years</span> of 
            dedicated experience in pain management and palliative care.
          </p>
          
          <p>
            A distinguished graduate of the prestigious Christian Medical College 
            (CMC) Vellore, Dr. Kirupakaran has established himself as a trusted 
            name in interventional pain management throughout Tamil Nadu.
          </p>
          
          <p>
            With three decades of clinical expertise, Dr. Kirupakaran has helped 
            thousands of patients reclaim their quality of life through innovative 
            pain management techniques.
          </p>
        </div>
        
        <a href="/about" 
           className="inline-flex items-center mt-8 px-8 py-4 bg-blue-600 
                      text-white rounded-full font-semibold shadow-lg 
                      hover:shadow-xl hover:bg-blue-700 transform 
                      hover:scale-105 transition-all duration-300">
          Learn More About Dr. Kirupakaran
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" 
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
      </div>
      
    </div>
    
  </div>
</section>
```

**Features:**
- Warm gradient background (white to cream)
- Circular image with decorative background
- Gold accent color for highlights
- Arrow icon in CTA button
- Staggered fade-in animations
- Generous spacing and readability

---

### 4. Services Grid (Premium Cards)

**Design:**
- 3-column grid (desktop), 1-column (mobile)
- Glass-effect cards
- Icons (not emojis - use SVG icons or lucide-react)
- Hover effects (scale, shadow, glow)
- Subtle background patterns

**Code Example:**
```jsx
<section className="py-20 md:py-32 bg-white relative overflow-hidden">
  
  {/* Background decoration */}
  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 rounded-full 
                  filter blur-3xl opacity-30 transform translate-x-1/2 
                  -translate-y-1/2"></div>
  
  <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
    
    {/* Section Header */}
    <div className="text-center mb-16 animate-fadeIn">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 
                     tracking-tight">
        Comprehensive Pain Management Services
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Expert care tailored to your unique needs, combining advanced 
        technology with compassionate treatment
      </p>
    </div>
    
    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Service Card 1 */}
      <div className="group bg-gradient-to-br from-white to-gray-50 
                      rounded-2xl p-8 shadow-md hover:shadow-2xl 
                      border border-gray-100 transition-all duration-300 
                      hover:-translate-y-2 animate-fadeIn">
        
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 
                        rounded-2xl flex items-center justify-center mb-6 
                        group-hover:scale-110 transition-transform duration-300 
                        shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" 
               stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3 
                       group-hover:text-blue-600 transition-colors">
          Chronic Pain Management
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          Comprehensive care for persistent pain conditions including back pain, 
          arthritis, and fibromyalgia.
        </p>
        
        {/* Learn More Link */}
        <a href="/services#chronic-pain" 
           className="inline-flex items-center text-blue-600 font-semibold 
                      hover:text-blue-700 transition-colors">
          Learn more
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 
                          transition-transform" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 5l7 7-7 7" />
          </svg>
        </a>
        
      </div>
      
      {/* Repeat pattern for remaining services: 
           - Palliative Care
           - Post-Surgical Pain
           - Neuropathic Pain */}
      
    </div>
    
  </div>
</section>
```

**Features:**
- 3 different card styles (2 white gradient, 1 premium blue)
- Hover effects: lift up (-translate-y), shadow increase
- Icon containers with gradients
- Staggered fade-in animations
- Premium badge on featured service
- Arrow animation on hover

---

### 5. "Why Choose Us" Section (Full-Width Feature Blocks)

**Design:**
- Alternating layout (image left/right)
- Large feature blocks
- Mix of cream and white backgrounds
- Images with shadows and rounded corners
- Numbers/stats prominently displayed

**Code Example:**
```jsx
<section className="py-20 md:py-32 bg-gradient-to-b from-white to-cream-50">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    
    {/* Section Header */}
    <div className="text-center mb-20 animate-fadeIn">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Why Choose Salem Pain Clinic
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Three decades of excellence in pain management and patient care
      </p>
    </div>
    
    {/* Feature 1: Experience (Image Right) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 
                    items-center mb-32 animate-fadeIn">
      
      {/* Text Column */}
      <div className="order-2 lg:order-1">
        <div className="inline-block bg-blue-100 text-blue-600 text-sm 
                        font-bold px-4 py-2 rounded-full mb-6">
          EXPERIENCE
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          30+ Years of
          <span className="block text-blue-600">Trusted Expertise</span>
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Dr. Kirupakaran has dedicated over three decades to mastering the 
          art and science of pain management. His extensive experience means 
          you receive care from one of Salem's most seasoned specialists.
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Patients Treated</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-gray-600">Years Practice</div>
          </div>
        </div>
      </div>
      
      {/* Image Column */}
      <div className="order-1 lg:order-2">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 
                        rounded-3xl p-12 shadow-2xl aspect-square 
                        flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4">🏥</div>
            <p className="text-gray-700 font-medium">30 Years Experience</p>
            <p className="text-gray-500 text-sm">Image Placeholder</p>
          </div>
        </div>
      </div>
      
    </div>
    
    {/* Feature 2: Technology (Image Left) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 
                    items-center mb-32 animate-fadeIn animation-delay-200">
      
      {/* Image Column */}
      <div>
        <div className="bg-gradient-to-br from-gold-100 to-gold-200 
                        rounded-3xl p-12 shadow-2xl aspect-square 
                        flex items-center justify-center relative overflow-hidden">
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-300/50 
                          to-transparent"></div>
          
          <div className="text-center relative z-10">
            <div className="text-8xl mb-4">⚡</div>
            <p className="text-gray-700 font-medium">Advanced Technology</p>
            <p className="text-gray-500 text-sm">Ultrasound Equipment</p>
          </div>
        </div>
      </div>
      
      {/* Text Column */}
      <div>
        <div className="inline-block bg-gold-100 text-gold-700 text-sm 
                        font-bold px-4 py-2 rounded-full mb-6">
          ADVANCED TECHNOLOGY
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          State-of-the-Art
          <span className="block text-gold-600">Ultrasound Guidance</span>
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Our clinic is equipped with a premium $30,000 ultrasound machine 
          that enables Dr. Kirupakaran to perform procedures with unparalleled 
          precision and safety.
        </p>
        
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg className="w-6 h-6 text-gold-600 mr-3 flex-shrink-0 mt-1" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">
              <strong className="text-gray-900">Real-time visualization</strong> 
              during procedures for maximum accuracy
            </span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-gold-600 mr-3 flex-shrink-0 mt-1" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">
              <strong className="text-gray-900">Reduced risk</strong> 
              and complications compared to traditional methods
            </span>
          </li>
          <li className="flex items-start">
            <svg className="w-6 h-6 text-gold-600 mr-3 flex-shrink-0 mt-1" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-600">
              <strong className="text-gray-900">Less pain</strong> 
              and faster recovery for patients
            </span>
          </li>
        </ul>
      </div>
      
    </div>
    
    {/* Feature 3: Personalized Care (Image Right) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 
                    items-center animate-fadeIn animation-delay-400">
      
      {/* Text Column */}
      <div className="order-2 lg:order-1">
        <div className="inline-block bg-blue-100 text-blue-600 text-sm 
                        font-bold px-4 py-2 rounded-full mb-6">
          PATIENT-CENTERED
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Personalized
          <span className="block text-blue-600">Treatment Plans</span>
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          We understand that every patient's pain is unique. Dr. Kirupakaran 
          takes the time to understand your specific condition and crafts a 
          treatment plan tailored to your individual needs and goals.
        </p>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          Our compassionate approach addresses not just the physical symptoms, 
          but also the emotional and psychological aspects of chronic pain, 
          helping you reclaim your quality of life.
        </p>
      </div>
      
      {/* Image Column */}
      <div className="order-1 lg:order-2">
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 
                        rounded-3xl p-12 shadow-2xl aspect-square 
                        flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-4">💙</div>
            <p className="text-gray-700 font-medium">Compassionate Care</p>
            <p className="text-gray-500 text-sm">Image Placeholder</p>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</section>
```

**Features:**
- Alternating image/text layout
- Badge tags for section categories
- Stat cards with numbers
- Checkmark bullets with icons
- Gradient backgrounds on image placeholders
- Large, readable text

---

### 6. Call-to-Action Section (Bold, Blue Background)

**Design:**
- Full-width blue gradient background
- Large headline
- Two phone number buttons (white)
- Clean, centered layout

**Code Example:**
```jsx
<section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 
                    via-blue-700 to-blue-900 relative overflow-hidden">
  
  {/* Decorative circles */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 
                  rounded-full filter blur-3xl transform -translate-x-1/2 
                  -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/20 
                  rounded-full filter blur-3xl transform translate-x-1/2 
                  translate-y-1/2"></div>
  
  <div className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10">
    
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 
                   tracking-tight">
      Ready to Schedule Your Consultation?
    </h2>
    
    <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl mx-auto 
                  leading-relaxed">
      Don't let pain control your life. Take the first step towards relief today.
    </p>
    
    {/* Phone number buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center 
                    items-center">
      
      <a href="tel:+919842798422" 
         className="group flex items-center px-8 py-5 bg-white text-blue-600 
                    rounded-full font-bold text-lg shadow-2xl 
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] 
                    hover:scale-105 transform transition-all duration-300 
                    min-w-[280px]">
        <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" 
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        +91 9842798422
      </a>
      
      <a href="tel:+919095596999" 
         className="group flex items-center px-8 py-5 bg-white text-blue-600 
                    rounded-full font-bold text-lg shadow-2xl 
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] 
                    hover:scale-105 transform transition-all duration-300 
                    min-w-[280px]">
        <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" 
             fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        +91 9095596999
      </a>
      
    </div>
    
    {/* Office hours */}
    <p className="text-blue-200 mt-8 text-sm md:text-base">
      Open Monday - Saturday | 10:00 AM - 1:00 PM
    </p>
    
  </div>
  
</section>
```

**Features:**
- Gradient background with decorative blur circles
- Large phone buttons with icons
- Glow effect on hover
- Scale animation on hover
- Clean, centered layout

---

### 7. Footer (Dark, Professional)

**Design:**
- Dark background (#1f2937 or darker)
- Three-column layout (desktop)
- White/light text
- Subtle hover effects on links
- Copyright bar at bottom

**Code Example:**
```jsx
<footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
  <div className="max-w-7xl mx-auto px-6 md:px-8">
    
    {/* Main footer content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
      
      {/* Column 1: Quick Links */}
      <div>
        <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
        <ul className="space-y-3">
          <li>
            <a href="/" className="hover:text-white transition-colors 
                                   hover:translate-x-1 inline-block 
                                   transform duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-white transition-colors 
                                        hover:translate-x-1 inline-block 
                                        transform duration-200">
              About Dr. Kirupakaran
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-white transition-colors 
                                           hover:translate-x-1 inline-block 
                                           transform duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:text-white transition-colors 
                                      hover:translate-x-1 inline-block 
                                      transform duration-200">
              FAQ
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white transition-colors 
                                          hover:translate-x-1 inline-block 
                                          transform duration-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
      
      {/* Column 2: Contact */}
      <div>
        <h3 className="text-white text-lg font-bold mb-6">Contact</h3>
        
        <div className="space-y-4">
          {/* Phone */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Phone:</p>
            <a href="tel:+919842798422" 
               className="text-blue-400 hover:text-blue-300 font-semibold 
                          transition-colors block">
              +91 9842798422
            </a>
            <a href="tel:+919095596999" 
               className="text-blue-400 hover:text-blue-300 font-semibold 
                          transition-colors block">
              +91 9095596999
            </a>
          </div>
          
          {/* Address */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Address:</p>
            <address className="not-italic text-gray-300 leading-relaxed">
              108, Omalur Main Rd,<br />
              near ANS divyam, Swarnapuri Annexe,<br />
              State Bank Colony, Swarnapuri,<br />
              Salem, Tamil Nadu 636004
            </address>
          </div>
          
          {/* Hours */}
          <div>
            <p className="text-sm text-gray-400 mb-2">Hours:</p>
            <p className="text-gray-300">Monday - Saturday</p>
            <p className="text-white font-semibold">10:00 AM - 1:00 PM</p>
            <p className="text-gray-400 text-sm mt-1">Sunday: Closed</p>
          </div>
        </div>
      </div>
      
      {/* Column 3: Information */}
      <div>
        <h3 className="text-white text-lg font-bold mb-6">Information</h3>
        <ul className="space-y-3">
          <li>
            <a href="/privacy" className="hover:text-white transition-colors 
                                          hover:translate-x-1 inline-block 
                                          transform duration-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-white transition-colors 
                                        hover:translate-x-1 inline-block 
                                        transform duration-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/disclaimer" className="hover:text-white transition-colors 
                                             hover:translate-x-1 inline-block 
                                             transform duration-200">
              Disclaimer
            </a>
          </li>
        </ul>
        
        {/* Logo/Clinic name */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Salem Pain Clinic
          </h2>
          <p className="text-gray-400 text-sm">
            Expert Pain Management & Palliative Care
          </p>
        </div>
      </div>
      
    </div>
    
    {/* Bottom bar */}
    <div className="border-t border-gray-800 pt-8 mt-8 text-center 
                    text-gray-400 text-sm">
      <p>© 2024 Salem Pain Clinic. All rights reserved.</p>
      <p className="mt-2">
        Dr. G.P. Kirupakaran, MBBS, DA, CMC Vellore
      </p>
    </div>
    
  </div>
</footer>
```

**Features:**
- Dark, professional appearance
- Three-column responsive grid
- Hover slide-right effect on links
- Clean typography
- Contact information prominently displayed

---

## Mobile Optimization Checklist

### Navigation
- ✅ Hamburger menu with smooth slide-in animation
- ✅ Full-screen mobile menu with large touch targets
- ✅ Phone numbers easily accessible in mobile menu
- ✅ Close button (X) clearly visible

### Typography
- ✅ Hero headline: 2.5rem (40px) on mobile
- ✅ Body text: 16px minimum (18px preferred)
- ✅ Line height: 1.6-1.8 for readability
- ✅ Adequate spacing between paragraphs

### Touch Targets
- ✅ All buttons minimum 44x44px (Apple guidelines)
- ✅ Adequate spacing between clickable elements
- ✅ Phone numbers are tap-to-call links

### Layout
- ✅ Single-column layouts on mobile
- ✅ Images scale appropriately
- ✅ Cards stack vertically
- ✅ No horizontal scrolling
- ✅ Adequate padding/margins (minimum 1rem/16px)

### Performance
- ✅ Lazy load images below fold
- ✅ Optimize images (WebP format)
- ✅ Minimize JavaScript
- ✅ Critical CSS inline
- ✅ Fast loading on 3G/4G

---

## Animation Implementation

### Using Tailwind + Custom CSS

Add to your `globals.css`:

```css
/* Fade In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

/* Staggered animation delays */
.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

/* Pulse Slow (for backgrounds) */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Scroll margin for fixed header */
section[id] {
  scroll-margin-top: 5rem;
}
```

### Using Framer Motion (Recommended for Advanced Animations)

```bash
npm install framer-motion
```

```jsx
import { motion } from 'framer-motion';

// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Your content */}
</motion.div>

// Stagger children
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
    {/* Child 1 */}
  </motion.div>
  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
    {/* Child 2 */}
  </motion.div>
</motion.div>
```

---

## Image Strategy

### Placeholder Design (Until Real Photos Available)

**Option 1: Gradient Placeholders with Icons**
```jsx
<div className="bg-gradient-to-br from-blue-200 to-blue-300 
                rounded-3xl aspect-square flex items-center justify-center 
                p-12">
  <div className="text-center">
    <svg className="w-24 h-24 text-white mx-auto mb-4" fill="none" 
         stroke="currentColor" viewBox="0 0 24 24">
      {/* Medical icon */}
    </svg>
    <p className="text-gray-700 font-medium">Professional Photo</p>
    <p className="text-gray-500 text-sm">Coming Soon</p>
  </div>
</div>
```

**Option 2: Abstract Patterns**
```jsx
<div className="relative bg-gradient-to-br from-blue-500 to-blue-700 
                rounded-3xl aspect-square overflow-hidden">
  {/* Pattern overlay */}
  <div className="absolute inset-0 opacity-10"
       style={{
         backgroundImage: 'url("data:image/svg+xml,...pattern...")',
         backgroundSize: '30px 30px'
       }}>
  </div>
</div>
```

**Option 3: Temporary Stock Photos**
Use from Unsplash API (free, high-quality):
```jsx
<img 
  src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800"
  alt="Medical professional"
  className="rounded-3xl shadow-2xl"
/>
```

### Real Photo Requirements (When Available)

**Doctor Headshot:**
- Size: 800x800px minimum
- Format: JPG or WebP
- Professional attire (white coat preferred)
- Neutral background
- Well-lit, high quality
- Friendly, approachable expression

**Clinic Photos:**
- Size: 1920x1080px (landscape)
- Multiple angles: exterior, waiting room, consultation room, equipment
- Natural lighting preferred
- Clean, organized spaces
- Professional photography recommended

**Equipment Photos:**
- Ultrasound machine close-up
- Show technology in use (if possible, with patient consent/model)
- High resolution
- Good lighting

---

## Quick Implementation Guide

### Step 1: Update tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#2563eb',
        'blue-dark': '#1e40af',
        'gold-accent': '#f59e0b',
        'cream': '#fffbeb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
```

### Step 2: Add Custom CSS (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import Inter font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* Animations (from above) */
/* Add fadeIn, pulse-slow, etc. */

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Better font rendering */
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Step 3: Component Structure

```
components/
├── layout/
│   ├── Header.jsx          // Navigation
│   └── Footer.jsx          // Footer
├── sections/
│   ├── Hero.jsx            // Hero section
│   ├── AboutPreview.jsx    // About section
│   ├── Services.jsx        // Services grid
│   ├── WhyChooseUs.jsx     // Feature blocks
│   └── CTA.jsx             // Call-to-action
└── ui/
    ├── Button.jsx          // Reusable button
    ├── Card.jsx            // Service cards
    └── Container.jsx       // Max-width container
```

---

## Final Checklist Before Launch

### Design
- [ ] All placeholder emojis replaced with SVG icons or real images
- [ ] Consistent spacing throughout
- [ ] All colors match design system
- [ ] Typography hierarchy clear
- [ ] Shadows and depth applied consistently

### Functionality
- [ ] All links work correctly
- [ ] Phone numbers are click-to-call on mobile
- [ ] Smooth scrolling to sections
- [ ] Mobile menu opens/closes smoothly
- [ ] All animations working

### Performance
- [ ] Lighthouse score 90+ (all categories)
- [ ] Images optimized (WebP format)
- [ ] Fast loading on mobile
- [ ] No console errors

### SEO
- [ ] Meta tags on all pages
- [ ] Schema markup implemented
- [ ] Alt text on all images
- [ ] Sitemap generated
- [ ] Mobile-friendly

### Content
- [ ] All text proofread
- [ ] Contact information accurate
- [ ] No placeholder text remaining
- [ ] Professional tone throughout

--- viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 5l7 7-7 7" />
          </svg>
        </a>
        
      </div>
      
      {/* Service Card 2 - Cancer Pain Relief */}
      <div className="group bg-gradient-to-br from-white to-gray-50 
                      rounded-2xl p-8 shadow-md hover:shadow-2xl 
                      border border-gray-100 transition-all duration-300 
                      hover:-translate-y-2 animate-fadeIn animation-delay-100">
        
        <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 
                        rounded-2xl flex items-center justify-center mb-6 
                        group-hover:scale-110 transition-transform duration-300 
                        shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" 
               stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-3 
                       group-hover:text-gold-600 transition-colors">
          Cancer Pain Relief
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          Specialized compassionate care for patients experiencing cancer-related 
          pain and discomfort.
        </p>
        
        <a href="/services#cancer-pain" 
           className="inline-flex items-center text-gold-600 font-semibold 
                      hover:text-gold-700 transition-colors">
          Learn more
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 
                          transition-transform" 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 5l7 7-7 7" />
          </svg>
        </a>
        
      </div>
      
      {/* Service Card 3 - Interventional Procedures (HIGHLIGHT) */}
      <div className="group bg-gradient-to-br from-blue-600 to-blue-700 
                      rounded-2xl p-8 shadow-xl hover:shadow-2xl 
                      border-2 border-blue-400 transition-all duration-300 
                      hover:-translate-y-2 animate-fadeIn animation-delay-200 
                      relative overflow-hidden">
        
        {/* Premium badge */}
        <div className="absolute top-4 right-4 bg-gold-500 text-white text-xs 
                        font-bold px-3 py-1 rounded-full">
          ADVANCED
        </div>
        
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center 
                        justify-center mb-6 group-hover:scale-110 
                        transition-transform duration-300 shadow-lg">
          <svg className="w-8 h-8 text-blue-600" fill="none" 
               stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">
          Interventional Pain Procedures
        </h3>
        
        <p className="text-blue-100 leading-relaxed mb-4">
          State-of-the-art ultrasound-guided procedures for precise, 
          safe, and effective pain relief.
        </p>
        
        <a href="/services#interventional" 
           className="inline-flex items-center text-white font-semibold 
                      hover:text-blue-100 transition-colors">
          Learn more
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 
                          transition-transform" 
               fill="none" stroke="currentColor"