"use client";

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

const productOptions = [
  'Concrete Mixers', 'Material Lifts', 'Tower Hoists', 'Road Rollers',
  'Bar Cutting Machines', 'Bar Bending Machines', 'Batching Plants', 'Spare Parts', 'Other',
];

export default function InquiryForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', mobile: '', product: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', mobile: '', product: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="inquiry-form"
      ref={ref}
      className="py-24 bg-[#F7F4F0] relative overflow-hidden"
    >
      {/* Orange ambient glows */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-[#E86A17]/15 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#E86A17]/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], x: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-gray-900"
          >
            <span className="inline-block mb-5 px-4 py-2 bg-white rounded-full text-sm uppercase tracking-wider text-[#E86A17] border border-[#E86A17]/30 shadow-sm">
              Get in Touch
            </span>

            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Start Your Project with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E86A17] to-[#FDB813]">
                Ambish Engineering
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-10">
              Fill out the form and our team will get back to you within 24 hours with a
              detailed quote and product recommendations.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Expert Consultation', desc: 'Personalized recommendations from industry experts with 48 years of experience' },
                { title: 'Competitive Pricing', desc: 'Best value for premium quality machinery — no hidden costs' },
                { title: 'Fast Response', desc: 'Quick turnaround on all inquiries, typically within 2–4 hours' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E86A17]/20 border border-[#E86A17]/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-[#E86A17]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-0.5">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-[#E86A17]/10 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-[#E86A17]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-500">We have received your inquiry and will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                    <Input id="name" type="text" placeholder="Enter your name" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                    <Input id="company" type="text" placeholder="Enter company name" value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="mobile" className="text-gray-700 font-medium">Mobile Number *</Label>
                    <Input id="mobile" type="tel" placeholder="+91 98765 43210" required value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="product" className="text-gray-700 font-medium">Product Interest *</Label>
                    <Select value={formData.product} onValueChange={(value) => setFormData({ ...formData, product: value })}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {productOptions.map((option) => (
                          <SelectItem key={option} value={option}>{option}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your requirements..." rows={3}
                      value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="mt-1" />
                  </div>

                  <Button type="submit" size="lg"
                    className="w-full bg-[#E86A17] hover:bg-[#d05c0f] text-white gap-2 group shadow-lg shadow-[#E86A17]/25">
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Submit Inquiry
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our privacy policy
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
