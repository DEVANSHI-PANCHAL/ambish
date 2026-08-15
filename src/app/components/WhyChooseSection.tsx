"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Users, Heart, CheckCircle, Handshake, Headphones } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Since 1976', description: 'Nearly five decades of industry experience and proven reliability' },
  { icon: Users, title: 'Trusted by Contractors', description: 'Preferred supplier for leading construction companies across India' },
  { icon: Heart, title: 'Honest Recommendations', description: 'We guide you to the right machinery for your specific project needs' },
  { icon: CheckCircle, title: 'Reliable Machinery', description: 'Premium quality equipment sourced from trusted manufacturers' },
  { icon: Handshake, title: 'Strong Relationships', description: 'Long-standing partnerships built over decades of service' },
  { icon: Headphones, title: 'After-Sales Support', description: 'Comprehensive maintenance and genuine spare parts availability' },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="why-choose" className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/50 via-white to-white pointer-events-none" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#E86A17]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-xs md:text-sm uppercase tracking-wider font-semibold mb-3 border border-[#E86A17]/20 shadow-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Your <span className="text-[#E86A17]">Trusted Partner</span> in Construction
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Built on decades of trust, reliability, and commitment to excellence across India.
          </p>
        </motion.div>

        {/* Content Layout - items-stretch to keep image & cards in exact equal proportion */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-12">
          {/* Image side - expands to match exact height of the cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative w-full h-full min-h-[380px] lg:min-h-0 flex flex-col"
          >
            <div className="relative w-full h-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex-1">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction site operations"
                className="absolute inset-0 w-full h-full object-cover select-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
                }}
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating badge bottom left */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-100 select-none">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#E86A17] leading-none mb-1">48+</div>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold">Years in Business</div>
              </div>

              {/* Top right badge */}
              <div className="absolute top-5 right-5 bg-[#E86A17] rounded-xl px-4 py-2.5 text-white text-center shadow-lg select-none">
                <div className="text-xl font-bold leading-none mb-0.5">1000+</div>
                <div className="text-[11px] font-medium opacity-90">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Features grid - 3 rows of 2 cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-[#FAFAFA] rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col justify-start select-text"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#E86A17] flex items-center justify-center mb-3 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden border border-slate-200/90 shadow-sm max-w-4xl mx-auto"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ready to Experience the Ambish Difference?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Join hundreds of satisfied contractors across India who rely on us for rugged machinery, honest advice, and lifelong support.
            </p>
            <div className="pt-2">
              <button
                onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 bg-[#E86A17] hover:bg-[#d25c10] text-white rounded-xl font-bold text-sm transition-colors shadow-md shadow-[#E86A17]/25"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
