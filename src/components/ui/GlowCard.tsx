import {
  ProfessionalCard,
  ProfessionalCardHeader,
  ProfessionalCardContent,
  ProfessionalCardFooter,
  type ProfessionalCardProps,
  type ProfessionalCardHeaderProps,
  type ProfessionalCardContentProps,
  type ProfessionalCardFooterProps,
} from './ProfessionalCard';

export interface GlowCardProps extends ProfessionalCardProps {
  colors?: string[];
  mode?: string;
  glow?: boolean;
  glowIntensity?: string;
}

export function GlowCard({
  children,
  hover = false,
  noPadding = false,
  className,
  onClick,
}: GlowCardProps) {
  return (
    <ProfessionalCard
      hover={hover}
      noPadding={noPadding}
      className={className}
      onClick={onClick}
    >
      {children}
    </ProfessionalCard>
  );
}

export const GlowCardHeader = ProfessionalCardHeader;
export const GlowCardContent = ProfessionalCardContent;
export const GlowCardFooter = ProfessionalCardFooter;

export type GlowCardHeaderProps = ProfessionalCardHeaderProps;
export type GlowCardContentProps = ProfessionalCardContentProps;
export type GlowCardFooterProps = ProfessionalCardFooterProps;
