import { homeFaqs } from '@/data/faqs';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Accordion } from '@/components/ui/Accordion';

export function FAQSection() {
  return (
    <section className="border-t border-[#E2E8F0] bg-[#F5F8FC] py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Respuestas directas sobre tiempos, pagos y soporte."
          description="Resolvemos las dudas habituales antes de comenzar tu proyecto para que trabajes con total claridad y tranquilidad."
          align="center"
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion items={homeFaqs} />
        </div>
      </Container>
    </section>
  );
}
