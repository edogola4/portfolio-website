export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: 'https://brandonogola.com/', lastModified, priority: 1.0 },
    { url: 'https://brandonogola.com/about', lastModified, priority: 0.7 },
    { url: 'https://brandonogola.com/projects', lastModified, priority: 0.9 },
    { url: 'https://brandonogola.com/skills', lastModified, priority: 0.7 },
    { url: 'https://brandonogola.com/blog', lastModified, priority: 0.7 },
    { url: 'https://brandonogola.com/contact', lastModified, priority: 0.7 },
  ];
}
