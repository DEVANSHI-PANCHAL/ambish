"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import AmbishLogo from './AmbishLogo';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-choose' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/97 backdrop-blur-md shadow-lg border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <AmbishLogo
                width={200}
                variant={isScrolled ? 'dark' : 'light'}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-[#E86A17] ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('tel:+919876543210', '_self')}
                className={isScrolled ? 'text-gray-700 hover:text-[#E86A17]' : 'text-white hover:bg-white/10'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button
                size="sm"
                onClick={() => document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#E86A17] hover:bg-[#d05c0f] text-white shadow-md"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#1A1A1A]/98 backdrop-blur-lg">
              <div className="container mx-auto px-4 py-24">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className="text-2xl text-white text-left hover:text-[#E86A17] transition-colors"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 flex flex-col gap-4"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open('tel:+919876543210', '_self')}
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => {
                      document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }}
                    className="bg-[#E86A17] hover:bg-[#d05c0f] text-white"
                  >
                    Get Quote
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
