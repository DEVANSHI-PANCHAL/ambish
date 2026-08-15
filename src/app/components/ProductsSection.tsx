"use client";

import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState, useMemo } from 'react';
import {
  Search,
  X,
  MessageCircle,
  Phone,
  Layers,
  Combine,
  MoveVertical,
  Scissors,
  Cylinder,
  Activity,
} from 'lucide-react';
import { getWhatsAppUrl, SITE } from '../../lib/site';

type CategoryKey = 'all' | 'mixers' | 'lifting' | 'rebar' | 'compaction' | 'tools';

interface CategoryFilter {
  key: CategoryKey;
  label: string;
  icon: typeof Combine;
}

const CATEGORIES: CategoryFilter[] = [
  { key: 'all', label: 'All Equipment', icon: Layers },
  { key: 'mixers', label: 'Concrete Mixers', icon: Combine },
  { key: 'lifting', label: 'Lifting & Hoists', icon: MoveVertical },
  { key: 'rebar', label: 'Rebar Machinery', icon: Scissors },
  { key: 'compaction', label: 'Rollers & Compactors', icon: Cylinder },
  { key: 'tools', label: 'Vibrators & Tools', icon: Activity },
];

export interface ProductItem {
  id: string;
  name: string;
  category: CategoryKey;
  image: string;
}

