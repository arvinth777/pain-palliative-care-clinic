'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TextType from '@/components/ui/text-type';
import { CountUpNumber } from '@/components/ui/CountUpNumber';

export default function SpotlightHero() {
  return (
    <section className="hero-watermark relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#0A0F14] pt-20">
      {/* Animated spotlight effect */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-light/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-400"></div>
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-gold-500/20 rounded-full blur-[140px] animate-pulse-slow animation-delay-200"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Main Content - Flex grow to push stats down */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="container-custom px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column - 50% width on large screens */}
            <div className="space-y-8">
              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-lora font-bold text-white tracking-tight leading-relaxed mb-6">
                  <span className="block font-bold">Expert Pain Clinic in Salem:</span>
                  <span className="block font-heading font-semibold text-white/90 mt-2">Regain Your Life from Chronic Pain</span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mb-8"
              >
                Providing specialized pain management and palliative care in Salem.<br />
                Led by <span className="text-white font-semibold">Dr. G.P. Kirupakaran</span>, a trusted expert with over 30 years of experience.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="h-14 px-8 text-base bg-white hover:bg-white/90 text-primary shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/services" className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    View Services
                  </Link>
                </Button>
                
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="h-14 px-8 text-base bg-transparent backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 transition-all"
                >
                  <a href="tel:+919842798422" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </motion.div>

              {/* Support info - Perfectly aligned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 text-sm text-white/70"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Salem, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>Mon - Sat: 10:00 AM – 1:00 PM</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - 50% width, Maximum Size Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-full mx-auto aspect-square">
                <Image
                  src="/images/clinic-badge.png"
                  alt="Salem Pain & Palliative Care Clinic Badge"
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 70vw, 90vw"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section - Fixed 3-Column Grid with Count-Up Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
  className="relative z-10 pb-32 -mt-8"
      >
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* STAT 1: Years Experience with Count-Up */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl p-6 flex flex-col items-center">
                <CountUpNumber
                  target={30}
                  suffix="+"
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  duration={2.5}
                />
                <div className="text-sm md:text-base text-white/70 leading-tight">
                  Years<br />Experience
                </div>
              </div>
            </div>
            
            {/* STAT 2: Personalized Plans */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl p-6 flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Personalized
                </div>
                <div className="text-sm md:text-base text-white/70 leading-tight">
                  Treatment<br />Plans
                </div>
              </div>
            </div>
            
            {/* STAT 3: Advanced Technology (updated) */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-2xl p-6 flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Advance ultrasound
                </div>
                <div className="text-sm md:text-base text-white/70 leading-tight">
                  and other interventional<br />technologies
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - Absolute positioned at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-wider font-medium">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-white/70 animate-bounce"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
