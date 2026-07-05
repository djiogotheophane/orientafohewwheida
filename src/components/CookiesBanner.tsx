import { useState, useEffect } from 'react';
import { ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface CookiesBannerProps {
  currentLang: Language;
}

export default function CookiesBanner({ currentLang }: CookiesBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    // Check if the user already accepted cookies
    const accepted = localStorage.getItem('orientafohewwheida_cookies_accepted');
    if (!accepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('orientafohewwheida_cookies_accepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('orientafohewwheida_cookies_accepted', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md bg-white border border-stone-200/40 shadow-2xl p-5 rounded-3xl z-40 flex flex-col space-y-4"
          id="cookies-banner-box"
        >
          <div className="flex items-start space-x-3 text-xs sm:text-sm">
            <div className="p-2 bg-sky-50 text-sky-700 rounded-full flex-shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <p className="text-stone-600 font-light leading-relaxed text-xs">
              {t.cookieText}
            </p>
          </div>

          <div className="flex items-center justify-end space-x-2">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-700"
            >
              {t.cookieDecline}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-sky-600 text-white rounded-xl text-[10px] sm:text-xs font-semibold uppercase tracking-wider hover:bg-sky-700"
            >
              {t.cookieAccept}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
