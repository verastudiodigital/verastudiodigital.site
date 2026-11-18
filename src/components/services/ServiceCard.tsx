'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Clock,
  CreditCard,
  RotateCw,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { ServiceItem } from '@/types/service';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceCardProps {
  service: ServiceItem;
}

const serviceMetadata: Record<
  string,
  {
    targetAudience: string;
    deliveryTime: string;
    paymentTerms: string;
    whatsappMessage: string;
    imageSrc?: string;
  }
> = {
  'whatsapp-business': {
    targetAudience: 'Negocios con alto volumen de consultas que necesitan responder al instante.',
    deliveryTime: '24 a 48 horas',
    paymentTerms: 'Pago único al configurar',
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera configurar mi cuenta de WhatsApp Business para atender mejor a mis clientes.',
    imageSrc: '/images/services/whatsapp-business.webp',
  },
  'catalogos-digitales': {
    targetAudience: 'Tiendas, distribuidores y comercios con venta directa por WhatsApp.',
    deliveryTime: '3 a 5 días hábiles',
    paymentTerms: '50% inicio / 50% entrega',
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera cotizar un catálogo digital para celular con mis productos y precios.',
    imageSrc: '/images/services/catalogos-digitales.webp',
  },
  'diseno-web': {
    targetAudience: 'Empresas, consultores y profesionales que buscan captar clientes en Google.',
    deliveryTime: '5 a 8 días hábiles',
    paymentTerms: '50% inicio / 50% entrega',
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera cotizar el diseño y desarrollo de una página web profesional para mi negocio.',
    imageSrc: '/images/services/diseno-web.webp',
  },
  'automatizacion-administrativa': {
    targetAudience: 'Comercios que cobran con QR y necesitan ordenar ingresos y stock.',
    deliveryTime: '3 a 5 días hábiles',
    paymentTerms: 'Pago único sin mensualidades',
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera información sobre el sistema de control administrativo y registro de cobros QR.',
    imageSrc: '/images/services/automatizacion-administrativa.webp',
  },
  'redes-sociales': {
    targetAudience: 'Negocios que desean una imagen profesional activa y constante.',
    deliveryTime: 'Entrega quincenal',
    paymentTerms: 'Mensualidad sin contrato',
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera información sobre el plan mensual de diseño de contenido para redes sociales.',
    imageSrc: '/images/services/redes-sociales.webp',
  },
  'software-y-apps': {
    targetAudience: 'Negocios que buscan crear su app móvil o automatizar su modelo con un SaaS web.',
    deliveryTime: 'Cotización por etapas',
    paymentTerms: 'Hitos acordados',
    whatsappMessage:
      'Hola Vera Studio Digital, quisiera cotizar el desarrollo de una aplicación móvil o plataforma SaaS.',
    imageSrc: '/images/services/software-y-apps.webp',
  },
};

