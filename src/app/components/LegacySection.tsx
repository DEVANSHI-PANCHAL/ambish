"use client";

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import {
  History,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  tag: string;
  description: string;
}

const MILESTONES: Milestone[] = [
  {
    year: '1976',
    tag: 'Foundation',
    title: 'Ahmedabad Workshop',
    description: 'Founded with a mission to engineer rugged, honest machinery for Gujarat contractors.',
  },
  {
    year: '1985',
    tag: 'Innovation',
    title: 'High-Rise Hoists',
    description: 'Pioneered robust material lifts and tower hoists for high-rise vertical transit.',
  },
  {
    year: '1995',
    tag: 'Expansion',
    title: 'Statewide Trust',
    description: 'Became preferred manufacturing supplier for premier developers across Gujarat.',
  },
  {
    year: '2010',
    tag: 'Scale',
    title: 'Pan-India Reach',
    description: 'Supplying heavy construction machinery to nationwide infrastructure sites.',
  },
  {
    year: '2026',
    tag: 'Heritage',
    title: '50 Years of Excellence',
    description: '3 generations of family-run commitment to rugged reliability and client trust.',
  },
];

const HERITAGE_PHOTOS: string[] = [
  '/heritage/heritage-1.png?v=4',
  '/heritage/heritage-2.png?v=4',
  '/heritage/heritage-3.png?v=4',
  '/heritage/heritage-4.png?v=4',
  '/heritage/heritage-6.png?v=4',
  '/heritage/heritage-7.png?v=4',
  '/heritage/heritage-8.png?v=4',
  '/heritage/heritage-10.jpeg?v=4',
  '/heritage/heritage-12.jpeg?v=4',
  '/heritage/heritage-13.jpeg?v=4',
  '/heritage/heritage-14.jpeg?v=4',
  '/heritage/heritage-15.jpeg?v=4',
  '/heritage/heritage-16.jpeg?v=4',
  '/heritage/heritage-17.jpeg?v=4',
  '/heritage/heritage-18.jpeg?v=4',
  '/heritage/heritage-19.jpeg?v=4',
];

export default function LegacySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isPaused, setIsPaused] = useState(false);

  // Repeat for continuous seamless infinite loop
  const marqueePhotos = [...HERITAGE_PHOTOS, ...HERITAGE_PHOTOS];

  return (
    <section ref={ref} id="legacy" className="py-14 md:py-18 bg-[#FAF9F6] relative overflow-hidden border-t border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E86A17] mb-2">
              <History className="w-3.5 h-3.5" />
              <span>Engineering Heritage</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              5 Decades of <span className="text-[#E86A17]"> Trust</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Established in 1976 in Ahmedabad, building enduring partnerships across three generations of heavy machinery craft.
          </p>
        </motion.div>

        {/* Architectural Connected Timeline Ribbon (No Clunky Card Boxes) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 relative"
        >
          {/* Continuous Connecting Track */}
          <div className="hidden lg:block absolute top-[14px] left-0 right-0 h-[2px] bg-slate-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {MILESTONES.map((m, idx) => (
              <div key={m.year} className="relative pt-6 lg:pt-8 group">
                {/* Milestone Node on Track */}
                <div className="hidden lg:flex absolute top-0 left-0 w-7 h-7 rounded-full bg-white border-2 border-slate-300 group-hover:border-[#E86A17] items-center justify-center transition-colors shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-[#E86A17] transition-colors" />
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-[#E86A17] transition-colors">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#E86A17]">
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {m.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Full-Bleed Archival Photo Strip (Very Very Very Slow Infinite Auto-Scroll) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="bg-slate-950 text-white rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-xl border border-slate-800"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Header & Controls */}
          <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E86A17]" />
              <span className="text-xs uppercase tracking-widest font-bold text-slate-300">
                Archival Frames: The Ambish Journey Since 1976
              </span>
            </div>

            <div className="text-[11px] font-mono text-slate-400">
              Hover to pause inspection
            </div>
          </div>

          {/* Infinite Smooth Slow-Motion Carousel */}
          <div className="relative w-full overflow-hidden select-none py-1">
            {/* Edge Shadow Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4 sm:gap-5 w-max"
              animate={{
                x: isPaused ? undefined : ['0%', '-50%'],
              }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 200, // Ultra slow 160-second loop
              }}
            >
              {marqueePhotos.map((src, idx) => (
                <div
                  key={idx}
                  className="w-60 sm:w-72 flex-shrink-0 bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl shadow-black/40 border border-slate-200/50 group flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Cropped Inset Image Area */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 shadow-inner">
                    <Image
                      src={src}
                      alt={`Ambish Engineering Historical Fabrication Archive Frame #${String((idx % HERITAGE_PHOTOS.length) + 1).padStart(2, '0')}`}
                      fill
                      sizes="300px"
                      quality={82}
                      decoding="async"
                      className="object-cover scale-[1.08] group-hover:scale-[1.14] transition-transform duration-300 select-none"
                      priority={idx < 4}
                    />
                  </div>

                  {/* Subtle Archival Exhibition Stamp */}
                  <div className="flex items-center justify-between pt-2 px-1 text-[9px] font-mono uppercase tracking-widest text-slate-400 font-semibold select-none">
                    <span>Archive #{String((idx % HERITAGE_PHOTOS.length) + 1).padStart(2, '0')}</span>
                    <span className="text-[#E86A17] font-bold">EST. 1976</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
