import type { MetadataRoute } from 'next';

const SITE_URL = 'https://brandonogola.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const locales = ['en', 'sw'] as const;

  const routes: Array<{ path: string; priority: number }> = [
    { path: '/',        priority: 1.0 },
    { path: '/projects', priority: 0.9 },
    { path: '/about',   priority: 0.7 },
    { path: '/skills',  priority: 0.7 },
    { path: '/blog',    priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    { path: '/resume',  priority: 0.7 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const { path, priority } of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path === '/' ? '' : path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority,
      });
    }
  }

  return entries;
}
