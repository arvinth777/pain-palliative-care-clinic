'use client';

import { createContext, useContext, useEffect, useState, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { translator } from '@/lib/i18n';
import { localizedPath } from '@/lib/locale-path';

const LanguageContext = createContext({ language: 'en', t: translator('en') });

export default function LanguageProvider({ language: initialLanguage, children }) {
  const [language, setLanguage] = useState(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();
  const languageHref = localizedPath(pathname, language === 'ta' ? 'en' : 'ta');

  useEffect(() => {
    const next = pathname === '/ta' || pathname.startsWith('/ta/') ? 'ta' : 'en';
    setLanguage(next);
    document.documentElement.lang = next;
  }, [pathname]);

  function changeLanguage(event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    startTransition(() => router.push(languageHref + window.location.search + window.location.hash, { scroll: false }));
  }

  return (
    <LanguageContext.Provider value={{ language, t: translator(language), href: path => localizedPath(path, language), languageHref, changeLanguage, pending }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
