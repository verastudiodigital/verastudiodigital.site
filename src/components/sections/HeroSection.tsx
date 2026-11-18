import {
  ArrowRight,
  BellRing,
  Calendar,
  CheckCircle2,
  Globe,
  Lock,
  MessageSquareText,
  Smartphone,
  Truck,
} from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola Vera Studio Digital, quisiera solicitar asesoramiento sobre soluciones digitales para mi negocio.'
  );

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-18 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-[#E2E8F0]/70">
      {/* Halo de luz ambiental minimalista en la parte superior */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-6xl h-[520px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,115,247,0.12),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Columna Izquierda: Mensaje principal y llamadas a la acción */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0073F7]/20 bg-[#0073F7]/5 px-3.5 py-1 text-xs font-bold text-[#0073F7]">
              <span className="h-2 w-2 rounded-full bg-[#0073F7] animate-pulse" />
              <span>Estudio de Desarrollo Web y Software Comercial</span>
            </div>

            <h1 className="mt-5 text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl lg:leading-[1.12]">
              Tecnología digital práctica con precios claros en bolivianos.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#475569] sm:text-lg max-w-xl">
              Diseñamos páginas web corporativas, catálogos para celular, automatización en
              WhatsApp y plataformas de software a medida. Tiempos reales, pagos 50/50 y soporte directo en Bolivia.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href="#servicios" size="lg" className="rounded-2xl shadow-lg shadow-[#0073F7]/20">
                <span>Explorar los 6 servicios</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>

              {whatsappUrl ? (
                <Button
                  href={whatsappUrl}
                  external
                  variant="outline"
                  size="lg"
                  className="rounded-2xl border-slate-200 hover:border-[#0073F7] hover:bg-[#F8FAFC]"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#0073F7]" />
                  <span>Hablar por WhatsApp</span>
                </Button>
              ) : null}
            </div>

            {/* Píldoras de confianza y metodología */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-slate-200/80 pt-6 text-xs sm:text-sm font-semibold text-[#475569]">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#0073F7]" aria-hidden="true" />
                Entrega en 24h a 8 días hábiles
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#0073F7]" aria-hidden="true" />
                Anticipo 50% / Saldo contra entrega
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#0073F7]" aria-hidden="true" />
                Sistemas reales en producción
              </span>
            </div>
          </div>

          {/* Columna Derecha: Showcase tecnológico flotante y minimalista */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Tarjeta principal estilo ventana de software moderno */}
              <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-2xl shadow-slate-900/10">
                {/* Cabecera del navegador */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    <div className="ml-2 flex items-center gap-1 rounded-md bg-[#F8FAFC] px-2.5 py-0.5 text-[11px] font-semibold text-[#64748B] border border-slate-200/60">
                      <Lock className="h-2.5 w-2.5 text-emerald-600" />
                      <span>verastudiodigital.site</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-extrabold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    En vivo
                  </span>
                </div>

                {/* Contenido interior de la ventana */}
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-gradient-to-br from-[#063B79] via-[#094892] to-[#0073F7] p-4 text-white shadow-md">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                      Ecosistema Digital Integral
                    </span>
                    <p className="mt-1 text-sm font-black text-white leading-snug">
                      Herramientas conectadas para vender, cobrar y ordenar tu empresa.
                    </p>
                  </div>

                  {/* 3 soluciones conectadas */}
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#F8FAFC] p-2.5 transition-colors hover:bg-white hover:border-[#0073F7]/30">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0073F7]/10 text-[#0073F7]">
                          <Globe className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0F172A]">Páginas Web & Google</p>
                          <p className="text-[10px] text-[#64748B]">Diseño Mobile First veloz</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-black text-[#0073F7]">Desde Bs 700</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#F8FAFC] p-2.5 transition-colors hover:bg-white hover:border-[#0073F7]/30">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
                          <MessageSquareText className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0F172A]">WhatsApp & Catálogos</p>
                          <p className="text-[10px] text-[#64748B]">Venta directa en celular</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-black text-[#0073F7]">Desde Bs 150</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-[#F8FAFC] p-2.5 transition-colors hover:bg-white hover:border-[#0073F7]/30">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-600">
                          <Smartphone className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0F172A]">Sistemas SaaS & Apps</p>
                          <p className="text-[10px] text-[#64748B]">Listo · MiSalón · Panito</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                        En producción
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Píldora Flotante 1: Notificación de Listo en Google Play */}
              <div className="absolute -top-3 -right-3 sm:-right-5 hidden sm:flex items-center gap-2 rounded-2xl border border-emerald-200/90 bg-white/95 px-3.5 py-2 shadow-xl shadow-emerald-900/10 backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                  <BellRing className="h-3 w-3" />
                </span>
                <div className="text-left">
                  <p className="text-[10px] font-extrabold text-emerald-800">Listo · Google Play</p>
                  <p className="text-[11px] font-bold text-[#0F172A]">Cobro QR recibido: Bs 150</p>
                </div>
              </div>

              {/* Píldora Flotante 2: Notificación de MiSalón.lat */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 hidden sm:flex items-center gap-2 rounded-2xl border border-purple-200/90 bg-white/95 px-3.5 py-2 shadow-xl shadow-purple-900/10 backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#A21CAF] text-white shadow-sm">
                  <Calendar className="h-3 w-3" />
                </span>
                <div className="text-left">
                  <p className="text-[10px] font-extrabold text-[#A21CAF]">MiSalón.lat</p>
                  <p className="text-[11px] font-bold text-[#0F172A]">Cita online confirmada</p>
                </div>
              </div>

              {/* Píldora Flotante 3: Notificación de Panito.lat */}
              <div className="absolute -bottom-4 -right-3 sm:-right-4 hidden lg:flex items-center gap-2 rounded-2xl border border-amber-200/90 bg-white/95 px-3.5 py-2 shadow-xl shadow-amber-900/10 backdrop-blur-md">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white shadow-sm">
                  <Truck className="h-3 w-3" />
                </span>
                <div className="text-left">
                  <p className="text-[10px] font-extrabold text-amber-800">Panito.lat</p>
                  <p className="text-[11px] font-bold text-[#0F172A]">Rutas GPS e inventario</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
