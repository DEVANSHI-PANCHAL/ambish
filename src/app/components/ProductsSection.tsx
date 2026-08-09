"use client";

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Combine, MoveVertical, Radio, Cylinder, Scissors, RotateCw, Factory, Wrench } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/site';

const products = [
  {
    name: 'Concrete Mixers',
    description: 'High-capacity mixers for efficient concrete production on any site',
    icon: Combine,
    image: '/products/construction-machinery-1.jpeg',
  },
  {
    name: 'Material Lifts',
    description: 'Robust lifting solutions for transporting materials vertically',
    icon: MoveVertical,
    image: '/products/construction-machinery-6.jpeg',
  },
  {
    name: 'Tower Hoists',
    description: 'Reliable vertical transportation — our flagship product since 1985',
    icon: Radio,
    image: '/products/construction-machinery-4.jpeg',
  },
  {
    name: 'Road Rollers',
    description: 'Heavy-duty compaction equipment for road construction',
    icon: Cylinder,
    image: '/products/construction-machinery-2.jpeg',
  },
  {
    name: 'Bar Cutting Machines',
    description: 'Precision cutting for steel reinforcement bars at any gauge',
    icon: Scissors,
    image: '/products/construction-machinery-5.jpeg',
  },
  {
    name: 'Bar Bending Machines',
    description: 'Automated bending solutions for rebar to any angle',
    icon: RotateCw,
    image: '/products/construction-machinery-6.jpeg',
  },
  {
    name: 'Batching Plants',
    description: 'Complete concrete batching systems for large-scale projects',
    icon: Factory,
    image: '/products/construction-machinery-3.jpeg',
  },
  {
    name: 'Spare Parts',
    description: 'Genuine OEM parts for all machinery types, delivered fast',
    icon: Wrench,
    image: '/products/construction-machinery-2.jpeg',
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-[#F7F4F0] relative overflow-hidden">
      {/* Subtle diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #1A1A1A 0, #1A1A1A 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-sm uppercase tracking-wider font-medium mb-4">
            Our Products
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium <span className="text-[#E86A17]">Construction Machinery</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Complete range of construction equipment for all your project needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => window.open(getWhatsAppUrl(`Hello! I am interested in inquiring about ${product.name}.`), '_blank')}
                  className="group bg-white rounded-2xl p-7 border border-gray-200 hover:border-[#E86A17] hover:shadow-xl transition-all duration-300 h-full cursor-pointer relative overflow-hidden"
                >
                  {/* Orange corner accent on hover */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[48px] border-r-[48px] border-t-transparent border-r-[#E86A17] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative mb-5 overflow-hidden rounded-[2rem] h-56 bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E86A17] to-[#FF8C38] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md shadow-[#E86A17]/20">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#E86A17] transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1 text-[#E86A17] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Enquire Now</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-6">Need a custom solution or bulk pricing for your project?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#E86A17] hover:bg-[#d05c0f] text-white rounded-full shadow-lg shadow-[#E86A17]/30 transition-all font-medium"
          >
            Request Product Catalog
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
