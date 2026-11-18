'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Download,
  ExternalLink,
  Filter,
  Plus,
  QrCode,
  RotateCcw,
  Search,
  Send,
  Trash2,
  TrendingDown,
  TrendingUp,
  Wallet,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface CashMovement {
  id: string;
  time: string;
  kind: 'ingreso' | 'egreso';
  channel: 'qr-yape' | 'qr-banco' | 'efectivo' | 'gasto';
  channelLabel: string;
  amount: number;
  concept: string;
}

const INITIAL_RECORDS: CashMovement[] = [
  {
    id: '1',
    time: '08:45',
    kind: 'ingreso',
    channel: 'efectivo',
    channelLabel: 'Efectivo',
    amount: 65,
    concept: 'Venta mostrador - Desayunos',
  },
  {
    id: '2',
    time: '09:20',
    kind: 'ingreso',
    channel: 'qr-yape',
    channelLabel: 'QR Yape',
    amount: 150,
    concept: 'Cobro QR Yape - Cliente mostrador',
  },
  {
    id: '3',
    time: '10:15',
    kind: 'egreso',
    channel: 'gasto',
    channelLabel: 'Gasto Insumos',
    amount: 45,
    concept: 'Compra de bolsas y servilletas',
  },
  {
    id: '4',
    time: '11:05',
    kind: 'ingreso',
    channel: 'qr-banco',
    channelLabel: 'QR Banco BNB',
    amount: 280,
    concept: 'Cobro QR BNB - Venta por mayor',
  },
  {
    id: '5',
    time: '12:30',
    kind: 'ingreso',
    channel: 'qr-yape',
    channelLabel: 'QR Yape',
    amount: 95,
    concept: 'Cobro Yape - Pedido express oficina',
  },
  {
    id: '6',
    time: '13:10',
    kind: 'egreso',
    channel: 'gasto',
    channelLabel: 'Gasto Transporte',
    amount: 20,
    concept: 'Flete de entrega en moto',
  },
];

