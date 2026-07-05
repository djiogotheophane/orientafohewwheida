import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Calendar, ChevronDown, Sun, Moon } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ currentLang, setLang, darkMode, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t.home, href: '#home' },
    { label: t.story, href: '#story' },
    { label: t.products, href: '#products' },
    { label: t.whyUs, href: '#why-choose-us' },
    { label: t.faq, href: '#faq' },
    { label: t.contact, href: '#contact' },
  ];

  const handleLangChange = (lang: Language) => {
    setLang(lang);
    setShowLangMenu(false);
  };

  const getLangLabel = (lang: Language) => {
    switch (lang) {
      case 'fr': return 'FR';
      case 'en': return 'EN';
      case 'de': return 'DE';
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#F2EADF]/95 dark:bg-stone-950/95 backdrop-blur-md shadow-xs border-b border-[#bae6fd]/50 dark:border-stone-850/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center space-x-2 group" id="logo-link">
            <span className="w-9 h-9 flex items-center justify-center bg-sky-600 rounded-full text-white font-serif font-bold text-lg tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-300">
              F
            </span>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-widest text-stone-900 dark:text-white transition-colors">
                {t.brandName}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-stone-500 dark:text-stone-400 font-mono -mt-1">
                {t.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-stone-600 dark:text-stone-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Tools (Lang, CTAs) */}
          <div className="hidden md:flex items-center space-x-4" id="action-tools">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
              aria-label="Toggle dark mode"
              id="theme-toggle"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center space-x-1 px-3 py-1.5 text-xs font-semibold tracking-wider rounded-full border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors"
                id="language-picker"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{getLangLabel(currentLang)}</span>
                <ChevronDown className="w-3 h-3 opacity-60" />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-stone-900 rounded-lg shadow-lg border border-stone-100 dark:border-stone-800 overflow-hidden py-1 z-50"
                  >
                    {(['fr', 'en', 'de'] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLangChange(lang)}
                        className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors ${
                          currentLang === lang ? 'text-[#0369A1] dark:text-sky-400 font-bold bg-sky-50 dark:bg-sky-950/40' : 'text-stone-700 dark:text-stone-300'
                        }`}
                      >
                        {t[`lang${lang.toUpperCase()}`]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Consultation CTA */}
            <a
              href="#appointment"
              className="flex items-center space-x-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-all transform hover:-translate-y-0.5 shadow-xs"
              id="booking-nav-btn"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.bookAppointment}</span>
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mobile dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-900"
              aria-label="Toggle dark mode mobile"
              id="mobile-theme-toggle"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500 animate-pulse" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Quick Lang shortcut on mobile */}
            <button
              onClick={() => {
                const order: Language[] = ['fr', 'en', 'de'];
                const nextIndex = (order.indexOf(currentLang) + 1) % order.length;
                setLang(order[nextIndex]);
              }}
              className="p-2 text-xs font-semibold rounded-md text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-850 flex items-center space-x-1"
              id="mobile-lang-btn"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{currentLang}</span>
            </button>

            {/* Hamburger icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 focus:outline-none"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 shadow-xl overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-stone-700 dark:text-stone-300 hover:bg-[#D4EBF8]/20 dark:hover:bg-[#D4EBF8]/5 hover:text-sky-700 dark:hover:text-sky-400 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t border-stone-100 dark:border-stone-800 px-4 flex flex-col space-y-3">
                <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                  <span>Langue / Language / Sprache:</span>
                  <div className="flex space-x-2">
                    {(['fr', 'en', 'de'] as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => {
                          setLang(l);
                          setIsOpen(false);
                        }}
                        className={`px-2 py-1 rounded font-bold uppercase ${
                          currentLang === l
                            ? 'bg-[#D4EBF8] text-[#0369A1] dark:bg-sky-950/40 dark:text-sky-400'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                        }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <a
                  href="#appointment"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-sky-600 text-white rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-sky-700 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.bookAppointment}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
