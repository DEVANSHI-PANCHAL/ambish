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
    id: 'hn-safal',
    name: 'HN Safal',
    logo: '/clients/hn-safal.webp',
    alt: 'HN Safal Official Logo',
    website: 'https://www.hnsafal.com/',
  },
  {
    id: 'bakeri',
    name: 'Bakeri Group',
    logo: '/clients/bakeri.png',
    alt: 'Bakeri Group Official Logo',
    website: 'https://www.bakeri.com/',
  },
];

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isPaused, setIsPaused] = useState(false);

  // Repeat items for seamless continuous infinite marquee
  const marqueeItems = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section ref={ref} id="clients" className="py-20 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E86A17]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 border border-[#E86A17]/20 shadow-sm">
            <Building2 className="w-4 h-4" />
            Trusted Industry Leaders
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Trusted by <span className="text-[#E86A17]">Premier Developers</span> & Contractors
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Proudly supplying heavy construction machinery, hoists, and concrete batch equipment to Gujarat and India&apos;s leading infrastructure builders.
          </p>
        </motion.div>
      </div>

      {/* Infinite Seamless Logo Carousel (Full Space Utilization, No Dead White Space) */}
      <div
        className="relative w-full overflow-hidden mb-16 py-2 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Gradient Masks for Seamless Infinity Loop */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-5 sm:gap-6 w-max"
          animate={{
            x: isPaused ? undefined : ['0%', '-50%'],
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 50,
          }}
        >
          {marqueeItems.map((client, idx) => (
            <a
              key={`${client.id}-${idx}`}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${client.name} Official Website`}
              className="w-52 sm:w-64 h-28 sm:h-32 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-[#E86A17]/50 transition-all duration-300 flex items-center justify-center flex-shrink-0 group cursor-pointer relative overflow-hidden"
            >
              {/* Authentic Client Logo Only */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  fill
                  sizes="260px"
                  className="object-contain p-2 select-none group-hover:scale-105 transition-transform duration-200"
                  priority={idx < 6}
                />
              </div>

              {/* Subtle hover icon */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#E86A17]">
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Highlight Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: Award, value: '48+ Years', label: 'Manufacturing & Supply Trust' },
            { icon: Building2, value: '1000+', label: 'Major Sites & Projects Equipped' },
            { icon: ShieldCheck, value: '100%', label: 'Tested Safety & Rugged Quality' },
            { icon: Truck, value: 'Pan-India', label: 'Machinery Delivery & Spares' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm text-center flex flex-col items-center justify-center"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#E86A17] flex items-center justify-center mb-2.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
