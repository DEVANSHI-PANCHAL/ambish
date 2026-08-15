"use client";

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Check, MessageCircle, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { SITE, getWhatsAppUrl, getEmailUrl } from '../../lib/site';

const productOptions = [
  'Hydraulic & Hopper Concrete Mixers',
  'Material Lifts & Tower Hoists',
  'Lift with Mixer Machines',
  'Monkey Cranes',
  'Concrete Buckets & Trolleys',
  'Bar Cutting & Bending Machines',
  'Baby Road Rollers & Compactors',
  'Needle Vibrators & Site Equipment',
  'Other Construction Machinery',
];

export default function InquiryForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', mobile: '', product: '', message: '' });

  const buildInquiryText = () => {
    return [
      `*New Inquiry - Ambish Engineering*`,
      formData.name ? `*Name:* ${formData.name}` : '',
      formData.company ? `*Company:* ${formData.company}` : '',
      formData.mobile ? `*Mobile:* ${formData.mobile}` : '',
      formData.product ? `*Product:* ${formData.product}` : '',
      formData.message ? `*Message:* ${formData.message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleWhatsAppSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = buildInquiryText() || 'Hello! I would like to inquire about Ambish Engineering machinery.';
    window.open(getWhatsAppUrl(text), '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const subject = `Machinery Inquiry - ${formData.product || 'Ambish Engineering'} (${formData.name || 'Website Visitor'})`;
    const body = [
      `Name: ${formData.name}`,
      `Company: ${formData.company || 'N/A'}`,
      `Mobile: ${formData.mobile}`,
      `Product of Interest: ${formData.product || 'General Machinery'}`,
      `Message:\n${formData.message || 'Please send catalog and quotation.'}`,
    ].join('\n\n');

    window.open(getEmailUrl(subject, body), '_self');
    setSubmitted(true);
  };

  return (
    <section
      id="inquiry-form"
      ref={ref}
      className="py-20 md:py-24 bg-[#F7F4F0] relative overflow-hidden"
    >
      {/* Orange ambient glows */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-[#E86A17]/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#E86A17]/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-gray-900"
          >
            <span className="inline-block mb-4 px-4 py-1.5 bg-white rounded-full text-xs md:text-sm uppercase tracking-wider text-[#E86A17] font-semibold border border-[#E86A17]/30 shadow-sm">
              Get in Touch
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Start Your Project with{' '}
              <span className="text-[#E86A17]">
                Ambish Engineering
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
              Connect directly with our engineering sales team via WhatsApp (+91 98241 83261) or Email (ambishengineering@outlook.com) for immediate quotations and machinery recommendations.
            </p>

            <div className="space-y-4">
              {[
                { title: 'Expert Consultation', desc: 'Direct guidance from machinery specialists with 48+ years of industry experience' },
                { title: 'Competitive Factory Pricing', desc: 'Direct manufacturing value for heavy-duty machinery — no intermediaries' },
                { title: 'Instant Response', desc: 'Quick turnaround on quotes directly on WhatsApp (+91 98241 83261)' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 bg-white/80 p-4 rounded-xl border border-slate-200/80 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#E86A17]/15 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#E86A17]">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 text-green-600">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Ready!</h3>
                  <p className="text-slate-600 text-sm mb-6 max-w-sm mx-auto">
                    Your inquiry details have been formatted. Connect directly via WhatsApp or Email below:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="bg-green-600 hover:bg-green-700 text-white gap-2 font-semibold shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp (+91 98241 83261)
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleEmailSubmit}
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 gap-2 font-semibold"
                    >
                      <Mail className="w-4 h-4 text-[#E86A17]" />
                      Send via Outlook Email
                    </Button>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', mobile: '', product: '', message: '' });
                    }}
                    className="mt-6 text-xs text-slate-400 hover:text-slate-600 underline"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 bg-slate-50/50 border-slate-200 rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Company Name</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="mt-1 bg-slate-50/50 border-slate-200 rounded-xl"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mobile" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Mobile Number *</Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="+91 98241 83261"
                        required
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="mt-1 bg-slate-50/50 border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="product" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Product of Interest *</Label>
                    <Select value={formData.product} onValueChange={(value) => setFormData({ ...formData, product: value })}>
                      <SelectTrigger className="mt-1 bg-slate-50/50 border-slate-200 rounded-xl">
                        <SelectValue placeholder="Select machinery type" />
                      </SelectTrigger>
                      <SelectContent>
                        {productOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Message / Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about required capacity, quantity, and project location..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 bg-slate-50/50 border-slate-200 rounded-xl"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 font-bold rounded-xl shadow-md shadow-green-900/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send via WhatsApp
                    </Button>

                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      onClick={handleEmailSubmit}
                      className="w-full border-slate-300 hover:border-[#E86A17] text-slate-800 hover:text-[#E86A17] gap-2 font-bold rounded-xl"
                    >
                      <Mail className="w-4 h-4 text-[#E86A17]" />
                      Send via Email
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    Direct communication to +91 9824183261 & ambishengineering@outlook.com
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
