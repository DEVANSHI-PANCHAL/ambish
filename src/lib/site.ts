export const SITE_URL = 'https://www.ambishengineering.com';

export const SITE = {
  name: 'Ambish Engineering',
  title: 'Ambish Engineering – Dealing in Construction Machinery | Ahmedabad, India Since 1976',
  description:
    'Ambish Engineering supplies construction machinery — tower hoists, concrete mixers, road rollers, bar cutting & bending machines across India. 48+ years of trust. Get a free quote today.',
  phone: '+919824183261',
  phoneDisplay: '+91 98241 83261',
  email: 'contact@ambishengineering.com',
  address: {
    street: 'Shop no 01, Nice complex, near Nice bakery, opp safar hotel, Shantipura chokdi',
    city: 'Ahmedabad',
    state: 'Gujarat',
    postalCode: '382210',
    country: 'IN',
    full: 'Shop no 01, Nice complex, near Nice bakery, opp safar hotel, Shantipura chokdi, Ahmedabad – 382210, Gujarat, India',
  },
  geo: {
    latitude: 22.9874058,
    longitude: 72.4697647,
  },
  mapUrl: "https://www.google.com/maps/place/22%C2%B059'14.7%22N+72%C2%B028'11.2%22E/@22.9874058,72.4671898,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.9874058!4d72.4697647",
  social: {
    facebook: 'https://www.facebook.com/ambishengineering',
    instagram: 'https://www.instagram.com/ambishengineering',
    bytecard: 'https://ambishengineering.bytecard.in',
    qrCard: 'https://qr.bytecard.in/J1PguLfK',
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

export function getEmailUrl(subject?: string, body?: string): string {
  const params: string[] = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  const query = params.length > 0 ? `?${params.join('&')}` : '';
  return `mailto:${SITE.email}${query}`;
}

export const PRODUCT_CATALOG = [
  'Hydraulic & Hopper Concrete Mixers',
  'Material Lifts & Tower Hoists',
  'Lift with Mixer Machines',
  'Monkey Cranes',
  'Concrete Buckets & Trolleys',
  'Bar Cutting & Bending Machines',
  'Baby Road Rollers & Compactors',
  'Needle Vibrators & Site Equipment',
] as const;
