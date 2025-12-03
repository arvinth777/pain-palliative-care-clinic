'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function WhyChooseUs() {
  const reasons = [
    'CMC Vellore-trained expertise with 30+ years of clinical experience',
    'Advanced ultrasound-guided procedures for precision and safety',
    'Personalized treatment plans tailored to your unique needs',
    'Compassionate, patient-centered approach to pain management'
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-3 tracking-tight">
            Why Choose Salem Pain Clinic?
          </h2>
          <p className="text-base text-text-gray max-w-2xl mx-auto">
            Your path to lasting pain relief begins with trusted expertise and compassionate care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image
                src="/images/procedure-2.png"
                alt="Advanced ultrasound equipment at Salem Pain Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <p className="text-base text-text-gray leading-relaxed">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-6 p-5 bg-white rounded-xl border border-primary/10 shadow-sm"
            >
              <p className="text-sm text-primary font-medium italic leading-relaxed">
                &ldquo;Every patient deserves dignified, effective pain management. Our mission is to restore quality of life through evidence-based care and genuine compassion.&rdquo;
              </p>
              <p className="text-sm text-primary-dark mt-2 font-semibold">
                — Dr. G.P. Kirupakaran
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
