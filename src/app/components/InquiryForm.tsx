"use client";

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Check, MessageCircle, Mail, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { getWhatsAppUrl, getEmailUrl } from '../../lib/site';

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
  const [touched, setTouched] = useState({ name: false, mobile: false, product: false });
  const [errors, setErrors] = useState<{ name?: string; mobile?: string; product?: string }>({});

  const validateField = (field: 'name' | 'mobile' | 'product', value: string): string => {
    if (field === 'name') {
      if (!value.trim()) return 'Full name is required.';
      if (value.trim().length < 2) return 'Please enter at least 2 characters.';
    } else if (field === 'mobile') {
      const clean = value.replace(/[\s+-]/g, '');
      if (!value.trim()) return 'Mobile number is required.';
      if (clean.length < 10) return 'Please enter a valid 10-digit mobile number.';
    } else if (field === 'product') {
      if (!value) return 'Please select a machinery product of interest.';
    }
    return '';
  };

  const handleBlur = (field: 'name' | 'mobile' | 'product') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: err || undefined }));
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field as 'name' | 'mobile' | 'product']) {
      const err = validateField(field as 'name' | 'mobile' | 'product', value);
      setErrors((prev) => ({ ...prev, [field]: err || undefined }));
    }
  };

  const validateAll = (): boolean => {
    const nameErr = validateField('name', formData.name);
    const mobileErr = validateField('mobile', formData.mobile);
    const productErr = validateField('product', formData.product);

    setTouched({ name: true, mobile: true, product: true });
    setErrors({
      name: nameErr || undefined,
      mobile: mobileErr || undefined,
      product: productErr || undefined,
    });

    return !nameErr && !mobileErr && !productErr;
  };

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
    if (!validateAll()) return;

    const text = buildInquiryText();
    window.open(getWhatsAppUrl(text), '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = () => {
    if (!validateAll()) return;

    const subject = `Machinery Inquiry from ${formData.name || 'Website Visitor'}${formData.company ? ` (${formData.company})` : ''}`;
    const body = [
      `Dear Ambish Engineering Sales Team,`,
      `I would like to inquire about the following construction machinery:`,
      `Product: ${formData.product || 'Not specified'}`,
      `Name: ${formData.name || 'Not provided'}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Mobile: ${formData.mobile || 'Not provided'}`,
      `Requirements / Message:\n${formData.message || 'No additional details provided.'}`,
      `Please provide quotation and specifications at your earliest convenience.`,
    ].join('\n\n');

    window.open(getEmailUrl(subject, body), '_self');
    setSubmitted(true);
  };

  return (
    <section
      id="inquiry-form"
      ref={ref}
      className="py-14 md:py-18 bg-[#FAF9F6] relative overflow-hidden border-t border-slate-200/60"
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left content - equal stretch & aligned */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between text-gray-900"
          >
            <div>
              <span className="inline-block mb-3 px-3.5 py-1 bg-white rounded-full text-xs uppercase tracking-wider text-[#E86A17] font-semibold border border-[#E86A17]/30 shadow-sm">
                Get in Touch
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
                Start Your Project with{' '}
                <span className="text-[#E86A17]">
                  Ambish Engineering
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Connect directly with our engineering sales team via WhatsApp or Email for immediate quotations and machinery recommendations.
              </p>
            </div>

            {/* Left 3 Aligned Feature Cards */}
            <div className="space-y-3.5 pt-2">
              {[
                { title: 'Expert Consultation', desc: 'Direct guidance from machinery specialists with 48+ years of industry experience' },
                { title: 'Competitive Factory Pricing', desc: 'Get the best value for heavy-duty machinery' },
                { title: 'Instant Response', desc: 'Quick turnaround on quotes directly on WhatsApp' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#E86A17]/15 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#E86A17]">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm mb-0.5">{item.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form - Full Height Fill with Inline Validation Messages */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90 flex-1 flex flex-col justify-between">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 my-auto"
                >
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 text-green-600">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1.5">Inquiry Ready!</h3>
                  <p className="text-slate-600 text-xs sm:text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                    Your inquiry details have been formatted. Connect directly via WhatsApp or Email below:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="bg-green-600 hover:bg-green-700 text-white gap-2 font-semibold shadow-md rounded-xl"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleEmailSubmit}
                      className="border-slate-300 text-slate-700 hover:bg-slate-50 gap-2 font-semibold rounded-xl"
                    >
                      <Mail className="w-4 h-4 text-[#E86A17]" />
                      Send via Outlook Email
                    </Button>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', mobile: '', product: '', message: '' });
                      setTouched({ name: false, mobile: false, product: false });
                      setErrors({});
                    }}
                    className="mt-5 text-xs text-slate-400 hover:text-slate-600 underline"
                  >
                    Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleWhatsAppSubmit} noValidate className="h-full flex flex-col justify-between space-y-3.5">
                  <div className="space-y-3">
                    {/* Full Name */}
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-semibold text-[11px] uppercase tracking-wider">
                        Full Name <span className="text-[#E86A17]">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        aria-required="true"
                        aria-invalid={Boolean(touched.name && errors.name)}
                        aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`mt-1 rounded-xl text-xs py-2 h-9 transition-colors ${
                          touched.name && errors.name
                            ? 'bg-red-50/40 border-red-400 focus:border-red-500 focus:ring-red-200'
                            : 'bg-slate-50/70 border-slate-200 focus:border-[#E86A17]'
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p id="name-error" role="alert" className="flex items-center gap-1 text-red-500 text-[10px] mt-1 font-medium">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Company Name (Optional) */}
                      <div>
                        <Label htmlFor="company" className="text-slate-700 font-semibold text-[11px] uppercase tracking-wider">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Company name"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          className="mt-1 bg-slate-50/70 border-slate-200 rounded-xl text-xs py-2 h-9"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <Label htmlFor="mobile" className="text-slate-700 font-semibold text-[11px] uppercase tracking-wider">
                          Mobile Number <span className="text-[#E86A17]">*</span>
                        </Label>
                        <Input
                          id="mobile"
                          type="tel"
                          placeholder="+91 9876543210"
                          aria-required="true"
                          aria-invalid={Boolean(touched.mobile && errors.mobile)}
                          aria-describedby={touched.mobile && errors.mobile ? "mobile-error" : undefined}
                          value={formData.mobile}
                          onChange={(e) => handleChange('mobile', e.target.value)}
                          onBlur={() => handleBlur('mobile')}
                          className={`mt-1 rounded-xl text-xs py-2 h-9 transition-colors ${
                            touched.mobile && errors.mobile
                              ? 'bg-red-50/40 border-red-400 focus:border-red-500 focus:ring-red-200'
                              : 'bg-slate-50/70 border-slate-200 focus:border-[#E86A17]'
                          }`}
                        />
                        {touched.mobile && errors.mobile && (
                          <p id="mobile-error" role="alert" className="flex items-center gap-1 text-red-500 text-[10px] mt-1 font-medium">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{errors.mobile}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Product of Interest */}
                    <div>
                      <Label htmlFor="product" className="text-slate-700 font-semibold text-[11px] uppercase tracking-wider">
                        Product of Interest <span className="text-[#E86A17]">*</span>
                      </Label>
                      <Select
                        value={formData.product}
                        onValueChange={(value) => {
                          handleChange('product', value);
                          handleBlur('product');
                        }}
                      >
                        <SelectTrigger
                          id="product"
                          aria-required="true"
                          aria-invalid={Boolean(touched.product && errors.product)}
                          aria-describedby={touched.product && errors.product ? "product-error" : undefined}
                          className={`mt-1 rounded-xl text-xs py-2 h-9 transition-colors ${
                            touched.product && errors.product
                              ? 'bg-red-50/40 border-red-400 focus:border-red-500'
                              : 'bg-slate-50/70 border-slate-200'
                          }`}
                        >
                          <SelectValue placeholder="Select machinery type" />
                        </SelectTrigger>
                        <SelectContent>
                          {productOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-xs">{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {touched.product && errors.product && (
                        <p id="product-error" role="alert" className="flex items-center gap-1 text-red-500 text-[10px] mt-1 font-medium">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.product}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Expanded Message Box */}
                  <div className="flex-1 flex flex-col min-h-[120px] pt-1">
                    <Label htmlFor="message" className="text-slate-700 font-semibold text-[11px] uppercase tracking-wider mb-1">
                      Message / Project Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about required capacity, quantity, and project location..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full flex-1 min-h-[110px] bg-slate-50/70 border-slate-200 rounded-xl text-xs resize-none p-3 focus:ring-2 focus:ring-[#E86A17]/30"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <Button
                      type="submit"
                      size="default"
                      className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 font-bold rounded-xl shadow-md shadow-green-900/20 text-xs py-2.5 h-10"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Send via WhatsApp
                    </Button>

                    <Button
                      type="button"
                      size="default"
                      variant="outline"
                      onClick={handleEmailSubmit}
                      className="w-full border-slate-300 hover:border-[#E86A17] text-slate-800 hover:text-[#E86A17] gap-2 font-bold rounded-xl text-xs py-2.5 h-10"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#E86A17]" />
                      Send via Email
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
