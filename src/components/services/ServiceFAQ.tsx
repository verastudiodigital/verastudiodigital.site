import type { FAQItem } from '@/types/site';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Accordion } from '@/components/ui/Accordion';

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export function ServiceFAQ({ faqs }: ServiceFAQProps) {
  if (faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-14 sm:py-18">
      <Container>
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Dudas habituales sobre este servicio"
          align="center"
        />

        <div className="mx-auto mt-8 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </Container>
    </section>
  );
}
