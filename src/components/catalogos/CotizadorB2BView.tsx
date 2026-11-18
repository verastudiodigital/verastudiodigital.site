'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  FileSpreadsheet,
  FlaskConical,
  Package,
  Search,
  X,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface CotizarProduct {
  id: string;
  name: string;
  sku: string;
  casNumber: string;
  industry: string;
  image: string;
  container: string;
  containers: string[];
  description: string;
  grade: string;
  purity: string;
  certifications: string[];
  specs: { label: string; value: string }[];
}

const cotizarData: CotizarProduct[] = [
  {
    id: 'c-1',
    name: 'Dodecylhexadecanol Solución Pura',
    sku: 'CAS-DOD-200',
    casNumber: 'CAS 59259-38-0',
    industry: 'Química Industrial & Cosmética',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1000&auto=format&fit=crop&q=80',
    container: 'Tambor 200 Litros',
    containers: ['Bidón 20 L (Piloto)', 'Tambor 200 L (Producción)', 'Contenedor IBC 1,000 L (Granel)'],
    description:
      'Surfactante no iónico de cadena ramificada de alta estabilidad térmica. Utilizado en formulaciones de lubricantes finos, síntesis química y emulsiones cosméticas de grado farmacéutico.',
    grade: 'Grado Técnico Puro 99.2%',
    purity: '≥ 99.2% (Cromatografía GC)',
    certifications: ['ISO 9001:2015', 'FDS / MSDS conforme a GHS', 'Registro Sanitario Nacional'],
    specs: [
      { label: 'Densidad a 20°C', value: '0.852 g/cm³' },
      { label: 'Punto de Inflamación', value: '> 180°C' },
      { label: 'Humedad Residual', value: '< 0.05% Karl Fischer' },
      { label: 'Vida Útil', value: '24 meses en empaque original sellado' },
    ],
  },
  {
    id: 'c-2',
    name: 'Hexamethyleneimine Grado Farmacéutico',
    sku: 'CAS-HEX-180',
    casNumber: 'CAS 111-49-9',
    industry: 'Farmacéutica & Polímeros',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&auto=format&fit=crop&q=80',
    container: 'Cilindro Metálico 180 kg',
    containers: ['Bidón Acero 25 kg', 'Cilindro Metálico 180 kg'],
    description:
      'Intermedio de alta pureza para la síntesis de fármacos, inhibidores de corrosión en circuitos cerrados y agentes de curado epóxico de alta resistencia química.',
    grade: 'Pureza Farmacéutica 98.8% HPLC',
    purity: '≥ 98.8% HPLC',
    certifications: ['Certificado de Análisis (CoA) por lote', 'Kosher & Halal Certified', 'FDS Disponible'],
    specs: [
      { label: 'Punto de Ebullición', value: '138°C' },
      { label: 'Índice de Refracción', value: '1.465 (20°C)' },
      { label: 'Metales Pesados', value: '< 10 ppm' },
      { label: 'Almacenamiento', value: 'Bajo atmósfera de nitrógeno inerte' },
    ],
  },
  {
    id: 'c-3',
    name: 'Docosane Hidrocarburo Líquido N-22',
    sku: 'CAS-DOC-150',
    casNumber: 'CAS 629-97-0',
    industry: 'Lubricantes & Aditivos Automotrices',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1000&auto=format&fit=crop&q=80',
    container: 'Contenedor IBC 1000 L',
    containers: ['Tambor 200 L', 'Contenedor IBC 1,000 L (1.1 Ton)'],
    description:
      'Parafina lineal alifática de alta pureza y baja volatilidad. Empleada en materiales de cambio de fase (PCM) para control térmico, fluidos dieléctricos y aditivos antifricción.',
    grade: 'Industrial ISO 9001 / REACH',
    purity: '≥ 99.0% n-Docosano',
    certifications: ['Cumplimiento REACH Europa', 'Certificado de Trazabilidad', 'GHS Safe Handling'],
    specs: [
      { label: 'Punto de Fusión', value: '44°C a 46°C' },
      { label: 'Color Hazen (APHA)', value: '≤ 15 (Transparente cristalino)' },
      { label: 'Viscosidad Cinemática', value: '3.8 mm²/s a 60°C' },
    ],
  },
  {
    id: 'c-4',
    name: '2-Pentanone Oxime Estabilizado (Deox)',
    sku: 'CAS-PEN-100',
    casNumber: 'CAS 623-40-5',
    industry: 'Tratamiento de Aguas & Calderas',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1000&auto=format&fit=crop&q=80',
    container: 'Bidón PEAD 100 kg',
    containers: ['Bidón PEAD 25 kg', 'Bidón PEAD 100 kg', 'IBC 1,000 kg'],
    description:
      'Secuestrante de oxígeno volátil de baja toxicidad diseñado para reemplazar a la hidracina en calderas de vapor industriales de media y alta presión. Pasiva las superficies metálicas formando magnetita protectora.',
    grade: 'Concentración Activa 45%',
    purity: '≥ 45.0% Activo Acuoso',
    certifications: ['Aprobación Alimentaria FDA para vapor en contacto', 'ISO 14001 Ambiental'],
    specs: [
      { label: 'pH Solución (1%)', value: '7.5 - 9.0' },
      { label: 'Velocidad de Reacción', value: 'Instantánea a temperaturas > 70°C' },
      { label: 'Toxicidad', value: 'No carcinogénico, biodegradable' },
    ],
  },
  {
    id: 'c-5',
    name: 'Hipoclorito de Sodio al 12% Concentrado',
    sku: 'CAS-HYP-55',
    casNumber: 'CAS 7681-52-9',
    industry: 'Plantas de Agua Potable & Embotelladoras',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1000&auto=format&fit=crop&q=80',
    container: 'Tambor 55 Galones (208 L)',
    containers: ['Bidón 50 kg', 'Tambor 250 kg (55 Gal)', 'Cisterna a Granel 10,000 L'],
    description:
      'Solución desinfectante de grado sanitario de alto poder bactericida, viricida y alguicida. Estabilizada para retardar la descomposición térmica durante el transporte en Bolivia.',
    grade: 'Grado Sanitario Potable',
    purity: 'Cloro Activo ≥ 120 g/L (12% P/V)',
    certifications: ['Certificado NSF/ANSI 60 para Agua Potable', 'Registro Sanitario SENASAG'],
    specs: [
      { label: 'Alcalinidad Libre (como NaOH)', value: '0.5 - 1.5%' },
      { label: 'Hierro (Fe)', value: '< 1.0 ppm' },
      { label: 'Apariencia', value: 'Líquido límpido amarillo verdoso' },
    ],
  },
];

