import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { createPageMetadata } from '@/lib/seo';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = createPageMetadata({
  title: 'Contacto y Cotizaciones | Vera Studio Digital',
  description:
    'Solicita una cotización o asesoramiento digital para tu negocio en Cochabamba y Bolivia por WhatsApp o mediante nuestro formulario.',
  path: '/contacto',
});

export default function ContactoPage() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hola Vera Studio Digital, quisiera solicitar una cotización para mi negocio.'
  );

  return (
    <>
      <section className="bg-[#0073F7] py-14 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="white">Atención comercial</Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Conversemos sobre lo que necesita tu negocio.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/90">
              Atendemos consultas en Cochabamba y de forma remota en toda Bolivia.
              Escríbenos por WhatsApp o prepara tu solicitud en el formulario.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-18">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
                <h2 className="text-xl font-bold text-[#172033]">
                  Canales directos de contacto
                </h2>
                <p className="mt-2 text-sm text-[#64748B]">
                  {siteConfig.coverage}.
                </p>

                <ul className="mt-6 space-y-4 text-sm text-[#172033]">
                  <li className="flex items-start gap-3">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0073F7]/10 text-[#0073F7]">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold">Ubicación de referencia</p>
                      <p className="text-[#64748B]">
                        {siteConfig.city}, {siteConfig.country}
                      </p>
                    </div>
                  </li>

                  {whatsappUrl ? (
                    <li className="flex items-start gap-3">
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0073F7]/10 text-[#0073F7]">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp comercial</p>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0073F7] hover:underline"
                        >
                          {siteConfig.contact.whatsappDisplay}
                        </a>
                      </div>
                    </li>
                  ) : null}

                  {siteConfig.contact.email ? (
                    <li className="flex items-start gap-3">
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0073F7]/10 text-[#0073F7]">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold">Correo electrónico</p>
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="break-all text-[#0073F7] hover:underline"
                        >
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </li>
                  ) : null}
                </ul>

                {whatsappUrl ? (
                  <div className="mt-6 border-t border-[#E2E8F0] pt-6">
                    <Button href={whatsappUrl} external variant="primary" className="w-full">
                      <WhatsAppIcon className="h-5 w-5" />
                      <span>Escribir directo por WhatsApp</span>
                    </Button>
                  </div>
                ) : null}
              </div>

              {siteConfig.socials.length > 0 ? (
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8">
                  <h2 className="text-lg font-bold text-[#172033]">Redes oficiales</h2>
                  <p className="mt-1 text-sm text-[#64748B]">
                    También puedes seguir nuestras novedades y contenido en:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {siteConfig.socials.map((social) => (
                      <a
                        key={social.id}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] px-4 py-2 text-sm font-semibold text-[#172033] transition-colors hover:border-[#0073F7] hover:text-[#0073F7]"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
