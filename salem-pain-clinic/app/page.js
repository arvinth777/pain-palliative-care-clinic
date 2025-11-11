'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CaretDown,
  CheckCircle,
  Clock,
  Phone,
  MapPin,
  Brain,
  FirstAidKit,
  Heart,
  Heartbeat,
  Leaf,
  ShieldPlus,
  Target,
  Syringe,
} from 'phosphor-react';
import ServiceCard from '@/components/ServiceCard';
import SpotlightHero from '@/components/SpotlightHero';
import TrustBar from '@/components/TrustBar';
import WhyChooseUs from '@/components/WhyChooseUs';
import GlareWrapper from '@/components/ui/glare-wrapper';
import FadeInUp from '@/components/FadeInUp';

export default function Home() {
  const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: Heartbeat,
      title: 'Chronic Pain Management',
      description: 'Comprehensive treatment for back pain, neck pain, arthritis, and fibromyalgia.',
      link: '/services#chronic-pain'
    },
    {
      icon: FirstAidKit,
      title: 'Cancer Pain Relief',
      description: 'Specialized compassionate care for cancer-related pain and discomfort.',
      link: '/services#cancer-pain'
    },
    {
      icon: Syringe,
      title: 'Interventional Pain Procedures',
      description: 'State-of-the-art ultrasound-guided procedures for precise pain relief.',
      link: '/services#interventional',
      featured: true
    },
    {
      icon: Leaf,
      title: 'Palliative Care',
      description: 'Comprehensive care focused on improving quality of life.',
      link: '/services#palliative'
    },
    {
      icon: ShieldPlus,
      title: 'Post-Surgical Pain',
      description: 'Specialized care to manage pain after surgical procedures.',
      link: '/services#post-surgical'
    },
    {
      icon: Brain,
      title: 'Neuropathic Pain',
      description: 'Expert management of nerve-related pain conditions.',
      link: '/services#neuropathic'
    }
  ];

  return (
    <>
      {/* Hero Section with Spotlight Effect */}
      <SpotlightHero />

      {/* Trust Bar - Clean credibility section */}
      <TrustBar />

      {/* About Preview Section */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Image Column */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-primary-subtle blur-2xl opacity-70" aria-hidden="true"></div>
                <GlareWrapper
                  glareColor="#2B5273"
                  glareOpacity={0.4}
                  glareSize={250}
                  transitionDuration={600}
                  borderRadius="1.5rem"
                  className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/70"
                >
                  <Image
                    src="/images/dr-kirupakaran.jpg"
                    alt="Dr. G.P. Kirupakaran"
                    width={640}
                    height={760}
                    className="w-full h-full object-cover"
                    priority
                  />
                </GlareWrapper>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                Meet {DOCTOR_FULL_NAME}
              </h2>
              
              <p className="text-xl text-text-gray font-medium mb-6">
                MBBS, MD, DA, DFID
              </p>
              
              <div className="space-y-4 text-lg text-text-gray leading-relaxed">
                <p>
                  {DOCTOR_FULL_NAME} is Salem&apos;s renowned anaesthetist with over 
                  <span className="text-gold-600 font-semibold"> 30 years</span> of 
                  dedicated experience in Anaethesia, pain management and palliative care.
                </p>
                
                <p>
                  A distinguished graduate of the prestigious Christian Medical College 
                  (CMC) Vellore, Dr. Kirupakaran has established himself as a trusted 
                  name in Anaethesia and interventional pain management in Salem.
                </p>
                
                <p>
                  With three decades of clinical expertise and advanced ultrasound and other interventional 
                  technology, Dr. Kirupakaran has helped thousands of patients reclaim their quality of life 
                  through innovative pain management techniques.
                </p>
              </div>
              
              <Link 
                href="/about" 
                className="btn-primary inline-flex items-center gap-2 mt-8"
              >
                Learn More About {DOCTOR_FULL_NAME}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle modern background */}
        <div 
          className="absolute inset-0 -z-10 h-full w-full bg-white 
                     [background:radial-gradient(125%_125%_at_50%_10%,_#fff_40%,_#2B5273_100%)]"
          style={{ opacity: 0.03 }}
        />
        
        <div className="container-custom relative z-10">
          {/* Modern Section Header */}
          <FadeInUp>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Our Services
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                Specialized Care for Your Pain
              </h2>
              <p className="text-xl text-text-gray leading-relaxed">
                We offer a comprehensive range of advanced treatments to help you 
                regain your life from chronic pain
              </p>
            </div>
          </FadeInUp>

          {/* Services Grid with Scroll Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  featured={service.featured}
                />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Clean, focused section */}
      <WhyChooseUs />

      {/* Call-to-Action Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-[#1A2533] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">
            Ready to Schedule Your Consultation?
          </h2>
          
          <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t let pain control your life. Take the first step towards relief today.
          </p>
          
          {/* CTA Buttons - Get Directions & Call Now */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.google.com/maps/place/Salem+pain+and+palliative+care+clinic/@11.679437241888115,78.12624407549251,17z/data=!3m1!4b1!4m6!3m5!1s0x3babf1f588bc086f:0x77d230e475f745d9!8m2!3d11.679437241888115!4d78.12624407549251!16s%2Fg%2F11c5q5p5qg" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-5 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 transform transition-all duration-300 min-w-[280px]"
            >
              <MapPin className="w-6 h-6 mr-3 text-primary transition-transform group-hover:scale-110" weight="bold" />
              Get Directions
            </a>
            
            <a 
              href="tel:+919095596999" 
              className="group flex items-center px-8 py-5 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 transform transition-all duration-300 min-w-[280px]"
            >
              <Phone className="w-6 h-6 mr-3 text-primary transition-transform group-hover:scale-110" weight="bold" />
              Call Now
            </a>
          </div>
          
          {/* Office hours */}
          <p className="text-white mt-8 text-sm md:text-base flex items-center justify-center">
            <Clock className="w-4 h-4 mr-2 text-white" weight="bold" />
            Open Monday - Saturday | 10:00 AM - 1:00 PM
          </p>
        </motion.div>
      </section>
    </>
  );
}
