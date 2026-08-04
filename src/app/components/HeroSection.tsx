"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="min-h-screen w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] min-h-screen">
          <div className="relative bg-white px-8 py-10 sm:px-14 sm:py-16 lg:px-20 lg:py-24 text-slate-950 overflow-hidden min-h-screen flex items-center">
            <div className="relative z-10 max-w-2xl text-left">
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-slate-950/80">
                -- #1 Construction Agency --
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-8 text-5xl sm:text-[4.75rem] md:text-[5.5rem] font-bold leading-[0.9] tracking-tight text-slate-950"
              >
                Let’s realize your best
                <br />
                building construction
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-slate-950/90 max-w-xl leading-8"
              >
                Turn your construction dreams into reality with our expert team and innovative solutions.
                We bring your vision to life with quality, safety, and excellence on every project.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-slate-950 text-white hover:bg-slate-900 gap-2 text-base px-8"
                  onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-950 text-slate-950 hover:bg-slate-100 gap-2 text-base px-8"
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                >
                  <Play className="w-4 h-4" />
                  Watch Video
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="relative bg-slate-100 overflow-hidden min-h-screen">
            <Image
              src="/crane.webp"
              alt="Construction crane and site"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
