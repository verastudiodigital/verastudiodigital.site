import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'white' | 'ghost-white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

interface ActionButtonProps extends BaseProps {
  href?: never;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#0073F7] text-white hover:bg-[#005FD1] shadow-sm border border-transparent',
  secondary:
    'bg-[#063B79] text-white hover:bg-[#052E5F] shadow-sm border border-transparent',
  outline:
    'bg-white text-[#172033] border border-[#E2E8F0] hover:border-[#0073F7] hover:text-[#0073F7]',
  white:
    'bg-white text-[#0073F7] hover:bg-[#F5F8FC] shadow-sm border border-transparent',
  'ghost-white':
    'bg-transparent text-white border border-white/40 hover:bg-white/10 hover:border-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-9 px-3.5 py-2 text-sm rounded-lg',
  md: 'min-h-11 px-5 py-2.5 text-sm sm:text-base rounded-xl',
  lg: 'min-h-12 px-6 py-3 text-base rounded-xl',
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;

  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ('href' in props && props.href !== undefined) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={props.onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
