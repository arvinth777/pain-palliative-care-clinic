'use client';
import { useLanguage } from '@/components/LanguageProvider';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe2, Menu, X } from 'lucide-react';
import { SITE_PAGES } from '@/lib/constants';
import { basePath } from '@/lib/locale-path';

export default function Header() {
  const { t, language, href: localHref, languageHref, changeLanguage, pending } = useLanguage();
  const [openPath, setOpenPath] = useState(null);
  const [compact, setCompact] = useState(false);
  const [animate, setAnimate] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const isOpen = openPath === pathname;

  useEffect(() => {
    const media = matchMedia('(max-width: 1100px)');
    const update = () => { setCompact(media.matches); setOpenPath(null); };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return (
    <header className="landing-header" onKeyDown={event => {
      if (event.key === 'Escape' && isOpen) {
        setAnimate(false);
        setOpenPath(null);
        menuRef.current?.focus();
      }
    }}>
      <div className="clinic-shell clinic-header-inner">
        <Link className="landing-brand" href={localHref('/')} aria-label={t("Salem Pain Clinic home")} onClick={() => setOpenPath(null)}>
          <span className="landing-brand-mark">
            <Image src="/images/clinic-logo-refined.png" alt="" fill sizes="(max-width: 420px) 56px, 64px" />
          </span><span className="landing-brand-name">{t("Salem Pain Clinic")}</span></Link>
        <button ref={menuRef} type="button" className="landing-menu-toggle" onClick={event => { setAnimate(event.detail > 0); setOpenPath(isOpen ? null : pathname); }} aria-label={t("Toggle menu")} aria-expanded={isOpen} aria-controls="landing-mobile-menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="landing-mobile-menu" className="landing-nav" data-motion={animate ? 'smooth' : 'instant'} inert={compact && !isOpen} aria-label={t("Main navigation")}>
          {SITE_PAGES.map(({ label, href }) => (
            <Link key={href} href={localHref(href)} aria-current={href === basePath(pathname) ? 'page' : undefined} onClick={() => setOpenPath(null)}>
              {t(label)}
            </Link>
          ))}
        </nav>
        <Link href={languageHref} prefetch={false} className="clinic-language-toggle" onClick={changeLanguage} aria-busy={pending} hrefLang={language === 'ta' ? 'en-IN' : 'ta-IN'} lang={language === 'ta' ? 'en' : 'ta'} aria-label={language === 'ta' ? 'Switch to English' : 'தமிழுக்கு மாற்றவும்'}>
          <Globe2 size={16} aria-hidden="true" />
          {language === 'ta' ? 'English' : 'தமிழ்'}
        </Link>
      </div>
    </header>
  );
}