export function ServiceCard({ service }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const meta = serviceMetadata[service.slug] ?? {
    targetAudience: 'Negocios y emprendedores en Bolivia.',
    deliveryTime: '3 a 5 días hábiles',
    paymentTerms: '50% inicio / 50% entrega',
    whatsappMessage: `Hola Vera Studio Digital, quisiera cotizar el servicio de ${service.name}.`,
  };

  const whatsappUrl = buildWhatsAppUrl(meta.whatsappMessage);
  const hasImage = Boolean(meta.imageSrc);

  return (
    <div
      className="group h-[540px] sm:h-[580px] w-full [perspective:1000px] select-none cursor-pointer touch-manipulation"
      onClick={() => setIsFlipped((prev) => !prev)}
      role="region"
      aria-label={`Tarjeta interactiva de ${service.name}`}
    >
      <div
        className={`relative h-full w-full rounded-3xl transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* =========================================================================
            CARA FRONTAL: 100% IMAGEN DE FONDO, SIN TEXTOS SOBRANTES, SOLO FLECHA
           ========================================================================= */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#E2E8F0] shadow-xl transition-all [backface-visibility:hidden] [-webkit-backface-visibility:hidden] group-hover:border-[#0073F7] group-hover:shadow-2xl ${
            isFlipped
              ? 'opacity-0 pointer-events-none invisible z-0'
              : 'opacity-100 pointer-events-auto visible z-10'
          }`}
        >
          {/* 1. Fondo de la tarjeta (Imagen ocupando el 100% o Composición gráfica) */}
          {hasImage && meta.imageSrc ? (
            <Image
              src={meta.imageSrc}
              alt={service.name}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-[#063B79] via-[#094892] to-[#0073F7] p-6 flex flex-col justify-center items-center">
              {service.slug === 'automatizacion-administrativa' ? (
                <div className="w-full max-w-xs rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/20 text-white shadow-xl">
                  <div className="flex items-center justify-between border-b border-white/15 pb-2">
                    <span className="text-xs font-bold">Control Diario</span>
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-center">
                    <div className="rounded-xl bg-white/10 p-2">
                      <span className="text-[10px] text-white/70">Ventas hoy</span>
                      <p className="text-sm font-black text-white">Bs 2,450</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-2">
                      <span className="text-[10px] text-white/70">Cobros QR</span>
                      <p className="text-sm font-black text-emerald-300">14 avisos</p>
                    </div>
                  </div>
                  <div className="mt-3 text-center text-[10px] font-bold text-white/80 bg-white/10 rounded-lg py-1">
                    Exportación a Excel ✓
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                  <div className="aspect-square rounded-2xl bg-white/15 backdrop-blur-md p-2 flex flex-col justify-between text-white border border-white/20">
                    <span className="text-[9px] font-bold text-amber-300">PROMO</span>
                    <p className="text-[10px] font-black">20% OFF</p>
                    <span className="text-[8px] text-white/70">Hoy</span>
                  </div>
                  <div className="aspect-square rounded-2xl bg-white p-2 flex flex-col justify-between text-[#172033] shadow-lg">
                    <span className="text-[9px] font-bold text-[#0073F7]">NUEVO</span>
                    <p className="text-[10px] font-black">Packs</p>
                    <span className="text-[8px] text-[#64748B]">Envíos</span>
                  </div>
                  <div className="aspect-square rounded-2xl bg-white/15 backdrop-blur-md p-2 flex flex-col justify-between text-white border border-white/20">
                    <Sparkles className="h-3 w-3 text-amber-300" />
                    <p className="text-[10px] font-black">Historias</p>
                    <span className="text-[8px] text-white/70">Activo</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. Degradados sutiles en extremos: superior para el título e inferior para el precio/botón */}
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/25 to-transparent z-10 pointer-events-none" />

          {/* 3. Contenido frontal optimizado: Título arriba, Ilustración despejada al centro, Precio y Flecha abajo */}
          <div className="relative z-20 flex h-full flex-col justify-between p-6 sm:p-7">
            {/* ARRIBA: Título del servicio nítido en el espacio despejado */}
            <div className="min-w-0 pr-2">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight drop-shadow-md">
                {service.name}
              </h3>
            </div>

            {/* ABAJO: Insignia de precio a la izquierda + Botón flecha interactivo a la derecha */}
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-md px-4 py-2 text-xs sm:text-sm font-black text-[#063B79] border border-[#0073F7]/20 shadow-xl">
                {service.startingPrice}
              </span>

              {/* Botón icono de flecha limpio para hacer tap */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
                aria-label={`Ver detalles de ${service.name}`}
                className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#0073F7] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#0073F7] hover:text-white cursor-pointer touch-manipulation"
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CARA TRASERA: DETALLES PERTINENTES, ENTREGABLES Y CONTACTO DIRECTO
           ========================================================================= */}
        <div
          className={`absolute inset-0 flex flex-col justify-between overflow-y-auto rounded-3xl border-2 border-[#0073F7] bg-white p-5 sm:p-6 shadow-2xl transition-all [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] ${
            isFlipped
              ? 'opacity-100 pointer-events-auto visible z-10'
              : 'opacity-0 pointer-events-none invisible z-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bloque superior con contenido informativo */}
          <div className="space-y-3">
            {/* 1. Cabecera del dorso: Tag + Botón Volver */}
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0073F7]">
                <span className="h-2 w-2 rounded-full bg-[#0073F7]" />
                Detalles del servicio
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                onTouchEnd={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F8FC] px-3.5 py-1.5 text-xs font-bold text-[#475569] hover:bg-[#E2E8F0] hover:text-[#0073F7] active:scale-95 transition-all cursor-pointer touch-manipulation"
                aria-label="Volver al frente"
              >
                <RotateCw className="h-3.5 w-3.5" />
                <span>Volver</span>
              </button>
            </div>

            {/* 2. Nombre del servicio + Insignia de Precio */}
            <div className="flex items-start justify-between gap-2.5">
              <h3 className="text-base sm:text-lg font-black text-[#172033] leading-snug">
                {service.name}
              </h3>
              <span className="shrink-0 rounded-full bg-[#0073F7]/10 px-2.5 py-0.5 text-xs font-black text-[#0073F7] whitespace-nowrap">
                {service.startingPrice}
              </span>
            </div>

            {/* 3. Para quién es ideal */}
            <div className="rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] p-2.5 text-xs text-[#334155] flex items-start gap-2">
              <Users className="h-4 w-4 shrink-0 text-[#0073F7] mt-0.5" />
              <p className="leading-snug text-[#475569]">
                <strong className="text-[#172033]">Ideal para: </strong>
                {meta.targetAudience}
              </p>
            </div>

            {/* 4. Qué incluye tu proyecto */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Qué incluye tu proyecto:
              </p>
              <ul className="mt-1.5 space-y-1.5">
                {service.features.slice(0, 3).map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-xs font-semibold text-[#172033]">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0073F7]/10 text-[#0073F7] mt-0.5">
                      <Check className="h-2.5 w-2.5 stroke-[3]" />
                    </span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bloque inferior: Tiempos, Pago y Acciones (SIEMPRE 100% VISIBLES) */}
          <div className="space-y-2.5 border-t border-[#E2E8F0] pt-2.5">
            {/* Strip de tiempos y pagos */}
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-[#F8FAFC] p-2 text-center border border-[#E2E8F0]">
              <div className="flex flex-col items-center justify-center">
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#64748B]">
                  <Clock className="h-3 w-3 text-[#0073F7]" />
                  Entrega
                </span>
                <span className="mt-0.5 text-xs font-bold text-[#172033]">
                  {meta.deliveryTime}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center border-l border-[#E2E8F0]">
                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#64748B]">
                  <CreditCard className="h-3 w-3 text-emerald-600" />
                  Condición
                </span>
                <span className="mt-0.5 text-xs font-bold text-emerald-700">
                  {meta.paymentTerms}
                </span>
              </div>
            </div>

            {/* Acciones */}
            <div className="space-y-1.5">
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0073F7] py-2.5 px-4 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#063B79] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Cotizar este servicio por WhatsApp</span>
                </a>
              ) : null}

              <Link
                href={`/servicios/${service.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-1.5 text-xs font-bold text-[#64748B] hover:text-[#0073F7] transition-colors py-1 cursor-pointer"
              >
                <span>Ver página completa y planes</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
