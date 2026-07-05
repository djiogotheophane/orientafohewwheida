import { Product, Review } from './types';

export const productsData: Product[] = [
  // --- CATEGORY 1: CLEANING (NETTOYAGE) ---
  {
    id: 'sanquing',
    name: 'FOHOW Sanqing Oral Liquid',
    category: 'cleaning',
    tag: {
      fr: 'Digestion & Purification',
      en: 'Digestion & Purification',
      de: 'Verdauung & Reinigung'
    },
    description: {
      fr: 'Une formule traditionnelle sous forme liquide conçue pour accompagner la purification naturelle de l\'organisme et libérer en douceur le système digestif.',
      en: 'A liquid traditional formulation designed to support the body\'s natural purification processes and gently clear the digestive system.',
      de: 'Eine flüssige, traditionelle Rezeptur zur Unterstützung der natürlichen Reinigungsprozesse des Körpers und zur sanften Entlastung des Verdauungssystems.'
    },
    benefits: {
      fr: [
        'Soutien du système digestif et de la flore intestinale',
        'Accompagnement de l\'élimination naturelle des toxines',
        'Confort intestinal et réduction des sensations de lourdeur'
      ],
      en: [
        'Supports the digestive system and intestinal flora',
        'Assists the natural elimination of metabolic waste',
        'Promotes bowel comfort and relieves feelings of heaviness'
      ],
      de: [
        'Unterstützt das Verdauungssystem und die Darmflora',
        'Begleitet die natürliche Ausscheidung von Stoffwechselrückständen',
        'Fördert den Darmkomfort und lindert das Gefühl von Trägheit'
      ]
    },
    composition: {
      fr: ['Aloe Vera purifié', 'Ginseng', 'Extraits de Chrysanthème', 'Oligofructose saine'],
      en: ['Purified Aloe Vera', 'Ginseng', 'Chrysanthemum extracts', 'Healthy Oligofructose'],
      de: ['Gereinigte Aloe Vera', 'Ginseng', 'Chrysanthemen-Extrakte', 'Gesunde Oligofruktose']
    },
    usage: {
      fr: 'Prendre 1/2 à 1 flacon matin et soir, 30 minutes avant le repas. Agiter énergiquement avant utilisation.',
      en: 'Take 1/2 to 1 vial morning and evening, 30 minutes before meals. Shake vigorously before use.',
      de: 'Täglich morgens und abends 1/2 bis 1 Fläschchen 30 Minuten vor dem Essen einnehmen. Vor Gebrauch kräftig schütteln.'
    },
    iconName: 'Droplet',
    image: 'https://images.unsplash.com/photo-1626880842125-860b459c47d5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rose-oligose',
    name: 'Rose Oligose (Rose Elixir)',
    category: 'cleaning',
    tag: {
      fr: 'Équilibre & Légèreté',
      en: 'Balance & Lightness',
      de: 'Balance & Leichtigkeit'
    },
    description: {
      fr: 'Une pâte douce aromatisée à la rose, riche en fructo-oligosaccharides, servant de prébiotique naturel pour nourrir les bonnes bactéries digestives.',
      en: 'A pleasant rose-flavored paste rich in fructo-oligosaccharides, serving as a natural prebiotic to nourish healthy gut bacteria.',
      de: 'Eine angenehme Paste mit Rosengeschmack, reich an Fructo-Oligosacchariden, die als natürliches Präbiotikum dient, um nützliche Darmbakterien zu nähren.'
    },
    benefits: {
      fr: [
        'Soutien d\'une digestion harmonieuse',
        'Restauration et maintien du bien-être intestinal',
        'Allié naturel dans la gestion globale du poids'
      ],
      en: [
        'Supports smooth, harmonious digestion',
        'Restores and maintains gut barrier comfort',
        'Natural companion for general weight management'
      ],
      de: [
        'Unterstützt eine harmonische, regelmäßige Verdauung',
        'Stellt das Wohlbefinden im Darm wieder her und erhält es',
        'Natürlicher Begleiter im Rahmen des Gewichtsmanagements'
      ]
    },
    composition: {
      fr: ['Fructo-oligosaccharides d\'origine végétale', 'Extrait pur de pétales de Rose rose', 'Substances pectiques'],
      en: ['Plant-derived fructo-oligosaccharides', 'Pure pink Rose petal extract', 'Pectic compounds'],
      de: ['Pflanzliche Fructo-Oligosaccharide', 'Reiner Extrakt aus rosa Rosenblüten', 'Pektinstoffe']
    },
    usage: {
      fr: 'Consommer 1 à 2 cuillères à café par jour, directement ou dilué dans de l\'eau tiède ou du thé.',
      en: 'Consume 1 to 2 teaspoons daily, directly or diluted in warm water or tea.',
      de: 'Täglich 1 bis 2 Teelöffel pur einnehmen oder in warmem Wasser bzw. Tee aufgelöst genießen.'
    },
    iconName: 'Flower',
    image: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'liuwei-cha',
    name: 'Liuwei Cha (Thé aux Six Saveurs)',
    category: 'cleaning',
    tag: {
      fr: 'Détente & Détox',
      en: 'Relaxation & Detox',
      de: 'Entspannung & Detox'
    },
    description: {
      fr: 'Une infusion raffinée associant six plantes précieuses sélectionnées pour leurs propriétés apaisantes et drainantes traditionnelles.',
      en: 'A refined herbal tea combining six precious plants selected for their traditional soothing, calming, and draining properties.',
      de: 'Ein erlesener Kräutertee, der sechs wertvolle Pflanzen vereint, die traditionell für ihre beruhigenden, entspannenden und entwässernden Eigenschaften bekannt sind.'
    },
    benefits: {
      fr: [
        'Favorise une digestion légère après les repas',
        'Accompagne la détoxification naturelle quotidienne',
        'Apporte calme mental, bien-être général et sommeil paisible'
      ],
      en: [
        'Promotes light digestion and comfort after meals',
        'Supports daily natural detoxification pathways',
        'Brings mental calm, general well-being, and restful sleep'
      ],
      de: [
        'Fördert eine leichte, entspannte Verdauung nach dem Essen',
        'Unterstützt die tägliche natürliche Entgiftung',
        'Schenkt innere Ruhe, Wohlbefinden und einen erholsamen Schlaf'
      ]
    },
    composition: {
      fr: ['Thé Pu-erh mûri', 'Astragale', 'Chèvrefeuille', 'Salvia miltiorrhiza', 'Gynostemma pentaphyllum', 'Chrysanthème'],
      en: ['Aged Pu-erh Tea', 'Astragalus', 'Honeysuckle', 'Salvia miltiorrhiza', 'Gynostemma pentaphyllum', 'Chrysanthemum'],
      de: ['Gereifter Pu-Erh-Tee', 'Astragalus', 'Geißblatt', 'Salvia miltiorrhiza', 'Gynostemma pentaphyllum', 'Chrysantheme']
    },
    usage: {
      fr: 'La laisser infuser 1 sachet dans 1 litre d\'eau chaude (85°C) pendant 5 à 10 minutes. À boire tout au long de la journée.',
      en: 'Infuse 1 tea bag in 1 liter of hot water (85°C/185°F) for 5 to 10 minutes. Drink throughout the day.',
      de: '1 Teebeutel in 1 Liter heißem Wasser (85°C) für 5-10 Minuten ziehen lassen. Über den Tag verteilt trinken.'
    },
    iconName: 'Coffee',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'laveur-sang',
    name: 'Xueqingfu (Laveur de Sang)',
    category: 'cleaning',
    tag: {
      fr: 'Harmonie Cardiovasculaire',
      en: 'Cardiovascular Harmony',
      de: 'Herz-Kreislauf-Harmonie'
    },
    description: {
      fr: 'Formulé à base de Nattokinase hautement active, ce complément de qualité soutient la fluidité de la circulation sanguine et la souplesse vasculaire.',
      en: 'Formulated with highly active Nattokinase, this premium supplement supports healthy blood flow fluidity and vascular elasticity.',
      de: 'Formuliert mit hochaktiver Nattokinase unterstützt dieses Premium-Präparat die Fließeigenschaften des Blutes und die Elastizität der Gefäße.'
    },
    benefits: {
      fr: [
        'Soutien naturel de la microcirculation sanguine',
        'Favorise le bien-être cardiovasculaire général',
        'Aide à préserver l\'élasticité et le tonus des vaisseaux'
      ],
      en: [
        'Natural support for blood microcirculation',
        'Promotes general cardiovascular well-being',
        'Helps preserve vessel flexibility and strength'
      ],
      de: [
        'Natürliche Unterstützung der Mikrozirkulation',
        'Fördert das allgemeine Herz-Kreislauf-Wohlbefinden',
        'Trägt zur Erhaltung der Elastizität und Spannkraft der Gefäße bei'
      ]
    },
    composition: {
      fr: ['Nattokinase purifiée (extrait de soja fermenté)', 'Extrait de pépins de Raisin', 'Extrait de Sauge rouge', 'Gélatine végétale'],
      en: ['Purified Nattokinase (fermented soy extract)', 'Grape seed extract', 'Red Sage extract', 'Vegetable capsule'],
      de: ['Gereinigte Nattokinase (fermentierter Sojaextrakt)', 'Traubenkernextrakt', 'Roter Salbei-Extrakt', 'Pflanzliche Kapsel']
    },
    usage: {
      fr: 'Prendre 1 à 2 capsules deux fois par jour avec un grand verre d\'eau tiède, de préférence après les repas.',
      en: 'Take 1 to 2 capsules twice daily with a warm glass of water, preferably after meals.',
      de: 'Zweimal täglich 1 bis 2 Kapseln mit einem großen Glas warmem Wasser einnehmen, vorzugsweise nach den Mahlzeiten.'
    },
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=600&q=80'
  },

  // --- CATEGORY 2: REGULATION (REGULATION) ---
  {
    id: 'lichzi',
    name: 'FOHOW Linchzhi (Lichzi)',
    category: 'regulation',
    tag: {
      fr: 'Clarté & Sérénité',
      en: 'Clarity & Serenity',
      de: 'Klarheit & Gelassenheit'
    },
    description: {
      fr: 'Élaboré à partir de spores de Ganoderma lucidum (Reishi), ce complément exceptionnel est traditionnellement réputé pour fortifier l\'esprit et équilibrer le stress.',
      en: 'Derived from high-grade Ganoderma lucidum (Reishi) spores, this exceptional supplement is traditionally renowned to support mental clarity and balance stress.',
      de: 'Hergestellt aus hochwertigen Sporen von Ganoderma lucidum (Reishi), ist dieses außergewöhnliche Präparat traditionell dafür bekannt, den Geist zu stärken und Stress auszugleichen.'
    },
    benefits: {
      fr: [
        'Soutien des fonctions cognitives, de l\'attention et de la mémoire',
        'Aide à réguler le stress et favorise le calme émotionnel',
        'Renforce la vitalité globale et les mécanismes d\'immunité naturelle'
      ],
      en: [
        'Supports cognitive functions, attention span, and memory',
        'Helps modulate stress and encourages emotional balance',
        'Boosts overall vitality and natural immunity mechanisms'
      ],
      de: [
        'Unterstützt die kognitiven Funktionen, Konzentration und Gedächtnis',
        'Hilft bei der Stressregulierung und fördert emotionale Balance',
        'Stärkt die allgemeine Vitalität und die natürlichen Abwehrkräfte'
      ]
    },
    composition: {
      fr: ['Poudre de spores de Ganoderma Lucidum (Linchzhi)', 'Extrait de Cordyceps Sinensis', 'Gélatine'],
      en: ['Ganoderma Lucidum (Linchzhi) spore powder', 'Cordyceps Sinensis extract', 'Gelatin capsule'],
      de: ['Sporenpulver von Ganoderma Lucidum (Linchzhi)', 'Cordyceps Sinensis Extrakt', 'Gelatinekapsel']
    },
    usage: {
      fr: 'Prendre 1 à 2 gélules deux fois par jour avec un verre d\'eau, à jeun ou juste avant un repas.',
      en: 'Take 1 to 2 capsules twice daily with water, on an empty stomach or just before meals.',
      de: 'Zweimal täglich 1 bis 2 Kapseln mit Wasser einnehmen, am besten auf nüchternen Magen oder kurz vor den Mahlzeiten.'
    },
    iconName: 'Brain',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'garlic-salvia',
    name: 'Garlic & Salvia Capsules',
    category: 'regulation',
    tag: {
      fr: 'Protection Active',
      en: 'Active Protection',
      de: 'Aktiver Schutz'
    },
    description: {
      fr: 'L\'alliance synergique de l\'Ail sauvage et de la Sauge rouge pour soutenir la vigueur circulatoire et fortifier le terrain naturel.',
      en: 'The synergistic alliance of wild Garlic and red Salvia to support healthy blood circulation and fortify the body\'s natural defenses.',
      de: 'Die synergistische Verbindung von wildem Knoblauch und rotem Salbei zur Unterstützung eines gesunden Blutkreislaufs und zur Stärkung der körpereigenen Abwehrkräfte.'
    },
    benefits: {
      fr: [
        'Soutien optimal du tonus vasculaire et de la circulation périphérique',
        'Fournit des antioxydants puissants pour contrer le stress oxydatif',
        'Favorise l\'harmonie cardiovasculaire globale'
      ],
      en: [
        'Optimal support for vascular tone and peripheral blood flow',
        'Provides potent antioxidants to counter oxidative stress',
        'Promotes global cardiovascular and circulatory harmony'
      ],
      de: [
        'Optimale Unterstützung des Gefäßtonus und der Durchblutung',
        'Liefert starke Antioxidantien gegen oxidativen Stress',
        'Fördert die allgemeine Herz-Kreislauf-Harmonie'
      ]
    },
    composition: {
      fr: ['Extrait d\'Ail concentré', 'Extrait de Salvia miltiorrhiza (Sauge rouge)', 'Huile végétale saine'],
      en: ['Concentrated Garlic extract', 'Salvia miltiorrhiza (Red Sage) extract', 'Healthy vegetable oil base'],
      de: ['Konzentrierter Knoblauchextrakt', 'Salvia miltiorrhiza (Roter Salbei) Extrakt', 'Gesunde Pflanzenölbasis']
    },
    usage: {
      fr: 'Prendre 1 à 2 capsules par jour pendant un repas principal.',
      en: 'Take 1 to 2 capsules daily during a main meal.',
      de: 'Täglich 1 bis 2 Kapseln zu einer Hauptmahlzeit einnehmen.'
    },
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'garlic',
    name: 'Pure Garlic Essence',
    category: 'regulation',
    tag: {
      fr: 'Défenses & Immunité',
      en: 'Defenses & Immunity',
      de: 'Abwehr & Immunität'
    },
    description: {
      fr: 'Une huile d\'ail hautement concentrée qui préserve toutes les substances bioactives de l\'ail frais sans l\'inconvénient de l\'odeur.',
      en: 'A highly concentrated garlic oil preserving all bioactive benefits of fresh garlic cloves without any residual odor issues.',
      de: 'Ein hochkonzentriertes Knoblauchöl, das alle bioaktiven Wirkstoffe des frischen Knoblauchs bewahrt – ganz ohne störenden Geruch.'
    },
    benefits: {
      fr: [
        'Soutien vigoureux du système immunitaire face aux agressions',
        'Favorise une digestion saine et l\'assainissement digestif',
        'Contribue au maintien d\'une pression artérielle équilibrée'
      ],
      en: [
        'Vigorous support for the immune system against environmental stresses',
        'Promotes clean digestive wellness and gut sanitation',
        'Contributes to maintaining balanced blood pressure values'
      ],
      de: [
        'Kräftige Unterstützung des Immunsystems bei Belastungen',
        'Fördert eine gesunde Verdauung und die Darmhygiene',
        'Trägt zur Aufrechterhaltung eines ausgewogenen Blutdrucks bei'
      ]
    },
    composition: {
      fr: ['Huile essentielle d\'Ail purifié', 'Gélatine souple'],
      en: ['Purified Garlic essential oil extract', 'Soft gelatin capsule'],
      de: ['Gereinigtes ätherisches Knoblauchöl-Extrakt', 'Weichgelatinekapsel']
    },
    usage: {
      fr: 'Prendre 1 capsule par jour, au milieu du déjeuner ou du dîner.',
      en: 'Take 1 capsule daily, during lunch or dinner.',
      de: 'Täglich 1 Kapsel während des Mittag- oder Abendessens einnehmen.'
    },
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cun-dan',
    name: 'Cun Dan Power (Qi Dan)',
    category: 'regulation',
    tag: {
      fr: 'Énergie & Récupération',
      en: 'Energy & Recovery',
      de: 'Energie & Erholung'
    },
    description: {
      fr: 'Élaboré pour stimuler le flux d\'énergie vitale (Qi), ce complément aide à surmonter la fatigue chronique et soutient la résilience physique.',
      en: 'Formulated to stimulate vital energy flow (Qi), this traditional recipe helps overcome chronic fatigue and supports physical resilience.',
      de: 'Formuliert, um den Fluss der Lebensenergie (Qi) zu stimulieren, hilft diese Rezeptur, chronische Müdigkeit zu überwinden und stärkt die physische Belastbarkeit.'
    },
    benefits: {
      fr: [
        'Soutien du tonus général et réduction de l\'épuisement',
        'Accompagne la récupération musculaire après l\'effort',
        'Stimule l\'adaptation naturelle face aux surcharges de travail'
      ],
      en: [
        'Supports general body tone and reduces physical exhaustion',
        'Aids muscle recovery and recovery after intensive effort',
        'Stimulates natural adaptation against occupational overwork'
      ],
      de: [
        'Unterstützt den allgemeinen Tonus und verringert Erschöpfung',
        'Fördert die Muskelregeneration nach körperlicher Anstrengung',
        'Stärkt die natürliche Anpassungsfähigkeit bei beruflicher Überlastung'
      ]
    },
    composition: {
      fr: ['Astragalus membranaceus', 'Extrait de Rhizome de Ginseng de Sibérie', 'Radix Salviae'],
      en: ['Astragalus membranaceus', 'Siberian Ginseng Rhizome extract', 'Radix Salviae'],
      de: ['Astragalus membranaceus', 'Sibirischer Ginseng-Wurzel-Extrakt', 'Radix Salviae']
    },
    usage: {
      fr: 'Prendre 1 à 2 capsules le matin au petit-déjeuner avec de l\'eau tiède.',
      en: 'Take 1 to 2 capsules in the morning during breakfast with warm water.',
      de: 'Täglich 1 bis 2 Kapseln morgens zum Frühstück mit warmem Wasser einnehmen.'
    },
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'oral-liquid',
    name: 'FOHOW Oral Liquid (Phoenix Elixir)',
    category: 'regulation',
    tag: {
      fr: 'Élixir Immunitaire',
      en: 'Immune Elixir',
      de: 'Immun-Elixier'
    },
    description: {
      fr: 'L\'élixir phare de Fohow, combinant le légendaire Cordyceps Sinensis et d\'autres champignons sacrés pour une régulation globale de l\'immunité.',
      en: 'Fohows flagship elixir, combining legendary Cordyceps Sinensis and other sacred mushrooms for total system regulation and deep immunity support.',
      de: 'Das Flaggschiff-Elixier von Fohow, das den legendären Cordyceps Sinensis mit anderen heiligen Pilzen für eine umfassende Regulierung und Immunstärkung verbindet.'
    },
    benefits: {
      fr: [
        'Régulateur naturel majeur du système de défense immunitaire',
        'Optimise la résistance physique et l\'adaptation cellulaire',
        'Favorise la récupération rapide en période de convalescence'
      ],
      en: [
        'Major natural regulator of the immune defense framework',
        'Optimizes physical stamina and oxygen metabolism efficiency',
        'Promotes rapid recovery and wellness during convalescence'
      ],
      de: [
        'Wichtiger natürlicher Regulator des Immunsystems',
        'Optimiert die körperliche Ausdauer und die zelluläre Sauerstoffnutzung',
        'Fördert die schnelle Regeneration in der Genesungsphase'
      ]
    },
    composition: {
      fr: ['Extrait aqueux de Cordyceps Sinensis (75%)', 'Lentinula edodes (Shiitake)', 'Ganoderma Lucidum', 'Miel naturel et pousses de Bambou'],
      en: ['Cordyceps Sinensis aqueous extract (75%)', 'Lentinula edodes (Shiitake)', 'Ganoderma Lucidum', 'Natural honey and Bamboo shoots'],
      de: ['Wässriger Cordyceps Sinensis Extrakt (75%)', 'Lentinula edodes (Shiitake)', 'Ganoderma Lucidum', 'Natürlicher Honig und Bambussprossen']
    },
    usage: {
      fr: 'Boire 2 à 5 ml le matin à jeun. Garder sous la langue pendant 30 secondes avant d\'avaler. Augmenter graduellement selon les besoins.',
      en: 'Drink 2 to 5 ml in the morning on an empty stomach. Hold under the tongue for 30 seconds before swallowing. Adjust gradually.',
      de: 'Morgens nüchtern 2 bis 5 ml trinken. Vor dem Herunterschlucken 30 Sekunden lang unter der Zunge halten. Nach Bedarf anpassen.'
    },
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'
  },

  // --- CATEGORY 3: SUPPLEMENTATION (SUPPLEMENTATION) ---
  {
    id: 'calcium',
    name: 'FOHOW Calcium+ (Haicao Gai)',
    category: 'supplementation',
    tag: {
      fr: 'Capital Osseux',
      en: 'Bone Capital',
      de: 'Knochenstruktur'
    },
    description: {
      fr: 'Calcium naturel extrait d\'algues vertes de haute mer, enrichi en minéraux essentiels pour une biodisponibilité et une absorption optimales par l\'organisme.',
      en: 'Natural calcium derived from deep-sea green algae, enriched with key minerals for maximal bio-availability and easy digestion.',
      de: 'Natürliches Kalzium, gewonnen aus Tiefsee-Grünalgen, angereichert mit wichtigen Mineralien für maximale Bioverfügbarkeit und einfache Aufnahme.'
    },
    benefits: {
      fr: [
        'Soutien de la structure osseuse, des articulations et des dents',
        'Excellente absorption intestinale sans acidification du corps',
        'Apport complet en oligo-éléments marins bénéfiques'
      ],
      en: [
        'Supports healthy bone density, joints, and dental strength',
        'Excellent digestive absorption without acidifying gastric levels',
        'Complete supply of natural beneficial marine trace minerals'
      ],
      de: [
        'Unterstützt eine gesunde Knochendichte, Gelenke und Zähne',
        'Hervorragende Aufnahme im Darm ohne Übersäuerung des Körpers',
        'Komplette Versorgung mit wertvollen marinen Spurenelementen'
      ]
    },
    composition: {
      fr: ['Calcium extrait d\'algues marines vertes', 'Vitamines du groupe B', 'Oligo-éléments (Zinc, Magnésium, Fer marin)'],
      en: ['Deep-sea green algae calcium extract', 'Group B vitamins', 'Trace minerals (Zinc, Magnesium, Marine iron)'],
      de: ['Kalziumextrakt aus Meeresgrünalgen', 'Vitamine der B-Gruppe', 'Spurenelemente (Zink, Magnesium, marines Eisen)']
    },
    usage: {
      fr: 'Prendre 1 à 2 gélules deux fois par jour avec un peu d\'eau pendant les repas.',
      en: 'Take 1 to 2 capsules twice daily with water during meals.',
      de: 'Zweimal täglich 1 bis 2 Kapseln mit etwas Wasser zu den Mahlzeiten einnehmen.'
    },
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1546190255-451a91afc548?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'longlu',
    name: 'Longlu Vitality Capsules',
    category: 'supplementation',
    tag: {
      fr: 'Vigueur & Vigueur',
      en: 'Stamina & Vigor',
      de: 'Stärke & Vitalität'
    },
    description: {
      fr: 'Un complément énergétique précieux qui aide à fortifier les réserves énergétiques profondes et favorise la résilience physique globale.',
      en: 'A highly precious energy supplement that helps fortify deep physiological reservoirs and supports comprehensive bodily stamina.',
      de: 'Ein wertvolles Energiepräparat, das hilft, die tiefen physiologischen Reserven zu stärken, und die allgemeine Ausdauer des Körpers unterstützt.'
    },
    benefits: {
      fr: [
        'Soutient l\'endurance physique et l\'énergie vitale',
        'Aide à réguler l\'équilibre endocrinien traditionnel',
        'Renforce l\'énergie rénale traditionnelle et combat le surmenage'
      ],
      en: [
        'Supports physical endurance and deep-seated stamina',
        'Helps modulate traditional endocrine system balances',
        'Strengthens traditional kidney energy pathways and fights burnout'
      ],
      de: [
        'Unterstützt die körperliche Ausdauer und tief sitzende Energie',
        'Hilft bei der Regulierung des traditionellen endokrinen Systems',
        'Stärkt das traditionelle Nieren-Qi und beugt Überlastung vor'
      ]
    },
    composition: {
      fr: ['Extrait de Ginseng Rouge', 'Astragale précieux', 'Racine de Rehmannia préparée', 'L-Arginine saine'],
      en: ['Red Ginseng extract', 'Precious Astragalus root', 'Prepared Rehmannia root', 'Healthy L-Arginine'],
      de: ['Roter Ginseng Extrakt', 'Wertvolle Astragaluswurzel', 'Präparierte Rehmanniawurzel', 'Gesundes L-Arginin']
    },
    usage: {
      fr: 'Prendre 1 à 2 gélules par jour avec de l\'eau tiède, de préférence l\'après-midi ou après un effort.',
      en: 'Take 1 to 2 capsules daily with warm water, preferably in the afternoon or after physical effort.',
      de: 'Täglich 1 bis 2 Kapseln mit warmem Wasser einnehmen, vorzugsweise nachmittags oder nach körperlicher Anstrengung.'
    },
    iconName: 'HeartPulse',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'prostata-booster',
    name: 'Prostata Booster Capsules',
    category: 'supplementation',
    tag: {
      fr: 'Confort Masculin',
      en: 'Men\'s Health Comfort',
      de: 'Männer-Aktivschutz'
    },
    description: {
      fr: 'Une formule végétale équilibrée ciblant spécifiquement le confort urinaire et la vitalité de la prostate chez l\'homme.',
      en: 'A balanced botanical formulation targeting urinary comfort and prostate gland vitality in men.',
      de: 'Eine ausgewogene pflanzliche Rezeptur, die speziell auf den Harnkomfort und die Vitalität der Prostata beim Mann abgestimmt ist.'
    },
    benefits: {
      fr: [
        'Soutien du fonctionnement urinaire normal et harmonieux',
        'Aide à préserver l\'équilibre et le confort de la prostate',
        'Apport d\'antioxydants végétaux spécifiques'
      ],
      en: [
        'Supports normal and harmonious urinary flow',
        'Helps maintain prostate gland comfort and balance',
        'Provides specialized botanical antioxidant support'
      ],
      de: [
        'Unterstützt einen normalen und harmonischen Harnfluss',
        'Trägt zum Erhalt von Komfort und Balance der Prostata bei',
        'Liefert gezielte pflanzliche Antioxidantien'
      ]
    },
    composition: {
      fr: ['Extrait de palmier nain (Saw Palmetto)', 'Graines de Citrouille concentrées', 'Lycopène pur d\'origine végétale', 'Sulfate de Zinc'],
      en: ['Saw Palmetto extract', 'Concentrated Pumpkin seed extract', 'Pure botanical Lycopene', 'Zinc Sulfate'],
      de: ['Sägepalmen-Extrakt (Saw Palmetto)', 'Konzentrierter Kürbiskernextrakt', 'Reines pflanzliches Lycopin', 'Zinksulfat']
    },
    usage: {
      fr: 'Prendre 1 capsule matin et soir, au cours des repas avec un demi-verre d\'eau.',
      en: 'Take 1 capsule morning and evening, during meals with a small glass of water.',
      de: 'Täglich morgens und abends je 1 Kapsel zu den Mahlzeiten mit etwas Wasser einnehmen.'
    },
    iconName: 'Sparkle',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cup-alcalin',
    name: 'FOHOW Alkaline Cup (Cup Alcalin)',
    category: 'supplementation',
    tag: {
      fr: 'Hydratation Saine',
      en: 'Healthy Hydration',
      de: 'Gesunde Hydratation'
    },
    description: {
      fr: 'Un gobelet d\'hydratation doté de filtres minéraux actifs brevetés pour restructurer l\'eau, l\'alcaliniser et l\'enrichir en hydrogène actif.',
      en: 'An advanced hydration container containing active mineral filters to restructure water, elevate pH levels, and enrich it with active hydrogen.',
      de: 'Ein innovatives Trinkgefäß mit aktiven Mineralfiltern zur Strukturierung des Wassers, Anhebung des pH-Werts und Anreicherung mit Wasserstoff.'
    },
    benefits: {
      fr: [
        'Aide à rééquilibrer l\'équilibre acido-basique du corps',
        'Améliore la structure de l\'eau pour une hydratation cellulaire supérieure',
        'Propriétés antioxydantes favorisant l\'élimination des radicaux libres'
      ],
      en: [
        'Helps optimize the acid-alkaline (pH) balance of the body',
        'Improves water molecule structuring for superior cell hydration',
        'Antioxidant support assisting in clearing cellular free radicals'
      ],
      de: [
        'Trägt zur Regulierung des Säure-Basen-Haushalts des Körpers bei',
        'Verbessert die Wasserstruktur für eine überlegene Zellhydratation',
        'Antioxidative Unterstützung zur Neutralisierung freier Radikale'
      ]
    },
    composition: {
      fr: ['Structure en acier inoxydable médical', 'Filtre minéral breveté (Magnésium, Tourmaline, Pierres alcalines)'],
      en: ['Medical-grade stainless steel structure', 'Patented active mineral filter (Magnesium, Tourmaline, Alkaline stones)'],
      de: ['Gehäuse aus medizinischem Edelstahl', 'Patentierter Mineralfilter (Magnesium, Turmalin, alkalische Steine)']
    },
    usage: {
      fr: 'Verser l\'eau potable dans le gobelet, attendre 3 à 5 minutes pour l\'alcalinisation avant de consommer tout au long de la journée.',
      en: 'Pour drinking water into the cup, wait 3 to 5 minutes to complete the alkalization process, and drink during the day.',
      de: 'Trinkwasser in den Becher füllen, 3-5 Minuten für die Alkalisierung warten und über den Tag verteilt genießen.'
    },
    iconName: 'GlassWater',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sambao',
    name: 'FOHOW Sambao Oral Liquid',
    category: 'supplementation',
    tag: {
      fr: 'Régénération Profonde',
      en: 'Deep Regeneration',
      de: 'Tiefenregeneration'
    },
    description: {
      fr: 'Une formule impériale hautement concentrée qui associe le Cordyceps à des extraits exclusifs de fourmis noires de montagne pour stimuler la vitalité profonde.',
      en: 'A highly concentrated imperial formula combining Cordyceps with exclusive Black Mountain Ant extracts to stimulate profound vitality reservoirs.',
      de: 'Eine hochkonzentrierte kaiserliche Rezeptur, die Cordyceps mit Extrakten der schwarzen Bergameise verbindet, um die tiefen Vitalitätsreserven zu stärken.'
    },
    benefits: {
      fr: [
        'Aide à surmonter les fatigues intenses et l\'épuisement mental',
        'Favorise le fonctionnement harmonieux des articulations',
        'Régulateur de l\'immunité profonde et antioxydant puissant'
      ],
      en: [
        'Helps overcome intense chronic fatigue and mental burnout',
        'Supports highly comfortable and elastic joint functions',
        'Regulator of deep immunity pathways and potent cellular antioxidant'
      ],
      de: [
        'Hilft bei intensiver Erschöpfung und mentaler Überarbeitung',
        'Unterstützt eine komfortable und elastische Gelenkfunktion',
        'Reguliert das Immunsystem tiefgreifend und wirkt stark antioxidativ'
      ]
    },
    composition: {
      fr: ['Extrait de Cordyceps Sinensis (80%)', 'Extrait purifié de Fourmi Noire de montagne', 'Astragale saine', 'Extrait de Ginseng'],
      en: ['Cordyceps Sinensis extract (80%)', 'Purified Black Mountain Ant extract', 'Healthy Astragalus root', 'Ginseng extract'],
      de: ['Cordyceps Sinensis Extrakt (80%)', 'Gereinigter Extrakt der schwarzen Bergameise', 'Astragaluswurzel', 'Ginsengextrakt']
    },
    usage: {
      fr: 'Consommer de 2 à 5 ml le matin à jeun. Conserver sous la langue pendant 30 secondes avant d\'avaler.',
      en: 'Consume 2 to 5 ml in the morning on an empty stomach. Keep under the tongue for 30 seconds before swallowing.',
      de: 'Morgens nüchtern 2 bis 5 ml trinken. Vor dem Herunterschlucken 30 Sekunden lang unter der Zunge halten.'
    },
    iconName: 'ShieldPlus',
    image: 'https://images.unsplash.com/photo-1626880842125-860b459c47d5?auto=format&fit=crop&w=600&q=80'
  }
];

