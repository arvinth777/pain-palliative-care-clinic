export const metadata = {
  title: 'Privacy Policy | Salem Pain Clinic',
  description:
    'Learn how Salem Pain Clinic collects, uses, and protects patient information in alignment with Indian data protection laws.'
};

const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';
const LAST_UPDATED = 'November 7, 2025';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-blue-900 py-32 text-white">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent animate-pulse-slow" />
        <div className="container-custom relative z-10 text-center">
          <p className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-white/90">
            Privacy Policy
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Your Trust. Our Responsibility.
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">
            We safeguard every detail you share with {DOCTOR_FULL_NAME} and the Salem Pain Clinic team.
          </p>
          <p className="mt-8 text-sm text-blue-200">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur">
              <h2 className="text-2xl font-semibold text-primary">1. Information We Collect</h2>
              <p className="mt-4 text-text-gray">
                We collect personal information that you provide directly (name, contact details, clinical history),
                diagnostic details shared during consultations, and limited technical data collected through our
                website (device type, browser, anonymised analytics). We do not collect unnecessary personal data
                and never sell your information to third parties.
              </p>
            </div>

            <div className="rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur">
              <h2 className="text-2xl font-semibold text-primary">2. How We Use Your Information</h2>
              <ul className="mt-4 space-y-3 text-text-gray">
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>Delivering pain management and palliative care tailored to your medical needs.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>Coordinating investigations, procedures, and follow-up schedules.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>Maintaining accurate clinical records in compliance with the Clinical Establishments Act.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>Responding to your enquiries and providing appointment reminders when requested.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur">
              <h2 className="text-2xl font-semibold text-primary">3. Data Storage & Security</h2>
              <p className="mt-4 text-text-gray">
                Clinical data is stored within secure, access-controlled systems. Only authorised medical staff have
                access to your records. We employ encryption, audit logging, and routine security reviews to prevent
                unauthorised access, disclosure, alteration, or destruction of patient information.
              </p>
            </div>

            <div className="rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur">
              <h2 className="text-2xl font-semibold text-primary">4. Data Retention</h2>
              <p className="mt-4 text-text-gray">
                Medical records are retained for the minimum duration required under Indian medical record retention
                guidelines. Non-clinical enquiries received via the website are retained for up to 12 months for
                quality assurance, unless you request earlier deletion.
              </p>
            </div>

            <div className="rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur">
              <h2 className="text-2xl font-semibold text-primary">5. Sharing of Information</h2>
              <p className="mt-4 text-text-gray">
                We only share patient information with referring physicians, diagnostic partners, or hospitals when
                you authorise us, or when required by law. All partners who support our care delivery are bound by
                confidentiality agreements and professional ethics.
              </p>
            </div>

            <div className="rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur">
              <h2 className="text-2xl font-semibold text-primary">6. Your Rights</h2>
              <p className="mt-4 text-text-gray">
                You may request access to your clinical records, ask for corrections, or withdraw consent for
                communication at any time. Submit your request at the clinic or email
                <a className="ml-1 font-semibold text-primary hover:text-primary-dark" href="mailto:care@salempainclinic.com">
                  care@salempainclinic.com
                </a>
                . We will respond within 7 working days.
              </p>
            </div>

            <div className="rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur">
              <h2 className="text-2xl font-semibold text-primary">7. Children&apos;s Privacy</h2>
              <p className="mt-4 text-text-gray">
                We treat paediatric patient information with the highest level of confidentiality and obtain consent
                from parents or legal guardians before collecting or using a child&apos;s information.
              </p>
            </div>

            <div className="rounded-3xl bg-primary/5 p-8 shadow-xl ring-1 ring-primary/20">
              <h2 className="text-2xl font-semibold text-primary">Contact</h2>
              <p className="mt-4 text-text-gray">
                For privacy-related questions, please write to the Clinic Administrator,<br />
                Salem Pain Clinic, 108 Omalur Main Road, Swarnapuri, Salem 636004, Tamil Nadu, India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
