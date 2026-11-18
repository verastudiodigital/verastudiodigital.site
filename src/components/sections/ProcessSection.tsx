import { CheckCircle2, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';

interface ProcessStepDetail {
  number: string;
  title: string;
  timeframe: string;
  description: string;
  paymentNote: string;
}

const detailedSteps: ProcessStepDetail[] = [
  {
    number: '01',
    title: 'Diagnóstico y cotización',
    timeframe: 'Mismo día (< 24 hrs)',
    description:
      'Nos cuentas qué necesita tu negocio por WhatsApp. Analizamos tu requerimiento y te enviamos una propuesta clara con precio cerrado y fecha de entrega.',
    paymentNote: 'Asesoramiento 100% gratuito y sin compromiso',
  },
  {
    number: '02',
    title: 'Anticipo del 50% y contenido',
    timeframe: 'Día 1',
    description:
      'Abonas el 50% de anticipo por QR o transferencia bancaria y recopilamos la información básica de tu negocio (logo, fotos o lista de productos).',
    paymentNote: 'Pagos seguros por QR de bancos en Bolivia',
  },
  {
    number: '03',
    title: 'Desarrollo y diseño a medida',
    timeframe: '3 a 7 días hábiles',
    description:
      'Construimos tu página web, catálogo, WhatsApp Business o sistema administrativo cuidando que sea rápido, fácil de usar y adaptable a celulares.',
    paymentNote: 'Avance transparente con enlace de prueba privado',
  },
  {
    number: '04',
    title: 'Prueba, entrega y 50% final',
    timeframe: 'Puesta en marcha',
    description:
      'Revisamos contigo que todo funcione a la perfección, te explicamos cómo administrarlo o usarlo, y una vez conforme cancelas el 50% restante.',
    paymentNote: 'Soporte y garantía incluidos tras la entrega',
  },
];

export function ProcessSection() {
  return (
    <section className="border-t border-[#E2E8F0] bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Transparencia y metodología"
          title="Cómo trabajamos: tiempos de entrega reales y pagos 50/50."
          description="Sin sorpresas ni cobros ocultos. Conoce exactamente cómo avanza tu proyecto desde el primer mensaje hasta la entrega final."
          align="center"
        />

        {/* Pasos ordenados en cuadrícula amplia con información comercial */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {detailedSteps.map((step) => (
            <article
              key={step.number}
              className="group flex flex-col justify-between rounded-3xl border-2 border-[#E2E8F0] bg-[#F5F8FC]/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0073F7] hover:bg-white hover:shadow-xl"
            >
              <div>
                {/* Cabecera con número grande y tiempo */}
                <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0073F7] text-lg font-black text-white shadow-md shadow-[#0073F7]/20">
                    {step.number}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0073F7]">
                    <Clock className="h-3.5 w-3.5" />
                    {step.timeframe}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#172033] group-hover:text-[#0073F7] transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  {step.description}
                </p>
              </div>

              {/* Nota de pago o garantía */}
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-xs font-semibold text-[#172033]">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                  <span>{step.paymentNote}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
