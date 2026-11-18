'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Sparkles, X } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { isStandaloneCatalogRoute } from '@/lib/standaloneRoutes';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { trackAnalyticsEvent } from '@/components/analytics/GoogleAnalytics';

interface QuickOption {
  id: string;
  label: string;
  subtitle: string;
  message: string;
}

const quickOptions: QuickOption[] = [
  {
    id: 'web-catalogo',
    label: 'Cotizar Página Web o Catálogo',
    subtitle: 'Presencia en Google y catálogo para celular',
    message:
      'Hola Vera Studio Digital, quisiera solicitar asesoramiento y cotización para una página web o catálogo digital para mi negocio.',
  },
  {
    id: 'listo-app',
    label: 'Consulta sobre App Listo (Pagos QR)',
    subtitle: 'Avisos por voz en Bolivia con Yape/Bancos',
    message:
      'Hola Vera Studio Digital, tengo una consulta sobre la aplicación Listo - Aviso de Pagos QR.',
  },
  {
    id: 'asesoramiento',
    label: 'Asesoramiento general para mi negocio',
    subtitle: 'Mejorar ventas y organización comercial',
    message:
      'Hola Vera Studio Digital, quisiera información general sobre las herramientas y servicios para negocios.',
  },
];

export function WhatsAppButton() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Ocultar en las páginas de demo y catálogos limpios para no superponerse con los botones de la demo
  if (isStandaloneCatalogRoute(pathname)) {
    return null;
  }

  const defaultWhatsAppUrl =
    buildWhatsAppUrl(
      'Hola Vera Studio Digital, quisiera información y asesoramiento sobre sus servicios para mi negocio.'
    ) ?? 'https://wa.me/59176406512';

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      {/* Ventana modal emergente con opciones inteligentes (Visible en Desktop o cuando isOpen es true) */}
      {isOpen ? (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Cabecera del chat */}
          <div className="flex items-center justify-between bg-gradient-to-r from-[#063B79] to-[#0073F7] p-4 text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 text-white font-bold backdrop-blur-sm">
                  VS
                </div>
                {/* Punto verde de conexión */}
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">Vera Studio Digital</p>
                <p className="flex items-center gap-1 text-[10px] text-emerald-300 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  En línea · Cochabamba, Bolivia
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Saludo inicial */}
          <div className="p-4 bg-[#F8FAFC] border-b border-[#E2E8F0]">
            <p className="text-xs text-[#172033] leading-relaxed">
              👋 <strong className="font-semibold">¡Hola!</strong> ¿En qué podemos ayudarte hoy?
              Selecciona una opción para conversar directo por WhatsApp:
            </p>
          </div>

          {/* Lista de opciones rápidas: ENLACES DIRECTOS <a> QUE NUNCA SE BLOQUEAN EN NINGÚN DISPOSITIVO */}
          <div className="p-3 space-y-2 max-h-72 overflow-y-auto">
            {quickOptions.map((opt) => {
              const optUrl = buildWhatsAppUrl(opt.message) ?? defaultWhatsAppUrl;
              return (
                <a
                  key={opt.id}
                  href={optUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackAnalyticsEvent('whatsapp_click', { location: 'smart_widget' });
                    setIsOpen(false);
                  }}
                  className="group flex w-full items-center justify-between gap-2 rounded-2xl border border-[#E2E8F0] bg-white p-3 text-left transition-all hover:border-[#0073F7] hover:bg-[#F5F8FC] hover:shadow-sm cursor-pointer"
                >
                  <div>
                    <p className="text-xs font-bold text-[#172033] group-hover:text-[#0073F7]">
                      {opt.label}
                    </p>
                    <p className="text-[10px] text-[#64748B] mt-0.5">{opt.subtitle}</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-[#0073F7] shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              );
            })}
          </div>

          {/* Pie del modal */}
          <div className="p-3 bg-white border-t border-[#E2E8F0] text-center">
            <span className="inline-flex items-center gap-1 text-[10px] text-[#64748B]">
              <Sparkles className="h-2.5 w-2.5 text-[#0073F7]" />
              Respuesta en menos de 24 horas garantizada
            </span>
          </div>
        </div>
      ) : null}

      {/* EN MÓVIL: Enlace directo <a> nativo que abre WhatsApp sin intermediarios ni bloqueos de ventana */}
      <a
        href={defaultWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'floating_button_mobile' })}
        aria-label="Hablar directo por WhatsApp"
        className="sm:hidden group relative flex items-center justify-center h-14 w-14 rounded-full bg-[#0073F7] text-white shadow-2xl ring-4 ring-white/80 transition-all duration-300 hover:bg-[#063B79] active:scale-95 cursor-pointer touch-manipulation"
      >
        <WhatsAppIcon className="h-7 w-7 text-white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
        </span>
      </a>

      {/* EN DESKTOP: Botón interactivo con texto y asistente de opciones inteligentes */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir asistente de WhatsApp"
        aria-expanded={isOpen}
        className="hidden sm:inline-flex group relative items-center gap-2 rounded-full bg-[#0073F7] px-4 py-3.5 text-sm font-bold text-white shadow-xl ring-4 ring-white/80 transition-all duration-300 hover:bg-[#063B79] hover:scale-105 cursor-pointer"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span>Hablar por WhatsApp</span>

        {/* Indicador de mensaje pendiente */}
        {!isOpen ? (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
          </span>
        ) : null}
      </button>
    </div>
  );
}
