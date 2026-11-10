import { getLanguage } from '@/lib/server-language';
import { pageMetadata } from '@/lib/seo';
import { PageSchema } from '@/components/StructuredData';
import { DOCTOR_FULL_NAME, DOCTOR_DEGREES } from '@/lib/constants';
const LAST_UPDATED = 'November 7, 2025';

export default async function PrivacyPolicyPage() {
  const { t } = await getLanguage();
  return (
    <>
      <PageSchema path="/privacy" />
      <section className="clinic-route-hero clinic-policy-intro">

        <div className="container-custom relative z-10">

          <h1>{t("Privacy Policy")}</h1>
          <p className="mt-6 text-lg md:text-xl">{t("We safeguard every detail you share with {doctor}, {degrees} and the Salem Pain Clinic team.", { doctor: t(DOCTOR_FULL_NAME), degrees: DOCTOR_DEGREES })}</p>
          <p className="mt-8 text-sm">{t("Last updated:")} {t(LAST_UPDATED)}</p>
        </div>
      </section>

      <section className="section-padding clinic-policy">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="rounded-sm bg-white/90 p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("1. Information We Collect")}</h2>
              <p className="mt-4 text-text-gray">{t("We collect personal information that you provide directly (name, contact details, clinical history), diagnostic details shared during consultations, and limited technical data collected through our website (device type, browser, anonymised analytics). We do not collect unnecessary personal data and never sell your information to third parties.")}</p>
            </div>

            <div className="rounded-sm bg-white/90 p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("2. How We Use Your Information")}</h2>
              <ul className="mt-4 space-y-3 text-text-gray">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{t("Delivering pain management and palliative care tailored to your medical needs.")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{t("Coordinating investigations, procedures, and follow-up schedules.")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{t("Maintaining accurate clinical records in compliance with the Clinical Establishments Act.")}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>{t("Responding to your enquiries and providing appointment reminders when requested.")}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-sm bg-white/90 p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("3. Data Storage & Security")}</h2>
              <p className="mt-4 text-text-gray">{t("Contact form submissions are sent to the clinic through Resend and may also be forwarded to a configured service. The chatbot answers common clinic questions directly. Other messages may be sent to Google Gemini to generate a response. Please avoid sharing sensitive medical information through the chatbot. Contact the clinic for details about its records and security practices.")}</p>
            </div>

            <div className="rounded-sm bg-white/90 p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("4. Data Retention")}</h2>
              <p className="mt-4 text-text-gray">{t("Please contact the clinic for information about how long records and website enquiries are retained.")}</p>
            </div>

            <div className="rounded-sm bg-white/90 p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("5. Sharing of Information")}</h2>
              <p className="mt-4 text-text-gray">{t("The website uses service providers to process contact messages, chatbot requests, and website analytics. Please contact the clinic for details about other sharing of patient information.")}</p>
            </div>

            <div className="rounded-sm bg-white/90 p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("6. Your Rights")}</h2>
              <p className="mt-4 text-text-gray">{t("You may request access to your clinical records, ask for corrections, or withdraw consent for communication at any time. Submit your request at the clinic or email")}<a className="ml-1 font-semibold text-primary hover:text-primary-dark" href="mailto:care@thesalempainclinic.com">
                  care@thesalempainclinic.com
                </a>{t(". We will respond within 7 working days.")}</p>
            </div>

            <div className="rounded-sm bg-white/90 p-8 ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">{t("7. Children's Privacy")}</h2>
              <p className="mt-4 text-text-gray">{t("We treat paediatric patient information with the highest level of confidentiality and obtain consent from parents or legal guardians before collecting or using a child's information.")}</p>
            </div>

            <div className="rounded-sm bg-primary/5 p-8 ring-1 ring-primary/20">
              <h2 className="text-2xl font-semibold text-primary">{t("Contact")}</h2>
              <p className="mt-4 text-text-gray">{t("For privacy-related questions, please write to the Clinic Administrator,")}<br />{t("Salem Pain Clinic, 108 Omalur Main Road, Swarnapuri, Salem 636004, Tamil Nadu, India.")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function generateMetadata() {
  return pageMetadata('/privacy');
}