interface QuoteItem {
  id: string;
  product: CotizarProduct;
  container: string;
  qty: number;
}

export function CotizadorB2BView() {
  const [selectedProduct, setSelectedProduct] = useState<CotizarProduct | null>(null);
  const [selectedContainer, setSelectedContainer] = useState<string>('');
  const [quoteCart, setQuoteCart] = useState<QuoteItem[]>([]);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [nitRut, setNitRut] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const filtered = cotizarData.filter((p) => {
    return (
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.casNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.industry.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleOpenProduct = (prod: CotizarProduct) => {
    setSelectedProduct(prod);
    setSelectedContainer(prod.containers[0] || prod.container);
  };

  const handleAddQuoteItem = (prod: CotizarProduct, container: string) => {
    setQuoteCart((prev) => {
      const existing = prev.find((i) => i.product.id === prod.id && i.container === container);
      if (existing) {
        return prev.map((i) =>
          i.product.id === prod.id && i.container === container ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: `${prod.id}-${container}-${Date.now()}`,
          product: prod,
          container,
          qty: 1,
        },
      ];
    });
    setIsQuoteDrawerOpen(true);
  };

  const generateWhatsAppQuoteUrl = () => {
    if (quoteCart.length === 0) return '#';
    let msg = `🏭 *SOLICITUD FORMAL DE COTIZACIÓN B2B INDUSTRIAL*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
    if (companyName.trim()) msg += `🏢 *Empresa:* ${companyName.trim()}\n`;
    if (nitRut.trim()) msg += `📄 *NIT / RUT:* ${nitRut.trim()}\n`;
    if (contactEmail.trim()) msg += `✉️ *Email de contacto:* ${contactEmail.trim()}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    msg += `🧪 *ÍTEMS SOLICITADOS PARA COTIZAR:*\n`;
    quoteCart.forEach((item, index) => {
      msg += `${index + 1}. *${item.qty}x ${item.product.name}*\n`;
      msg += `   └ CAS: ${item.product.casNumber} | Pureza: ${item.product.purity}\n`;
      msg += `   └ Formato: ${item.container}\n`;
    });

    msg += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Solicito precio puesto en planta, tiempo de entrega y envío de Certificados de Análisis (CoA) y Hojas de Seguridad (FDS). Gracias.`;

    return buildWhatsAppUrl(msg);
  };

  return (
    <div className="bg-[#F4F6F9] min-h-screen text-slate-900 pb-20">
      {/* Header ChemCo */}
      <header className="border-b border-slate-200 bg-white py-4 px-4 sm:px-8 sticky top-0 z-30 shadow-xs">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0073F7] text-white">
              <FlaskConical className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black text-slate-900 block leading-tight">
                ChemCo B2B Industrial
              </span>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                Portal de Cotizaciones Químicas & Materias Primas
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsQuoteDrawerOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-[#0073F7] hover:bg-[#063B79] text-white px-4 py-2 text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            <Package className="h-4 w-4" />
            <span className="hidden sm:inline">Mi Solicitud B2B</span>
            <span className="rounded-full bg-amber-400 text-slate-950 px-1.5 py-0.2 text-[10px] font-black font-mono">
              {quoteCart.reduce((acc, i) => acc + i.qty, 0)}
            </span>
          </button>
        </div>
      </header>

      {/* Contenido */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              Catálogo de Materias Primas y Reactivos Químicos
            </h1>
            <p className="text-xs text-slate-600 mt-0.5">
              Solicitud de cotización formal por volumen con FDS y certificados por lote.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar por CAS, nombre o SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-hidden"
            />
          </div>
        </div>

        {/* Grid de Productos Químicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prod) => (
            <article
              key={prod.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700">
                    {prod.casNumber}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">{prod.sku}</span>
                </div>

                <h3 className="mt-2 text-base font-bold text-slate-900 leading-snug">
                  {prod.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                  {prod.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                    Pureza: {prod.purity}
                  </span>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-700">
                    {prod.container}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenProduct(prod)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  Ver Ficha Técnica
                </button>

                <button
                  type="button"
                  onClick={() => handleAddQuoteItem(prod, prod.containers[0] || prod.container)}
                  className="rounded-xl bg-[#0073F7] hover:bg-[#063B79] text-white px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer"
                >
                  + Agregar a Cotización
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Modal Detalle Ficha Técnica */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl p-6 space-y-5 [scrollbar-width:none]">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
            >
              <X className="h-4 w-4" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-mono font-bold text-blue-800">
                  {selectedProduct.casNumber}
                </span>
                <span className="text-xs text-slate-400 font-mono">{selectedProduct.sku}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 mt-2">
                {selectedProduct.name}
              </h2>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* Certificaciones */}
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-1">
              <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                Homologaciones & Calidad
              </span>
              <div className="space-y-1">
                {selectedProduct.certifications.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selector de Envase */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Formato de Envase Industrial
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {selectedProduct.containers.map((cont) => (
                  <button
                    key={cont}
                    type="button"
                    onClick={() => setSelectedContainer(cont)}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-colors cursor-pointer ${
                      selectedContainer === cont
                        ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {cont}
                  </button>
                ))}
              </div>
            </div>

            {/* Especificaciones */}
            <div className="space-y-1 border-t border-slate-200 pt-4">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                Parámetros Técnicos
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {selectedProduct.specs.map((sp) => (
                  <div key={sp.label} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 block text-[10px]">{sp.label}</span>
                    <span className="font-semibold text-slate-800">{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  handleAddQuoteItem(selectedProduct, selectedContainer);
                  setSelectedProduct(null);
                }}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#0073F7] hover:bg-[#063B79] text-white font-bold py-3 px-4 text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <Package className="h-4 w-4" />
                <span>Agregar {selectedContainer} a la Solicitud</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Drawer Carrito Cotización */}
      {isQuoteDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white h-full flex flex-col justify-between shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 p-5 bg-slate-900 text-white">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-emerald-400" />
                <h3 className="font-bold text-base">Solicitud de Cotización B2B</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsQuoteDrawerOpen(false)}
                className="rounded-lg p-2 text-slate-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {quoteCart.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Tu solicitud está vacía. Agrega reactivos o materias primas del catálogo.
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    {quoteCart.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-1"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-bold text-xs text-slate-900">{item.product.name}</p>
                            <p className="text-[11px] text-slate-500">
                              {item.product.casNumber} · {item.container}
                            </p>
                          </div>
                          <span className="font-mono text-xs font-bold text-blue-700">
                            {item.qty} u.
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Datos de la Empresa Solicitante
                    </h4>
                    <input
                      type="text"
                      placeholder="Razón Social / Nombre de Empresa *"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-hidden"
                    />
                    <input
                      type="text"
                      placeholder="NIT / RUT *"
                      value={nitRut}
                      onChange={(e) => setNitRut(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-hidden"
                    />
                    <input
                      type="email"
                      placeholder="Correo Electrónico Corporativo"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 p-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-blue-600 focus:outline-hidden"
                    />
                  </div>
                </>
              )}
            </div>

            {quoteCart.length > 0 && (
              <div className="border-t border-slate-200 p-5 bg-slate-50 space-y-3">
                <a
                  href={generateWhatsAppQuoteUrl() ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span>Enviar Solicitud a WhatsApp</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
