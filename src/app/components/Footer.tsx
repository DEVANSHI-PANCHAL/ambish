"use client";

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import AmbishLogo from './AmbishLogo';
import { SITE, getWhatsAppUrl } from '../../lib/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F4F0] text-gray-900 border-t border-gray-200">
      {/* Top orange accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#E86A17] via-[#FDB813] to-[#E86A17]" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-5">
              <AmbishLogo width={172} variant="light" />
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Your trusted partner in construction machinery for nearly 50 years.
              Building India, one machine at a time.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white hover:bg-[#E86A17] flex items-center justify-center transition-colors shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-[#E86A17] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              {['Home', 'About Us', 'Products', 'Why Choose Us', 'Clients', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-[#E86A17] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-[#E86A17] uppercase tracking-wider">Machinery</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              {[
                'Concrete Mixers',
                'Material Lifts',
                'Tower Hoists',
                'Road Rollers',
                'Batching Plants',
                'Spare Parts',
              ].map((item) => (
                <li key={item}>
                  <a href="#products" className="hover:text-[#E86A17] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-[#E86A17] uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E86A17] flex-shrink-0 mt-0.5" />
                <div>Industrial Area, Odhav<br />Ahmedabad – 382415, Gujarat</div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E86A17] flex-shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-[#E86A17] transition-colors">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E86A17] flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-[#E86A17] transition-colors text-xs">
                  {SITE.email}
                </a>
              </li>
              <li>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => window.open(getWhatsAppUrl('Hello! I would like to chat with Ambish Engineering.'), '_blank')}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </motion.button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <div>© {currentYear} Ambish Engineering. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#E86A17] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#E86A17] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#E86A17] transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
