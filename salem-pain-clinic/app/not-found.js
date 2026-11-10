import { getLanguage, localizeMetadata } from '@/lib/server-language';
import Link from 'next/link';
import { localizedPath } from '@/lib/locale-path';
import { Phone } from 'lucide-react';


const metadata = {
  robots: { index: false, follow: true },
  title: 'Page Not Found | Salem Pain Clinic',
  description: 'The page you are looking for could not be found. Return to Salem Pain Clinic homepage.',
};

export default async function NotFound() {
  const { t, language } = await getLanguage();
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Icon */}
        <div className="text-9xl font-bold text-primary opacity-20 mb-8">404</div>
        
        {/* Error Message */}
        <h1 className="text-4xl font-bold text-text-dark mb-4">{t("Page Not Found")}</h1>
        
        <p className="text-xl text-text-gray mb-8">{t("We're sorry, but the page you're looking for doesn't exist or has been moved.")}</p>
        
        {/* Helpful Links */}
        <div className="space-y-4 mb-8">
          <p className="text-text-gray">{t("Here are some helpful links instead:")}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={localizedPath('/', language)} className="btn-primary">{t("Go to Homepage")}</Link>
            <Link href={localizedPath('/services', language)} className="btn-secondary">{t("View Our Services")}</Link>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
          <Link href={localizedPath('/about', language)} className="text-primary hover:text-primary-dark transition-colors">{t("About the doctor")}</Link>
          <Link href={localizedPath('/services', language)} className="text-primary hover:text-primary-dark transition-colors">{t("Our Services")}</Link>
          <Link href={localizedPath('/faq', language)} className="text-primary hover:text-primary-dark transition-colors">{t("FAQ")}</Link>
          <Link href={localizedPath('/contact', language)} className="text-primary hover:text-primary-dark transition-colors">{t("Contact Us")}</Link>
        </div>
        
        {/* Contact Information */}
        <div className="mt-12 p-6 bg-secondary rounded-lg">
          <p className="text-text-gray mb-4">{t("Need immediate assistance? Call us directly:")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919842798422" className="group flex items-center justify-center gap-2 text-primary font-semibold text-lg hover:text-primary-dark transition-colors">
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              +91 9842798422
            </a>
            <a href="tel:+919095596999" className="group flex items-center justify-center gap-2 text-primary font-semibold text-lg hover:text-primary-dark transition-colors">
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
              +91 9095596999
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateMetadata() {
  return localizeMetadata(metadata);
}
