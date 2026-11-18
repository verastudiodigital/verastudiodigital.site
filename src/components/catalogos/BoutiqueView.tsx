'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  boutiqueProductsData,
  type BoutiqueProduct,
} from '@/data/catalogos/boutiqueData';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { Sparkles, X } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

function formatPriceBs(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function BoutiqueView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedProduct, setSelectedProduct] = useState<BoutiqueProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  const categories = [
    'Todas',
    'Vestidos de Noche',
    'Faldas & Pantalones',
    'Vestidos de Cóctel',
    'Prendas de Punto',
    'Lino & Natural',
    'Vestidos de Verano',
  ];

  const filteredProducts =
    selectedCategory === 'Todas'
      ? boutiqueProductsData
      : boutiqueProductsData.filter((p) => p.category === selectedCategory);

  const handleOpenProduct = (prod: BoutiqueProduct) => {
    setSelectedProduct(prod);
    setSelectedSize(prod.sizes[0] || 'M');
    setSelectedColor(prod.colors[0]?.name || prod.colorName);
  };

  const handleOrderWhatsApp = () => {
    if (!selectedProduct) return;
    let msg = `✨ *CONSULTA DE BOUTIQUE - MAISON VÉRA* ✨\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Deseo consultar la disponibilidad y probarme la prenda:\n`;
    msg += `• *Prenda:* ${selectedProduct.name} (${selectedProduct.brand})\n`;
    msg += `• *Código:* ${selectedProduct.refCode}\n`;
    msg += `• *Talla elegida:* ${selectedSize}\n`;
    msg += `• *Color:* ${selectedColor}\n`;
    msg += `• *Precio:* Bs ${formatPriceBs(selectedProduct.priceBs)}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `¿Tienen disponible en showroom para visita o despacho asegurado? Gracias.`;

    const url = buildWhatsAppUrl(msg);
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-neutral-900 font-sans antialiased selection:bg-neutral-200 pb-20">
      {/* Header Maison Véra */}
      <header className="sticky top-0 z-30 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-neutral-600 hidden sm:flex">
            <span>Colección</span>
            <span>Editorial</span>
          </div>

          <div className="text-center">
            <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.15em] text-neutral-900 uppercase">
              Maison Véra
            </span>
            <p className="text-[9px] text-neutral-400 uppercase tracking-widest">
              Boutique & Tendencia Femenina
            </p>
          </div>

          <a
            href={
              buildWhatsAppUrl(
                'Hola Maison Véra, quisiera información sobre las prendas disponibles en su showroom.'
              ) ?? '#'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-xs uppercase tracking-widest text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            <WhatsAppIcon className="h-4 w-4 text-emerald-500" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-8 pb-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 text-xs font-semibold text-neutral-700">
            <Sparkles className="h-3.5 w-3.5" />
            Colección Cápsula de Temporada · Stock Limitado
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-light">
            Elegancia contemporánea y siluetas esenciales
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Prendas de alta costura y lino natural con asesoría personalizada de imagen.
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
                  ? 'bg-neutral-900 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Ropa */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((prod) => (
            <article
              key={prod.id}
              onClick={() => handleOpenProduct(prod)}
              className="group flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              <div>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    unoptimized
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded-md bg-white/90 backdrop-blur-xs px-2 py-0.5 text-[10px] font-bold text-neutral-800 uppercase tracking-wider">
                    {prod.brand}
                  </div>
                </div>

                <div className="mt-3 space-y-1">
                  <h3 className="font-serif text-sm sm:text-base font-normal text-neutral-900 group-hover:text-black transition-colors leading-snug">
                    {prod.name}
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    {prod.category}
                  </p>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span className="font-serif font-bold text-sm text-neutral-900">
                  Bs {formatPriceBs(prod.priceBs)}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">
                  {prod.sizes.join(' · ')}
                </span>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Modal de Detalle */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl p-6 space-y-5 [scrollbar-width:none]">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="500px"
                unoptimized
                className="object-cover object-center"
              />
              <div className="absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-xs font-bold text-neutral-900">
                {selectedProduct.brand}
              </div>
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                {selectedProduct.refCode} · {selectedProduct.category}
              </span>
              <h2 className="font-serif text-2xl font-normal text-neutral-900 mt-1">
                {selectedProduct.name}
              </h2>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                {selectedProduct.description}
              </p>
              <p className="text-[11px] text-neutral-500 mt-2 font-mono">
                Composición: {selectedProduct.composition}
              </p>
            </div>

            {/* Selector de Tallas */}
            <div className="space-y-2 border-t border-neutral-100 pt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                Selecciona tu talla
              </label>
              <div className="flex gap-2">
                {selectedProduct.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`h-10 w-12 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      selectedSize === sz
                        ? 'border-neutral-900 bg-neutral-900 text-white'
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Colores */}
            <div className="space-y-2 border-t border-neutral-100 pt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block">
                Color disponible: <span className="font-medium text-neutral-900">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {selectedProduct.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs cursor-pointer ${
                      selectedColor === c.name
                        ? 'border-neutral-900 bg-neutral-100 font-bold text-neutral-900'
                        : 'border-neutral-200 text-neutral-600'
                    }`}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-neutral-300"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Botón WhatsApp */}
            <div className="border-t border-neutral-100 pt-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider block">
                  Precio
                </span>
                <span className="font-serif text-xl font-bold text-neutral-900">
                  Bs {formatPriceBs(selectedProduct.priceBs)}
                </span>
              </div>

              <button
                type="button"
                onClick={handleOrderWhatsApp}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Solicitar por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-20 border-t border-neutral-200 bg-white py-10 px-4 text-center text-xs text-neutral-500">
        <p className="font-serif text-sm font-light uppercase tracking-widest text-neutral-700">
          Maison Véra Boutique · Cochabamba, Bolivia
        </p>
        <p className="text-[10px] text-neutral-400 mt-2">
          © Maison Véra 2026 · Catálogo digital desarrollado por{' '}
          <a
            href="https://verastudiodigital.site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 underline underline-offset-2"
          >
            Vera Studio Digital
          </a>
        </p>
      </footer>
    </div>
  );
}
