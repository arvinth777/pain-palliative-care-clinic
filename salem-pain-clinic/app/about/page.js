'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  Heart, 
  Zap, 
  Phone,
  MapPin,
  Award
} from 'lucide-react';
import Link from 'next/link';
import GlareWrapper from '@/components/ui/glare-wrapper';

export default function About() {
  const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';

  const stats = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: '30+',
      label: 'Years of Experience',
      description: 'Three decades of excellence in anaesthesiology and pain management'
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '10,000+',
      label: 'Patients Treated',
      description: 'Trusted by thousands across Tamil Nadu for pain relief'
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: '98%',
      label: 'Success Rate',
      description: 'Consistently delivering effective pain management solutions'
    }
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
    <>
      {/* Minimal Professional Hero - Matching Services Page */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Leading Pain Management Specialist
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              About {DOCTOR_FULL_NAME}
            </h1>
            
            <p className="text-xl text-text-gray leading-relaxed max-w-3xl mb-6">
              For over 30 years, Dr. Kirupakaran has been dedicated to alleviating suffering and 
              restoring quality of life to patients experiencing chronic and acute pain conditions.
            </p>

            <p className="text-lg text-text-gray leading-relaxed max-w-3xl">
              A proud alumnus of the prestigious Christian Medical College (CMC) Vellore, 
              Dr. Kirupakaran combines world-class medical expertise with genuine compassion, 
              making him one of Salem&apos;s most trusted pain management specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid - Clean Medical Cards Matching Services */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <GlareWrapper
                key={index}
                glareColor="#2B5273"
                glareOpacity={0.3}
                glareSize={200}
                transitionDuration={500}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-500 hover:bg-primary/5 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 overflow-hidden h-full text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gray-100 group-hover:bg-primary shadow-sm flex items-center justify-center text-gray-600 group-hover:text-white transition-all duration-500 mb-4">
                    {stat.icon}
                  </div>
                  
                  <h3 className="text-5xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-lg font-bold text-gray-800 mb-3">{stat.label}</p>
                  <p className="text-sm text-text-gray">{stat.description}</p>
                </motion.div>
              </GlareWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlareWrapper
                glareColor="#2B5273"
                glareOpacity={0.4}
                glareSize={250}
                transitionDuration={600}
                borderRadius="1.5rem"
                className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl aspect-[4/5] shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-6 rounded-[36px] bg-white/30" aria-hidden="true"></div>
                <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 px-8 text-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl">
                    <GraduationCap className="h-20 w-20" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-700 mb-1 whitespace-nowrap">{DOCTOR_FULL_NAME}</h2>
                    <p className="text-text-gray">MBBS, MD, DA</p>
                    <p className="text-gray-500 text-sm mt-2">Professional Photo</p>
                  </div>
                </div>
              </GlareWrapper>
            </motion.div>

            {/* Biography */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Medical Background
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                A Lifetime Dedicated to Healing
              </h2>
              
              <div className="space-y-4 text-text-gray leading-relaxed">
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

              <div className="bg-cream-50 border-l-4 border-primary rounded-lg p-6">
                <p className="text-gray-700 italic">
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Medical Education & Qualifications
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              World-class training from India&apos;s most prestigious medical institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {credentials.map((cred, index) => (
              <GlareWrapper
                key={index}
                glareColor="#2B5273"
                glareOpacity={0.3}
                glareSize={200}
                transitionDuration={500}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-500 hover:bg-primary/5 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 overflow-hidden h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-primary shadow-sm flex items-center justify-center text-gray-600 group-hover:text-white transition-all duration-500">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-500">
                      {cred.degree}
                    </h3>
                  </div>
                  
                  <p className="font-semibold text-gray-700 mb-2">{cred.institution}</p>
                  <p className="text-sm text-text-gray">{cred.description}</p>
                </motion.div>
              </GlareWrapper>
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
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-primary">Areas of Expertise</h3>
            </div>

            <p className="text-lg text-text-gray mb-8">
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
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advanced Equipment Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-xs font-bold mb-4">
              <Zap className="w-3 h-3" />
              MOST ADVANCED
            </div>
            
            <h3 className="text-3xl font-bold text-primary mb-4">
              State-of-the-Art Ultrasound Technology
            </h3>
            
            <p className="text-lg text-text-gray mb-6">
              Our clinic features a premium ultrasound system valued at <span className="font-bold text-primary">$30,000</span>, 
              representing our commitment to providing the highest standard of care with cutting-edge technology.
            </p>

            <div className="bg-white rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">$30,000</h4>
                  <p className="text-gray-600">Premium Ultrasound System</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-primary mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-text-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Real-time visualization of needle placement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Increased accuracy and effectiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Reduced risk of complications</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">Patient Experience</h4>
                <ul className="space-y-2 text-text-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Minimal discomfort during procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Faster recovery times</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Superior patient outcomes</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional CTA - Matching Services Page */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary via-primary-dark to-blue-900 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Start Your Journey to Pain Relief?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
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
                    href="tel:+919488384151" 
                    className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 h-14 px-8 rounded-full font-semibold transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    +91 94883 84151
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
