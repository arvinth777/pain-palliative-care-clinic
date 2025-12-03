import Script from 'next/script';

export const metadata = {
  title: 'Frequently Asked Questions | Salem Pain Clinic',
  description: 'Find answers to common questions about pain management treatments, procedures, appointments, and clinic policies at Salem Pain Clinic.',
  keywords: 'pain management FAQ, Salem Pain Clinic questions, pain treatment questions, nerve block FAQ, palliative care questions',
  alternates: {
    canonical: 'https://www.thesalempainclinic.com/faq',
  },
  openGraph: {
    title: 'FAQ | Salem Pain Clinic',
    description: 'Find answers to common questions about our pain management services and procedures.',
    url: 'https://www.thesalempainclinic.com/faq',
    siteName: 'Salem Pain Clinic',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FAQ | Salem Pain Clinic',
    description: 'Find answers to common questions about pain management treatments.',
  },
};

// FAQ Schema for rich results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What conditions do you treat at Salem Pain Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialize in chronic back and neck pain, arthritis, cancer pain, neuropathic pain (diabetic neuropathy, post-herpetic neuralgia), headaches and migraines, post-surgical pain, and fibromyalgia. We also provide comprehensive palliative care.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is ultrasound-guided pain management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ultrasound-guided procedures use real-time imaging to visualize the exact location where medication needs to be delivered. This technology allows precise needle placement, reduced risk of complications, less pain during the procedure, and better treatment outcomes.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the office hours of Salem Pain Clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are open Monday through Saturday from 10:00 AM to 1:00 PM. We are closed on Sundays.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where is Salem Pain Clinic located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salem Pain Clinic is located at 108, Omalur Main Rd, near ANS divyam, Swarnapuri Annexe, State Bank Colony, Swarnapuri, Salem, Tamil Nadu 636004.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do I need a referral to schedule an appointment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We welcome both referred and self-referred patients. Please contact us to discuss your specific situation and insurance requirements.'
      }
    }
  ]
};

export default function FAQLayout({ children }) {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      {children}
    </>
  );
}
