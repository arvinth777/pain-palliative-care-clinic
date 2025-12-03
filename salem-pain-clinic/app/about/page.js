'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  CheckCircle, 
  Heart, 
  Zap,
  Phone,
  MapPin,
  Award,
  Camera
} from 'lucide-react';
import Link from 'next/link';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export default function About() {
  const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';
  
  // Medical background carousel images
  const medicalBgImages = [
    { src: '/images/WhatsApp Image 2025-11-30 at 20.40.39.jpeg', alt: 'Medical Background 1' },
    { src: '/images/WhatsApp Image 2025-11-30 at 20.40.11.jpeg', alt: 'Medical Background 2' },
    { src: '/images/WhatsApp Image 2025-11-30 at 20.39.34.jpeg', alt: 'Medical Background 3' },
  ];

  const [currentMedicalBgIndex, setCurrentMedicalBgIndex] = useState(0);

  // Auto-advance medical background carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMedicalBgIndex((prev) => (prev + 1) % medicalBgImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [medicalBgImages.length]);

  // Local gallery images
  const galleryImages = [
    { src: '/images/clinic_exterior_1.jpg' },
    { src: '/images/procedure-1.png' },
    { src: '/images/procedure-2.png' },
    { src: '/images/procedure-5.png' },
    { src: '/images/IMG_7782.jpg' },
    { src: '/images/IMG_7783.jpg' },
    { src: '/images/IMG_7783(1).jpg' },
    { src: '/images/Gemini_Generated_Image_w22939w22939w229.png' },
    { src: '/images/Screenshot 2025-12-03 at 18.01.28.png' },
  ];

  const credentials = [
    { 
      degree: 'MBBS', 
      institution: 'Coimbatore Medical College',
      description: 'Foundation in medical sciences'
    },
    { 
      degree: 'MD (Anaesthesiology)', 
      institution: 'Christian Medical College, Vellore',
      description: 'Specialized training from India\'s premier medical institution'
    },
    { 
      degree: 'DA (Anaesthesia)', 
      institution: 'Madras Medical College',
      description: 'Advanced certification in anaesthesia'
    },
    {
      degree: 'DFID(Diabetology)', 
      institution: 'Christian Medical College, Vellore',
      description: 'Day-to-day management of diabetes mellitus'
    }
  ];

  const expertise = [
    'Interventional Pain Management',
    'Ultrasound-Guided Procedures',
    'Cancer Pain Management',
    'Palliative Care',
    'Chronic Pain Syndromes',
    'Post-Surgical Pain Management',
    'Neuropathic Pain Treatment',
    'Spinal Interventions'
  ];

  return (
    <div className="relative">
      {/* Hero Section with Animated Gradient Background */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(43, 82, 115)"
          gradientBackgroundEnd="rgb(15, 35, 60)"
          firstColor="43, 82, 115"
          secondColor="74, 144, 226"
          thirdColor="100, 180, 255"
          fourthColor="30, 60, 100"
          fifthColor="43, 82, 115"
          pointerColor="60, 120, 200"
          size="80%"
          blendingValue="hard-light"
          interactive={true}
          containerClassName="absolute inset-0"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        </BackgroundGradientAnimation>
        
        {/* Hero Content */}
        <div className="relative z-20 container-custom pt-24 md:pt-32 pb-12 md:pb-20 flex items-center min-h-[60vh] md:min-h-[70vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* Left Column - Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                Leading Pain Management Specialist
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight drop-shadow-2xl">
                About {DOCTOR_FULL_NAME}
              </h1>
              
              <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-4 md:mb-6 font-medium drop-shadow-lg">
                For over 30 years, Dr. Kirupakaran has been dedicated to alleviating suffering and 
                restoring quality of life to patients experiencing chronic and acute pain conditions.
              </p>

              <p className="text-lg text-white/90 leading-relaxed drop-shadow-md">
                A proud alumnus of the prestigious Christian Medical College (CMC) Vellore, 
                Dr. Kirupakaran combines world-class medical expertise with genuine compassion, 
                making him one of Salem&apos;s most trusted pain management specialists.
              </p>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full aspect-square max-w-xs md:max-w-md rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 mx-auto lg:mx-0">
                <Image
                  src="/images/dr-kirupakaran.jpg"
                  alt="Dr. G.P. Kirupakaran"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section - Clean White */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Medical Background Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] relative">
                  {medicalBgImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: index === currentMedicalBgIndex ? 1 : 0 }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0"
                      style={{ zIndex: index === currentMedicalBgIndex ? 10 : 0 }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {medicalBgImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentMedicalBgIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentMedicalBgIndex 
                            ? 'bg-white w-6' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 border border-gray-200 text-gray-700 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 text-primary" />
                Medical Background
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                A Lifetime Dedicated to <span className="text-primary">Healing</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Dr. Kirupakaran&apos;s approach goes beyond treating symptoms—he partners with each 
                  patient to understand their unique pain journey and craft personalized treatment plans 
                  that address both physical and emotional aspects of pain management.
                </p>
                
                <p>
                  Specializing in interventional pain management and palliative care, Dr. Kirupakaran has 
                  become a trusted name across Tamil Nadu. His commitment to staying at the forefront of 
                  medical innovation is evident in his adoption of cutting-edge ultrasound-guided procedures, 
                  ensuring precision, safety, and superior outcomes for every patient.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary rounded-r-xl p-6">
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  &ldquo;Every patient who walks through our doors is not just a medical case, but a person 
                  deserving of compassion, respect, and the highest quality of care.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="w-4 h-4" />
              Elite Medical Training
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Medical Education & <span className="text-primary">Qualifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              World-class training from India&apos;s most prestigious medical institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group bg-white border-2 border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark shadow-lg flex items-center justify-center text-white flex-shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {cred.degree}
                    </h3>
                    <p className="text-sm font-semibold text-primary">{cred.institution}</p>
                  </div>
                </div>
                  
                <p className="text-sm text-gray-600 leading-relaxed">{cred.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-lg">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Areas of <span className="text-primary">Expertise</span></h3>
            </div>

            <p className="text-lg text-gray-600 mb-8 font-medium">
              Comprehensive pain management solutions using advanced techniques and compassionate care
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 group border border-transparent hover:border-primary/20"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Camera className="w-4 h-4" />
              Our Facilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Clinic & <span className="text-primary">Advanced Equipment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at our state-of-the-art facilities and medical equipment
            </p>
          </motion.div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary via-primary-dark to-blue-900 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-2xl">
                  Ready to Start Your Journey to Pain Relief?
                </h2>
                <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
                  Schedule a consultation with {DOCTOR_FULL_NAME} and take the first step towards a pain-free life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-white/90 h-14 px-8 rounded-full font-semibold transition-all shadow-lg"
                  >
                    <MapPin className="w-5 h-5" />
                    Book Appointment
                  </Link>
                  
                  <a 
                    href="tel:+919842798422" 
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 h-14 px-8 rounded-full font-semibold transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    +91 98427 98422
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
