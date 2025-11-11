import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientChatbotWrapper from '../components/ClientChatbotWrapper';
import AnimatedBackground from '../components/AnimatedBackground';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';

// Force dynamic rendering to avoid Radix UI SSR issues
export const dynamic = 'force-dynamic';

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500'], 
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'arial']
});
const lora = Lora({ 
  subsets: ['latin'], 
  weight: ['600', '700'], 
  variable: '--font-heading',
  display: 'swap',
  fallback: ['Georgia', 'serif']
});
const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';

export const metadata = {
  title: 'Salem Pain Clinic | Expert Pain Management in Salem, Tamil Nadu',
  description: `30+ years of specialized pain management & palliative care. ${DOCTOR_FULL_NAME} offers advanced ultrasound-guided procedures in Salem.`,
  keywords: 'pain management Salem, pain doctor Salem Tamil Nadu, palliative care Salem, chronic pain treatment Salem, cancer pain relief Salem, interventional pain procedures Salem',
  authors: [{ name: 'Dr. G.P. Kirupakaran' }],
  creator: 'Salem Pain Clinic',
  publisher: 'Salem Pain Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://salempainclinic.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-icon.png',
      },
    ],
  },
  openGraph: {
    title: 'Salem Pain Clinic | Expert Pain Management in Salem, Tamil Nadu',
    description: `30+ years of specialized pain management & palliative care. ${DOCTOR_FULL_NAME} offers advanced ultrasound-guided procedures in Salem.`,
    url: 'https://salempainclinic.com',
    siteName: 'Salem Pain Clinic',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://salempainclinic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Salem Pain Clinic - Expert Pain Management',
      },
      {
        url: 'https://salempainclinic.com/images/logo.png',
        width: 200,
        height: 200,
        alt: 'Salem Pain Clinic Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salem Pain Clinic | Expert Pain Management',
    description: '30+ years of specialized pain management & palliative care in Salem, Tamil Nadu',
    images: ['https://salempainclinic.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: 'large',
      maxSnippet: -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_TOKEN || '', // Add your Google Search Console token to .env.local
  },
};

const jsonLdMedicalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Salem Pain Clinic',
  description: 'Pain management and palliative care clinic in Salem, Tamil Nadu',
  logo: {
    '@type': 'ImageObject',
    url: 'https://salempainclinic.com/images/logo.png',
    width: 200,
    height: 200
  },
  image: 'https://salempainclinic.com/images/logo.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '108, Omalur Main Rd, near ANS divyam, Swarnapuri Annexe',
    addressLocality: 'Salem',
    addressRegion: 'Tamil Nadu',
    postalCode: '636004',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.6806,
    longitude: 78.1407
  },
  url: 'https://salempainclinic.com',
  telephone: ['+91-9842798422', '+91-9095596999'],
  email: 'contact@salempainclinic.com',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '13:00'
  },
  priceRange: '₹₹',
  medicalSpecialty: ['Pain Management', 'Anaesthesiology', 'Palliative Medicine'],
  founder: {
    '@type': 'Person',
    name: DOCTOR_FULL_NAME,
    jobTitle: 'Chief Medical Officer'
  }
};

const jsonLdPhysician = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  '@id': 'https://salempainclinic.com/#physician',
  name: DOCTOR_FULL_NAME,
  description: 'Leading pain management specialist in Salem with 30+ years experience',
  medicalSpecialty: ['Pain Management', 'Anaesthesiology', 'Palliative Care'],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Coimbatore Medical College'
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Christian Medical College, Vellore'
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Madras Medical College'
    }
  ],
  yearsExperience: '30+',
  qualifications: ['MBBS', 'MD', 'DA'],
  worksFor: {
    '@type': 'MedicalBusiness',
    name: 'Salem Pain Clinic',
    url: 'https://salempainclinic.com'
  },
  knowsAbout: ['Chronic Pain Management', 'Cancer Pain Relief', 'Interventional Pain Procedures', 'Palliative Care']
};

const jsonLdOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Salem Pain Clinic',
  url: 'https://salempainclinic.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://salempainclinic.com/images/logo.png',
    width: 200,
    height: 200,
    contentUrl: 'https://salempainclinic.com/images/logo.png'
  },
  image: 'https://salempainclinic.com/images/logo.png',
  sameAs: [
    'https://www.facebook.com/salempainclinic',
    'https://twitter.com/salempainclinic'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9842798422',
    contactType: 'customer service'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://salempainclinic.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          id="schema-medical-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdMedicalBusiness)
          }}
        />
        <Script
          id="schema-physician"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdPhysician)
          }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization)
          }}
        />
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased font-sans`}>
        <AnimatedBackground />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ClientChatbotWrapper />
        <Analytics />
      </body>
    </html>
  );
}
