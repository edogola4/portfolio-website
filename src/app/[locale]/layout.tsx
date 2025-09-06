import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import {getMessages, unstable_setRequestLocale} from 'next-intl/server';

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
      {/* Content wrapper specific to localized pages */}
      <div className="container-custom py-8">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
