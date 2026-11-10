import { getLanguage } from '@/lib/server-language';
import { pageMetadata } from '@/lib/seo';
import { PageSchema } from '@/components/StructuredData';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import PainCarousel from '@/components/PainCarousel';
import PainExplorer from '@/components/PainExplorer';
import { CLINIC_ADDRESS, CLINIC_HOURS, DOCTOR_DEGREES, DOCTOR_FULL_NAME, GOOGLE_MAPS_URL } from '@/lib/constants';
import { localizedPath } from '@/lib/locale-path';

const careAreas = [
  { title: 'Pain management', anchor: 'chronic-pain' },
  { title: 'Image-guided procedures', anchor: 'interventional' },
  { title: 'Palliative care', anchor: 'palliative' },
];

export default async function Home() {
  const { language, t } = await getLanguage();
  const servicesPath = localizedPath('/services', language);
  return (
    <div className="clinic-home">
      <PageSchema path="/" />
      <section className="clinic-hero" aria-labelledby="clinic-hero-title">
        <div className="clinic-shell">
          <div className="clinic-hero-intro">
            <div className="clinic-hero-copy">
              <h1 id="clinic-hero-title">{t("Specialist pain care in Salem.")}</h1>
              <p className="clinic-lead">{t("Care for persistent pain and support through serious illness.")}</p>
            </div>
            <PainCarousel />
            <nav className="clinic-hero-scope" aria-label={t("Our areas of care")}>
              <span className="clinic-hero-scope-label">{t("Our areas of care")}</span>
              {careAreas.map(({ title, anchor }) => (
                <Link key={anchor} href={servicesPath + '#' + anchor}>
                  {t(title)} <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="clinic-shell clinic-section clinic-doctor-grid" aria-labelledby="doctor-title">
        <div className="clinic-doctor-photo" data-clinic-reveal>
          <Image src="/images/WhatsApp Image 2025-11-30 at 20.40.39.jpeg" alt={t(DOCTOR_FULL_NAME)} fill sizes="(max-width: 760px) 100vw, 460px" />
        </div>
        <div className="clinic-doctor-copy">
          <h2 id="doctor-title">{t(DOCTOR_FULL_NAME)} <span className="clinic-credentials">{DOCTOR_DEGREES}</span></h2>
          <p className="clinic-lead">{t("Over 30 years of experience in pain management and palliative care.")}</p>
          <p>{t("He earned his MD in Anaesthesiology at Christian Medical College, Vellore.")}</p>
          <p>{t("He asks how pain affects daily life, discusses treatment options, and reviews your progress.")}</p>
        </div>
      </section>

      <section className="clinic-section clinic-shell" id="treatments" aria-labelledby="treatments-title">
        <div className="clinic-section-intro">
          <h2 id="treatments-title">{t("Conditions we treat")}</h2>
          <p>{t("Different kinds of pain call for different care. We look at the symptoms, their cause and their effect on your everyday life.")}</p>
        </div>
        <PainExplorer />
      </section>

      <section className="clinic-care-band" aria-labelledby="care-title">
        <div className="clinic-shell clinic-care-band-grid">
          <div>
            <h2 id="care-title">{t("Comfort matters.")}<br />{t("At every stage.")}</h2>
            <p>{t("We also care for people facing pain after surgery, cancer-related pain and serious illness.")}</p>
          </div>
          <dl className="clinic-care-list">
            <div><dt>{t("Pain after surgery")}</dt><dd>{t("Assessment and a plan for pain that continues during recovery.")}</dd></div>
            <div><dt>{t("Cancer-related pain")}</dt><dd>{t("Pain management alongside ongoing cancer treatment.")}</dd></div>
            <div><dt>{t("Palliative care")}</dt><dd>{t("Support for symptoms, comfort and the needs of patients and families.")}</dd></div>
          </dl>
        </div>
      </section>

      <section className="clinic-approach" id="care-journey" aria-labelledby="approach-title">
        <div className="clinic-shell clinic-section">
          <div className="clinic-section-intro">
            <h2 id="approach-title">{t("Care begins with listening.")}</h2>
            <p>{t("Your history, health and priorities help shape the treatment plan.")}</p>
          </div>
          <ol className="clinic-care-steps">
            <li><h3>{t("Understand the pain")}</h3><p>{t("Discuss your symptoms, medical history and how pain affects your daily activities.")}</p></li>
            <li><h3>{t("Consider the options")}</h3><p>{t("Explore medicines, rehabilitation support or a procedure when appropriate.")}</p></li>
            <li><h3>{t("Review your progress")}</h3><p>{t("Assess your response and adjust the plan as your needs change.")}</p></li>
          </ol>
        </div>
      </section>

      <section className="clinic-shell clinic-section clinic-visit" id="visit" aria-labelledby="clinic-visit-title">
        <div>
          <h2 id="clinic-visit-title">{t("The clinic in Swarnapuri")}</h2>
          <p className="clinic-lead">{t("Specialist care, here in Salem.")}</p>
          <p>{t(CLINIC_ADDRESS)}</p>
          <a className="clinic-button my-4" href={GOOGLE_MAPS_URL}>
            {t("Open in Google Maps")} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="clinic-visit-hours">{t(CLINIC_HOURS)}</p>
        </div>
        <figure className="clinic-editorial-photo" data-clinic-reveal>
          <Image src="/images/clinic-gallery/salem-clinic-exterior.webp" alt={t("Salem Pain Clinic entrance on Omalur Main Road")} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 55vw" />
        </figure>
      </section>
    </div>
  );
}

export function generateMetadata() { return pageMetadata('/'); }
