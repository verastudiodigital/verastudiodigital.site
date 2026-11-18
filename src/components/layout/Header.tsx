'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { mainNavigation } from '@/data/navigation';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { isStandaloneCatalogRoute } from '@/lib/standaloneRoutes';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const whatsappUrl = buildWhatsAppUrl();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Estado de si la página ya se ha desplazado más de 15px
      setIsScrolled(currentScrollY > 15);

      // Si el usuario está arriba del todo (< 50px), el encabezado siempre se muestra
      if (currentScrollY < 50) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Si hace scroll hacia abajo: ocultar suavemente
      if (currentScrollY > lastScrollY.current + 8) {
        setIsVisible(false);
      }
      // Si hace scroll hacia arriba: reaparecer de inmediato
      else if (currentScrollY < lastScrollY.current - 8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ocultar encabezado corporativo en demos y catálogos limpios de clientes
  if (isStandaloneCatalogRoute(pathname)) {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ease-in-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      } ${
        isScrolled
          ? 'border-b border-[#E2E8F0] bg-white/95 shadow-md shadow-[#0073F7]/5 backdrop-blur-md'
          : 'border-b border-[#E2E8F0]/80 bg-white/90 backdrop-blur-sm'
      }`}
    >
      <Container
        className={`relative flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-18'
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-[#0073F7]"
          aria-label={`${siteConfig.name} - Ir al inicio`}
        >
          <Image
            src={siteConfig.logo.horizontal}
            alt={siteConfig.logo.alt}
            width={154}
            height={50}
            priority
            className={`w-auto rounded-lg object-contain transition-all duration-300 ${
              isScrolled ? 'h-8 sm:h-9' : 'h-9 sm:h-11'
            }`}
          />
        </Link>

        <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-1.5 text-sm font-semibold text-[#172033] transition-colors hover:bg-[#F5F8FC] hover:text-[#0073F7]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {whatsappUrl ? (
            <Button
              href={whatsappUrl}
              external
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex shadow-sm hover:scale-102"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Solicitar cotización</span>
            </Button>
          ) : null}

          <MobileMenu whatsappUrl={whatsappUrl} />
        </div>
      </Container>
    </header>
  );
}
