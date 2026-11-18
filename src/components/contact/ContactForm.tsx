'use client';

import { useState } from 'react';
import Link from 'next/link';
import { z } from 'zod';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { servicesData } from '@/data/services';
import { buildWhatsAppUrl, formatContactWhatsAppMessage } from '@/lib/whatsapp';
import { trackAnalyticsEvent } from '@/components/analytics/GoogleAnalytics';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Ingresa tu nombre completo (mínimo 2 caracteres).')
    .max(80, 'El nombre no puede superar los 80 caracteres.'),
  businessName: z
    .string()
    .trim()
    .min(2, 'Indica el nombre de tu negocio o emprendimiento.')
    .max(100, 'El nombre del negocio no puede superar los 100 caracteres.'),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s()-]{7,20}$/, 'Ingresa un número de teléfono válido.'),
  service: z.string().trim().min(1, 'Selecciona un servicio de interés.'),
  message: z
    .string()
    .trim()
    .min(10, 'Cuéntanos brevemente qué necesita tu negocio (mínimo 10 caracteres).')
    .max(1000, 'El mensaje no puede superar los 1000 caracteres.'),
  acceptPrivacy: z.literal(true, {
    errorMap: () => ({
      message: 'Debes aceptar la política de privacidad para continuar.',
    }),
  }),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

export function ContactForm() {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(servicesData[0]?.name ?? 'Asesoramiento general');
  const [message, setMessage] = useState('');
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [formLoadedAt] = useState(() => Date.now());
  const [errors, setErrors] = useState<FormErrors>({});
  const [botBlockedError, setBotBlockedError] = useState<string | null>(null);
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBotBlockedError(null);
    setPreparedWhatsAppUrl(null);

    // Protección antispam básica: honeypot y envío instantáneo automatizado
    if (honeypot.trim().length > 0 || Date.now() - formLoadedAt < 1200) {
      setBotBlockedError(
        'No se pudo validar el envío automático. Intenta nuevamente en unos segundos.'
      );
      return;
    }

    const parsed = contactSchema.safeParse({
      name,
      businessName,
      phone,
      service,
      message,
      acceptPrivacy,
    });

    if (!parsed.success) {
      const nextErrors: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof FormErrors | undefined;
        if (field && !nextErrors[field]) {
          nextErrors[field] = issue.message;
        }
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});

    const formatted = formatContactWhatsAppMessage(parsed.data);
    const whatsappUrl = buildWhatsAppUrl(formatted);

    if (!whatsappUrl) {
      setBotBlockedError(
        'El número oficial de WhatsApp no está configurado actualmente.'
      );
      return;
    }

    trackAnalyticsEvent('contact_form_whatsapp', { service: parsed.data.service });
    setPreparedWhatsAppUrl(whatsappUrl);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-xl font-bold text-[#172033]">Solicitar cotización</h2>
      <p className="mt-1.5 text-sm text-[#64748B]">
        Completa tus datos y prepararemos tu consulta lista para enviarla directamente por
        WhatsApp.
      </p>

      {/* Campo honeypot oculto para bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Sitio web</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-semibold text-[#172033]"
            >
              Nombre completo *
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Carlos Mendoza"
              aria-invalid={Boolean(errors.name)}
              className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] px-4 py-2.5 text-sm text-[#172033] placeholder:text-[#64748B]/70 focus:border-[#0073F7] focus:bg-white focus:outline-none"
            />
            {errors.name ? (
              <p className="mt-1 text-xs font-medium text-red-600">{errors.name}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-business"
              className="block text-sm font-semibold text-[#172033]"
            >
              Nombre del negocio *
            </label>
            <input
              id="contact-business"
              name="businessName"
              type="text"
              required
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Ej. Distribuidora Central"
              aria-invalid={Boolean(errors.businessName)}
              className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] px-4 py-2.5 text-sm text-[#172033] placeholder:text-[#64748B]/70 focus:border-[#0073F7] focus:bg-white focus:outline-none"
            />
            {errors.businessName ? (
              <p className="mt-1 text-xs font-medium text-red-600">
                {errors.businessName}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-phone"
              className="block text-sm font-semibold text-[#172033]"
            >
              Número de teléfono / WhatsApp *
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ej. +591 70000000"
              aria-invalid={Boolean(errors.phone)}
              className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] px-4 py-2.5 text-sm text-[#172033] placeholder:text-[#64748B]/70 focus:border-[#0073F7] focus:bg-white focus:outline-none"
            />
            {errors.phone ? (
              <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="contact-service"
              className="block text-sm font-semibold text-[#172033]"
            >
              Servicio de interés *
            </label>
            <select
              id="contact-service"
              name="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              aria-invalid={Boolean(errors.service)}
              className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] px-4 py-2.5 text-sm text-[#172033] focus:border-[#0073F7] focus:bg-white focus:outline-none"
            >
              {servicesData.map((item) => (
                <option key={item.slug} value={item.name}>
                  {item.name}
                </option>
              ))}
              <option value="Asesoramiento integral (varios servicios)">
                Asesoramiento integral (varios servicios)
              </option>
            </select>
            {errors.service ? (
              <p className="mt-1 text-xs font-medium text-red-600">{errors.service}</p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="block text-sm font-semibold text-[#172033]"
          >
            Descripción de tu necesidad *
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Cuéntanos brevemente a qué se dedica tu negocio y qué solución estás buscando..."
            aria-invalid={Boolean(errors.message)}
            className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F5F8FC] px-4 py-2.5 text-sm text-[#172033] placeholder:text-[#64748B]/70 focus:border-[#0073F7] focus:bg-white focus:outline-none"
          />
          {errors.message ? (
            <p className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>
          ) : null}
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-[#64748B] sm:text-sm">
            <input
              type="checkbox"
              checked={acceptPrivacy}
              onChange={(e) => setAcceptPrivacy(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-[#E2E8F0] text-[#0073F7] focus:ring-[#0073F7]"
            />
            <span>
              Acepto la{' '}
              <Link
                href="/politica-de-privacidad"
                className="font-semibold text-[#0073F7] underline"
              >
                Política de privacidad
              </Link>{' '}
              para que Vera Studio Digital utilice estos datos con el fin de responder mi
              consulta comercial.
            </span>
          </label>
          {errors.acceptPrivacy ? (
            <p className="mt-1 text-xs font-medium text-red-600">
              {errors.acceptPrivacy}
            </p>
          ) : null}
        </div>

        {botBlockedError ? (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {botBlockedError}
          </div>
        ) : null}

        <Button type="submit" variant="primary" size="lg" className="w-full">
          <WhatsAppIcon className="h-5 w-5" />
          <span>Continuar y enviar por WhatsApp</span>
        </Button>

        {preparedWhatsAppUrl ? (
          <div
            role="status"
            className="rounded-xl border border-[#0073F7]/25 bg-[#F5F8FC] p-4 text-sm text-[#172033]"
          >
            <div className="flex items-start gap-2.5">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-[#0073F7]"
                aria-hidden="true"
              />
              <div>
                <p className="font-semibold">
                  Tu mensaje quedó preparado para enviarse por WhatsApp.
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  Si no se abrió automáticamente la ventana de WhatsApp, pulsa el enlace
                  directo a continuación:
                </p>
                <a
                  href={preparedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-[#0073F7] underline"
                >
                  <span>Abrir conversación en WhatsApp</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
}
