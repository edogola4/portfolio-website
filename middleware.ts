import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'sw'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const config = {
  matcher: [
    '/',
    '/(en|sw)/:path*'
  ]
};
