import { servicesData } from '@/data/services';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ServiceCard } from '@/components/services/ServiceCard';

export function ServicesSection() {
  return (
    <section id="servicios" className="border-t border-[#E2E8F0] bg-[#F5F8FC] py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Nuestros servicios y soluciones digitales"
          title="Herramientas digitales con tiempos de entrega claros y precios en bolivianos."
          description="Diseñamos cada solución para resolver una necesidad comercial concreta: desde presencia web y atención en WhatsApp hasta automatización y plataformas a medida."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
