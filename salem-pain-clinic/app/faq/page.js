'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { useState } from 'react';
import { ArrowRight, Phone, Stethoscope, Syringe, CreditCard, Clock, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { PHONE_PRIMARY } from '@/lib/constants';
import { faqCategories } from '@/lib/faq';

const icons = { Stethoscope, Syringe, CreditCard, Clock };
const categories = faqCategories.map(category => ({ ...category, icon: icons[category.icon] }));

export default function FAQ() {
  const { t, href: localHref } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const [animate, setAnimate] = useState(false);


  const toggleFaq = (categoryIndex, faqIndex, event) => {
    setAnimate(event.detail > 0);
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="clinic-page" data-motion={animate ? 'smooth' : 'instant'}>
      <section className="clinic-route-hero">
        <div className="clinic-shell clinic-route-split clinic-faq-intro">
          <div>
            <h1>{t("Frequently asked questions")}</h1>
            <p>{t("What we treat, what to expect, and what to bring when you visit.")}</p>
          </div>
          <nav className="clinic-faq-topics" aria-label={t("Question topics")}>
            {categories.map(category => (
              <a key={category.id} href={'#faq-topic-' + category.id}>
                <category.icon size={20} aria-hidden="true" />
                <span>{t(category.title)}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="clinic-shell clinic-section">
        <div className="clinic-faq-list">
            {categories.map((category, categoryIndex) => (
              <section key={category.id} id={'faq-topic-' + category.id} className="clinic-faq-category">
                <div className="clinic-faq-category-heading">
                  <category.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  <h2 className="text-xl font-semibold">{t(category.title)}</h2>
                </div>

                {/* FAQs */}
                <div className="clinic-faq-questions">
                  {category.faqs.map((faq, faqIndex) => {
                    const isOpen = openIndex === `${categoryIndex}-${faqIndex}`;
                    return (
                      <div key={faqIndex} className="clinic-faq-item">
                        <button
                          onClick={event => toggleFaq(categoryIndex, faqIndex, event)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-${categoryIndex}-${faqIndex}`}
                          type="button"
                        >
                          <span className="font-medium">{t(faq.question)}</span>
                          <ChevronDown size={20} aria-hidden="true" />
                        </button>
                        <div
                          id={`faq-${categoryIndex}-${faqIndex}`}
                          className="clinic-faq-answer"
                          aria-hidden={!isOpen}
                          inert={!isOpen}
                        >
                          <div><p>
                            {t(faq.answer)}
                          </p></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
        </div>
      </section>

      <section className="clinic-shell clinic-section clinic-route-end">
        <h2 className="clinic-secondary-title">{t("Still have a question?")}</h2>
        <div className="clinic-route-actions">
          <Link href={localHref('/contact')} className="clinic-button">{t("Contact the clinic")} <ArrowRight size={18} aria-hidden="true" /></Link>
          <a className="clinic-text-link" href={'tel:' + PHONE_PRIMARY}><Phone size={18} aria-hidden="true" /> {t("Call the clinic")}</a>
        </div>
      </section>
    </div>
  );
}
