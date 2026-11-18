'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  distribuidoraProductsData,
  type DistribItem,
} from '@/data/catalogos/distribuidoraAbarrotesData';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import {
  Boxes,
  CheckCircle2,
  Minus,
  Plus,
  Search,
  ShoppingCart,
  Store,
  Truck,
  X,
  BadgePercent,
  Clock,
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

function formatPriceBs(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const MINIMUM_ORDER_BS = 250;

export function DistribuidoraAbarrotesView() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Cantidades por producto: { [productId]: number }
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Datos de la tienda para el despacho
  const [storeName, setStoreName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [storeAddress, setStoreAddress] = useState('');
  const [deliveryDay, setDeliveryDay] = useState('Mañana por la mañana (08:00 - 12:30)');
  const [paymentOption, setPaymentOption] = useState<'efectivo-camion' | 'qr'>('efectivo-camion');

  const categories = [
    'Todos',
    'Papel & Hogar',
    'Galletas & Dulces',
    'Aceites & Abarrotes',
    'Detergentes & Limpieza',
  ];

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: next };
    });
  };

  const filteredProducts = distribuidoraProductsData.filter((item) => {
    const matchesCat = activeCategory === 'Todos' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.packPresentation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Cálculo de totales
  const selectedItemsList = Object.entries(quantities)
    .map(([id, qty]) => {
      const item = distribuidoraProductsData.find((p) => p.id === id);
      if (!item || qty <= 0) return null;
      return {
        item,
        quantity: qty,
        subtotal: item.wholesalePriceBs * qty,
      };
    })
    .filter(Boolean) as { item: DistribItem; quantity: number; subtotal: number }[];

  const totalBultos = selectedItemsList.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalAmountBs = selectedItemsList.reduce((acc, curr) => acc + curr.subtotal, 0);
  const diffToMinimum = Math.max(0, MINIMUM_ORDER_BS - totalAmountBs);
  const minimumReached = totalAmountBs >= MINIMUM_ORDER_BS;

  // Generador de mensaje para WhatsApp
  const generateWhatsAppUrl = () => {
    if (selectedItemsList.length === 0) return '#';

    let msg = `🚛 *PEDIDO MAYORISTA - PROVISIÓN PARA TIENDA* 🚛\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    if (storeName.trim()) msg += `🏪 *Tienda / Almacén:* ${storeName.trim()}\n`;
    if (ownerName.trim()) msg += `👤 *Propietario / Encargado:* ${ownerName.trim()}\n`;
    if (storeAddress.trim()) {
      msg += `📍 *Ubicación de descarga:* ${storeAddress.trim()}\n`;
    } else {
      msg += `📍 *Dirección:* A coordinar por ubicación en tiempo real\n`;
    }
    msg += `🕒 *Turno de descarga:* ${deliveryDay}\n`;
    msg += `💳 *Pago:* ${paymentOption === 'efectivo-camion' ? 'Contra entrega en efectivo al camión' : 'Transferencia por QR al descargar'}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    msg += `📦 *PRODUCTOS SOLICITADOS (BULTOS/FARDOS/CAJAS):*\n`;
    selectedItemsList.forEach((line, index) => {
      msg += `${index + 1}. *${line.quantity}x ${line.item.name}*\n`;
      msg += `   └ Presentación: ${line.item.packPresentation}\n`;
      msg += `   └ Bs ${formatPriceBs(line.item.wholesalePriceBs)} c/u  →  *Bs ${formatPriceBs(line.subtotal)}*\n`;
    });

    msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `• *TOTAL DE BULTOS / FARDOS:* ${totalBultos} bultos\n`;
    msg += `• *MONTO TOTAL DEL PEDIDO: Bs ${formatPriceBs(totalAmountBs)}*\n`;
    msg += `• *DESPACHO EN CAMIÓN:* ${minimumReached ? 'Bonificado (Cubre pedido mínimo)' : 'A coordinar con chofer'}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Por favor confirmar para programar el carguío en almacén central y emisión de nota de remisión. ¡Muchas gracias!`;

    return buildWhatsAppUrl(msg);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white pb-32">
      {/* =========================================================================
          HEADER DISTRIBUIDORA B2B
         ========================================================================= */}
      <header className="sticky top-0 z-30 w-full border-b border-blue-900/10 bg-[#0057B8] text-white shadow-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0057B8] shadow-sm">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-xl tracking-tight leading-tight">
                  Distribuidora Los Andes
                </span>
                <span className="rounded-md bg-white/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider hidden sm:inline">
                  Mayorista
                </span>
              </div>
              <p className="text-[11px] text-blue-100 font-medium">
                Provisión para Tiendas de Barrio & Minimarkets
              </p>
            </div>
          </div>

          {/* Botón Carrito / Reabastecimiento */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-black shadow-md transition-all cursor-pointer touch-manipulation"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Ver Pedido</span>
            <span className="rounded-full bg-slate-950/20 px-1.5 py-0.2 text-[11px] font-mono">
              {totalBultos} {totalBultos === 1 ? 'bulto' : 'bultos'}
            </span>
            {totalAmountBs > 0 && (
              <span className="hidden sm:inline font-mono border-l border-slate-950/20 pl-2">
                Bs {formatPriceBs(totalAmountBs)}
              </span>
            )}
          </button>
        </div>

        {/* Barra de información logística */}
        <div className="bg-[#004494] py-1.5 px-4 text-center text-xs font-semibold text-blue-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-amber-300" />
            <span>Reparto diario en camión cerrado</span>
          </span>
          <span className="hidden sm:inline text-blue-300">•</span>
          <span className="flex items-center gap-1.5">
            <Store className="h-3.5 w-3.5 text-amber-300" />
            <span>Atención exclusiva a tiendas y almacenes</span>
          </span>
          <span className="hidden sm:inline text-blue-300">•</span>
          <span className="text-amber-300 font-bold">
            Pedido mínimo para envío: Bs {MINIMUM_ORDER_BS}
          </span>
        </div>
      </header>

      {/* =========================================================================
          HERO & FILTROS DE CATEGORÍAS
         ========================================================================= */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 px-4 sm:px-6 shadow-xs">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Lista Mayorista de Provisión para Tu Negocio
              </h1>
              <p className="text-xs text-slate-600 mt-1">
                Selecciona la cantidad de fardos o cajas con los botones <span className="font-bold text-blue-600">[-] y [+]</span>. Todo se suma automáticamente para despachar en camión.
              </p>
            </div>

            {/* Buscador */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar papel, Mabel's, OMO, Fino..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 pl-10 pr-8 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:bg-white focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Categorías */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
                  activeCategory === cat
                    ? 'bg-[#0057B8] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          GRILLA DE PRODUCTOS MAYORISTAS
         ========================================================================= */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((prod) => {
            const currentQty = quantities[prod.id] || 0;

            return (
              <article
                key={prod.id}
                className={`flex flex-col justify-between overflow-hidden rounded-2xl border bg-white transition-all shadow-xs ${
                  currentQty > 0
                    ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Foto del producto con badge de alta rotación */}
                  <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized
                      className="object-cover object-center"
                    />
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                      <span className="rounded-md bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                        {prod.brand}
                      </span>
                      {prod.badge && (
                        <span className="rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
                          {prod.badge}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-2 right-2 rounded-md bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-mono text-slate-700 font-semibold border border-slate-200">
                      {prod.sku}
                    </div>
                  </div>

                  {/* Datos del producto */}
                  <div className="p-4 space-y-2">
                    <h3 className="font-bold text-sm text-slate-900 leading-snug">
                      {prod.name}
                    </h3>

                    {/* Presentación en fardo/caja */}
                    <div className="rounded-lg bg-blue-50 border border-blue-100 p-2 text-xs text-blue-900 space-y-0.5">
                      <p className="font-bold flex items-center gap-1.5">
                        <Boxes className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        <span>{prod.packPresentation}</span>
                      </p>
                      <p className="text-[11px] text-blue-700 pl-5">
                        {prod.unitContent}
                      </p>
                    </div>

                    {/* Orientación de ganancia para la tienda */}
                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span>Venta mostrador: Bs {prod.suggestedRetailPriceBs.toFixed(2)} c/u</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-0.5">
                        <BadgePercent className="h-3 w-3" />
                        <span>~{prod.estimatedMarginPercent}% margen</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Barra de precio mayorista y selector de cantidad táctil */}
                <div className="border-t border-slate-100 bg-slate-50/80 p-3.5 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">
                      Precio Mayorista
                    </span>
                    <span className="text-base font-black font-mono text-[#0057B8]">
                      Bs {formatPriceBs(prod.wholesalePriceBs)}
                    </span>
                  </div>

                  {/* Control numérico: [-] [cant] [+] */}
                  <div className="flex items-center rounded-xl border border-slate-300 bg-white shadow-xs p-0.5">
                    <button
                      type="button"
                      onClick={() => handleUpdateQuantity(prod.id, -1)}
                      disabled={currentQty === 0}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer touch-manipulation"
                      aria-label="Disminuir cantidad"
                    >
                      <Minus className="h-4 w-4" />
                    </button>

                    <span className="w-8 text-center font-mono font-black text-xs text-slate-900">
                      {currentQty}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleUpdateQuantity(prod.id, 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0057B8] text-white hover:bg-blue-700 transition-colors cursor-pointer touch-manipulation"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* =========================================================================
          BARRA INFERIOR PERSISTENTE DE REABASTECIMIENTO
         ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-xl p-3 sm:p-4">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Indicador de Pedido Mínimo */}
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-slate-800">
                <Boxes className="h-4 w-4 text-[#0057B8]" />
                <span>
                  Llevas <strong className="text-slate-950 font-black">{totalBultos} bultos</strong> seleccionados
                </span>
              </span>
              <span className="font-mono font-black text-slate-900">
                Bs {formatPriceBs(totalAmountBs)}
              </span>
            </div>

            {/* Barra de progreso visual */}
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  minimumReached ? 'bg-emerald-500' : 'bg-amber-500'
                }`}
                style={{ width: `${Math.min(100, (totalAmountBs / MINIMUM_ORDER_BS) * 100)}%` }}
              />
            </div>

            <p className="text-[11px] text-slate-500">
              {minimumReached ? (
                <span className="text-emerald-600 font-bold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  ¡Pedido mínimo de Bs {MINIMUM_ORDER_BS} alcanzado! Envío en camión bonificado.
                </span>
              ) : (
                <span>
                  Faltan <strong className="text-amber-600">Bs {diffToMinimum}</strong> para alcanzar el pedido mínimo de despacho en camión (Bs {MINIMUM_ORDER_BS}).
                </span>
              )}
            </p>
          </div>

          {/* Botones de acción */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              disabled={totalBultos === 0}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-[#0057B8] hover:bg-blue-700 disabled:opacity-40 text-white font-bold py-3 px-5 text-xs transition-colors cursor-pointer touch-manipulation shadow-md"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Revisar y Enviar Pedido ({totalBultos})</span>
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MODAL / DRAWER DE CONFIRMACIÓN DEL PEDIDO
         ========================================================================= */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white h-full flex flex-col justify-between shadow-2xl">
            {/* Header del Drawer */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-[#0057B8] text-white p-4 sm:p-5">
              <div className="flex items-center gap-2.5">
                <Boxes className="h-5 w-5" />
                <div>
                  <h3 className="font-black text-base sm:text-lg leading-tight">
                    Resumen de Pedido Mayorista
                  </h3>
                  <p className="text-xs text-blue-100">
                    Provisión para almacén · {totalBultos} bultos totales
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="rounded-lg p-2 text-blue-200 hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contenido del Drawer */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 [scrollbar-width:none]">
              {selectedItemsList.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center text-slate-400">
                  <Store className="h-12 w-12 text-slate-300 stroke-1 mb-3" />
                  <p className="text-sm font-semibold text-slate-600">No tienes productos seleccionados</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Usa los botones [+] en la lista para cargar fardos o cajas al pedido de tu tienda.
                  </p>
                </div>
              ) : (
                <>
                  {/* Lista de productos cargados */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Bultos solicitados ({selectedItemsList.length} ítems)
                    </h4>
                    {selectedItemsList.map(({ item, quantity, subtotal }) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-xs text-slate-900 truncate">
                            {item.name}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {item.packPresentation} · Bs {formatPriceBs(item.wholesalePriceBs)} c/u
                          </p>
                        </div>

                        {/* Cantidad y Subtotal */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center rounded-lg border border-slate-300 bg-white p-0.5">
                            <button
                              type="button"
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                              className="h-6 w-6 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center font-mono text-xs font-black">
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                              className="h-6 w-6 flex items-center justify-center text-slate-600 hover:bg-slate-100"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <span className="font-mono font-bold text-xs text-slate-900 min-w-16 text-right">
                            Bs {formatPriceBs(subtotal)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Formulario de Datos de la Tienda de Barrio */}
                  <div className="border-t border-slate-200 pt-4 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Datos de la Tienda para la Ruta de Reparto
                    </h4>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600">
                        Nombre de la Tienda / Minimarket *
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Tienda Doña Rosa / Minimarket Central"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600">
                        Nombre del Propietario / Encargado *
                      </label>
                      <input
                        type="text"
                        placeholder="Ej: Sra. Rosa Mamani"
                        value={ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-hidden"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600">
                        Dirección exacta o Esquinas de referencia para el camión *
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Ej: Calle Calama #534 entre San Martín y 25 de Mayo (frente a la librería)"
                        value={storeAddress}
                        onChange={(e) => setStoreAddress(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-hidden resize-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600">
                        Turno preferido de descarga
                      </label>
                      <select
                        value={deliveryDay}
                        onChange={(e) => setDeliveryDay(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white p-2.5 text-xs text-slate-800 focus:border-blue-600 focus:outline-hidden"
                      >
                        <option value="Mañana por la mañana (08:00 - 12:30)">
                          Mañana por la mañana (08:00 - 12:30)
                        </option>
                        <option value="Mañana por la tarde (14:00 - 18:30)">
                          Mañana por la tarde (14:00 - 18:30)
                        </option>
                        <option value="Día sábado por la mañana">
                          Sábado por la mañana
                        </option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] font-semibold text-slate-600">
                        Forma de pago al recibir la mercadería
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentOption('efectivo-camion')}
                          className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-colors cursor-pointer ${
                            paymentOption === 'efectivo-camion'
                              ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                              : 'border-slate-200 bg-white text-slate-600'
                          }`}
                        >
                          💵 Efectivo al chofer
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentOption('qr')}
                          className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-colors cursor-pointer ${
                            paymentOption === 'qr'
                              ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                              : 'border-slate-200 bg-white text-slate-600'
                          }`}
                        >
                          📱 Pago por QR al descargar
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer del Drawer con botón WhatsApp */}
            {selectedItemsList.length > 0 && (
              <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-600">Total Bultos a cargar:</span>
                  <span className="font-mono font-black text-slate-900">{totalBultos} bultos</span>
                </div>
                <div className="flex items-center justify-between text-base border-t border-slate-200 pt-2">
                  <span className="font-bold text-slate-800">Total Factura / Nota:</span>
                  <span className="font-mono font-black text-xl text-[#0057B8]">
                    Bs {formatPriceBs(totalAmountBs)}
                  </span>
                </div>

                <a
                  href={generateWhatsAppUrl() ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 text-xs uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/20 touch-manipulation cursor-pointer"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Enviar Pedido Mayorista por WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer B2B */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-8 px-4 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl space-y-2">
          <p className="font-bold text-slate-700">
            Distribuidora Mayorista Los Andes · Central de Abastecimiento Cochabamba
          </p>
          <p className="text-[11px] text-slate-400">
            Atención comercial de lunes a sábado de 07:00 a 19:00 · Reparto puntual en camiones propios.
          </p>
          <p className="text-[10px] text-slate-400 pt-2">
            © Distribuidora Los Andes 2026 · Catálogo de pedidos desarrollado por{' '}
            <a
              href="https://verastudiodigital.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 underline underline-offset-2"
            >
              Vera Studio Digital
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
