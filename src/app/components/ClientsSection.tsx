"use client";

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Building2, Award, ShieldCheck, Truck, ExternalLink } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  logo: string;
  alt: string;
  website: string;
}

const CLIENTS: Client[] = [
  {
    id: 'gala',
    name: 'Gala Group',
    logo: '/clients/gala.png',
    alt: 'Gala Group Official Logo',
    website: 'https://galainfra.com/',
  },
  {
    id: 'pc-snehal',
    name: 'P.C. Snehal Group',
    logo: '/clients/pcsnehal.png',
    alt: 'P.C. Snehal Group Official Logo',
    website: 'https://pcsnehal.in/',
  },
  {
    id: 'psp-projects',
    name: 'PSP Projects',
    logo: '/clients/psp-projects.png',
    alt: 'PSP Projects Official Logo',
    website: 'https://www.pspprojects.com/',
  },
  {
    id: 'b-safal',
    name: 'B Safal',
    logo: '/clients/b-safal.png',
    alt: 'B Safal Official Logo',
    website: 'https://bsafal.com/',
  },
  {
    id: 'bakeri',
    name: 'Bakeri Group',
    logo: '/clients/bakeri.png',
    alt: 'Bakeri Group Official Logo',
    website: 'https://www.bakeri.com/',
  },
  {
    id: 'savvy',
    name: 'Savvy Group',
    logo: '/clients/savvy.png',
    alt: 'Savvy Group Official Logo',
    website: 'https://savvygroup.in/',
  },
  {
    id: 'goyal',
    name: 'Goyal & Co.',
    logo: '/clients/goyal.png',
    alt: 'Goyal & Co. Official Logo',
    website: 'https://goyalco.com/',
  },
  {
    id: 'srm-creators',
    name: 'SRM Creators',
    logo: '/clients/srm-creators.png',
    alt: 'SRM Creators Official Logo',
    website: 'https://www.srm-creators.co.in/',
  },
];

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isPaused, setIsPaused] = useState(false);

  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section ref={ref} id="clients" className="py-14 md:py-18 bg-[#FAF9F6] relative overflow-hidden border-t border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200"
        >
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#E86A17] mb-2">
              <Building2 className="w-3.5 h-3.5" />
              <span>Premier Builders & Developers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by <span className="text-[#E86A17]">Industry Leaders</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Supplying construction machinery to India&apos;s most demanding infrastructure, township, and high-rise developments.
          </p>
        </motion.div>
      </div>

      {/* Infinite Seamless Logo Marquee */}
      <div
        className="relative w-full overflow-hidden mb-10 py-2 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 w-max"
          animate={{
            x: isPaused ? undefined : ['0%', '-50%'],
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 180,
          }}
        >
          {marqueeItems.map((client, idx) => (
            <a
              key={`${client.id}-${idx}`}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${client.name} Official Website`}
              className="w-48 sm:w-56 h-24 sm:h-28 bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:border-[#E86A17]/40 hover:shadow-md transition-all duration-200 flex items-center justify-center flex-shrink-0 group cursor-pointer relative overflow-hidden"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  fill
                  sizes="220px"
                  className="object-contain p-2 select-none group-hover:scale-105 transition-transform duration-200"
                  priority={idx < 6}
                />
              </div>

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#E86A17]">
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Integrated Editorial Metric Strip (Hairline Dividers, No Bulky Boxes) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-slate-200"
        >
          {[
            { value: '48+ Years', label: 'Manufacturing & Supply Trust' },
            { value: '1000+', label: 'Major Sites & Projects' },
            { value: '100%', label: 'Heavy Duty Tested Quality' },
            { value: 'Pan-India', label: 'Prompt Machinery Dispatch' },
          ].map((stat, idx) => (
            <div key={idx} className="text-left">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
