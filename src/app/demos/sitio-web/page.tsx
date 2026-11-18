'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  ExternalLink,
  HardHat,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface CorporateProject {
  id: string;
  title: string;
  category: 'edificaciones' | 'industria' | 'infraestructura';
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  description: string;
}

const PROJECTS_DATA: CorporateProject[] = [
  {
    id: '1',
    title: 'Edificio Corporativo Torre América',
    category: 'edificaciones',
    categoryLabel: 'Edificaciones',
    location: 'Cochabamba',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    description:
      'Supervisión técnica de estructura antisísmica de 14 pisos y certificación de hormigón armado.',
  },
  {
    id: '2',
    title: 'Nave de Procesamiento Agroindustrial',
    category: 'industria',
    categoryLabel: 'Industria',
    location: 'Santa Cruz (Parque Latinoamericano)',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    description:
      'Montaje de estructuras metálicas, losas de alta resistencia y red de aire comprimido.',
  },
  {
    id: '3',
    title: 'Subestación y Tableros de Media Tensión',
    category: 'infraestructura',
    categoryLabel: 'Infraestructura',
    location: 'Cochabamba (Santiváñez)',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description:
      'Ingeniería de detalle, instalación de celdas eléctricas y puesta en marcha bajo norma NB 777.',
  },
  {
    id: '4',
    title: 'Complejo Logístico y Almacenes Centrales',
    category: 'edificaciones',
    categoryLabel: 'Edificaciones',
    location: 'El Alto, La Paz',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description:
      'Construcción y fiscalización de 3,200 m² de naves logísticas con pavimentos rígidos.',
  },
];

