import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { servicesData } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    '',
    '/servicios',
    '/portafolio',
    '/nosotros',
    '/contacto',
    '/politica-de-privacidad',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = servicesData.map((service) => ({
    url: `${siteConfig.url}/servicios/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
