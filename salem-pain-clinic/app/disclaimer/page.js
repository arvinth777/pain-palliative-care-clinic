import { getLanguage } from '@/lib/server-language';
import { pageMetadata } from '@/lib/seo';
import { PageSchema } from '@/components/StructuredData';
import { DOCTOR_FULL_NAME, DOCTOR_DEGREES } from '@/lib/constants';
const LAST_UPDATED = 'November 7, 2025';

export default async function DisclaimerPage() {
  const { t } = await getLanguage();
  return (
    <>
      <PageSchema path="/disclaimer" />
      <section className="clinic-route-hero clinic-policy-intro">

        <div className="container-custom relative z-10">

          <h1>{t("Medical Disclaimer")}</h1>
          <p className="mt-6 text-lg md:text-xl">{t("Please read this disclaimer carefully before relying on content published by {doctor}, {degrees} and the Salem Pain Clinic team.", { doctor: t(DOCTOR_FULL_NAME), degrees: DOCTOR_DEGREES })}</p>
          <p className="mt-8 text-sm">{t("Last updated:")} {t(LAST_UPDATED)}</p>
        </div>
      </section>

      <section className="section-padding clinic-policy">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl space-y-8">
            <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("1. Informational Purpose Only")}</h2>
              <p className="mt-4 text-text-gray">{t("All medical content, articles, and service descriptions on this website are intended for general education and awareness. They are not comprehensive medical advice. Every patient requires an individual examination, diagnosis, and treatment plan formulated by a qualified medical professional.")}</p>
            </article>

            <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("2. No Emergency Response")}</h2>
              <p className="mt-4 text-text-gray">{t("The website, contact form, and email are not monitored for emergency medical situations. If you or someone nearby is experiencing a medical emergency, please call your local emergency number or visit the nearest hospital immediately.")}</p>
            </article>

            <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("3. External Links")}</h2>
              <p className="mt-4 text-text-gray">{t("External websites or resources referenced on this site are provided for convenience. Salem Pain Clinic has no control over the content, privacy practices, or accuracy of information on third-party websites and assumes no responsibility for them.")}</p>
            </article>

            <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("4. Patient Outcomes")}</h2>
              <p className="mt-4 text-text-gray">{t("Pain relief outcomes vary for each individual based on medical history, diagnosis, and adherence to the recommended treatment plan. Testimonials or case studies are illustrative and cannot be interpreted as guarantees of similar results.")}</p>
            </article>

            <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("5. Limitation of Liability")}</h2>
              <p className="mt-4 text-text-gray">{t("Salem Pain Clinic, its doctors, and staff are not liable for any decision taken based solely on the information available on this website. Always consult directly with a qualified healthcare provider for personalised assessment before starting, changing, or stopping treatment.")}</p>
            </article>

            <article className="rounded-sm bg-primary/5 p-8 ring-1 ring-primary/20">
              <h2 className="text-2xl font-semibold text-primary">{t("Need Clarification?")}</h2>
              <p className="mt-4 text-text-gray">{t("Please schedule an appointment with {doctor}, {degrees} or call +91 9842798422 / +91 9095596999 for guidance tailored to your specific condition. We are happy to explain any aspect of our services before you proceed.", { doctor: t(DOCTOR_FULL_NAME), degrees: DOCTOR_DEGREES })}
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export function generateMetadata() {
  return pageMetadata('/disclaimer');
}
