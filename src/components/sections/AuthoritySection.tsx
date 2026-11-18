import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  MapPin,
  ShieldCheck,
  Smartphone,
  Terminal,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function AuthoritySection() {
  return (
    <section className="border-t border-[#E2E8F0] bg-[#F5F8FC] py-16 sm:py-24">
      <Container>
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-xl sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Lado izquierdo: Explicación de autoridad */}
            <div className="space-y-4 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0073F7]/20 bg-[#0073F7]/5 px-3 py-1 text-xs font-bold text-[#0073F7]">
                <ShieldCheck className="h-4 w-4" />
                <span>Desarrollo de Software & Aplicaciones Oficiales</span>
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-[#172033] sm:text-3xl lg:text-4xl">
                Más que una agencia: desarrolladores de software verificados en Google Play.
              </h2>

              <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
                En Vera Studio Digital no nos limitamos a crear maquetas visuales. Diseñamos,
                programamos y publicamos herramientas tecnológicas reales utilizadas a diario
                por comerciantes y usuarios en Bolivia, como{' '}
                <strong className="text-[#172033]">Listo (Aviso de Pagos QR)</strong> y{' '}
                <strong className="text-[#172033]">LUKIO</strong>.
              </p>

              {/* 3 Pilares de confianza técnica */}
              <div className="grid gap-4 pt-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3.5">
                  <Smartphone className="h-5 w-5 text-[#0073F7]" />
                  <p className="mt-2 text-xs font-bold text-[#172033]">Google Play Store</p>
                  <p className="mt-0.5 text-[11px] text-[#64748B]">
                    Aplicaciones Android oficiales publicadas y activas.
                  </p>
                </div>

                <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3.5">
                  <Lock className="h-5 w-5 text-emerald-600" />
                  <p className="mt-2 text-xs font-bold text-[#172033]">Privacidad 100% Local</p>
                  <p className="mt-0.5 text-[11px] text-[#64748B]">
                    Herramientas seguras sin captura de contraseñas ni comisiones.
                  </p>
                </div>

                <div className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3.5">
                  <MapPin className="h-5 w-5 text-[#0073F7]" />
                  <p className="mt-2 text-xs font-bold text-[#172033]">Soporte en Bolivia</p>
                  <p className="mt-0.5 text-[11px] text-[#64748B]">
                    Atención directa desde Cochabamba para todo el país.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/portafolio"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0073F7] transition-all hover:translate-x-1 hover:text-[#063B79]"
                >
                  <span>Revisar aplicaciones y proyectos en el portafolio</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Lado derecho: Tarjeta de Desarrollador Oficial */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border-2 border-[#063B79] bg-gradient-to-br from-[#063B79] via-[#094892] to-[#0073F7] p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                      <Terminal className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white">Google Play Console</p>
                      <p className="text-[10px] text-white/75">Perfil de Desarrollador</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                    Verificado ✓
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl bg-white/10 p-3 text-xs leading-relaxed backdrop-blur-sm">
                    <p className="text-[10px] font-semibold text-white/75 uppercase tracking-wider">
                      Aplicación destacada:
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-white">
                      Listo – Aviso de Pagos QR
                    </p>
                    <p className="mt-1 text-[11px] text-white/85">
                      Anuncio por voz al instante de pagos QR recibidos con Yape, Yastá y bancos de Bolivia.
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-white/90">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                      <span>Desarrollado con orgullo en Cochabamba, Bolivia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
                      <span>Garantía de actualización y mantenimiento continuo</span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.verastudio.listo&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-2.5 text-xs font-bold text-[#063B79] shadow-md transition-all hover:bg-[#F5F8FC]"
                    >
                      <span>Ver ficha de Listo en Google Play</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
