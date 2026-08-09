"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { SITE, getWhatsAppUrl } from '../../lib/site';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-sm uppercase tracking-wider font-medium mb-4">
            Contact Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-[#E86A17]">Showroom</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Located in the heart of Ahmedabad, serving clients across India since 1976
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-[#F7F4F0] rounded-2xl p-8 text-gray-900 h-full relative overflow-hidden border border-gray-200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E86A17]/10 rounded-full blur-2xl" />
              <div className="w-14 h-14 rounded-xl bg-[#E86A17]/20 border border-[#E86A17]/30 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-[#E86A17]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Our Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Ambish Engineering<br />
                Industrial Area, Odhav<br />
                Ahmedabad – 382415<br />
                Gujarat, India
              </p>
            </motion.div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-gradient-to-br from-[#E86A17] to-[#FF8C38] rounded-2xl p-8 text-white h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Phone & WhatsApp</h3>
              <div className="space-y-2 text-white/90">
                <a href={`tel:${SITE.phone}`} className="block hover:text-white transition-colors font-medium">
                  {SITE.phoneDisplay}
                </a>
                <a href={`tel:+91${SITE.landline.replace(/\s+/g, '')}`} className="block hover:text-white transition-colors">
                  {SITE.landline}
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 border-white text-white hover:bg-white hover:text-[#E86A17] font-medium"
                  onClick={() => window.open(getWhatsAppUrl('Hello! I want to contact Ambish Engineering regarding your machinery.'), '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Email & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-[#F7F4F0] rounded-2xl p-8 h-full border border-gray-200"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E86A17]/10 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-[#E86A17]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Email & Hours</h3>
              <div className="space-y-3 text-gray-600">
                <a href={`mailto:${SITE.email}`}
                  className="block hover:text-[#E86A17] transition-colors font-medium text-sm">
                  {SITE.email}
                </a>
                <div className="flex items-start gap-2 mt-4">
                  <Clock className="w-5 h-5 mt-0.5 text-[#E86A17] flex-shrink-0" />
                  <div className="text-sm">
                    <div>Mon – Sat: 9:00 AM – 7:00 PM</div>
                    <div className="text-gray-400">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <div className="relative w-full h-[400px] bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.22815857384!2d72.41493028359707!3d23.02047499022709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ambish Engineering Location"
            />
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-[#F7F4F0] rounded-2xl p-8 border border-gray-200 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Prefer to Visit Us in Person?</h3>
          <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
            Schedule a visit to our showroom to see our machinery in action and speak with our expert team.
          </p>
          <Button
            size="lg"
            className="bg-[#E86A17] hover:bg-[#d05c0f] text-white shadow-md"
            onClick={() => window.open(`tel:${SITE.phone}`, '_self')}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call to Schedule Visit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
