'use client';
import { useLanguage } from '@/components/LanguageProvider';

import Link from 'next/link';
import { basePath } from '@/lib/locale-path';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import {
  CLINIC_ADDRESS, CLINIC_CLOSED, CLINIC_HOURS, PHONE_DISPLAY_PRIMARY,
  PHONE_DISPLAY_SECONDARY, PHONE_PRIMARY, PHONE_SECONDARY, SITE_PAGES,
} from '@/lib/constants';

export default function Footer() {
  const { t, href: localHref } = useLanguage();
  const pathname = basePath(usePathname());
  const currentPage = SITE_PAGES.findIndex(page => page.href === pathname);
  const nextPage = SITE_PAGES[(currentPage + 1) % SITE_PAGES.length];

  return (
    <footer className="landing-footer">
      {currentPage >= 0 && (
        <nav className="clinic-page-next" aria-label={t("Continue exploring")}>
          <Link className="clinic-shell clinic-page-next-link" href={localHref(nextPage.href)}>
            <span>{t(nextPage.href === '/' ? 'Back to' : 'Continue to')} <strong>{t(nextPage.label)}</strong></span>
            <ArrowRight size={28} aria-hidden="true" />
          </Link>
        </nav>
      )}
      <div className="clinic-shell footer-top">
        <div>
          <Link className="footer-brand" href={localHref('/')}>{t("Salem Pain Clinic")}</Link>
          <nav className="footer-nav" aria-label={t("Footer navigation")}>
            {SITE_PAGES.map(({ label, href }) => (
              <Link key={href} href={localHref(href)} aria-current={href === pathname ? 'page' : undefined}>{t(label)}</Link>
            ))}
          </nav>
        </div>
        <div>
          <span className="footer-label">{t("Visit")}</span>
          <p>{t(CLINIC_ADDRESS)}</p>
          <p>{t(CLINIC_HOURS)}<br />{t(CLINIC_CLOSED)}</p>
        </div>
        <div>
          <span className="footer-label">{t("Get in touch")}</span>
          <a href={'tel:' + PHONE_PRIMARY}>{PHONE_DISPLAY_PRIMARY}</a>
          <a href={'tel:' + PHONE_SECONDARY}>{PHONE_DISPLAY_SECONDARY}</a>
        </div>
      </div>
      <div className="clinic-shell footer-bottom">
        <span>© {new Date().getFullYear()} {t("Salem Pain Clinic")}</span>
        <div>
          <Link href={localHref('/privacy')}>{t("Privacy")}</Link>
          <Link href={localHref('/terms')}>{t("Terms")}</Link>
          <Link href={localHref('/disclaimer')}>{t("Disclaimer")}</Link>
        </div>
      </div>
    </footer>
  );
}
