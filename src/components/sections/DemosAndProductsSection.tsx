'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { portfolioProjects } from '@/data/portfolio';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

type FilterTab = 'todos' | 'productos' | 'demos';

export function DemosAndProductsSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>('todos');

  const finishedProducts = useMemo(() => {
    return portfolioProjects.filter((p) =>
      ['listo-app', 'misalon-platform', 'panito-platform'].includes(p.id)
    );
  }, []);

  const serviceDemos = useMemo(() => {
    return portfolioProjects.filter((p) =>
      [
        'demo-catalogo-joyeria',
        'demo-pedidos-comida',
        'demo-catalogo-distribuidora',
        'demo-catalogo-pasteleria',
        'demo-web-empresarial',
        'demo-sistema-admin',
      ].includes(p.id)
    );
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeTab === 'productos') return finishedProducts;
    if (activeTab === 'demos') return serviceDemos;
    // 'todos': primero productos en producción, luego demos de servicios
    return [...finishedProducts, ...serviceDemos];
  }, [activeTab, finishedProducts, serviceDemos]);

  const whatsappUrl = buildWhatsAppUrl(
    'Hola Vera Studio Digital, quisiera solicitar una demostración personalizada para el rubro de mi negocio.'
  );

  return (
    <section id="demos-y-productos" className="border-t border-[#E2E8F0] bg-white py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Demostraciones y Software Real"
          title="Demos de nuestros servicios y productos terminados"
          description="Comprueba la calidad visual, la velocidad y la funcionalidad real de lo que implementamos: haz clic o toca cualquier tarjeta para ver su información al reverso y acceder directamente al demo o sitio web."
          align="center"
        />

        {/* Pestañas de filtrado intuitivas */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          <button
            type="button"
            onClick={() => setActiveTab('todos')}
            className={`min-h-11 cursor-pointer rounded-2xl px-5 py-2 text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'todos'
                ? 'bg-[#0073F7] text-white shadow-lg shadow-[#0073F7]/25'
                : 'border border-slate-200 bg-[#F8FAFC] text-[#475569] hover:border-[#0073F7] hover:text-[#0073F7]'
            }`}
          >
            <span>Todos los proyectos ({finishedProducts.length + serviceDemos.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('productos')}
            className={`min-h-11 cursor-pointer rounded-2xl px-5 py-2 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'productos'
                ? 'bg-[#063B79] text-white shadow-lg shadow-[#063B79]/25'
                : 'border border-slate-200 bg-[#F8FAFC] text-[#475569] hover:border-[#063B79] hover:text-[#063B79]'
            }`}
          >
            <Sparkles className="h-4 w-4 text-emerald-400" />
            <span>Productos en Producción ({finishedProducts.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('demos')}
            className={`min-h-11 cursor-pointer rounded-2xl px-5 py-2 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'demos'
                ? 'bg-[#0073F7] text-white shadow-lg shadow-[#0073F7]/25'
                : 'border border-slate-200 bg-[#F8FAFC] text-[#475569] hover:border-[#0073F7] hover:text-[#0073F7]'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Demos de Servicios ({serviceDemos.length})</span>
          </button>
        </div>

        {/* Grid de proyectos */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Banner inferior de asesoramiento y demo a medida */}
        <div className="mt-16 rounded-3xl border border-blue-200/80 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0073F7]">
                <CheckCircle2 className="h-4 w-4" />
                Asesoramiento sin compromiso
              </span>
              <h3 className="mt-2 text-lg sm:text-xl font-black text-[#0F172A]">
                ¿Quieres ver cómo funcionaría una demo para el rubro específico de tu empresa?
              </h3>
              <p className="mt-1 text-sm text-[#475569] max-w-2xl leading-relaxed">
                Cuéntanos qué vendes y cómo atiendes a tus clientes. Te asesoramos sobre el formato
                ideal (web, catálogo digital o sistema) con ejemplos reales de tu sector.
              </p>
            </div>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#0073F7] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0073F7]/25 hover:bg-[#063B79] transition-all cursor-pointer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Pedir demo por WhatsApp</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
