import { AlertCircle, CheckCircle2, Info, Sparkles, XCircle } from 'lucide-react';
import type { ServiceItem } from '@/types/service';
import { Container } from '@/components/ui/Container';

interface ServiceFeaturesProps {
  service: ServiceItem;
}

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-14 sm:py-18">
      <Container className="space-y-12">
        {/* Problemas y Beneficios */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-[#063B79]">
              <AlertCircle className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#172033]">Problemas que resuelve</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {service.problemsSolved.map((problem) => (
                <li
                  key={problem}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#64748B] sm:text-base"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0073F7]"
                    aria-hidden="true"
                  />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-[#0073F7]">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-xl font-bold text-[#172033]">Beneficios para tu negocio</h2>
            </div>
            <ul className="mt-5 space-y-3">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[#172033] sm:text-base"
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
        </div>

        {/* Características y Ejemplos prácticos si existen */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#172033]">
            Características del servicio
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl bg-[#F5F8FC] p-4 text-sm font-medium text-[#172033]"
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#0073F7]"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {service.practicalExamples && service.practicalExamples.length > 0 ? (
            <div className="mt-8 border-t border-[#E2E8F0] pt-6">
              <h3 className="text-base font-bold text-[#172033]">
                Ejemplos de aplicaciones prácticas
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.practicalExamples.map((example) => (
                  <span
                    key={example}
                    className="rounded-lg border border-[#E2E8F0] bg-[#F5F8FC] px-3 py-1.5 text-xs font-medium text-[#172033]"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Qué incluye y qué no incluye */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#172033]">Qué incluye</h2>
            <ul className="mt-4 space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#172033]">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0073F7]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#172033]">Qué no incluye</h2>
            <ul className="mt-4 space-y-3">
              {service.notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#64748B]">
                  <XCircle
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#64748B]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {service.clarificationNote ? (
          <div className="flex items-start gap-3 rounded-2xl border border-[#0073F7]/25 bg-[#0073F7]/5 p-5 text-sm leading-relaxed text-[#172033]">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#0073F7]" aria-hidden="true" />
            <p>{service.clarificationNote}</p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
