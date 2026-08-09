"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Calendar, Award, Users, TrendingUp } from 'lucide-react';

const milestones = [
  { year: '1976', title: 'Foundation', description: 'Ambish Engineering established in Ahmedabad by our visionary founder', icon: Calendar },
  { year: '1985', title: 'Growth', description: 'Expanded product line to include tower hoists and material lifts', icon: TrendingUp },
  { year: '1995', title: 'Recognition', description: 'Became trusted supplier for major contractors across Gujarat', icon: Award },
  { year: '2010', title: 'Expansion', description: 'Pan-India distribution network established with 100+ dealer partners', icon: Users },
  { year: '2026', title: 'Today', description: '50 years of excellence, still family-run with the same values', icon: Award },
];

export default function LegacySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle warm background tint */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E86A17]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E86A17]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-sm uppercase tracking-wider font-medium mb-4">
            Our Legacy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nearly <span className="text-[#E86A17]">50 Years</span> of Excellence
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From humble beginnings in 1976 to becoming a trusted name in construction machinery across India
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E86A17] via-[#FDB813] to-[#E86A17] hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    <div className={`${isEven ? 'lg:col-start-1 lg:text-right' : 'lg:col-start-2'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#E86A17]/30 max-w-md w-full mx-auto ${
                          isEven ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'
                        }`}
                      >
                        <div className={`flex items-center gap-3.5 mb-3 ${isEven ? 'lg:justify-end' : ''}`}>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E86A17] to-[#FF8C38] flex items-center justify-center shadow-md flex-shrink-0">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-3xl font-bold text-[#E86A17]">{milestone.year}</div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1.5">{milestone.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{milestone.description}</p>
                      </motion.div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                        className="w-5 h-5 rounded-full bg-white border-4 border-[#E86A17] shadow-lg"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats banner — light with orange accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto bg-[#F7F4F0] rounded-2xl p-8 md:p-10 text-gray-900 relative overflow-hidden border border-gray-200"
        >
          {/* Subtle orange glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#E86A17]/20 blur-3xl rounded-full" />
          <div className="relative z-10 grid md:grid-cols-3 gap-6 text-center">
            {[
              { value: '1976', label: 'Year Established' },
              { value: '3', label: 'Generations of Trust' },
              { value: '48+', label: 'Years of Excellence' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-1 text-[#E86A17]">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
