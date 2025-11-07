'use client';
import Link from 'next/link';
import { Phone, MapPin, Clock, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: `About ${DOCTOR_FULL_NAME}`, href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Chronic Pain Management', href: '/services#chronic-pain' },
    { name: 'Cancer Pain Relief', href: '/services#cancer-pain' },
    { name: 'Interventional Procedures', href: '/services#interventional' },
    { name: 'Palliative Care', href: '/services#palliative' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1B2836] to-[#0F1419] text-white/80 pt-20 pb-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Description */}
          <motion.div {...fadeInUp} className="lg:col-span-1">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-white mb-2 font-heading">
                Salem Pain Clinic
              </h2>
              <div className="w-16 h-1 bg-primary rounded-full mb-4" />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-base">
              Expert pain management and palliative care with 30+ years of experience. 
              Advanced ultrasound-guided procedures for precise, effective treatment.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Heart className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-sm text-white/80">Caring for Salem since 1994</span>
            </div>
          </motion.div>
          
          {/* Column 2: Quick Links */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3: Services */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-white text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="group flex items-center hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4 mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 4: Contact */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="text-white text-lg font-bold mb-6">Contact Info</h3>
            
            <div className="space-y-5">
              {/* Phone */}
              <div>
                <p className="text-xs text-white/50 mb-2 flex items-center uppercase tracking-wide">
                  <Phone className="w-3.5 h-3.5 mr-2" />
                  Phone
                </p>
                <div className="space-y-1">
                  <a 
                    href="tel:+919842798422" 
                    className="text-white hover:text-primary-light font-bold transition-colors block text-lg"
                  >
                    +91 9842798422
                  </a>
                  <a 
                    href="tel:+919095596999" 
                    className="text-white hover:text-primary-light font-bold transition-colors block text-lg"
                  >
                    +91 9095596999
                  </a>
                </div>
              </div>
              
              {/* Address */}
              <div>
                <p className="text-xs text-white/50 mb-2 flex items-center uppercase tracking-wide">
                  <MapPin className="w-3.5 h-3.5 mr-2" />
                  Address
                </p>
                <address className="not-italic text-white/80 leading-relaxed text-sm">
                  108, Omalur Main Rd,<br />
                  near ANS divyam, Swarnapuri Annexe,<br />
                  State Bank Colony, Swarnapuri,<br />
                  Salem, Tamil Nadu 636004
                </address>
              </div>
              
              {/* Hours */}
              <div>
                <p className="text-xs text-white/50 mb-2 flex items-center uppercase tracking-wide">
                  <Clock className="w-3.5 h-3.5 mr-2" />
                  Hours
                </p>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                  <p className="text-white/70 text-sm mb-1">Monday - Saturday</p>
                  <p className="text-white font-bold text-lg">10:00 AM - 1:00 PM</p>
                  <p className="text-white/50 text-xs mt-2">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
        
        {/* Bottom section with policies */}
        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm font-medium">
                © 2024 Salem Pain Clinic. All rights reserved.
              </p>
              <p className="text-white/50 text-xs mt-1">
                {DOCTOR_FULL_NAME}, MBBS, DA, CMC Vellore
              </p>
            </div>
            
            {/* Policy Links */}
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-white/60 hover:text-primary-light transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-white/60 hover:text-primary-light transition-colors font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                href="/disclaimer" 
                className="text-white/60 hover:text-primary-light transition-colors font-medium"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
