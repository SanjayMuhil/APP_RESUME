import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

export interface ProfessionalCardProps {
  children: ReactNode;
  hover?: boolean;
  noPadding?: boolean;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'pink' | 'orange' | 'rainbow';
  onClick?: () => void;
}

export function ProfessionalCard({
  children,
  hover = false,
  noPadding = false,
  className,
  glowColor = 'rainbow',
  onClick,
}: ProfessionalCardProps) {
  const glowStyles = {
    blue: 'hover:border-[#0894FF]/50 hover:shadow-[0_12px_35px_-5px_rgba(8,148,255,0.3)]',
    purple: 'hover:border-[#C959DD]/50 hover:shadow-[0_12px_35px_-5px_rgba(201,89,221,0.3)]',
    pink: 'hover:border-[#FF2E54]/50 hover:shadow-[0_12px_35px_-5px_rgba(255,46,84,0.3)]',
    orange: 'hover:border-[#FF9004]/50 hover:shadow-[0_12px_35px_-5px_rgba(255,144,4,0.3)]',
    rainbow: 'hover:border-[#0894FF]/40 hover:shadow-[0_12px_35px_-5px_rgba(201,89,221,0.25)]',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'relative w-full rounded-xl bg-[#0B0F28]/80 backdrop-blur-md border border-white/12 text-white',
        !noPadding && 'p-4 sm:p-5 md:p-6',
        'shadow-xl shadow-black/40',
        'transition-all duration-300 ease-out',
        hover && [
          'hover:-translate-y-1.5 hover:scale-[1.01]',
          glowStyles[glowColor],
          'group',
        ],
        onClick && 'cursor-pointer',
        className
      )}
    >
      {/* Subtle top gradient accent bar */}
      <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export interface ProfessionalCardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function ProfessionalCardHeader({ children, className }: ProfessionalCardHeaderProps) {
  return (
    <div className={cn('space-y-1 mb-4', className)}>{children}</div>
  );
}

export interface ProfessionalCardContentProps {
  children: ReactNode;
  className?: string;
}

export function ProfessionalCardContent({ children, className }: ProfessionalCardContentProps) {
  return (
    <div className={cn('flex-1 space-y-4 text-zinc-300', className)}>{children}</div>
  );
}

export interface ProfessionalCardFooterProps {
  children: ReactNode;
  className?: string;
}

export function ProfessionalCardFooter({ children, className }: ProfessionalCardFooterProps) {
  return (
    <div
      className={cn(
        'pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-3',
        className
      )}
    >
      {children}
    </div>
  );
}
