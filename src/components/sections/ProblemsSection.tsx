'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  Globe,
  Lock,
  MessageSquareText,
  Palette,
  Search,
  ShoppingBag,
  XCircle,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

interface ComparisonItem {
  id: string;
  tabTitle: string;
  tabIcon: typeof Globe;
  serviceSlug: string;
  problem: {
    badge: string;
    title: string;
    impact: string;
  };
  solution: {
    badge: string;
    title: string;
    summary: string;
    benefits: string[];
    buttonText: string;
  };
}

const comparisonData: ComparisonItem[] = [
  {
    id: 'web',
    tabTitle: 'Presencia en Internet',
    tabIcon: Globe,
    serviceSlug: 'diseno-web',
    problem: {
      badge: 'Sin sitio web corporativo',
      title: 'Tus clientes te buscan en Google y no encuentran tu negocio',
      impact:
        'Cuando un cliente busca tus productos o servicios en Cochabamba o Bolivia y no apareces con una página web confiable, asume que el negocio es informal o termina comprándole a tu competencia directa.',
    },
    solution: {
      badge: 'Página Web Profesional de Vera Studio',
      title: 'Tu negocio visible en Google con cotizaciones directas a WhatsApp',
      summary:
        'Diseñamos una página web moderna, rápida y con dominio propio que explica tus servicios con claridad, genera confianza inmediata y canaliza a los interesados directo a tu chat.',
      benefits: [
        'Aparece en Google con información oficial de tu empresa',
        'Botones de contacto y cotización directa por WhatsApp',
        '100% optimizada para cargar en celulares al instante',
      ],
      buttonText: 'Ver detalles de Páginas Web',
    },
  },
  {
    id: 'catalogo',
    tabTitle: 'Catálogo de Productos',
    tabIcon: BookOpenCheck,
    serviceSlug: 'catalogos-digitales',
    problem: {
      badge: 'Fotos sueltas por WhatsApp',
      title: 'Envías 20 fotos sueltas y repites precios todo el día',
      impact:
        'Saturar la memoria del celular de tus clientes con fotos aisladas y escribir precios uno por uno agota tu tiempo, genera confusión con el stock y provoca que los compradores se desanimen antes de pagar.',
    },
    solution: {
      badge: 'Catálogo Digital Interactivo',
      title: 'Un solo enlace con tus productos organizados y precios en Bolivianos',
      summary:
        'Creamos un catálogo visual accesible desde cualquier celular donde tus clientes navegan por categorías, ven precios actualizados y seleccionan lo que quieren para pedirlo en un toque.',
      benefits: [
        'Comparte todo tu stock en un solo link liviano',
        'Precios claros y actualizables sin volver a mandar fotos',
        'Botón «Pedir por WhatsApp» en cada producto',
      ],
      buttonText: 'Ver detalles de Catálogos Digitales',
    },
  },
  {
    id: 'whatsapp',
    tabTitle: 'Atención en WhatsApp',
    tabIcon: MessageSquareText,
    serviceSlug: 'whatsapp-business',
    problem: {
      badge: 'Cuenta personal y respuestas tardías',
      title: 'Consultas acumuladas y pedidos perdidos por responder tarde',
      impact:
        'Atender desde un WhatsApp personal sin horarios, sin respuestas rápidas y sin etiquetas hace que los mensajes queden olvidados. Un cliente que espera 2 horas casi siempre compra en otro lado.',
    },
    solution: {
      badge: 'WhatsApp Business Configurado',
      title: 'Atención inmediata y perfil comercial 100% profesional',
      summary:
        'Estructuramos tu cuenta de WhatsApp Business con catálogo nativo, respuestas rápidas a preguntas frecuentes, mensajes de bienvenida automáticos y etiquetas para no perder ningún pedido.',
      benefits: [
        'Respuesta instantánea las 24 horas del día',
        'Catálogo de servicios cargado directo en tu perfil',
        'Etiquetas para organizar clientes, pedidos y cobros',
      ],
      buttonText: 'Ver configuración de WhatsApp Business',
    },
  },
  {
    id: 'admin',
    tabTitle: 'Control de Ventas y Finanzas',
    tabIcon: BarChart3,
    serviceSlug: 'automatizacion-administrativa',
    problem: {
      badge: 'Cuadernos y apuntes dispersos',
      title: 'Anotaciones en papel sin saber cuánto ganas ni qué falta en stock',
      impact:
        'Llevar las cuentas de ventas diarias, cobros por QR (Yape/bancos) y compras en libretas o mensajes sueltos impide saber la ganancia real a fin de mes y provoca fugas de dinero.',
    },
    solution: {
      badge: 'Control Administrativo Práctico',
      title: 'Registro ágil de ventas, cobros QR y exportación a Excel',
      summary:
        'Implementamos herramientas digitales simples para que registres tus ingresos diarios, organices tus cobros por QR y obtengas reportes automáticos sin complicarte con sistemas difíciles.',
      benefits: [
        'Totalizador automático de ventas del día',
        'Control exacto de cobros QR en efectivo y bancos',
        'Exportación a Excel (CSV) con un solo toque',
      ],
      buttonText: 'Ver soluciones de Control Administrativo',
    },
  },
  {
    id: 'redes',
    tabTitle: 'Redes Sociales e Imagen',
    tabIcon: Palette,
    serviceSlug: 'redes-sociales',
    problem: {
      badge: 'Publicaciones improvisadas',
      title: 'Diseños descuidados y semanas enteras sin publicar',
      impact:
        'Publicar fotos borrosas, tipografías difíciles de leer o pasar semanas sin actividad hace que tu marca parezca inactiva o abandonada, restándole credibilidad frente a nuevos clientes.',
    },
    solution: {
      badge: 'Diseño de Contenido Mensual',
      title: 'Piezas gráficas coherentes que transmiten solidez y atraen clientes',
      summary:
        'Diseñamos publicaciones mensuales profesionales alineadas con la identidad de tu marca para comunicar ofertas, novedades y testimonios con estética comercial de alto impacto.',
      benefits: [
        'Diseños limpios con los colores y logo de tu negocio',
        'Planificación ordenada para mantener tu página activa',
        'Formatos adaptados para Facebook, Instagram y estados',
      ],
      buttonText: 'Ver planes de Redes Sociales',
    },
  },
];

