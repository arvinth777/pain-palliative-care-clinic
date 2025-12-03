import Script from 'next/script';

export const metadata = {
  title: 'Contact Us | Salem Pain Clinic',
  description: 'Book an appointment at Salem Pain Clinic. Located at 108 Omalur Main Road, Swarnapuri, Salem. Call +91 9842798422 or +91 9095596999. Open Mon-Sat 10AM-1PM.',
  keywords: 'Salem Pain Clinic contact, book appointment Salem, pain doctor Salem phone number, pain clinic Swarnapuri, Salem pain management appointment',
  alternates: {
    canonical: 'https://www.thesalempainclinic.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Salem Pain Clinic',
    description: 'Book an appointment at Salem Pain Clinic. Call +91 9842798422 or +91 9095596999.',
    url: 'https://www.thesalempainclinic.com/contact',
    siteName: 'Salem Pain Clinic',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.thesalempainclinic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Salem Pain Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Contact Us | Salem Pain Clinic',
    description: 'Book an appointment. Call +91 9842798422 or +91 9095596999. Mon-Sat 10AM-1PM.',
  },
};

// LocalBusiness Schema for better local SEO
const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Salem Pain Clinic',
  image: 'https://www.thesalempainclinic.com/images/logo.png',
  url: 'https://www.thesalempainclinic.com',
  telephone: ['+91-9842798422', '+91-9095596999'],
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
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '10:00',
    closes: '13:00'
  },
  priceRange: '₹₹',
  medicalSpecialty: ['Pain Management', 'Palliative Medicine']
};

export default function ContactLayout({ children }) {
  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
        }}
      />
      {children}
    </>
  );
}
