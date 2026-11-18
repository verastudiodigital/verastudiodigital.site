import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industriesData } from '@/data/industries';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { IndustryIcon } from '@/components/ui/ServiceIcon';

export function IndustriesSection() {
  return (
    <section className="border-t border-[#E2E8F0] bg-white py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Adaptabilidad comercial"
          title="Herramientas adaptadas a la forma real de operar de tu sector."
          description="Comercios, distribuidoras, restaurantes y profesionales en Bolivia: adaptamos la tecnología a tu flujo diario de ventas y atención."
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industriesData.map((industry) => (
            <article
              key={industry.id}
              className="group flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-[#F5F8FC]/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0073F7]/50 hover:bg-white hover:shadow-xl hover:shadow-[#0073F7]/5"
            >
              <div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0073F7]/10 to-[#0073F7]/20 text-[#0073F7] transition-all group-hover:scale-110 group-hover:bg-[#0073F7] group-hover:text-white">
                  <IndustryIcon name={industry.iconName} className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#172033] group-hover:text-[#0073F7] transition-colors">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {industry.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E2E8F0]/50">
                <span className="text-xs font-bold text-[#0073F7] flex items-center gap-1">
                  Atención adaptada ➔
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Callout de confianza para otros rubros */}
        <div className="mt-10 rounded-2xl border border-[#0073F7]/20 bg-[#F5F8FC] p-5 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm font-semibold text-[#172033]">
            ¿Tu rubro o modelo comercial tiene necesidades especiales?
          </p>
          <Link
            href="/contacto"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#0073F7] hover:text-[#063B79] sm:mt-0"
          >
            <span>Consultar asesoramiento personalizado</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
