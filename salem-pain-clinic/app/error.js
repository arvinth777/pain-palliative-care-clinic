'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw, Phone } from 'lucide-react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Application Error:', error);
    }
    
    // TODO: In production, send to error monitoring service (Sentry, etc.)
    // sendToErrorMonitoring(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>

        {/* Error Details (development only) */}
        {process.env.NODE_ENV === 'development' && error?.message && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-mono text-red-800 break-words">
              <strong>Error:</strong> {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark h-12 px-6 rounded-full font-semibold transition-all shadow-lg"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 h-12 px-6 rounded-full font-semibold transition-all"
          >
            <Home className="w-5 h-5" />
            Return Home
          </Link>
        </div>

        {/* Help Section */}
        <div className="border-t pt-8">
          <p className="text-gray-600 mb-4">
            If this problem persists, please contact us:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-700">
            <a 
              href="tel:+919842798422" 
              className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary-dark font-medium"
            >
              <Phone className="w-4 h-4" />
              +91 98427 98422
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a 
              href="tel:+919095596999" 
              className="inline-flex items-center justify-center gap-2 text-primary hover:text-primary-dark font-medium"
            >
              <Phone className="w-4 h-4" />
              +91 90955 96999
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
