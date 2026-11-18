'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Cake,
  ExternalLink,
  FileSpreadsheet,
  Flame,
  Gem,
  Shirt,
  Truck,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

import { NadirJoyeriaView } from '@/components/catalogos/NadirJoyeriaView';
import { ComidaDeliveryView } from '@/components/catalogos/ComidaDeliveryView';
import { DistribuidoraAbarrotesView } from '@/components/catalogos/DistribuidoraAbarrotesView';
import { PasteleriaView } from '@/components/catalogos/PasteleriaView';
import { BoutiqueView } from '@/components/catalogos/BoutiqueView';
import { CotizadorB2BView } from '@/components/catalogos/CotizadorB2BView';

type Sector = 'joyeria' | 'comida' | 'distribuidora' | 'pasteleria' | 'boutique' | 'cotizar';

const SECTOR_ROUTES: Record<Sector, string> = {
  joyeria: '/c/nadir-joyeria',
  comida: '/c/pedidos-comida',
  distribuidora: '/c/distribuidora-abarrotes',
  pasteleria: '/c/pasteleria-lepetit',
  boutique: '/c/boutique-moda',
  cotizar: '/demos/catalogo?sector=cotizar',
};

const SECTOR_LABELS: Record<Sector, string> = {
  joyeria: 'Nadir Joyería (Alta Orfebrería)',
  comida: 'Fuego & Brasa (Pedidos & Delivery)',
  distribuidora: 'Distribuidora Los Andes (Abarrotes para Tiendas)',
  pasteleria: 'Le Petit Atelier (Repostería Fina)',
  boutique: 'Maison Véra (Moda Femenina)',
  cotizar: 'Cotizador B2B Químico',
};

function CatalogContent() {
  const searchParams = useSearchParams();
  const sectorParam = searchParams.get('sector') as Sector | null;

  const validSectorParam =
    sectorParam &&
    ['joyeria', 'comida', 'distribuidora', 'pasteleria', 'boutique', 'cotizar'].includes(
      sectorParam
    )
      ? sectorParam
      : null;

  const [userSelectedSector, setUserSelectedSector] = useState<Sector | null>(null);
  const activeSector: Sector = userSelectedSector ?? validSectorParam ?? 'joyeria';
  const setActiveSector = (sec: Sector) => setUserSelectedSector(sec);

  const agencyWhatsAppUrl = buildWhatsAppUrl(
    `Hola Vera Studio Digital, estoy viendo el demo de *${SECTOR_LABELS[activeSector]}* y quisiera cotizar una solución similar para mi negocio.`
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden max-w-full">
      {/* =========================================================================
          BARRA SUPERIOR DEMOSTRATIVA DE VERA STUDIO DIGITAL
         ========================================================================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md px-3 py-2 shadow-xs max-w-full overflow-hidden">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-black text-[#0073F7] hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Volver a Vera Studio Digital</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Vitrina de Demos de Catálogos
            </span>
          </div>

          {/* Selector de los 6 Rubros con identidad propia */}
          <div className="flex items-center gap-1 overflow-x-auto rounded-2xl bg-slate-100 p-1 max-w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setActiveSector('joyeria')}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                activeSector === 'joyeria'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Gem className="h-3.5 w-3.5 text-amber-600" />
              <span>Joyería</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSector('comida')}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                activeSector === 'comida'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Flame className="h-3.5 w-3.5 text-orange-500" />
              <span>Pedidos Comida</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSector('distribuidora')}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                activeSector === 'distribuidora'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Truck className="h-3.5 w-3.5 text-[#0073F7]" />
              <span>Distribuidora Tiendas</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSector('pasteleria')}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                activeSector === 'pasteleria'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cake className="h-3.5 w-3.5 text-rose-500" />
              <span>Pastelería</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSector('boutique')}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                activeSector === 'boutique'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Shirt className="h-3.5 w-3.5 text-purple-600" />
              <span>Boutique</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveSector('cotizar')}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                activeSector === 'cotizar'
                  ? 'bg-white text-[#0F172A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
              <span>Cotizador B2B</span>
            </button>
          </div>

          {agencyWhatsAppUrl && (
            <a
              href={agencyWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-xl bg-[#0073F7] px-3 py-1 font-bold text-white shadow-xs hover:bg-[#063B79] transition-colors"
            >
              <WhatsAppIcon className="h-3 w-3" />
              <span>Cotizar Catálogo para mi Negocio</span>
            </a>
          )}
        </div>

        {/* Banner de acceso directo independiente para el cliente */}
        {activeSector !== 'cotizar' && (
          <div className="mx-auto max-w-7xl mt-1.5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-1 text-[11px] text-slate-500">
            <span className="hidden sm:inline">
              Estás visualizando el catálogo interactivo de <strong>{SECTOR_LABELS[activeSector]}</strong>.
            </span>
            <Link
              href={SECTOR_ROUTES[activeSector]}
              target="_blank"
              className="inline-flex items-center gap-1.5 font-bold text-[#0073F7] hover:underline bg-blue-50/80 px-2.5 py-0.5 rounded-md"
            >
              <span>Ver cómo lo ve el cliente en su ruta terminada ({SECTOR_ROUTES[activeSector]})</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        )}
      </header>

      {/* =========================================================================
          RENDERIZACIÓN DEL SECTOR SELECCIONADO
         ========================================================================= */}
      {activeSector === 'joyeria' && <NadirJoyeriaView />}
      {activeSector === 'comida' && <ComidaDeliveryView />}
      {activeSector === 'distribuidora' && <DistribuidoraAbarrotesView />}
      {activeSector === 'pasteleria' && <PasteleriaView />}
      {activeSector === 'boutique' && <BoutiqueView />}
      {activeSector === 'cotizar' && <CotizadorB2BView />}
    </div>
  );
}

export default function CatalogoDemoPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-50 text-slate-600 font-sans">
          <div className="text-center space-y-2">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent mx-auto" />
            <p className="text-xs font-semibold">Cargando catálogo...</p>
          </div>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
