"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const clients = [
  { name: 'L&T Construction', abbr: 'L&T' },
  { name: 'Shapoorji Pallonji', abbr: 'SP' },
  { name: 'Tata Projects', abbr: 'TP' },
  { name: 'GMR Group', abbr: 'GMR' },
  { name: 'Larsen & Toubro', abbr: 'LT' },
  { name: 'DLF Limited', abbr: 'DLF' },
  { name: 'Adani Realty', abbr: 'AR' },
  { name: 'Sobha Limited', abbr: 'SL' },
];

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-[#F7F4F0] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-sm uppercase tracking-wider font-medium mb-4">
            Our Clients
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-[#E86A17]">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Proud to serve major construction companies and contractors across India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                className="bg-white rounded-xl p-7 shadow-sm hover:shadow-lg transition-all border border-gray-200 hover:border-[#E86A17]/40 flex items-center justify-center h-28 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-gray-800 mb-1">{client.abbr}</div>
                  <div className="text-xs text-gray-400">{client.name}</div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E86A17]/5 rounded-full blur-2xl" />
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl text-[#E86A17] leading-none font-serif">"</div>
              <div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Ambish Engineering has been our go-to partner for construction machinery for over
                  15 years. Their commitment to quality, honest advice, and reliable after-sales
                  support makes them stand out in the industry.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E86A17] to-[#FF8C38] flex items-center justify-center text-white font-bold shadow-md">
                    RP
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Rajesh Patel</div>
                    <div className="text-sm text-gray-400">Project Director, Major Construction Firm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '1000+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-[#E86A17] mb-2">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
