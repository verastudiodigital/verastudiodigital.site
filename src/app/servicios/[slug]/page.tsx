import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, servicesData } from '@/data/services';
import { processStepsData } from '@/data/industries';
import { createPageMetadata } from '@/lib/seo';
import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceFeatures } from '@/components/services/ServiceFeatures';
import { ServiceLiveDemoBanner } from '@/components/services/ServiceLiveDemoBanner';
import { PricingPlans } from '@/components/services/PricingPlans';
import { SoftwareAppsShowcase } from '@/components/services/SoftwareAppsShowcase';
import { SoftwareQuotationSection } from '@/components/services/SoftwareQuotationSection';
import { ServiceFAQ } from '@/components/services/ServiceFAQ';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata({
      title: 'Servicio no encontrado | Vera Studio Digital',
      description: 'El servicio solicitado no se encuentra disponible.',
      path: `/servicios/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/servicios/${service.slug}`,
    keywords: service.seo.keywords,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const isSoftwareApps = service.slug === 'software-y-apps';

  return (
    <>
      <ServiceHero service={service} />
      <ServiceLiveDemoBanner slug={service.slug} />

      {isSoftwareApps ? (
        <>
          <SoftwareAppsShowcase />
          <SoftwareQuotationSection />
          <ServiceFeatures service={service} />
        </>
      ) : (
        <>
          <ServiceFeatures service={service} />
          <PricingPlans serviceName={service.shortName} plans={service.plans} />

          <section className="py-14 sm:py-18">
            <Container>
              <SectionTitle
                eyebrow="Proceso de contratación"
                title="Cómo implementamos este servicio"
                align="center"
              />
              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {processStepsData.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-5"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0073F7] text-xs font-bold text-white">
                      {step.step}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-[#172033]">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </>
      )}

      <ServiceFAQ faqs={service.faqs} />
      <CTASection
        title={
          isSoftwareApps
            ? '¿Tienes una idea o proyecto de software a medida?'
            : `¿Quieres implementar ${service.shortName} en tu negocio?`
        }
        description={
          isSoftwareApps
            ? 'Escríbenos por WhatsApp, evaluamos tus requerimientos técnicos y te entregamos una cotización detallada sin costo.'
            : 'Escríbenos por WhatsApp, revisamos lo que necesitas y te confirmamos el plan ideal y tiempos de entrega.'
        }
        whatsappMessage={service.whatsappMessage}
      />
    </>
  );
}
