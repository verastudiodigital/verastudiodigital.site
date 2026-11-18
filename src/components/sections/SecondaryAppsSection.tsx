import Image from 'next/image';
import { ArrowRight, BellRing, Brain, ExternalLink, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export function SecondaryAppsSection() {
  return (
    <section className="border-t border-[#E2E8F0] bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0073F7]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0073F7]">
            <ShieldCheck className="h-4 w-4" />
            Capacidad técnica e ingeniería propia
          </span>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#172033] sm:text-3xl">
            También creamos software propio publicado en Google Play.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#64748B]">
            Además de nuestros servicios a medida para empresas, desarrollamos y publicamos
            aplicaciones Android utilizadas a diario en Bolivia, respaldando nuestra experiencia en programación real.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Tarjeta Listo */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-[#F5F8FC]/70 p-7 transition-all hover:border-[#0073F7] hover:shadow-xl">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/listo/logo.png"
                  alt="Listo - Aviso de Pagos QR"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-2xl bg-white p-1 shadow-sm object-contain"
                />
                <div>
                  <span className="inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    Google Play Store · Android
                  </span>
                  <h3 className="text-lg font-bold text-[#172033] mt-1">
                    Listo – Aviso de Pagos QR
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                Escucha tus pagos QR por voz al instante con Yape, Yastá y bancos de Bolivia.
                Evita capturas falsas, revisa tu totalizador diario y exporta a Excel sin tocar tu dinero.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white border border-[#E2E8F0] px-3 py-1.5 text-xs font-semibold text-[#172033]">
                <BellRing className="h-3.5 w-3.5 text-emerald-600" />
                <span>100% local, seguro y sin captura de claves</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
              <a
                href="https://play.google.com/store/apps/details?id=com.verastudio.listo&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0073F7] py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#063B79] transition-colors"
              >
                <span>Ver ficha de Listo en Google Play</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Tarjeta LUKIO */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-[#F5F8FC]/70 p-7 transition-all hover:border-[#0073F7] hover:shadow-xl">
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/lukio/logo.png"
                  alt="LUKIO - Gimnasia Mental"
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-2xl bg-white p-1 shadow-sm object-contain"
                />
                <div>
                  <span className="inline-block rounded-full bg-[#0073F7]/10 px-2.5 py-0.5 text-xs font-bold text-[#0073F7]">
                    Aplicación Móvil · Android
                  </span>
                  <h3 className="text-lg font-bold text-[#172033] mt-1">
                    LUKIO: Gimnasia Mental
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#64748B]">
                Entrenamiento cognitivo con cálculo mental, memoria de secuencias, atención Stroop
                y agilidad cerebral con voz nativa americana.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white border border-[#E2E8F0] px-3 py-1.5 text-xs font-semibold text-[#172033]">
                <Brain className="h-3.5 w-3.5 text-[#0073F7]" />
                <span>Neuroplasticidad y agilidad mental</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
              <a
                href="/lukio"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white border border-[#E2E8F0] py-2.5 text-xs font-bold text-[#172033] hover:border-[#0073F7] hover:text-[#0073F7] transition-colors"
              >
                <span>Conocer detalles de LUKIO</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
