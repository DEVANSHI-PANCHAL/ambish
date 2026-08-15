"use client";

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { SITE, getWhatsAppUrl } from '../../lib/site';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="contact" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-[#E86A17]/10 text-[#E86A17] rounded-full text-xs md:text-sm uppercase tracking-wider font-semibold mb-3 border border-[#E86A17]/20 shadow-sm">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Visit Our <span className="text-[#E86A17]">Office & Works</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Located in Ahmedabad, serving contractors and builders across India since 1976.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-[#F8FAFC] rounded-3xl p-8 text-slate-900 h-full relative overflow-hidden border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#E86A17]/15 flex items-center justify-center mb-6 text-[#E86A17]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Our Works & Office</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Ambish Engineering<br />
                Industrial Area, Odhav<br />
                Ahmedabad – 382415<br />
                Gujarat, India
              </p>
            </div>
          </motion.div>

          {/* Phone & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#E86A17] to-[#d25c10] rounded-3xl p-8 text-white h-full shadow-lg shadow-orange-900/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone & WhatsApp</h3>
                <div className="space-y-2 text-white/95">
                  <a href={`tel:${SITE.phone}`} className="block text-2xl font-extrabold hover:underline">
                    {SITE.phoneDisplay}
                  </a>
                  <p className="text-xs text-white/80">Available Mon – Sat for instant pricing & equipment support</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-white text-[#E86A17] hover:bg-orange-50 hover:text-[#d25c10] font-bold border-none shadow-md"
                  onClick={() => window.open(getWhatsAppUrl('Hello Gaurang, I want to inquire about Ambish Engineering machinery products.'), '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
                  Chat on WhatsApp (+91 98241 83261)
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Email & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[#F8FAFC] rounded-3xl p-8 h-full border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E86A17]/15 flex items-center justify-center mb-6 text-[#E86A17]">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email & Inquiries</h3>
                <div className="space-y-3 text-slate-600">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="block text-base font-bold text-[#E86A17] hover:underline break-all"
                  >
                    {SITE.email}
                  </a>
                  <div className="flex items-start gap-2 pt-2 text-xs sm:text-sm">
                    <Clock className="w-4 h-4 mt-0.5 text-[#E86A17] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-800">Mon – Sat: 9:00 AM – 7:00 PM</div>
                      <div className="text-slate-400">Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-slate-300 hover:border-[#E86A17] text-slate-700 hover:text-[#E86A17] font-semibold"
                  onClick={() => window.open(`mailto:${SITE.email}?subject=Machinery%20Inquiry%20-%20Ambish%20Engineering`, '_self')}
                >
                  <Mail className="w-4 h-4 mr-2 text-[#E86A17]" />
                  Email Us Directly
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/90"
        >
          <div className="relative w-full h-[380px] bg-slate-100">
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
      </div>
    </section>
  );
}
