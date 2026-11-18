import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Smartphone,
  Truck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';
import { ProjectMockup } from '@/components/portfolio/ProjectMockup';
import { portfolioProjects } from '@/data/portfolio';

export function SoftwareAppsShowcase() {
  const listoProject = portfolioProjects.find((p) => p.id === 'listo-app');
  const misalonProject = portfolioProjects.find((p) => p.id === 'misalon-platform');
  const panitoProject = portfolioProjects.find((p) => p.id === 'panito-platform');

  return (
    <section id="aplicaciones" className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-16 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Casos activos en producción"
          title="Nuestras aplicaciones y plataformas SaaS"
          description="Desarrollos reales y operativos creados por Vera Studio Digital que demuestran nuestra capacidad técnica, arquitectura moderna y fiabilidad."
          align="center"
        />

        <div className="mt-14 space-y-12">
          {/* =========================================================================
              APP 1: LISTO – AVISO DE PAGOS QR (GOOGLE PLAY)
             ========================================================================= */}
          <article className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl transition-all hover:shadow-2xl">
            <div className="grid lg:grid-cols-12 items-center">
              {/* Mockup visual */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#063B79] via-[#094892] to-[#0073F7]">
                {listoProject ? <ProjectMockup project={listoProject} /> : null}
              </div>

              {/* Contenido detallado */}
              <div className="p-7 sm:p-10 lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Google Play Store · Android
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-[#0073F7]">
                      <Smartphone className="h-3.5 w-3.5" />
                      App Nativa
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
                    Listo – Aviso de Pagos QR
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-[#475569]">
                    Herramienta utilitaria que anuncia cobros con QR por voz al instante con Yape,
                    Yastá y bancos de Bolivia. Permite atender sin desviar la mirada a la pantalla,
                    evita comprobantes falsos en mostrador y genera un totalizador diario automático.
                  </p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>Alerta por voz en tiempo real</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>Totalizador diario y reporte en Excel (CSV)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>100% local, seguro y sin capturar claves</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                      <span>Publicada oficialmente en Google Play</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
                  <Button
                    href="https://play.google.com/store/apps/details?id=com.verastudio.listo&pli=1"
                    external
                    size="lg"
                    className="rounded-xl shadow-md"
                  >
                    <span>Ver en Google Play Store</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>

                  <Button
                    href="/listo/"
                    variant="outline"
                    size="lg"
                    className="rounded-xl border-slate-200"
                  >
                    <span>Ver ficha técnica de Listo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================================
              APP 2: MISALÓN.LAT (SAAS DE RESERVAS Y SPAS)
             ========================================================================= */}
          <article className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl transition-all hover:shadow-2xl">
            <div className="grid lg:grid-cols-12 items-center">
              {/* Mockup visual */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#701A75] via-[#A21CAF] to-[#C026D3]">
                {misalonProject ? <ProjectMockup project={misalonProject} /> : null}
              </div>

              {/* Contenido detallado */}
              <div className="p-7 sm:p-10 lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs font-bold text-fuchsia-700">
                      <span className="h-2 w-2 rounded-full bg-fuchsia-500 animate-pulse" />
                      Plataforma Web SaaS · Salones y Spas
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      <Calendar className="h-3.5 w-3.5 text-fuchsia-600" />
                      Reservas 24/7
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
                    MiSalón.lat
                  </h3>

                  <p className="mt-2 text-sm font-bold text-[#A21CAF]">
                    &ldquo;Descubre y reserva en los mejores salones de belleza y spas&rdquo;
                  </p>

                  <p className="mt-3 text-base leading-relaxed text-[#475569]">
                    Plataforma web moderna que centraliza la experiencia de reserva para salones de
                    belleza, peluquerías y centros de estética. Los clientes descubren servicios y
                    agendan turnos en tiempo real, mientras los salones administran profesionales y
                    horarios en un panel ágil.
                  </p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-fuchsia-600 mt-0.5" />
                      <span>Agenda online 24/7 con disponibilidad en vivo</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-fuchsia-600 mt-0.5" />
                      <span>Catálogo de servicios, precios y especialistas</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-fuchsia-600 mt-0.5" />
                      <span>Panel de control administrativo multiusuario</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-fuchsia-600 mt-0.5" />
                      <span>Arquitectura web veloz y 100% responsive</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
                  <Button
                    href="https://misalon.lat/"
                    external
                    size="lg"
                    className="rounded-xl bg-[#A21CAF] hover:bg-[#86198F] text-white shadow-md"
                  >
                    <span>Visitar MiSalón.lat</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {/* =========================================================================
              APP 3: PANITO.LAT (SAAS DE PEDIDOS, PRODUCCIÓN Y RUTAS GPS)
             ========================================================================= */}
          <article className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl transition-all hover:shadow-2xl">
            <div className="grid lg:grid-cols-12 items-center">
              {/* Mockup visual */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#92400E] via-[#B45309] to-[#D97706]">
                {panitoProject ? <ProjectMockup project={panitoProject} /> : null}
              </div>

              {/* Contenido detallado */}
              <div className="p-7 sm:p-10 lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-800">
                      <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                      Plataforma Web SaaS · Gestión Logística & Panaderías
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      <Truck className="h-3.5 w-3.5 text-amber-600" />
                      Rutas GPS
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl sm:text-3xl font-black text-[#0F172A] leading-tight">
                    Panito.lat
                  </h3>

                  <p className="mt-2 text-sm font-bold text-amber-800">
                    &ldquo;Gestión de Pedidos, Producción, rutas con GPS, clientes de barrio e
                    inventario en una sola plataforma SaaS moderna.&rdquo;
                  </p>

                  <p className="mt-3 text-base leading-relaxed text-[#475569]">
                    Solución integral en la nube diseñada específicamente para resolver la
                    complejidad operativa de panificadoras y distribuidoras. Coordina desde el
                    pedido del cliente de barrio hasta la orden de horneado, stock de materia prima y
                    ruteo con GPS en vivo para los repartidores.
                  </p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                      <span>Rutas de distribución con mapa GPS en tiempo real</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                      <span>Control de pedidos de clientes y tiendas de barrio</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                      <span>Cálculo automático de horneado e inventario</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                      <span>Liquidación diaria de caja y cobranzas de repartidores</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
                  <Button
                    href="https://panito.lat/"
                    external
                    size="lg"
                    className="rounded-xl bg-[#B45309] hover:bg-[#92400E] text-white shadow-md"
                  >
                    <span>Visitar Panito.lat</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
