"use client";

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import AmbishLogo from './AmbishLogo';

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

          {/* Products */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-[#E86A17] uppercase tracking-wider">Our Products</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              {['Concrete Mixers', 'Material Lifts', 'Tower Hoists', 'Road Rollers', 'Batching Plants', 'Spare Parts'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#E86A17] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-6 text-[#E86A17] uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#E86A17] transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#legacy')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#E86A17] transition-colors">Our Legacy</button>
              </li>
              <li>
                <button onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#E86A17] transition-colors">Products</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[#E86A17] transition-colors">Get Quote</button>
              </li>
              <li><a href="#" className="hover:text-[#E86A17] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#E86A17] transition-colors">Terms of Service</a></li>
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
                <a href="tel:+919876543210" className="hover:text-[#E86A17] transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E86A17] flex-shrink-0" />
                <a href="mailto:info@ambishengineering.com" className="hover:text-[#E86A17] transition-colors text-xs">
                  info@ambishengineering.com
                </a>
              </li>
              <li>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
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
