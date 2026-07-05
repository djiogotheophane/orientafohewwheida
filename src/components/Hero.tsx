import { ArrowRight, Phone } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { motion } from 'motion/react';

interface HeroProps {
  currentLang: Language;
}

export default function Hero({ currentLang }: HeroProps) {
  const t = translations[currentLang];

  // Path to the beautiful custom generated hero image
  const heroImageSrc = '/src/assets/images/fohowhope_hero_1783245668965.jpg';

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with absolute container */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageSrc}
          alt="Natural medicine and wellness background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          id="hero-background-img"
        />
        {/* Soft, luxurious gradient overlays to transition between beautiful beige and light blue themes and ensure absolute legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2EADF]/95 via-[#F2EADF]/85 to-[#D4EBF8]/40 dark:from-stone-950/95 dark:via-stone-950/85 dark:to-stone-900/40 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F2EADF] dark:from-stone-950 via-transparent to-transparent transition-all duration-500" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="max-w-2xl text-left">
          
          {/* Subtle Accent Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] dark:bg-sky-950/40 border border-[#bae6fd] dark:border-sky-900/40 rounded-full mb-6"
            id="hero-tag"
          >
            <span className="w-1.5 h-1.5 bg-[#0284c7] rounded-full animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] dark:text-sky-400 font-mono">
              Orienta Fohew Wheida Wellness
            </span>
          </motion.div>

          {/* Majestic Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 dark:text-white leading-[1.1] mb-6"
            id="hero-headline"
          >
            {t.heroTitle}
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed mb-10 max-w-xl"
            id="hero-subheadline"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
            id="hero-actions"
          >
            {/* Discover Products */}
            <a
              href="#products"
              className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-sky-600 text-white rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-sky-700 transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg group"
              id="hero-products-btn"
            >
              <span>{t.discoverProducts}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Contact Us / Consult */}
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 px-6 py-3.5 bg-white/80 dark:bg-stone-900/80 text-stone-800 dark:text-stone-200 backdrop-blur-sm border border-stone-200 dark:border-stone-800 rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-stone-50 dark:hover:bg-stone-800 transition-all transform hover:-translate-y-0.5 shadow-sm"
              id="hero-contact-btn"
            >
              <Phone className="w-4 h-4" />
              <span>{t.contactUs}</span>
            </a>
          </motion.div>

          {/* Subtle scrolling mouse animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center space-y-2 opacity-50 cursor-pointer"
            id="scroll-indicator"
            onClick={() => {
              document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-[9px] uppercase tracking-widest font-mono text-stone-500">
              Scroll
            </span>
            <div className="w-5 h-8 border-2 border-stone-400 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-stone-500 rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
