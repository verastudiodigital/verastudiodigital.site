import { Check } from 'lucide-react';
import type { ServicePlan } from '@/types/service';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

interface PricingPlansProps {
  serviceName: string;
  plans: ServicePlan[];
}

export function PricingPlans({ serviceName, plans }: PricingPlansProps) {
  return (
    <section id="planes" className="border-y border-[#E2E8F0] bg-white py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Planes y precios en bolivianos"
          title={`Planes iniciales para ${serviceName}`}
          description="Elige el alcance que mejor se adapte al momento actual de tu negocio. Todos los valores están expresados en bolivianos (Bs)."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const whatsappUrl = buildWhatsAppUrl(plan.whatsappMessage);

            return (
              <article
                key={plan.id}
                className={cn(
                  'flex h-full flex-col rounded-2xl border p-6 sm:p-8',
                  plan.highlighted
                    ? 'border-[#0073F7] bg-[#F5F8FC] shadow-md ring-1 ring-[#0073F7]'
                    : 'border-[#E2E8F0] bg-white'
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-[#172033]">{plan.name}</h3>
                  {plan.highlighted ? <Badge variant="blue">Más solicitado</Badge> : null}
                </div>

                <div className="mt-4">
                  <p className="text-3xl font-extrabold text-[#0073F7]">{plan.priceLabel}</p>
                  {plan.billingNote ? (
                    <p className="mt-1 text-xs font-medium text-[#64748B]">
                      {plan.billingNote}
                    </p>
                  ) : null}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#64748B]">{plan.summary}</p>

                <ul className="mt-6 space-y-3 border-t border-[#E2E8F0] pt-6">
                  {plan.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#172033]">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#0073F7]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-7">
                  {whatsappUrl ? (
                    <Button
                      href={whatsappUrl}
                      external
                      variant={plan.highlighted ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Solicitar este plan</span>
                    </Button>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
