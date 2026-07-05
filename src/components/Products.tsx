import { useState } from 'react';
import {
  Droplet,
  Flower,
  Coffee,
  Activity,
  Brain,
  ShieldAlert,
  Shield,
  Zap,
  Flame,
  Sparkles,
  HeartPulse,
  Sparkle,
  GlassWater,
  ShieldPlus,
  Search,
  X,
  Phone,
  MessageSquare,
  ChevronRight,
  Info
} from 'lucide-react';
import { Product, Category, Language } from '../types';
import { productsData } from '../data';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface ProductsProps {
  currentLang: Language;
}

// Icon mapper helper
const ProductIcon = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Droplet': return <Droplet className={className} />;
    case 'Flower': return <Flower className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'Sparkle': return <Sparkle className={className} />;
    case 'GlassWater': return <GlassWater className={className} />;
    case 'ShieldPlus': return <ShieldPlus className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function Products({ currentLang }: ProductsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const t = translations[currentLang];

  // Filter products based on search query and category
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const nameMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = product.description[currentLang].toLowerCase().includes(searchQuery.toLowerCase());
    const tagMatch = product.tag?.[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) || false;
    
    return matchesCategory && (nameMatch || descMatch || tagMatch);
  });

  // Category list
  const categories: { value: Category | 'all'; label: string }[] = [
    { value: 'all', label: t.allCategories },
    { value: 'cleaning', label: t.catCleaning },
    { value: 'regulation', label: t.catRegulation },
    { value: 'supplementation', label: t.catSupplementation },
  ];

  // Get active category description
  const getCategoryIntro = () => {
    if (activeCategory === 'cleaning') return t.cleaningIntro;
    if (activeCategory === 'regulation') return t.regulationIntro;
    if (activeCategory === 'supplementation') return t.supplementationIntro;
    return t.prodSubtitle;
  };

  // Generate WhatsApp link
  const getWhatsAppLink = (productName: string) => {
    const phone = '237697254607'; // WhatsApp main number
    let message = '';
    
    if (currentLang === 'fr') {
      message = `Bonjour Orienta Fohew Wheida, je souhaiterais commander le produit : *${productName}*. Pouvez-vous me donner plus de détails sur la livraison ? Merci !`;
    } else if (currentLang === 'de') {
      message = `Hallo Orienta Fohew Wheida, ich möchte das folgende Produkt bestellen: *${productName}*. Können Sie mir bitte weitere Lieferdetails zukommen lassen? Vielen Dank!`;
    } else {
      message = `Hello Orienta Fohew Wheida, I am interested in ordering: *${productName}*. Could you please provide more details on shipping and payment? Thank you!`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  // Generate Phone Link
  const getPhoneLink = () => {
    return 'tel:697254607';
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-[#F2EADF]/50 dark:bg-stone-900/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="products-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] dark:bg-sky-950/40 border border-[#bae6fd] dark:border-sky-900/40 rounded-full mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] dark:text-sky-400 font-mono">
              E-Boutique
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 dark:text-white mb-4">
            {t.prodTitle}
          </h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed max-w-2xl mx-auto"
            >
              {getCategoryIntro()}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12" id="filter-bar">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 order-2 lg:order-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-xs font-semibold rounded-full uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-[#D4EBF8] text-[#0369A1] shadow-xs border border-[#bae6fd]'
                    : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80 order-1 lg:order-2">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400 transition-all shadow-inner"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-stone-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="product-grid">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((prod, index) => (
              <motion.div
                key={prod.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200/40 hover:shadow-lg transition-all duration-300"
              >
                {/* Visual Top Card (Product Image or Luxury Gradient with Product Icon) */}
                <div className="relative h-56 overflow-hidden bg-stone-50 flex justify-center items-center border-b border-stone-100">
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-radial-gradient from-[#D4EBF8]/10 to-transparent pointer-events-none" />
                      {/* Decorative circular backgrounds */}
                      <div className="absolute w-36 h-36 bg-[#D4EBF8]/50 rounded-full blur-xl scale-75 group-hover:scale-100 transition-transform duration-500 pointer-events-none" />
                      {/* Product Icon */}
                      <div className="relative w-20 h-20 bg-white text-[#0369A1] rounded-full flex items-center justify-center shadow-md border border-stone-200/10 group-hover:scale-110 transition-transform duration-500">
                        <ProductIcon name={prod.iconName} className="w-10 h-10" />
                      </div>
                    </>
                  )}

                  {/* Top tags */}
                  {prod.tag && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 shadow-sm border border-stone-100 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#0369A1] backdrop-blur-xs">
                      {prod.tag[currentLang]}
                    </span>
                  )}
                  
                  <span className="absolute top-4 right-4 px-2.5 py-1 bg-stone-900/60 text-white rounded-md text-[9px] uppercase tracking-wider font-mono backdrop-blur-xs">
                    {prod.category}
                  </span>
                </div>

                {/* Card Content details */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-stone-900 mb-2 group-hover:text-[#0369A1] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 font-light line-clamp-3 leading-relaxed mb-6">
                      {prod.description[currentLang]}
                    </p>
                  </div>

                  {/* Buttons Action */}
                  <div className="space-y-2 pt-4 border-t border-stone-100/50">
                    <button
                      onClick={() => setSelectedProduct(prod)}
                      className="w-full flex items-center justify-center space-x-2 py-2.5 bg-stone-50 text-stone-800 hover:bg-[#D4EBF8]/40 border border-stone-200/50 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      <span>{t.quickView}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    
                    <a
                      href={getWhatsAppLink(prod.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 py-2.5 bg-sky-600 text-white hover:bg-sky-700 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{t.orderWhatsApp}</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state when no products found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20" id="empty-store-state">
            <p className="text-stone-500 dark:text-stone-400 font-light">
              {currentLang === 'fr' ? 'Aucun produit ne correspond à vos critères.' :
               currentLang === 'de' ? 'Keine Produkte entsprechen Ihren Kriterien.' :
               'No products match your search criteria.'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-4 text-xs font-semibold uppercase tracking-wider underline text-[#4A3E3D] dark:text-[#F5E6D3]"
            >
              {currentLang === 'fr' ? 'Réinitialiser les filtres' :
               currentLang === 'de' ? 'Filter zurücksetzen' :
               'Reset filters'}
            </button>
          </div>
        )}

        {/* IMPORTANT MEDICAL DISCLAIMER BLOCK */}
        <div className="mt-20 p-6 bg-[#F2EADF] rounded-3xl border border-stone-200/40 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 shadow-sm" id="medical-disclaimer-box">
          <div className="p-3 bg-sky-100 text-sky-800 rounded-full flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-sm text-stone-900">
              {t.disclaimerTitle}
            </h4>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              {t.disclaimerText}
            </p>
          </div>
        </div>

      </div>

      {/* DETAILED QUICK VIEW MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="details-modal">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            />
            
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-stone-200/30 z-10 flex flex-col text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-stone-100 text-stone-700 rounded-full border border-stone-200/10 transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Top header (with cover image overlay if available) */}
              {selectedProduct.image ? (
                <div className="relative h-64 w-full bg-stone-100 border-b border-stone-200">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end p-6 sm:p-8">
                    <div>
                      {selectedProduct.tag && (
                        <span className="inline-block px-2.5 py-0.5 bg-sky-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-full mb-2 shadow-xs">
                          {selectedProduct.tag[currentLang]}
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                        {selectedProduct.name}
                      </h3>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-stone-300">
                        Category: {selectedProduct.category}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative pt-16 pb-10 px-8 bg-gradient-to-br from-stone-50 to-stone-100/50 flex flex-col sm:flex-row sm:items-center sm:space-x-6 border-b border-stone-100">
                  <div className="w-16 h-16 bg-[#D4EBF8] text-[#0369A1] rounded-full flex items-center justify-center shadow-md mb-4 sm:mb-0">
                    <ProductIcon name={selectedProduct.iconName} className="w-8 h-8" />
                  </div>
                  <div>
                    {selectedProduct.tag && (
                      <span className="inline-block px-2.5 py-0.5 bg-sky-100 text-sky-800 text-[9px] font-bold uppercase tracking-widest rounded-full mb-1">
                        {selectedProduct.tag[currentLang]}
                      </span>
                    )}
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900">
                      {selectedProduct.name}
                    </h3>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500">
                      Category: {selectedProduct.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Modal Content body */}
              <div className="p-8 space-y-6 overflow-y-auto">
                {/* Description */}
                <p className="text-sm text-stone-700 font-light leading-relaxed">
                  {selectedProduct.description[currentLang]}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-stone-400">
                    {t.benefitsLabel}
                  </h4>
                  <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-stone-700">
                    {selectedProduct.benefits[currentLang].map((ben, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients/Composition */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-stone-400">
                    {t.ingredientsLabel}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.composition[currentLang].map((comp, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#D4EBF8]/40 border border-sky-100 rounded-lg text-xs text-[#0369A1] font-light"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Usage Advice */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-stone-400">
                    {t.usageLabel}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
                    {selectedProduct.usage[currentLang]}
                  </p>
                </div>
              </div>

              {/* Modal Footer actions */}
              <div className="p-6 bg-stone-50 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:697254607`}
                  className="flex items-center justify-center space-x-2 py-3 bg-white text-stone-800 border border-stone-200 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-stone-50"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.orderCall}</span>
                </a>
                
                <a
                  href={getWhatsAppLink(selectedProduct.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 bg-sky-600 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-sky-700"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.orderWhatsApp}</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
