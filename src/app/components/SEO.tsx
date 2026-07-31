"use client";

import { useEffect } from 'react';

const SEO_DATA = {
  title: 'Ambish Engineering – Construction Machinery Supplier | Ahmedabad, India Since 1976',
  description:
    'Ambish Engineering supplies premium construction machinery — tower hoists, concrete mixers, batching plants, road rollers, bar cutting & bending machines across India. 48+ years of trust. Get a free quote today.',
  keywords:
    'construction machinery Ahmedabad, tower hoist supplier India, concrete mixer supplier Gujarat, batching plant dealer, bar cutting machine, bar bending machine, road roller supplier, material lift India, construction equipment 1976',
  canonicalUrl: 'https://www.ambishengineering.com/',
  ogImage: 'https://www.ambishengineering.com/og-image.jpg',
  phone: '+919876543210',
  email: 'info@ambishengineering.com',
  address: {
    street: 'Industrial Area, Odhav',
    city: 'Ahmedabad',
    state: 'Gujarat',
    postalCode: '382415',
    country: 'IN',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': SEO_DATA.canonicalUrl,
      name: 'Ambish Engineering',
      description: SEO_DATA.description,
      url: SEO_DATA.canonicalUrl,
      telephone: SEO_DATA.phone,
      email: SEO_DATA.email,
      foundingDate: '1976',
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_DATA.canonicalUrl}ambish-logo.png`,
      },
      image: SEO_DATA.ogImage,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SEO_DATA.address.street,
        addressLocality: SEO_DATA.address.city,
        addressRegion: SEO_DATA.address.state,
        postalCode: SEO_DATA.address.postalCode,
        addressCountry: SEO_DATA.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.0204,
        longitude: 72.6369,
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
        'https://www.linkedin.com/company/ambishengineering',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Construction Machinery Products',
        itemListElement: [
          'Concrete Mixers',
          'Tower Hoists',
          'Material Lifts',
          'Road Rollers',
          'Batching Plants',
          'Bar Cutting Machines',
          'Bar Bending Machines',
          'Spare Parts',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Product', name },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SEO_DATA.canonicalUrl}#website`,
      url: SEO_DATA.canonicalUrl,
      name: 'Ambish Engineering',
      description: SEO_DATA.description,
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SEO_DATA.canonicalUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SEO_DATA.canonicalUrl },
      ],
    },
  ],
};

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SEO() {
  useEffect(() => {
    // Title
    document.title = SEO_DATA.title;

    // Core meta
    setMeta('description', SEO_DATA.description);
    setMeta('keywords', SEO_DATA.keywords);
    setMeta('robots', 'index, follow');
    setMeta('author', 'Ambish Engineering');
    setMeta('viewport', 'width=device-width, initial-scale=1');

    // Canonical
    setLink('canonical', SEO_DATA.canonicalUrl);

    // Open Graph
    setMeta('og:type', 'website', true);
    setMeta('og:url', SEO_DATA.canonicalUrl, true);
    setMeta('og:title', SEO_DATA.title, true);
    setMeta('og:description', SEO_DATA.description, true);
    setMeta('og:image', SEO_DATA.ogImage, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:site_name', 'Ambish Engineering', true);
    setMeta('og:locale', 'en_IN', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', SEO_DATA.title);
    setMeta('twitter:description', SEO_DATA.description);
    setMeta('twitter:image', SEO_DATA.ogImage);

    // Geo tags (helps local SEO)
    setMeta('geo.region', 'IN-GJ');
    setMeta('geo.placename', 'Ahmedabad');
    setMeta('geo.position', '23.0204;72.6369');
    setMeta('ICBM', '23.0204, 72.6369');

    // JSON-LD structured data
    const scriptId = 'ambish-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd, null, 2);

    return () => {
      // Leave meta tags in place — they're beneficial
    };
  }, []);

  return null;
}