export const reviewsData: Review[] = [
  {
    id: 'rev-1',
    name: 'Sophie Martinet',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    text: {
      fr: 'Le Liuwei Cha a transformé mes soirées. Ma digestion est beaucoup plus légère et mon sommeil s\'est nettement amélioré. Un grand merci pour l\'accompagnement personnalisé !',
      en: 'Liuwei Cha transformed my evenings. My digestion feels much lighter, and my sleep quality has visibly improved. Thank you for the personalized support!',
      de: 'Der Liuwei Cha hat meine Abende verändert. Meine Verdauung ist viel leichter und mein Schlaf hat sich spürbar verbessert. Vielen Dank für die persönliche Beratung!'
    },
    role: {
      fr: 'Adepte des cures détox',
      en: 'Detox enthusiast',
      de: 'Detox-Enthusiastin'
    }
  },
  {
    id: 'rev-2',
    name: 'Jean-Marc Dubois',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    text: {
      fr: 'Grâce au FOHOW Oral Liquid, je me sens plein d\'énergie et mes défenses naturelles résistent à tous les changements de saison. Produits d\'une qualité exceptionnelle !',
      en: 'Thanks to FOHOW Oral Liquid, I feel full of energy, and my natural defenses resist seasonal changes with ease. Truly outstanding quality products!',
      de: 'Dank FOHOW Oral Liquid fühle ich mich voller Energie, und meine Abwehrkräfte trotzen jedem Jahreszeitenwechsel. Produkte von absolut hervorragender Qualität!'
    },
    role: {
      fr: 'Sportif amateur',
      en: 'Amateur athlete',
      de: 'Hobbysportler'
    }
  },
  {
    id: 'rev-3',
    name: 'Evelyne Schmidt',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    text: {
      fr: 'Le Calcium+ est tellement doux pour l\'estomac et facile à digérer par rapport aux calciums traditionnels. Je ressens une vraie différence de confort articulaire.',
      en: 'Calcium+ is so gentle on the stomach and easy to digest compared to traditional calcium. I feel a genuine difference in my joint comfort.',
      de: 'Calcium+ ist im Vergleich zu herkömmlichem Kalzium so magenschonend und leicht verdaulich. Ich spüre einen echten Unterschied in meinen Gelenken.'
    },
    role: {
      fr: 'Professeur de Yoga',
      en: 'Yoga Teacher',
      de: 'Yogalehrerin'
    }
  }
];

