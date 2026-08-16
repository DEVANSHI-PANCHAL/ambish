"use client";

import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState, useMemo, useEffect } from 'react';
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

export type CategoryKey = 'all' | 'mixers' | 'lifting' | 'rebar' | 'compaction' | 'tools';

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
    id: 'full-bag-hopper-mixer',
    name: 'Full Bag Mechanical Hopper Concrete Mixer',
    category: 'mixers',
    image: '/products/full bag mechanical hopper mixer machine.jpeg',
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
    name: 'Baby Concrete Mixer Machine',
    category: 'mixers',
    image: '/products/baby mixer machine.jpeg',
  },
  {
    id: 'weigh-batcher',
    name: 'Concrete Weigh Batcher',
    category: 'mixers',
    image: '/products/concrete weigh batcher.jpeg',
  },

  // --- LIFTING & HOISTS ---
  {
    id: 'material-lift-hoist',
    name: 'Material Lift Hoist Machine',
    category: 'lifting',
    image: '/products/material lift hoist machine.jpeg',
  },
  {
    id: 'material-lift-extension',
    name: 'Material Lift with Extension Tower',
    category: 'lifting',
    image: '/products/material lift extension.jpeg',
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
    name: 'Concrete Bucket',
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
    name: 'Bar Cutting Machine',
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
    name: 'Baby Road Roller',
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
    id: 'diesel-plate-compactor',
    name: 'Vibratory Earth Plate Compactor with Diesel Engine',
    category: 'compaction',
    image: '/products/vibratory earth plate compactor with diesel engine.jpeg',
  },
  {
    id: 'power-trowel-machine',
    name: 'Power Trowel Machine',
    category: 'compaction',
    image: '/products/power trowel machine.jpeg',
  },
  {
    id: 'walk-behind-power-trowel',
    name: 'Jamshedji Type Power Trowel Floater Machine',
    category: 'compaction',
    image: '/products/jamshedjitype power trowel machine.jpeg',
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

];

function ProductCardItem({ product }: { product: ProductItem }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col justify-start select-text"
    >
      {/* Studio Product Canvas (with Smooth Shimmer Loading State) */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/70 p-3 sm:p-4 mb-2.5 transition-all group-hover:border-[#E86A17]/40 group-hover:bg-orange-50/20">
        {/* Dynamic Skeleton Loader until Image Renders */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 z-10 p-4">
            <div className="w-7 h-7 rounded-full border-2 border-slate-200 border-t-[#E86A17] animate-spin mb-2" />
            <div className="w-20 h-2 bg-slate-200/80 rounded-full animate-pulse" />
          </div>
        )}

        <Image
          src={product.image}
          alt={`${product.name} - Ambish Engineering Heavy Construction Machinery`}
          fill
          loading="lazy"
          decoding="async"
          quality={82}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          onLoad={() => setIsLoaded(true)}
          className={`object-contain p-2 group-hover:scale-105 transition-all duration-500 select-none ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
      </div>

      {/* Clean Machinery Title */}
      <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-[#E86A17] transition-colors line-clamp-2">
        {product.name}
      </h3>
    </motion.div>
  );
}

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Listen to in-page category filter events (e.g. from Footer machinery links)
  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<CategoryKey>;
      if (customEvent.detail) {
        setActiveCategory(customEvent.detail);
        setSearchQuery('');
      }
    };
    window.addEventListener('filter-machinery', handleFilterEvent);
    return () => window.removeEventListener('filter-machinery', handleFilterEvent);
  }, []);

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
    <section ref={ref} id="products" className="py-14 md:py-18 bg-white relative overflow-hidden border-t border-slate-200/60">
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
              <Layers className="w-3.5 h-3.5" />
              <span>Industrial Machinery Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Construction <span className="text-[#E86A17]">Equipment Range</span>
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Engineered for high-volume batching, lifting, rebar processing, and road compaction across Indian job sites.
          </p>
        </motion.div>

        {/* Search & Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 space-y-4"
        >
          {/* Category Filter Pills & Search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.key;
                const count = categoryCounts[cat.key] || 0;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${isActive
                      ? 'bg-[#E86A17] text-white shadow-md shadow-[#E86A17]/20'
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                      }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#E86A17]'}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-white/25 text-white' : 'bg-slate-200/80 text-slate-700'
                        }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Compact Search Bar */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter machinery..."
                className="w-full pl-9 pr-8 py-2 bg-slate-100/80 border-0 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E86A17]/30 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Modern Studio Machinery Catalog Grid (Borderless, High Density, Zero White Clutter) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 max-w-md mx-auto p-6">
            <Search className="w-8 h-8 mx-auto text-slate-400 mb-2" />
            <h3 className="text-sm font-bold text-slate-800 mb-1">No equipment found</h3>
            <p className="text-xs text-slate-500 mb-3">No matching machinery for &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-3 py-1.5 bg-[#E86A17] text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <ProductCardItem key={product.id} product={product} />
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
              Custom Machinery & Supply
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Need a Custom Specification or Immediate Quote?
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Connect directly with us for pricing, technical guidance, and delivery schedules.
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
