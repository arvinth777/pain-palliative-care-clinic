import Script from 'next/script';

export const metadata = {
  title: 'Pain Management Services | Salem Pain Clinic',
  description: 'Comprehensive pain management services including chronic pain treatment, cancer pain relief, ultrasound-guided procedures, palliative care, and neuropathic pain treatment in Salem.',
  keywords: 'pain management services Salem, chronic pain treatment, cancer pain relief Salem, ultrasound guided injections, nerve blocks Salem, epidural injections Tamil Nadu, palliative care services',
  alternates: {
    canonical: 'https://www.thesalempainclinic.com/services',
  },
  openGraph: {
    title: 'Pain Management Services | Salem Pain Clinic',
    description: 'Comprehensive pain management services including chronic pain treatment, cancer pain relief, and advanced ultrasound-guided procedures.',
    url: 'https://www.thesalempainclinic.com/services',
    siteName: 'Salem Pain Clinic',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.thesalempainclinic.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Salem Pain Clinic Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pain Management Services | Salem Pain Clinic',
    description: 'Comprehensive pain management services in Salem, Tamil Nadu.',
    images: ['https://www.thesalempainclinic.com/og-image.jpg'],
  },
};

// Medical Services Schema for rich results
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Salem Pain Clinic',
  url: 'https://www.thesalempainclinic.com/services',
  medicalSpecialty: ['Pain Management', 'Palliative Medicine', 'Anaesthesiology'],
  availableService: [
    {
      '@type': 'MedicalProcedure',
      name: 'Chronic Pain Management',
      description: 'Comprehensive treatment for back pain, neck pain, arthritis, and fibromyalgia'
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Cancer Pain Relief',
      description: 'Specialized compassionate care for cancer-related pain and discomfort'
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Ultrasound-Guided Interventional Procedures',
      description: 'State-of-the-art ultrasound-guided nerve blocks, epidural injections, and joint treatments'
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Palliative Care',
      description: 'Holistic care focusing on quality of life and symptom management'
    },
    {
      '@type': 'MedicalProcedure',
      name: 'Neuropathic Pain Treatment',
      description: 'Expert management of diabetic neuropathy, trigeminal neuralgia, and sciatica'
    }
  ]
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />
      {children}
    </>
  );
}
