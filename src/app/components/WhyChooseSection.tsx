"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Users, Heart, CheckCircle, Handshake, Headphones, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/site';

const features = [
  { icon: Shield, title: 'Since 1976', description: 'Five decades of proven manufacturing and field-tested machinery reliability.' },
  { icon: Users, title: 'Trusted by Leaders', description: 'Preferred equipment partner for premier developers and civil contractors nationwide.' },
  { icon: Heart, title: 'Honest Engineering', description: 'Tailored technical recommendations based strictly on your site’s specific requirements.' },
  { icon: CheckCircle, title: 'Rugged Durability', description: 'Heavy-gauge steel construction built to endure rigorous job-site duty.' },
  { icon: Handshake, title: 'Long-Term Partnership', description: 'Multigenerational client relationships founded on integrity and reliable service.' },
  { icon: Headphones, title: 'Spares & Support', description: 'Dedicated technical assistance and prompt genuine spare parts dispatch across India.' },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="why-choose" className="py-14 md:py-18 bg-white relative overflow-hidden border-t border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#E86A17] block mb-2">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The <span className="text-[#E86A17]">Ambish Standard</span> of Engineering
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Heavy-duty machinery engineered to perform in demanding site environments, backed by decades of direct manufacturing expertise.
          </p>
        </motion.div>

        {/* 2-Column Split Showcase (No Clunky Card Boxes) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Image Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full h-[380px] lg:h-[480px] rounded-2xl overflow-hidden shadow-lg border border-slate-200"
          >
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Heavy construction machinery on site"
              className="w-full h-full object-cover select-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-md border border-slate-100">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-[#E86A17] leading-none mb-0.5">Nearly 50 Yrs</div>
                <div className="text-xs text-slate-600 font-semibold">Manufacturing Legacy</div>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 leading-none mb-0.5">1000+</div>
                <div className="text-xs text-slate-600 font-semibold">Major Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Architectural Feature Grid (7 cols, Hairline Dividers, No Boxes) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="pt-4 border-t border-slate-200 group"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-orange-50 text-[#E86A17] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E86A17] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-9">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Seamless Compact CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border border-slate-800"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-1 text-white">
              Looking for Reliable Site Machinery?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Connect directly with our engineering team for technical specs and quotations.
            </p>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#E86A17] hover:bg-[#D45A0E] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#E86A17]/25 transition-all flex items-center gap-2 flex-shrink-0 hover:scale-105"
          >
            <span>Request Machinery Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
