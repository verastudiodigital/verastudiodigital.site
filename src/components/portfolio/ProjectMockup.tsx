import Image from 'next/image';
import {
  BellRing,
  Calendar,
  Lock,
  MapPin,
  Search,
  Sparkles,
  TrendingUp,
  Truck,
} from 'lucide-react';
import type { PortfolioProject } from '@/types/portfolio';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

interface ProjectMockupProps {
  project: PortfolioProject;
}

export function ProjectMockup({ project }: ProjectMockupProps) {
  // Caso 1: Producto propio con imagen oficial (Listo, LUKIO, etc.)
  if (project.image) {
    const isListo = project.mockupVariant === 'listo-app';

    return (
      <div
        className={`relative flex h-56 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] p-6 ${
          isListo
            ? 'bg-gradient-to-br from-[#063B79] via-[#084b97] to-[#0073F7]'
            : 'bg-gradient-to-br from-[#172033] via-[#1E293B] to-[#334155]'
        }`}
      >
        {/* Decoración de fondo */}
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10 w-full max-w-xs rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-3.5">
            <Image
              src={project.image}
              alt={project.imageAlt ?? project.title}
              width={56}
              height={56}
              className="h-14 w-14 shrink-0 rounded-2xl bg-white p-1 shadow-md object-contain"
            />
            <div className="min-w-0 flex-1 text-left text-white">
              <div className="flex items-center gap-1.5">
                <span className="inline-block rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                  En Google Play
                </span>
                <span className="text-[10px] text-white/70">Android</span>
              </div>
              <p className="mt-1 truncate text-sm font-bold text-white">{project.title}</p>
              <p className="truncate text-xs text-white/80">{project.solutionType}</p>
            </div>
          </div>

          {/* Notificación de voz simulada para Listo */}
          {isListo && (
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-black/25 px-3 py-1.5 text-left text-white">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                <BellRing className="h-3 w-3" />
              </span>
              <p className="truncate text-[11px] font-medium text-white/95">
                📢 <span className="font-bold">Pago QR recibido: Bs 150.00</span> · Yape
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Caso 2: Demostraciones conceptuales con estética realista
  switch (project.mockupVariant) {
    case 'web-corporativa':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#F5F8FC] to-[#E2E8F0]/50 p-4">
          <div className="w-full max-w-xs overflow-hidden rounded-xl border border-[#CBD5E1] bg-white shadow-lg">
            {/* Barra de navegador */}
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
                <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex flex-1 items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] text-[#64748B] border border-[#E2E8F0]">
                <Lock className="h-2.5 w-2.5 text-emerald-600" />
                <span className="truncate">https://tunegocio.bo</span>
              </div>
            </div>

            {/* Contenido web simulado */}
            <div className="p-3">
              <div className="rounded-lg bg-[#0073F7] p-3 text-white">
                <p className="text-[10px] font-semibold text-white/80">Soluciones Digitales</p>
                <p className="mt-0.5 text-xs font-extrabold leading-tight">
                  Tu negocio en internet, claro y vendedor.
                </p>
                <div className="mt-2 inline-flex items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-[#0073F7]">
                  <WhatsAppIcon className="h-2.5 w-2.5" />
                  <span>Cotizar por WhatsApp</span>
                </div>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1.5 text-center">
                <div className="rounded border border-[#E2E8F0] bg-[#F8FAFC] p-1 text-[9px] font-semibold text-[#172033]">
                  Servicios
                </div>
                <div className="rounded border border-[#E2E8F0] bg-[#F8FAFC] p-1 text-[9px] font-semibold text-[#172033]">
                  Precios
                </div>
                <div className="rounded border border-[#E2E8F0] bg-[#F8FAFC] p-1 text-[9px] font-semibold text-[#172033]">
                  Contacto
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'catalogo-joyeria':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#FAF9F6] to-[#ECE8E1]/60 p-4">
          <div className="w-56 overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-xl">
            {/* Cabecera Nadir Joyería */}
            <div className="border-b border-neutral-100 bg-white px-3 py-2 text-black flex items-center justify-between">
              <div>
                <span className="font-serif text-[11px] font-normal tracking-[0.2em] uppercase">Nadir Joyería</span>
                <p className="text-[6px] tracking-[0.25em] uppercase text-neutral-400">Atelier & Orfebrería</p>
              </div>
              <span className="text-[7px] uppercase tracking-widest text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">WhatsApp</span>
            </div>

            {/* Vista previa miniatura de la pieza */}
            <div className="p-3 bg-[#FAF9F6] flex flex-col items-center">
              <div className="h-16 w-full rounded-lg bg-white/80 border border-neutral-200/60 flex items-center justify-center relative overflow-hidden">
                <span className="absolute top-1 left-1.5 text-[6px] uppercase tracking-wider font-bold bg-neutral-900 text-white px-1.5 py-0.5 rounded-full">
                  Exclusiva
                </span>
                <span className="text-xl">✨</span>
              </div>
              <div className="w-full mt-2 text-left">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-[10px] font-medium text-neutral-900">Bond Cuff</span>
                  <span className="font-mono text-[10px] font-bold text-neutral-900">Bs 1,350</span>
                </div>
                <p className="text-[7px] text-neutral-400 italic">14K Gold Plated · Pieza artesanal</p>
              </div>
            </div>

            {/* Botón ver detalle de la pieza */}
            <div className="border-t border-neutral-100 p-2 bg-white">
              <div className="w-full rounded-lg bg-neutral-900 py-1 text-center text-[8px] font-bold uppercase tracking-widest text-white flex items-center justify-center gap-1">
                <span>Ver pieza exclusiva →</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'pedidos-comida':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#FFF7ED] to-[#FED7AA]/50 p-4">
          <div className="w-52 overflow-hidden rounded-2xl border-2 border-[#EA580C] bg-white shadow-xl">
            {/* Cabecera Fuego & Brasa */}
            <div className="border-b border-[#EA580C]/20 bg-[#EA580C] px-3 py-1.5 text-white flex items-center justify-between">
              <span className="font-sans text-[10px] font-black tracking-wide text-white">Fuego & Brasa</span>
              <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold">Delivery</span>
            </div>

            {/* Banner express */}
            <div className="bg-[#FFF1EE] py-1 px-2 text-center text-[8px] font-bold text-orange-800">
              🛵 Delivery express · Cochabamba
            </div>

            {/* Ficha producto hamburguesa */}
            <div className="p-2 space-y-1.5 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold text-slate-800">Burger Doble Cheddar</p>
                  <span className="text-[8px] text-slate-400">Papas rústicas + salsas</span>
                </div>
                <span className="text-[10px] font-black text-[#EA580C]">Bs 38</span>
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[8px] font-bold text-slate-600">- 1 +</span>
                <div className="flex-1 rounded-lg bg-[#EA580C] py-1 text-center text-[9px] font-bold text-white shadow-xs flex items-center justify-center gap-1">
                  <WhatsAppIcon className="h-2 w-2" />
                  <span>Pedir</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'distribuidora-abarrotes':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#F0FDF4] to-[#BBF7D0]/40 p-4">
          <div className="w-52 overflow-hidden rounded-2xl border-2 border-[#166534] bg-white shadow-xl">
            {/* Cabecera Distribuidora Los Andes */}
            <div className="border-b border-[#166534]/20 bg-[#166534] px-3 py-1.5 text-white flex items-center justify-between">
              <span className="font-sans text-[10px] font-black tracking-wide text-white">Dist. Los Andes</span>
              <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold">Mayorista</span>
            </div>

            {/* Banner pedido mínimo */}
            <div className="bg-[#DCFCE7] py-1 px-2 text-center text-[8px] font-bold text-emerald-900">
              🚚 Despacho en camión · Mínimo Bs 250
            </div>

            {/* Lista rápida de abarrotes */}
            <div className="p-2 space-y-1 bg-white">
              <div className="flex items-center justify-between rounded border border-slate-100 p-1">
                <span className="text-[9px] font-bold text-slate-800">Fardo Papel Scott</span>
                <span className="text-[9px] font-bold text-[#166534]">Bs 84</span>
              </div>
              <div className="rounded-lg bg-[#166534] py-1 text-center text-[9px] font-bold text-white shadow-xs flex items-center justify-center gap-1">
                <WhatsAppIcon className="h-2 w-2" />
                <span>Enviar pedido</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'catalogo-pasteleria':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#FFFDF7] to-[#F5ECE0]/60 p-4">
          <div className="w-52 overflow-hidden rounded-2xl border-2 border-[#831843] bg-white shadow-xl">
            {/* Cabecera Le Petit Atelier */}
            <div className="border-b border-[#831843]/20 bg-[#831843] px-3 py-1.5 text-white flex items-center justify-between">
              <span className="font-serif text-[10px] font-black tracking-wider text-pink-100">Le Petit Atelier</span>
              <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold">Pastelería</span>
            </div>

            {/* Banner crema */}
            <div className="bg-[#FDF2F8] py-1 px-2 text-center text-[8px] font-bold text-pink-900">
              🎂 Tortas finas y encargos especiales
            </div>

            {/* Ficha producto pastelería */}
            <div className="p-2 space-y-1.5 bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold text-slate-800">Torta Selva Negra</p>
                  <span className="text-[8px] text-slate-400">12 porciones · Artesanal</span>
                </div>
                <span className="text-[10px] font-black text-[#831843]">Bs 130</span>
              </div>
              <div className="flex items-center justify-between gap-1">
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[8px] font-bold text-slate-600">- 1 +</span>
                <div className="flex-1 rounded-lg bg-[#831843] py-1 text-center text-[9px] font-bold text-white shadow-xs flex items-center justify-center gap-1">
                  <WhatsAppIcon className="h-2 w-2" />
                  <span>Encargar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'catalogo-digital':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#F5F8FC] to-[#E2E8F0]/50 p-4">
          <div className="w-48 overflow-hidden rounded-2xl border-2 border-[#172033] bg-white shadow-xl">
            {/* Cabecera celular */}
            <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#172033] px-3 py-1.5 text-white">
              <span className="text-[10px] font-bold">Catálogo Digital</span>
              <Search className="h-3 w-3 text-white/70" />
            </div>

            {/* Lista de productos */}
            <div className="space-y-1.5 p-2">
              <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-7 w-7 rounded bg-[#0073F7]/15 flex items-center justify-center text-[10px] font-bold text-[#0073F7]">
                    01
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#172033]">Combo Especial</p>
                    <p className="text-[9px] text-[#64748B]">Entrega inmediata</p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold text-[#0073F7]">Bs 120</span>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="h-7 w-7 rounded bg-[#0073F7]/15 flex items-center justify-center text-[10px] font-bold text-[#0073F7]">
                    02
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#172033]">Pack Negocio</p>
                    <p className="text-[9px] text-[#64748B]">Precio por mayor</p>
                  </div>
                </div>
                <span className="text-[10px] font-extrabold text-[#0073F7]">Bs 85</span>
              </div>

              <div className="rounded-lg bg-emerald-600 py-1.5 text-center text-[10px] font-bold text-white shadow-sm flex items-center justify-center gap-1">
                <WhatsAppIcon className="h-2.5 w-2.5" />
                <span>Pedir pedido por WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'redes-sociales':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#F5F8FC] to-[#E2E8F0]/50 p-4">
          <div className="grid w-full max-w-xs grid-cols-3 gap-2">
            {/* Post 1 */}
            <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-[#0073F7] to-[#063B79] p-2.5 text-white shadow-md aspect-square">
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/80">PROMO</span>
              <p className="text-[10px] font-extrabold leading-tight">20% OFF en todo</p>
              <div className="rounded bg-white/20 px-1 py-0.5 text-center text-[8px] font-bold">
                HOY
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex flex-col justify-between rounded-xl border border-[#CBD5E1] bg-white p-2.5 shadow-md aspect-square">
              <span className="text-[9px] font-bold text-[#0073F7]">NUEVO</span>
              <p className="text-[10px] font-bold text-[#172033] leading-tight">Llegaron productos</p>
              <span className="text-[8px] text-[#64748B]">Envíos a todo el país</span>
            </div>

            {/* Post 3 */}
            <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-2.5 text-white shadow-md aspect-square">
              <span className="text-[9px] font-bold text-amber-400">HORARIOS</span>
              <p className="text-[10px] font-bold leading-tight">Atención Lu a Sa</p>
              <div className="rounded bg-amber-400/20 px-1 py-0.5 text-center text-[8px] font-bold text-amber-300">
                Abierto
              </div>
            </div>
          </div>
        </div>
      );

    case 'sistema-admin':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#F5F8FC] to-[#E2E8F0]/50 p-4">
          <div className="w-full max-w-xs rounded-xl border border-[#CBD5E1] bg-white p-3.5 shadow-lg">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-[11px] font-extrabold text-[#172033]">Ventas del Día</span>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
                +18% hoy
              </span>
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <p className="text-[9px] font-semibold text-[#64748B]">Total ingresos</p>
                <p className="text-xs font-black text-[#172033]">Bs 2,450.00</p>
              </div>
              <div className="rounded-lg bg-[#F8FAFC] p-2 border border-[#E2E8F0]">
                <p className="text-[9px] font-semibold text-[#64748B]">Cobros QR</p>
                <p className="text-xs font-black text-[#0073F7]">14 transacciones</p>
              </div>
            </div>

            {/* Barras gráficas */}
            <div className="mt-2.5 flex items-end gap-1.5 h-8 pt-1">
              <div className="h-3 flex-1 rounded-t bg-[#0073F7]/30" />
              <div className="h-5 flex-1 rounded-t bg-[#0073F7]/50" />
              <div className="h-4 flex-1 rounded-t bg-[#0073F7]/40" />
              <div className="h-7 flex-1 rounded-t bg-[#0073F7]" />
              <div className="h-5 flex-1 rounded-t bg-[#0073F7]/60" />
            </div>
          </div>
        </div>
      );

    case 'misalon-platform':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#FDF4FF] to-[#FAE8FF]/50 p-4">
          <div className="w-full max-w-xs overflow-hidden rounded-xl border border-[#F0ABFC] bg-white shadow-lg">
            {/* Barra de navegador */}
            <div className="flex items-center gap-2 border-b border-[#F5D0FE] bg-[#FDF4FF] px-3 py-1.5">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
                <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex flex-1 items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] text-[#A21CAF] border border-[#F5D0FE]">
                <Lock className="h-2.5 w-2.5 text-emerald-600" />
                <span className="truncate font-semibold">https://misalon.lat</span>
              </div>
            </div>

            {/* Contenido web simulado */}
            <div className="p-3">
              <div className="rounded-lg bg-gradient-to-r from-[#A21CAF] to-[#C026D3] p-2.5 text-white shadow-sm">
                <div className="flex items-center gap-1 text-[10px] font-bold text-pink-200">
                  <Sparkles className="h-3 w-3" />
                  <span>Salones y Spas</span>
                </div>
                <p className="mt-0.5 text-xs font-black leading-tight">
                  Descubre y reserva en los mejores salones de belleza.
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between gap-1 text-[9px]">
                <span className="inline-flex items-center gap-1 rounded bg-[#FDF4FF] px-2 py-1 font-bold text-[#A21CAF] border border-[#F5D0FE]">
                  <Calendar className="h-2.5 w-2.5" />
                  Agenda 24/7
                </span>
                <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 font-bold text-emerald-700 border border-emerald-200">
                  Confirmación inmediata
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'panito-platform':
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#FFFBEB] to-[#FEF3C7]/40 p-4">
          <div className="w-full max-w-xs overflow-hidden rounded-xl border border-[#FDE68A] bg-white shadow-lg">
            {/* Barra de navegador */}
            <div className="flex items-center gap-2 border-b border-[#FEF3C7] bg-[#FFFBEB] px-3 py-1.5">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-[#EF4444]" />
                <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex flex-1 items-center gap-1 rounded-md bg-white px-2 py-0.5 text-[10px] text-[#B45309] border border-[#FDE68A]">
                <Lock className="h-2.5 w-2.5 text-emerald-600" />
                <span className="truncate font-semibold">https://panito.lat</span>
              </div>
            </div>

            {/* Contenido web simulado */}
            <div className="p-3">
              <div className="rounded-lg bg-gradient-to-r from-[#B45309] to-[#D97706] p-2.5 text-white shadow-sm">
                <div className="flex items-center gap-1 text-[10px] font-bold text-amber-200">
                  <Truck className="h-3 w-3" />
                  <span>SaaS para Panificadoras</span>
                </div>
                <p className="mt-0.5 text-xs font-black leading-tight">
                  Pedidos, producción, inventario y rutas con GPS.
                </p>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-1 text-[9px] text-center">
                <span className="inline-flex items-center justify-center gap-1 rounded bg-[#FEF3C7] py-1 font-bold text-[#B45309] border border-[#FDE68A]">
                  <MapPin className="h-2.5 w-2.5" />
                  Rutas en vivo
                </span>
                <span className="inline-flex items-center justify-center gap-1 rounded bg-blue-50 py-1 font-bold text-[#0073F7] border border-blue-200">
                  Control de stock
                </span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'whatsapp-business':
    default:
      return (
        <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-t-2xl border-b border-[#E2E8F0] bg-gradient-to-b from-[#F5F8FC] to-[#E2E8F0]/50 p-4">
          <div className="w-full max-w-xs rounded-xl border border-[#CBD5E1] bg-white p-3 shadow-lg">
            {/* Cabecera WhatsApp */}
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                V
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-[#172033]">
                  Vera Studio Digital <span className="text-emerald-600">✓</span>
                </p>
                <p className="text-[9px] text-[#64748B]">Cuenta comercial oficial</p>
              </div>
            </div>

            {/* Mensaje */}
            <div className="mt-2.5 space-y-1.5">
              <div className="max-w-[90%] rounded-lg rounded-tl-none bg-[#E7F8EE] p-2 text-[10px] text-[#172033]">
                ¡Hola! Bienvenido. Te compartimos nuestro catálogo y opciones de cotización rápida.
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="rounded-full bg-[#0073F7]/10 px-2 py-0.5 text-[9px] font-bold text-[#0073F7]">
                  📦 Catálogo disponible
                </span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
                  ⚡ Respuesta inmediata
                </span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
