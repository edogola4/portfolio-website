import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const now = new Date();
  const locales = ['en', 'sw'] as const;

  const routes = [
    '/',
    '/about',
    '/projects',
    '/blog',
    '/contact',
    '/resume',
    '/skills',
  ];

  // Root maps to default locale path (en)
  const entries: MetadataRoute.Sitemap = [
    {
      url: new URL('/en', base).toString(),
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    }
  ];

  for (const route of routes.filter((r) => r !== '/')) {
    for (const locale of locales) {
      entries.push({
        url: new URL(`/${locale}${route}`, base).toString(),
        lastModified: now,
        changeFrequency: 'weekly',
        priority: route === '/about' ? 0.8 : 0.7
      });
    }
  }

  return entries;
}
