"use client";

import { motion } from 'motion/react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import ConstructionSiteHero from './ConcreteMixer3D';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/crane.webp')",
        }}
      />
      {/* Gradient overlay for aesthetic effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50" />
      
      {/* Textured grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#E86A17 1px, transparent 1px), linear-gradient(90deg, #E86A17 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Orange accent orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#E86A17]/15 rounded-full blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E86A17]/10 rounded-full blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E86A17] to-transparent opacity-60" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gray-900 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#E86A17]/40 bg-[#E86A17]/10 rounded-full"
            >
              <span className="w-2 h-2 bg-[#E86A17] rounded-full animate-pulse" />
              <span className="text-sm text-[#E86A17] font-medium tracking-wide">Established 1976 · Ahmedabad, India</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-5xl lg:text-6xl font-bold leading-tight"
              >
                Trusted Construction
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86A17] to-[#FDB813]">
                  Machinery Partner
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 max-w-xl leading-relaxed"
              >
                Supplying premium tower hoists, cranes, concrete mixers, and construction
                equipment across India for nearly 50 years.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-[#E86A17] hover:bg-[#d05c0f] text-white gap-2 group text-base px-8 shadow-lg shadow-[#E86A17]/30"
                onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-100 gap-2 text-base px-8"
                onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              {[
                { value: '48+', label: 'Years Legacy' },
                { value: '1000+', label: 'Projects Done' },
                { value: 'Pan India', label: 'Supply Network' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-[#E86A17]">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Construction site illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[500px] lg:h-[680px]"
          >
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
            <ConstructionSiteHero />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#E86A17] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
