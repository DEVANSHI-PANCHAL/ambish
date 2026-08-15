"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { SITE, getWhatsAppUrl } from '../../lib/site';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="contact" className="py-12 md:py-16 bg-white border-t border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <span className="inline-block px-3.5 py-1 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-xs uppercase tracking-wider font-semibold mb-2 border border-[#E86A17]/20 shadow-sm">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Visit <span className="text-[#E86A17]">Us</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Located in Ahmedabad, serving civil contractors and developers across India since 1976.
          </p>
        </motion.div>

        {/* 2-Column Split: Clean Stacked Cards on Left, High-Zoom Map on Right */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
          {/* Left Column: 3 Harmonious Stacked Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-3.5 justify-between"
          >
            {/* Card 1: Works & Office */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#E86A17]/15 flex items-center justify-center flex-shrink-0 text-[#E86A17] mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 mb-1">Our Works & Office</h3>
                <p className="text-slate-600 leading-relaxed text-xs">
                  {SITE.address.full}
                </p>
              </div>
            </div>

            {/* Card 2: Phone & WhatsApp (Clean & Harmonized) */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center flex-shrink-0 text-green-600 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Direct Sales & Support</h3>
                <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-base sm:text-lg font-black text-slate-900 hover:text-[#E86A17] transition-colors"
                  >
                    {SITE.phoneDisplay}
                  </a>

                  <button
                    onClick={() =>
                      window.open(
                        getWhatsAppUrl('Hello Gaurang, I want to inquire about Ambish Engineering machinery products.'),
                        '_blank'
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:scale-105"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: Email & Business Hours */}
            <div className="bg-[#FAF9F6] rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#E86A17]/15 flex items-center justify-center flex-shrink-0 text-[#E86A17] mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Email & Working Hours</h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="block text-xs font-bold text-[#E86A17] hover:underline break-all mb-1.5"
                >
                  {SITE.email}
                </a>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#E86A17]" />
                  <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Close-Up Zoomed Google Map (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden shadow-md border border-slate-200/90 h-[320px] lg:h-auto min-h-[300px] relative group"
          >
            <div className="relative w-full h-full bg-slate-100 min-h-[320px]">
              <iframe
                src="https://maps.google.com/maps?q=22.9874058,72.4697647&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ambish Engineering Location - 22°59'14.7N 72°28'11.2E"
              />

              {/* Floating Direct Maps Link */}
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md border border-slate-200/90 text-xs font-bold text-slate-800 hover:text-[#E86A17] flex items-center gap-1.5 transition-all duration-200 hover:scale-105"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E86A17]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
