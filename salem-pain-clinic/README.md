# Salem Pain Clinic Website

Professional medical website for Dr. G.P. Kirupakaran's pain management and palliative care clinic in Salem, Tamil Nadu.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **SEO Optimized**: Complete with meta tags, schema markup, sitemap, and robots.txt
- **Performance Focused**: Built with Next.js 15 for optimal loading speeds
- **Accessibility**: WCAG 2.1 AA compliant with proper semantic HTML
- **Modern UI**: Clean, professional design using Tailwind CSS

## Project Structure

```
salem-pain-clinic/
├── app/
│   ├── layout.js          # Root layout with header/footer
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles
│   ├── not-found.js       # 404 error page
│   ├── about/
│   │   └── page.js        # About Dr. Kirupakaran
│   ├── services/
│   │   └── page.js        # Comprehensive services listing
│   ├── faq/
│   │   └── page.js        # Frequently asked questions
│   ├── contact/
│   │   └── page.js        # Contact information & form
│   ├── privacy/
│   │   └── page.js        # Privacy policy
│   ├── terms/
│   │   └── page.js        # Terms of service
│   └── disclaimer/
│       └── page.js        # Medical disclaimer
├── components/
│   ├── Header.js          # Navigation header (responsive)
│   ├── Footer.js          # Site footer with links
│   └── ServiceCard.js     # Reusable service card component
├── public/
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # XML sitemap for search engines
│   └── images/            # Image assets (placeholders)
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── next.config.js         # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd salem-pain-clinic
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Design System

### Color Palette

- **Primary Blue**: #2563eb
- **Dark Blue**: #1e40af  
- **Light Blue**: #60a5fa
- **Cream**: #fefce8
- **Text Dark**: #1f2937
- **Text Gray**: #6b7280

### Typography

- **Headings**: Inter font family
- **Body**: Open Sans / System fonts
- **Minimum font size**: 16px for accessibility

## Pages Overview

### Homepage (`/`)
- Hero section with CTAs
- About preview
- Services grid (6 services)
- Why Choose Us section
- Contact CTA

### About (`/about`)
- Doctor profile
- Advanced technology section
- Hospital affiliations
- Credentials & certifications

### Services (`/services`)
- 7 detailed service sections:
  - Chronic Pain Management
  - Cancer Pain Relief
  - Interventional Pain Procedures (Featured)
  - Palliative Care Consultations
  - Post-Surgical Pain Management
  - Neuropathic Pain Treatment
  - Headache & Migraine Management

### Contact (`/contact`)
- Contact information
- Office hours
- Contact form
- Google Maps integration
- Phone numbers with click-to-call

### Privacy Policy (`/privacy`)
- Comprehensive privacy practices for patient data
- Consent, retention, and sharing guidelines

### Terms of Service (`/terms`)
- Clinic policies for appointments, payments, and website usage
- Patient responsibilities and dispute resolution

### Medical Disclaimer (`/disclaimer`)
- Scope of website information and liability limitations
- Emergency response instructions

### FAQ (`/faq`)
- 18 frequently asked questions
- Expandable accordion interface
- Quick info cards

## Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
# Google Maps API Key (optional, for custom map styling)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here

# Optional: override the default internal API route for form submissions
NEXT_PUBLIC_FORM_ENDPOINT=https://your-domain.com/api/contact

# Optional: forward contact form submissions to an external service/webhook
CONTACT_FORM_FORWARD_URL=https://example-crm.com/webhooks/contact
```

The contact form posts to `/api/contact` by default. Configure `CONTACT_FORM_FORWARD_URL` to relay submissions to a CRM, email service, or automation platform. If no forward URL is set, submissions are logged to the server console for manual follow-up.

## SEO Features

- **Meta Tags**: Unique titles and descriptions for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Schema Markup**: Medical business and physician structured data
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Deploy with automatic builds

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `.next` folder to your hosting provider

## Content Updates

### Updating Contact Information

Edit the following files:
- `components/Header.js` - Phone numbers in header
- `components/Footer.js` - Contact section
- `app/contact/page.js` - Main contact page

### Adding Real Images

Replace placeholder images in:
- `app/about/page.js` - Doctor photo and equipment
- `app/page.js` - Hero and service images
- Add actual images to `public/images/`

### Modifying Services

Edit `app/services/page.js` to:
- Add new services
- Update service descriptions
- Modify treatment options

## Maintenance

### Regular Updates

- Keep Next.js and dependencies updated
- Monitor Core Web Vitals
- Update content as needed
- Check for broken links

### Performance Monitoring

- Use Lighthouse for performance audits
- Monitor loading speeds
- Check mobile responsiveness
- Verify SEO rankings

## Support

For technical support or questions about the website:
- Create an issue in the repository
- Contact the development team

## License

© 2025 Salem Pain Clinic. All rights reserved.

---
