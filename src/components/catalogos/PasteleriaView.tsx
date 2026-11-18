'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  pasteleriaProductsData,
  type PasteleriaProduct,
  type PasteleriaSizeOption,
} from '@/data/catalogos/pasteleriaData';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { Cake, Minus, Plus, Sparkles, X } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

function formatPriceBs(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function PasteleriaView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedProduct, setSelectedProduct] = useState<PasteleriaProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<PasteleriaSizeOption | undefined>(undefined);
  const [selectedFilling, setSelectedFilling] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [eventDate, setEventDate] = useState('');
  const [dedicationMessage, setDedicationMessage] = useState('');

  const categories = ['Todas', 'Tortas', 'Individuales', 'Bollería', 'Postres Fríos', 'Boxes & Regalos'];

  const filteredProducts =
    selectedCategory === 'Todas'
      ? pasteleriaProductsData
      : pasteleriaProductsData.filter((p) => p.category === selectedCategory);

  const handleOpenProduct = (prod: PasteleriaProduct) => {
    setSelectedProduct(prod);
    const firstSize = prod.sizes?.[0];
    setSelectedSize(firstSize);
    const firstFilling = prod.fillings?.[0] ?? '';
    setSelectedFilling(firstFilling);
    setQuantity(1);
    setEventDate('');
    setDedicationMessage('');
  };

  const currentPrice = selectedSize ? selectedSize.priceBs : selectedProduct?.priceBs || 0;
  const totalPrice = currentPrice * quantity;

  const handleOrderWhatsApp = () => {
    if (!selectedProduct) return;
    let msg = `🎂 *PEDIDO DE REPOSTERÍA - LE PETIT ATELIER* 🎂\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `• *Producto:* ${quantity}x ${selectedProduct.name}\n`;
    if (selectedSize) {
      msg += `• *Tamaño / Porción:* ${selectedSize.label} (${selectedSize.portion})\n`;
    }
    if (selectedFilling) {
      msg += `• *Relleno seleccionado:* ${selectedFilling}\n`;
    }
    if (eventDate.trim()) {
      msg += `• *Fecha deseada para retiro/entrega:* ${eventDate.trim()}\n`;
    }
    if (dedicationMessage.trim()) {
      msg += `• *Mensaje / Dedicatoria personalizada:* "${dedicationMessage.trim()}"\n`;
    }
    msg += `\n*TOTAL ESTIMADO: Bs ${formatPriceBs(totalPrice)}*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Hola! Quisiera confirmar este encargo y coordinar el pago por transferencia QR o en tienda.`;

    const url = buildWhatsAppUrl(msg);
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-900 font-sans antialiased selection:bg-rose-200 pb-20">
      {/* Header Le Petit Atelier */}
      <header className="sticky top-0 z-30 w-full border-b border-stone-200 bg-[#FFFDF9]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <Cake className="h-5 w-5" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900">
                Le Petit Atelier
              </span>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest font-medium">
                Pâtisserie Fine & Tortas de Autor
              </p>
            </div>
          </div>

          <a
            href={
              buildWhatsAppUrl(
                'Hola Le Petit Atelier, quisiera consultar sobre la disponibilidad de tortas para encargo especial.'
              ) ?? '#'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-stone-900 text-white px-4 py-2 text-xs font-medium hover:bg-stone-800 transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
            <span className="hidden sm:inline">Encargos por WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-8 pb-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200/60 px-3 py-1 text-xs font-semibold text-rose-700">
            <Sparkles className="h-3.5 w-3.5" />
            Horneado diario con mantequilla pura & vainilla natural
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal">
            Repostería artesanal para momentos inolvidables
          </h1>
          <p className="text-xs sm:text-sm text-stone-600">
            Selecciona tu postre o tarta para ver porciones, rellenos y encargar directamente a nuestro taller.
          </p>
        </div>

        {/* Filtros */}
        <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Postres */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <article
              key={prod.id}
              onClick={() => handleOpenProduct(prod)}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xs hover:shadow-lg transition-all cursor-pointer"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  {prod.isSpecialty && (
                    <span className="absolute top-3 left-3 rounded-full bg-rose-600 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                      Especialidad de la Casa
                    </span>
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-rose-600">
                    {prod.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-rose-700 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {prod.subtitle}
                  </p>
                </div>
              </div>

              <div className="border-t border-stone-100 p-5 flex items-center justify-between bg-stone-50/50">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider block">
                    Desde
                  </span>
                  <span className="font-serif text-lg font-bold text-stone-900">
                    Bs {formatPriceBs(prod.priceBs)}
                  </span>
                </div>

                <button
                  type="button"
                  className="rounded-full bg-stone-900 group-hover:bg-rose-600 text-white text-xs px-4 py-2 font-medium transition-colors cursor-pointer"
                >
                  Ver Opciones
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Modal de Detalle y Encargo */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl p-6 space-y-5 [scrollbar-width:none]">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-stone-100">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="500px"
                unoptimized
                className="object-cover object-center"
              />
            </div>

            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                {selectedProduct.category}
              </span>
              <h2 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
                {selectedProduct.name}
              </h2>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* Tamaños / Porciones */}
            <div className="space-y-2 border-t border-stone-100 pt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                Selecciona la porción o presentación
              </label>
              <div className="space-y-2">
                {selectedProduct.sizes.map((s) => {
                  const isSelected = selectedSize?.label === s.label;
                  return (
                    <div
                      key={s.label}
                      onClick={() => setSelectedSize(s)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-rose-600 bg-rose-50/50 text-rose-950 font-semibold'
                          : 'border-stone-200 hover:border-stone-300 text-stone-700'
                      }`}
                    >
                      <div>
                        <p className="text-xs font-medium">{s.label}</p>
                        <p className="text-[11px] text-stone-500">{s.portion}</p>
                      </div>
                      <span className="font-serif font-bold text-sm text-stone-900">
                        Bs {formatPriceBs(s.priceBs)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rellenos (si aplica) */}
            {selectedProduct.fillings && (
              <div className="space-y-2 border-t border-stone-100 pt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                  Elige el sabor o relleno
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {selectedProduct.fillings.map((fil) => (
                    <button
                      key={fil}
                      type="button"
                      onClick={() => setSelectedFilling(fil)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                        selectedFilling === fil
                          ? 'border-rose-600 bg-rose-50 text-rose-900 font-semibold'
                          : 'border-stone-200 text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      {fil}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dedicatoria y Fecha */}
            <div className="space-y-3 border-t border-stone-100 pt-4">
              <input
                type="text"
                placeholder="Fecha deseada de entrega (ej: Sábado 15:00)"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-rose-600 focus:outline-hidden"
              />
              <input
                type="text"
                placeholder="Dedicatoria o frase para tarjeta (Opcional)"
                value={dedicationMessage}
                onChange={(e) => setDedicationMessage(e.target.value)}
                className="w-full rounded-xl border border-stone-200 p-2.5 text-xs text-stone-900 placeholder-stone-400 focus:border-rose-600 focus:outline-hidden"
              />
            </div>

            {/* Barra de acción */}
            <div className="border-t border-stone-100 pt-4 flex items-center justify-between gap-4">
              <div className="flex items-center rounded-xl border border-stone-200 bg-stone-50 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-8 w-8 flex items-center justify-center text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-8 text-center font-bold text-xs">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-8 w-8 flex items-center justify-center text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Encargar · Bs {formatPriceBs(totalPrice)}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 border-t border-stone-200 bg-white py-10 px-4 text-center text-xs text-stone-500">
        <p className="font-serif text-sm font-semibold text-stone-700">
          Le Petit Atelier Pâtisserie · Cochabamba, Bolivia
        </p>
        <p className="text-[10px] text-stone-400 mt-2">
          © Le Petit Atelier 2026 · Catálogo digital desarrollado por{' '}
          <a
            href="https://verastudiodigital.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-700 underline underline-offset-2"
          >
            Vera Studio Digital
          </a>
        </p>
      </footer>
    </div>
  );
}