export const faqData = [
  {
    question: {
      fr: 'Comment passer une commande sur le site ?',
      en: 'How do I place an order on the site?',
      de: 'Wie gebe ich eine Bestellung auf der Website auf?'
    },
    answer: {
      fr: 'Vous pouvez commander en toute simplicité en cliquant sur le bouton "Commander via WhatsApp" présent sur chaque fiche produit ou appareil. Cela génère un message personnalisé instantané. Vous pouvez aussi nous contacter par téléphone au 697 254 607 / 676 437 678.',
      en: 'You can order easily by clicking the "Order via WhatsApp" button on any product or device card. It generates an instant customized message. You can also call us directly at +237 697 254 607 / +237 676 437 678.',
      de: 'Sie können ganz einfach bestellen, indem Sie auf die Schaltfläche "Über WhatsApp bestellen" auf jeder Produkt- oder Gerätekarte klicken. Dadurch wird eine fertige personalisierte Nachricht generiert. Sie können uns auch direkt telefonisch unter +237 697 254 607 / +237 676 437 678 kontaktieren.'
    }
  },
  {
    question: {
      fr: 'Comment utiliser les appareils de bien-être ?',
      en: 'How to use the well-being devices?',
      de: 'Wie werden die Wellness-Geräte verwendet?'
    },
    answer: {
      fr: 'Chaque appareil est livré avec une notice d\'utilisation complète du fabricant. Pour les ceintures et colliers thermiques, une légère humidification de la zone centrale active permet d\'accélérer la sensation de chaleur naturelle. Nos conseillers sont à votre disposition pour vous expliquer le fonctionnement étape par étape lors de votre livraison.',
      en: 'Each device comes with complete guidelines from the manufacturer. For thermal belts and neck collars, slightly moistening the active central area accelerates the natural warming sensation. Our advisors are available to guide you step-by-step.',
      de: 'Jedes Gerät wird mit einer vollständigen Gebrauchsanweisung geliefert. Bei Wärmegürteln und Halsmanschetten beschleunigt ein leichtes Anfeuchten des aktiven Bereichs die angenehme Wärmeentwicklung. Unsere Berater erklären Ihnen die Anwendung gerne Schritt für Schritt.'
    }
  },
  {
    question: {
      fr: 'Comment choisir le produit ou appareil adapté à mes besoins ?',
      en: 'How to choose the product or device best suited for me?',
      de: 'Wie wähle ich das passende Produkt oder Gerät aus?'
    },
    answer: {
      fr: 'Nous vous conseillons de réserver un entretien conseil de 15 minutes offert sur notre site. Nos spécialistes analyseront vos objectifs (détox, confort articulaire, vitalité, minceur) pour vous orienter vers la solution FOHOW la plus appropriée.',
      en: 'We highly recommend scheduling a free 15-minute consultation directly on our website. Our wellness experts will review your health goals (detox, joint comfort, vitality) to guide you toward the ideal FOHOW solution.',
      de: 'Wir empfehlen Ihnen, ein kostenloses 15-minütiges Beratungsgespräch auf unserer Website zu buchen. Unsere Experten analysieren Ihre Ziele (Entgiftung, Gelenkkomfort, Vitalität), um das beste FOHOW-Produkt für Sie zu finden.'
    }
  },
  {
    question: {
      fr: 'Quels sont les délais de livraison ?',
      en: 'What are the delivery times?',
      de: 'Wie lange dauert die Lieferung?'
    },
    answer: {
      fr: 'Pour le Cameroun (Douala, Yaoundé, etc.), la livraison se fait généralement sous 24h. Pour les commandes internationales et la représentation Europe, les colis sont expédiés sous 48h ouvrées avec un suivi en ligne permanent.',
      en: 'For local Cameroon orders (Douala, Yaoundé, etc.), delivery is within 24 hours. For international shipments and Europe representation, packages are dispatched within 48 business hours with full tracking details.',
      de: 'Innerhalb Kameruns (Douala, Yaoundé usw.) erfolgt die Lieferung meist innerhalb von 24 Stunden. Für internationale Bestellungen werden Pakete innerhalb von 48 Werktagen mit Online-Sendungsverfolgung versandt.'
    }
  },
  {
    question: {
      fr: 'Comment contacter un conseiller de santé Orienta Fohew Wheida ?',
      en: 'How to contact a Orienta Fohew Wheida health advisor?',
      de: 'Wie kann ich einen Orienta Fohew Wheida-Berater kontaktieren?'
    },
    answer: {
      fr: 'Vous pouvez joindre un conseiller à tout moment par téléphone au (+237) 697 254 607 ou (+237) 676 437 678, nous écrire via WhatsApp direct, envoyer un e-mail à contact@orientafohewwheida.com ou utiliser le formulaire de contact en ligne.',
      en: 'You can reach an advisor at any time by calling (+237) 697 254 607 or (+237) 676 437 678, messaging us on WhatsApp, emailing contact@orientafohewwheida.com, or filling out our online contact form.',
      de: 'Sie können einen Berater jederzeit telefonisch unter (+237) 697 254 607 oder (+237) 676 437 678, per WhatsApp, per E-Mail an contact@orientafohewwheida.com oder über unser Online-Kontaktformular erreichen.'
    }
  }
];
