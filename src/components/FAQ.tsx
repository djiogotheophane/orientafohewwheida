import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { faqData } from '../data';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  currentLang: Language;
}

export default function FAQ({ currentLang }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const t = translations[currentLang];

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F2EADF]/50 dark:bg-stone-900/10 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="faq-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] dark:bg-sky-950/40 border border-[#bae6fd] dark:border-sky-900/40 rounded-full mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] dark:text-sky-400 font-mono">
              Aide
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
            {t.faqTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-container">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200/40 dark:border-stone-800 shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-stone-400 flex-shrink-0" />
                    <span className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                      {item.question[currentLang]}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 dark:text-stone-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-sky-600 dark:text-sky-400' : ''
                    }`}
                  />
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-stone-50 dark:border-stone-800/40">
                        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                          {item.answer[currentLang]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
