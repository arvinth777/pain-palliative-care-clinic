'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, ArrowLeft, Phone } from 'lucide-react';

export default function ContactError({ error, reset }) {
  useEffect(() => {
    console.error('Contact Form Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4 pt-24">
      <div className="max-w-xl w-full text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-amber-600" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Contact Form Error
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          We&apos;re having trouble loading the contact form. Please try one of the alternatives below.
        </p>

        {/* Alternative Contact Methods */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-4">Contact Us Directly:</h2>
          
          <div className="space-y-3">
            <a 
              href="tel:+919842798422"
              className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark h-12 px-6 rounded-full font-semibold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call +91 98427 98422
            </a>
            
            <a 
              href="tel:+919095596999"
              className="flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 h-12 px-6 rounded-full font-semibold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call +91 90955 96999
            </a>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Office Hours: Monday-Saturday, 10:00 AM - 1:00 PM
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary-dark font-medium"
          >
            Try Loading Form Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
