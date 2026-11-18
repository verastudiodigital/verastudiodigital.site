'use client';

import { useMemo, useState } from 'react';
import {
  BookOpenCheck,
  Calculator,
  Check,
  CheckCircle2,
  Globe,
  MessageSquareText,
  Palette,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLabel: string;
  description: string;
  deliverables: string[];
  icon: typeof Globe;
  defaultChecked?: boolean;
}

const serviceOptions: ServiceOption[] = [
  {
    id: 'web',
    name: 'Página Web Corporativa',
    category: 'Presencia en internet',
    price: 700,
    priceLabel: 'Bs 700',
    description: 'Sitio web moderno con dominio propio, adaptable a celular y con botón a WhatsApp.',
    deliverables: ['Diseño corporativo exclusivo', 'Optimización para Google', 'Conexión directa a WhatsApp'],
    icon: Globe,
    defaultChecked: true,
  },
  {
    id: 'catalogo',
    name: 'Catálogo Digital para Celular',
    category: 'Ventas directas',
    price: 350,
    priceLabel: 'Bs 350',
    description: 'Tus productos organizados en un solo enlace liviano con fotos, precios y botón de pedido.',
    deliverables: ['Categorización clara de productos', 'Precios en bolivianos actualizables', 'Botón «Pedir por WhatsApp»'],
    icon: BookOpenCheck,
    defaultChecked: true,
  },
  {
    id: 'whatsapp',
    name: 'Configuración WhatsApp Business',
    category: 'Atención comercial',
    price: 150,
    priceLabel: 'Bs 150',
    description: 'Perfil comercial completo con respuestas rápidas, catálogo nativo y mensajes automáticos.',
    deliverables: ['Perfil comercial verificado', 'Respuestas automáticas nativas', 'Etiquetas de clientes y pedidos'],
    icon: MessageSquareText,
    defaultChecked: true,
  },
  {
    id: 'redes',
    name: 'Pack Mensual de Redes Sociales',
    category: 'Contenido y marca',
    price: 350,
    priceLabel: 'Bs 350 / mes',
    description: '8 piezas gráficas profesionales al mes con estética comercial para Facebook e Instagram.',
    deliverables: ['8 diseños mensuales listos', 'Formatos para feed y estados', 'Diseño alineado a tu identidad'],
    icon: Palette,
  },
  {
    id: 'admin',
    name: 'Automatización y Control Diario',
    category: 'Gestión interna',
    price: 250,
    priceLabel: 'Bs 250',
    description: 'Herramienta para registrar ingresos diarios, cobros QR y exportación a archivos Excel.',
    deliverables: ['Totalizador diario de ventas', 'Control de cobros QR y efectivo', 'Exportación a Excel en un toque'],
    icon: TrendingUp,
  },
];

