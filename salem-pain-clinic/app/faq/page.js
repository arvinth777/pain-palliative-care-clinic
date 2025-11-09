'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ChevronRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import GlareWrapper from '@/components/ui/glare-wrapper';

export default function FAQ() {
  const faqs = [
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
      question: 'Do I need a referral to schedule an appointment?',
      answer: 'we welcome both referred and self-referred patients. Please contact us to discuss your specific situation and insurance requirements.'
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
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit/debit cards, and digital payment methods. For specific insurance questions, please contact our office directly as coverage varies by plan and procedure.'
    },
    {
      question: 'What is palliative care?',
      answer: 'Palliative care is specialized medical care focused on providing relief from symptoms and stress of serious illness. The goal is to improve quality of life for both patient and family. It\'s appropriate at any age and any stage of serious illness, and can be provided alongside curative treatment.'
    },
    {
      question: 'Is palliative care only for end-of-life situations?',
      answer: 'No. Palliative care is appropriate at any stage of serious illness, from diagnosis onward. It can be provided alongside curative treatments and focuses on improving quality of life, managing symptoms, and providing support to patients and families.'
    },
    {
      question: 'What are your office hours?',
      answer: 'We are open Monday through Saturday from 10:00 AM to 1:00 PM. We are closed on Sundays. For urgent matters outside these hours, please leave a message and we\'ll respond as soon as possible.'
    },
    {
      question: 'Where is the clinic located?',
      answer: 'Salem Pain Clinic is located at 108, Omalur Main Rd, near ANS divyam, Swarnapuri Annexe, State Bank Colony, Swarnapuri, Salem, Tamil Nadu 636004. We\'re easily accessible from all parts of Salem with parking available on premises.'
    },
    {
      question: 'How can I contact the clinic?',
      answer: 'You can reach us by phone at +91 9095596999 or +91 9842798422 during office hours. You can also use the contact form on our website, and we\'ll respond within 24 hours.'
    }
  ];

  return (
    <>
      {/* Clean Professional Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              Frequently Asked Questions
            </h1>
            
            <p className="text-xl text-text-gray leading-relaxed max-w-3xl">
              Find answers to common questions about our pain management services, procedures, and clinic policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion - Clean Single Column */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <GlareWrapper
            glareColor="#2B5273"
            glareOpacity={0.3}
            glareSize={200}
            transitionDuration={500}
            borderRadius="1rem"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
              }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 overflow-hidden spotlight-card group"
            >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-200 last:border-0 relative z-10"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-primary transition-colors py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4 pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          </GlareWrapper>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gray-50">
        <motion.div 
          className="container-custom max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-12 md:p-16 text-center">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-lg hover:bg-primary-dark hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
              <a 
                href="tel:+919095596999" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-[#1A2533] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <motion.div 
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Start Your Treatment?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation today and take the first step towards a pain-free life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.google.com/maps/place/Salem+pain+and+palliative+care+clinic/@11.679437241888115,78.12624407549251,17z/data=!3m1!4b1!4m6!3m5!1s0x3babf1f588bc086f:0x77d230e475f745d9!8m2!3d11.679437241888115!4d78.12624407549251!16s%2Fg%2F11c5q5p5qg" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-5 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 transform transition-all duration-300 min-w-[280px]"
            >
              <MapPin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Get Directions
            </a>
            
            <a 
              href="tel:+919095596999" 
              className="group flex items-center px-8 py-5 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 transform transition-all duration-300 min-w-[280px]"
            >
              <Phone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Call Now
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
