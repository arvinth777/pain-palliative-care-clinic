'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, HelpCircle, Stethoscope, Syringe, CreditCard, Clock, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: 'About Our Services',
      icon: Stethoscope,
      faqs: [
        {
          question: 'What conditions do you treat?',
          answer: 'We specialize in chronic back and neck pain, arthritis, cancer pain, neuropathic pain (diabetic neuropathy, post-herpetic neuralgia), headaches and migraines, post-surgical pain, and fibromyalgia. We also provide comprehensive palliative care for patients with serious illnesses.'
        },
        {
          question: 'What makes Salem Pain Clinic different?',
          answer: 'Dr. Kirupakaran brings over 30 years of specialized experience combined with state-of-the-art ultrasound equipment for precision-guided procedures. Every treatment plan is personalized, and we address both physical and emotional aspects of pain with a compassionate, patient-centered approach.'
        },
        {
          question: 'Is pain management only about medication?',
          answer: 'No. While medications play a role, we also offer interventional procedures (nerve blocks, injections), physical therapy coordination, lifestyle modifications, and psychological support. Our goal is to use the most effective combination of treatments while minimizing medication dependence.'
        },
        {
          question: 'What is palliative care?',
          answer: 'Palliative care is specialized medical care focused on providing relief from symptoms and stress of serious illness. The goal is to improve quality of life for both patient and family. It\'s appropriate at any age and any stage of serious illness, and can be provided alongside curative treatment.'
        },
      ]
    },
    {
      title: 'Procedures & Treatments',
      icon: Syringe,
      faqs: [
        {
          question: 'What is ultrasound-guided pain management?',
          answer: 'Ultrasound-guided procedures use real-time imaging to visualize the exact location where medication needs to be delivered. This technology allows precise needle placement, reduced risk of complications, less pain during the procedure, and better treatment outcomes.'
        },
        {
          question: 'Are the procedures painful?',
          answer: 'Most interventional procedures are minimally invasive and performed with local anesthesia. While you may feel some pressure or mild discomfort, the ultrasound guidance makes procedures more comfortable by allowing precise needle placement. Many patients report procedures are much less painful than expected.'
        },
        {
          question: 'How many treatments will I need?',
          answer: 'Treatment duration varies based on your specific condition, severity, and response to therapy. Some patients experience significant relief after one or two procedures, while others may need a series of treatments. Dr. Kirupakaran will discuss a personalized treatment plan during your consultation.'
        },
        {
          question: 'What is the recovery time after a procedure?',
          answer: 'Most procedures are same-day outpatient treatments with minimal recovery time. You may experience some soreness at the injection site for 1-2 days. Most patients can return to normal activities within 24-48 hours. Specific recovery instructions will be provided based on your procedure.'
        },
      ]
    },
    {
      title: 'Appointments & Visits',
      icon: Clock,
      faqs: [
        {
          question: 'Do I need a referral to schedule an appointment?',
          answer: 'We welcome both referred and self-referred patients. Please contact us to discuss your specific situation and insurance requirements.'
        },
        {
          question: 'How long is a typical consultation?',
          answer: 'Initial consultations typically last 30-45 minutes for thorough assessment, medical history review, physical examination, and treatment planning. Follow-up visits are usually 15-20 minutes, though complex cases may require more time.'
        },
        {
          question: 'What should I bring to my first appointment?',
          answer: 'Please bring: (1) Valid ID and insurance information, (2) List of current medications with dosages, (3) Previous medical records related to your pain condition, (4) Any imaging reports (X-rays, MRIs, CT scans), (5) List of questions or concerns you want to discuss.'
        },
        {
          question: 'What are your office hours?',
          answer: 'We are open Monday through Saturday from 10:00 AM to 1:00 PM. We are closed on Sundays. For urgent matters outside these hours, please leave a message and we\'ll respond as soon as possible.'
        },
      ]
    },
    {
      title: 'Payment & Location',
      icon: CreditCard,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept cash, credit/debit cards, and digital payment methods. For specific insurance questions, please contact our office directly as coverage varies by plan and procedure.'
        },
        {
          question: 'Where is the clinic located?',
          answer: 'Salem Pain Clinic is located at 108, Omalur Main Rd, near ANS divyam, Swarnapuri Annexe, State Bank Colony, Swarnapuri, Salem, Tamil Nadu 636004. We\'re easily accessible from all parts of Salem with parking available on premises.'
        },
        {
          question: 'How can I contact the clinic?',
          answer: 'You can reach us by phone at +91 9095596999 or +91 9842798422 during office hours. You can also use the contact form on our website, and we\'ll respond within 24 hours.'
        },
      ]
    },
  ];

  const toggleFaq = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-[#0a2540] pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl" />
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Got Questions?
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed px-4 md:px-0">
              Find answers to common questions about our pain management services, procedures, and clinic policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Category Header */}
                <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{category.title}</h2>
                  </div>
                </div>

                {/* FAQs */}
                <div className="divide-y divide-gray-100">
                  {category.faqs.map((faq, faqIndex) => {
                    const isOpen = openIndex === `${categoryIndex}-${faqIndex}`;
                    return (
                      <div key={faqIndex} className="group">
                        <button
                          onClick={() => toggleFaq(categoryIndex, faqIndex)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                          <ChevronDown 
                            className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <p className="px-6 pb-4 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-white">
        <motion.div 
          className="container-custom max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary via-primary-dark to-blue-900 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <HelpCircle className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 h-14 px-8 rounded-full font-semibold transition-all shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                  Contact Us
                </Link>
                <a 
                  href="tel:+919095596999" 
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 h-14 px-8 rounded-full font-semibold transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
