"use client";

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
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
  '/heritage/heritage-01.jpeg',
  '/heritage/heritage-02.png',
  '/heritage/heritage-03.png',
  '/heritage/heritage-04.png',
  '/heritage/heritage-05.png',
  '/heritage/heritage-06.png',
  '/heritage/heritage-07.png',
  '/heritage/heritage-08.png',
  '/heritage/heritage-09.jpeg',
  '/heritage/heritage-10.jpeg',
  '/heritage/heritage-11.jpeg',
  '/heritage/heritage-12.jpeg',
  '/heritage/heritage-13.jpeg',
  '/heritage/heritage-14.jpeg',
  '/heritage/heritage-15.jpeg',
  '/heritage/heritage-16.jpeg',
];

export default function LegacySection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  // Smooth continuous auto-scroll loop (gentle, authentic unspooling velocity)
  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (scrollRef.current && isPlaying && !isHovered && !isDragging) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 0.55;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, isHovered, isDragging]);

  // Navigation handlers
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section ref={ref} id="legacy" className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden border-t border-stone-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🏛️ Heritage Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          {/* Small Archival Label */}
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#E86A17] uppercase mb-3 bg-[#E86A17]/10 px-3 py-1 rounded-full border border-[#E86A17]/20">
            <span>AMBISH ENGINEERING · EST. 1976</span>
          </div>

          {/* Editorial Serif Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            The Ambish Legacy
          </h2>

          {/* Supporting Line */}
          <p className="text-lg sm:text-xl font-serif italic text-[#E86A17] mt-1 mb-3">
            Captured Through the Years
          </p>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From our early manufacturing days to the machinery solutions we provide today, these photographs preserve glimpses of the journey that shaped Ambish Engineering.
          </p>
        </motion.div>

        {/* 📐 Overall Company Timeline Progression */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14 relative"
        >
          <div className="hidden lg:block absolute top-[14px] left-0 right-0 h-[2px] bg-stone-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {MILESTONES.map((m) => (
              <div key={m.year} className="relative pt-6 lg:pt-8 group">
                <div className="hidden lg:flex absolute top-0 left-0 w-7 h-7 rounded-full bg-white border-2 border-stone-300 group-hover:border-[#E86A17] items-center justify-center transition-colors shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-stone-400 group-hover:bg-[#E86A17] transition-colors" />
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

        {/* 🎞️ HERO 35MM FILM ROLL VISUAL ELEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="relative w-full group/film"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseUpOrLeave();
          }}
        >
          {/* ⬅️ Elegant Circular Left Navigation Arrow */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous photograph"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-white text-slate-900 hover:bg-[#E86A17] hover:text-white flex items-center justify-center border border-stone-300 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>

          {/* ➡️ Elegant Circular Right Navigation Arrow */}
          <button
            onClick={() => handleScroll('right')}
            aria-label="Next photograph"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-white text-slate-900 hover:bg-[#E86A17] hover:text-white flex items-center justify-center border border-stone-300 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>

          {/* Edge Fade Vignettes */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-20 pointer-events-none rounded-l-xl" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-20 pointer-events-none rounded-r-xl" />

          {/* 35mm Continuous Film Strip Body */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            className={`flex items-stretch overflow-x-auto gap-0 bg-[#0a0a0c] border-y-[6px] border-black rounded-xl select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shadow-2xl ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {HERITAGE_PHOTOS.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-60 sm:w-72 md:w-80 bg-[#0a0a0c] flex flex-col justify-between group relative border-r-[5px] border-black p-0 select-none"
              >
                {/* Top Sprocket Perforations Track */}
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0a0a0c]">
                  {Array.from({ length: 11 }).map((_, s) => (
                    <div
                      key={s}
                      className="w-2.5 h-3 rounded-[1px] bg-white flex-shrink-0 shadow-sm opacity-90"
                    />
                  ))}
                </div>

                {/* Pure Photographic Frame Window with Sleeker Height & Zoomed-In Details */}
                <div className="relative aspect-[3/2] w-full bg-black px-1 py-0.5">
                  <div className="relative w-full h-full overflow-hidden bg-neutral-950 border border-neutral-800 rounded-[2px]">
                    <Image
                      src={src}
                      alt="Ambish Engineering Historical Archive Photograph"
                      fill
                      sizes="(min-width: 768px) 320px, 260px"
                      quality={90}
                      decoding="async"
                      className="object-cover scale-[1.28] group-hover:scale-[1.34] group-hover:brightness-105 transition-all duration-500 select-none"
                      priority={idx < 4}
                    />
                  </div>
                </div>

                {/* Bottom Sprocket Perforations Track */}
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0a0a0c]">
                  {Array.from({ length: 11 }).map((_, s) => (
                    <div
                      key={s}
                      className="w-2.5 h-3 rounded-[1px] bg-white flex-shrink-0 shadow-sm opacity-90"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 📜 Bottom Archival Footer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 text-xs text-slate-500 font-mono"
        >
          {/* General Archival Reference */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E86A17]" />
            <span className="font-semibold tracking-wider text-slate-700 uppercase">
              FROM THE AMBISH ARCHIVES · SINCE 1976
            </span>
          </div>

          {/* Play/Pause Control Indicator */}
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:text-slate-900 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {isPlaying && !isHovered ? (
                <>
                  <Pause className="w-3 h-3 text-[#E86A17]" />
                  <span>Pause Reel</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-emerald-600" />
                  <span>{isHovered ? 'Paused on Hover' : 'Play Reel'}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
