import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { ServiceItem } from '@/types/service';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ServiceIcon, WhatsAppIcon } from '@/components/ui/ServiceIcon';

interface ServiceHeroProps {
  service: ServiceItem;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const whatsappUrl = buildWhatsAppUrl(service.whatsappMessage);
  const isSoftwareApps = service.slug === 'software-y-apps';

  return (
    <section className="bg-[#0073F7] py-14 text-white sm:py-20">
      <Container>
        <Link
          href="/servicios"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/85 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Todos los servicios</span>
        </Link>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="white">
                {isSoftwareApps ? 'Desarrollo a Medida' : service.startingPrice}
              </Badge>
              <span className="text-xs font-medium text-white/85">
                Cochabamba y toda Bolivia
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              {service.fullDescription}
            </p>
            <p className="mt-3 text-sm font-medium text-white/85">{service.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              {whatsappUrl ? (
                <Button href={whatsappUrl} external variant="white" size="lg">
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Solicitar cotización por WhatsApp</span>
                </Button>
              ) : null}
              {isSoftwareApps ? (
                <Button href="#aplicaciones" variant="ghost-white" size="lg">
                  Ver aplicaciones activas
                </Button>
              ) : (
                <Button href="#planes" variant="ghost-white" size="lg">
                  Ver planes y precios
                </Button>
              )}
            </div>
          </div>

          <div className="hidden h-28 w-28 items-center justify-center rounded-3xl border border-white/20 bg-white/10 lg:flex">
            <ServiceIcon name={service.iconName} className="h-12 w-12 text-white" />
          </div>
        </div>
      </Container>
    </section>
  );
}
