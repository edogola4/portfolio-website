import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

const SITE_URL = 'https://brandonogola.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Brandon Ogola — Full-Stack .NET & TypeScript Engineer, Nairobi Kenya',
  description:
    'Full-stack engineer (3+ YOE) specialising in .NET 10, TypeScript & Azure. Building SmartSchedule Healthcare SaaS and Riggs London Kenya ecommerce platform. Available for projects.',
  keywords: [
    'Brandon Ogola',
    'Brandon Ogola developer Kenya',
    'Full stack .NET developer Nairobi',
    'TypeScript Azure developer Kenya',
    'M-Pesa developer Kenya',
    'AI SaaS developer Africa',
    'Next.js developer Nairobi',
    '.NET developer Kenya',
    'software engineer Nairobi',
  ],
  authors: [{ name: 'Brandon Ogola', url: SITE_URL }],
  creator: 'Brandon Ogola',
  alternates: {
    canonical: '/',
    languages: { en: '/en', sw: '/sw' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: SITE_URL,
    siteName: 'Brandon Ogola',
    title: 'Brandon Ogola — Full-Stack Engineer, Nairobi Kenya',
    description:
      'Building production-grade .NET, TypeScript & AI systems. SmartSchedule Healthcare · Riggs London Kenya.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Brandon Ogola — Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandon Ogola — .NET & TypeScript Engineer, Kenya',
    description:
      'Full-stack engineer building AI SaaS and ecommerce platforms in Kenya.',
    images: ['/og-image.png'],
    creator: '@BrandonOgola',
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
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Brandon Ogola',
  jobTitle: 'Full-Stack Software Engineer',
  url: SITE_URL,
  sameAs: [
    'https://github.com/edogola4',
    'https://www.linkedin.com/in/brandon-ogola-b77063232/',
    'https://x.com/BrandonOgola',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  knowsAbout: ['.NET', 'TypeScript', 'Azure', 'Next.js', 'AI/ML', 'M-Pesa API', 'C#', 'React'],
  worksFor: { '@type': 'Organization', name: 'Freelance / Contract' },
};

const projectsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Brandon Ogola Projects',
  itemListElement: [
    {
      '@type': 'SoftwareApplication',
      position: 1,
      name: 'SmartSchedule Healthcare',
      description: 'Enterprise AI scheduling SaaS built on .NET 10 and Azure',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
    },
    {
      '@type': 'SoftwareApplication',
      position: 2,
      name: 'Riggs London Kenya',
      description:
        'Premium ecommerce platform with Claude AI Scent Advisor and M-Pesa payments for the Kenyan market',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: 'https://github.com/edogola4/Riggs-London-Kenya',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans bg-background text-text antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
