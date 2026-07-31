"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PRODUCT_IMAGES = [
  '/products/WhatsApp Image 2026-07-22 at 10.13.50 AM.jpeg',
  '/products/WhatsApp Image 2026-07-22 at 10.13.51 AM (1).jpeg',
  '/products/WhatsApp Image 2026-07-22 at 10.13.51 AM (2).jpeg',
  '/products/WhatsApp Image 2026-07-22 at 10.13.51 AM (3).jpeg',
  '/products/WhatsApp Image 2026-07-22 at 10.13.51 AM.jpeg',
  '/products/WhatsApp Image 2026-07-22 at 10.13.52 AM.jpeg',
];

export default function ConstructionSiteHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-48 bg-[#E86A17]/20 blur-3xl rounded-full" />
        <div className="absolute top-1/4 right-8 w-48 h-48 bg-[#FDB813]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={PRODUCT_IMAGES[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-[#1A1A1A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/30 via-transparent to-[#E86A17]/10" />

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 rounded-full p-2 transition-all duration-300"
          aria-label="Previous product"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 rounded-full p-2 transition-all duration-300"
          aria-label="Next product"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {PRODUCT_IMAGES.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#E86A17] w-8 h-2'
                  : 'bg-white/40 w-2 h-2 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 text-white text-sm font-medium">
          {currentIndex + 1} / {PRODUCT_IMAGES.length}
        </div>
      </div>
    </div>
  );
}
