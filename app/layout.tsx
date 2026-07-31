import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../src/styles/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ambishengineering.com'),
  title: {
    default: 'Ambish Engineering – Construction Machinery Supplier | Ahmedabad, India',
    template: '%s | Ambish Engineering',
  },
  description:
    'Ambish Engineering supplies premium construction machinery including tower hoists, concrete mixers, batching plants, road rollers, and bar cutting and bending machines across India.',
  keywords: [
    'construction machinery Ahmedabad',
    'tower hoist supplier India',
    'concrete mixer supplier Gujarat',
    'batching plant dealer',
    'bar cutting machine',
    'bar bending machine',
    'road roller supplier',
    'material lift India',
    'construction equipment 1976',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ambish Engineering – Construction Machinery Supplier',
    description:
      'Trusted construction machinery supplier in Ahmedabad since 1976, with premium equipment for modern infrastructure projects.',
    url: 'https://www.ambishengineering.com',
    siteName: 'Ambish Engineering',
    locale: 'en_IN',
    type: 'website',
    images: ['/ambish-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ambish Engineering – Construction Machinery Supplier',
    description:
      'Trusted construction machinery supplier in Ahmedabad since 1976, with premium equipment for modern infrastructure projects.',
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
    icon: '/ambish-logo.png',
    shortcut: '/ambish-logo.png',
    apple: '/ambish-logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