export const PRODUCTS: ProductItem[] = [
  // --- CONCRETE MIXERS ---
  {
    id: 'hydraulic-mixer',
    name: 'Hydraulic Concrete Mixer Machine',
    category: 'mixers',
    image: '/products/Hydrulic mixer machine.jpeg',
  },
  {
    id: 'hydraulic-mixer-weighing',
    name: 'Hydraulic Concrete Mixer with Digital Weighing System',
    category: 'mixers',
    image: '/products/digital weighing hydrulic mixer machine.jpeg',
  },
  {
    id: 'one-bag-mechanical-hopper',
    name: 'One Bag Mechanical Hopper Concrete Mixer',
    category: 'mixers',
    image: '/products/one bag with hopper mixer.jpeg',
  },
  {
    id: 'without-hopper-mixer',
    name: 'Concrete Mixer Machine Without Hopper',
    category: 'mixers',
    image: '/products/without hopper mixer machine.jpeg',
  },
  {
    id: 'stand-type-mixer',
    name: 'Stand Type Concrete Mixer Machine',
    category: 'mixers',
    image: '/products/stand type mixer machine.jpeg',
  },
  {
    id: 'half-bag-mixer',
    name: 'Half Bag Concrete Mixer Machine',
    category: 'mixers',
    image: '/products/half bag mixer machine.jpeg',
  },
  {
    id: 'baby-portable-mixer',
    name: 'Baby & Portable Mini Concrete Mixer',
    category: 'mixers',
    image: '/products/baby mixer machine.jpeg',
  },

  // --- LIFTING & HOISTS ---
  {
    id: 'material-lift-tower',
    name: 'Material Lift & Tower Hoist System',
    category: 'lifting',
    image: '/products/material lift.jpeg',
  },
  {
    id: 'hoist-winch-machine',
    name: 'Heavy Duty Builder Hoist Winch Machine',
    category: 'lifting',
    image: '/products/matrial lift hoist.jpeg',
  },
  {
    id: 'lift-with-mixer',
    name: 'Integrated Lift with Mixer Machine',
    category: 'lifting',
    image: '/products/lift with mixer machine.jpeg',
  },
  {
    id: 'monkey-crane',
    name: 'Monkey Crane (Rooftop Mini Crane)',
    category: 'lifting',
    image: '/products/monkey crain.jpeg',
  },
  {
    id: 'cow-mouth-bucket',
    name: 'Cow Mouth Concrete Pouring Bucket',
    category: 'lifting',
    image: '/products/cow mouth concrete bucket.jpeg',
  },
  {
    id: 'shoe-type-bucket',
    name: 'Shoe Type Formwork Concrete Bucket',
    category: 'lifting',
    image: '/products/shoe type bucket.jpeg',
  },
  {
    id: 'center-discharge-bucket',
    name: 'Center & Bottom Discharge Concrete Bucket',
    category: 'lifting',
    image: '/products/concrete bucket.jpeg',
  },
  {
    id: 'crane-pouring-bucket',
    name: 'Crane Pouring Concrete Bucket',
    category: 'lifting',
    image: '/products/concrete bucket1.jpeg',
  },

  // --- REBAR PROCESSING ---
  {
    id: 'bar-cutting-machine',
    name: 'Heavy Duty Bar Cutting Machine',
    category: 'rebar',
    image: '/products/bar cutting machine.jpeg',
  },
  {
    id: 'bar-bending-machine',
    name: 'Automatic Bar Bending Machine',
    category: 'rebar',
    image: '/products/bar bnding machine.jpeg',
  },

  // --- COMPACTION & ROLLERS ---
  {
    id: 'baby-road-roller',
    name: 'Baby Vibratory Road Roller',
    category: 'compaction',
    image: '/products/baby road roller.jpeg',
  },
  {
    id: 'plate-compactor',
    name: 'Vibratory Earth Plate Compactor',
    category: 'compaction',
    image: '/products/plate compactor.jpeg',
  },
  {
    id: 'surface-compactor',
    name: 'Surface Concrete Screed Compactor',
    category: 'compaction',
    image: '/products/surface compactor.jpeg',
  },
  {
    id: 'groove-cutter',
    name: 'Concrete Road Groove Cutter Machine',
    category: 'compaction',
    image: '/products/grove cutter.jpeg',
  },

  // --- VIBRATORS & SITE TOOLS ---
  {
    id: 'needle-vibrator-unit',
    name: 'Concrete Needle Vibrator with Flexible Shaft',
    category: 'tools',
    image: '/products/needle vibrator.jpeg',
  },
  {
    id: 'motor-needle-vibrator',
    name: 'Electric Motor Needle Vibrator Base',
    category: 'tools',
    image: '/products/motor type needle vibrator.jpeg',
  },
  {
    id: 'engine-needle-vibrator',
    name: 'Petrol Engine Needle Vibrator Base',
    category: 'tools',
    image: '/products/engine needle vibrator.jpeg',
  },
  {
    id: 'hollow-block-machine',
    name: 'Hollow Block Making Machine',
    category: 'tools',
    image: '/products/hollow block machine.jpeg',
  },
  {
    id: 'sand-strainer',
    name: 'Rotary Sand Strainer Sieving Machine',
    category: 'tools',
    image: '/products/sand striner.jpeg',
  },
  {
    id: 'wheelbarrows',
    name: 'Single & Double Wheelbarrows',
    category: 'tools',
    image: '/products/wheel barrows.jpeg',
  },
  {
    id: 'double-wheel-trolley',
    name: 'Double Wheel Concrete Barrow Trolley',
    category: 'tools',
    image: '/products/double wheel barrow.jpeg',
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryKey, number> = {
      all: PRODUCTS.length,
      mixers: 0,
      lifting: 0,
      rebar: 0,
      compaction: 0,
      tools: 0,
    };
    for (const p of PRODUCTS) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section ref={ref} id="products" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#E86A17]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[#E86A17]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-40 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 border border-[#E86A17]/20 shadow-sm">
            <Layers className="w-4 h-4" />
            Product Machinery Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Construction <span className="text-[#E86A17]">Equipment</span> Range
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-performance industrial machinery engineered for heavy construction, building, and infrastructure projects across India.
          </p>
        </motion.div>

        {/* Search & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto mb-10 space-y-4"
        >
          {/* Search Input Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search machinery (e.g., Mixer, Roller, Crane)..."
              className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E86A17]/30 focus:border-[#E86A17] shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              const count = categoryCounts[cat.key] || 0;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm ${
                    isActive
                      ? 'bg-[#E86A17] text-white shadow-md shadow-[#E86A17]/25'
                      : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#E86A17]'}`} />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                      isActive ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 max-w-lg mx-auto p-8 shadow-sm">
            <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-orange-50 text-[#E86A17] flex items-center justify-center">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">No products found</h3>
            <p className="text-sm text-slate-500 mb-4">
              We couldn&apos;t find any equipment matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-4 py-2 bg-[#E86A17] text-white rounded-xl text-xs font-semibold hover:bg-[#d25c10] transition-colors shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between"
                >
                  {/* Card Image Area */}
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#FAFAFA] flex items-center justify-center p-3 mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Product Name Only */}
                  <div className="pt-1">
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base leading-snug text-center">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Quick Quote Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700/50"
        >
          <div className="text-center md:text-left space-y-1">
            <span className="text-[#E86A17] font-semibold text-xs uppercase tracking-wider">
              Custom Machinery & Direct Supply
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Need a Custom Specification or Immediate Quote?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Connect directly with our engineering team for pricing, technical guidance, and nationwide delivery schedules.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={() =>
                window.open(
                  getWhatsAppUrl(
                    'Hello Gaurang, I would like to inquire about your construction machinery products and request a quotation.'
                  ),
                  '_blank'
                )
              }
              className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl text-sm font-bold transition-colors shadow-lg shadow-green-900/40"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </button>
            <button
              onClick={() => window.open(`tel:${SITE.phone}`, '_self')}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#E86A17] hover:bg-[#d25c10] text-white rounded-xl text-sm font-bold transition-colors shadow-lg shadow-orange-900/30"
            >
              <Phone className="w-4 h-4" />
              Call Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
