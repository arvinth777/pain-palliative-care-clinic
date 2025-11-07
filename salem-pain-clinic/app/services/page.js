'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, Heart, Zap, Users, Award, Brain, 
  ChevronRight, ArrowRight, Phone, MapPin
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GlareWrapper from '@/components/ui/glare-wrapper';

export default function Services() {
  const services = [
    {
      id: 'chronic-pain',
      icon: <Activity className="w-6 h-6" />,
      title: 'Chronic Pain Management',
      description: 'Comprehensive treatment for long-term pain conditions including lower back pain, arthritis, fibromyalgia, and myofascial pain syndrome.',
      features: ['Personalized treatment plans', 'Medication management', 'Physical therapy coordination']
    },
    {
      id: 'cancer-pain',
      icon: <Heart className="w-6 h-6" />,
      title: 'Cancer Pain Relief',
      description: 'Compassionate, specialized care for cancer-related pain, post-chemotherapy neuropathy, and palliative support throughout your treatment journey.',
      features: ['Opioid management', 'Nerve blocks', 'Family counseling']
    },
    {
      id: 'interventional',
      icon: <Zap className="w-6 h-6" />,
      title: 'Ultrasound-Guided Procedures',
      description: 'Advanced interventional techniques with real-time ultrasound guidance for epidural injections, nerve blocks, and joint treatments.',
      features: ['Real-time visualization', 'Minimal discomfort', 'Same-day procedures'],
      featured: true
    },
    {
      id: 'palliative',
      icon: <Users className="w-6 h-6" />,
      title: 'Palliative Care',
      description: 'Holistic care focusing on quality of life, symptom management, and family support for patients with serious illnesses.',
      features: ['Symptom management', 'Emotional support', 'End-of-life care planning']
    },
    {
      id: 'post-surgical',
      icon: <Award className="w-6 h-6" />,
      title: 'Post-Surgical Pain Management',
      description: 'Specialized recovery support with multi-modal pain control strategies to minimize opioid dependence and promote faster healing.',
      features: ['Pre-surgical planning', 'Multi-modal pain control', 'Recovery monitoring']
    },
    {
      id: 'neuropathic',
      icon: <Brain className="w-6 h-6" />,
      title: 'Neuropathic Pain Treatment',
      description: 'Expert management of nerve-related pain including diabetic neuropathy, trigeminal neuralgia, sciatica, and complex regional pain syndrome.',
      features: ['Specialized medications', 'Nerve blocks', 'Neuromodulation techniques']
    }
  ];

  return (
    <>
      {/* Minimal Professional Hero */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Comprehensive Pain Management
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight">
              Our Services
            </h1>
            
            <p className="text-xl text-text-gray leading-relaxed max-w-3xl">
              Evidence-based treatments delivered with advanced ultrasound technology and over 30 years of clinical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Clean Medical Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <GlareWrapper
                key={service.id}
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
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                  className="relative group bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-500 hover:bg-primary/5 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 overflow-hidden spotlight-card h-full"
                >
                {service.featured && (
                  <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    MOST ADVANCED
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-primary shadow-sm flex items-center justify-center text-gray-600 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                </div>
                
                <p className="text-text-gray leading-relaxed mb-6 relative z-10">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6 relative z-10">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-primary transition-colors duration-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href={`#${service.id}-details`}
                  className="inline-flex items-center text-gray-600 group-hover:text-primary font-semibold text-sm hover:gap-2 transition-all duration-500 relative z-10"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-500" />
                </Link>
              </motion.div>
              </GlareWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Expandable Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Chronic Pain Details */}
            <div id="chronic-pain-details" className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <h3 className="text-3xl font-bold text-primary mb-4">Chronic Pain Management</h3>
              <p className="text-lg text-text-gray mb-6">
                Our comprehensive program addresses persistent pain conditions affecting daily life, 
                using evidence-based treatments tailored to each patient&apos;s unique situation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-3">Conditions We Treat</h4>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Lower & upper back pain</li>
                    <li>• Arthritis (osteo & rheumatoid)</li>
                    <li>• Fibromyalgia</li>
                    <li>• Complex regional pain syndrome</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-3">Our Approach</h4>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Comprehensive pain assessment</li>
                    <li>• Personalized treatment plans</li>
                    <li>• Medication & lifestyle guidance</li>
                    <li>• Regular monitoring & adjustment</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interventional Procedures Details */}
            <div id="interventional-details" className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary text-white rounded-full text-xs font-bold mb-4">
                <Zap className="w-3 h-3" />
                MOST ADVANCED
              </div>
              
              <h3 className="text-3xl font-bold text-primary mb-4">Ultrasound-Guided Interventional Procedures</h3>
              <p className="text-lg text-text-gray mb-6">
                State-of-the-art ultrasound technology enables real-time visualization during procedures, 
                ensuring maximum precision and safety with minimal discomfort.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-3">Procedures Offered</h4>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Epidural steroid injections</li>
                    <li>• Facet & nerve blocks</li>
                    <li>• Joint injections (knee, shoulder, hip)</li>
                    <li>• Trigger point injections</li>
                    <li>• Radiofrequency ablation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-3">Key Benefits</h4>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Real-time visualization</li>
                    <li>• Higher success rates</li>
                    <li>• Reduced complications</li>
                    <li>• Same-day procedures</li>
                    <li>• Faster recovery times</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Palliative Care Details */}
            <div id="palliative-details" className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <h3 className="text-3xl font-bold text-primary mb-4">Palliative Care Consultations</h3>
              <p className="text-lg text-text-gray mb-6">
                Compassionate, holistic care focused on improving quality of life for patients with serious illnesses 
                and providing support for families throughout the journey.
              </p>
              
              <div className="bg-cream-50 border-l-4 border-primary rounded-lg p-6 mb-6">
                <p className="text-gray-700 italic">
                  &ldquo;We believe in preserving dignity, comfort, and quality of life at every stage of illness.&rdquo;
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-3">Services Provided</h4>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Symptom management</li>
                    <li>• End-of-life care planning</li>
                    <li>• Family counseling & support</li>
                    <li>• Emotional & spiritual care</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-3">Coordination</h4>
                  <ul className="space-y-2 text-text-gray">
                    <li>• Healthcare provider coordination</li>
                    <li>• Advance directive assistance</li>
                    <li>• Quality of life optimization</li>
                    <li>• Continuous family support</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
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
                  Ready to Start Your Treatment?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Schedule a consultation to discuss your pain management needs with Dr. G.P. Kirupakaran.
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
                    Call
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
