import Link from 'next/link';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';

interface ServiceLiveDemoBannerProps {
  slug: string;
}

interface DemoHighlightConfig {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  demoUrl: string;
  badgeText: string;
  gradientBg: string;
  accentBorder: string;
}

const DEMOS_BY_SERVICE: Record<string, DemoHighlightConfig> = {
  'diseno-web': {
    eyebrow: 'Demostración Interactiva en Vivo',
    title: 'Comprueba cómo se ve un Sitio Web Corporativo de alto impacto',
    description:
      'Navega por nuestra demo funcional para empresas en Bolivia: galería de proyectos con fotos reales, secciones comerciales claras, cotizador interactivo y botones directos a WhatsApp.',
    buttonLabel: 'Abrir Demo de Sitio Web Corporativo',
    demoUrl: '/demos/sitio-web',
    badgeText: 'Demo en vivo · Responsive',
    gradientBg: 'from-blue-900 via-[#063B79] to-[#0073F7]',
    accentBorder: 'border-blue-400/40',
  },
  'automatizacion-administrativa': {
    eyebrow: 'Simulador Interactivo en Tiempo Real',
    title: 'Prueba el Control Diario de Caja y Registro de Cobros QR',
    description:
      'Simula ingresos con QR (Yape, BNB, bancos) y efectivo, anota salidas/gastos operativos, visualiza el saldo neto al instante y genera el reporte de arqueo para WhatsApp o Excel.',
    buttonLabel: 'Abrir Simulador de Control de Caja',
    demoUrl: '/demos/control-caja',
    badgeText: 'Simulador interactivo · Sin registro',
    gradientBg: 'from-slate-900 via-[#0F172A] to-[#064E3B]',
    accentBorder: 'border-emerald-400/40',
  },
  'catalogos-digitales': {
    eyebrow: 'Vitrina de Catálogos Reales',
    title: 'Explora nuestros 5 catálogos interactivos para celular',
    description:
      'Descubre la experiencia sin intermediarios: Nadir Joyería (Alta Orfebrería), Fuego & Brasa (Pedidos & Delivery), Distribuidora Los Andes (Abarrotes para tiendas) y Le Petit Atelier (Pastelería).',
    buttonLabel: 'Abrir Vitrina de Catálogos Digitales',
    demoUrl: '/demos/catalogo',
    badgeText: '5 Rubros en vivo · Pedidos por WhatsApp',
    gradientBg: 'from-amber-950 via-neutral-900 to-black',
    accentBorder: 'border-amber-400/40',
  },
};

export function ServiceLiveDemoBanner({ slug }: ServiceLiveDemoBannerProps) {
  const config = DEMOS_BY_SERVICE[slug];
  if (!config) return null;

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200">
      <Container>
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${config.gradientBg} p-6 sm:p-10 text-white shadow-xl border ${config.accentBorder}`}
        >
          {/* Brillos ambientales */}
          <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 h-44 w-44 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-xs">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                <span>{config.eyebrow}</span>
                <span className="hidden sm:inline text-white/50">·</span>
                <span className="hidden sm:inline text-emerald-300 font-semibold">{config.badgeText}</span>
              </div>

              <h3 className="mt-3 text-xl sm:text-3xl font-black text-white leading-tight">
                {config.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                {config.description}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <Link
                href={config.demoUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-900 shadow-lg hover:bg-slate-100 transition-all cursor-pointer"
              >
                <span>{config.buttonLabel}</span>
                <ExternalLink className="h-4 w-4 text-[#0073F7]" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
