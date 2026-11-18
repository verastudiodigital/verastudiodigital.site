import {
  BarChart3,
  BookOpenCheck,
  Briefcase,
  Building2,
  Globe,
  MessageSquareText,
  Palette,
  Scissors,
  Smartphone,
  Sprout,
  Store,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';
import type { ServiceIconName } from '@/types/service';
import type { IndustryItem } from '@/types/site';

export function ServiceIcon({
  name,
  className = 'h-6 w-6',
}: {
  name: ServiceIconName;
  className?: string;
}) {
  switch (name) {
    case 'MessageSquareText':
      return <MessageSquareText className={className} aria-hidden="true" />;
    case 'BookOpenCheck':
      return <BookOpenCheck className={className} aria-hidden="true" />;
    case 'Palette':
      return <Palette className={className} aria-hidden="true" />;
    case 'BarChart3':
      return <BarChart3 className={className} aria-hidden="true" />;
    case 'Globe':
      return <Globe className={className} aria-hidden="true" />;
    case 'Smartphone':
      return <Smartphone className={className} aria-hidden="true" />;
  }
}

export function IndustryIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: IndustryItem['iconName'];
  className?: string;
}) {
  switch (name) {
    case 'Store':
      return <Store className={className} aria-hidden="true" />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className={className} aria-hidden="true" />;
    case 'Scissors':
      return <Scissors className={className} aria-hidden="true" />;
    case 'Briefcase':
      return <Briefcase className={className} aria-hidden="true" />;
    case 'Truck':
      return <Truck className={className} aria-hidden="true" />;
    case 'Sprout':
      return <Sprout className={className} aria-hidden="true" />;
    case 'Building2':
      return <Building2 className={className} aria-hidden="true" />;
  }
}

export function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.391c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.984S17.547 2 12.031 2zm5.797 14.141c-.25.703-1.422 1.344-1.969 1.422-.531.078-1.188.109-1.922-.125-.453-.141-1.031-.344-1.766-.656-3.094-1.344-5.109-4.469-5.266-4.672-.156-.203-1.266-1.688-1.266-3.219 0-1.531.797-2.281 1.078-2.594.281-.312.609-.391.812-.391h.578c.188 0 .438-.078.688.531.25.609.859 2.094.938 2.25.078.156.125.344.016.547-.109.203-.156.344-.312.516-.156.172-.328.391-.469.531-.156.156-.312.328-.141.641.172.312.781 1.297 1.672 2.094 1.156 1.031 2.125 1.344 2.438 1.5.312.156.5.125.688-.078.188-.203.781-.906.984-1.219.203-.312.406-.266.688-.156.281.109 1.797.844 2.109 1s.516.234.594.359c.078.125.078.734-.172 1.438z" />
    </svg>
  );
}
