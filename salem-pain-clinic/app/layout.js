import LanguageProvider from '@/components/LanguageProvider';
import { getLanguage } from '@/lib/server-language';
import { WEBSITE_URL } from '@/lib/constants';
import { clinicGraph } from '@/lib/seo';
import StructuredData from '@/components/StructuredData';
import './globals.css';
import './home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientChatbotWrapper from '../components/ClientChatbotWrapper';
import PageMotion from '@/components/PageMotion';
import { Analytics } from '@vercel/analytics/next';

// Public page language is resolved from the URL by middleware.
export const dynamic = 'force-dynamic';

export const metadata = {
  metadataBase: new URL(WEBSITE_URL),
  applicationName: 'Salem Pain Clinic',
  title: 'Salem Pain Clinic',
  description: 'Pain management and palliative care in Swarnapuri, Salem, Tamil Nadu.',
  publisher: 'Salem Pain Clinic',
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-video-preview': -1, 'max-snippet': -1 } },
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_TOKEN && { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_TOKEN } }),
};

export default async function RootLayout({ children }) {
  const { language, t } = await getLanguage();
  return (
    <html lang={language} className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/ibm-plex-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {language === 'ta' && <link rel="preload" href="/fonts/noto-sans-tamil.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />}
      </head>
      <body className="antialiased font-sans">
        <LanguageProvider language={language}>
        <a href="#main-content" className="clinic-skip-link">{t('Skip to content')}</a>
        <StructuredData id="clinic-schema" data={clinicGraph()} />
        <Header />
        <main id="main-content" tabIndex={-1} className="min-h-screen">{children}</main>
        <PageMotion />
        <ClientChatbotWrapper />
        <Footer />
        <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
