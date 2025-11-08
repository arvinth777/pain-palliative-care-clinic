'use client';

import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center">
        <LoadingSpinner message="Loading Salem Pain Clinic..." />
        <p className="text-sm text-gray-500 mt-4">
          Please wait while we prepare your experience
        </p>
      </div>
    </div>
  );
}
