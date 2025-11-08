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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-4 tracking-tight">
            Why Choose Salem Pain Clinic?
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Your path to lasting pain relief begins with trusted expertise and compassionate care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-subtle to-primary/5 aspect-[4/3]">
              {/* 
                TO ADD YOUR IMAGE:
                1. Place your image in /public/images/ folder (e.g., clinic-equipment.jpg)
                2. Uncomment the Image component below and comment out the placeholder
                3. Update the src path to match your image filename
              */}
              
              {/* Real Image (Uncomment when ready) */}
              {/* <Image 
                src="/images/clinic-equipment.jpg"
                alt="Advanced ultrasound equipment at Salem Pain Clinic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              /> */}
              
              {/* Placeholder (Remove when you add real image) */}
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-12">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-primary font-semibold text-lg">Advanced Medical Technology</p>
                  <p className="text-text-gray text-sm mt-2">State-of-the-art ultrasound equipment</p>
                  <p className="text-xs text-gray-400 mt-4">
                    📸 Add your image to /public/images/ and uncomment the Image component above
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="text-lg text-text-gray leading-relaxed">
                    {reason}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8 p-6 bg-primary-subtle rounded-xl border border-primary/10"
            >
              <p className="text-base text-primary font-medium italic">
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