export default function ControlCajaDemoPage() {
  const [movements, setMovements] = useState<CashMovement[]>(INITIAL_RECORDS);

  // Formulario de nuevo movimiento
  const [movementType, setMovementType] = useState<'ingreso' | 'egreso'>('ingreso');
  const [selectedChannel, setSelectedChannel] = useState<'qr-yape' | 'qr-banco' | 'efectivo' | 'gasto'>('qr-yape');
  const [amountInput, setAmountInput] = useState<string>('');
  const [conceptInput, setConceptInput] = useState<string>('');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Filtros de tabla
  const [filterType, setFilterType] = useState<'todos' | 'qr' | 'efectivo' | 'egreso'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Totales calculados
  const totalIncome = useMemo(() => {
    return movements
      .filter((m) => m.kind === 'ingreso')
      .reduce((acc, m) => acc + m.amount, 0);
  }, [movements]);

  const totalQr = useMemo(() => {
    return movements
      .filter((m) => m.channel === 'qr-yape' || m.channel === 'qr-banco')
      .reduce((acc, m) => acc + m.amount, 0);
  }, [movements]);

  const totalCash = useMemo(() => {
    return movements
      .filter((m) => m.channel === 'efectivo')
      .reduce((acc, m) => acc + m.amount, 0);
  }, [movements]);

  const totalExpenses = useMemo(() => {
    return movements
      .filter((m) => m.kind === 'egreso')
      .reduce((acc, m) => acc + m.amount, 0);
  }, [movements]);

  const netBalance = totalIncome - totalExpenses;

  // Registrar movimiento
  const handleRegisterMovement = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const parsedAmount = parseFloat(amountInput);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      alert('Ingresa un monto válido en bolivianos.');
      return;
    }

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    let channelLabel = 'Efectivo';
    if (movementType === 'egreso') {
      channelLabel = 'Gasto';
    } else if (selectedChannel === 'qr-yape') {
      channelLabel = 'QR Yape';
    } else if (selectedChannel === 'qr-banco') {
      channelLabel = 'QR Banco';
    }

    const newRecord: CashMovement = {
      id: String(Date.now()),
      time: timeStr,
      kind: movementType,
      channel: movementType === 'egreso' ? 'gasto' : selectedChannel,
      channelLabel,
      amount: parsedAmount,
      concept: conceptInput.trim() || (movementType === 'ingreso' ? 'Cobro registrado' : 'Gasto operativo'),
    };

    setMovements((prev) => [newRecord, ...prev]);
    setAmountInput('');
    setConceptInput('');

    // Notificación toast visual
    setSuccessToast(
      `${movementType === 'ingreso' ? '✅ Ingreso registrado' : '📉 Gasto anotado'}: Bs ${parsedAmount.toFixed(2)}`
    );
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // Botones de monto rápido
  const handleQuickAmount = (val: number) => {
    setAmountInput(String(val));
  };

  // Sugerencias de conceptos rápidos
  const handleQuickConcept = (concept: string) => {
    setConceptInput(concept);
  };

  // Eliminar un registro
  const handleDeleteRecord = (id: string) => {
    setMovements((prev) => prev.filter((m) => m.id !== id));
  };

  // Reiniciar a valores iniciales
  const handleReset = () => {
    if (confirm('¿Deseas reiniciar los datos a la simulación inicial?')) {
      setMovements(INITIAL_RECORDS);
    }
  };

  // Exportar a Excel CSV
  const handleDownloadCsv = () => {
    const headers = 'Hora,Tipo,Canal,Concepto,Monto (Bs)\n';
    const rows = movements
      .map(
        (m) =>
          `${m.time},${m.kind.toUpperCase()},${m.channelLabel},"${m.concept.replace(/"/g, '""')}",${
            m.kind === 'egreso' ? -m.amount : m.amount
          }`
      )
      .join('\n');
    const summary = `\nRESUMEN: Total Ingresos: Bs ${totalIncome}, Total QR: Bs ${totalQr}, Total Efectivo: Bs ${totalCash}, Total Gastos: Bs ${totalExpenses}, SALDO NETO: Bs ${netBalance}\n`;
    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + encodeURIComponent(headers + rows + summary);
    const link = document.createElement('a');
    link.setAttribute('href', csvContent);
    link.setAttribute('download', `reporte_caja_diario_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Generar reporte formateado para WhatsApp
  const handleSendWhatsAppReport = () => {
    const today = new Date().toLocaleDateString('es-BO', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    const message = `📊 *REPORTE DE CIERRE DE CAJA — ${today}*
━━━━━━━━━━━━━━━━━━━━━
💰 *Total Ingresos:* Bs ${totalIncome.toFixed(2)}
📱 *Cobros QR (Yape/Bancos):* Bs ${totalQr.toFixed(2)}
💵 *Efectivo recibido:* Bs ${totalCash.toFixed(2)}
📉 *Salidas / Gastos de Caja:* Bs ${totalExpenses.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━━
✅ *SALDO NETO EN CAJA:* Bs ${netBalance.toFixed(2)}
━━━━━━━━━━━━━━━━━━━━━
📦 *Transacciones totales:* ${movements.length} movimientos
_Generado por Sistema de Control Vera Studio Digital_`;

    const url = buildWhatsAppUrl(message);
    if (url) {
      window.open(url, '_blank');
    }
  };

  // Movimientos filtrados
  const filteredMovements = useMemo(() => {
    return movements.filter((m) => {
      // Filtro por tipo
      if (filterType === 'qr' && m.channel !== 'qr-yape' && m.channel !== 'qr-banco') return false;
      if (filterType === 'efectivo' && m.channel !== 'efectivo') return false;
      if (filterType === 'egreso' && m.kind !== 'egreso') return false;

      // Filtro por búsqueda
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          m.concept.toLowerCase().includes(query) ||
          m.channelLabel.toLowerCase().includes(query) ||
          String(m.amount).includes(query)
        );
      }
      return true;
    });
  }, [movements, filterType, searchQuery]);

  // Barra de cabecera que se oculta con scroll
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 40) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }
      if (currentScrollY > lastScrollY.current + 6) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current - 6) {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const agencyWhatsAppUrl = buildWhatsAppUrl(
    'Hola Vera Studio Digital, vi la demo interactiva de Control de Caja y Cobros QR y quisiera implementar este sistema en mi negocio.'
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased">
      {/* =========================================================================
          BARRA SUPERIOR DE DEMOSTRACIÓN (VERA STUDIO DIGITAL)
         ========================================================================= */}
      <header
        className={`sticky top-0 z-50 border-b border-blue-200/90 bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-xs transition-all duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-bold text-[#0073F7] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver a Vera Studio Digital</span>
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 font-bold text-emerald-700 border border-emerald-200/60">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Simulador Interactivo de Caja en Vivo
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-slate-600 font-medium">
              ¿Quieres un control de caja claro para tu mostrador?
            </span>
            {agencyWhatsAppUrl ? (
              <a
                href={agencyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0073F7] px-3.5 py-1.5 font-bold text-white shadow-xs hover:bg-[#063B79] transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                <span>Cotizar Sistema a Medida</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {/* Contenedor Principal */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Título y Presentación */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0073F7] border border-blue-200/60 mb-2">
            <span>Herramienta Administrativa para Bolivia</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Control Diario de Caja y Cobros QR
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Registra cobros con QR (Yape, BNB, bancos) y efectivo, anota salidas de dinero al instante,
            cuadra tu caja diaria y envía el reporte automático a WhatsApp o descárgalo en Excel.
          </p>
        </div>

        {/* =========================================================================
            5 TARJETAS DE MÉTRICAS EN TIEMPO REAL
           ========================================================================= */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {/* 1. Total Ingresos */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Total Ingresos
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#0073F7]">
                <TrendingUp className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-black text-[#0F172A]">
              Bs {totalIncome.toFixed(2)}
            </p>
            <p className="mt-1 text-[10px] text-slate-500 font-medium">
              {movements.filter((m) => m.kind === 'ingreso').length} ventas registradas
            </p>
          </div>

          {/* 2. Cobros QR */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                Cobros QR
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <QrCode className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-black text-emerald-700">
              Bs {totalQr.toFixed(2)}
            </p>
            <p className="mt-1 text-[10px] text-emerald-800 font-medium">
              Yape, BNB y bancos
            </p>
          </div>

          {/* 3. Efectivo en Mostrador */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Efectivo
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <Wallet className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-black text-slate-800">
              Bs {totalCash.toFixed(2)}
            </p>
            <p className="mt-1 text-[10px] text-slate-500 font-medium">
              Ventas en mano
            </p>
          </div>

          {/* 4. Gastos / Salidas */}
          <div className="rounded-2xl border border-rose-200 bg-rose-50/40 p-4 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider">
                Salidas / Gastos
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500 text-white">
                <TrendingDown className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-2 text-xl sm:text-2xl font-black text-rose-700">
              Bs {totalExpenses.toFixed(2)}
            </p>
            <p className="mt-1 text-[10px] text-rose-700 font-medium">
              Insumos, fletes, compras
            </p>
          </div>

          {/* 5. Saldo Neto en Caja */}
          <div className="col-span-2 sm:col-span-1 rounded-2xl border border-blue-400 bg-gradient-to-br from-[#063B79] to-[#0073F7] p-4 text-white shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-white/80 uppercase tracking-wider">
                Saldo Neto
              </span>
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-white">
                <CheckCircle2 className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-2 text-2xl font-black text-white">
              Bs {netBalance.toFixed(2)}
            </p>
            <p className="mt-1 text-[10px] text-white/90 font-medium">
              Ingresos menos egresos
            </p>
          </div>
        </div>

        {/* Notificación Toast Flotante si se añade movimiento */}
        {successToast && (
          <div className="mt-4 rounded-xl bg-emerald-600 px-4 py-2.5 text-center text-xs font-bold text-white shadow-md animate-in slide-in-from-top-2 duration-200">
            {successToast}
          </div>
        )}

        {/* =========================================================================
            PANEL DE ACCIONES RÁPIDAS: CIERRE DE CAJA + EXCEL + NUEVO REGISTRO
           ========================================================================= */}
        <div className="mt-8 grid gap-6 lg:grid-cols-12 items-start">
          {/* Columna Izquierda: Formulario Interactivo de Nuevo Registro */}
          <div className="lg:col-span-5 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm font-black uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <Plus className="h-4 w-4 text-[#0073F7]" />
                Registrar Movimiento en Caja
              </h2>
              <span className="text-[10px] font-semibold text-slate-400">Interactivo</span>
            </div>

            {/* Pestañas: Ingreso vs Egreso */}
            <div className="mt-4 grid grid-cols-2 gap-2 p-1 rounded-xl bg-slate-100">
              <button
                type="button"
                onClick={() => {
                  setMovementType('ingreso');
                  if (selectedChannel === 'gasto') setSelectedChannel('qr-yape');
                }}
                className={`flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  movementType === 'ingreso'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowUpRight className="h-3.5 w-3.5" />
                <span>+ Ingreso / Venta</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMovementType('egreso');
                  setSelectedChannel('gasto');
                }}
                className={`flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  movementType === 'egreso'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ArrowDownRight className="h-3.5 w-3.5" />
                <span>- Gasto / Salida</span>
              </button>
            </div>

            <form onSubmit={handleRegisterMovement} className="mt-4 space-y-4">
              {/* Selector de Canal / Método */}
              {movementType === 'ingreso' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Canal de Cobro:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedChannel('qr-yape')}
                      className={`flex flex-col items-center justify-center gap-1 rounded-xl p-2 text-xs font-bold border transition-all cursor-pointer ${
                        selectedChannel === 'qr-yape'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-600/20'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <QrCode className="h-4 w-4 text-emerald-600" />
                      <span>QR Yape</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedChannel('qr-banco')}
                      className={`flex flex-col items-center justify-center gap-1 rounded-xl p-2 text-xs font-bold border transition-all cursor-pointer ${
                        selectedChannel === 'qr-banco'
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-600/20'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <QrCode className="h-4 w-4 text-[#0073F7]" />
                      <span>QR Banco</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedChannel('efectivo')}
                      className={`flex flex-col items-center justify-center gap-1 rounded-xl p-2 text-xs font-bold border transition-all cursor-pointer ${
                        selectedChannel === 'efectivo'
                          ? 'border-blue-600 bg-blue-50 text-blue-900 ring-2 ring-blue-600/20'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <Wallet className="h-4 w-4 text-slate-700" />
                      <span>Efectivo</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-rose-50 p-2.5 border border-rose-200/70 text-xs text-rose-800">
                  <span className="font-bold">Salida de efectivo:</span> Reduce el efectivo disponible
                  en mostrador (compras menores, fletes o pago a proveedores).
                </div>
              )}

              {/* Monto con sugerencias rápidas */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Monto (en Bolivianos):
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">
                    Bs
                  </span>
                  <input
                    type="number"
                    step="0.50"
                    placeholder="0.00"
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-300 py-2.5 pl-11 pr-3 text-base font-black text-[#0F172A] focus:border-[#0073F7] focus:outline-none focus:ring-2 focus:ring-[#0073F7]/20"
                  />
                </div>

                {/* Botones de monto rápido */}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {[20, 50, 100, 150, 250, 500].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleQuickAmount(val)}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      +{val}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concepto del movimiento */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Detalle o Concepto:
                </label>
                <input
                  type="text"
                  placeholder={
                    movementType === 'ingreso'
                      ? 'Ej: Venta mostrador, Pedido express...'
                      : 'Ej: Compra bolsas, Pago flete delivery...'
                  }
                  value={conceptInput}
                  onChange={(e) => setConceptInput(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 py-2 px-3 text-xs font-medium text-[#0F172A] focus:border-[#0073F7] focus:outline-none focus:ring-2 focus:ring-[#0073F7]/20"
                />

                {/* Conceptos sugeridos rápidos */}
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {movementType === 'ingreso' ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleQuickConcept('Venta mostrador')}
                        className="text-[10px] text-slate-500 hover:text-[#0073F7] bg-slate-100 rounded px-1.5 py-0.5"
                      >
                        + Venta mostrador
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickConcept('Pedido delivery WhatsApp')}
                        className="text-[10px] text-slate-500 hover:text-[#0073F7] bg-slate-100 rounded px-1.5 py-0.5"
                      >
                        + Delivery WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickConcept('Cobro QR Yape cliente')}
                        className="text-[10px] text-slate-500 hover:text-[#0073F7] bg-slate-100 rounded px-1.5 py-0.5"
                      >
                        + Cobro QR Yape
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => handleQuickConcept('Compra de bolsas y empaque')}
                        className="text-[10px] text-slate-500 hover:text-rose-600 bg-slate-100 rounded px-1.5 py-0.5"
                      >
                        + Bolsas/Empaque
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickConcept('Flete / Moto delivery')}
                        className="text-[10px] text-slate-500 hover:text-rose-600 bg-slate-100 rounded px-1.5 py-0.5"
                      >
                        + Flete delivery
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickConcept('Pago a proveedor pan')}
                        className="text-[10px] text-slate-500 hover:text-rose-600 bg-slate-100 rounded px-1.5 py-0.5"
                      >
                        + Pago proveedor
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Botón Guardar */}
              <button
                type="submit"
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-white shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 ${
                  movementType === 'ingreso'
                    ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
                    : 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/20'
                }`}
              >
                <Plus className="h-4 w-4" />
                <span>
                  {movementType === 'ingreso' ? 'Registrar Cobro en Caja' : 'Registrar Salida de Caja'}
                </span>
              </button>
            </form>
          </div>

          {/* Columna Derecha: Acciones de Cierre de Caja + Historial de Movimientos */}
          <div className="lg:col-span-7 space-y-4">
            {/* Banner de Cierre de Caja con WhatsApp y Exportación */}
            <div className="rounded-3xl border border-blue-200 bg-white p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0073F7]">
                    Arqueo & Cierre de Caja
                  </span>
                  <h3 className="text-base font-black text-[#0F172A] leading-tight mt-0.5">
                    Genera el reporte automático del día
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Envía el resumen completo al WhatsApp del dueño o descárgalo para tu contabilidad en Excel.
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleSendWhatsAppReport}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-colors cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Cierre por WhatsApp</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadCsv}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5 text-[#0073F7]" />
                    <span>Exportar Excel (CSV)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Historial de Movimientos en Tiempo Real con Filtros */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-sm font-black text-[#0F172A] uppercase tracking-wider">
                    Historial de Movimientos del Día
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {filteredMovements.length} de {movements.length} registros mostrados
                  </p>
                </div>

                {/* Botón reiniciar datos de simulación */}
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors self-start sm:self-auto cursor-pointer"
                  title="Reiniciar a datos de ejemplo"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reiniciar simulación</span>
                </button>
              </div>

              {/* Filtros rápidos y buscador */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="text-[11px] font-bold text-slate-400 mr-1 flex items-center gap-1">
                    <Filter className="h-3 w-3" /> Filtro:
                  </span>
                  <button
                    type="button"
                    onClick={() => setFilterType('todos')}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer ${
                      filterType === 'todos'
                        ? 'bg-[#0073F7] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Todos ({movements.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterType('qr')}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer ${
                      filterType === 'qr'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Solo QR
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterType('efectivo')}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer ${
                      filterType === 'efectivo'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Solo Efectivo
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilterType('egreso')}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer ${
                      filterType === 'egreso'
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Solo Gastos
                  </button>
                </div>

                <div className="relative w-full sm:w-44">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Buscar detalle..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1 pl-8 pr-2 text-xs text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#0073F7]"
                  />
                </div>
              </div>

              {/* Lista cronológica de movimientos */}
              <div className="mt-3 divide-y divide-slate-100 max-h-[380px] overflow-y-auto pr-1">
                {filteredMovements.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-400">
                    No hay movimientos que coincidan con el filtro aplicado.
                  </div>
                ) : (
                  filteredMovements.map((record) => (
                    <div
                      key={record.id}
                      className="group flex items-center justify-between py-2.5 text-xs transition-colors hover:bg-slate-50/70 rounded-lg px-2"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className="font-mono text-slate-400 text-[11px] shrink-0">
                          {record.time}
                        </span>

                        <span
                          className={`rounded-md px-2 py-0.5 text-[10px] font-bold shrink-0 ${
                            record.channel === 'qr-yape' || record.channel === 'qr-banco'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                              : record.channel === 'efectivo'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200/60'
                              : 'bg-rose-50 text-rose-700 border border-rose-200/60'
                          }`}
                        >
                          {record.channelLabel}
                        </span>

                        <span className="font-semibold text-slate-800 truncate">
                          {record.concept}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 ml-3">
                        <span
                          className={`font-black text-sm ${
                            record.kind === 'egreso' ? 'text-rose-600' : 'text-slate-900'
                          }`}
                        >
                          {record.kind === 'egreso' ? '-' : '+'}Bs {record.amount.toFixed(2)}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleDeleteRecord(record.id)}
                          className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-rose-500 transition-opacity p-1 cursor-pointer"
                          title="Eliminar este movimiento de la simulación"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BANNER INFERIOR: PROPUESTA DE IMPLEMENTACIÓN VERA STUDIO DIGITAL
           ========================================================================= */}
        <div className="mt-12 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#0073F7]">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Desarrollo a Medida en Cochabamba y Bolivia
              </span>
              <h3 className="mt-2 text-xl font-black text-[#0F172A] sm:text-2xl">
                ¿Quieres este sistema instalado en tu tienda, almacén o restaurante?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
                Diseñamos paneles de caja y cobros QR adaptados exactamente a tu flujo de venta,
                impresión de recibos o sincronización con inventarios. Precios claros en bolivianos.
              </p>
            </div>

            {agencyWhatsAppUrl ? (
              <a
                href={agencyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0073F7] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0073F7]/25 hover:bg-[#063B79] transition-all shrink-0 cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Solicitar Asesoría para mi Negocio</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}
