import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CalendarCheck, Check, MessageSquare } from 'lucide-react';
import { Language, Appointment } from '../types';
import { translations } from '../translations';
import { productsData } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  currentLang: Language;
}

export default function Contact({ currentLang }: ContactProps) {
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [showContactSuccess, setShowContactSuccess] = useState(false);

  // Appointment Booking State
  const [bookingForm, setBookingForm] = useState<Appointment>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
    productOfInterest: ''
  });
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);

  // Active form section tab (on mobile / tabs layout)
  const [activeFormTab, setActiveFormTab] = useState<'contact' | 'booking'>('contact');

  const t = translations[currentLang];

  // Handle contact submit
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    
    setIsContactSubmitting(true);
    setTimeout(() => {
      setIsContactSubmitting(false);
      setShowContactSuccess(true);
      setContactForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setShowContactSuccess(false), 8000);
    }, 1500);
  };

  // Handle booking submit
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email || !bookingForm.date || !bookingForm.time) return;

    setIsBookingSubmitting(true);
    setTimeout(() => {
      setIsBookingSubmitting(false);
      setShowBookingSuccess(true);
      setBookingForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        notes: '',
        productOfInterest: ''
      });
      setTimeout(() => setShowBookingSuccess(false), 8000);
    }, 1500);
  };

  // Pre-written WhatsApp consultation query
  const getWhatsAppConsultLink = () => {
    const phone = '237697254607';
    let msg = '';
    if (currentLang === 'fr') {
      msg = `Bonjour Orienta Fohew Wheida, je souhaiterais obtenir des conseils personnalisés concernant vos compléments alimentaires naturels. Merci !`;
    } else if (currentLang === 'de') {
      msg = `Hallo Orienta Fohew Wheida, ich hätte gerne eine persönliche Beratung zu Ihren natürlichen Nahrungsergänzungsmitteln. Vielen Dank!`;
    } else {
      msg = `Hello Orienta Fohew Wheida, I would like to get a personalized consultation regarding your natural dietary supplements. Thank you!`;
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF6F0] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="contact-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] border border-[#bae6fd] rounded-full mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] font-mono">
              Contact & RDV
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            {t.contactTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Info Blocks and Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact details + Map (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8" id="contact-details-column">
            
            {/* Elegant Info card */}
            <div className="bg-[#F2EADF] p-6 sm:p-8 rounded-3xl border border-stone-200/40 space-y-6">
              
              <h3 className="font-serif font-bold text-lg text-stone-900 pb-3 border-b border-stone-200/40">
                Orienta Fohew Wheida Offices
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start space-x-3.5 text-xs sm:text-sm">
                  <MapPin className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-stone-800">{t.addressLabel}</span>
                    <span className="text-stone-600 font-light">
                      Douala, Cameroun (B.P. 12450 Akwa) / Représentation Europe & International
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5 text-xs sm:text-sm">
                  <Mail className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-stone-800">{t.emailLabel}</span>
                    <a href="mailto:contact@orientafohewwheida.com" className="text-sky-700 hover:underline font-light">
                      contact@orientafohewwheida.com
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start space-x-3.5 text-xs sm:text-sm">
                  <Phone className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-stone-800">{t.phoneLabel}</span>
                    <div className="flex flex-col font-mono text-stone-600 font-light">
                      <a href="tel:+237697254607" className="hover:text-sky-700">+237 697 254 607</a>
                      <a href="tel:+237676437678" className="hover:text-sky-700">+237 676 437 678</a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3.5 text-xs sm:text-sm">
                  <Clock className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-stone-800">{t.hoursLabel}</span>
                    <span className="text-stone-600 font-light">{t.hoursValue}</span>
                  </div>
                </div>
              </div>

              {/* Direct Quick WhatsApp Consult Action Button */}
              <div className="pt-4 border-t border-stone-200/40">
                <a
                  href={getWhatsAppConsultLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-[#25D366] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#20ba56] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp direct</span>
                </a>
              </div>

            </div>

            {/* Google Maps Iframe wrapper (polished) */}
            <div className="rounded-3xl overflow-hidden border border-stone-200/40 h-64 shadow-sm" id="map-wrapper">
              <iframe
                title="Orienta Fohew Wheida Douala Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.298284711314!2d9.6980645!3d4.0482654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061129b7b99c759%3A0x6bfe7c88b6bbdb6e!2sAkwa%2C%20Douala%2C%20Cameroon!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Column 2: Elegant forms with Tab Selection (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6" id="form-container-column">
            
            {/* Form Selection Tabs */}
            <div className="flex border-b border-stone-200/50 pb-px">
              <button
                onClick={() => setActiveFormTab('contact')}
                className={`pb-4 px-6 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeFormTab === 'contact'
                    ? 'border-sky-600 text-sky-700'
                    : 'border-transparent text-stone-400 hover:text-stone-600'
                }`}
              >
                {t.contactUs}
              </button>
              <button
                onClick={() => setActiveFormTab('booking')}
                className={`pb-4 px-6 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeFormTab === 'booking'
                    ? 'border-sky-600 text-sky-700'
                    : 'border-transparent text-stone-400 hover:text-stone-600'
                }`}
                id="appointment"
              >
                {t.bookAppointment}
              </button>
            </div>

            {/* Forms Content Box */}
            <div className="bg-[#FAF6F0] p-6 sm:p-10 rounded-3xl border border-stone-200/40 min-h-[460px]">
              
              <AnimatePresence mode="wait">
                
                {/* --- TAB 1: CONTACT FORM --- */}
                {activeFormTab === 'contact' && (
                  <motion.div
                    key="contact-form-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {showContactSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                        id="contact-success-screen"
                      >
                        <div className="w-16 h-16 bg-[#D4EBF8] text-[#0369A1] rounded-full flex items-center justify-center shadow-md animate-bounce">
                          <Check className="w-8 h-8" />
                        </div>
                        <h4 className="font-serif font-bold text-xl text-stone-900">
                          Message Envoyé !
                        </h4>
                        <p className="text-sm text-stone-600 font-light max-w-md">
                          {t.formSuccess}
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleContactSubmit} className="space-y-5" id="contact-form">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Name */}
                          <div className="space-y-1.5">
                            <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                              {t.formName} *
                            </label>
                            <input
                              type="text"
                              required
                              value={contactForm.name}
                              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                            />
                          </div>

                          {/* Email */}
                          <div className="space-y-1.5">
                            <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                              {t.formEmail} *
                            </label>
                            <input
                              type="email"
                              required
                              value={contactForm.email}
                              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5">
                          <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                            {t.formPhone}
                          </label>
                          <input
                            type="tel"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                          />
                        </div>

                        {/* Message */}
                        <div className="space-y-1.5">
                          <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                            {t.formMessage} *
                          </label>
                          <textarea
                            required
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isContactSubmitting}
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-sky-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors hover:bg-sky-700 disabled:opacity-55"
                        >
                          <Send className="w-4 h-4" />
                          <span>{isContactSubmitting ? t.formSubmitting : t.formSubmit}</span>
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

                {/* --- TAB 2: APPOINTMENT SCHEDULER FORM --- */}
                {activeFormTab === 'booking' && (
                  <motion.div
                    key="booking-form-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {showBookingSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                        id="booking-success-screen"
                      >
                        <div className="w-16 h-16 bg-[#D4EBF8] text-[#0369A1] rounded-full flex items-center justify-center shadow-md animate-bounce">
                          <Check className="w-8 h-8" />
                        </div>
                        <h4 className="font-serif font-bold text-xl text-stone-900">
                          Rendez-vous pré-enregistré !
                        </h4>
                        <p className="text-sm text-stone-600 font-light max-w-md">
                          {t.apptSuccess}
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleBookingSubmit} className="space-y-5" id="booking-form">
                        
                        <div className="text-xs text-stone-600 pb-3 border-b border-stone-200/40 font-light flex items-center space-x-2">
                          <CalendarCheck className="w-4 h-4 text-sky-600" />
                          <span>{t.apptSubtitle}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Name */}
                          <div className="space-y-1.5">
                            <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                              {t.formName} *
                            </label>
                            <input
                              type="text"
                              required
                              value={bookingForm.name}
                              onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                            />
                          </div>

                          {/* Email */}
                          <div className="space-y-1.5">
                            <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                              {t.formEmail} *
                            </label>
                            <input
                              type="email"
                              required
                              value={bookingForm.email}
                              onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                          {/* Date */}
                          <div className="space-y-1.5">
                            <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                              {t.apptDate} *
                            </label>
                            <input
                              type="date"
                              required
                              value={bookingForm.date}
                              onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400"
                            />
                          </div>

                          {/* Time */}
                          <div className="space-y-1.5">
                            <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                              {t.apptTime} *
                            </label>
                            <select
                              required
                              value={bookingForm.time}
                              onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 text-stone-700"
                            >
                              <option value="">{currentLang === 'fr' ? 'Choisir...' : 'Select...'}</option>
                              <option value="09:00 - 10:00">09:00 - 10:00</option>
                              <option value="11:00 - 12:00">11:00 - 12:00</option>
                              <option value="14:00 - 15:00">14:00 - 15:00</option>
                              <option value="16:00 - 17:00">16:00 - 17:00</option>
                            </select>
                          </div>

                          {/* Product of Interest */}
                          <div className="space-y-1.5">
                            <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                              {t.apptProduct}
                            </label>
                            <select
                              value={bookingForm.productOfInterest}
                              onChange={(e) => setBookingForm({ ...bookingForm, productOfInterest: e.target.value })}
                              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 text-stone-700"
                            >
                              <option value="">{t.apptSelectProduct}</option>
                              {productsData.map((p) => (
                                <option key={p.id} value={p.name}>{p.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Notes / Message */}
                        <div className="space-y-1.5">
                          <label className="block text-xs uppercase font-bold tracking-wider text-stone-600">
                            {t.apptNotes}
                          </label>
                          <textarea
                            rows={3}
                            value={bookingForm.notes}
                            onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={isBookingSubmitting}
                          className="flex items-center justify-center space-x-2 px-6 py-3 bg-sky-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors hover:bg-sky-700 disabled:opacity-55"
                        >
                          <CalendarCheck className="w-4 h-4" />
                          <span>{isBookingSubmitting ? t.formSubmitting : t.apptSubmit}</span>
                        </button>
                      </form>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
