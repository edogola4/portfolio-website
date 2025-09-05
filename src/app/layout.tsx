import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
// import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/context/ThemeContext';  // Use your custom provider
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
//import '@/styles/globals.css';
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

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Edwin Ogola | Full Stack Software Engineer',
  description: 'Building scalable web applications focused on East African markets',
  keywords: ['software engineer', 'web developer', 'east africa', 'full stack', 'react', 'next.js'],
  alternates: {
    canonical: '/en',
    languages: {
      en: '/en',
      sw: '/sw'
    }
  },
  openGraph: {
    type: 'website',
    url: '/en',
    title: 'Edwin Ogola | Full Stack Software Engineer',
    description: 'Building scalable web applications focused on East African markets',
    siteName: 'Edwin Ogola Portfolio',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Edwin Ogola Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edwin Ogola | Full Stack Software Engineer',
    description: 'Building scalable web applications focused on East African markets',
    images: ['/images/og-default.jpg'],
    creator: '@edwin_ogola',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-background text-text antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Locale-specific layout will render Header/Footer/Analytics */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}