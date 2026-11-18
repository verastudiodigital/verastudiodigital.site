import {
  Check,
  FileText,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface QuotationScope {
  id: string;
  name: string;
  tagline: string;
  scopeNote: string;
  icon: typeof Smartphone;
  deliverables: string[];
  whatsappMessage: string;
  highlighted?: boolean;
}

const scopes: QuotationScope[] = [
  {
    id: 'app-movil',
    name: 'Aplicación Móvil Android / MVP',
    tagline: 'Apps nativas para celular orientadas a control comercial, notificaciones o cobros.',
    scopeNote: 'Sin precio de referencia · Se evalúa según pantallas y lógica requerida',
    icon: Smartphone,
    deliverables: [
      'Levantamiento de requerimientos y arquitectura UX/UI para celular',
      'Desarrollo de lógica funcional y componentes móviles nativos',
      'Conexión con base de datos en la nube y notificaciones',
      'Generación de APK / AAB y preparación para Google Play Store',
      'Garantía técnica y capacitación de uso para tu equipo',
    ],
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera cotizar el desarrollo de una Aplicación Móvil Android para mi negocio.',
  },
  {
    id: 'saas-web',
    name: 'Plataforma Web SaaS & Sistema Administrativo',
    tagline: 'Sistemas en la nube con panel de control, bases de datos y acceso multidispositivo.',
    scopeNote: 'Sin precio de referencia · Se evalúa según módulos y volumen de usuarios',
    icon: Layers,
    highlighted: true,
    deliverables: [
      'Desarrollo web moderno con Next.js, React y base de datos cloud',
      'Panel de administración con roles, permisos y métricas en vivo',
      'Módulos a medida (reservas, inventario, logística o catálogos dinámicos)',
      'Despliegue en la nube con dominio propio, SSL y seguridad',
      'Garantía técnica de funcionamiento y soporte continuo',
    ],
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera cotizar una Plataforma Web SaaS similar a MiSalón o Panito.',
  },
  {
    id: 'solucion-integral',
    name: 'Solución Integral & Arquitectura Empresarial',
    tagline: 'Ecosistema completo que une app móvil para usuarios y panel web administrativo.',
    scopeNote: 'Sin precio de referencia · Se evalúa según el ecosistema completo',
    icon: Sparkles,
    deliverables: [
      'Arquitectura escalable: App móvil + Panel web administrativo sincronizados',
      'Integración de mapas GPS, alertas automáticas o pasarelas de pago',
      'Base de datos centralizada de alto rendimiento y copias de seguridad',
      'Entrega del 100% del código fuente y propiedad absoluta de tus datos',
      'Capacitación técnica completa y soporte prioritario',
    ],
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera una cotización personalizada para una Solución Integral de Software y Apps.',
  },
];

export function SoftwareQuotationSection() {
  return (
    <section id="cotizacion" className="border-t border-[#E2E8F0] bg-white py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Desarrollo de Software a Medida"
          title="¿Tienes una idea o proyecto? Lo cotizamos según tu alcance"
          description="En desarrollo de software y aplicaciones no existen precios genéricos ni tarifas estándar de referencia: cada sistema responde a requerimientos técnicos y comerciales únicos. Evaluamos tus necesidades y te entregamos un presupuesto cerrado con cronograma por fases."
          align="center"
        />

        {/* Nota explicativa de transparencia */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-200/80 bg-blue-50/70 p-4 sm:p-5 text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#063B79]">
            <ShieldCheck className="h-4 w-4 text-[#0073F7]" />
            <span>Presupuesto personalizado · Cero costos ocultos · Pagos 50/50</span>
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[#334155] leading-relaxed">
            Sin tarifas de referencia engañosas. Cada cotización detalla exactamente las pantallas,
            módulos, tecnologías y plazos de entrega antes de iniciar.
          </p>
        </div>

        {/* 3 Tarjetas de Alcance */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {scopes.map((scope) => {
            const whatsappUrl = buildWhatsAppUrl(scope.whatsappMessage);
            const Icon = scope.icon;

            return (
              <article
                key={scope.id}
                className={`flex flex-col justify-between rounded-3xl border p-6 sm:p-8 transition-all ${
                  scope.highlighted
                    ? 'border-[#0073F7] bg-[#F5F8FC] shadow-xl ring-2 ring-[#0073F7]/20'
                    : 'border-slate-200 bg-white shadow-lg hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0073F7]/10 text-[#0073F7]">
                      <Icon className="h-5 w-5" />
                    </div>
                    {scope.highlighted ? (
                      <span className="rounded-full bg-[#0073F7] px-3 py-1 text-xs font-bold text-white shadow-sm">
                        Más solicitado
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-xl font-black text-[#0F172A] leading-snug">
                    {scope.name}
                  </h3>

                  {/* Etiqueta de precio: 100% Bajo cotización */}
                  <div className="mt-4 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
                    <p className="text-2xl font-black text-[#0073F7]">Bajo cotización</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-[#64748B]">
                      {scope.scopeNote}
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#475569]">{scope.tagline}</p>

                  <div className="mt-6 border-t border-slate-200/80 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Qué incluye la propuesta:
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {scope.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-[#1E293B]"
                        >
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0073F7]/10 text-[#0073F7] mt-0.5">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200/80">
                  {whatsappUrl ? (
                    <Button
                      href={whatsappUrl}
                      external
                      variant={scope.highlighted ? 'primary' : 'outline'}
                      size="lg"
                      className="w-full rounded-xl"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Cotizar por WhatsApp</span>
                    </Button>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {/* 4 Pasos del proceso de cotización */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 sm:p-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#475569]">
              <FileText className="h-3.5 w-3.5 text-[#0073F7]" />
              Metodología clara
            </span>
            <h4 className="mt-3 text-xl sm:text-2xl font-black text-[#0F172A]">
              Cómo funciona la cotización y desarrollo de tu proyecto
            </h4>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0073F7] text-xs font-black text-white">
                01
              </span>
              <p className="mt-3 text-sm font-bold text-[#0F172A]">Consulta inicial sin costo</p>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                Nos explicas tu negocio, la necesidad operativa o la idea de app que quieres crear.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0073F7] text-xs font-black text-white">
                02
              </span>
              <p className="mt-3 text-sm font-bold text-[#0F172A]">Especificación y alcance</p>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                Definimos juntos las pantallas, módulos, integraciones técnicas y tecnologías
                adecuadas.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0073F7] text-xs font-black text-white">
                03
              </span>
              <p className="mt-3 text-sm font-bold text-[#0F172A]">Presupuesto y cronograma</p>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                Te entregamos una propuesta económica detallada por etapas, con plazos reales y
                compromiso formal.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-xs font-black text-white">
                04
              </span>
              <p className="mt-3 text-sm font-bold text-[#0F172A]">50% inicio / 50% entrega</p>
              <p className="mt-1 text-xs text-[#64748B] leading-relaxed">
                Inicias con el 50% y cancelas el saldo restante únicamente cuando el software esté
                probado y funcionando.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
