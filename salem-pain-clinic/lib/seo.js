import {
  WEBSITE_URL, CLINIC_NAME, DOCTOR_FULL_NAME, DOCTOR_DEGREES, PHONE_PRIMARY, PHONE_SECONDARY,
  CLINIC_CITY, CLINIC_STATE, CLINIC_PINCODE, CLINIC_LATITUDE, CLINIC_LONGITUDE, GOOGLE_MAPS_URL,
} from './constants';
import { getLanguage } from './server-language';
import { localizedPath } from './locale-path';

export const pages = {
  '/': { label: 'Home', title: 'Salem Pain Clinic | Pain Management & Palliative Care', description: 'Pain management and palliative care in Swarnapuri, Salem. Explore care for back, neck, joint, nerve and cancer-related pain with Dr. G.P. Kirupakaran.' },
  '/services': { label: 'Treatments', title: 'Pain Treatments in Salem | Salem Pain Clinic', description: 'Explore care for back and joint pain, sciatica, nerve pain and cancer pain in Salem, including image-guided procedures and palliative care.' },
  '/about': { label: 'About', title: 'Dr. G.P. Kirupakaran, MBBS, MD, DA, DFID | Salem', description: 'Meet Dr. G.P. Kirupakaran, MBBS, MD, DA, DFID. Learn about his medical training, over 30 years of experience and approach to pain care in Salem.' },
  '/contact': { label: 'Visit & contact', title: 'Contact & Directions | Salem Pain Clinic, Swarnapuri', description: 'Find Salem Pain Clinic at 108 Omalur Main Road, Swarnapuri. View directions, call +91 98427 98422 or send an enquiry. Mon–Sat, 10 AM–1 PM.' },
  '/faq': { label: 'FAQs', title: 'Pain Treatment & Visit FAQs | Salem Pain Clinic', description: 'Answers about pain treatment, ultrasound-guided procedures, clinic hours, referrals and preparing for your visit to Salem Pain Clinic.' },
  '/privacy': { label: 'Privacy', title: 'Privacy Policy | Salem Pain Clinic', description: 'How Salem Pain Clinic handles information shared through its website, contact form and clinic assistant, and how to contact us about privacy.' },
  '/terms': { label: 'Terms', title: 'Terms of Service | Salem Pain Clinic', description: 'Read the terms for using the Salem Pain Clinic website, sending enquiries and requesting a clinic visit.' },
  '/disclaimer': { label: 'Disclaimer', title: 'Medical Disclaimer | Salem Pain Clinic', description: 'Understand the scope and limitations of medical information on the Salem Pain Clinic website and when to seek individual medical advice.' },
};

export const pageUrl = (path, language = 'en') => WEBSITE_URL + localizedPath(path, language);
export const languageAlternates = path => ({ 'en-IN': pageUrl(path), 'ta-IN': pageUrl(path, 'ta'), 'x-default': pageUrl(path) });

export async function pageMetadata(path) {
  const { language, t } = await getLanguage();
  const { title, description } = pages[path];
  const image = { url: `${WEBSITE_URL}/og`, width: 1200, height: 630, alt: t('Salem Pain Clinic') };
  return {
    title: t(title), description: t(description),
    alternates: { canonical: pageUrl(path, language), languages: languageAlternates(path) },
    openGraph: { title: t(title), description: t(description), url: pageUrl(path, language), siteName: t('Salem Pain Clinic'), type: 'website', locale: language === 'ta' ? 'ta_IN' : 'en_IN', alternateLocale: language === 'ta' ? 'en_IN' : 'ta_IN', images: [image] },
    twitter: { card: 'summary_large_image', title: t(title), description: t(description), images: [image.url] },
  };
}

export function clinicGraph() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic', '@id': `${WEBSITE_URL}/#clinic`, name: CLINIC_NAME, alternateName: 'Salem Pain Clinic', url: WEBSITE_URL,
        description: 'Pain management and palliative care in Swarnapuri, Salem, Tamil Nadu.',
        logo: { '@type': 'ImageObject', url: `${WEBSITE_URL}/images/clinic-logo-refined.png`, width: 1254, height: 1254 },
        image: `${WEBSITE_URL}/images/clinic-gallery/salem-clinic-exterior.webp`,
        telephone: PHONE_PRIMARY,
        contactPoint: { '@type': 'ContactPoint', telephone: PHONE_SECONDARY, contactType: 'clinic enquiries', availableLanguage: ['English', 'Tamil'] },
        address: { '@type': 'PostalAddress', streetAddress: '108, Omalur Main Road, near ANS divyam, Swarnapuri Annexe, State Bank Colony, Swarnapuri', addressLocality: CLINIC_CITY, addressRegion: CLINIC_STATE, postalCode: CLINIC_PINCODE, addressCountry: 'IN' },
        geo: { '@type': 'GeoCoordinates', latitude: Number(CLINIC_LATITUDE), longitude: Number(CLINIC_LONGITUDE) },
        hasMap: GOOGLE_MAPS_URL,
        openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '13:00' },
        employee: { '@id': `${WEBSITE_URL}/#doctor` },
      },
      {
        '@type': 'Person', '@id': `${WEBSITE_URL}/#doctor`, name: DOCTOR_FULL_NAME, honorificSuffix: DOCTOR_DEGREES,
        jobTitle: 'Pain management and palliative care doctor', url: `${WEBSITE_URL}/about`,
        image: `${WEBSITE_URL}/images/dr-kirupakaran.jpg`, worksFor: { '@id': `${WEBSITE_URL}/#clinic` },
        alumniOf: ['Coimbatore Medical College', 'Christian Medical College, Vellore', 'Madras Medical College'].map(name => ({ '@type': 'CollegeOrUniversity', name })),
        knowsAbout: ['Pain management', 'Anaesthesiology', 'Palliative care'],
      },
      { '@type': 'WebSite', '@id': `${WEBSITE_URL}/#website`, url: WEBSITE_URL, name: 'Salem Pain Clinic', alternateName: CLINIC_NAME, inLanguage: ['en-IN', 'ta-IN'], publisher: { '@id': `${WEBSITE_URL}/#clinic` } },
    ],
  };
}