export default function SitioWebDemoPage() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Filtro de proyectos
  const [activeProjectFilter, setActiveProjectFilter] = useState<
    'todos' | 'edificaciones' | 'industria' | 'infraestructura'
  >('todos');

  // Cotizador interactivo
  const [selectedService, setSelectedService] = useState('Supervisión de Obras');
  const [selectedScale, setSelectedScale] = useState('200 a 800 m²');
  const [selectedCity, setSelectedCity] = useState('Cochabamba');

  const filteredProjects = useMemo(() => {
    if (activeProjectFilter === 'todos') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.category === activeProjectFilter);
  }, [activeProjectFilter]);

  // Mensaje de cotización armada para WhatsApp
  const quoteWhatsAppUrl = useMemo(() => {
    const text = `Hola Vértice Ingeniería, deseo solicitar una cotización formal:
• *Servicio:* ${selectedService}
• *Escala estimada:* ${selectedScale}
• *Ubicación del proyecto:* ${selectedCity}
Quedo atento a coordinar una reunión o recibir su propuesta técnica.`;
    return buildWhatsAppUrl(text);
  }, [selectedService, selectedScale, selectedCity]);

  // Enlace institucional de Vera Studio Digital
  const agencyWhatsAppUrl = buildWhatsAppUrl(
    'Hola Vera Studio Digital, vi la demo interactiva del Sitio Web Corporativo y quisiera cotizar una página web para mi empresa.'
  );

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

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#0073F7] selection:text-white">
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
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 font-bold text-[#0073F7] border border-blue-200/60">
              <span className="h-2 w-2 rounded-full bg-[#0073F7] animate-pulse" />
              Demo de Sitio Web Corporativo en Vivo
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:inline text-slate-600 font-medium">
              ¿Quieres un sitio web profesional como este para tu empresa?
            </span>
            {agencyWhatsAppUrl ? (
              <a
                href={agencyWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0073F7] px-3.5 py-1.5 font-bold text-white shadow-xs hover:bg-[#063B79] transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                <span>Cotizar Mi Sitio Web</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {/* =========================================================================
          CABECERA DEL SITIO WEB CORPORATIVO (VÉRTICE INGENIERÍA)
         ========================================================================= */}
      <nav className="border-b border-slate-200 bg-white sticky top-11 z-40 shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-8">
          {/* Logo Corporativo */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#063B79] to-[#0073F7] text-white shadow-md">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <p className="font-black text-lg text-[#0F172A] tracking-tight leading-none">
                VÉRTICE
              </p>
              <p className="text-[10px] uppercase tracking-widest text-[#0073F7] font-bold">
                Ingeniería & Proyectos · Bolivia
              </p>
            </div>
          </div>

          {/* Menú de Navegación */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-bold text-slate-600">
            <a href="#servicios" className="hover:text-[#0073F7] transition-colors">
              Servicios Técnicos
            </a>
            <a href="#proyectos" className="hover:text-[#0073F7] transition-colors">
              Proyectos Realizados
            </a>
            <a href="#cotizador" className="hover:text-[#0073F7] transition-colors">
              Cotizador Rápido
            </a>
            <a href="#contacto" className="hover:text-[#0073F7] transition-colors">
              Ubicación & Contacto
            </a>
          </div>

          {/* Botón WhatsApp de la Empresa */}
          {quoteWhatsAppUrl ? (
            <a
              href={quoteWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp Corporativo</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          ) : null}
        </div>
      </nav>

      {/* =========================================================================
          HERO SECTION: IMPACTO VISUAL Y CONFIANZA
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-slate-50 border-b border-slate-200/80 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Texto de Presentación */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#0073F7]">
                <ShieldCheck className="h-4 w-4" />
                <span>Empresa Certificada en Bolivia · Facturación Oficial</span>
              </div>

              <h1 className="mt-5 text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] leading-[1.12] tracking-tight">
                Ingeniería, infraestructura y proyectos con cumplimiento garantizado.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Supervisión técnica de obras, montaje industrial, ingeniería electromecánica y peritajes
                con presencia activa en Cochabamba, Santa Cruz y La Paz.
              </p>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href="#cotizador"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#0073F7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0073F7]/25 hover:bg-[#063B79] transition-all cursor-pointer"
                >
                  <span>Calcular Presupuesto Online</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                {quoteWhatsAppUrl ? (
                  <a
                    href={quoteWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 hover:border-[#0073F7] hover:text-[#0073F7] transition-all"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
                    <span>Hablar con un Ingeniero</span>
                  </a>
                ) : null}
              </div>

              {/* Sellos de Confianza */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#0F172A]">12+</p>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Años de experiencia</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#0073F7]">180+</p>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Obras entregadas</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-emerald-600">100%</p>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Cumplimiento de plazo</p>
                </div>
              </div>
            </div>

            {/* Imagen Fotográfica Corporativa */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Vértice Ingeniería - Planos y supervisión de proyectos"
                  width={640}
                  height={500}
                  className="w-full h-[400px] object-cover"
                  priority
                />

                {/* Tarjeta flotante sobre la foto */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md p-4 shadow-xl border border-white/60">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        Garantía Escrita & Control de Calidad
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Ensayos destructivos y cómputos bajo normas bolivianas CBH y NB.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 1: SERVICIOS TÉCNICOS ESPECIALIZADOS
         ========================================================================= */}
      <section id="servicios" className="py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0073F7]">
              Soluciones Integrales
            </span>
            <h2 className="mt-2 text-3xl font-black text-[#0F172A] sm:text-4xl">
              Nuestras Áreas de Especialidad Técnica
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Personal calificado, maquinaria adecuada y seguimiento fotográfico en línea.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Servicio 1 */}
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs hover:border-[#0073F7]/50 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-blue-100 text-[#0073F7] flex items-center justify-center">
                  <HardHat className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Supervisión de Obras</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Control estricto de cronograma, cómputos métricos y fiscalización de hormigón armado.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Control de calidad en obra</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Libro de órdenes digital</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Planillas de avance quincenal</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href="#cotizador"
                  onClick={() => setSelectedService('Supervisión de Obras')}
                  className="text-xs font-bold text-[#0073F7] hover:underline flex items-center gap-1"
                >
                  <span>Cotizar supervisión</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Servicio 2 */}
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs hover:border-[#0073F7]/50 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Montaje Industrial</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Estructuras metálicas pesadas, naves de almacenaje y líneas de producción continuas.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Cálculo de cargas y perfiles</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Soldadura homologada</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Montaje con grúa y seguridad</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href="#cotizador"
                  onClick={() => setSelectedService('Montaje Industrial')}
                  className="text-xs font-bold text-[#0073F7] hover:underline flex items-center gap-1"
                >
                  <span>Cotizar montaje</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Servicio 3 */}
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs hover:border-[#0073F7]/50 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Redes y Media Tensión</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Tableros industriales, celdas de transformación y cableado estructurado según NB 777.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Subestaciones transformadoras</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Tableros con protección IP65</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Trámite ante distribuidora (ELFEC/CRE)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href="#cotizador"
                  onClick={() => setSelectedService('Instalaciones Eléctricas')}
                  className="text-xs font-bold text-[#0073F7] hover:underline flex items-center gap-1"
                >
                  <span>Cotizar redes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Servicio 4 */}
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-xs hover:border-[#0073F7]/50 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#0F172A]">Peritaje & Diagnóstico</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Ensayos de esclerometría, patología del concreto e informes técnicos periciales.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Ensayos no destructivos</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Dictámenes con firma SIB</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Cálculo de refuerzo estructural</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <a
                  href="#cotizador"
                  onClick={() => setSelectedService('Peritaje y Consultoría')}
                  className="text-xs font-bold text-[#0073F7] hover:underline flex items-center gap-1"
                >
                  <span>Cotizar peritaje</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 2: GALERÍA DE PROYECTOS REALIZADOS CON FILTRO
         ========================================================================= */}
      <section id="proyectos" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0073F7]">
                Portafolio Comprobado
              </span>
              <h2 className="mt-2 text-3xl font-black text-[#0F172A]">
                Obras y Proyectos Ejecutados
              </h2>
            </div>

            {/* Pestañas de Filtro Interactivo */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'todos', label: 'Todos' },
                { id: 'edificaciones', label: 'Edificaciones' },
                { id: 'industria', label: 'Industria' },
                { id: 'infraestructura', label: 'Infraestructura' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveProjectFilter(
                      tab.id as 'todos' | 'edificaciones' | 'industria' | 'infraestructura'
                    )
                  }
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    activeProjectFilter === tab.id
                      ? 'bg-[#0073F7] text-white shadow-xs'
                      : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cuadrícula de Proyectos */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-white">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-slate-800">
                    {project.year}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-slate-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-[#0073F7]" />
                      {project.location}
                    </span>
                    <h3 className="mt-1 text-sm font-black text-[#0F172A] leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Obra entregada y aprobada
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 3: COTIZADOR RÁPIDO ONLINE (WIDGET INTERACTIVO)
         ========================================================================= */}
      <section id="cotizador" className="py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 sm:p-10 shadow-lg">
            <div className="text-center max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-[#0073F7]">
                <Sparkles className="h-3.5 w-3.5" />
                Simulador de Presupuesto Rápido
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-black text-[#0F172A]">
                Configura tu Solicitud de Cotización
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Selecciona tu requerimiento y envía los datos automáticamente a nuestro equipo por WhatsApp.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {/* Selector de Servicio */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  1. Servicio Requerido:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Supervisión de Obras',
                    'Montaje Industrial',
                    'Instalaciones Eléctricas',
                    'Peritaje y Consultoría',
                  ].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`p-2.5 rounded-xl text-xs font-bold border text-left transition-all cursor-pointer ${
                        selectedService === srv
                          ? 'border-[#0073F7] bg-white text-[#0073F7] shadow-sm ring-2 ring-[#0073F7]/20'
                          : 'border-slate-200 bg-white/70 text-slate-600 hover:bg-white'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector de Escala */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  2. Escala o Metraje Estimado:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Menor a 200 m²',
                    '200 a 800 m²',
                    '800 a 2,500 m²',
                    'Mayor a 2,500 m²',
                  ].map((scale) => (
                    <button
                      key={scale}
                      type="button"
                      onClick={() => setSelectedScale(scale)}
                      className={`p-2.5 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                        selectedScale === scale
                          ? 'border-[#0073F7] bg-white text-[#0073F7] shadow-sm ring-2 ring-[#0073F7]/20'
                          : 'border-slate-200 bg-white/70 text-slate-600 hover:bg-white'
                      }`}
                    >
                      {scale}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector de Ciudad */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  3. Departamento / Ubicación de la Obra:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {['Cochabamba', 'Santa Cruz', 'La Paz', 'Oruro / Potosí', 'Otro dpto.'].map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setSelectedCity(city)}
                      className={`p-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                        selectedCity === city
                          ? 'border-[#0073F7] bg-white text-[#0073F7] shadow-sm ring-2 ring-[#0073F7]/20'
                          : 'border-slate-200 bg-white/70 text-slate-600 hover:bg-white'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Resumen y Botón de Envío */}
              <div className="mt-6 rounded-2xl bg-white p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Resumen de Solicitud
                  </span>
                  <p className="text-sm font-black text-[#0F172A] mt-0.5">
                    {selectedService} · {selectedScale} en {selectedCity}
                  </p>
                  <p className="text-xs text-slate-500">
                    Respuesta con propuesta formal en menos de 24 horas hábiles.
                  </p>
                </div>

                {quoteWhatsAppUrl ? (
                  <a
                    href={quoteWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all shrink-0 cursor-pointer"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Enviar Cotización a WhatsApp</span>
                    <Send className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECCIÓN 4: UBICACIÓN, HORARIOS Y CONTACTO DIRECTO
         ========================================================================= */}
      <footer id="contacto" className="bg-[#0B192C] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-10 md:grid-cols-3 border-b border-white/10 pb-12">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0073F7] text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-black text-lg leading-tight">VÉRTICE INGENIERÍA</p>
                  <p className="text-[10px] text-blue-300 font-semibold tracking-wider">
                    SOCIEDAD DE INGENIERÍA BOLIVIA
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-400 leading-relaxed max-w-sm">
                Empresa boliviana especializada en dirección técnica, peritajes estructurales y montaje
                industrial con cumplimiento estricto de normas de seguridad y plazos.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Oficinas y Atención
              </p>
              <div className="mt-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#0073F7] shrink-0" />
                  <span>Av. América y Pando, Torre Norte, Piso 5, Cochabamba</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="h-4 w-4 text-[#0073F7] shrink-0" />
                  <span>Lunes a Viernes: 08:30 – 18:30 | Sábados: 09:00 – 13:00</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Central: +591 4 4258900 | WhatsApp: +591 76406512</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#0073F7] shrink-0" />
                  <span>proyectos@verticeingenieria.bo</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Garantías y Certificaciones
              </p>
              <div className="mt-4 space-y-2 text-xs text-slate-400">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Registro en la Sociedad de Ingenieros de Bolivia (SIB)</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Póliza de Responsabilidad Civil de Obra</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Factura legal con crédito fiscal válido</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 Vértice Ingeniería & Proyectos S.R.L. · Todos los derechos reservados.</p>
            <p className="flex items-center gap-1.5">
              <span>Sitio web corporativo desarrollado por</span>
              <a
                href="https://verastudiodigital.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:underline"
              >
                Vera Studio Digital
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
