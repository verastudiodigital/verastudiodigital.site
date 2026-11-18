'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { WhatsAppIcon } from '@/components/ui/ServiceIcon';
import { trackAnalyticsEvent } from '@/components/analytics/GoogleAnalytics';

interface MobileMenuProps {
  whatsappUrl: string | null;
}

export function MobileMenu({ whatsappUrl }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white text-[#172033] transition-colors hover:border-[#0073F7] hover:text-[#0073F7]"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="absolute inset-x-0 top-full z-50 border-b border-[#E2E8F0] bg-white px-4 py-5 shadow-lg"
        >
          <nav aria-label="Menú móvil" className="flex flex-col space-y-1">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[#172033] transition-colors hover:bg-[#F5F8FC] hover:text-[#0073F7]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {whatsappUrl ? (
            <div className="mt-4 border-t border-[#E2E8F0] pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setIsOpen(false);
                  trackAnalyticsEvent('whatsapp_click', { location: 'mobile_menu' });
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0073F7] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#005FD1]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Solicitar cotización</span>
              </a>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
