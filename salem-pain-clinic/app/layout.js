import { Inter, Lora } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GeminiChatbot from '../components/GeminiChatbot';
import Script from 'next/script';

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
  openGraph: {
    title: 'Salem Pain Clinic | Expert Pain Management in Salem, Tamil Nadu',
    description: `30+ years of specialized pain management & palliative care. ${DOCTOR_FULL_NAME} offers advanced ultrasound-guided procedures in Salem.`,
    url: 'https://salempainclinic.com',
    siteName: 'Salem Pain Clinic',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salem Pain Clinic | Expert Pain Management',
    description: '30+ years of specialized pain management & palliative care in Salem, Tamil Nadu'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token',
  },
};

const jsonLdMedicalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Salem Pain Clinic',
  description: 'Pain management and palliative care clinic in Salem, Tamil Nadu',
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '13:00'
  },
  priceRange: '₹₹',
  medicalSpecialty: ['Pain Management', 'Anaesthesiology', 'Palliative Medicine']
};

const jsonLdPhysician = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: DOCTOR_FULL_NAME,
  description: 'Leading pain management specialist in Salem with 30+ years experience',
  medicalSpecialty: 'Pain Management, Anaesthesiology, Palliative Care',
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
    name: 'Salem Pain Clinic'
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
      </head>
      <body className={`${inter.variable} ${lora.variable} antialiased font-sans`}>
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <GeminiChatbot />
      </body>
    </html>
  );
}
