'use client';

import dynamic from 'next/dynamic';

// Dynamically import GeminiChatbot with SSR disabled to avoid Radix UI SSR issues
const GeminiChatbot = dynamic(() => import('./GeminiChatbot'), { ssr: false });

export default function ClientChatbotWrapper() {
  return <GeminiChatbot />;
}