export function ProblemsSection() {
  const [activeId, setActiveId] = useState<string>('web');

  const currentItem: ComparisonItem =
    comparisonData.find((item) => item.id === activeId) ?? comparisonData[0]!;

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Diagnóstico comercial"
          title="Tu negocio tiene desafíos reales. Así los transformamos en herramientas prácticas."
          description="Selecciona un obstáculo habitual para ver exactamente cómo lo resolvemos y qué diferencia genera en el día a día de tu negocio."
          align="center"
        />

        {/* 1. Selector interactivo horizontal (Pestañas superiores) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {comparisonData.map((item) => {
            const isActive = item.id === activeId;
            const Icon = item.tabIcon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer sm:text-sm ${
                  isActive
                    ? 'bg-[#0073F7] text-white shadow-lg shadow-[#0073F7]/25 scale-105'
                    : 'border border-[#E2E8F0] bg-[#F5F8FC] text-[#172033] hover:border-[#0073F7] hover:bg-white'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-[#0073F7]'}`} />
                <span>{item.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* 2. Gran Módulo Horizontal Comparativo: EL PROBLEMA vs LA SOLUCIÓN */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-2xl transition-all duration-300">
          <div className="grid lg:grid-cols-12">
            {/* LADO IZQUIERDO: EL PROBLEMA HABITUAL (5 columnas) */}
            <div className="flex flex-col justify-between border-b border-[#E2E8F0] bg-gradient-to-br from-[#FFF5F5] via-[#FFF9F9] to-[#F8FAFC] p-7 sm:p-10 lg:col-span-5 lg:border-b-0 lg:border-r">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-rose-700">
                  <AlertTriangle className="h-3.5 w-3.5 text-rose-600" aria-hidden="true" />
                  <span>El Problema Habitual</span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#172033] sm:text-2xl">
                  {currentItem.problem.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  {currentItem.problem.impact}
                </p>
              </div>

              {/* Imagen/Maqueta gráfica representativa del problema */}
              <div className="mt-6 rounded-2xl border border-rose-200/80 bg-white p-4 shadow-sm">
                <ProblemMockup id={currentItem.id} />
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs font-bold text-rose-700">
                <XCircle className="h-4 w-4 shrink-0 text-rose-600" />
                <span>Resultado: Pérdida de ventas, tiempo y clientes</span>
              </div>
            </div>

            {/* LADO DERECHO: LA SOLUCIÓN VERA STUDIO (7 columnas) */}
            <div className="flex flex-col justify-between bg-gradient-to-br from-white via-white to-[#F0F7FF] p-7 sm:p-10 lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                    <span>La Solución de Vera Studio</span>
                  </span>

                  <span className="text-xs font-bold text-[#0073F7]">
                    Solución Digital Aplicada
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-[#172033] sm:text-2xl">
                  {currentItem.solution.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  {currentItem.solution.summary}
                </p>

                {/* Imagen/Maqueta gráfica representativa de la solución */}
                <div className="mt-6 rounded-2xl border border-[#0073F7]/30 bg-white p-4 shadow-md">
                  <SolutionMockup id={currentItem.id} />
                </div>

                {/* Beneficios directos en viñetas */}
                <div className="mt-6 space-y-2 border-t border-[#E2E8F0] pt-4">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#172033]">
                    Lo que ganas con esta solución:
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {currentItem.solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-xs font-semibold text-[#172033]">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0073F7]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botón de acción hacia el servicio específico */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#E2E8F0] pt-6">
                <Link
                  href={`/servicios/${currentItem.serviceSlug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0073F7] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0073F7]/20 transition-all hover:bg-[#063B79] hover:scale-105"
                >
                  <span>{currentItem.solution.buttonText}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <p className="text-xs text-[#64748B]">
                  Asesoramiento e inicio en Bolivia
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ============================================================================
// COMPONENTES GRÁFICOS INTERACTIVOS DE APOYO (MOCKUPS PROBLEMA VS SOLUCIÓN)
// ============================================================================

function ProblemMockup({ id }: { id: string }) {
  switch (id) {
    case 'web':
      return (
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 border-b border-rose-100 pb-2">
            <Search className="h-3.5 w-3.5 text-rose-500" />
            <span className="text-xs font-bold text-[#172033]">Búsqueda en Google:</span>
            <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[10px] text-rose-800">
              «Tu Empresa Cochabamba»
            </span>
          </div>
          <div className="rounded-xl border border-dashed border-rose-300 bg-rose-50/50 p-4 text-center">
            <p className="text-xs font-bold text-rose-700">❌ Sin resultados encontrados</p>
            <p className="mt-1 text-[11px] text-[#64748B]">
              Los clientes no hallan horarios, teléfono ni dirección y eligen otra empresa.
            </p>
          </div>
        </div>
      );

    case 'catalogo':
      return (
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-rose-700">Chat saturado con 15 fotos sueltas:</p>
          <div className="grid grid-cols-4 gap-1.5">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-lg border border-rose-200 bg-rose-100/60 text-[10px] font-bold text-rose-700"
              >
                Foto {i}
              </div>
            ))}
          </div>
          <p className="rounded bg-rose-50 p-2 text-[11px] text-rose-800 font-medium">
            💬 Cliente: <span className="italic">«¿Cuánto cuesta el de la tercera foto? ¿Tiene stock?»</span> (esperando respuesta...)
          </p>
        </div>
      );

    case 'whatsapp':
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-rose-100 pb-2">
            <span className="text-xs font-bold text-[#172033]">WhatsApp Personal</span>
            <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-bold text-white">
              24 no leídos
            </span>
          </div>
          <div className="rounded-lg bg-rose-50 p-2.5 text-[11px] text-rose-900 space-y-1">
            <p className="font-semibold">⚠️ Mensaje de hace 3 horas sin contestar</p>
            <p className="text-[10px] text-rose-700">
              «Buenas, quisiera saber si tienen disponible el producto...»
            </p>
          </div>
        </div>
      );

    case 'admin':
      return (
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-rose-700">Apuntes en cuaderno y recibos sueltos:</p>
          <div className="rounded-xl border border-rose-200 bg-amber-50/40 p-3 font-mono text-[11px] text-[#172033] space-y-1">
            <p className="line-through text-rose-500">Cobro QR: Bs 120 (¿quién pagó?)</p>
            <p>Venta efectivo: Bs 80</p>
            <p className="text-rose-700 font-bold">Total del día: ¿¿ ?? (sin cuadre claro)</p>
          </div>
        </div>
      );

    case 'redes':
    default:
      return (
        <div className="space-y-2 text-center">
          <p className="text-[11px] font-bold text-rose-700">Página de redes inactiva:</p>
          <div className="rounded-xl border border-dashed border-rose-300 bg-rose-50/50 p-3">
            <Clock className="mx-auto h-5 w-5 text-rose-500" />
            <p className="mt-1 text-xs font-bold text-rose-800">Última publicación: hace 4 meses</p>
            <p className="text-[10px] text-[#64748B]">Imagen inconsistente frente a clientes nuevos.</p>
          </div>
        </div>
      );
  }
}

function SolutionMockup({ id }: { id: string }) {
  switch (id) {
    case 'web':
      return (
        <div className="space-y-2">
          {/* Navegador web */}
          <div className="flex items-center justify-between rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5">
            <div className="flex items-center gap-1.5 text-[11px] text-[#172033] font-bold">
              <Lock className="h-3 w-3 text-emerald-600" />
              <span>https://tuempresa.bo</span>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
              En línea 24/7
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-[#0073F7] p-3 text-white">
            <div>
              <p className="text-xs font-bold">Tu negocio con presencia oficial</p>
              <p className="text-[10px] text-white/80">Servicios · Precios · Ubicación en mapa</p>
            </div>
            <div className="inline-flex items-center gap-1 rounded-lg bg-white px-2.5 py-1 text-[11px] font-bold text-[#0073F7]">
              <WhatsAppIcon className="h-3 w-3" />
              <span>Cotizar</span>
            </div>
          </div>
        </div>
      );

    case 'catalogo':
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
            <div className="flex items-center gap-1 text-xs font-bold text-[#172033]">
              <ShoppingBag className="h-3.5 w-3.5 text-[#0073F7]" />
              <span>Catálogo Digital en Celular</span>
            </div>
            <span className="rounded bg-[#0073F7]/10 px-2 py-0.5 text-[10px] font-bold text-[#0073F7]">
              1 solo enlace
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#172033]">Producto A</p>
                <p className="text-[10px] text-emerald-600 font-bold">Bs 120.00</p>
              </div>
              <span className="rounded bg-emerald-600 p-1 text-white">
                <WhatsAppIcon className="h-3 w-3" />
              </span>
            </div>
            <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-2 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#172033]">Producto B</p>
                <p className="text-[10px] text-emerald-600 font-bold">Bs 85.00</p>
              </div>
              <span className="rounded bg-emerald-600 p-1 text-white">
                <WhatsAppIcon className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      );

    case 'whatsapp':
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-lg bg-[#E7F8EE] p-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                ✓
              </span>
              <div>
                <p className="text-xs font-bold text-[#172033]">WhatsApp Business Oficial</p>
                <p className="text-[10px] text-emerald-700">Respuesta automática al instante</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-emerald-700">Verificado</span>
          </div>
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-2 text-[11px] text-[#172033]">
            🤖 «¡Hola! Gracias por escribirnos. Nuestro catálogo con precios en Bs está aquí: [Ver catálogo]»
          </div>
        </div>
      );

    case 'admin':
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#172033]">
              <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
              <span>Control Diario y Exportación</span>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
              Ventas al día
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
              <p className="text-[10px] text-[#64748B]">Total ingresos hoy</p>
              <p className="text-xs font-extrabold text-[#172033]">Bs 2,450.00</p>
            </div>
            <div className="rounded-lg bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
              <p className="text-[10px] text-[#64748B]">Cobros QR registrados</p>
              <p className="text-xs font-extrabold text-[#0073F7]">14 avisos por voz</p>
            </div>
          </div>
        </div>
      );

    case 'redes':
    default:
      return (
        <div className="space-y-2">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-1.5">
            <span className="text-xs font-bold text-[#172033]">Parrilla Mensual Activa</span>
            <span className="rounded bg-[#0073F7]/10 px-2 py-0.5 text-[10px] font-bold text-[#0073F7]">
              Contenido listo
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded-lg bg-[#0073F7] p-2 text-center text-white text-[10px] font-bold">
              Promo 20%
            </div>
            <div className="rounded-lg bg-[#063B79] p-2 text-center text-white text-[10px] font-bold">
              Novedades
            </div>
            <div className="rounded-lg bg-emerald-600 p-2 text-center text-white text-[10px] font-bold">
              Testimonio
            </div>
          </div>
        </div>
      );
  }
}
