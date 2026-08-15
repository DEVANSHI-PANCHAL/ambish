"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function MinimalistMixerLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth progress counter reaching 100% in ~1.6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 300);
          return 100;
        }
        const increment = Math.max(1, Math.floor((100 - prev) / 6) + 3);
        return Math.min(100, prev + increment);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="minimalist-mixer-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0A0F1D] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Subtle warm orange ambient spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#E86A17]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Minimalist Rotating Mixer Graphic */}
            <div className="relative w-36 h-36 flex items-center justify-center mb-6">
              {/* Outer Circular Progress Track */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="2.5"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#E86A17"
                  strokeWidth="2.5"
                  strokeDasharray="276.46"
                  strokeDashoffset={276.46 - (276.46 * progress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-75 ease-out shadow-[0_0_12px_rgba(232,106,23,0.8)]"
                />
              </svg>

              {/* Minimalist Concrete Mixer Drum in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  {/* Rotating Mixer Drum */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      ease: 'linear',
                      duration: 2.2,
                    }}
                    className="relative w-12 h-12 flex items-center justify-center"
                  >
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      {/* Mixer Barrel Body */}
                      <path
                        d="M 12 18 L 24 10 L 36 18 L 34 34 L 14 34 Z"
                        fill="#E86A17"
                        stroke="#FFA057"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      {/* Central Mixing Blades / Ring Accent */}
                      <circle cx="24" cy="22" r="5" fill="#0A0F1D" stroke="#FFA057" strokeWidth="1.2" />
                      <line x1="24" y1="12" x2="24" y2="17" stroke="#FFA057" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="24" y1="27" x2="24" y2="32" stroke="#FFA057" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="15" y1="22" x2="19" y2="22" stroke="#FFA057" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="29" y1="22" x2="33" y2="22" stroke="#FFA057" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </motion.div>

                  {/* Static Minimalist Chassis Stand & Wheels Underneath */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-14 flex flex-col items-center">
                    {/* Stand crossbar */}
                    <div className="w-10 h-[1.5px] bg-slate-600 rounded-full" />
                    {/* Left & Right wheels */}
                    <div className="flex justify-between w-full mt-0.5 px-1">
                      <div className="w-2.5 h-2.5 rounded-full border border-slate-500 bg-slate-800" />
                      <div className="w-2.5 h-2.5 rounded-full border border-slate-500 bg-slate-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Title & Year */}
            <div className="text-center">
              <h2 className="text-white text-base font-extrabold tracking-wider uppercase mb-1 font-sans">
                Ambish <span className="text-[#E86A17]">Engineering</span>
              </h2>
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-400">
                <span>EST. 1976</span>
                <span className="text-slate-600">•</span>
                <span className="text-[#E86A17] font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
