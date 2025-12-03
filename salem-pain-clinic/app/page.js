'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Phone,
  MapPin,
  Brain,
  FirstAidKit,
  Heart,
  Heartbeat,
  Leaf,
  ShieldPlus,
  Syringe,
  Medal,
  UserFocus,
  Waves,
} from 'phosphor-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import WhyChooseUs from '@/components/WhyChooseUs';
import GlareWrapper from '@/components/ui/glare-wrapper';
import FadeInUp from '@/components/FadeInUp';

export default function Home() {
  const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';

  // Hero carousel images
  const heroImages = [
    { src: '/images/logo.png', alt: 'Salem Pain Clinic' },
    { src: '/images/Gemini_Generated_Image_w22939w22939w229 (1).png', alt: 'Patient Care' },
    { src: '/images/Screenshot 2025-12-03 at 19.37.54.png', alt: 'Modern Medical Equipment' },
    { src: '/images/procedure-1.png', alt: 'Medical Procedure' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

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

  const trustIndicators = [
    {
      icon: Medal,
      title: '30+ Years',
      subtitle: 'Experience',
      description: 'Specialized pain management and palliative care expertise'
    },
    {
      icon: UserFocus,
      title: 'Personalized',
      subtitle: 'Treatment Plans',
      description: 'Customized care tailored to your unique needs'
    },
    {
      icon: Waves,
      title: 'Advanced',
      subtitle: 'Ultrasound',
      description: 'State-of-the-art ultrasound-guided procedures'
    }
  ];

  return (
    <>
      {/* Hero Section - Matching Reference Design */}
      <section className="relative pt-24 md:pt-28 lg:pt-32 pb-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8f4fc] via-[#f5faff] to-white -z-10"></div>
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 -z-10 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle, #cddff0 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1a3a5c] leading-[1.15] mb-3 font-heading">
                <span className="italic">Regain Your Life</span>
                <br />
                from{' '}
                <span className="text-primary italic">Chronic Pain.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-primary font-semibold mb-4">
                Targeted Pain Relief for a Fuller Life
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-md">
                Interventional Expertise & Personalized Care from Salem&apos;s Trusted Specialist.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white font-semibold px-5 sm:px-6 py-4 sm:py-5 rounded-lg shadow-md hover:shadow-lg transition-all text-sm sm:text-base">
                  <Link href="/contact">
                    Schedule a Consultation
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="bg-white border border-gray-300 text-gray-700 hover:border-primary hover:text-primary font-semibold px-5 sm:px-6 py-4 sm:py-5 rounded-lg transition-all text-sm sm:text-base">
                  <Link href="/services">
                    Explore Treatments
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Column: Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[currentImageIndex].src}
                      alt={heroImages[currentImageIndex].alt}
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white w-6' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section - Cards below hero */}
      <section className="py-12 bg-gradient-to-b from-white to-[#f8fbff]">
        <div className="container-custom">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {trustIndicators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" weight="duotone" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {item.title}
                      <span className="block text-primary font-bold">{item.subtitle}</span>
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image Column */}
            <FadeInUp>
              <div className="relative">
                <div className="relative max-w-md mx-auto lg:mx-0">
                  {/* Decorative background */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 -z-10" aria-hidden="true"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/images/dr-kirupakaran.jpg"
                      alt="Dr. G.P. Kirupakaran"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Experience badge */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-primary">30+</span>
                      <span className="text-xs text-gray-600">Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Text Column */}
            <FadeInUp delay={0.15}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  About the Doctor
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
                  Meet {DOCTOR_FULL_NAME}
                </h2>

                <p className="text-base text-primary-dark font-medium mb-4">
                  MBBS, MD, DA, DFID
                </p>

                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    Salem&apos;s leading anaesthetist with over{' '}
                    <span className="text-primary font-semibold">30 years</span> of dedicated experience 
                    in pain management and palliative care.
                  </p>

                  <p>
                    A distinguished graduate of the prestigious Christian Medical College (CMC) Vellore, 
                    Dr. Kirupakaran has helped thousands of patients reclaim their quality of life 
                    through innovative pain management techniques.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-5 text-primary font-semibold hover:text-primary-dark transition-colors group"
                >
                  Learn More About {DOCTOR_FULL_NAME}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 md:py-20 bg-[#f8fbff] relative overflow-hidden">
        <div className="container-custom relative z-10">
          {/* Section Header */}
          <FadeInUp>
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 tracking-tight">
                Specialized Care for Your Pain
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Comprehensive range of advanced treatments to help you regain your life from chronic pain
              </p>
            </div>
          </FadeInUp>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <FadeInUp key={index} delay={index * 0.06}>
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
      <section className="py-14 md:py-16 bg-gradient-to-br from-primary via-primary-dark to-[#003d80] relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          className="max-w-3xl mx-auto px-6 md:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
            Ready to Schedule Your Consultation?
          </h2>

          <p className="text-base text-white/85 mb-6 max-w-xl mx-auto leading-relaxed">
            Don&apos;t let pain control your life. Take the first step towards relief today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://www.google.com/maps/place/Salem+pain+and+palliative+care+clinic/@11.679437241888115,78.12624407549251,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-5 py-3 bg-white text-primary rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <MapPin className="w-4 h-4 mr-2" weight="bold" />
              Get Directions
            </a>

            <a
              href="tel:+919095596999"
              className="flex items-center px-5 py-3 bg-white text-primary rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" weight="bold" />
              Call Now
            </a>
          </div>

          {/* Office hours */}
          <p className="text-white/70 mt-5 text-sm flex items-center justify-center">
            <Clock className="w-4 h-4 mr-2" weight="bold" />
            Monday - Saturday | 10:00 AM - 1:00 PM
          </p>
        </motion.div>
      </section>
    </>
  );
}
