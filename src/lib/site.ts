export const SITE_URL = 'https://www.ambishengineering.com';

export const SITE = {
  name: 'Ambish Engineering',
  title: 'Ambish Engineering – Construction Machinery Supplier | Ahmedabad, India Since 1976',
  description:
    'Ambish Engineering supplies premium construction machinery — tower hoists, concrete mixers, batching plants, road rollers, bar cutting & bending machines across India. 48+ years of trust. Get a free quote today.',
  phone: '+919824183261',
  phoneDisplay: '+91 98241 83261',
  landline: '079 2634 5678',
  email: 'info@ambishengineering.com',
  address: {
    street: 'Industrial Area, Odhav',
    city: 'Ahmedabad',
    state: 'Gujarat',
    postalCode: '382415',
    country: 'IN',
    full: 'Industrial Area, Odhav, Ahmedabad – 382415, Gujarat, India',
  },
  geo: {
    latitude: 23.0204,
    longitude: 72.6369,
  },
  social: {
    facebook: 'https://www.facebook.com/ambishengineering',
    instagram: 'https://www.instagram.com/ambishengineering',
    linkedin: 'https://www.linkedin.com/company/ambishengineering',
    twitter: 'https://twitter.com/ambishengineering',
  },
  whatsappNumber: '919824183261',
  whatsappUrl: 'https://wa.me/919824183261',
  foundingYear: '1976',
  ogImage: '/crane.webp',
} as const;

export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${SITE.whatsappNumber}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export const PRODUCT_CATALOG = [
  'Concrete Mixers',
  'Tower Hoists',
  'Material Lifts',
  'Road Rollers',
  'Batching Plants',
  'Bar Cutting Machines',
  'Bar Bending Machines',
  'Spare Parts',
] as const;
