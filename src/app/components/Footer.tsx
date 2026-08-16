"use client";

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Globe, QrCode } from 'lucide-react';
import AmbishLogo from './AmbishLogo';
import { SITE, getWhatsAppUrl } from '../../lib/site';
import type { CategoryKey } from './ProductsSection';

const socialLinks = [
  // { icon: Facebook, label: 'Facebook', href: SITE.social.facebook },
  // { icon: Instagram, label: 'Instagram', href: SITE.social.instagram },
  { icon: Globe, label: 'Digital Business Card', href: SITE.social.bytecard },
  { icon: QrCode, label: 'Save Contact (QR / NFC)', href: SITE.social.qrCard },
];

const quickLinks = [
  { label: 'Home', targetId: 'home' },
  { label: 'About Us', targetId: 'legacy' },
  { label: 'Products', targetId: 'products' },
  { label: 'Why Choose Us', targetId: 'why-choose' },
  { label: 'Clients', targetId: 'clients' },
  { label: 'Contact', targetId: 'contact' },
];

const machineryLinks: { label: string; category: CategoryKey }[] = [
  { label: 'Concrete Mixers', category: 'mixers' },
  { label: 'Material Lifts', category: 'lifting' },
  { label: 'Tower Hoists', category: 'lifting' },
  { label: 'Road Rollers', category: 'compaction' },
  { label: 'Bar Cutting Machines', category: 'rebar' },
  { label: 'Needle Vibrators', category: 'tools' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleMachineryClick = (e: React.MouseEvent, category: CategoryKey) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', '#products');
    }
    // Dispatch custom event to select the corresponding category tab in ProductsSection
    window.dispatchEvent(new CustomEvent('filter-machinery', { detail: category }));
  };

  return (
    <footer className="bg-[#FAF9F6] text-gray-900 border-t border-slate-200">
      {/* Top orange accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#E86A17] via-[#FDB813] to-[#E86A17]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <AmbishLogo width={172} variant="light" />
            </div>
            <p className="text-gray-600 mb-5 text-xs sm:text-sm leading-relaxed">
              Your trusted partner in construction machinery for nearly 50 years.
              Building India, one machine at a time.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.label}
                    className="w-9 h-9 rounded-full bg-white hover:bg-[#E86A17] hover:text-white text-slate-700 flex items-center justify-center transition-all shadow-sm border border-slate-200/80"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links with Smooth In-Page Navigation */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-[#E86A17] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2.5 text-gray-600 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => handleSmoothScroll(e, item.targetId)}
                    className="hover:text-[#E86A17] transition-colors cursor-pointer block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Machinery Links with Smooth Redirection & Automatic Category Filter */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-[#E86A17] uppercase tracking-wider">Machinery</h3>
            <ul className="space-y-2.5 text-gray-600 text-xs sm:text-sm">
              {machineryLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href="#products"
                    onClick={(e) => handleMachineryClick(e, item.category)}
                    className="hover:text-[#E86A17] transition-colors cursor-pointer block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-[#E86A17] uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3.5 text-gray-600 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E86A17] flex-shrink-0 mt-0.5" />
                <div className="leading-snug">
                  Shop no 01, Nice complex, near Nice bakery,<br />
                  opp safar hotel, Shantipura chokdi,<br />
                  Ahmedabad – 382210, Gujarat
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E86A17] flex-shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-[#E86A17] font-semibold transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E86A17] flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-[#E86A17] transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
              <li className="pt-1">
                <button
                  onClick={() =>
                    window.open(
                      getWhatsAppUrl('Hello Gaurang, I want to inquire about Ambish Engineering machinery products.'),
                      '_blank'
                    )
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold shadow-md transition-all hover:scale-105"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Ambish Engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-800 transition-colors">Building Trust Since 1976</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
