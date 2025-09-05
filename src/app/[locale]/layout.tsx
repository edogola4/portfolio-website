import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'sw'}];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: 'en' | 'sw' }>;
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container-custom py-8">
            {children}
          </div>
        </main>
        <Footer />
        <Analytics />
      </div>
    </NextIntlClientProvider>
  );
}
