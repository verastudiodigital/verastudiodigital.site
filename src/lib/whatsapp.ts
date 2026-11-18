import { siteConfig } from '@/config/site';

/**
 * Normaliza un número telefónico dejando solo dígitos para construir enlaces wa.me válidos.
 */
function sanitizePhoneNumber(raw: string): string {
  return raw.replace(/\D/g, '');
}

/**
 * Indica si el número oficial de WhatsApp está configurado y es utilizable.
 */
export function isWhatsAppConfigured(): boolean {
  const digits = sanitizePhoneNumber(siteConfig.contact.whatsappNumber);
  return digits.length >= 8;
}

/**
 * Construye un enlace oficial de WhatsApp (`https://wa.me/...`) con mensaje codificado.
 * Devuelve `null` si el número no está configurado para evitar enlaces rotos.
 */
export function buildWhatsAppUrl(message?: string): string | null {
  const digits = sanitizePhoneNumber(siteConfig.contact.whatsappNumber);
  if (digits.length < 8) {
    return null;
  }

  const finalMessage = (message?.trim() || siteConfig.defaultWhatsappMessage).trim();
  return `https://wa.me/${digits}?text=${encodeURIComponent(finalMessage)}`;
}

/**
 * Construye el mensaje estructurado para el formulario de contacto hacia WhatsApp.
 */
export function formatContactWhatsAppMessage(payload: {
  name: string;
  businessName: string;
  phone: string;
  service: string;
  message: string;
}): string {
  return [
    'Hola Vera Studio Digital, solicito una cotización:',
    `• Nombre: ${payload.name}`,
    `• Negocio / Empresa: ${payload.businessName}`,
    `• Teléfono de contacto: ${payload.phone}`,
    `• Servicio de interés: ${payload.service}`,
    `• Detalle de la necesidad: ${payload.message}`,
  ].join('\n');
}
