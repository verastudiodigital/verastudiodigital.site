'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { legalNavigation, mainNavigation } from '@/data/navigation';
import { servicesData } from '@/data/services';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { isStandaloneCatalogRoute } from '@/lib/standaloneRoutes';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl();

  // Ocultar footer en rutas de demos y catálogos limpios
  if (isStandaloneCatalogRoute(pathname)) {
    return null;
  }

  return (
    <footer className="border-t border-[#E2E8F0] bg-[#063B79] text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src={siteConfig.logo.horizontal}
                alt={siteConfig.logo.alt}
                width={170}
                height={55}
                className="h-11 w-auto rounded-lg object-contain"
              />
            </Link>
            <div>
              <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
              <p className="text-xs font-medium text-white/80">{siteConfig.slogan}</p>
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/90" aria-hidden="true" />
                <span>
                  {siteConfig.city}, {siteConfig.country}
                </span>
              </li>

              {whatsappUrl ? (
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-white/90" aria-hidden="true" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white hover:underline"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                </li>
              ) : null}

              {siteConfig.contact.email ? (
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-white/90" aria-hidden="true" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="break-all transition-colors hover:text-white hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              ) : null}
            </ul>

            {siteConfig.socials.length > 0 ? (
              <div className="pt-2">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/75">
                  Redes oficiales
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.socials.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/75 sm:flex-row sm:items-center">
          <p>
            &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
