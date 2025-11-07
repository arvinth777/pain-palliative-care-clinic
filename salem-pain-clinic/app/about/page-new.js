'use client';
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
  Calendar,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function About() {
  const DOCTOR_FULL_NAME = 'Dr.\u00A0G.P.\u00A0Kirupakaran';

  const credentials = [
    { degree: 'MBBS', institution: 'Coimbatore Medical College' },
    { degree: 'MD (Anaesthesiology)', institution: 'Christian Medical College, Vellore' },
    { degree: 'DA (Anaesthesia)', institution: 'Madras Medical College' },
  ];

  const equipmentFeatures = [
    'Real-time visualization of needle placement',
    'Increased accuracy and effectiveness',
    'Reduced risk of complications',
    'Minimal discomfort during procedures',
    'Faster recovery times',
    'Superior patient outcomes'
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Section 1: Meet the Doctor - Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-background"></div>
        
        <div className="container-custom relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <Badge className="mb-6">Meet Your Doctor</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Meet {DOCTOR_FULL_NAME}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Leading Pain Management Specialist · Salem, Tamil Nadu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              {/* Doctor Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full bg-neutral-900/60 border-neutral-700/50 p-8">
                  <div className="aspect-[3/4] bg-neutral-800 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder - replace with actual image */}
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <GraduationCap className="w-12 h-12 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">Professional Photo</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Personal Bio */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground">
                  A Lifetime Dedicated to <span className="text-primary">Healing</span>
                </h2>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    For over <span className="text-foreground font-semibold">30 years</span>, {DOCTOR_FULL_NAME} has been 
                    dedicated to one mission: alleviating suffering and restoring quality of life to patients 
                    experiencing chronic and acute pain conditions.
                  </p>
                  
                  <p>
                    A proud alumnus of the prestigious Christian Medical College (CMC) Vellore, Dr. Kirupakaran 
                    combines world-class medical expertise with genuine compassion. His approach goes beyond 
                    treating symptoms—he partners with each patient to understand their unique pain journey 
                    and craft personalized treatment plans.
                  </p>
                  
                  <p>
                    Specializing in interventional pain management and palliative care, Dr. Kirupakaran has 
                    become a trusted name across Tamil Nadu. His commitment to staying at the forefront of 
                    medical innovation is evident in his adoption of cutting-edge ultrasound-guided procedures, 
                    ensuring precision, safety, and superior outcomes for every patient.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Philosophy & Approach */}
      <section className="py-20 bg-neutral-950/50">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 text-primary mx-auto mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              A Legacy of <span className="text-primary">Healing</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Salem Pain Clinic, we believe in a holistic approach to pain management. 
                Every patient who walks through our doors is not just a medical case, but a person 
                deserving of compassion, respect, and the highest quality of care.
              </p>
              
              <p>
                Our goal isn&apos;t just to manage pain—it&apos;s to restore your quality of life, 
                help you regain independence, and give you hope for a better tomorrow.
              </p>
              
              <p className="text-xl font-semibold text-foreground">
                You are not just a patient; you are a partner in your own health journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Experience & Credentials */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6">Proven Excellence</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience & Credentials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three decades of expertise backed by world-class education
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Clock, value: '30+', label: 'Years of Experience', color: 'text-blue-400' },
              { icon: Users, value: '10,000+', label: 'Patients Treated', color: 'text-emerald-400' },
              { icon: Star, value: '98%', label: 'Success Rate', color: 'text-amber-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-neutral-900/60 border-neutral-700/50 p-8 text-center hover:bg-neutral-900/80 transition-colors">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <h3 className="text-5xl font-bold text-foreground mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-neutral-900/60 border-neutral-700/50 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Medical Education</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {credentials.map((cred, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        {cred.degree}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cred.institution}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 4: The Clinic Environment & Technology */}
      <section className="py-20 bg-neutral-950/50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6">Our Facilities</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Clinic Environment & Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern facilities equipped with cutting-edge medical technology
            </p>
          </motion.div>

          {/* Photo Gallery Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  { title: 'Reception Area', desc: 'Welcoming and comfortable space' },
                  { title: 'Treatment Room', desc: 'State-of-the-art equipment' },
                  { title: 'Ultrasound Suite', desc: 'Advanced diagnostic technology' },
                  { title: 'Consultation Room', desc: 'Private and professional setting' }
                ].map((item, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full bg-neutral-900/60 border-neutral-700/50 overflow-hidden group hover:bg-neutral-900/80 transition-colors">
                      <div className="aspect-[4/3] bg-neutral-800 flex items-center justify-center relative">
                        {/* Placeholder - replace with actual images */}
                        <div className="text-center">
                          <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <span className="text-2xl font-bold text-primary">{index + 1}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-12 bg-neutral-900 border-neutral-700 hover:bg-neutral-800 hover:text-foreground" />
              <CarouselNext className="-right-4 md:-right-12 bg-neutral-900 border-neutral-700 hover:bg-neutral-800 hover:text-foreground" />
            </Carousel>
          </motion.div>

          {/* Advanced Equipment Section - REBUILT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: The $30,000 Card */}
              <Card className="h-full bg-neutral-900/60 border-neutral-700/50 p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-6 right-6">
                  <Badge>Latest Tech</Badge>
                </div>
                
                <div className="relative z-10">
                  <Zap className="w-16 h-16 text-primary mb-6" />
                  
                  <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-4">
                    $30,000
                  </h2>
                  
                  <p className="text-xl font-semibold text-foreground mb-3">
                    Premium Ultrasound System
                  </p>
                  
                  <p className="text-muted-foreground">
                    State-of-the-art technology for precision pain management procedures
                  </p>
                </div>

                {/* Subtle background decoration */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              </Card>

              {/* Right Column: The Feature List */}
              <div className="flex flex-col justify-center">
                <Badge className="mb-6 w-fit">Advanced Equipment</Badge>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Precision Through <span className="text-primary">Innovation</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our clinic features a premium ultrasound system valued at $30,000, representing our 
                  commitment to providing the highest standard of care with cutting-edge technology.
                </p>

                {/* Clean List with Icons */}
                <ul className="space-y-4">
                  {equipmentFeatures.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Journey to Relief?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Schedule a consultation with {DOCTOR_FULL_NAME} and take the first step towards a pain-free life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link href="/services" className="flex items-center gap-2">
                  View Our Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link href="/contact" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Your Consultation
                </Link>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-800">
              <p className="text-muted-foreground mb-4">Or call us directly</p>
              <a 
                href="tel:+919488384151" 
                className="inline-flex items-center gap-2 text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-6 h-6" />
                +91 94883 84151
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
