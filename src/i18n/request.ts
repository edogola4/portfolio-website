import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  // Ensure that the incoming locale is supported
  if (!['en', 'sw'].includes(locale)) {
    notFound();
  }

  const messages = (await import(`./locales/${locale}.json`)).default;

  return {
    locale,
    messages
  };
});
