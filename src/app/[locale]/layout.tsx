import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'sw'}];
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;  // Changed from "en" | "sw" to string
}) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <div className="container-custom py-8">
        {children}
      </div>
      <Footer />
    </NextIntlClientProvider>
  );
}