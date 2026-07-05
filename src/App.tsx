import React, { useState, useEffect } from 'react';
import { Phone, Mail, Send, ArrowUp, Facebook, Instagram } from 'lucide-react';
import { Language } from './types';
import { translations } from './translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import BeautyProducts from './components/BeautyProducts';
import Devices from './components/Devices';
import MagnetizedWater from './components/MagnetizedWater';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import CookiesBanner from './components/CookiesBanner';
import LegalModal from './components/LegalModal';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Global Language State (FR is default)
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('orientafohewwheida_lang');
    return (saved as Language) || 'fr';
  });

  // Global Theme State
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('orientafohewwheida_dark');
    return saved === 'true';
  });

  // Active Legal Document modal
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'legal' | null>(null);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Scroll to Top Button Visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  const t = translations[currentLang];

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('orientafohewwheida_lang', currentLang);
  }, [currentLang]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('orientafohewwheida_dark', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('orientafohewwheida_dark', 'false');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setNewsletterSubmitted(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setNewsletterSubmitted(false);
    }, 6000);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''} id="app-root">
      {/* 
        Outer wrapper that controls background styles (luxurious warm beige #F2EADF) 
      */}
      <div className="min-h-screen bg-[#F2EADF] dark:bg-stone-950 text-stone-900 dark:text-stone-100 font-sans transition-colors duration-500 flex flex-col justify-between">
        
        {/* Responsive Navbar */}
        <Navbar
          currentLang={currentLang}
          setLang={setCurrentLang}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Core Layout Sections */}
        <main className="flex-grow">
          {/* Hero Screen */}
          <Hero currentLang={currentLang} />

          {/* About Us & Qualities */}
          <About currentLang={currentLang} />

          {/* Product Store & Filters */}
          <Products currentLang={currentLang} />

          {/* Beauty Products Section */}
          <BeautyProducts currentLang={currentLang} />

          {/* Wellness Devices Section */}
          <Devices currentLang={currentLang} />

          {/* Magnetized Water Section */}
          <MagnetizedWater currentLang={currentLang} />

          {/* Client Testimonials */}
          <Testimonials currentLang={currentLang} />

          {/* Frequently Asked Questions */}
          <FAQ currentLang={currentLang} />

          {/* Contact & Meeting Reservation */}
          <Contact currentLang={currentLang} />
        </main>

        {/* --- PREMIUM BRAND FOOTER --- */}
        <footer className="bg-[#FAF6F0] dark:bg-stone-950 text-stone-700 dark:text-stone-300 py-16 border-t border-[#bae6fd] dark:border-stone-850" id="app-footer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Branding Column */}
            <div className="md:col-span-4 space-y-4" id="footer-branding">
              <div className="flex items-center space-x-2">
                <span className="w-8 h-8 flex items-center justify-center bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 rounded-full font-serif font-bold text-base tracking-wider">
                  O
                </span>
                <span className="font-serif font-bold text-lg text-stone-900 dark:text-white tracking-widest">
                  {t.brandName}
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-light leading-relaxed max-w-sm">
                {currentLang === 'fr' ? 'La synergie parfaite entre la sagesse naturelle ancestrale et l\'exigence scientifique moderne pour restaurer votre harmonie profonde.' :
                 currentLang === 'de' ? 'Die perfekte Synergie aus jahrhundertealtem Naturwissen und modernen wissenschaftlichen Standards zur Wiederherstellung Ihrer inneren Harmonie.' :
                 'The perfect synergy between ancestral botanical wisdom and rigorous modern science to restore your deepest health harmony.'}
              </p>
              
              {/* Social Channels */}
              <div className="flex space-x-3 pt-2" id="footer-socials">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400 hover:text-sky-850 hover:bg-sky-100 dark:hover:bg-sky-900/60 rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400 hover:text-sky-850 hover:bg-sky-100 dark:hover:bg-sky-900/60 rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation Catalog Links */}
            <div className="md:col-span-2 space-y-4" id="footer-links-quick">
              <h4 className="text-xs uppercase font-bold tracking-widest text-stone-900 dark:text-white">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li><a href="#home" className="hover:text-stone-900 dark:hover:text-white transition-colors">{t.home}</a></li>
                <li><a href="#story" className="hover:text-stone-900 dark:hover:text-white transition-colors">{t.story}</a></li>
                <li><a href="#products" className="hover:text-stone-900 dark:hover:text-white transition-colors">{t.products}</a></li>
                <li><a href="#why-choose-us" className="hover:text-stone-900 dark:hover:text-white transition-colors">{t.whyUs}</a></li>
                <li><a href="#faq" className="hover:text-stone-900 dark:hover:text-white transition-colors">{t.faq}</a></li>
              </ul>
            </div>

            {/* Product categories */}
            <div className="md:col-span-2 space-y-4" id="footer-links-categories">
              <h4 className="text-xs uppercase font-bold tracking-widest text-stone-900 dark:text-white">
                Collections
              </h4>
              <ul className="space-y-2.5 text-xs font-light">
                <li><a href="#products" className="hover:text-stone-900 dark:hover:text-white transition-colors">{t.catCleaning}</a></li>
                <li><a href="#products" className="hover:text-stone-900 dark:hover:text-white transition-colors">{t.catRegulation}</a></li>
                <li><a href="#products" className="hover:text-stone-900 dark:hover:text-white transition-colors">{t.catSupplementation}</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="md:col-span-4 space-y-4" id="footer-newsletter">
              <h4 className="text-xs uppercase font-bold tracking-widest text-stone-900 dark:text-white">
                Newsletter
              </h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                {currentLang === 'fr' ? 'Inscrivez-vous pour recevoir nos précieux conseils de détoxification et offres exclusives.' :
                 currentLang === 'de' ? 'Melden Sie sich an, um wertvolle Entgiftungstipps und exklusive Angebote zu erhalten.' :
                 'Subscribe to receive our wellness detox recommendations and private product offers.'}
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2" id="newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="votre@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-grow px-4 py-2.5 bg-white dark:bg-stone-900 border border-[#e3d0b8] dark:border-stone-850 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-sky-600 text-white rounded-xl font-semibold text-xs hover:bg-sky-700 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              
              <AnimatePresence>
                {newsletterSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[11px] text-stone-850 dark:text-stone-200 font-medium font-mono"
                  >
                    {currentLang === 'fr' ? '✓ Merci pour votre abonnement !' :
                     currentLang === 'de' ? '✓ Danke für Ihr Abonnement!' :
                     '✓ Thank you for subscribing!'}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Bottom Copyright and Legal links */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-200/50 dark:border-stone-850 flex flex-col md:flex-row items-center justify-between text-[11px] text-stone-500 dark:text-stone-400 gap-4" id="footer-bottom">
            <span>
              &copy; {new Date().getFullYear()} {t.brandName}. {t.allRightsReserved}
            </span>
            
            {/* Legal Documents triggers */}
            <div className="flex flex-wrap gap-4 md:gap-6 font-light">
              <button
                onClick={() => setActiveLegalModal('legal')}
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                {t.legalNotice}
              </button>
              <button
                onClick={() => setActiveLegalModal('privacy')}
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                {t.privacyPolicy}
              </button>
              <button
                onClick={() => setActiveLegalModal('terms')}
                className="hover:text-stone-900 dark:hover:text-white transition-colors"
              >
                {t.termsOfService}
              </button>
            </div>
          </div>
        </footer>

        {/* --- DOCK FLOATING SHORTS (WHATSAPP & CALL) --- */}
        <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-3" id="floating-shortcuts">
          {/* Floating WhatsApp button */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`https://wa.me/237697254607?text=${encodeURIComponent(
              currentLang === 'fr' ? 'Bonjour Orienta Fohew Wheida, je souhaiterais obtenir des informations sur vos compléments.' : 'Hello Orienta Fohew Wheida, I would like to get details about your supplements.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
            aria-label="Contact WhatsApp"
            id="whatsapp-floating-shortcut"
          >
            <Phone className="w-5 h-5" />
            <span className="absolute left-14 bg-white text-stone-800 text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-stone-200/40 shadow-sm opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              WhatsApp Direct
            </span>
          </motion.a>

          {/* Floating Call button */}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:697254607"
            className="p-3.5 bg-sky-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform border border-stone-800/10"
            aria-label="Direct Phone Call"
            id="phone-floating-shortcut"
          >
            <Phone className="w-5 h-5 -rotate-90" />
            <span className="absolute left-14 bg-white text-stone-800 text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full border border-stone-200/40 shadow-sm opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {t.orderCall}
            </span>
          </motion.a>
        </div>

        {/* Back to Top Floating Arrow (right side, above chat widget) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-24 right-6 z-40 p-3 bg-white text-stone-700 rounded-full shadow-lg hover:bg-stone-50 border border-stone-200/20 flex items-center justify-center"
              aria-label="Back to top"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Customer Support Live Chat Widget (Interactive Simulation) */}
        <ChatWidget currentLang={currentLang} />

        {/* Slide-Up Cookie Privacy Banner */}
        <CookiesBanner currentLang={currentLang} />

        {/* Dynamic Legal Document Popup Modals */}
        <LegalModal
          type={activeLegalModal}
          onClose={() => setActiveLegalModal(null)}
          currentLang={currentLang}
        />

      </div>
    </div>
  );
}
