'use client';
import { motion } from 'framer-motion';
import { Award, AwardIcon, Microscope } from 'lucide-react';

export default function TrustBar() {
  const trustPoints = [
    {
      icon: Award,
      text: 'Chronic Pain Management'
    },
    {
      icon:  AwardIcon,
      text: 'Palliative Care'
    },
    {
      icon: Award,
      text: 'Diabetes Care'
    }
  ];

  return (
    <section className="py-12 bg-white border-y border-[#E9ECEF]">
      <div className="container-custom">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <point.icon className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-base md:text-lg font-medium text-primary">
                {point.text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
