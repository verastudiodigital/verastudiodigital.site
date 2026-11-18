import { CheckCircle2 } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

interface CTASectionProps {
  title?: string;
  description?: string;
  whatsappMessage?: string;
}

export function CTASection({
  title = 'Hablemos de tu proyecto hoy mismo.',
  description = 'Escríbenos por WhatsApp con tu idea o requerimiento. Evaluaremos tu caso y te enviaremos una propuesta clara, transparente y sin compromiso.',
  whatsappMessage,
}: CTASectionProps) {
  const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#063B79] via-[#094892] to-[#0073F7] px-6 py-14 text-center text-white shadow-2xl sm:px-12 sm:py-18">
          {/* Círculos decorativos con efecto de luz */}
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              Contacto directo y cotizaciones
            </span>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-tight">
              {title}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3.5">
              {whatsappUrl ? (
                <Button
                  href={whatsappUrl}
                  external
                  variant="white"
                  size="lg"
                  className="shadow-xl hover:scale-105 transition-transform"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Hablar directo por WhatsApp</span>
                </Button>
              ) : null}
              <Button href="/contacto" variant="ghost-white" size="lg">
                Completar formulario
              </Button>
            </div>

            {/* Garantías de confianza */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/20 pt-6 text-xs font-medium text-white/85 sm:text-sm">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Atención para toda Bolivia
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Respuesta en menos de 24 horas
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Cotización clara sin costos ocultos
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
