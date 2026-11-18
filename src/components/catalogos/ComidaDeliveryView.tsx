'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  foodProductsData,
  type FoodProduct,
  type FoodOption,
  type FoodExtra,
} from '@/data/catalogos/comidaDeliveryData';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import {
  Clock,
  Flame,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  X,
  Check,
  CreditCard,
  QrCode,
  Banknote,
  Search,
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

function formatPriceBs(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

interface CartItem {
  id: string;
  productId: string;
  productName: string;
  pricePerUnit: number;
  quantity: number;
  selectedSize?: FoodOption;
  selectedSauces: string[];
  selectedExtras: FoodExtra[];
  notes?: string;
  itemTotal: number;
}

export function ComidaDeliveryView() {
  const [activeCategory, setActiveCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<FoodProduct | null>(null);

  // Estados del modal de personalización
  const [customSize, setCustomSize] = useState<FoodOption | undefined>(undefined);
  const [customSauces, setCustomSauces] = useState<string[]>([]);
  const [customExtras, setCustomExtras] = useState<FoodExtra[]>([]);
  const [customNotes, setCustomNotes] = useState('');
  const [customQuantity, setCustomQuantity] = useState(1);

  // Carrito de compras
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Datos del cliente para el delivery
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'efectivo' | 'pos'>('qr');
  const [cashChangeAmount, setCashChangeAmount] = useState('');

  const categories = [
    'Todas',
    'Hamburguesas',
    'Pizzas',
    'Alitas & Snacks',
    'Combos',
    'Bebidas & Postres',
  ];

  const filteredProducts = foodProductsData.filter((item) => {
    const matchesCat = activeCategory === 'Todas' || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Abrir modal de producto
  const handleOpenProduct = (prod: FoodProduct) => {
    setSelectedProduct(prod);
    const firstSize = prod.sizes?.[0];
    setCustomSize(firstSize);
    const firstSauce = prod.availableSauces?.[0]?.name;
    setCustomSauces(firstSauce ? [firstSauce] : []);
    setCustomExtras([]);
    setCustomNotes('');
    setCustomQuantity(1);
  };

  const handleAddDirect = (prod: FoodProduct) => {
    if (prod.hasSizes || (prod.availableExtras && prod.availableExtras.length > 0)) {
      handleOpenProduct(prod);
      return;
    }
    const newItem: CartItem = {
      id: `${prod.id}-${Date.now()}`,
      productId: prod.id,
      productName: prod.name,
      pricePerUnit: prod.priceBs,
      quantity: 1,
      selectedSauces: [],
      selectedExtras: [],
      itemTotal: prod.priceBs,
    };
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true);
  };

  // Calcular precio unitario del item personalizado
  const currentBasePrice = customSize ? customSize.priceBs : selectedProduct?.priceBs || 0;
  const extrasSum = customExtras.reduce((acc, curr) => acc + curr.priceBs, 0);
  const calculatedUnitPrice = currentBasePrice + extrasSum;
  const calculatedTotal = calculatedUnitPrice * customQuantity;

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    const newItem: CartItem = {
      id: `${selectedProduct.id}-${Date.now()}`,
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      pricePerUnit: calculatedUnitPrice,
      quantity: customQuantity,
      selectedSize: customSize,
      selectedSauces: customSauces,
      selectedExtras: customExtras,
      notes: customNotes.trim() ? customNotes.trim() : undefined,
      itemTotal: calculatedTotal,
    };
    setCartItems((prev) => [...prev, newItem]);
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              itemTotal: item.pricePerUnit * newQty,
            };
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.itemTotal, 0);
  const deliveryFee = cartSubtotal >= 80 || cartSubtotal === 0 ? 0 : 10;
  const grandTotal = cartSubtotal + deliveryFee;
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Formatear mensaje para WhatsApp
  const generateWhatsAppUrl = () => {
    if (cartItems.length === 0) return '#';

    let msg = `🔥 *NUEVO PEDIDO - FUEGO & BRASA DELIVERY* 🔥\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName.trim()) msg += `👤 *Cliente:* ${customerName.trim()}\n`;
    if (customerPhone.trim()) msg += `📱 *Teléfono:* ${customerPhone.trim()}\n`;
    if (customerAddress.trim()) {
      msg += `📍 *Dirección de entrega:* ${customerAddress.trim()}\n`;
    } else {
      msg += `📍 *Entrega:* A coordinar ubicación exacta por chat\n`;
    }

    const payLabel =
      paymentMethod === 'qr'
        ? '📱 Pago con QR Simple'
        : paymentMethod === 'efectivo'
        ? `💵 Efectivo${cashChangeAmount.trim() ? ` (paga con Bs ${cashChangeAmount.trim()})` : ''}`
        : '💳 Tarjeta POS Inalámbrico';
    msg += `💳 *Método de pago:* ${payLabel}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    msg += `🍽️ *DETALLE DEL PEDIDO:*\n`;
    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.quantity}x ${item.productName}* — Bs ${formatPriceBs(item.itemTotal)}\n`;
      if (item.selectedSize) {
        msg += `   └ Tamaño: ${item.selectedSize.name}\n`;
      }
      if (item.selectedSauces.length > 0) {
        msg += `   └ Salsas: ${item.selectedSauces.join(', ')}\n`;
      }
      if (item.selectedExtras.length > 0) {
        msg += `   └ Extras: ${item.selectedExtras.map((e) => `${e.name} (+Bs ${e.priceBs})`).join(', ')}\n`;
      }
      if (item.notes) {
        msg += `   └ Nota de cocina: "${item.notes}"\n`;
      }
    });

    msg += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `• *Subtotal:* Bs ${formatPriceBs(cartSubtotal)}\n`;
    msg += `• *Costo de envío:* ${deliveryFee === 0 ? '¡GRATIS! (Superó Bs 80)' : `Bs ${deliveryFee}`}\n`;
    msg += `⭐ *TOTAL A PAGAR: Bs ${formatPriceBs(grandTotal)}*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `¿Podrían confirmarme el tiempo estimado de despacho a mi domicilio? Gracias!`;

    return buildWhatsAppUrl(msg);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-[#F3F4F6] font-sans antialiased selection:bg-amber-500 selection:text-black pb-24">
      {/* =========================================================================
          HEADER DEL RESTAURANTE
         ========================================================================= */}
      <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-[#161920]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo y Nombre */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-500 to-red-500 shadow-md shadow-orange-500/20">
              <Flame className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-xl tracking-tight text-white">
                  Fuego & Brasa
                </span>
                <span className="rounded-md bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-bold text-amber-400 uppercase tracking-wider hidden sm:inline">
                  Grill & Pizza
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-medium">
                Burgers Artesanales & Pizzas a la Piedra
              </p>
            </div>
          </div>

          {/* Estado de cocina & Botón Carrito */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Abierto · Delivery 30-45 min</span>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-black shadow-lg shadow-orange-500/20 transition-all hover:brightness-110 cursor-pointer touch-manipulation"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Mi Pedido</span>
              <span className="rounded-full bg-black/20 px-1.5 py-0.2 text-[11px] font-mono">
                {totalItemCount}
              </span>
              {cartSubtotal > 0 && (
                <span className="hidden sm:inline font-mono font-black border-l border-black/20 pl-2">
                  Bs {formatPriceBs(grandTotal)}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Banner informativo de envío */}
        <div className="bg-gradient-to-r from-orange-600/20 via-amber-600/20 to-red-600/20 border-t border-b border-orange-500/20 py-1 px-4 text-center text-[11px] font-medium text-amber-300">
          🚀 <span className="font-bold">Envío gratis</span> en pedidos superiores a Bs 80 · Envíos a todo Cochabamba
        </div>
      </header>

      {/* =========================================================================
          HERO BANNER COMPACTO
         ========================================================================= */}
      <section className="relative w-full border-b border-white/5 bg-gradient-to-b from-[#1A1D25] to-[#0F1115] py-8 sm:py-12 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs text-orange-400 font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Pide directo a WhatsApp sin intermediarios ni comisiones</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Sabor artesanal a la parrilla, directo a tu mesa
              </h1>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Elige tus platos favoritos, personaliza tus aderezos y salsas caseras, y recibe tu pedido caliente con seguimiento en vivo.
              </p>
            </div>

            {/* Buscador de platillos */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Buscar burger, pizza, bebida..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#161920] pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Categorías en scroll horizontal táctil */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-bold transition-all whitespace-nowrap cursor-pointer touch-manipulation ${
                  activeCategory === cat
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                    : 'bg-[#181B22] text-zinc-300 hover:bg-[#222630] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LISTA DE PRODUCTOS
         ========================================================================= */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#161920] shadow-md transition-all hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                {/* Fotografía de la comida */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 cursor-pointer"
                  onClick={() => handleOpenProduct(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[11px] font-bold text-amber-400">
                      {product.badge}
                    </div>
                  )}
                  {product.prepTimeMinutes && (
                    <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-md bg-black/75 px-2 py-0.5 text-[10px] font-medium text-zinc-300">
                      <Clock className="h-3 w-3 text-amber-400" />
                      <span>{product.prepTimeMinutes} min</span>
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3
                      className="text-base font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                      onClick={() => handleOpenProduct(product)}
                    >
                      {product.name}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Barra inferior: Precio y Botón de adición */}
              <div className="border-t border-white/5 bg-[#121419] p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-medium">
                    {product.hasSizes ? 'Desde' : 'Precio'}
                  </span>
                  <span className="text-lg font-black font-mono text-amber-400">
                    Bs {formatPriceBs(product.priceBs)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleOpenProduct(product)}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-200 hover:bg-white/10 hover:text-white transition-colors cursor-pointer touch-manipulation"
                  >
                    Personalizar
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddDirect(product)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-black hover:bg-amber-400 transition-colors shadow-sm cursor-pointer touch-manipulation"
                    aria-label={`Agregar ${product.name}`}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* =========================================================================
          MODAL DE PERSONALIZACIÓN DEL PLATO
         ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#161920] shadow-2xl [scrollbar-width:none]">
            {/* Foto del plato en modal */}
            <div className="relative h-48 sm:h-56 w-full bg-zinc-900">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                sizes="500px"
                unoptimized
                className="object-cover object-center"
              />
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Título y descripción */}
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {selectedProduct.category}
                </span>
                <h2 className="text-xl font-black text-white mt-0.5">
                  {selectedProduct.name}
                </h2>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Selector de tamaños (si aplica, ej. pizzas) */}
              {selectedProduct.sizes && (
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    Selecciona el tamaño
                  </label>
                  <div className="space-y-2">
                    {selectedProduct.sizes.map((s) => {
                      const isSelected = customSize?.name === s.name;
                      return (
                        <div
                          key={s.name}
                          onClick={() => setCustomSize(s)}
                          className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'border-amber-500 bg-amber-500/10 text-white'
                              : 'border-white/10 bg-[#121419] text-zinc-300 hover:border-white/20'
                          }`}
                        >
                          <span className="text-xs font-semibold">{s.name}</span>
                          <span className="text-xs font-mono font-bold text-amber-400">
                            Bs {formatPriceBs(s.priceBs)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Salsas incluidas */}
              {selectedProduct.availableSauces && (
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Salsas y aderezos incluidos
                    </label>
                    <span className="text-[10px] text-zinc-400">Elige hasta 2</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProduct.availableSauces.map((sauce) => {
                      const isChecked = customSauces.includes(sauce.name);
                      return (
                        <button
                          key={sauce.id}
                          type="button"
                          onClick={() => {
                            if (isChecked) {
                              setCustomSauces(customSauces.filter((s) => s !== sauce.name));
                            } else {
                              if (customSauces.length < 2) {
                                setCustomSauces([...customSauces, sauce.name]);
                              } else {
                                const lastSelected = customSauces[customSauces.length - 1];
                                setCustomSauces(lastSelected ? [lastSelected, sauce.name] : [sauce.name]);
                              }
                            }
                          }}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                            isChecked
                              ? 'border-amber-500 bg-amber-500/15 text-amber-300 font-semibold'
                              : 'border-white/10 bg-[#121419] text-zinc-400 hover:text-white'
                          }`}
                        >
                          <div
                            className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                              isChecked ? 'border-amber-500 bg-amber-500 text-black' : 'border-zinc-600'
                            }`}
                          >
                            {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                          </div>
                          <span className="truncate">{sauce.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Extras opcionales */}
              {selectedProduct.availableExtras && selectedProduct.availableExtras.length > 0 && (
                <div className="space-y-2 border-t border-white/10 pt-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    ¿Deseas agregar algún extra?
                  </label>
                  <div className="space-y-2">
                    {selectedProduct.availableExtras.map((extra) => {
                      const isExtraActive = customExtras.some((e) => e.id === extra.id);
                      return (
                        <div
                          key={extra.id}
                          onClick={() => {
                            if (isExtraActive) {
                              setCustomExtras(customExtras.filter((e) => e.id !== extra.id));
                            } else {
                              setCustomExtras([...customExtras, extra]);
                            }
                          }}
                          className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-colors ${
                            isExtraActive
                              ? 'border-amber-500 bg-amber-500/10 text-white'
                              : 'border-white/10 bg-[#121419] text-zinc-300 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`flex h-4 w-4 items-center justify-center rounded-sm border ${
                                isExtraActive ? 'border-amber-500 bg-amber-500 text-black' : 'border-zinc-600'
                              }`}
                            >
                              {isExtraActive && <Check className="h-3 w-3 stroke-[3]" />}
                            </div>
                            <span className="text-xs">{extra.name}</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-amber-400">
                            +Bs {extra.priceBs}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Indicaciones para cocina */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                  Indicaciones para la cocina (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej: Sin cebolla, salsas en pote aparte, carne bien cocida..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#121419] p-3 text-xs text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-hidden"
                />
              </div>

              {/* Selector de cantidad y Botón de agregar */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between gap-4">
                <div className="flex items-center rounded-xl border border-white/10 bg-[#121419] p-1">
                  <button
                    type="button"
                    onClick={() => setCustomQuantity(Math.max(1, customQuantity - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white cursor-pointer"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-9 text-center font-mono font-bold text-sm">
                    {customQuantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setCustomQuantity(customQuantity + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 py-3.5 px-4 text-xs font-bold text-black shadow-lg shadow-orange-500/20 hover:brightness-110 transition-all cursor-pointer"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Agregar al pedido · Bs {formatPriceBs(calculatedTotal)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          DRAWER LATERAL DEL CARRITO & CHECKOUT A WHATSAPP
         ========================================================================= */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-[#161920] border-l border-white/10 h-full flex flex-col justify-between shadow-2xl">
            {/* Header del carrito */}
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-amber-500" />
                <h3 className="font-black text-lg text-white">Tu Pedido</h3>
                <span className="rounded-full bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 font-bold">
                  {totalItemCount} {totalItemCount === 1 ? 'ítem' : 'ítems'}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Lista de productos en carrito */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 [scrollbar-width:none]">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 text-center text-zinc-500">
                  <UtensilsCrossed className="h-12 w-12 text-zinc-700 stroke-1 mb-3" />
                  <p className="text-sm font-semibold text-zinc-400">Tu pedido está vacío</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Agrega tus hamburguesas o pizzas favoritas para comenzar.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-white/10 bg-[#121419] p-3.5 space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="text-sm font-bold text-white">{item.productName}</h4>
                            {item.selectedSize && (
                              <p className="text-[11px] text-amber-400 font-medium">
                                Tamaño: {item.selectedSize.name}
                              </p>
                            )}
                            {item.selectedSauces.length > 0 && (
                              <p className="text-[11px] text-zinc-400">
                                Salsas: {item.selectedSauces.join(', ')}
                              </p>
                            )}
                            {item.selectedExtras.length > 0 && (
                              <p className="text-[11px] text-zinc-400">
                                Extras: {item.selectedExtras.map((e) => e.name).join(', ')}
                              </p>
                            )}
                            {item.notes && (
                              <p className="text-[11px] text-zinc-500 italic">
                                &quot;{item.notes}&quot;
                              </p>
                            )}
                          </div>
                          <span className="font-mono text-sm font-bold text-amber-400">
                            Bs {formatPriceBs(item.itemTotal)}
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-t border-white/5 pt-2">
                          <button
                            type="button"
                            onClick={() => handleRemoveFromCart(item.id)}
                            className="text-[11px] text-red-400 hover:text-red-300 font-medium cursor-pointer"
                          >
                            Eliminar
                          </button>

                          <div className="flex items-center rounded-lg border border-white/10 bg-black/40 p-0.5">
                            <button
                              type="button"
                              onClick={() => handleUpdateCartQuantity(item.id, -1)}
                              className="h-6 w-6 flex items-center justify-center text-zinc-400 hover:text-white"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center font-mono text-xs font-bold">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleUpdateCartQuantity(item.id, 1)}
                              className="h-6 w-6 flex items-center justify-center text-zinc-400 hover:text-white"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Formulario de Entrega & Pago */}
                  <div className="border-t border-white/10 pt-4 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Datos de entrega en Cochabamba
                    </h4>

                    <input
                      type="text"
                      placeholder="Tu nombre completo *"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#121419] p-3 text-xs text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-hidden"
                    />

                    <input
                      type="tel"
                      placeholder="Teléfono / WhatsApp de contacto *"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#121419] p-3 text-xs text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-hidden"
                    />

                    <textarea
                      rows={2}
                      placeholder="Dirección exacta (Calle, número de casa/edificio, referencias de entrega) *"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#121419] p-3 text-xs text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-hidden resize-none"
                    />

                    {/* Método de pago */}
                    <div className="space-y-1.5 pt-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                        Método de pago preferido
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('qr')}
                          className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            paymentMethod === 'qr'
                              ? 'border-amber-500 bg-amber-500/15 text-amber-300 font-bold'
                              : 'border-white/10 bg-[#121419] text-zinc-400 hover:text-white'
                          }`}
                        >
                          <QrCode className="h-4 w-4 mb-1" />
                          <span className="text-[10px]">Pago QR</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod('efectivo')}
                          className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            paymentMethod === 'efectivo'
                              ? 'border-amber-500 bg-amber-500/15 text-amber-300 font-bold'
                              : 'border-white/10 bg-[#121419] text-zinc-400 hover:text-white'
                          }`}
                        >
                          <Banknote className="h-4 w-4 mb-1" />
                          <span className="text-[10px]">Efectivo</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPaymentMethod('pos')}
                          className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            paymentMethod === 'pos'
                              ? 'border-amber-500 bg-amber-500/15 text-amber-300 font-bold'
                              : 'border-white/10 bg-[#121419] text-zinc-400 hover:text-white'
                          }`}
                        >
                          <CreditCard className="h-4 w-4 mb-1" />
                          <span className="text-[10px]">Tarjeta POS</span>
                        </button>
                      </div>

                      {paymentMethod === 'efectivo' && (
                        <input
                          type="text"
                          placeholder="¿Con cuánto vas a pagar? (Para alistar cambio)"
                          value={cashChangeAmount}
                          onChange={(e) => setCashChangeAmount(e.target.value)}
                          className="w-full mt-2 rounded-xl border border-white/10 bg-[#121419] p-2.5 text-xs text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-hidden"
                        />
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer del carrito con Totales & Botón WhatsApp */}
            {cartItems.length > 0 && (
              <div className="border-t border-white/10 bg-[#121419] p-5 space-y-4">
                <div className="space-y-1.5 text-xs text-zinc-300">
                  <div className="flex justify-between">
                    <span>Subtotal de productos:</span>
                    <span className="font-mono font-bold">Bs {formatPriceBs(cartSubtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Costo de envío:</span>
                    <span className="font-mono font-bold text-amber-400">
                      {deliveryFee === 0 ? '¡GRATIS!' : `Bs ${deliveryFee}`}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2 text-base font-black text-white">
                    <span>Total a pagar:</span>
                    <span className="font-mono text-amber-400">
                      Bs {formatPriceBs(grandTotal)}
                    </span>
                  </div>
                </div>

                <a
                  href={generateWhatsAppUrl() ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 text-xs uppercase tracking-wider transition-colors shadow-lg shadow-emerald-600/20 touch-manipulation cursor-pointer"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Confirmar Pedido por WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer del Restaurante */}
      <footer className="mt-20 border-t border-white/10 bg-[#121419] py-10 px-4 text-center text-xs text-zinc-500">
        <div className="mx-auto max-w-7xl space-y-3">
          <div className="flex items-center justify-center gap-2 text-zinc-300 font-bold">
            <Flame className="h-4 w-4 text-amber-500" />
            <span>Fuego & Brasa Burgers & Pizza</span>
          </div>
          <p className="text-[11px] text-zinc-500">
            Atención de Lunes a Domingo de 12:00 a 23:00 · Envíos con empaque térmico sellado.
          </p>
          <p className="text-[10px] text-zinc-600 pt-2">
            © Fuego & Brasa 2026 · Menú digital con pedidos a WhatsApp desarrollado por{' '}
            <a
              href="https://verastudiodigital.site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white underline underline-offset-2"
            >
              Vera Studio Digital
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
