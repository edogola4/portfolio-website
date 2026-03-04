// src/app/contact/metadata.js
export const metadata = {
  title: 'Contact | Brandon Ogola',
  description:
    'Get in touch with Brandon Ogola, Software Engineer based in Nairobi, Kenya. Open to full-time roles, freelance projects, and collaborations in .NET, Azure, TypeScript, and cloud-native development.',
  keywords:
    'Brandon Ogola, full stack developer, software engineer, .NET developer, Azure, contact, hire developer, Kenya developer, Nairobi tech, cloud architect, TypeScript, React developer',
  locale: 'en_US',
  alternates: {
    canonical: 'https://portfolio-website-five-sigma-91.vercel.app/contact',
    languages: {
      'en-US': 'https://portfolio-website-five-sigma-91.vercel.app/contact',
    },
  },
  openGraph: {
    title: 'Contact Brandon Ogola - Software Engineer',
    description:
      'Reach out to Brandon Ogola for software development, job opportunities, or collaborations.',
    url: 'https://portfolio-website-five-sigma-91.vercel.app/contact',
    siteName: 'Brandon Ogola',
    images: [
      {
        url: 'https://portfolio-website-five-sigma-91.vercel.app/images/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Brandon Ogola Contact Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Brandon Ogola - Software Engineer',
    description:
      'Connect with Brandon Ogola for software development projects or opportunities.',
    creator: '@BrandonOgola',
    images: ['https://portfolio-website-five-sigma-91.vercel.app/images/og-contact.png'],
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Brandon Ogola',
    description:
      'Get in touch with Brandon Ogola, a Nairobi-based Software Engineer specializing in .NET, Azure, and cloud-native development.',
    url: 'https://portfolio-website-five-sigma-91.vercel.app/contact',
    publisher: {
      '@type': 'Person',
      name: 'Brandon Ogola',
      sameAs: [
        'https://github.com/edogola4',
        'https://www.linkedin.com/in/brandon-ogola-b77063232/',
        'https://x.com/BrandonOgola',
      ],
    },
  },
  link: [
    { rel: 'preconnect', href: 'https://api.formspree.io' },
    { rel: 'dns-prefetch', href: 'https://api.formspree.io' },
  ],
};
