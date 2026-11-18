'use client';

import { useState } from 'react';
import Image from 'next/image';
import { nadirJoyeriaProducts, type JoyeriaProduct } from '@/data/catalogos/nadirJoyeriaData';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Search, X } from 'lucide-react';

function formatPriceBs(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Enlaces directos a redes sociales oficiales
const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/nadirjoyeria',
  facebook: 'https://facebook.com/nadirjoyeria',
  tiktok: 'https://tiktok.com/@nadirjoyeria',
  whatsapp: 'https://wa.me/59176406512',
};

export function NadirJoyeriaView() {
  const [selectedProduct, setSelectedProduct] = useState<JoyeriaProduct | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | 'Anillos' | 'Aretes' | 'Collares' | 'Pulseras'>('Todas');

  // Estado del bloque de búsqueda
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpenMobile, setIsSearchOpenMobile] = useState(false);

  const filteredProducts = nadirJoyeriaProducts.filter((p) => {
    const matchesCat = selectedCategory === 'Todas' || p.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === '' ||
      p.name.toLowerCase().includes(q) ||
      p.subtitle.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.variants.some((v) => v.name.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const handleOpenProduct = (prod: JoyeriaProduct) => {
    setSelectedProduct(prod);
    setActiveImageIndex(0);
    setSelectedVariantIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProduct = () => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetAllFilters = () => {
    setSelectedProduct(null);
    setSelectedCategory('Todas');
    setSearchQuery('');
    setIsSearchOpenMobile(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased selection:bg-neutral-200 selection:text-black">
      {/* =========================================================================
          HEADER NADIR JOYERÍA
          - Redes sociales funcionales
          - Logotipo Nadir Joyería
          - Bloque interactivo de búsqueda
          - WhatsApp directo
         ========================================================================= */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-100 bg-white/95 backdrop-blur-xs transition-colors">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8 lg:px-12 gap-3">
          {/* Navegación Izquierda: Redes Sociales directas y Enlace de Colección */}
          <div className="flex items-center gap-4 sm:gap-6 text-[11px] font-medium tracking-[0.2em] uppercase text-neutral-600">
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-neutral-950 font-semibold hover:opacity-70 transition-opacity cursor-pointer touch-manipulation"
            >
              Colección
            </button>

            {/* Enlaces directos a Redes Sociales en el encabezado */}
            <div className="hidden sm:flex items-center gap-4 text-neutral-500 border-l border-neutral-200 pl-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                title="Instagram Nadir Joyería"
              >
                Instagram
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors"
                title="Facebook Nadir Joyería"
              >
                Facebook
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black transition-colors hidden md:inline"
                title="TikTok Nadir Joyería"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Logotipo Central: Nadir Joyería */}
          <button
            type="button"
            onClick={resetAllFilters}
            className="text-center cursor-pointer select-none group flex flex-col items-center"
          >
            <span className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-tight text-neutral-950 transition-opacity group-hover:opacity-80">
              Nadir Joyería
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 font-light -mt-0.5">
              Atelier &amp; Orfebrería
            </span>
          </button>

          {/* Navegación Derecha: Bloque de búsqueda + WhatsApp directo */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Bloque de Búsqueda Desktop */}
            <div className="relative hidden lg:flex items-center">
              <Search className="absolute left-3 h-3.5 w-3.5 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar joyas, oro, anillos..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (selectedProduct) setSelectedProduct(null);
                }}
                className="w-56 xl:w-64 rounded-full border border-neutral-200 bg-neutral-50/60 pl-8 pr-7 py-1.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:bg-white focus:outline-hidden transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-neutral-400 hover:text-black cursor-pointer"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Botón de búsqueda para pantallas móviles */}
            <button
              type="button"
              onClick={() => setIsSearchOpenMobile(!isSearchOpenMobile)}
              className="lg:hidden p-2 text-neutral-700 hover:text-black cursor-pointer touch-manipulation"
              aria-label="Abrir buscador"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Enlace directo a WhatsApp */}
            <a
              href={
                buildWhatsAppUrl(
                  'Hola Nadir Joyería, deseo comunicarme con el servicio de atención para consultar sobre la colección de piezas exclusivas.'
                ) ?? '#'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-900 hover:text-black transition-colors cursor-pointer touch-manipulation"
              title="Atención directa por WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Barra de búsqueda desplegable en móvil */}
        {isSearchOpenMobile && (
          <div className="lg:hidden border-t border-neutral-100 bg-neutral-50 px-4 py-2.5 flex items-center gap-2 animate-in slide-in-from-top-2 duration-200">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, anillo, arete, oro..."
                value={searchQuery}
                autoFocus
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (selectedProduct) setSelectedProduct(null);
                }}
                className="w-full rounded-full border border-neutral-300 bg-white pl-8 pr-7 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsSearchOpenMobile(false)}
              className="text-xs uppercase tracking-wider text-neutral-600 px-2 py-1"
            >
              Cerrar
            </button>
          </div>
        )}
      </header>

      {/* =========================================================================
          CONTENIDO: VISTA DETALLE DE PRODUCTO O CATÁLOGO LIMPIO
         ========================================================================= */}
      {selectedProduct ? (
        /* =======================================================================
           VISTA DETALLE (Con selector de metales nobles y flechas de navegación)
           ======================================================================= */
        (() => {
          const productImages = [
            selectedProduct.image,
            selectedProduct.wornImage,
            selectedProduct.detailImage,
          ].filter(Boolean);

          const safeImageIndex = Math.min(activeImageIndex, productImages.length - 1);
          const currentImage = productImages[safeImageIndex] || selectedProduct.image;
          const currentVariant =
            selectedProduct.variants[selectedVariantIndex] ||
            selectedProduct.variants[0] || {
              name: 'Gold plated brass',
              priceBs: selectedProduct.basePriceBs,
              priceUsd: selectedProduct.basePriceUsd,
              note: '',
            };

          const whatsappOrderUrl = buildWhatsAppUrl(
            `Hola Nadir Joyería, deseo solicitar la pieza de orfebrería *${selectedProduct.name}* (${selectedProduct.refCode})\n\n` +
              `• Metal seleccionado: ${currentVariant.name}\n` +
              `• Precio: Bs ${formatPriceBs(currentVariant.priceBs)} (aprox. $${currentVariant.priceUsd} USD)\n\n` +
              `¿Tienen stock en taller o cuál es el tiempo de confección artesanal?`
          );

          return (
            <div className="w-full bg-white animate-in fade-in duration-300">
              {/* -------------------------------------------------------------
                  1. DETALLE MÓVIL (< lg)
                  ------------------------------------------------------------- */}
              <div className="lg:hidden w-full flex flex-col">
                {/* Foto principal a pantalla completa sin márgenes */}
                <div className="relative w-full aspect-[4/5] bg-[#F7F7F7] overflow-hidden">
                  <Image
                    src={currentImage}
                    alt={selectedProduct.name}
                    fill
                    priority
                    sizes="100vw"
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>

                {/* Fila de miniaturas interactivas */}
                <div className="grid grid-cols-3 gap-2 px-4 mt-3">
                  {productImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-square w-full overflow-hidden bg-[#F7F7F7] transition-all cursor-pointer touch-manipulation ${
                        safeImageIndex === idx
                          ? 'ring-1.5 ring-black ring-offset-1'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${selectedProduct.name} vista ${idx + 1}`}
                        fill
                        sizes="30vw"
                        unoptimized
                        className="object-cover object-center"
                      />
                    </button>
                  ))}
                </div>

                {/* Línea horizontal divisoria */}
                <div className="border-b border-neutral-700 mx-4 mt-6 mb-5" />

                {/* Título de la pieza en serif */}
                <div className="px-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-1">
                    {selectedProduct.refCode} · {selectedProduct.category}
                  </span>
                  <h1 className="font-serif text-3xl font-normal text-neutral-950 tracking-tight">
                    {selectedProduct.name}
                  </h1>
                </div>

                {/* Opciones de metales nobles y precios */}
                <div className="px-4 mt-5 space-y-4">
                  {selectedProduct.variants.map((variant, idx) => {
                    const isSelected = selectedVariantIndex === idx;
                    return (
                      <button
                        key={variant.name}
                        type="button"
                        onClick={() => setSelectedVariantIndex(idx)}
                        className="w-full text-left cursor-pointer group select-none touch-manipulation"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <p
                            className={`font-serif text-sm transition-colors ${
                              isSelected
                                ? 'text-black font-medium underline underline-offset-4 decoration-neutral-900'
                                : 'text-neutral-700'
                            }`}
                          >
                            {variant.name} - ${variant.priceUsd}
                          </p>
                          <span className="font-mono text-xs font-semibold text-neutral-900">
                            Bs {formatPriceBs(variant.priceBs)}
                          </span>
                        </div>
                        <p className="font-serif italic text-xs text-neutral-500 mt-0.5">
                          {variant.note || 'Elaboración artesanal sobre pedido.'}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Línea horizontal divisoria */}
                <div className="border-b border-neutral-700 mx-4 my-5" />

                {/* Notas de manufactura y despacho */}
                <div className="px-4 space-y-1.5 text-xs text-neutral-700 font-light leading-relaxed">
                  <p>Pieza de autor elaborada a mano en taller de orfebrería Nadir.</p>
                  <p>Envío asegurado a toda Bolivia con estuche de protección.</p>
                  <p>{selectedProduct.leadTime}</p>
                </div>

                {/* Botón de solicitud a WhatsApp */}
                <div className="px-4 mt-6 space-y-3">
                  <a
                    href={whatsappOrderUrl ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black text-white py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-xs touch-manipulation cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                    <span>Solicitar por WhatsApp · Bs {formatPriceBs(currentVariant.priceBs)}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCloseProduct}
                    className="w-full py-2.5 text-center text-[11px] uppercase tracking-[0.25em] text-neutral-500 hover:text-black transition-colors cursor-pointer touch-manipulation"
                  >
                    ← Volver a la colección
                  </button>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  2. DETALLE DESKTOP (lg:flex)
                  ------------------------------------------------------------- */}
              <div className="hidden lg:flex min-h-[calc(100vh-80px)] w-full">
                {/* Columna Izquierda: Foto grande que ocupa el área con flechas <- y -> */}
                <div
                  className="relative w-7/12 min-h-[calc(100vh-80px)] bg-[#F7F7F7] overflow-hidden group select-none flex items-center justify-center cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    if (clickX > rect.width / 2) {
                      setActiveImageIndex((prev) => (prev + 1) % productImages.length);
                    } else {
                      setActiveImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
                    }
                  }}
                >
                  <Image
                    src={currentImage}
                    alt={selectedProduct.name}
                    fill
                    priority
                    sizes="60vw"
                    unoptimized
                    className="object-cover object-center transition-all duration-300"
                  />

                  {/* Flecha Izquierda (<-) */}
                  {safeImageIndex > 0 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => Math.max(0, prev - 1));
                      }}
                      className="absolute left-8 top-1/2 -translate-y-1/2 z-20 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-800 hover:text-black cursor-pointer drop-shadow-xs"
                      aria-label="Imagen anterior"
                    >
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="20" y1="12" x2="4" y2="12" />
                        <polyline points="10 18 4 12 10 6" />
                      </svg>
                    </button>
                  )}

                  {/* Flecha Derecha (->) */}
                  {safeImageIndex < productImages.length - 1 && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => Math.min(productImages.length - 1, prev + 1));
                      }}
                      className="absolute right-8 top-1/2 -translate-y-1/2 z-20 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-neutral-800 hover:text-black cursor-pointer drop-shadow-xs"
                      aria-label="Siguiente imagen"
                    >
                      <svg
                        width="46"
                        height="46"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <polyline points="14 6 20 12 14 18" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Columna Derecha: Información Editorial Minimalista */}
                <div className="w-5/12 flex flex-col justify-center px-12 lg:px-16 xl:px-20 py-16 bg-white">
                  <div className="w-full border-t border-neutral-700 mb-8" />

                  <span className="text-[11px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                    {selectedProduct.refCode} · {selectedProduct.category}
                  </span>

                  <h1 className="font-serif text-4xl lg:text-[44px] font-normal tracking-tight text-neutral-900 leading-tight">
                    {selectedProduct.name}
                  </h1>

                  <p className="mt-3 text-xs text-neutral-600 leading-relaxed font-light">
                    {selectedProduct.description}
                  </p>

                  <div className="mt-8 space-y-5">
                    {selectedProduct.variants.map((variant, idx) => {
                      const isSelected = selectedVariantIndex === idx;
                      return (
                        <div
                          key={variant.name}
                          onClick={() => setSelectedVariantIndex(idx)}
                          className="cursor-pointer group/item select-none"
                        >
                          <div className="flex items-baseline justify-between gap-4">
                            <p
                              className={`font-serif text-base lg:text-lg transition-colors ${
                                isSelected
                                  ? 'text-black font-medium underline underline-offset-4 decoration-neutral-900'
                                  : 'text-neutral-700 group-hover/item:text-black'
                              }`}
                            >
                              {variant.name} — ${variant.priceUsd}
                            </p>
                            <span className="font-mono text-sm font-semibold text-neutral-900">
                              Bs {formatPriceBs(variant.priceBs)}
                            </span>
                          </div>
                          <p className="font-serif italic text-xs text-neutral-500 mt-1">
                            {variant.note || 'Elaboración sobre pedido en taller.'}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="w-full border-t border-neutral-700 my-8" />

                  <div className="space-y-1.5 text-xs text-neutral-700 font-light leading-relaxed">
                    <p>Orfebrería en metales certificados de minería ética.</p>
                    <p>Envío asegurado en estuche de terciopelo a toda Bolivia.</p>
                    <p>{selectedProduct.leadTime}</p>
                  </div>

                  <div className="mt-10 space-y-3">
                    <a
                      href={whatsappOrderUrl ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-neutral-900 hover:bg-black text-white py-4 px-8 text-xs uppercase tracking-[0.25em] font-medium transition-colors shadow-sm cursor-pointer"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                      <span>Solicitar por WhatsApp · Bs {formatPriceBs(currentVariant.priceBs)}</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCloseProduct}
                      className="w-full py-2.5 text-center text-xs uppercase tracking-[0.25em] text-neutral-500 hover:text-black transition-colors cursor-pointer"
                    >
                      ← Volver a la colección
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()
      ) : (
        /* =======================================================================
           VISTA CATÁLOGO LIMPIO (Solo productos, sin textos de relleno)
           ======================================================================= */
        <main className="w-full bg-white pb-24">
          {/* Barra de Filtros de Categorías & Indicador de Búsqueda */}
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-4 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-100">
            {/* Categorías */}
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {(['Todas', 'Anillos', 'Aretes', 'Collares', 'Pulseras'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] uppercase tracking-[0.2em] font-medium transition-colors whitespace-nowrap cursor-pointer touch-manipulation pb-1 ${
                    selectedCategory === cat
                      ? 'text-black border-b border-black font-semibold'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Contador o indicador de búsqueda */}
            <div className="flex items-center gap-3 text-[12px] text-neutral-500 font-medium">
              {searchQuery && (
                <span className="text-neutral-800 font-sans font-medium lowercase">
                  Buscando: &quot;<strong className="text-black">{searchQuery}</strong>&quot;
                </span>
              )}
              <span className="font-sans text-neutral-600 font-medium">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'pieza' : 'piezas'} en atelier
              </span>
            </div>
          </div>

          {/* Cuadrícula de Joyería Nadir: Imágenes ocupan el 100% de la tarjeta */}
          <div className="w-full px-2 sm:px-8 lg:px-12 mt-4 sm:mt-6">
            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center space-y-3">
                <p className="font-serif text-lg text-neutral-700">
                  No encontramos piezas que coincidan con tu búsqueda.
                </p>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="rounded-full border border-neutral-300 px-5 py-2 text-xs uppercase tracking-widest text-neutral-800 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
                >
                  Ver toda la colección
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-8 sm:gap-x-6 sm:gap-y-12">
                {filteredProducts.map((prod) => {
                  const isHovered = hoveredProductId === prod.id;
                  const displayImage = isHovered && prod.wornImage ? prod.wornImage : prod.image;

                  return (
                    <article
                      key={prod.id}
                      onClick={() => handleOpenProduct(prod)}
                      onMouseEnter={() => setHoveredProductId(prod.id)}
                      onMouseLeave={() => setHoveredProductId(null)}
                      className="group flex flex-col cursor-pointer select-none touch-manipulation"
                    >
                      {/* Imagen que ocupa el 100% del espacio sin relleno blanco */}
                      <div className="relative w-full aspect-[4/5] bg-[#F7F7F7] overflow-hidden">
                        <Image
                          src={displayImage}
                          alt={prod.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          unoptimized
                          className="object-cover object-center transition-all duration-500 ease-out sm:group-hover:scale-102"
                        />
                      </div>

                      {/* Información tipográfica limpia al pie de la foto */}
                      <div className="mt-3.5 sm:mt-4 text-center sm:text-left space-y-1 px-1">
                        <h2 className="font-serif text-sm sm:text-base font-normal text-neutral-900 group-hover:text-black transition-colors">
                          {prod.name}
                        </h2>
                        <div className="text-[11px] sm:text-xs text-neutral-600 font-light space-y-0.5">
                          <p>Gold plated brass ${prod.basePriceUsd} · Bs {formatPriceBs(prod.basePriceBs)}</p>
                          <p className="text-neutral-500">
                            Sterling silver ${Math.round(prod.basePriceUsd * 1.5)} · Bs {formatPriceBs(Math.round(prod.basePriceBs * 1.5))}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </main>
      )}

      {/* =========================================================================
          FOOTER NADIR JOYERÍA
          - Redes sociales con enlaces directos
          - Teléfono y WhatsApp oficial
          - Crédito discreto
         ========================================================================= */}
      <footer className="w-full bg-white border-t border-neutral-100 py-12 px-4 sm:px-8 lg:px-12 text-[11px] tracking-[0.2em] uppercase text-neutral-500">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* Enlaces de Redes Sociales Directos en el Pie */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 font-medium">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              Facebook
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              TikTok
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black transition-colors"
            >
              WhatsApp Oficial
            </a>
          </div>

          {/* Crédito sutil */}
          <div className="text-[10px] text-neutral-400">
            <span>© Nadir Joyería 2026 · Catálogo digital desarrollado por </span>
            <a
              href="https://verastudiodigital.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black underline underline-offset-2"
            >
              Vera Studio Digital
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
