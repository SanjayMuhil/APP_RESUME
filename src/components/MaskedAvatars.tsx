import TechnologyStack from './footer/TechnologyStack';

export { default as TechnologyStack } from './footer/TechnologyStack';

interface MaskedAvatarsProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function MaskedAvatars({
  title = 'TECHNOLOGY STACK',
  subtitle,
  className = '',
}: MaskedAvatarsProps) {
  return (
    <TechnologyStack
      title={title}
      subtitle={subtitle}
      className={className}
    />
  );
}
