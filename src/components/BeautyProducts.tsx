import React, { useState } from 'react';
import { Sparkles, MessageSquare, Phone, ChevronRight, Check } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface BeautyProductsProps {
  currentLang: Language;
}

interface BeautyItem {
  id: string;
  name: string;
  tagline: { fr: string; en: string; de: string };
  image: string;
  gallery: string[];
  description: { fr: string; en: string; de: string };
  benefits: { fr: string[]; en: string[]; de: string[] };
  usage: { fr: string; en: string; de: string };
}

export default function BeautyProducts({ currentLang }: BeautyProductsProps) {
  const [activeItem, setActiveItem] = useState<BeautyItem | null>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const t = translations[currentLang];

  const beautyItems: BeautyItem[] = [
    {
      id: 'pate-fohow',
      name: 'Pâte Dentifrice FOHOW',
      tagline: {
        fr: 'Hygiène bucco-dentaire & Soins quotidiens',
        en: 'Oral Hygiene & Daily Care',
        de: 'Mundhygiene & Tägliche Pflege'
      },
      image: 'https://images.unsplash.com/photo-1597854710119-a5a84391458e?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1597854710119-a5a84391458e?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1559599141-3815480a826b?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'Formulée avec de précieux extraits de Cordyceps et d\'herbes médicinales traditionnelles, cette pâte dentifrice premium offre une protection buccale d\'exception. Elle régule l\'équilibre biologique de la bouche, prévient les irritations et laisse une haleine pure.',
        en: 'Formulated with precious Cordyceps extracts and traditional medicinal plants, this premium toothpaste offers exceptional oral protection. It regulates the mouth\'s biological balance, prevents irritation, and ensures long-lasting fresh breath.',
        de: 'Formuliert mit wertvollen Cordyceps-Extrakten und traditionellen Heilkräutern bietet diese Premium-Zahnpasta einen außergewöhnlichen Mundschutz. Sie reguliert das biologische Gleichgewicht, beugt Reizungen vor und schenkt reinen Atem.'
      },
      benefits: {
        fr: [
          'Nettoyage en profondeur respectueux de l\'émail dentaire',
          'Soutien des gencives sensibles et réduction des saignements',
          'Régulation de la microflore bucco-dentaire naturelle'
        ],
        en: [
          'Deep cleansing gentle on tooth enamel',
          'Supports sensitive gums and helps reduce bleeding',
          'Regulates the natural oral microflora balance'
        ],
        de: [
          'Tiefenreinigung, die den Zahnschmelz schont',
          'Unterstützt empfindliches Zahnfleisch und lindert Zahnfleischbluten',
          'Reguliert die natürliche Mundmikroflora'
        ]
      },
      usage: {
        fr: 'Utiliser matin et soir pour un brossage de 3 minutes. Convient à toute la famille.',
        en: 'Use morning and evening for 3 minutes of brushing. Suitable for the entire family.',
        de: 'Morgens und abends für ein 3-minütiges Zähneputzen verwenden. Für die ganze Familie geeignet.'
      }
    },
    {
      id: 'antibacterial-gel',
      name: 'Gel Antibactérien FOHOW',
      tagline: {
        fr: 'Hygiène personnelle & Soin de la peau',
        en: 'Personal Hygiene & Skin Comfort',
        de: 'Persönliche Hygiene & Hautpflege'
      },
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'Un gel protecteur hautement efficace conçu pour assainir et régénérer l\'épiderme. Formulé à partir de plantes actives, il procure un confort immédiat, calme les rougeurs et protège la barrière cutanée des agressions extérieures.',
        en: 'A highly effective protective gel designed to cleanse and regenerate the skin. Formulated from active botanical ingredients, it provides immediate comfort, calms redness, and shields the cutaneous barrier.',
        de: 'Ein hochwirksames Schutzgel zur sanften Desinfektion und Regeneration der Haut. Aus pflanzlichen Aktivstoffen formuliert, spendet es sofortigen Komfort, beruhigt Rötungen und schützt die Hautbarriere.'
      },
      benefits: {
        fr: [
          'Élimination en douceur des impuretés cutanées',
          'Sensation de fraîcheur et de pureté immédiate',
          'Idéal pour apaiser les irritations et les peaux sensibles'
        ],
        en: [
          'Gently eliminates cutaneous impurities',
          'Provides an instant feeling of freshness and purity',
          'Ideal for soothing irritations and comforting sensitive skin'
        ],
        de: [
          'Sanfte Beseitigung von Hautunreinheiten',
          'Sofortiges Gefühl von Frische und Reinheit',
          'Ideal zur Linderung von Irritationen bei empfindlicher Haut'
        ]
      },
      usage: {
        fr: 'Appliquer une noisette sur la zone concernée. Masser délicatement jusqu\'à absorption complète.',
        en: 'Apply a small amount to the targeted area. Massage gently until fully absorbed.',
        de: 'Eine kleine Menge auf die betroffene Stelle auftragen. Sanft einmassieren, bis es vollständig eingezogen ist.'
      }
    },
    {
      id: 'guifei-bao',
      name: 'Guifei Bao',
      tagline: {
        fr: 'Bien-être intime féminin & Confort quotidien',
        en: 'Feminine Intimate Well-being & Comfort',
        de: 'Weibliches Intimwohlbefinden'
      },
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'Pilules de bien-être intime formulées selon les recettes secrètes de l\'herboristerie traditionnelle. Guifei Bao soutient l\'équilibre de la flore féminine naturelle, purifie délicatement et favorise le confort intime au quotidien.',
        en: 'Intimate wellness pearls formulated in strict accordance with ancestral herbal recipes. Guifei Bao supports the natural feminine flora balance, purifies gently, and enhances daily confidence.',
        de: 'Intimpflegeperlen, formuliert nach geheimen Rezepturen der traditionellen Kräuterkunde. Guifei Bao unterstützt das natürliche weibliche Mikrobiom, reinigt sanft und stärkt das tägliche Wohlbefinden.'
      },
      benefits: {
        fr: [
          'Soutien naturel de la flore et des défenses intimes',
          'Réduction de l\'inconfort et des sensations de sécheresse',
          'Action purifiante et détoxifiante douce en profondeur'
        ],
        en: [
          'Natural support for intimate flora and local defenses',
          'Reduces discomfort and feelings of dryness',
          'Gentle and deep purifying and detoxifying action'
        ],
        de: [
          'Natürliche Unterstützung der Intimflora und der Abwehrkräfte',
          'Verringerung von Missempfindungen und Trockenheitsgefühl',
          'Sanfte, tiefenwirksame Reinigung und Entgiftung'
        ]
      },
      usage: {
        fr: 'Suivre attentivement la notice incluse. Un entretien conseil personnalisé est recommandé pour ce produit.',
        en: 'Follow the included instructions carefully. A personalized consultation is highly recommended for this product.',
        de: 'Die beiliegende Packungsbeilage sorgfältig beachten. Für dieses Produkt wird eine persönliche Beratung empfohlen.'
      }
    },
    {
      id: 'fohow-serviettes',
      name: 'FOHOW Serviettes Hygiéniques',
      tagline: {
        fr: 'Hygiène féminine, Confort & Protection',
        en: 'Feminine Hygiene, Comfort & Protection',
        de: 'Damenbinden, Komfort & Schutz'
      },
      image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'Les serviettes FOHOW combinent une absorption de haute performance et une puce d\'anions brevetée pour une hygiène optimale. Elles luttent naturellement contre le développement bactérien et maintiennent la peau parfaitement sèche.',
        en: 'FOHOW sanitary pads combine high-performance absorption with a patented anion chip for optimal hygiene. They naturally combat bacterial development while keeping the skin dry and comfortable.',
        de: 'Die FOHOW-Damenbinden verbinden Hochleistungsabsorption mit einem patentierten Anionen-Chip für optimale Hygiene. Sie wirken der Bakterienentwicklung entgegen und halten die Haut angenehm trocken.'
      },
      benefits: {
        fr: [
          'Puce d\'anions brevetée émettant des infrarouges lointains',
          'Ultra-respirantes pour prévenir l\'humidité et les irritations',
          'Conception anatomique étanche assurant une sécurité totale'
        ],
        en: [
          'Patented active anion chip emitting far-infrared rays',
          'Highly breathable materials preventing dampness and itching',
          'Anatomical leak-proof design ensuring total peace of mind'
        ],
        de: [
          'Patentierter Anionen-Chip, der ferninfrarote Strahlen abgibt',
          'Besonders atmungsaktiv, um Feuchtigkeit und Juckreiz vorzubeugen',
          'Auslaufsicheres anatomisches Design für absolute Sicherheit'
        ]
      },
      usage: {
        fr: 'Idéal pour un usage quotidien (protège-slips) ou pendant la période de cycle menstruel (serviettes jour / nuit).',
        en: 'Perfect for daily use (panty liners) or during menstrual cycles (day & night pads).',
        de: 'Perfekt für den täglichen Gebrauch (Slipeinlagen) oder während der Menstruation (Tag- & Nachtbinden).'
      }
    }
  ];

  const getWhatsAppLink = (itemName: string) => {
    const phone = '237697254607';
    let message = '';
    if (currentLang === 'fr') {
      message = `Bonjour Orienta Fohew Wheida, je souhaiterais commander le produit de beauté : *${itemName}*. Pouvez-vous me guider ? Merci !`;
    } else if (currentLang === 'de') {
      message = `Hallo Orienta Fohew Wheida, ich möchte das Kosmetikprodukt bestellen: *${itemName}*. Können Sie mir bitte weiterhelfen? Vielen Dank!`;
    } else {
      message = `Hello Orienta Fohew Wheida, I am interested in purchasing the beauty product: *${itemName}*. Could you please assist me? Thank you!`;
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="beauty" className="py-20 md:py-28 bg-[#F2EADF]/40 dark:bg-stone-900/10 transition-colors duration-500 border-t border-stone-200/20 dark:border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="beauty-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] dark:bg-sky-950/40 border border-[#bae6fd] dark:border-sky-900/40 rounded-full mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] dark:text-sky-400 font-mono">
              {currentLang === 'fr' ? 'Élégance & Soins' : currentLang === 'de' ? 'Eleganz & Pflege' : 'Elegance & Care'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
            {currentLang === 'fr' ? 'Produits de Beauté & Soins Intimes' :
             currentLang === 'de' ? 'Schönheits- & Intimpflegeprodukte' :
             'Beauty & Intimate Care Products'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
            {currentLang === 'fr' ? 'Une galerie élégante de soins précieux formulés pour préserver l\'éclat quotidien, l\'hygiène personnelle et l\'harmonie de votre intimité.' :
             currentLang === 'de' ? 'Eine erlesene Kollektion kostbarer Pflegeprodukte für Ihre tägliche Ausstrahlung, persönliche Hygiene und weibliche Intimbalance.' :
             'An elegant gallery of exquisite treatments formulated to safeguard daily glow, personal hygiene, and intimate feminine harmony.'}
          </p>
        </div>

        {/* Beauty Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="beauty-cards-grid">
          {beautyItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with hover zoom */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button
                    onClick={() => {
                      setActiveItem(item);
                      setSelectedImageIdx(0);
                    }}
                    className="px-3.5 py-1.5 bg-white text-stone-900 text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-md hover:bg-sky-50"
                  >
                    {currentLang === 'fr' ? 'Aperçu Rapide' : currentLang === 'de' ? 'Schnellansicht' : 'Quick View'}
                  </button>
                </div>
              </div>

              {/* Info details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-mono text-sky-700 tracking-widest mb-1.5">
                    {item.tagline[currentLang]}
                  </span>
                  <h3 className="font-serif font-bold text-base text-stone-900 mb-2 group-hover:text-sky-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                    {item.description[currentLang]}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-4 border-t border-stone-100 space-y-2">
                  <button
                    onClick={() => {
                      setActiveItem(item);
                      setSelectedImageIdx(0);
                    }}
                    className="w-full flex items-center justify-center space-x-1.5 py-2 bg-stone-50 text-stone-800 hover:bg-sky-50 rounded-xl text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all border border-stone-200/40"
                  >
                    <span>{currentLang === 'fr' ? 'Voir Détails' : currentLang === 'de' ? 'Details ansehen' : 'See Details'}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                  <a
                    href={getWhatsAppLink(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-1.5 py-2 bg-sky-600 text-white hover:bg-sky-700 rounded-xl text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>{t.orderWhatsApp}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* DETAILED DIALOG MODAL */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="beauty-details-modal">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200/20 z-10 max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-1.5 bg-stone-100 text-stone-600 rounded-full hover:bg-stone-200 transition-colors z-20"
                aria-label="Close modal"
              >
                <span className="text-xs font-bold px-1.5">✕</span>
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8">
                
                {/* Left column: Images Gallery */}
                <div className="md:col-span-5 space-y-4">
                  <div className="h-64 rounded-2xl overflow-hidden bg-stone-100">
                    <img
                      src={activeItem.gallery[selectedImageIdx]}
                      alt={activeItem.name}
                      className="w-full h-full object-cover transition-all"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Thumbnails */}
                  <div className="flex gap-2">
                    {activeItem.gallery.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImageIdx(i)}
                        className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImageIdx === i ? 'border-sky-600' : 'border-transparent opacity-60'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right column: Details Text */}
                <div className="md:col-span-7 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-sky-700">
                        {activeItem.tagline[currentLang]}
                      </span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 mt-1">
                        {activeItem.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {activeItem.description[currentLang]}
                    </p>

                    {/* Benefits list */}
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-400">
                        {t.benefitsLabel}
                      </h4>
                      <ul className="space-y-1 text-xs text-stone-700 font-light">
                        {activeItem.benefits[currentLang].map((ben, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Usage Advice */}
                    <div className="space-y-1">
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-400">
                        {t.usageLabel}
                      </h4>
                      <p className="text-xs text-stone-600 font-light leading-relaxed">
                        {activeItem.usage[currentLang]}
                      </p>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-6 mt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:697254607"
                      className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-stone-100 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{t.orderCall}</span>
                    </a>
                    <a
                      href={getWhatsAppLink(activeItem.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-sky-600 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-sky-700 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{t.orderWhatsApp}</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
