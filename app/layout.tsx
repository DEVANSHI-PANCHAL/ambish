import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../src/styles/index.css';
import { SITE } from '../src/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ambishengineering.com'),
  title: 'Ambish Engineering',
  description:
    'Ambish Engineering manufactures and supplies heavy-duty construction machinery across India since 1976. Hydraulic concrete mixers, material hoist lifts, power trowels, road rollers, bar cutting & bending machines, and site vibrators in Ahmedabad, Gujarat.',
  keywords: [
    'Ambish Engineering',
    'construction machinery Ahmedabad',
    'concrete mixer manufacturer Gujarat',
    'material hoist lift supplier India',
    'tower hoist builder Ahmedabad',
    'bar cutting bending machine',
    'vibratory road roller supplier',
    'concrete weigh batcher machine',
    'power trowel floater Ahmedabad',
    'civil construction equipment India',
    'Shantipura chokdi construction machines',
  ],
  authors: [{ name: 'Ambish Engineering' }],
  creator: 'Ambish Engineering',
  publisher: 'Ambish Engineering',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: 'https://www.ambishengineering.com',
  },
  openGraph: {
    title: 'Ambish Engineering',
    description:
      'Serving builders and contractors across India for 48+ years with heavy-duty concrete mixers, hoists, rebar cutters, and earth compactors.',
    url: 'https://www.ambishengineering.com',
    siteName: 'Ambish Engineering',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/ambish-logo.png',
        width: 800,
        height: 600,
        alt: 'Ambish Engineering Corporate Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ambish Engineering',
    description:
      'Heavy-duty construction machinery manufactured in Ahmedabad, Gujarat. Hydraulic mixers, material hoists, and rebar equipment.',
    images: ['/ambish-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E86A17',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'Manufacturer'],
      '@id': 'https://www.ambishengineering.com/#organization',
      name: 'Ambish Engineering',
      url: 'https://www.ambishengineering.com',
      logo: 'https://www.ambishengineering.com/ambish-logo.png',
      image: 'https://www.ambishengineering.com/ambish-logo.png',
      description:
        'Leading manufacturer and supplier of heavy-duty construction machinery in Ahmedabad, Gujarat since 1976.',
      telephone: '+919824183261',
      email: 'ambishengineering@outlook.com',
      foundingDate: '1976',
      priceRange: '₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop no 01, Nice complex, near Nice bakery, opp safar hotel, Shantipura chokdi',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        postalCode: '382210',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 22.9874058,
        longitude: 72.4697647,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/ambishengineering',
        'https://www.instagram.com/ambishengineering',
        'https://ambishengineering.bytecard.in',
        'https://qr.bytecard.in/J1PguLfK',
        'https://www.google.com/maps/place/22%C2%B059%2714.7%22N+72%C2%B028%2711.2%22E/@22.9874058,72.4671898,17z/data=!3m1!4b1!4m4!3m3!8m2!3d22.9874058!4d72.4697647',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '185',
      },
    },
    {
      '@type': 'OfferCatalog',
      name: 'Ambish Construction Machinery Catalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Hydraulic Concrete Mixer Machine',
            description: 'Heavy-duty hydraulic hopper concrete mixer with high-capacity mixing drum.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Material Lift & Tower Hoist Machine',
            description: 'Heavy-duty construction vertical material transport tower hoist system.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Automatic Bar Cutting & Bending Machine',
            description: 'High-speed steel rebar cutting and bending equipment for construction sites.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Baby Vibratory Road Roller & Plate Compactor',
            description: 'Precision compaction machinery for roadworks, paving, and soil compaction.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900 selection:bg-[#E86A17]/20 selection:text-[#E86A17]">
        {children}
      </body>
    </html>
  );
}
