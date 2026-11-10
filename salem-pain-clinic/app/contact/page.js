'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { CLINIC_CLOSED, CLINIC_HOURS, GOOGLE_MAPS_URL, PHONE_DISPLAY_PRIMARY, PHONE_DISPLAY_SECONDARY, PHONE_PRIMARY, PHONE_SECONDARY } from '@/lib/constants';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
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

      if (response.status === 429) {
        setErrorMessage('Too many requests. Please wait before trying again, or call the clinic.');
        return;
      }

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

  return (
    <div className="clinic-page">
      <section className="clinic-route-hero">
        <div className="clinic-shell clinic-route-split">
          <div>
            <h1>{t("Visit & contact")}</h1>
            <p>{t("Find us in Swarnapuri, near ANS Divyam. Call the clinic or send a consultation request.")}</p>
            <div className="clinic-route-actions">
              <a className="clinic-button" href="#consultation">{t("Request a consultation")} <ArrowDown size={18} aria-hidden="true" /></a>
              <a className="clinic-text-link" href={GOOGLE_MAPS_URL}>{t("Get directions")} <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="clinic-editorial-photo">
            <Image src="/images/clinic-gallery/salem-clinic-exterior.webp" alt={t("Blue and white exterior of Salem Pain Clinic")} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 50vw" priority />
            <figcaption>{t("Clinic exterior, Omalur Main Road")}</figcaption>
          </figure>
        </div>
      </section>

      <section className="clinic-shell clinic-section">
        <div className="clinic-contact-grid">
          <div>
            <h2 className="clinic-secondary-title">{t("Clinic details")}</h2>
            <dl className="clinic-contact-details">
              <div>
                <dt><Phone size={20} aria-hidden="true" /> {t("Call")}</dt>
                <dd>
                  <a href={'tel:' + PHONE_PRIMARY}>{PHONE_DISPLAY_PRIMARY}</a>
                  <a href={'tel:' + PHONE_SECONDARY}>{PHONE_DISPLAY_SECONDARY}</a>
                </dd>
              </div>
              <div>
                <dt><Clock size={20} aria-hidden="true" /> {t("Hours")}</dt>
                <dd>{t(CLINIC_HOURS)}<br />{t(CLINIC_CLOSED)}</dd>
              </div>
              <div>
                <dt><MapPin size={20} aria-hidden="true" /> {t("Address")}</dt>
                <dd>{t("108, Omalur Main Rd, near ANS Divyam, Swarnapuri Annexe, State Bank Colony, Salem, Tamil Nadu 636004")}</dd>
              </div>
            </dl>
          </div>

            {/* Contact Form */}
            <div className="max-w-full">
              <section id="consultation" aria-labelledby="consultation-title" className="clinic-contact-form">
                <h2 id="consultation-title" className="text-3xl font-semibold text-primary mb-2">{t("Request a consultation")}</h2>
                <p className="text-text-gray mb-8">{t("Send a request and the clinic will call you to arrange an appointment. Your appointment is confirmed once the clinic gives you a date and time.")}</p>

                {submitted ? (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-500 rounded-sm p-8 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-2xl font-semibold text-primary mb-2">{t("Request received")}</h4>
                    <p className="text-text-gray">{t("The clinic will call you to arrange a date and time.")}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("Full Name *")}</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("Enter your full name")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("Phone Number *")}</Label>
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
                      <Label htmlFor="email">{t("Email Address (Optional)")}</Label>
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
                      <Label htmlFor="message">{t("Message *")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder={t("Tell us about your pain condition or questions...")}
                        className="resize-none"
                      />
                    </div>

                    {errorMessage && (
                      <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-50 border border-red-200 text-red-700 rounded-sm px-4 py-3"
                        role="alert"
                        aria-live="assertive"
                      >
                        {t(errorMessage)}
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full text-lg h-12"
                      size="lg"
                    >
                      <Send className={`w-5 h-5 mr-2 ${status === 'loading' ? 'animate-spin' : ''}`} />
                      {t(status === 'loading' ? 'Sending request…' : 'Send request')}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">{t("* Required fields. Contact messages are processed by our service providers. See our privacy policy.")}</p>
                  </form>
                )}
              </section>
            </div>
        </div>
      </section>
      <section className="clinic-shell clinic-section clinic-map" aria-labelledby="clinic-map-title">
        <div className="clinic-route-end">
          <div>
            <h2 id="clinic-map-title" className="clinic-secondary-title">{t("Find the clinic")}</h2>
            <p>{t("Parking is available on the premises.")}</p>
          </div>
          <a className="clinic-text-link" href={GOOGLE_MAPS_URL}>{t("Open in Google Maps")} <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.212856636567!2d78.12620907478987!3d11.679321741891794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1f588bc086f%3A0x77d230e475f745d9!2sSalem%20pain%20and%20palliative%20care%20clinic!5e0!3m2!1sen!2sin!4v1764780266892!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("Salem Pain Clinic Location")}
            ></iframe>
      </section>
    </div>
  );
}
