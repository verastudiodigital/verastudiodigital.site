import { cn } from '@/lib/utils';
import { Badge } from './Badge';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className,
}: SectionTitleProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'max-w-3xl',
        isCenter && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? (
        <Badge variant={isDark ? 'white' : 'blue'} className="mb-3">
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          'text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl',
          isDark ? 'text-white' : 'text-[#172033]'
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-3 text-base leading-relaxed sm:text-lg',
            isDark ? 'text-white/85' : 'text-[#64748B]'
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
