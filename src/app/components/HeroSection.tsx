"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronRight, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { SITE } from '../../lib/site';

export default function HeroSection() {
  const themeBlue = '#132b56';
  const themeOrange = '#d2642c';
  const mainTitle = SITE.name;
  const descriptor = (() => {
    try {
      const parts = SITE.title.split('–');
      const afterDash = parts.length > 1 ? parts[1] : SITE.title;
      const beforePipe = afterDash.split('|')[0];
      return beforePipe.trim();
    } catch (e) {
      return '';
    }
  })();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="min-h-screen w-full">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] min-h-screen">
          <div className="relative bg-white px-8 py-10 sm:px-14 sm:py-16 lg:px-20 lg:py-24 text-slate-950 overflow-hidden min-h-screen flex items-center">
            <div className="relative z-10 max-w-2xl text-left">
              <div className="flex items-center gap-3">
                <Badge className="bg-[#132b56] text-white px-3 py-1 rounded-full">
                  <MapPin className="w-3 h-3" />
                  <span className="ml-2 text-xs font-medium">Ahmedabad, India • Since 1976</span>
                </Badge>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-8 text-4xl sm:text-5xl md:text-[3.6rem] lg:text-[4.25rem] font-extrabold leading-[1.02] tracking-tight text-[#132b56] max-w-lg"
              >
                {mainTitle}
              </motion.h1>

              {descriptor && (
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-4 text-xl sm:text-2xl text-[#d2642c] font-semibold"
                >
                  {descriptor}
                </motion.h2>
              )}

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-slate-700 max-w-lg leading-7 "
              >
                {SITE.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  className="bg-[#d2642c] text-white hover:bg-[#b75525] gap-2 text-base px-8"
                  onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Quote
                  <ChevronRight className="w-4 h-4" />
                </Button>
               
              </motion.div>
            </div>
          </div>
          <div className="relative bg-slate-100 overflow-hidden min-h-screen">
            <Image
              src="/blue_crane.jpg"
              alt="Construction crane and site"
              fill
              priority
              quality={90}
              sizes="(min-width:1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
