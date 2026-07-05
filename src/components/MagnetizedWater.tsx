import React from 'react';
import { GlassWater, Info, ShieldAlert, Sparkle, HelpCircle, Flame } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { motion } from 'motion/react';

interface MagnetizedWaterProps {
  currentLang: Language;
}

export default function MagnetizedWater({ currentLang }: MagnetizedWaterProps) {
  const t = translations[currentLang];

  return (
    <section id="magnetized-water" className="py-20 md:py-28 bg-[#F2EADF]/30 dark:bg-stone-950 transition-colors duration-500 border-t border-stone-200/20 dark:border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Artwork (Glass of pure restructured water) */}
          <div className="lg:col-span-5 relative" id="water-visual-column">
            
            {/* Soft decorative background circles */}
            <div className="absolute -inset-4 bg-sky-100/40 dark:bg-sky-950/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative rounded-3xl overflow-hidden h-[420px] bg-stone-100 dark:bg-stone-900 border border-stone-200/20 dark:border-stone-800 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=800&q=80"
                alt="Eau Magnétisée Structurée"
                className="w-full h-full object-cover animate-fade-in"
                referrerPolicy="no-referrer"
              />
              
              {/* Premium overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md rounded-2xl border border-stone-200/30 dark:border-stone-850 shadow-md">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-sky-100 dark:bg-sky-950 text-[#0369A1] dark:text-sky-400 rounded-lg">
                    <GlassWater className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-white">
                      {currentLang === 'fr' ? 'Eau Moléculaire Active' : 'Active Molecular Water'}
                    </h4>
                    <p className="text-[10px] text-stone-500 dark:text-stone-400 font-light">
                      {currentLang === 'fr' ? 'Structure hexagonale magnétisée' : 'Magnetized hexagonal structure'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Descriptions, manufacturer usage & disclaimer */}
          <div className="lg:col-span-7 space-y-6" id="water-text-column">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] dark:bg-sky-950/40 border border-[#bae6fd] dark:border-sky-900/40 rounded-full">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] dark:text-sky-400 font-mono">
                {currentLang === 'fr' ? 'Technologie de Structuration' : 'Activation Technology'}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white">
              {currentLang === 'fr' ? 'Le Pouvoir de l\'Eau Magnétisée' :
               currentLang === 'de' ? 'Die Kraft des magnetisierten Wassers' :
               'The Power of Restructured Magnetized Water'}
            </h2>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed">
              {currentLang === 'fr' ? 'Le système de magnétisation FOHOW restructure l\'eau potable ordinaire pour réaligner ses molécules sous forme de micro-clusters hexagonaux. Cette modification physique augmente considérablement le pouvoir d\'hydratation cellulaire et l\'absorption des minéraux essentiels par l\'organisme.' :
               currentLang === 'de' ? 'Das FOHOW-Magnetisierungssystem strukturiert gewöhnliches Trinkwasser um, so dass sich seine Moleküle in hexagonalen Mikro-Clustern anordnen. Diese physikalische Veränderung steigert die zelluläre Flüssigkeitsaufnahme.' :
               'The FOHOW magnetization system restructures ordinary drinking water to realign its molecules into hexagonal micro-clusters. This physical refinement significantly enhances cellular hydration and supports mineral absorption.'}
            </p>

            {/* Manufacturer usage instructions cards */}
            <div className="space-y-4 pt-4">
              <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-white">
                {currentLang === 'fr' ? 'Recommandations d\'Utilisation du Fabricant' : 'Manufacturer\'s Guidelines for Use'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Instruction 1 */}
                <div className="p-4 bg-white dark:bg-stone-900/30 rounded-2xl border border-stone-200/40 dark:border-stone-800/40 shadow-xs">
                  <div className="flex items-center space-x-2 mb-2 text-sky-700 dark:text-sky-400">
                    <Sparkle className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {currentLang === 'fr' ? '1. Activation' : '1. Activation'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                    {currentLang === 'fr' ? 'Verser de l\'eau potable propre dans le gobelet d\'activation. Laisser reposer de 5 à 15 minutes pour permettre au champ magnétique de structurer les liaisons moléculaires.' :
                     currentLang === 'de' ? 'Gießen Sie sauberes Trinkwasser in den Aktivierungsbecher. 5 bis 15 Minuten ruhen lassen, damit das Magnetfeld die Molekularstruktur ausrichten kann.' :
                     'Pour clean drinking water into the active magnetization cup. Let it stand for 5 to 15 minutes to allow the dual magnetic field to fully realign the molecular clusters.'}
                  </p>
                </div>

                {/* Instruction 2 */}
                <div className="p-4 bg-white dark:bg-stone-900/30 rounded-2xl border border-stone-200/40 dark:border-stone-800/40 shadow-xs">
                  <div className="flex items-center space-x-2 mb-2 text-sky-700 dark:text-sky-400">
                    <GlassWater className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {currentLang === 'fr' ? '2. Consommation' : '2. Consumption'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                    {currentLang === 'fr' ? 'Boire régulièrement tout au long de la journée pour stimuler la détoxification métabolique. Consommer idéalement dans les heures suivant la magnétisation.' :
                     currentLang === 'de' ? 'Trinken Sie das Wasser regelmäßig über den Tag verteilt, um den Stoffwechsel zu aktivieren. Am besten innerhalb weniger Stunden nach der Aktivierung trinken.' :
                     'Drink regularly throughout the day to support metabolic detoxification. For maximum hydration benefits, consume the active water within a few hours of magnetization.'}
                  </p>
                </div>
              </div>
            </div>

            {/* MANDATORY DISCLAIMER BOX */}
            <div className="p-5 bg-sky-50/60 dark:bg-sky-950/20 rounded-2xl border border-sky-100 dark:border-sky-900/40 flex items-start space-x-3.5 shadow-xs" id="water-disclaimer">
              <div className="p-2 bg-sky-100 dark:bg-sky-950 text-[#0369A1] dark:text-sky-400 rounded-lg flex-shrink-0 mt-0.5">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-semibold text-stone-900 dark:text-white uppercase tracking-wider">
                  {currentLang === 'fr' ? 'Note d\'Information Importante' : 'Important Note'}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                  {currentLang === 'fr' ? 'Conformément aux directives d\'usage, nous tenons à préciser que bien que l\'eau magnétisée favorise une excellente assimilation hydrique, les ressentis physiologiques et les bénéfices constatés varient naturellement d\'un utilisateur à l\'autre selon leur mode de vie et métabolisme.' :
                   currentLang === 'de' ? 'Wir weisen darauf hin, dass die physiologische Wirkung und die wahrgenommenen Vorteile von magnetisiertem Wasser je nach Lebensstil und individuelsem Stoffwechsel von Person zu Person variieren.' :
                   'Please note that while restructured magnetized water supports superior hydration and overall metabolic efficiency, the actual physiological responses and felt benefits vary naturally from person to person based on lifestyle, biological makeup, and consistency of use.'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
