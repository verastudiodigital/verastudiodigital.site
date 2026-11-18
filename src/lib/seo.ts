import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl =
    normalizedPath === '/' ? siteConfig.url : `${siteConfig.url}${normalizedPath}`;

  const defaultKeywords = [
    'Vera Studio Digital',
    'servicios digitales Cochabamba',
    'marketing digital Cochabamba',
    'diseño de páginas web Bolivia',
    'catálogos digitales Bolivia',
    'configuración WhatsApp Business',
    'automatización administrativa negocios',
    'soluciones digitales Bolivia',
  ];

  const mergedKeywords = Array.from(new Set([...keywords, ...defaultKeywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: `${siteConfig.url}${siteConfig.logo.square}`,
          width: 300,
          height: 300,
          alt: `${siteConfig.name} - ${siteConfig.positioning}`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [`${siteConfig.url}${siteConfig.logo.square}`],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}
