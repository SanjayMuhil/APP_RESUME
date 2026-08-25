import type { SkillCategory } from '@/data';
import { Layout, Database, Cloud, TrendingUp, CheckCircle, Code2 } from 'lucide-react';
import { ProfessionalCard } from '@/components/ui/ProfessionalCard';

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  const getCategoryColor = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return { color: '#0894FF', glow: 'blue' as const, border: 'border-[#0894FF]/40', bg: 'bg-[#0894FF]/10' };
      case 'Database':
        return { color: '#C959DD', glow: 'purple' as const, border: 'border-[#C959DD]/40', bg: 'bg-[#C959DD]/10' };
      case 'Cloud':
        return { color: '#FF2E54', glow: 'pink' as const, border: 'border-[#FF2E54]/40', bg: 'bg-[#FF2E54]/10' };
      case 'TrendingUp':
        return { color: '#FF9004', glow: 'orange' as const, border: 'border-[#FF9004]/40', bg: 'bg-[#FF9004]/10' };
      default:
        return { color: '#0894FF', glow: 'rainbow' as const, border: 'border-[#0894FF]/40', bg: 'bg-[#0894FF]/10' };
    }
  };

  const style = getCategoryColor(category.iconName);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-[#0894FF]" />;
      case 'Database':
        return <Database className="w-5 h-5 text-[#C959DD]" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-[#FF2E54]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#FF9004]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#0894FF]" />;
    }
  };

  return (
    <ProfessionalCard glowColor={style.glow} hover>
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-3 rounded-xl ${style.bg} border ${style.border} flex items-center justify-center shadow-md`}>
          {getIcon(category.iconName)}
        </div>
        <div>
          <h3 className="font-gageda text-lg font-bold text-white tracking-tight">{category.title}</h3>
          <p className="text-xs text-zinc-300">{category.subtitle}</p>
        </div>
      </div>

      {/* Category Skill Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
        {category.items.map((skill) => (
          <div
            key={skill.name}
            className="flex items-start gap-2.5 p-3 rounded-xl bg-[#050816] border border-white/10 hover:border-[#0894FF]/40 transition-colors"
          >
            <CheckCircle className="w-4 h-4 text-[#0894FF] flex-shrink-0 mt-0.5" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-gageda text-xs font-bold text-white">{skill.name}</span>
                {skill.featured && (
                  <span className="w-2 h-2 rounded-full bg-[#0894FF] shadow-[0_0_8px_#0894FF] animate-pulse" />
                )}
              </div>
              {skill.description && (
                <p className="text-[11px] text-zinc-300 leading-snug mt-0.5">
                  {skill.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </ProfessionalCard>
  );
}
