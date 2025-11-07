'use client';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const initialFormState = {
    name: '',
    phone: '',
    email: '',
    message: ''
  };
  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/contact';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');
    setSubmitted(false);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setSubmitted(true);
      setFormData(initialFormState);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Contact form submission error:', error);
      setErrorMessage('We could not send your message right now. Please try again or call our front desk.');
      setSubmitted(false);
    } finally {
      setStatus('idle');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#1A2533] py-32">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
        
        <motion.div 
          className="container-custom relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight text-white">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Get in touch to schedule your consultation or ask any questions
          </p>
        </motion.div>
      </section>

      {/* Contact Information & Form Section */}
  <section className="section-padding bg-[#F8F9FA] overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Contact Information */}
            <motion.div
              className="max-w-full"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-primary-subtle text-primary text-sm font-semibold px-4 py-2 rounded-full mb-6">
                GET IN TOUCH
              </div>
              
              <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-6 tracking-tight">
                Visit Our <span className="text-primary">Clinic</span>
              </h2>
              
              <p className="text-lg text-text-gray leading-relaxed mb-8">
                We&apos;re here to help you on your journey to pain relief. Reach out to schedule 
                a consultation or ask any questions about our services.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E9ECEF]"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-subtle text-primary rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Phone Numbers</h3>
                      <a href="tel:+919842798422" className="block text-primary hover:text-primary-dark font-semibold text-lg transition-colors mb-1">
                        +91 9842798422
                      </a>
                      <a href="tel:+919095596999" className="block text-primary hover:text-primary-dark font-semibold text-lg transition-colors">
                        +91 9095596999
                      </a>
                      <p className="text-sm text-text-muted mt-2">Click to call directly</p>
                    </div>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E9ECEF]"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-subtle text-primary rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Clinic Address</h3>
                      <address className="not-italic text-text-gray leading-relaxed">
                        108, Omalur Main Rd,<br />
                        near ANS divyam, Swarnapuri Annexe,<br />
                        State Bank Colony, Swarnapuri,<br />
                        Salem, Tamil Nadu 636004
                      </address>
                      <a 
                        href="https://maps.google.com/?q=108+Omalur+Main+Rd+Salem+Tamil+Nadu+636004" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div 
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#E9ECEF]"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-subtle text-primary rounded-xl flex items-center justify-center flex-shrink-0 mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">Office Hours</h3>
                      <div className="space-y-1">
                        <p className="text-text-gray">
                          <span className="font-semibold text-primary">Monday - Saturday:</span><br />
                          <span className="text-xl font-bold text-primary">10:00 AM - 1:00 PM</span>
                        </p>
                        <p className="text-text-muted text-sm mt-2">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="max-w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-[#E9ECEF]">
                <h3 className="text-3xl font-semibold text-primary mb-2">Send Us a Message</h3>
                <p className="text-text-gray mb-8">Fill out the form and we&apos;ll get back to you within 24 hours</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-2xl font-semibold text-primary mb-2">Thank You!</h4>
                    <p className="text-text-gray">
                      We&apos;ve received your message and will call you back within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address (Optional)</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your pain condition or questions..."
                        className="resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3"
                        role="alert"
                        aria-live="assertive"
                      >
                        {errorMessage}
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full text-lg h-12"
                      size="lg"
                    >
                      <Send className={`w-5 h-5 mr-2 ${status === 'loading' ? 'animate-spin' : ''}`} />
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Required fields. We respect your privacy and will never share your information.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
              Find Us on the Map
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Located in the heart of Salem, easily accessible from all parts of the city
            </p>
          </motion.div>

          <motion.div
            className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps?q=Salem+Pain+Clinic+108+Omalur+Main+Road+Salem+Tamil+Nadu+636004&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salem Pain Clinic Location"
            ></iframe>
          </motion.div>

          {/* Landmarks */}
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-cream-50 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-primary mb-2">Nearby Landmark</h4>
              <p className="text-text-gray">Near ANS Divyam</p>
            </div>
            <div className="bg-cream-50 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-primary mb-2">Area</h4>
              <p className="text-text-gray">Swarnapuri, Salem</p>
            </div>
            <div className="bg-cream-50 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-bold text-primary mb-2">Parking</h4>
              <p className="text-text-gray">Available on premises</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-blue-900 relative overflow-hidden">
        <div className="hidden md:block absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-blue-800/20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <motion.div 
          className="container-custom text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Need Immediate Assistance?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Call us directly to speak with our team or schedule an urgent consultation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919842798422" 
              className="group flex items-center px-8 py-5 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 transform transition-all duration-300 min-w-[280px]"
            >
              <Phone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              +91 9842798422
            </a>
            
            <a 
              href="tel:+919095596999" 
              className="group flex items-center px-8 py-5 bg-white text-primary rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:scale-105 transform transition-all duration-300 min-w-[280px]"
            >
              <Phone className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              +91 9095596999
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
