export const metadata = {
  title: 'Medical Disclaimer | Salem Pain Clinic',
  description:
    'Understand the scope and limitations of medical information provided by Salem Pain Clinic.'
};

const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';
const LAST_UPDATED = 'November 7, 2025';

export default function DisclaimerPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-blue-900 py-32 text-white">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/50 to-transparent animate-pulse-slow" />
        <div className="container-custom relative z-10 text-center">
          <p className="inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-white/90">
            Medical Disclaimer
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Accurate Information, Responsible Use
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl">
            Please read this disclaimer carefully before relying on content published by {DOCTOR_FULL_NAME} and the Salem Pain Clinic team.
          </p>
          <p className="mt-8 text-sm text-blue-200">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-b from-white to-cream-50">
        <div className="container-custom">
          <div className="mx-auto max-w-5xl space-y-8">
            <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">1. Informational Purpose Only</h2>
              <p className="mt-4 text-text-gray">
                All medical content, articles, and service descriptions on this website are intended for general education
                and awareness. They are not comprehensive medical advice. Every patient requires an individual
                examination, diagnosis, and treatment plan formulated by a qualified medical professional.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">2. No Emergency Response</h2>
              <p className="mt-4 text-text-gray">
                The website, contact form, and email are not monitored for emergency medical situations. If you or someone
                nearby is experiencing a medical emergency, please call your local emergency number or visit the nearest
                hospital immediately.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">3. External Links</h2>
              <p className="mt-4 text-text-gray">
                External websites or resources referenced on this site are provided for convenience. Salem Pain Clinic has
                no control over the content, privacy practices, or accuracy of information on third-party websites and
                assumes no responsibility for them.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">4. Patient Outcomes</h2>
              <p className="mt-4 text-text-gray">
                Pain relief outcomes vary for each individual based on medical history, diagnosis, and adherence to the
                recommended treatment plan. Testimonials or case studies are illustrative and cannot be interpreted as
                guarantees of similar results.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-100">
              <h2 className="text-2xl font-semibold text-primary">5. Limitation of Liability</h2>
              <p className="mt-4 text-text-gray">
                Salem Pain Clinic, its doctors, and staff are not liable for any decision taken based solely on the
                information available on this website. Always consult directly with a qualified healthcare provider for
                personalised assessment before starting, changing, or stopping treatment.
              </p>
            </article>

            <article className="rounded-3xl bg-primary/5 p-8 shadow-xl ring-1 ring-primary/20">
              <h2 className="text-2xl font-semibold text-primary">Need Clarification?</h2>
              <p className="mt-4 text-text-gray">
                Please schedule an appointment with {DOCTOR_FULL_NAME} or call +91 9842798422 / +91 9095596999 for
                guidance tailored to your specific condition. We are happy to explain any aspect of our services before
                you proceed.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
