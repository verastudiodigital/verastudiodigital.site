import { siteConfig } from '@/config/site';

/**
 * Genera datos estructurados JSON-LD verificables para SEO local en Cochabamba, Bolivia.
 * Omite intencionalmente direcciones físicas exactas, horarios o calificaciones no verificadas.
 */
export function buildProfessionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo.square}`,
    email: siteConfig.contact.email,
    telephone: `+${siteConfig.contact.whatsappNumber}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.city,
      addressCountry: 'BO',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Cochabamba',
      },
      {
        '@type': 'Country',
        name: 'Bolivia',
      },
    ],
    sameAs: siteConfig.socials.map((social) => social.href),
  };
}
