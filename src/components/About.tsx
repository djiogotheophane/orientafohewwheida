import { Award, Leaf, ShieldCheck, Heart, Truck, Headphones, Smile, Check } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { motion } from 'motion/react';

interface AboutProps {
  currentLang: Language;
}

export default function About({ currentLang }: AboutProps) {
  const t = translations[currentLang];

  const values = [
    {
      icon: Award,
      title: t.valueQuality,
      description: t.valueQualityDesc,
    },
    {
      icon: Leaf,
      title: t.valueNatural,
      description: t.valueNaturalDesc,
    },
    {
      icon: ShieldCheck,
      title: t.valuePrevention,
      description: t.valuePreventionDesc,
    },
    {
      icon: Heart,
      title: t.valueSupport,
      description: t.valueSupportDesc,
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: t.featProducts,
      desc: t.featProductsDesc,
    },
    {
      icon: Award,
      title: t.featQuality,
      desc: t.featQualityDesc,
    },
    {
      icon: Heart,
      title: t.featSupport,
      desc: t.featSupportDesc,
    },
    {
      icon: Truck,
      title: t.featDelivery,
      desc: t.featDeliveryDesc,
    },
    {
      icon: Headphones,
      title: t.featService,
      desc: t.featServiceDesc,
    },
    {
      icon: Smile,
      title: t.featSatisfaction,
      desc: t.featSatisfactionDesc,
    },
  ];

  return (
    <div id="story-container">
      {/* SECTION 1: ABOUT US & HISTORY */}
      <section id="story" className="py-20 md:py-28 bg-[#F2EADF] dark:bg-stone-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Text Details */}
            <div className="lg:col-span-7 space-y-6" id="about-text-column">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] border border-[#bae6fd] rounded-full">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] font-mono">
                  {t.story}
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white" id="about-heading">
                {t.aboutSubtitle}
              </h2>
              
              <div className="space-y-4 text-stone-700 dark:text-stone-300 font-sans font-light leading-relaxed text-sm sm:text-base">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
              </div>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="about-bullets">
                {['Sagesse Ancestrale & Science', 'Pratique Préventive', 'Accompagnement Suivi', 'Normes de Pureté Certifiées'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D4EBF8] flex items-center justify-center text-[#0369A1] flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-stone-800 dark:text-stone-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Elegant Visual Grid of Values */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-values-grid">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-5 bg-white dark:bg-stone-900 rounded-2xl shadow-sm border border-stone-200/40 dark:border-stone-800/40 flex flex-col items-start transition-all"
                  >
                    <div className="p-3 bg-[#E6F2F7] dark:bg-sky-950/40 rounded-xl text-[#0284c7] dark:text-sky-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                      {v.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE US */}
      <section id="why-choose-us" className="py-20 bg-[#FAF6F0] dark:bg-stone-900/20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16" id="why-header">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] border border-[#bae6fd] rounded-full mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] font-mono">
                {t.whyUs}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
              {t.whyTitle}
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-light">
              {t.whySubtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-features-grid">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group p-6 bg-white/60 dark:bg-stone-900/30 rounded-2xl border border-stone-200/40 dark:border-stone-800/40 hover:bg-white dark:hover:bg-stone-850 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-3.5 bg-[#D4EBF8] dark:bg-sky-950/40 rounded-xl text-[#0369A1] dark:text-sky-400 w-fit shadow-sm group-hover:scale-105 transition-transform duration-300 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-stone-900 dark:text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                    {feat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Core counter statistics band */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-stone-200/60 dark:border-stone-800/60 text-center" id="stat-counters">
            {[
              { count: '100%', label: 'Naturel / Pur' },
              { count: '15k+', label: 'Clients Heureux' },
              { count: '24/7', label: 'Support WhatsApp' },
              { count: '15 Min', label: 'Consultation Offerte' },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-600 dark:text-sky-400">
                  {stat.count}
                </span>
                <span className="block text-[10px] sm:text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
