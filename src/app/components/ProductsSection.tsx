"use client";

import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import {
  Combine,
  MoveVertical,
  Radio,
  Cylinder,
  Scissors,
  RotateCw,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MessageCircle,
  Phone,
  CheckCircle2,
  Building,
  Truck,
  Activity,
  Layers,
} from 'lucide-react';
import { getWhatsAppUrl, SITE } from '../../lib/site';

type CategoryKey = 'all' | 'mixers' | 'lifting' | 'rebar' | 'compaction' | 'tools';

interface CategoryFilter {
  key: CategoryKey;
  label: string;
}

const CATEGORIES: CategoryFilter[] = [
  { key: 'all', label: 'All Products' },
  { key: 'mixers', label: 'Concrete Mixers' },
  { key: 'lifting', label: 'Lifting & Hoists' },
  { key: 'rebar', label: 'Bar Cutting & Bending' },
  { key: 'compaction', label: 'Rollers & Compactors' },
  { key: 'tools', label: 'Vibrators & Tools' },
];

interface ProductItem {
  id: string;
  name: string;
  category: CategoryKey;
  description: string;
  specs: string[];
  images: string[];
  icon: typeof Combine;
  fullSpecs?: Record<string, string>;
}

const PRODUCTS: ProductItem[] = [
  // --- CONCRETE MIXERS ---
  {
    id: 'hydraulic-mixer',
    name: 'Hydraulic Concrete Mixer',
    category: 'mixers',
    description: 'High-capacity concrete mixer equipped with hydraulic loading hopper system for fast batch mixing.',
    specs: ['10/7 Cu.Ft Capacity', 'Hydraulic Loading', 'Diesel / Electric Motor'],
    images: ['/products/Hydrulic mixer machine.jpeg'],
    icon: Combine,
    fullSpecs: {
      'Capacity': '10/7 Cu.Ft Output',
      'Loading System': 'Hydraulic Powered Hopper',
      'Power Source': 'Diesel Engine / Electric Motor',
    },
  },
  {
    id: 'hydraulic-mixer-digital-weighing',
    name: 'Hydraulic Concrete Mixer with digital weighing arrangement',
    category: 'mixers',
    description: 'Hydraulic concrete mixer equipped with digital load-cell weighing arrangement for precision mix proportioning.',
    specs: ['10/7 Cu.Ft Capacity', 'Hydraulic Loading', 'Digital Load Cell Weighing Panel', 'Diesel / Electric Motor'],
    images: ['/products/digital weighing hydrulic mixer machine.jpeg'],
    icon: Combine,
    fullSpecs: {
      'Capacity': '10/7 Cu.Ft Output',
      'Loading System': 'Hydraulic Powered Hopper',
      'Weighing System': 'Digital Load Cell Weighing Panel',
      'Power Source': 'Diesel Engine / Electric Motor',
    },
  },
  {
    id: 'one-bag-hopper-mixer',
    name: 'One Bag Concrete Mixer with Mechanical Hopper',
    category: 'mixers',
    description: 'One bag 10/7 Cu.Ft capacity concrete mixer machine equipped with mechanical clutch-type hopper loading system.',
    specs: ['10/7 Cu.Ft Output', 'Mechanical Clutch Hopper', 'Cast Iron Drum', 'Diesel / Electric Motor'],
    images: [
      '/products/one bag with hopper mixer.jpeg',
      '/products/mechanical hopper mixer machine.jpeg',
    ],
    icon: Layers,
    fullSpecs: {
      'Batch Capacity': '1 Bag (10/7 Cu.Ft Output)',
      'Hopper Type': 'Mechanical Clutch-Driven Hopper',
      'Drive System': 'Greaves / Kirloskar Diesel Engine or Electric Motor',
      'Mixing Drum': 'Cast Iron & Steel Sheet Construction',
    },
  },
  {
    id: 'without-hopper-mixer',
    name: 'Concrete Mixer Machine Without Hopper',
    category: 'mixers',
    description: 'Direct tilting drum concrete mixer machine designed for manual feeding and fast batch mixing on construction sites.',
    specs: ['10/7 Cu.Ft Output', 'Direct Tilting Drum', 'Cast Iron Gear', 'Diesel / Electric Drive'],
    images: [
      '/products/without hopper mixer machine.jpeg',
      '/products/mixer machine.jpeg',
      '/products/mixer mc.jpeg',
    ],
    icon: Combine,
    fullSpecs: {
      'Batch Capacity': '10/7 Cu.Ft Output',
      'Feeding Method': 'Manual Chute Feeding',
      'Drum Operation': 'Hand Wheel Gear Tilting System',
      'Power Source': 'Diesel Engine / Electric Motor',
    },
  },
  {
    id: 'stand-type-mixer',
    name: 'Stand Type Concrete Mixer Machine',
    category: 'mixers',
    description: 'Elevated stand-mounted concrete mixer machine designed for direct discharge into wheelbarrows and mortar pans.',
    specs: ['Elevated Stand Frame', 'Easy Mortar Discharge', 'Diesel / Electric Drive', 'Pneumatic Tyres'],
    images: ['/products/stand type mixer machine.jpeg'],
    icon: Layers,
    fullSpecs: {
      'Mounting': 'Heavy Steel Elevated Stand Chassis',
      'Discharge Clearance': 'High Clearance for Wheelbarrows & Pans',
      'Power Source': 'Diesel Engine / Electric Motor',
    },
  },
  {
    id: 'half-bag-mixer',
    name: 'Half Bag Concrete Mixer Machine',
    category: 'mixers',
    description: 'Half-bag 7/5 Cu.Ft capacity concrete mixer machine engineered for medium site construction and masonry works.',
    specs: ['7/5 Cu.Ft Output', 'Half Bag Batching', 'Compact Footprint', 'Diesel / Electric Drive'],
    images: ['/products/half bag mixer machine.jpeg'],
    icon: Combine,
    fullSpecs: {
      'Batch Capacity': 'Half Bag (7/5 Cu.Ft Output)',
      'Drum Material': 'Cast Iron & MS Sheet',
      'Power Source': 'Diesel Engine / Electric Motor',
    },
  },
  {
    id: 'baby-mixer',
    name: 'Baby & Portable Concrete Mixer Machine',
    category: 'mixers',
    description: 'Compact and easy-to-move mini concrete mixer ideal for residential building, plastering, and maintenance site works.',
    specs: ['Compact & Portable', 'Easy Site Mobility', 'Electric Motor Driven', 'Low Maintenance'],
    images: [
      '/products/baby mixer machine.jpeg',
      '/products/baby small mixer.jpeg',
    ],
    icon: Combine,
    fullSpecs: {
      'Drum Capacity': '2.5 to 3.5 Cu.Ft',
      'Power': 'Electric Motor Driven',
      'Portability': 'Mounted on Solid Rubber Wheels with Towing Handle',
    },
  },

  // --- LIFTING & HOISTS ---
  {
    id: 'material-lift-tower',
    name: 'Material Lift & Tower Hoist',
    category: 'lifting',
    description: 'Vertical material transport tower hoist engineered for high-rise building construction projects.',
    specs: ['Capacity: 500-1500 kg', 'Height: Up to 150 ft', 'Winch Machine Drive', 'Fail-Safe Brakes'],
    images: [
      '/products/material lift.jpeg',
      '/products/matrial lift hoist.jpeg',
      '/products/tower type materil lift.jpeg',
      '/products/material lift extension.jpeg',
    ],
    icon: MoveVertical,
    fullSpecs: {
      'Lifting Capacity': '500 kg to 1500 kg',
      'Operating Height': '50 ft to 150 ft (Extendable Mast Sections)',
      'Winch Unit': 'Reduction Gearbox Winch with Reversing Switch',
    },
  },
  {
    id: 'lift-with-mixer',
    name: 'Lift with Mixer Machine',
    category: 'lifting',
    description: 'Combined concrete mixer and vertical material hoist unit allowing mixing and instant hoisting in a single setup.',
    specs: ['Integrated Dual Machine', 'Single Power Unit', 'Saves Labor & Time', 'Up to 100 ft Elevation'],
    images: [
      '/products/lift with mixer machine.jpeg',
      '/products/lift with mixer mc.jpeg',
    ],
    icon: Building,
    fullSpecs: {
      'Mixer Capacity': '10/7 Cu.Ft Concrete Mixer',
      'Hoisting Height': 'Up to 100 Feet',
      'Lifting Bucket': '350 Liters Tilting Concrete Bucket',
    },
  },
  {
    id: 'monkey-crane',
    name: 'Monkey Crane (Rooftop Mini Crane)',
    category: 'lifting',
    description: 'Compact rooftop mini crane designed for fast vertical lifting of cement bags, bricks, and mortar on site floors.',
    specs: ['Rooftop Mounted', '360° Swivel Rotation', 'Speed: 20 m/min', 'Easy Site Setup'],
    images: ['/products/monkey crain.jpeg'],
    icon: Radio,
    fullSpecs: {
      'Lifting Capacity': '150 kg to 300 kg',
      'Rotation': '360 Degree Continuous Swivel Arm',
      'Motor': 'Electric Motor Driven',
    },
  },
  {
    id: 'cow-mouth-bucket',
    name: 'Cow Mouth Concrete Bucket',
    category: 'lifting',
    description: 'Cow-mouth shaped concrete pouring bucket designed for crane hoisting and controlled chute discharge.',
    specs: ['Cow Mouth Discharge Chute', 'Top Crane Lifting Lug', '350 - 750 Ltr Capacity'],
    images: [
      '/products/cow mouth concrete bucket.jpeg',
      '/products/different type bucket.jpeg',
    ],
    icon: Truck,
    fullSpecs: {
      'Bucket Type': 'Cow Mouth Side Discharge Bucket',
      'Capacity': '350 Liters to 750 Liters',
      'Discharge Gate': 'Manual Lever Operated Chute',
    },
  },
  {
    id: 'shoe-type-bucket',
    name: 'Shoe Type Concrete Bucket',
    category: 'lifting',
    description: 'Shoe-type concrete bucket engineered for precise pouring into column shutters and narrow formwork.',
    specs: ['Shoe Type Discharge', 'Steel Body', 'Easy Manual Control'],
    images: ['/products/shoe type bucket.jpeg'],
    icon: Truck,
    fullSpecs: {
      'Bucket Type': 'Shoe Type Formwork Pouring Bucket',
      'Capacity': '350 Liters to 500 Liters',
    },
  },
  {
    id: 'center-discharge-bucket',
    name: 'Center & Bottom Discharge Concrete Bucket',
    category: 'lifting',
    description: 'Bottom discharge concrete bucket for vertical slab pouring and direct crane bucket placement.',
    specs: ['Bottom Discharge Gate', 'Heavy Gauge Steel', 'Lever Operated'],
    images: [
      '/products/concrete bucket.jpeg',
      '/products/concrete bucket1.jpeg',
    ],
    icon: Truck,
    fullSpecs: {
      'Bucket Type': 'Center Bottom Discharge Gate Bucket',
      'Capacity': '350 Liters / 500 Liters / 750 Liters',
    },
  },
  {
    id: 'material-lift-trolley',
    name: 'Material Lift Trolley',
    category: 'lifting',
    description: 'Guided material lift trolley for safe vertical transport of bricks, mortar pans, and site materials.',
    specs: ['Guiding Wheel Rollers', 'Steel Sheet Bed', 'Fits Standard Lift Masts'],
    images: ['/products/materil lift trolly.jpeg'],
    icon: Truck,
    fullSpecs: {
      'Platform': 'Heavy Duty M.S. Frame with Safety Railings',
      'Application': 'Tower Hoist & Material Lift Carriage',
    },
  },

  // --- REBAR PROCESSING ---
  {
    id: 'bar-cutting-machine',
    name: 'Bar Cutting Machine',
    category: 'rebar',
    description: 'Precision steel reinforcement rebar shearing cutter with oil-bath gearbox and alloy steel blades.',
    specs: ['Bar Dia up to 42mm', 'High Tensile Alloy Blades', 'Oil Bath Gearbox', 'Foot Pedal Control'],
    images: ['/products/bar cutting machine.jpeg'],
    icon: Scissors,
    fullSpecs: {
      'Cutting Capacity': 'Round Bar up to 42mm / TMT Rebar up to 36mm',
      'Blade Quality': 'Heat Treated Hardened Alloy Steel Blades',
      'Drive Unit': 'Electric Motor with Oil Bath Gear Box',
    },
  },
  {
    id: 'bar-bending-machine',
    name: 'Bar Bending Machine',
    category: 'rebar',
    description: 'Automatic rebar bending machine for multi-angle stirrup and steel reinforcement bar fabrication.',
    specs: ['Bending Dia 6-40mm', 'Multi-Angle Pin Bending', 'Foot Pedal Operation'],
    images: ['/products/bar bnding machine.jpeg'],
    icon: Scissors,
    fullSpecs: {
      'Bending Diameter': 'Rebar 6mm to 40mm',
      'Control': 'Automatic & Manual Angle Setting Switches',
      'Drive Unit': 'Electric Motor Drive',
    },
  },

  // --- COMPACTION & ROAD EQUIPMENT ---
  {
    id: 'baby-road-roller',
    name: 'Baby Road Roller',
    category: 'compaction',
    description: 'Walk-behind mini vibratory road roller for soil compaction, asphalt repair, and trench rolling.',
    specs: ['Walk-Behind Dual Drum', 'Vibratory Action', 'Water Sprinkler Tank', 'Diesel Engine'],
    images: ['/products/baby road roller.jpeg'],
    icon: Cylinder,
    fullSpecs: {
      'Type': '1-Ton Walk-Behind Vibratory Roller',
      'Compaction': 'Hydrostatic Vibratory Drive',
      'Engine': 'Greaves Diesel Engine',
    },
  },
  {
    id: 'plate-compactor',
    name: 'Vibratory Plate Compactor',
    category: 'compaction',
    description: 'Impact plate compactor for soil base compaction, interlocking paving blocks, and site foundation prep.',
    specs: ['5-Ton Impact Force', 'Heavy Steel Base Plate', 'Petrol / Diesel Driven'],
    images: ['/products/plate compactor.jpeg'],
    icon: Cylinder,
    fullSpecs: {
      'Impact Capacity': '5-Ton Impact Force Vibratory Compactor',
      'Plate Size': 'Heavy Duty Steel Base Plate',
      'Engine': 'Honda / Greaves Engine Driven',
    },
  },
  {
    id: 'surface-compactor',
    name: 'Surface Concrete Screed Compactor',
    category: 'compaction',
    description: 'Surface vibratory screed compactor for concrete floor leveling and slab compaction.',
    specs: ['Surface Screed Bar', 'Vibratory Motor', 'Floor Leveling'],
    images: ['/products/surface compactor.jpeg'],
    icon: Cylinder,
    fullSpecs: {
      'Type': 'Vibratory Concrete Floor Screed Board',
      'Drive': 'Electric Motor / Petrol Engine Drive',
    },
  },
  {
    id: 'groove-cutter',
    name: 'Concrete Groove Cutter Machine',
    category: 'compaction',
    description: 'Diamond blade concrete slab joint groove cutter for road contraction joints and floor cutting.',
    specs: ['Diamond Blade Mount', 'Water Cooling Tank', 'Depth Adjustment'],
    images: ['/products/grove cutter.jpeg'],
    icon: Cylinder,
    fullSpecs: {
      'Blade Size': '14" to 18" Diamond Cutting Blade',
      'Cutting Depth': 'Up to 5 inches',
      'Engine': 'Petrol / Diesel Engine Driven',
    },
  },

  // --- SITE TOOLS & VIBRATORS ---
  {
    id: 'needle-vibrators',
    name: 'Concrete Needle Vibrator',
    category: 'tools',
    description: 'Internal concrete vibrator available in electric motor drive and petrol/diesel engine drive with flexible shaft needles.',
    specs: ['Electric / Engine Drive', 'Needle Dia: 25 - 60mm', 'Flexible Shaft Hose'],
    images: [
      '/products/needle vibrator.jpeg',
      '/products/vibrator needle.jpeg',
      '/products/motor type needle vibrator.jpeg',
      '/products/engine needle vibrator.jpeg',
    ],
    icon: Activity,
    fullSpecs: {
      'Needle Sizes': '25mm, 40mm, 60mm Flexible Shaft Needles',
      'Power Source': 'Electric Motor or Petrol/Diesel Engine',
    },
  },
  {
    id: 'hollow-block-machine',
    name: 'Hollow Block Making Machine',
    category: 'tools',
    description: 'Manual and vibratory concrete block making machine for hollow blocks, solid bricks, and paving blocks.',
    specs: ['Multi-Cavity Mold', 'Vibratory Press', 'Heavy Steel Frame'],
    images: ['/products/hollow block machine.jpeg'],
    icon: Activity,
    fullSpecs: {
      'Productivity': 'Hollow Blocks & Solid Concrete Bricks',
      'Operation': 'Manual Lever Press with Vibrator Motor',
    },
  },
  {
    id: 'sand-strainer',
    name: 'Rotary Sand Strainer Machine',
    category: 'tools',
    description: 'Motorized rotary mesh sand sieving machine for fast plaster sand cleaning and aggregate screening.',
    specs: ['Rotary Sieving Drum', 'Electric Motor Drive', 'High Output Mesh'],
    images: ['/products/sand striner.jpeg'],
    icon: Activity,
    fullSpecs: {
      'Drum Mesh': 'Interchangeable Fine & Coarse Wire Mesh',
      'Drive': 'Single Phase / 3-Phase Electric Motor',
    },
  },
  {
    id: 'wheelbarrows',
    name: 'Single & Double Wheelbarrows',
    category: 'tools',
    description: 'Heavy M.S. sheet construction wheelbarrows with solid rubber / pneumatic wheels for site material handling.',
    specs: ['Single & Double Wheel', 'MS Sheet Body', 'Heavy Duty Frame'],
    images: [
      '/products/wheel barrows.jpeg',
      '/products/double wheel barrow.jpeg',
    ],
    icon: Activity,
    fullSpecs: {
      'Tray Volume': '3 to 5 Cu.Ft Capacity',
      'Wheel Type': 'Solid Rubber or Pneumatic Tyres',
    },
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({});
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const filteredProducts = PRODUCTS.filter(
    (product) => activeCategory === 'all' || product.category === activeCategory
  );

  const handleNextImage = (e: React.MouseEvent, productId: string, totalImages: number) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages,
    }));
  };

  const handlePrevImage = (e: React.MouseEvent, productId: string, totalImages: number) => {
    e.stopPropagation();
    setActiveImageIndices((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const openModal = (product: ProductItem) => {
    setSelectedProduct(product);
    setModalImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="products" ref={ref} className="py-24 bg-[#F7F4F0] relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #1A1A1A 0, #1A1A1A 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-sm uppercase tracking-wider font-semibold mb-4">
            Our Machinery Catalog
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#E86A17]">Construction Machinery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete line of construction equipment. Click any product to view site photos, technical specifications, and instant quotes.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-[#E86A17] text-white shadow-lg shadow-[#E86A17]/25 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-[#E86A17] border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon;
              const currentImgIdx = activeImageIndices[product.id] || 0;
              const totalImgs = product.images.length;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl border border-gray-200 hover:border-[#E86A17] hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden relative"
                >
                  {/* Top image slider */}
                  <div className="relative h-60 w-full bg-slate-950/90 overflow-hidden group/slider">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImgIdx}
                        src={product.images[currentImgIdx]}
                        alt={`${product.name} photo ${currentImgIdx + 1}`}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0.6, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.4 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                    {/* Image Counter Badge */}
                    {totalImgs > 1 && (
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium z-10 border border-white/20">
                        {currentImgIdx + 1} / {totalImgs}
                      </div>
                    )}

                    {/* Image Controls (Visible on hover) */}
                    {totalImgs > 1 && (
                      <>
                        <button
                          onClick={(e) => handlePrevImage(e, product.id, totalImgs)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#E86A17] text-white p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-200 z-20"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => handleNextImage(e, product.id, totalImgs)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#E86A17] text-white p-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-200 z-20"
                          aria-label="Next photo"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}

                    {/* Slide indicator dots */}
                    {totalImgs > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                        {product.images.map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              i === currentImgIdx ? 'w-4 bg-[#E86A17]' : 'w-1.5 bg-white/60'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E86A17] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => openModal(product)}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-xs font-semibold transition-colors"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        View Specs
                      </button>

                      <button
                        onClick={() =>
                          window.open(
                            getWhatsAppUrl(`Hello Gaurang, I would like to get a quote and details for ${product.name}.`),
                            '_blank'
                          )
                        }
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Catalog Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h4 className="text-xl font-bold text-gray-900 mb-1">Looking for Custom Machine Specs or Spares?</h4>
            <p className="text-sm text-gray-500">Contact our engineering team directly for custom capacities and instant quotes.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-[#E86A17] hover:bg-[#d05c0f] text-white text-sm font-semibold rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              Get Custom Quote
            </button>
          </div>
        </motion.div>
      </div>

      {/* Product Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-30 bg-black/60 hover:bg-[#E86A17] text-white p-2 rounded-full backdrop-blur-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image Gallery View */}
              <div className="md:w-1/2 bg-slate-950 flex flex-col justify-between relative min-h-[320px] md:min-h-[480px]">
                <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={modalImageIndex}
                      src={selectedProduct.images[modalImageIndex]}
                      alt={`${selectedProduct.name} image ${modalImageIndex + 1}`}
                      className="w-full h-full object-contain p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {/* Modal Arrows */}
                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={() =>
                          setModalImageIndex(
                            (prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#E86A17] text-white p-2 rounded-full backdrop-blur-md transition-colors z-20"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() =>
                          setModalImageIndex((prev) => (prev + 1) % selectedProduct.images.length)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#E86A17] text-white p-2 rounded-full backdrop-blur-md transition-colors z-20"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnails strip */}
                {selectedProduct.images.length > 1 && (
                  <div className="p-3 bg-slate-900/90 flex justify-center gap-2 overflow-x-auto border-t border-white/10">
                    {selectedProduct.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalImageIndex(idx)}
                        className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                          idx === modalImageIndex ? 'border-[#E86A17] scale-105' : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <Image src={img} alt="thumb" fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Specs & Actions */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-[85vh]">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-xs uppercase tracking-wider font-semibold mb-3">
                    Technical Details
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{selectedProduct.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{selectedProduct.description}</p>

                  {/* Specifications Table */}
                  {selectedProduct.fullSpecs && (
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Technical Specifications</h4>
                      <div className="bg-[#F7F4F0] rounded-xl p-4 border border-gray-200 divide-y divide-gray-200/60">
                        {Object.entries(selectedProduct.fullSpecs).map(([key, value]) => (
                          <div key={key} className="py-2 flex justify-between text-xs sm:text-sm">
                            <span className="font-semibold text-gray-700">{key}:</span>
                            <span className="text-gray-900 font-medium text-right ml-2">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quality points */}
                  <div className="space-y-2 mb-6 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E86A17]" />
                      <span>Genuine Quality Components & Reliable Performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#E86A17]" />
                      <span>48+ Years Manufacturing Trust & Nationwide Supply</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() =>
                      window.open(
                        getWhatsAppUrl(
                          `Hello Gaurang, I am interested in inquiring about ${selectedProduct.name}. Please share pricing and details.`
                        ),
                        '_blank'
                      )
                    }
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire on WhatsApp
                  </button>

                  <button
                    onClick={() => window.open(`tel:${SITE.phone}`, '_self')}
                    className="flex items-center justify-center gap-2 py-3 px-5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Sales
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
