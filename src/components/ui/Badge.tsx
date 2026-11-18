import { cn } from '@/lib/utils';

type BadgeVariant = 'blue' | 'white' | 'subtle' | 'dark';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: 'bg-[#0073F7]/10 text-[#0073F7] border border-[#0073F7]/20',
  white: 'bg-white/15 text-white border border-white/25',
  subtle: 'bg-[#F5F8FC] text-[#172033] border border-[#E2E8F0]',
  dark: 'bg-[#063B79] text-white border border-[#063B79]',
};

export function Badge({ children, variant = 'blue', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
