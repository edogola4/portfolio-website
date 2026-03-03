// src/app/contact/metadata.js
export const metadata = {
  title: 'Contact Edwin Ogola | Expert Full Stack Developer',
  description:
    'Connect with Edwin Ogola, a Nairobi-based full stack developer, for web development, AI solutions, or job opportunities in East Africa.',
  keywords:
    'Edwin Ogola, full stack developer, software engineer, web development, contact, hire developer, Kenya developer, East Africa tech, AI developer, cloud architect, cybersecurity, ethical hacking, Next.js developer, React developer, Nairobi tech',
  locale: 'en_US',
  alternates: {
    canonical: 'https://edwinogola.com/contact',
    languages: {
      'en-US': 'https://edwinogola.com/contact',
    },
  },
  openGraph: {
    title: 'Contact Edwin Ogola - Full Stack Software Engineer',
    description:
      'Reach out to Edwin Ogola for web development, job opportunities, or collaborations in East Africa and beyond.',
    url: 'https://edwinogola.com/contact',
    siteName: 'Edwin Ogola',
    images: [
      {
        url: 'https://edwinogola.com/images/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Edwin Ogola Contact Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Edwin Ogola - Full Stack Software Engineer',
    description:
      'Connect with Edwin Ogola for web development projects or opportunities.',
    creator: '@BrandonOgola',
    images: ['https://edwinogola.com/images/og-contact.png'],
  },
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Edwin Ogola',
    description:
      'Get in touch with Edwin Ogola, a Nairobi-based full stack developer specializing in AI-powered web applications and cloud architecture.',
    url: 'https://edwinogola.com/contact',
    publisher: {
      '@type': 'Person',
      name: 'Edwin Ogola',
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