export function BudgetCalculator() {
  const [selectedIds, setSelectedIds] = useState<string[]>(['web', 'catalogo', 'whatsapp']);

  const toggleOption = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedServices = useMemo(() => {
    return serviceOptions.filter((opt) => selectedIds.includes(opt.id));
  }, [selectedIds]);

  const totalAmount = useMemo(() => {
    return selectedServices.reduce((sum, s) => sum + s.price, 0);
  }, [selectedServices]);

  // Mensaje preparado para enviar a WhatsApp
  const whatsappUrl = useMemo(() => {
    if (selectedServices.length === 0) {
      return buildWhatsAppUrl(
        'Hola Vera Studio Digital, quisiera consultar sobre un presupuesto personalizado para mi negocio.'
      );
    }

    const itemsText = selectedServices
      .map((s) => `• ${s.name} (${s.priceLabel})`)
      .join('\n');

    const message = `Hola Vera Studio Digital, coticé en su sitio web los siguientes servicios para mi negocio:\n\n${itemsText}\n\nPresupuesto estimado: Bs ${totalAmount}\n\nQuisiera coordinar detalles para iniciar el proyecto.`;

    return buildWhatsAppUrl(message);
  }, [selectedServices, totalAmount]);

  return (
    <section id="cotizador" className="border-t border-[#E2E8F0] bg-white py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Calculadora de presupuesto"
          title="Calcula el costo estimado de tu proyecto al instante."
          description="Selecciona los servicios que necesita tu negocio para ver el total estimado en bolivianos y enviarnos la cotización directa a WhatsApp sin compromiso."
          align="center"
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
          {/* Lado izquierdo: Selector interactivo de servicios */}
          <div className="space-y-3.5 lg:col-span-7">
            {serviceOptions.map((option) => {
              const isChecked = selectedIds.includes(option.id);
              const Icon = option.icon;

              return (
                <div
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      toggleOption(option.id);
                    }
                  }}
                  className={`group relative flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-all duration-200 select-none ${
                    isChecked
                      ? 'border-[#0073F7] bg-[#F5F8FC] shadow-md shadow-[#0073F7]/5 ring-1 ring-[#0073F7]'
                      : 'border-[#E2E8F0] bg-white hover:border-[#0073F7]/50 hover:bg-[#F8FAFC]'
                  }`}
                >
                  {/* Casilla de verificación visual */}
                  <div
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all ${
                      isChecked
                        ? 'border-[#0073F7] bg-[#0073F7] text-white'
                        : 'border-[#CBD5E1] bg-white group-hover:border-[#0073F7]'
                    }`}
                  >
                    {isChecked ? <Check className="h-4 w-4 stroke-[3]" /> : null}
                  </div>

                  {/* Detalle del servicio */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`h-4 w-4 ${isChecked ? 'text-[#0073F7]' : 'text-[#64748B]'}`} />
                        <h3 className="text-base font-bold text-[#172033]">{option.name}</h3>
                      </div>
                      <span className="rounded-full bg-[#0073F7]/10 px-3 py-0.5 text-xs font-extrabold text-[#0073F7]">
                        {option.priceLabel}
                      </span>
                    </div>

                    <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                      {option.description}
                    </p>

                    <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium text-[#172033]">
                      {option.deliverables.map((item) => (
                        <span key={item} className="inline-flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-[#0073F7]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Lado derecho: Tarjeta de Resumen y Conversión a WhatsApp */}
          <div className="sticky top-24 lg:col-span-5">
            <div className="rounded-3xl border-2 border-[#0073F7]/30 bg-gradient-to-b from-[#F5F8FC] to-white p-7 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0073F7] text-white">
                    <Calculator className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-bold text-[#172033]">Resumen de tu Cotización</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-600">
                  <Sparkles className="h-3 w-3" />
                  Estimado en vivo
                </span>
              </div>

              {/* Lista de servicios seleccionados */}
              <div className="mt-5 space-y-2.5 min-h-[140px]">
                {selectedServices.length === 0 ? (
                  <p className="py-8 text-center text-xs text-[#64748B]">
                    Selecciona al menos un servicio del panel izquierdo para calcular tu presupuesto.
                  </p>
                ) : (
                  selectedServices.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between text-xs text-[#172033]"
                    >
                      <span className="truncate pr-2 font-medium">{service.name}</span>
                      <span className="font-bold text-[#0073F7]">{service.priceLabel}</span>
                    </div>
                  ))
                )}
              </div>

              {/* Totalizador */}
              <div className="mt-6 border-t border-[#E2E8F0] pt-5">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                      Presupuesto estimado:
                    </span>
                    <p className="text-[11px] text-[#64748B]">Tarifas transparentes en bolivianos</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-[#172033]">
                      Bs {totalAmount}
                    </span>
                  </div>
                </div>

                {/* Botón de envío a WhatsApp */}
                <div className="mt-6">
                  {whatsappUrl ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0073F7] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0073F7]/25 transition-all hover:bg-[#063B79] hover:scale-102"
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      <span>Enviar presupuesto a WhatsApp</span>
                    </a>
                  ) : null}
                </div>

                <p className="mt-3 text-center text-[11px] leading-relaxed text-[#64748B]">
                  Sin compromiso. Conversaremos sobre tus requerimientos y ajustaremos la propuesta final a tu medida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
