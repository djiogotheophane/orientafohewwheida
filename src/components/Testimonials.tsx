import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Language } from '../types';
import { reviewsData } from '../data';
import { translations } from '../translations';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsProps {
  currentLang: Language;
}

export default function Testimonials({ currentLang }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const t = translations[currentLang];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    initial: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? 50 : -50,
    }),
    active: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? -50 : 50,
    }),
  };

  const activeReview = reviewsData[activeIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF6F0] transition-colors duration-500 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="testimonials-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#D4EBF8] border border-[#bae6fd] rounded-full mb-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0369A1] font-mono">
              Avis Clients
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-stone-900 mb-4">
            {t.testTitle}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light">
            {t.testSubtitle}
          </p>
        </div>

        {/* Carousel Frame */}
        <div className="relative bg-[#F2EADF]/80 rounded-3xl p-8 sm:p-12 border border-stone-200/40 shadow-xs" id="carousel-frame">
          
          {/* Quote Icon Accent */}
          <div className="absolute top-6 left-6 text-sky-200/60 pointer-events-none">
            <Quote className="w-12 h-12 rotate-180" />
          </div>

          <div className="relative min-h-[220px] flex flex-col justify-between" id="carousel-animator">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="initial"
                animate="active"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating stars */}
                <div className="flex space-x-1 justify-center sm:justify-start">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-sm sm:text-base text-stone-700 font-light italic leading-relaxed text-center sm:text-left">
                  "{activeReview.text[currentLang]}"
                </blockquote>

                {/* Author profile */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-3 sm:space-y-0 pt-4 border-t border-stone-200/20">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-sky-200"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-center sm:text-left">
                    <cite className="not-italic font-serif font-bold text-sm text-stone-900 block">
                      {activeReview.name}
                    </cite>
                    <span className="text-[11px] uppercase tracking-wider font-mono text-stone-500">
                      {activeReview.role[currentLang]}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls (Left/Right) */}
          <div className="absolute bottom-6 right-6 flex space-x-2" id="carousel-arrows">
            <button
              onClick={handlePrev}
              className="p-2 bg-white text-[#0369A1] rounded-full border border-stone-200/30 hover:bg-sky-50 transition-colors shadow-xs"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white text-[#0369A1] rounded-full border border-stone-200/30 hover:bg-sky-50 transition-colors shadow-xs"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bullet indicators */}
        <div className="flex justify-center space-x-2 mt-6" id="carousel-bullets">
          {reviewsData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 'right' : 'left');
                setActiveIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-sky-600' : 'w-2.5 bg-sky-200'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
