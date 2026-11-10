import { getLanguage } from '@/lib/server-language';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { localizedPath } from '@/lib/locale-path';
import { DOCTOR_DEGREES, DOCTOR_FULL_NAME } from '@/lib/constants';

const credentials = [
  ['MBBS', 'Coimbatore Medical College'],
  ['MD (Anaesthesiology)', 'Christian Medical College, Vellore'],
  ['DA (Anaesthesia)', 'Madras Medical College'],
  ['DFID (Diabetology)', 'Christian Medical College, Vellore'],
];

export default async function About() {
  const { t, language } = await getLanguage();
  return (
    <div className="clinic-page clinic-about-page">
      <section className="clinic-route-hero">
        <div className="clinic-shell clinic-route-split clinic-about-intro">
          <div>
            <span className="clinic-route-kicker">{t("About the doctor")}</span>
            <h1>{t(DOCTOR_FULL_NAME)} <span className="clinic-credentials">{DOCTOR_DEGREES}</span></h1>
            <p>{t("Over 30 years of experience in pain management and palliative care.")}</p>
            <p>{t("He trained in anaesthesiology at Christian Medical College, Vellore. At Salem Pain Clinic, he sees patients with persistent pain, pain after surgery and pain related to cancer.")}</p>
          </div>
          <figure className="clinic-editorial-photo clinic-about-portrait">
            <Image src="/images/dr-kirupakaran.jpg" alt={t(DOCTOR_FULL_NAME)} width={1012} height={888} sizes="(max-width: 760px) 100vw, 43vw" priority />
          </figure>
        </div>
      </section>

      <section className="clinic-shell clinic-section clinic-training" aria-labelledby="training-title">
        <div>
          <h2 id="training-title">{t("Medical training")}</h2>
        </div>
        <dl className="clinic-qualification-list" data-clinic-sequence>
          {credentials.map(([degree, institution]) => (
            <div key={t(degree)}><dt>{t(degree)}</dt><dd>{t(institution)}</dd></div>
          ))}
        </dl>
      </section>

      <section className="clinic-care-band" aria-labelledby="care-approach-title">
        <div className="clinic-shell clinic-care-band-grid">
          <h2 id="care-approach-title">{t("How Dr. Kirupakaran approaches pain")}</h2>
          <p className="clinic-lead">{t("He asks what the pain makes harder, reviews what you’ve already tried and talks through options for treatment or symptom relief.")}</p>
        </div>
      </section>

      <section className="clinic-shell clinic-section clinic-visit" aria-labelledby="clinic-gallery-title">
        <figure className="clinic-editorial-photo" data-clinic-reveal>
          <Image src="/images/clinic-gallery/salem-clinic-exterior.webp" alt={t("Salem Pain Clinic in Swarnapuri")} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 55vw" />
        </figure>
        <div>
          <h2 id="clinic-gallery-title">{t("A clinic dedicated to pain care.")}</h2>
          <p className="clinic-lead">{t("Based in Swarnapuri, Salem.")}</p>
          <p>{t("The clinic provides care for back, neck and joint pain, nerve pain, pain after surgery and cancer-related pain. Palliative care supports comfort and quality of life for people with serious illness and their families.")}</p>
          <Link className="clinic-about-next" href={localizedPath('/services', language)}>
            {t("Explore treatments")} <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
