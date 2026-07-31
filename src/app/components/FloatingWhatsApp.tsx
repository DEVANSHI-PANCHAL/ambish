"use client";

import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl p-4 w-64"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <div className="font-semibold text-slate-900 mb-2">Need Help?</div>
              <p className="text-sm text-gray-600">
                Chat with us on WhatsApp for instant support and product inquiries.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open('https://wa.me/919876543210', '_blank')}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center group relative"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
        
        {/* Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-[#E86A17] rounded-full flex items-center justify-center text-xs font-bold"
        >
          !
        </motion.div>
      </motion.button>
    </div>
  );
}
