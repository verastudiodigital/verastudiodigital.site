'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BellRing,
  Cake,
  Calendar,
  ExternalLink,
  Flame,
  Gem,
  Globe,
  Package,
  RotateCw,
  Sparkles,
  TrendingUp,
  Truck,
} from 'lucide-react';
import type { PortfolioProject } from '@/types/portfolio';
import { cn } from '@/lib/utils';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

interface ProjectCardProps {
  project: PortfolioProject;
  detailed?: boolean;
}

interface ProjectStyleConfig {
  gradient: string;
  borderColor: string;
  badgeText: string;
  badgeStyle: string;
  platformText: string;
  iconBg: string;
  iconColor: string;
  IconComponent?: React.ComponentType<{ className?: string }>;
  accentIcon: React.ComponentType<{ className?: string }>;
  accentIconBg: string;
  accentText: string;
}

function getProjectStyle(project: PortfolioProject): ProjectStyleConfig {
  switch (project.id) {
    case 'listo-app':
      return {
        gradient: 'bg-gradient-to-br from-[#063B79] via-[#084b97] to-[#0073F7]',
        borderColor: 'border-blue-400/30 hover:border-blue-300/70',
        badgeText: 'En Google Play',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'Android',
        iconBg: 'bg-white',
        iconColor: 'text-[#0073F7]',
        accentIcon: BellRing,
        accentIconBg: 'bg-emerald-500 text-white',
        accentText: '📢 Pago QR recibido: Bs 150.00 · Yape',
      };

    case 'lukio-app':
      return {
        gradient: 'bg-gradient-to-br from-[#172033] via-[#1E293B] to-[#334155]',
        borderColor: 'border-slate-500/40 hover:border-slate-400/70',
        badgeText: 'En Google Play',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'Android',
        iconBg: 'bg-white',
        iconColor: 'text-indigo-600',
        accentIcon: Sparkles,
        accentIconBg: 'bg-indigo-500 text-white',
        accentText: '🧠 Cálculo, memoria y lectura rápida',
      };

    case 'misalon-platform':
      return {
        gradient: 'bg-gradient-to-br from-[#4A044E] via-[#701A75] to-[#A21CAF]',
        borderColor: 'border-pink-400/30 hover:border-pink-300/70',
        badgeText: 'Plataforma SaaS',
        badgeStyle: 'bg-pink-400/25 text-pink-200 border border-pink-300/30',
        platformText: 'Web App 24/7',
        iconBg: 'bg-white',
        iconColor: 'text-[#A21CAF]',
        IconComponent: Calendar,
        accentIcon: Sparkles,
        accentIconBg: 'bg-pink-500 text-white',
        accentText: '📅 Agenda de turnos y catálogo de belleza',
      };

    case 'panito-platform':
      return {
        gradient: 'bg-gradient-to-br from-[#78350F] via-[#92400E] to-[#B45309]',
        borderColor: 'border-amber-400/30 hover:border-amber-300/70',
        badgeText: 'Plataforma SaaS',
        badgeStyle: 'bg-amber-400/25 text-amber-200 border border-amber-300/30',
        platformText: 'Logística GPS',
        iconBg: 'bg-white',
        iconColor: 'text-[#B45309]',
        IconComponent: Truck,
        accentIcon: Truck,
        accentIconBg: 'bg-amber-600 text-white',
        accentText: '🚚 Ruteo en vivo, despacho y panificadoras',
      };

    case 'demo-catalogo-joyeria':
      return {
        gradient: 'bg-gradient-to-br from-[#0c0c0e] via-[#17171a] to-[#26262a]',
        borderColor: 'border-amber-300/30 hover:border-amber-200/70',
        badgeText: 'Demo en vivo',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'Alta Orfebrería',
        iconBg: 'bg-gradient-to-br from-amber-200 to-amber-400 text-neutral-900',
        iconColor: 'text-neutral-900',
        IconComponent: Gem,
        accentIcon: Gem,
        accentIconBg: 'bg-amber-400 text-neutral-900',
        accentText: '✨ 14K Gold Plated · Fotos al borde y WhatsApp',
      };

    case 'demo-pedidos-comida':
      return {
        gradient: 'bg-gradient-to-br from-[#7C2D12] via-[#9A3412] to-[#EA580C]',
        borderColor: 'border-orange-400/30 hover:border-orange-300/70',
        badgeText: 'Demo en vivo',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'Delivery Express',
        iconBg: 'bg-white',
        iconColor: 'text-[#EA580C]',
        IconComponent: Flame,
        accentIcon: Flame,
        accentIconBg: 'bg-orange-500 text-white',
        accentText: '🛵 Burger doble, combos y pedido a WhatsApp',
      };

    case 'demo-catalogo-distribuidora':
      return {
        gradient: 'bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#047857]',
        borderColor: 'border-emerald-400/30 hover:border-emerald-300/70',
        badgeText: 'Demo en vivo',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'Mayorista B2B',
        iconBg: 'bg-white',
        iconColor: 'text-[#047857]',
        IconComponent: Package,
        accentIcon: Package,
        accentIconBg: 'bg-emerald-600 text-white',
        accentText: '📦 Fardos por mayor · Mínimo en camión Bs 250',
      };

    case 'demo-catalogo-pasteleria':
      return {
        gradient: 'bg-gradient-to-br from-[#500724] via-[#700B33] to-[#9D174D]',
        borderColor: 'border-pink-400/30 hover:border-pink-300/70',
        badgeText: 'Demo en vivo',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'Pastelería Fina',
        iconBg: 'bg-white',
        iconColor: 'text-[#9D174D]',
        IconComponent: Cake,
        accentIcon: Cake,
        accentIconBg: 'bg-pink-500 text-white',
        accentText: '🎂 Tortas finas, porciones y dedicatoria',
      };

    case 'demo-web-empresarial':
      return {
        gradient: 'bg-gradient-to-br from-[#0C4A6E] via-[#0369A1] to-[#0284C7]',
        borderColor: 'border-sky-400/30 hover:border-sky-300/70',
        badgeText: 'Demo en vivo',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'Web Corporativa',
        iconBg: 'bg-white',
        iconColor: 'text-[#0284C7]',
        IconComponent: Globe,
        accentIcon: Globe,
        accentIconBg: 'bg-sky-500 text-white',
        accentText: '⚡ Carga rápida, SEO local y WhatsApp',
      };

    case 'demo-sistema-admin':
      return {
        gradient: 'bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0369A1]',
        borderColor: 'border-cyan-400/30 hover:border-cyan-300/70',
        badgeText: 'Demo en vivo',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'Herramienta Web',
        iconBg: 'bg-white',
        iconColor: 'text-[#0369A1]',
        IconComponent: TrendingUp,
        accentIcon: TrendingUp,
        accentIconBg: 'bg-cyan-500 text-white',
        accentText: '📊 Totalizador diario de caja y cobros QR',
      };

    default:
      return {
        gradient: 'bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#10B981]',
        borderColor: 'border-emerald-400/30 hover:border-emerald-300/70',
        badgeText: 'Modelo Demo',
        badgeStyle: 'bg-emerald-500/25 text-emerald-300 border border-emerald-400/30',
        platformText: 'WhatsApp Business',
        iconBg: 'bg-white',
        iconColor: 'text-emerald-600',
        IconComponent: WhatsAppIcon,
        accentIcon: WhatsAppIcon,
        accentIconBg: 'bg-emerald-600 text-white',
        accentText: '💬 Catálogo, etiquetas y respuestas rápidas',
      };
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const style = getProjectStyle(project);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  const AccentIcon = style.accentIcon;
  const FallbackIcon = style.IconComponent;

  return (
    <div
      className="relative h-[168px] sm:h-[160px] w-full [perspective:1000px] select-none"
      role="region"
      aria-label={`Tarjeta de ${project.title}`}
    >
      <div
        className={cn(
          'relative h-full w-full rounded-2xl transition-transform duration-500 ease-out [transform-style:preserve-3d]',
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        )}
      >
        {/* =========================================================================
            FRENTE: Tarjeta compacta idéntica al diseño solicitado por el usuario
           ========================================================================= */}
        <div
          onClick={handleCardClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCardClick();
            }
          }}
          tabIndex={isFlipped ? -1 : 0}
          role="button"
          aria-label={`Ver información de ${project.title}. Haz clic para girar.`}
          className={cn(
            'group absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border p-3.5 sm:p-4 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl cursor-pointer [backface-visibility:hidden] [-webkit-backface-visibility:hidden]',
            style.gradient,
            style.borderColor,
            isFlipped ? 'pointer-events-none' : 'pointer-events-auto'
          )}
        >
          {/* Fila superior: Logo/Icono + Badges + Título + Subtítulo */}
          <div className="flex items-start gap-3">
            {/* Logotipo o Icono cuadrado redondeado (52x52) */}
            <div
              className={cn(
                'relative flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl p-1 shadow-md overflow-hidden',
                style.iconBg
              )}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              ) : FallbackIcon ? (
                <FallbackIcon className={cn('h-6 w-6', style.iconColor)} />
              ) : (
                <Sparkles className={cn('h-6 w-6', style.iconColor)} />
              )}
            </div>

            {/* Textos descriptivos */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span
                  className={cn(
                    'inline-block rounded-full px-2 py-0.5 text-[10px] font-bold leading-none',
                    style.badgeStyle
                  )}
                >
                  {style.badgeText}
                </span>
                <span className="text-[10px] text-white/70 font-medium">
                  {style.platformText}
                </span>
              </div>

              <h3 className="mt-1 truncate text-sm sm:text-base font-bold text-white leading-tight">
                {project.title}
              </h3>

              <p className="truncate text-xs text-white/80 mt-0.5">
                {project.solutionType}
              </p>
            </div>
          </div>

          {/* Fila inferior: Píldora de estado simulado + Indicador para girar */}
          <div className="flex items-center justify-between gap-2 rounded-xl bg-black/25 px-2.5 py-1.5 text-left text-white backdrop-blur-xs">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span
                className={cn(
                  'flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white',
                  style.accentIconBg
                )}
              >
                <AccentIcon className="h-2.5 w-2.5" />
              </span>
              <p className="truncate text-[11px] font-medium text-white/95">
                {style.accentText}
              </p>
            </div>

            <span className="shrink-0 text-[10px] font-semibold text-white/70 group-hover:text-white flex items-center gap-1 transition-colors">
              <RotateCw className="h-3 w-3 group-hover:rotate-180 transition-transform duration-300" />
              <span className="hidden sm:inline">Info</span>
            </span>
          </div>
        </div>

        {/* =========================================================================
            REVERSO: Misma altura compacta, información clara y botón de visita
           ========================================================================= */}
        <div
          tabIndex={isFlipped ? 0 : -1}
          className={cn(
            'absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border p-3.5 sm:p-4 text-white shadow-xl backdrop-blur-md [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)]',
            style.gradient,
            style.borderColor,
            isFlipped ? 'pointer-events-auto' : 'pointer-events-none'
          )}
        >
          {/* Cabecera del reverso */}
          <div>
            <div className="flex items-center justify-between border-b border-white/15 pb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                {project.categoryLabel}
              </span>
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-white/75 hover:text-white transition-colors cursor-pointer"
                title="Girar al frente"
              >
                <RotateCw className="h-3 w-3" />
                <span>Volver</span>
              </button>
            </div>

            <p className="mt-1.5 text-xs text-white/95 line-clamp-2 leading-snug">
              {project.description}
            </p>
          </div>

          {/* Botón de acción para visitar sitio o demo */}
          <div className="pt-2">
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-white py-2 px-3 text-xs font-bold text-slate-900 shadow-md hover:bg-slate-100 transition-all cursor-pointer"
              >
                <span>{project.externalLabel ?? 'Visitar sitio web'}</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href={`/servicios/${project.relatedServiceSlug}`}
                onClick={(e) => e.stopPropagation()}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-white py-2 px-3 text-xs font-bold text-slate-900 shadow-md hover:bg-slate-100 transition-all"
              >
                <span>Ver servicio</span>
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
