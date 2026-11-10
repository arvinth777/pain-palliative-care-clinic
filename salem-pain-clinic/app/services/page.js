import { getLanguage } from '@/lib/server-language';
import Image from 'next/image';
import { ArrowDownRight } from 'lucide-react';

const services = [
  {
    id: 'chronic-pain', title: 'Persistent pain', image: 'back-clinical.webp',
    description: 'Care for long-term back, neck, joint and muscle pain, with attention to movement, sleep and daily activities.',
    details: ['Back and spinal pain', 'Neck and shoulder pain', 'Arthritis and joint pain', 'Headaches, migraine and fibromyalgia'],
    approach: 'Treatment may include medication review, activity and lifestyle guidance, physical therapy coordination and a procedure where appropriate.',
  },
  {
    id: 'neuropathic', title: 'Nerve pain & sciatica', image: 'sciatica-clinical.webp',
    description: 'Assessment of nerve-related pain, including sciatica, diabetic neuropathy, trigeminal neuralgia and complex regional pain syndrome.',
    details: ['A review of your symptoms and medical history', 'Medication options suited to the condition', 'Consideration of nerve blocks or other interventions'],
    approach: 'The plan depends on the type of nerve pain, your other health conditions and your response to treatment.',
  },
  {
    id: 'post-surgical', title: 'Pain after surgery', image: 'knee-clinical.webp',
    description: 'Support for pain during recovery and pain that persists after an operation.',
    details: ['Review of the surgery and recovery so far', 'Medication review and pain management', 'Monitoring symptoms and coordinating ongoing care'],
    approach: 'Care is planned around the operation, your symptoms and your recovery needs.',
  },
];

const treatmentLinks = [
  ['chronic-pain', 'Persistent pain'],
  ['neuropathic', 'Nerve pain & sciatica'],
  ['post-surgical', 'Pain after surgery'],
  ['interventional', 'Image-guided procedures'],
  ['cancer-pain', 'Cancer-related pain'],
  ['palliative', 'Palliative care'],
];

export default async function Services() {
  const { t } = await getLanguage();
  return (
    <div className="clinic-page clinic-treatments-page">
      <section className="clinic-route-hero clinic-hero">
        <div className="clinic-shell clinic-route-split clinic-treatment-intro">
          <div>
            <span className="clinic-route-kicker">{t("Treatments")}</span>
            <h1>{t("Treatment for persistent pain")}</h1>
            <p>{t("Explore care for back and joint pain, nerve pain and pain after surgery, as well as support during cancer treatment or serious illness.")}</p>
          </div>
          <nav className="clinic-treatment-nav" id="treatment-directory" aria-label={t("Explore treatments")}>
            <ol data-clinic-sequence>
              {treatmentLinks.map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                    {t(label)}
                    <ArrowDownRight size={18} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <div className="clinic-shell clinic-treatment-stories">
        {services.map(service => (
          <section className="clinic-treatment-story" id={service.id} key={service.id} aria-labelledby={`${service.id}-title`}>
            <figure className="clinic-editorial-photo">
              <Image src={`/images/pain-carousel/${service.image}`} alt={t('{area} with the area of pain highlighted in red', { area: t(service.title) })} width={1200} height={659} sizes="(max-width: 760px) 100vw, 44vw" />
            </figure>
            <div id={`${service.id}-details`}>
              <h2 id={`${service.id}-title`}>{t(service.title)}</h2>
              <p className="clinic-lead">{t(service.description)}</p>
              <ul className="clinic-treatment-points" data-clinic-sequence>{service.details.map(detail => <li key={detail}>{t(detail)}</li>)}</ul>
              <p>{t(service.approach)}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="clinic-procedure-feature" id="interventional" aria-labelledby="procedure-title">
        <div className="clinic-shell clinic-section clinic-route-split">
          <div id="interventional-details">
            <h2 id="procedure-title">{t("Image-guided procedures")}</h2>
            <p className="clinic-lead">{t("Ultrasound gives the clinician a real-time view of the area being treated.")}</p>
            <p>{t("Depending on the condition, interventional options may include nerve blocks, joint injections, epidural injections, trigger point injections or radiofrequency treatment.")}</p>
            <p>{t("The doctor will explain the proposed procedure, expected benefits, risks and aftercare before you decide.")}</p>
          </div>
          <figure className="clinic-editorial-photo">
            <Image src="/images/clinic-gallery/ultrasound-care.webp" alt={t("An ultrasound probe positioned at a patient’s shoulder")} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 50vw" />
          </figure>
        </div>
      </section>

      <section className="clinic-shell clinic-section clinic-support-grid" aria-label={t("Care during serious illness")}>
        <article id="cancer-pain">
          <h2>{t("Cancer-related pain")}</h2>
          <p className="clinic-lead">{t("Pain relief as part of ongoing cancer care.")}</p>
          <p>{t("Care may include medication management, nerve blocks when appropriate, and support for treatment-related nerve pain. Planning takes account of the patient’s cancer treatment and other health needs.")}</p>
        </article>
        <article id="palliative">
          <div id="palliative-details">
            <h2>{t("Palliative care")}</h2>
            <p className="clinic-lead">{t("Comfort, dignity and support for the family.")}</p>
            <p>{t("Care focuses on symptoms and quality of life during serious illness. It can accompany ongoing treatment and includes discussion of care priorities, emotional support and coordination with other healthcare providers.")}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
