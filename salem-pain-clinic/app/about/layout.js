export const metadata = {
  title: 'About Dr. G.P. Kirupakaran | Salem Pain Clinic',
  description: 'Meet Dr. G.P. Kirupakaran, Salem\'s leading pain management specialist with 30+ years experience. CMC Vellore trained, specializing in ultrasound-guided procedures and palliative care.',
  keywords: 'Dr Kirupakaran Salem, pain specialist Salem, anaesthesiologist Salem Tamil Nadu, CMC Vellore doctor Salem, palliative care specialist',
  alternates: {
    canonical: 'https://www.thesalempainclinic.com/about',
  },
  openGraph: {
    title: 'About Dr. G.P. Kirupakaran | Salem Pain Clinic',
    description: 'Meet Dr. G.P. Kirupakaran, Salem\'s leading pain management specialist with 30+ years experience.',
    url: 'https://www.thesalempainclinic.com/about',
    siteName: 'Salem Pain Clinic',
    locale: 'en_IN',
    type: 'profile',
    images: [
      {
        url: 'https://www.thesalempainclinic.com/images/dr-kirupakaran.jpg',
        width: 800,
        height: 600,
        alt: 'Dr. G.P. Kirupakaran - Pain Management Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. G.P. Kirupakaran | Salem Pain Clinic',
    description: 'Meet Salem\'s leading pain management specialist with 30+ years experience.',
    images: ['https://www.thesalempainclinic.com/images/dr-kirupakaran.jpg'],
  },
};

export default function AboutLayout({ children }) {
  return children;
}
