'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  CheckCircle, 
  Heart, 
  Zap, 
  Phone,
  MapPin,
  Award
} from 'lucide-react';
import Link from 'next/link';
import GlareWrapper from '@/components/ui/glare-wrapper';
import { urlFor } from '@/lib/sanity';
import PhotoCarousel from '@/components/PhotoCarousel';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';

export default function About() {
  const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';
  
  // State for Sanity CMS data
  const [doctorData, setDoctorData] = useState(null);
  const [clinicInfo, setClinicInfo] = useState(null);
  const [websiteImages, setWebsiteImages] = useState(null);
  
  // Fetch data from Sanity on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        // Use internal API route instead of direct Sanity client (avoids CORS)
        const response = await fetch('/api/sanity');
        const data = await response.json();
        
        setDoctorData(data.doctor);
        setClinicInfo(data.clinic);
        setWebsiteImages(data.images);
      } catch (error) {
        console.error('Error fetching Sanity data:', error);
      }
    }
    fetchData();
  }, []);

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
    <div className="relative bg-gradient-to-br from-primary via-primary-dark to-[#0A0F14]">
      {/* Hero Section with Animated Gradient Background - extends full page */}
      <section className="relative min-h-screen overflow-hidden">
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
          style={{ willChange: 'transform' }}
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        </BackgroundGradientAnimation>
        
        {/* Hero Content */}
        <div className="relative z-20 container-custom pt-32 pb-20 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                About {DOCTOR_FULL_NAME}
              </h1>
              
              <p className="text-xl text-white/95 leading-relaxed mb-6 font-medium drop-shadow-lg">
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
              {websiteImages?.aboutHeroImage ? (
                <div className="relative w-full aspect-square max-w-lg rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img
                    src={urlFor(websiteImages.aboutHeroImage).url()}
                    alt="Dr. G.P. Kirupakaran"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full aspect-square max-w-lg rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-white/20 shadow-2xl flex items-center justify-center">
                  <div className="text-center text-white/60 p-8">
                    <Heart className="w-16 h-16 mx-auto mb-4 opacity-40" />
                    <p className="text-lg font-medium">About Hero Image</p>
                    <p className="text-sm mt-2">Upload in Sanity CMS</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Mission Statement - Static gradient for better performance */}
        <div className="relative z-20 py-20">
          {/* Static gradient background - much better performance than animated */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2B5273] via-[#1F3C5A] to-[#0F233C]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
          </div>
          
          <div className="relative z-20 container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-12"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
                Our Approach to Care
              </h2>
              
              <p className="text-lg text-white/90 leading-relaxed text-center max-w-3xl mx-auto mb-8 drop-shadow-md">
                At Salem Pain Clinic, we believe in treating every patient with compassion and dignity. 
                Our personalized approach combines advanced medical techniques with genuine care to help 
                you achieve lasting relief and improved quality of life.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-1 drop-shadow-md">Compassionate</h3>
                  <p className="text-sm text-white/80 drop-shadow-sm">Patient-centered care</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-1 drop-shadow-md">Advanced</h3>
                  <p className="text-sm text-white/80 drop-shadow-sm">Modern techniques</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-1 drop-shadow-md">Personalized</h3>
                  <p className="text-sm text-white/80 drop-shadow-sm">Tailored treatment</p>
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Medical Background Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {websiteImages?.medicalBackgroundImage ? (
                /* CMS Image - Shows when uploaded in Sanity */
                <div className="relative rounded-3xl aspect-[4/5] shadow-2xl overflow-hidden">
                  <img
                    src={urlFor(websiteImages.medicalBackgroundImage).width(600).height(750).url()}
                    alt="Medical Background"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                /* Placeholder - Shows until photo uploaded */
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl aspect-[4/5] shadow-2xl flex items-center justify-center overflow-hidden border-2 border-primary/20">
                  <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 px-8 text-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl">
                      <Award className="h-20 w-20" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-700 mb-2">Medical Background Image</h3>
                      <p className="text-gray-600 text-sm">Upload in Sanity CMS</p>
                      <p className="text-gray-500 text-xs mt-2">Recommended: 600x750px</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Biography - Enhanced Typography */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-semibold">
                <Award className="w-4 h-4" />
                Medical Background
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                A Lifetime Dedicated to <span className="text-primary">Healing</span>
              </h2>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p className="font-medium">
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

              <div className="bg-gradient-to-br from-blue-50 to-primary/5 border-l-4 border-primary rounded-lg p-6 shadow-md">
                <p className="text-gray-800 italic font-medium leading-relaxed">
                  &ldquo;Every patient who walks through our doors is not just a medical case, but a person 
                  deserving of compassion, respect, and the highest quality of care.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-white">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
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
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Our Facilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Clinic & <span className="text-primary">Advanced Equipment</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a look at our state-of-the-art facilities and cutting-edge medical equipment
            </p>
          </motion.div>

          {(() => {
            // Only process if websiteImages data is loaded
            if (!websiteImages) {
              return (
                <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl border-2 border-dashed border-primary/30 p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Photo Gallery Coming Soon
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Photos of our clinic facilities and medical equipment will be displayed here once uploaded.
                  </p>
                </div>
              );
            }

            const galleryImages = [];
            
            // Collect all uploaded images with captions
            if (websiteImages.clinicExterior) {
              galleryImages.push({ asset: websiteImages.clinicExterior, caption: 'Clinic Exterior' });
            }
            if (websiteImages.waitingArea) {
              galleryImages.push({ asset: websiteImages.waitingArea, caption: 'Waiting Area' });
            }
            if (websiteImages.consultationRoom) {
              galleryImages.push({ asset: websiteImages.consultationRoom, caption: 'Consultation Room' });
            }
            if (websiteImages.ultrasoundMachine) {
              galleryImages.push({ asset: websiteImages.ultrasoundMachine, caption: 'Ultrasound-Guided Equipment' });
            }
            if (websiteImages.painManagementEquipment) {
              galleryImages.push({ asset: websiteImages.painManagementEquipment, caption: 'Pain Management Equipment' });
            }
            if (websiteImages.treatmentRoom) {
              galleryImages.push({ asset: websiteImages.treatmentRoom, caption: 'Treatment Room' });
            }
            if (websiteImages.medicalEquipment1) {
              galleryImages.push({ asset: websiteImages.medicalEquipment1, caption: 'Medical Equipment' });
            }
            if (websiteImages.medicalEquipment2) {
              galleryImages.push({ asset: websiteImages.medicalEquipment2, caption: 'Medical Equipment' });
            }
            if (websiteImages.medicalEquipment3) {
              galleryImages.push({ asset: websiteImages.medicalEquipment3, caption: 'Medical Equipment' });
            }
            if (websiteImages.receptionDesk) {
              galleryImages.push({ asset: websiteImages.receptionDesk, caption: 'Reception Desk' });
            }
            if (websiteImages.teamPhoto) {
              galleryImages.push({ asset: websiteImages.teamPhoto, caption: 'Our Team' });
            }
            if (websiteImages.certificatesWall) {
              galleryImages.push({ asset: websiteImages.certificatesWall, caption: 'Certificates & Awards' });
            }

            // Show carousel if images exist
            if (galleryImages.length > 0) {
              return <PhotoCarousel images={galleryImages} />;
            } else {
              return (
                <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl border-2 border-dashed border-primary/30 p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Photo Gallery Coming Soon
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Photos of our clinic facilities and medical equipment will be displayed here once uploaded.
                  </p>
                </div>
              );
            }
          })()}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-2xl brightness-110">
                  Ready to Start Your Journey to Pain Relief?
                </h2>
                <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-xl brightness-105">
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
