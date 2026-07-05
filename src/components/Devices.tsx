import React, { useState } from 'react';
import { Activity, MessageSquare, Phone, ShieldCheck, Cpu, Play, Image as ImageIcon, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface DevicesProps {
  currentLang: Language;
}

interface DeviceItem {
  id: string;
  name: string;
  tagline: { fr: string; en: string; de: string };
  image: string;
  gallery: string[];
  description: { fr: string; en: string; de: string };
  techSpecs: { fr: string[]; en: string[]; de: string[] };
  usage: { fr: string; en: string; de: string };
}

export default function Devices({ currentLang }: DevicesProps) {
  const [selectedDevice, setSelectedDevice] = useState<DeviceItem | null>(null);
  const [activeGalleryImageIdx, setActiveGalleryImageIdx] = useState(0);

  const t = translations[currentLang];

  const devicesList: DeviceItem[] = [
    {
      id: 'fohoway-masseur',
      name: 'FOHOWAY – Masseur de circulation sanguine',
      tagline: {
        fr: 'Massage, Relaxation, Bien-être & Confort circulatoire',
        en: 'Massage, Relaxation, Well-being & Blood Circulation',
        de: 'Massage, Entspannung, Wohlbefinden & Durchblutung'
      },
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1519823551278-64ac92834909?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'Le masseur FOHOWAY utilise des micro-vibrations intelligentes pour stimuler les zones réflexogènes des pieds et relancer énergiquement la circulation sanguine. C\'est l\'équipement idéal pour éliminer la fatigue accumulée, soulager les jambes lourdes et purifier les canaux d\'énergie corporelle.',
        en: 'The FOHOWAY massager relies on intelligent micro-vibrations to stimulate reflex zones on the feet and actively improve blood circulation. It is the ultimate tool to combat accumulated exhaustion, relieve heavy legs, and clear energy channels.',
        de: 'Das FOHOWAY-Massagegerät nutzt intelligente Mikrovibrationen, um die Reflexzonen der Füße zu stimulieren und die Blutzirkulation spürbar anzuregen. Ideal, um Müdigkeit abzubauen, schwere Beine zu entlasten und die Energiebahnen zu klären.'
      },
      techSpecs: {
        fr: [
          'Fréquence de vibration ajustable avec télécommande intelligente',
          'Conception ergonomique adaptée à toutes les morphologies de pieds',
          'Système de magnétothérapie intégré de haute intensité',
          'Faible consommation énergétique et protection anti-surchauffe'
        ],
        en: [
          'Adjustable vibration frequency with an intelligent remote',
          'Ergonomic layout suitable for all foot shapes and sizes',
          'Built-in high-intensity magnetotherapy system',
          'Low power consumption and automatic overheating protection'
        ],
        de: [
          'Einstellbare Vibrationsfrequenz über intelligente Fernbedienung',
          'Ergonomisches Design, für jede Fußform geeignet',
          'Integriertes hochintensives Magnettherapiesystem',
          'Geringer Energieverbrauch und Überhitzungsschutz'
        ]
      },
      usage: {
        fr: 'S\'asseoir confortablement, poser les pieds nus sur la plateforme de massage. Allumer l\'appareil et choisir l\'intensité douce pour commencer. Pratique conseillée : 15 à 30 minutes par jour.',
        en: 'Sit down comfortably and place bare feet on the massage platform. Turn the device on and start with a gentle intensity. Recommended usage: 15 to 30 minutes daily.',
        de: 'Bequem hinsetzen, die nackten Füße auf die Massageplattform stellen. Das Gerät einschalten und mit geringer Intensität beginnen. Empfohlene Anwendung: 15 bis 30 Minuten täglich.'
      }
    },
    {
      id: 'portable-massage',
      name: 'Portable Massage Machine',
      tagline: {
        fr: 'Massage polyvalent, Relaxation & Utilisation à domicile',
        en: 'Versatile Massage, Muscle Release & Home Use',
        de: 'Vielseitige Massage, Entspannung für zu Hause'
      },
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1519823551278-64ac92834909?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'Cet appareil de massage portatif de haute technologie apporte le soulagement des spas professionnels directement chez vous. Conçu pour cibler les nœuds musculaires, il combine des impulsions bioénergétiques et des vagues vibratoires pour détendre instantanément le corps entier.',
        en: 'This high-tech hand-held massage gun delivers professional-grade muscle relief right in the comfort of your home. Engineered to target deep muscle tension, it combines high-performance pulses and percussion.',
        de: 'Dieses tragbare High-Tech-Massagegerät bringt professionelle Muskelentspannung direkt zu Ihnen nach Hause. Entwickelt zur gezielten Behandlung von Muskelknoten, kombiniert es bioenergetische Impulse und Vibrationswellen.'
      },
      techSpecs: {
        fr: [
          'Moteur brushless silencieux à couple élevé (technologie Whisper)',
          'Têtes de massage interchangeables pour s\'adapter à chaque zone musculaire',
          'Batterie rechargeable lithium-ion longue autonomie (jusqu\'à 4 heures)',
          'Coque ergonomique antidérapante en silicone premium'
        ],
        en: [
          'Brushless quiet high-torque motor (Whisper technology)',
          'Interchangeable massage nodes to suit each muscle group',
          'Rechargeable lithium-ion battery with long battery life (up to 4 hours)',
          'Ergonomic non-slip grip premium silicone shell'
        ],
        de: [
          'Bürstenloser, leiser Hochleistungsmotor (Whisper-Technologie)',
          'Austauschbare Massageköpfe für jede Muskelgruppe',
          'Wiederaufladbarer Lithium-Ionen-Akku mit langer Laufzeit (bis zu 4 Std.)',
          'Ergonomisches, rutschfestes Gehäuse aus Premium-Silikon'
        ]
      },
      usage: {
        fr: 'Sélectionner la tête de massage appropriée. Allumer l\'appareil et le déplacer lentement le long des groupes musculaires sans appuyer excessivement. Utiliser 5 à 10 minutes par zone.',
        en: 'Select the appropriate massage head. Switch the device on and slide it slowly along the muscle fibers without applying excessive pressure. Spend 5 to 10 minutes per area.',
        de: 'Den passenden Massagekopf wählen. Das Gerät einschalten und langsam entlang der Muskelgruppen führen, ohne zu stark aufzudrücken. 5 bis 10 Minuten pro Zone anwenden.'
      }
    },
    {
      id: 'collier-cou',
      name: 'Collier du cou',
      tagline: {
        fr: 'Accessoire de confort destiné à la détente musculaire',
        en: 'Comfort Accessory Designed for Neck Muscle Relaxation',
        de: 'Komfort-Halsmanschette zur Muskelentspannung'
      },
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'Le collier cervical thermique FOHOW exploite les propriétés d\'infrarouges lointains et de magnétothérapie grâce à des minéraux de tourmaline intégrés. Il aide à relâcher les tensions musculaires du cou, à améliorer la microcirculation locale et à corriger la fatigue due aux écrans.',
        en: 'The FOHOW thermal neck collar harnesses the healing properties of far-infrared rays and magnetic therapy through integrated tourmaline gemstones. It relaxes stiff neck muscles, improves local microcirculation, and relieves computer-related neck strain.',
        de: 'Die FOHOW-Wärmehalsmanschette nutzt die Eigenschaften von Ferninfrarotstrahlung und Magnettherapie durch integrierte Turmalin-Mineralien. Sie entspannt die Nackenmuskulatur, verbessert die lokale Mikrozirkulation und lindert Ermüdung.'
      },
      techSpecs: {
        fr: [
          'Aimants auto-chauffants à base de tourmaline micronisée',
          'Fermeture auto-agrippante douce et réglable de haute qualité',
          'Matériau néoprène souple, hautement respirant et hypoallergénique',
          'Effet thermique naturel sans raccordement électrique'
        ],
        en: [
          'Self-heating magnets made with premium micronized tourmaline',
          'High-quality, soft, and adjustable hook-and-loop strap',
          'Flexible, breathable, and hypoallergenic neoprene textile',
          'Natural thermal effect requiring no battery or electric cables'
        ],
        de: [
          'Selbsterwärmende Magnete auf Basis von mikronisiertem Turmalin',
          'Hochwertiger, weicher und verstellbarer Klettverschluss',
          'Flexibles, atmungsaktives und hypoallergenes Neopren-Material',
          'Natürlicher Thermo-Effekt ohne Stromanschluss'
        ]
      },
      usage: {
        fr: 'Humidifier légèrement la zone centrale auto-chauffante avec un chiffon humide, puis ajuster le collier fermement autour du cou. La chaleur douce apparaît au bout de 10 à 20 minutes.',
        en: 'Lightly moisten the central self-heating part with a damp cloth, then secure the collar around your neck. You will start feeling a soothing heat within 10 to 20 minutes.',
        de: 'Befeuchten Sie die selbsterwärmende Zone leicht mit einem feuchten Tuch und legen Sie die Manschette eng um den Nacken. Die sanfte Wärme setzt nach 10 bis 20 Minuten ein.'
      }
    },
    {
      id: 'ceinture-taille',
      name: 'Ceinture de la taille',
      tagline: {
        fr: 'Équipement de massage thermique & Soutien lombaire',
        en: 'Thermal Massage & Lumbar Support Belt',
        de: 'Thermomassage-Gürtel & Lendenwirbelstütze'
      },
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'La ceinture lombaire thermique FOHOW épouse parfaitement le bas du dos pour procurer un effet de massage chauffant naturel et constant. Grâce aux aimants et à la tourmaline, elle soulage durablement l\'inconfort lombaire, soutient la posture et revitalise la zone abdominale.',
        en: 'The FOHOW thermal waist belt wraps perfectly around the lower back to offer a natural, continuous heating and massage sensation. Powered by active magnets and tourmaline, it relieves lumbar strain and improves posture.',
        de: 'Der FOHOW-Lendenwärmegürtel schmiegt sich perfekt an den unteren Rücken an, um einen natürlichen, konstanten Wärmemassage-Effekt zu erzielen. Dank der Magnete und des Turmalins lindert er Lendenbeschwerden.'
      },
      techSpecs: {
        fr: [
          'Larges plaques auto-chauffantes intégrées (zones avant et arrière)',
          'Sangles d\'ajustement double tension pour un maintien sur mesure',
          'Structure ergonomique renforcée pour un excellent maintien de la colonne',
          'Matériau respirant de qualité aéronautique pour un port prolongé'
        ],
        en: [
          'Large built-in self-heating panels (covering front and back)',
          'Double-tension adjustment straps for custom customized hold',
          'Reinforced ergonomic design supporting correct spinal alignment',
          'Premium breathable fabric designed for extended day wear'
        ],
        de: [
          'Große integrierte selbsterwärmende Platten (Vorder- und Rückseite)',
          'Doppelspannungs-Gurte für individuellen Halt',
          'Verstärkte ergonomische Struktur für optimalen Halt der Wirbelsäule',
          'Atmungsaktives Material für langes und angenehmes Tragen'
        ]
      },
      usage: {
        fr: 'Humidifier légèrement la zone thermo-active et la fixer confortablement autour de la taille. À porter 1 à 2 fois par jour pendant 20 à 40 minutes selon votre confort.',
        en: 'Slightly moisten the active thermal area and secure the belt snugly around the waist. Wear 1 to 2 times daily for 20 to 40 minutes depending on comfort.',
        de: 'Befeuchten Sie den Thermo-Bereich leicht und legen Sie den Gürtel bequem um die Taille. 1 bis 2 Mal täglich für 20 bis 40 Minuten tragen.'
      }
    },
    {
      id: 'genouillere-fohow',
      name: 'Genouillère FOHOW',
      tagline: {
        fr: 'Accessoire de maintien articulaire & Confort protecteur',
        en: 'Joint Support & Protective Knee Sleeve',
        de: 'Knieschützer für Gelenkhalt & Gelenkschutz'
      },
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'Conçues pour protéger et soulager les articulations sensibles, les genouillères bioénergétiques FOHOW diffusent une chaleur minérale ciblée. Elles soutiennent efficacement le genou lors des mouvements, stimulent la microcirculation locale et favorisent le confort articulaire.',
        en: 'Designed to safeguard and comfort fragile joints, FOHOW bioenergetic knee sleeves release targeted mineral-rich heat. They stabilize the knee during exercise, promote local microcirculation, and optimize joint mobility.',
        de: 'Entwickelt zum Schutz und zur Entlastung empfindlicher Gelenke, spenden die bioenergetischen Kniebandagen von FOHOW gezielte mineralische Wärme. Sie stützen das Knie bei Bewegung und fördern den Gelenkkomfort.'
      },
      techSpecs: {
        fr: [
          'Technologie d\'imprégnation de tourmaline auto-activante',
          'Matériau élastique tricoté en 3D offrant une compression graduée',
          'Silicone de stabilisation de rotule intégré anti-glissement',
          'Vendu par paire pour un équilibre de soutien bilatéral'
        ],
        en: [
          'Self-activating micro-infused tourmaline gemstone technology',
          'Graduated compression 3D knitted elastic textile',
          'Built-in non-slip silicone rings for kneecap stabilization',
          'Sold in pairs to ensure balanced bilateral joint support'
        ],
        de: [
          'Selbstaktivierende Turmalin-Imprägnierungstechnologie',
          '3D-gestricktes elastisches Material für graduelle Kompression',
          'Integrierter rutschfester Silikonring zur Kniescheibenstabilisierung',
          'Paarweise verkauft für ein ausgewogenes Gleichgewicht der Gelenke'
        ]
      },
      usage: {
        fr: 'Enfiler les genouillères de manière à placer la rotule au centre du stabilisateur. Porter lors des marches prolongées, d\'activités physiques, ou au repos en cas d\'inconfort.',
        en: 'Slip the knee sleeves on, centering the kneecap inside the stabilization zone. Wear during prolonged walks, physical activities, or at rest for joint comforting.',
        de: 'Die Bandagen so anziehen, dass die Kniescheibe mittig im Stabilisator sitzt. Bei längeren Spaziergängen, körperlicher Aktivität oder zur Entlastung in Ruhephasen tragen.'
      }
    },
    {
      id: 'd-glucosamine',
      name: 'D-Glucosamine FOHOW',
      tagline: {
        fr: 'Produit de bien-être destiné au confort articulaire',
        en: 'Well-being Product Formulated for Joint Comfort',
        de: 'Wellnessprodukt für Gelenkkomfort'
      },
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=600&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80'
      ],
      description: {
        fr: 'La D-Glucosamine de FOHOW combine de la glucosamine de source naturelle de haute pureté et des extraits de plantes protectrices. Ce produit de bien-être d\'exception aide à nourrir les tissus cartilagineux, préserve la flexibilité globale et renforce la vitalité des articulations.',
        en: 'FOHOW D-Glucosamine merges high-purity natural glucosamine with protective botanical extracts. This premium wellness supplement nourishes cartilage, supports flexibility, and strengthens joint resilience.',
        de: 'Die D-Glucosamin von FOHOW kombiniert hochreines natürliches Glucosamin mit schützenden Pflanzenextrakten. Dieses außergewöhnliche Wellnessprodukt nährt das Knorpelgewebe und erhält die Gelenkflexibilität.'
      },
      techSpecs: {
        fr: [
          'Glucosamine d\'origine marine purifiée à haute biodisponibilité',
          'Synergie avec des plantes riches en nutriments minéraux protecteurs',
          'Gélules végétales sans allergènes majeurs, faciles à assimiler',
          'Standard de fabrication pharmaceutique certifié internationalement'
        ],
        en: [
          'High bioavailability purified marine-derived Glucosamine',
          'Synergistic fusion with protective mineral-rich botanicals',
          'Easy-to-digest plant-based capsules free of major allergens',
          'Certified international pharmaceutical manufacturing standard'
        ],
        de: [
          'Gereinigtes marines Glucosamin mit hoher Bioverfügbarkeit',
          'Synergie mit Pflanzen reich an schützenden Mineralstoffen',
          'Leicht verdauliche pflanzliche Kapseln frei von Hauptallergenen',
          'International zertifizierter pharmazeutischer Herstellungsstandard'
        ]
      },
      usage: {
        fr: 'Prendre 1 à 2 gélules par jour avec un grand verre d\'eau, de préférence au cours d\'un repas.',
        en: 'Take 1 to 2 capsules daily with a large glass of water, preferably during a meal.',
        de: 'Täglich 1 bis 2 Kapseln mit einem großen Glas Wasser einnehmen, vorzugsweise zu einer Mahlzeit.'
      }
    }
  ];

  const getWhatsAppLink = (deviceName: string) => {
    const phone = '237697254607';
    let message = '';
    if (currentLang === 'fr') {
      message = `Bonjour Orienta Fohew Wheida, je souhaiterais commander l'appareil : *${deviceName}*. Pouvez-vous me donner des détails sur la livraison ? Merci !`;
    } else if (currentLang === 'de') {
      message = `Hallo Orienta Fohew Wheida, ich möchte das folgende Gerät bestellen: *${deviceName}*. Können Sie mir bitte weitere Details zukommen lassen? Danke!`;
    } else {
      message = `Hello Orienta Fohew Wheida, I would like to order the device: *${deviceName}*. Could you please provide details about delivery? Thank you!`;
    }
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="devices" className="py-20 md:py-28 bg-[#FAF6F0] dark:bg-stone-900/20 transition-colors duration-500 border-t border-stone-200/20 dark:border-stone-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="devices-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] dark:bg-sky-950/40 border border-[#bae6fd] dark:border-sky-900/40 rounded-full mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] dark:text-sky-400 font-mono">
              {currentLang === 'fr' ? 'Innovation & Technologie' : currentLang === 'de' ? 'Innovation & Technik' : 'Innovation & Tech'}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
            {currentLang === 'fr' ? 'Appareils de Bien-être Premium' :
             currentLang === 'de' ? 'Premium Wellness-Geräte' :
             'Premium Well-being Devices'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed max-w-2xl mx-auto">
            {currentLang === 'fr' ? 'Découvrez notre gamme d\'équipements de massage thermique et de régulation bioénergétique, conçue pour soulager les tensions et relancer votre énergie vitale à domicile.' :
             currentLang === 'de' ? 'Erleben Sie unsere Geräte für Thermomassage und bioenergetische Regulierung, entwickelt für die gezielte Entspannung und Vitalitätssteigerung zu Hause.' :
             'Discover our selection of thermal massage and bioenergetic regulation equipment, designed to alleviate tension and revive vital energy from the comfort of home.'}
          </p>
        </div>

        {/* Devices Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="devices-grid">
          {devicesList.map((device, idx) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col bg-[#F2EADF]/40 rounded-3xl overflow-hidden border border-stone-200/20 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Product HD Photo & quick actions */}
              <div className="relative h-64 overflow-hidden bg-stone-100">
                <img
                  src={device.image}
                  alt={device.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badges */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-stone-900/80 backdrop-blur-xs text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                  {currentLang === 'fr' ? 'Technologie' : currentLang === 'de' ? 'Technologie' : 'High-tech'}
                </span>
              </div>

              {/* Body Text */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 mb-2 group-hover:text-sky-700 transition-colors">
                    {device.name}
                  </h3>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-sky-700 mb-3">
                    {device.tagline[currentLang]}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed line-clamp-3 mb-6">
                    {device.description[currentLang]}
                  </p>
                </div>

                {/* Grid card action buttons */}
                <div className="space-y-2 pt-4 border-t border-stone-100">
                  <button
                    onClick={() => {
                      setSelectedDevice(device);
                      setActiveGalleryImageIdx(0);
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-2.5 bg-stone-50 text-stone-800 hover:bg-sky-50 border border-stone-200/50 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{currentLang === 'fr' ? 'Fiche Technique' : currentLang === 'de' ? 'Technisches Datenblatt' : 'Technical Sheet'}</span>
                  </button>
                  <a
                    href={getWhatsAppLink(device.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-2.5 bg-sky-600 text-white hover:bg-sky-700 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t.orderWhatsApp}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* DETAILED PREMIUM MODAL POPUP */}
      <AnimatePresence>
        {selectedDevice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="device-details-modal">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDevice(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-stone-200/20 z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Icon button */}
              <button
                onClick={() => setSelectedDevice(null)}
                className="absolute top-4 right-4 p-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-full transition-colors z-20"
                aria-label="Close modal"
              >
                <span className="text-xs font-bold px-1">✕</span>
              </button>

              {/* Modal Inner Content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 text-left">
                
                {/* Col 1: Photo Gallery & Images Carousel */}
                <div className="md:col-span-5 space-y-4">
                  <div className="h-64 rounded-2xl overflow-hidden bg-stone-100 shadow-inner relative">
                    <img
                      src={selectedDevice.gallery[activeGalleryImageIdx]}
                      alt={selectedDevice.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-[9px] px-2 py-0.5 rounded font-mono">
                      Image {activeGalleryImageIdx + 1}/{selectedDevice.gallery.length}
                    </div>
                  </div>
                  
                  {/* Gallery Sub-thumbnails */}
                  <div className="flex gap-2 justify-center">
                    {selectedDevice.gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveGalleryImageIdx(index)}
                        className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                          activeGalleryImageIdx === index ? 'border-sky-600 scale-102' : 'border-transparent opacity-60'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>

                  {/* Trust Badge block */}
                  <div className="p-3 bg-sky-50 rounded-xl flex items-center space-x-2 border border-sky-100">
                    <ShieldCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span className="text-[10px] text-stone-600 font-light">
                      {currentLang === 'fr' ? 'Garantie constructeur & support 24/7' : 'Manufacturer warranty & 24/7 support'}
                    </span>
                  </div>
                </div>

                {/* Col 2: Specifications, instructions & order buttons */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-sky-700 font-mono">
                        {selectedDevice.tagline[currentLang]}
                      </span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 mt-1">
                        {selectedDevice.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                      {selectedDevice.description[currentLang]}
                    </p>

                    {/* Technical Specifications */}
                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-400 flex items-center space-x-1.5">
                        <Cpu className="w-3.5 h-3.5 text-stone-400" />
                        <span>{currentLang === 'fr' ? 'Caractéristiques Techniques' : 'Technical Specifications'}</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-stone-700 font-light">
                        {selectedDevice.techSpecs[currentLang].map((spec, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-sky-600 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mode d'utilisation (Usage advice) */}
                    <div className="space-y-1.5">
                      <h4 className="text-[10px] uppercase font-bold tracking-widest text-stone-400 flex items-center space-x-1.5">
                        <Play className="w-3 h-3 text-stone-400" />
                        <span>{currentLang === 'fr' ? 'Mode d\'Utilisation' : 'Instructions for Use'}</span>
                      </h4>
                      <p className="text-xs text-stone-600 font-light leading-relaxed">
                        {selectedDevice.usage[currentLang]}
                      </p>
                    </div>
                  </div>

                  {/* Actions footer */}
                  <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:697254607"
                      className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-sky-50 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{t.orderCall}</span>
                    </a>
                    <a
                      href={getWhatsAppLink(selectedDevice.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 py-2.5 bg-sky-600 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-sky-700 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{currentLang === 'fr' ? 'Commander' : 'Order Device'}</span>
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
