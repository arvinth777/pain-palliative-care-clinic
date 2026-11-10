import { getLanguage } from '@/lib/server-language';
import { pageMetadata } from '@/lib/seo';
import { PageSchema } from '@/components/StructuredData';
import { DOCTOR_FULL_NAME, DOCTOR_DEGREES } from '@/lib/constants';
const LAST_UPDATED = 'November 7, 2025';

export default async function TermsPage() {
  const { t } = await getLanguage();
  return (
    <>
      <PageSchema path="/terms" />
      <section className="clinic-route-hero clinic-policy-intro">

        <div className="container-custom relative z-10">

          <h1>{t("Terms of Service")}</h1>
          <p className="mt-6 text-lg md:text-xl">{t("These terms ensure ethical, transparent care for every patient under {doctor}, {degrees}.", { doctor: t(DOCTOR_FULL_NAME), degrees: DOCTOR_DEGREES })}</p>
          <p className="mt-8 text-sm">{t("Last updated:")} {t(LAST_UPDATED)}</p>
        </div>
      </section>

      <section className="section-padding clinic-policy">
        <div className="container-custom">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <article className="rounded-sm bg-secondary p-8 ring-1 ring-primary/10">
                <h2 className="text-2xl font-semibold text-primary">{t("1. Medical Services")}</h2>
                <p className="mt-4 text-text-gray">{t("Clinical consultations, procedures, and follow-up care are provided by qualified medical professionals led by {doctor}, {degrees}. Treatment plans are individualised and may vary from the descriptions listed on this website. Communications through this website do not constitute a doctor-patient relationship until an appointment is confirmed and the patient is registered at the clinic.", { doctor: t(DOCTOR_FULL_NAME), degrees: DOCTOR_DEGREES })}</p>
              </article>

              <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">{t("2. Appointments & Cancellations")}</h2>
                <ul className="mt-4 space-y-3 text-text-gray">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{t("Appointments are scheduled via phone or in person. Online requests are confirmed by our team.")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{t("Kindly inform us at least 24 hours in advance to reschedule or cancel.")}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{t("Emergency cases are prioritised; walk-in patients will be accommodated subject to availability.")}</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">{t("3. Payments & Refunds")}</h2>
                <p className="mt-4 text-text-gray">{t("Consultation fees, investigations, and procedure charges are communicated before services are provided. Payments are collected at the clinic. Refunds are processed when services are cancelled by Salem Pain Clinic or when advance payments remain unused. Receipts are issued for all transactions.")}</p>
              </article>
            </div>

            <div className="space-y-8">
              <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">{t("4. Website Usage")}</h2>
                <p className="mt-4 text-text-gray">{t("The content on this website is for educational purposes. It should not substitute medical advice from a licensed practitioner. By accessing this site you agree not to copy, redistribute, or misuse the text, images, or branding without written permission from Salem Pain Clinic.")}</p>
              </article>

              <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">{t("5. Patient Responsibilities")}</h2>
                <p className="mt-4 text-text-gray">{t("Patients agree to provide accurate medical history, disclose ongoing medications, and follow treatment protocols as advised. Please inform us immediately if you experience any unexpected reactions after a procedure or if your condition worsens.")}</p>
              </article>

              <article className="rounded-sm bg-white p-8 ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">{t("6. Limitation of Liability")}</h2>
                <p className="mt-4 text-text-gray">{t("Salem Pain Clinic is not liable for indirect, incidental, or consequential damages arising from website usage or delayed appointments. Nothing in these terms limits liability arising from medical negligence proven under applicable Indian law.")}</p>
              </article>

              <article className="rounded-sm bg-primary/5 p-8 ring-1 ring-primary/20">
                <h2 className="text-2xl font-semibold text-primary">{t("7. Contact & Dispute Resolution")}</h2>
                <p className="mt-4 text-text-gray">{t("Concerns relating to these terms may be addressed to the Clinic Administrator, Salem Pain Clinic, 108 Omalur Main Road, Swarnapuri, Salem 636004, Tamil Nadu, India. We aim to resolve matters amicably within 15 working days.")}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function generateMetadata() {
  return pageMetadata('/terms');
}
