# Salem Pain Clinic Website

A professional, premium medical website designed for **Dr. G.P. Kirupakaran's Pain Management & Palliative Care Clinic** in Salem, Tamil Nadu.

This project is a modern, mobile-first web application featuring an Apple-inspired glassmorphism design, smooth animations, and a fully responsive layout. It serves as the digital front door for the clinic, providing patients with service details, doctor credentials, and easy contact options.

##  Key Features

- **Premium UI/UX**: Custom "Glassmorphism" design system with Tailwind CSS and Framer Motion animations.
- **Mobile-First**: Fully responsive layouts optimized for all devices (Mobile, Tablet, Desktop).
- **Performance**: Built on Next.js 15 (App Router) for optimal speed and SEO.
- **CMS Integration**: Connected to **Sanity CMS** for easy content updates (doctor profiles, services).
- **Interactive Elements**: Smooth scrolling, accordion FAQs, and validated contact forms.
- **SEO Optimized**: Includes Sitemap, Robots.txt, Schema markup, and meta tags.
- **Quality Assurance**: Comprehensive automated testing suite using **Playwright**.

##  Tech Stack

- **Framework**: [Next.js 15.5](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & GSAP
- **Icons**: Lucide React & Phosphor Icons
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Testing**: [Playwright](https://playwright.dev/)
- **Deployment**: Vercel Ready

##  Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v8.0.0 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/arvinth777/pain-palliative-care-clinic.git
   cd pain-palliative-care-clinic/salem-pain-clinic
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file and update it with your credentials:
   ```bash
   cp .env.local.example .env.local
   ```
   *See [Configuration](#-configuration) below for details.*

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🧪 Running Tests

This project maintains high quality through automated visual and functional tests.

```bash
# Run End-to-End Tests (Playwright)
npm run test:e2e

# Run Visual Layout Tests
node visual-test.js

# Run Website Functionality Check
node test-website.js
```

## 📂 Project Structure

```
salem-pain-clinic/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── services/         # Services listings
│   ├── faq/              # FAQ page
│   └── globals.css       # Global styles & Tailwind directives
├── components/           # Reusable UI components
│   ├── ui/               # Base UI elements (buttons, cards)
│   ├── Header.js         # Responsive navigation
│   └── ServiceCard.js    # Service display component
├── lib/                  # Utilities & CMS clients
│   └── sanity.js         # Sanity CMS configuration
├── public/               # Static assets (images, icons)
├── tests/                # Playwright test specs
└── tailwind.config.js    # Design system configuration
```

##  Configuration

The application requires specific environment variables to function correctly. Refer to `.env.local.example` for the complete list.

**Key Variables:**
- `GEMINI_API_KEY`: For AI chatbot features.
- `RESEND_API_KEY` & `CONTACT_EMAIL`: For processing contact form submissions.
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Connection string for the CMS.

## 📚 Documentation

For more detailed information, please refer to the internal documentation:
- **[Handoff Context](HANDOFF-CONTEXT.md)**: Detailed project status and roadmap.
- **[Design Specs](premium-design-specs.md)**: UI/UX guidelines and color palettes.
- **[Image Guide](salem-pain-clinic/IMAGE-GUIDE.md)**: Asset requirements and dimensions.
- **[CMS Flow](salem-pain-clinic/SANITY-FLOW.md)**: How content is managed and fetched.


## 📄 License

This project is licensed under the **ISC License**. See the `package.json` file for details.

---

**Maintained by:** [Arvinth Kirupakaran](https://github.com/arvinth777)
