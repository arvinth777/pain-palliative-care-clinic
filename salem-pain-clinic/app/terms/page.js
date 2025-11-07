export const metadata = {
  title: 'Terms of Service | Salem Pain Clinic',
  description:
    'Understand the terms governing appointments, website usage, and medical services provided by Salem Pain Clinic.'
};

const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';
const LAST_UPDATED = 'November 7, 2025';

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-blue-900 py-32 text-white">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent animate-pulse-slow" />
        <div className="container-custom relative z-10 text-center">
          <p className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-white/90">
            Terms of Service
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Service Commitments & Patient Responsibilities
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">
            These terms ensure ethical, transparent care for every patient under {DOCTOR_FULL_NAME}.
          </p>
          <p className="mt-8 text-sm text-blue-200">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <article className="rounded-3xl bg-cream-50 p-8 shadow-xl ring-1 ring-primary/10">
                <h2 className="text-2xl font-semibold text-primary">1. Medical Services</h2>
                <p className="mt-4 text-text-gray">
                  Clinical consultations, procedures, and follow-up care are provided by qualified medical
                  professionals led by {DOCTOR_FULL_NAME}. Treatment plans are individualised and may vary from the
                  descriptions listed on this website. Communications through this website do not constitute a doctor-patient
                  relationship until an appointment is confirmed and the patient is registered at the clinic.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">2. Appointments & Cancellations</h2>
                <ul className="mt-4 space-y-3 text-text-gray">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Appointments are scheduled via phone or in person. Online requests are confirmed by our team.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Kindly inform us at least 24 hours in advance to reschedule or cancel.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Emergency cases are prioritised; walk-in patients will be accommodated subject to availability.</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">3. Payments & Refunds</h2>
                <p className="mt-4 text-text-gray">
                  Consultation fees, investigations, and procedure charges are communicated before services are provided.
                  Payments are collected at the clinic. Refunds are processed when services are cancelled by Salem Pain
                  Clinic or when advance payments remain unused. Receipts are issued for all transactions.
                </p>
              </article>
            </div>

            <div className="space-y-8">
              <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">4. Website Usage</h2>
                <p className="mt-4 text-text-gray">
                  The content on this website is for educational purposes. It should not substitute medical advice from a
                  licensed practitioner. By accessing this site you agree not to copy, redistribute, or misuse the text,
                  images, or branding without written permission from Salem Pain Clinic.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">5. Patient Responsibilities</h2>
                <p className="mt-4 text-text-gray">
                  Patients agree to provide accurate medical history, disclose ongoing medications, and follow treatment
                  protocols as advised. Please inform us immediately if you experience any unexpected reactions after a
                  procedure or if your condition worsens.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
                <h2 className="text-2xl font-semibold text-primary">6. Limitation of Liability</h2>
                <p className="mt-4 text-text-gray">
                  Salem Pain Clinic is not liable for indirect, incidental, or consequential damages arising from website
                  usage or delayed appointments. Nothing in these terms limits liability arising from medical negligence
                  proven under applicable Indian law.
                </p>
              </article>

              <article className="rounded-3xl bg-primary/5 p-8 shadow-xl ring-1 ring-primary/20">
                <h2 className="text-2xl font-semibold text-primary">7. Contact & Dispute Resolution</h2>
                <p className="mt-4 text-text-gray">
                  Concerns relating to these terms may be addressed to the Clinic Administrator, Salem Pain Clinic,
                  108 Omalur Main Road, Swarnapuri, Salem 636004, Tamil Nadu, India. We aim to resolve matters amicably
                  within 15 working days.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
