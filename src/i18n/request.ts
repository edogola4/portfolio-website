import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {isSupportedLocale, SupportedLocale} from './types';

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;

  if (!isSupportedLocale(requested)) {
    notFound();
  }

  const locale: SupportedLocale = requested;
  const messages = (await import(`./locales/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});
