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
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F4F0] via-white to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-sm uppercase tracking-wider font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your <span className="text-[#E86A17]">Trusted Partner</span> in Construction
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Built on decades of trust, reliability, and commitment to excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction site with tower cranes"
                className="w-full h-[480px] object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';
                }}
              />
              {/* Orange gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 via-transparent to-transparent" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-4xl font-bold text-[#E86A17] mb-1">48+</div>
                <div className="text-sm text-gray-600 font-medium">Years in Business</div>
              </motion.div>

              {/* Top right badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="absolute top-6 right-6 bg-[#E86A17] rounded-xl p-4 text-white text-center shadow-lg"
              >
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-xs">Projects</div>
              </motion.div>
            </div>

            {/* Decorative orange orb */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-[#E86A17]/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#E86A17] hover:shadow-lg transition-all cursor-pointer h-full"
                  >
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#E86A17] to-[#FF8C38] flex items-center justify-center mb-4 shadow-sm">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA banner — light with orange accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[#F7F4F0] rounded-2xl p-12 text-gray-900 relative overflow-hidden border border-gray-200"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E86A17]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#E86A17]/10 rounded-full blur-3xl" />
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Ambish Difference?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of satisfied contractors who trust us for their construction machinery needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-[#E86A17] hover:bg-[#d05c0f] text-white rounded-full transition-colors font-medium shadow-lg shadow-[#E86A17]/30"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
