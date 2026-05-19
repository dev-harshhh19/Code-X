import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://code-x-orian.vercel.app'; // Replace with actual production URL

  // Define static routes
  const routes = [
    '',
    '/encoder',
    '/about',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/cookies'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : route === '/encoder' ? 0.9 : 0.5,
  }));
}
