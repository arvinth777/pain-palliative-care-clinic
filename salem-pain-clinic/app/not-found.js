import Link from 'next/link';
import { Phone } from 'lucide-react';

const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';

export const metadata = {
  title: 'Page Not Found | Salem Pain Clinic',
  description: 'The page you are looking for could not be found. Return to Salem Pain Clinic homepage.',
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Icon */}
        <div className="text-9xl font-bold text-primary opacity-20 mb-8">404</div>
        
        {/* Error Message */}
        <h1 className="text-4xl font-bold text-text-dark mb-4">
          Page Not Found
        </h1>
        
        <p className="text-xl text-text-gray mb-8">
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        
        {/* Helpful Links */}
        <div className="space-y-4 mb-8">
          <p className="text-text-gray">Here are some helpful links instead:</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary">
              Go to Homepage
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
          <Link href="/about" className="text-primary hover:text-primary-dark transition-colors">
            About {DOCTOR_FULL_NAME}
          </Link>
          <Link href="/services" className="text-primary hover:text-primary-dark transition-colors">
            Our Services
          </Link>
          <Link href="/faq" className="text-primary hover:text-primary-dark transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-primary hover:text-primary-dark transition-colors">
            Contact Us
          </Link>
        </div>
        
        {/* Contact Information */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <p className="text-text-gray mb-4">
            Need immediate assistance? Call us directly:
          </p>
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
