import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';
import { servicesData } from '@/data/services';
import { processStepsData } from '@/data/industries';
import { homeFaqs } from '@/data/faqs';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ServiceCard } from '@/components/services/ServiceCard';
import { Accordion } from '@/components/ui/Accordion';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

export const metadata: Metadata = createPageMetadata({
  title: 'Servicios Digitales para Negocios en Bolivia | Vera Studio Digital',
  description:
    'Conoce nuestros servicios: WhatsApp Business, catálogos digitales, contenido para redes sociales, automatización administrativa, desarrollo web y software a medida en Cochabamba y Bolivia.',
  path: '/servicios',
});

export default function ServiciosPage() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola Vera Studio Digital, quisiera recibir orientación para elegir el servicio adecuado para mi negocio.'
  );

  const generalBenefits = [
    'Precios claros en bolivianos desde el primer contacto.',
    'Soluciones adaptadas al tamaño real de tu negocio.',
    'Enfoque práctico: combinamos presencia visual con control comercial.',
    'Atención en Cochabamba y cobertura remota en toda Bolivia.',
  ];

  return (
    <>
      <section className="bg-[#0073F7] py-14 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="white">Soluciones integrales para negocios</Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Servicios digitales pensados para vender mejor y trabajar con orden.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              No solo diseñamos la imagen de tu marca. Implementamos herramientas reales
              para que tus clientes te encuentren, consulten rápido por WhatsApp y puedas
              controlar tus operaciones comerciales.
            </p>
            {whatsappUrl ? (
              <div className="mt-7">
                <Button href={whatsappUrl} external variant="white" size="lg">
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Consultar por WhatsApp</span>
                </Button>
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Nuestras soluciones y áreas de servicio"
            title="Elige la solución que tu empresa necesita hoy"
            description="Puedes contratar un servicio puntual o combinar varias soluciones por etapas según tus objetivos."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E2E8F0] bg-white py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Por qué elegirnos"
                title="Claridad técnica y comercial en cada entrega"
                description="Trabajamos con alcance definido, sin promesas irreales y con acompañamiento cercano."
              />
              <ul className="mt-6 space-y-3">
                {generalBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm font-medium text-[#172033] sm:text-base"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0073F7]"
                      aria-hidden="true"
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F5F8FC] p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#172033]">Proceso de contratación</h2>
              <div className="mt-5 space-y-4">
                {processStepsData.map((item) => (
                  <div key={item.step} className="flex items-start gap-3.5">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0073F7] text-xs font-bold text-white">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#172033]">{item.title}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#64748B] sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="Dudas generales sobre contratación"
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={homeFaqs} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
