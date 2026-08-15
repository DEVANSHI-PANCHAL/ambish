"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

export default function TowerHoistLoader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100 in ~1.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 350);
          return 100;
        }
        // Accelerate smoothly
        const increment = Math.max(1, Math.floor((100 - prev) / 8) + 2);
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          key="tower-hoist-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0A0F1D] flex flex-col items-center justify-center select-none overflow-hidden"
        >
          {/* Ambient industrial background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E86A17]/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Subtle blueprint grid overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#E86A17 1px, transparent 1px), linear-gradient(90deg, #E86A17 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            {/* Logo and Brand Tagline */}
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-6"
            >
              <div className="relative w-36 h-12 mb-2 filter brightness-0 invert">
                <Image
                  src="/ambish-logo.png"
                  alt="Ambish Engineering Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E86A17] animate-pulse" />
                <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
                  Building Trust Since 1976
                </span>
              </div>
            </motion.div>

            {/* High-Rise Tower Hoist Mast & Ascending Cage Graphic */}
            <div className="relative w-44 h-56 bg-slate-900/80 rounded-2xl border border-slate-800 p-3 flex justify-center shadow-2xl overflow-hidden mb-6">
              {/* Top Hoist Pulley & Crown Head */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#E86A17] bg-slate-950 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#E86A17]" />
                </div>
                <div className="w-8 h-1.5 bg-slate-700 rounded-full" />
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#E86A17] bg-slate-950 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#E86A17]" />
                </div>
              </div>

              {/* Central Lattice Mast Column (Truss Bracing) */}
              <div className="absolute top-7 bottom-3 left-1/2 -translate-x-1/2 w-10 border-x-2 border-slate-700/80 flex flex-col justify-between py-1 z-0">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="relative w-full h-7 border-b border-slate-700/60">
                    <div className="absolute inset-0 border-t border-slate-700/30 rotate-[22deg] origin-top-left" />
                  </div>
                ))}
              </div>

              {/* Steel Wire Ropes */}
              <div className="absolute top-4 bottom-4 left-1/2 -translate-x-[11px] w-[1.5px] bg-[#E86A17]/40 z-10" />
              <div className="absolute top-4 bottom-4 left-1/2 translate-x-[9px] w-[1.5px] bg-[#E86A17]/40 z-10" />

              {/* Ascending Industrial Hoist Cage */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-20 h-16 transition-all duration-75 ease-out z-20"
                style={{
                  bottom: `${14 + (progress / 100) * 115}px`,
                }}
              >
                {/* Safety Orange Builder Cage */}
                <div className="w-full h-full bg-[#E86A17] rounded-xl p-1.5 shadow-lg shadow-[#E86A17]/30 border-2 border-orange-400 flex flex-col justify-between relative overflow-hidden">
                  {/* Top Roof & Cable Hook */}
                  <div className="w-full h-1.5 bg-slate-950 rounded-sm" />

                  {/* Wire Mesh Window */}
                  <div className="w-full flex-1 my-1 bg-slate-950/60 rounded-md border border-orange-300/40 flex items-center justify-center">
                    <span className="text-[9px] font-black tracking-tighter text-white font-mono">
                      LVL {Math.floor((progress / 100) * 50)}
                    </span>
                  </div>

                  {/* Base Safety Platform */}
                  <div className="w-full h-1 bg-slate-900 rounded-sm" />

                  {/* Mechanical Warning Light */}
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-200 animate-ping" />
                </div>
              </div>

              {/* Ground Foundation Base */}
              <div className="absolute bottom-2 left-4 right-4 h-2 bg-slate-800 rounded-full border border-slate-700 z-20" />
            </div>

            {/* Progress Percentage & Status */}
            <div className="w-full">
              <div className="flex justify-between items-center text-xs font-mono font-bold mb-2">
                <span className="text-slate-400 tracking-wider">HOISTING MACHINERY</span>
                <span className="text-[#E86A17] text-sm">{progress}%</span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-2 bg-slate-800/90 rounded-full overflow-hidden border border-slate-700/80 p-0.5 shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-[#E86A17] to-orange-400 rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(232,106,23,0.5)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-center text-[11px] text-slate-500 mt-3 font-medium">
                Nearly 50 Years of Heavy Duty Manufacturing
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
