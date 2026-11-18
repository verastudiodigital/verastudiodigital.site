import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Code2, Megaphone, Workflow } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { industriesData, processStepsData } from '@/data/industries';
import { createPageMetadata } from '@/lib/seo';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { IndustryIcon } from '@/components/ui/ServiceIcon';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = createPageMetadata({
  title: 'Nosotros | Tecnología, diseño y soluciones | Vera Studio Digital',
  description:
    'Conoce a Vera Studio Digital en Cochabamba, Bolivia: integramos marketing digital, desarrollo web y automatización administrativa para impulsar negocios.',
  path: '/nosotros',
});

export default function NosotrosPage() {
  const pillars = [
    {
      icon: Megaphone,
      title: 'Marketing y comunicación digital',
      description:
        'Ayudamos a que los negocios presenten sus productos y servicios de forma clara, atractiva y consistente en canales digitales.',
    },
    {
      icon: Code2,
      title: 'Desarrollo web y presencia en internet',
      description:
        'Construimos sitios web rápidos, ordenados y adaptables a teléfonos móviles para que las empresas sean encontradas en Google.',
    },
    {
      icon: Workflow,
      title: 'Automatización y soluciones administrativas',
      description:
        'Creamos herramientas prácticas para registrar ventas, controlar gastos, seguir inventarios y ordenar la gestión comercial diaria.',
    },
  ];

  const philosophy = [
    'Hablar claro desde el principio: explicamos qué incluye cada servicio y qué requiere cotización aparte.',
    'Priorizar soluciones útiles por encima de adornos innecesarios.',
    'Entregar herramientas que el dueño o encargado del negocio pueda usar y aprovechar de verdad.',
    'Construir bases ordenadas para que el negocio pueda escalar por etapas según su crecimiento.',
  ];

  return (
    <>
      <section className="bg-[#0073F7] py-14 text-white sm:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="white">
                {siteConfig.city}, {siteConfig.country}
              </Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Tecnología, diseño y soluciones para los negocios.
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                Vera Studio Digital integra marketing digital, desarrollo web y
                herramientas tecnológicas para resolver necesidades comerciales y
                administrativas reales de negocios en Cochabamba y toda Bolivia.
              </p>
            </div>
            <div className="flex justify-start lg:col-span-4 lg:justify-end">
              <div className="rounded-3xl border border-white/25 bg-white/10 p-6">
                <Image
                  src={siteConfig.logo.square}
                  alt={siteConfig.logo.alt}
                  width={140}
                  height={140}
                  className="h-32 w-32 rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#172033]">Quiénes somos</h2>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                Vera Studio Digital es un estudio digital independiente con base en
                Cochabamba, Bolivia, enfocado en acompañar a pequeñas y medianas
                empresas, comercios, profesionales independientes y emprendedores en su
                crecimiento digital y operativo.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#64748B]">
                No nos limitamos a hacer publicidad o piezas gráficas sueltas: combinamos
                diseño, desarrollo web y herramientas administrativas para ofrecer
                soluciones completas y útiles para el día a día del negocio.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#172033]">
                Qué problemas buscamos resolver
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                Muchos negocios venden buenos productos o brindan excelentes servicios,
                pero pierden oportunidades por no contar con una presencia web clara, por
                enviar información desordenada en chats o por llevar sus ventas e
                inventarios en apuntes difíciles de controlar.
              </p>
              <p className="mt-3 text-base leading-relaxed text-[#64748B]">
                Nuestro propósito es transformar ese desorden en canales de atención
                profesionales, herramientas claras y procesos más ágiles.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <SectionTitle
              eyebrow="Nuestra propuesta de valor"
              title="Tres áreas integradas en un solo lugar"
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <article
                    key={pillar.title}
                    className="rounded-2xl border border-[#E2E8F0] bg-white p-6"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0073F7]/10 text-[#0073F7]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-[#172033]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                      {pillar.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#E2E8F0] bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="Cómo trabajamos"
                title="Metodología directa y transparente"
              />
              <div className="mt-6 space-y-4">
                {processStepsData.map((step) => (
                  <div
                    key={step.step}
                    className="flex items-start gap-4 rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] p-4"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0073F7] text-xs font-bold text-white">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#172033]">{step.title}</h3>
                      <p className="mt-1 text-sm text-[#64748B]">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow="Filosofía de servicio"
                title="Compromiso con la honestidad comercial"
              />
              <ul className="mt-6 space-y-4">
                {philosophy.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 text-sm leading-relaxed text-[#172033]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#0073F7]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Sectores a los que atendemos"
            title="Negocios y rubros con los que trabajamos"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industriesData.map((industry) => (
              <div
                key={industry.id}
                className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4"
              >
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0073F7]/10 text-[#0073F7]">
                  <IndustryIcon name={industry.iconName} className="h-4 w-4" />
                </div>
                <span className="text-sm font-semibold text-[#172033]">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
