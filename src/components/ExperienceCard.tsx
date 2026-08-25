import type { ExperienceItem } from '@/data';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { ProfessionalCard } from '@/components/ui/ProfessionalCard';

interface ExperienceCardProps {
  experience: ExperienceItem;
  isFirst?: boolean;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const glowColors = ['blue', 'purple', 'pink'] as const;
  const glow = glowColors[(typeof experience.id === 'number' ? experience.id - 1 : 0) % 3];

  return (
    <div className="relative pl-6 sm:pl-8 md:pl-10 pb-8 sm:pb-10 group">
      {/* Glowing Timeline Bullet Marker */}
      <div className="absolute left-0 top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-[#0894FF] bg-[#050816] flex items-center justify-center transition-all z-20 shadow-[0_0_12px_rgba(8,148,255,0.5)]">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#22D3EE] animate-pulse" />
      </div>

      {/* Gradient Timeline Line Segment */}
      <div className="absolute left-[7px] sm:left-[9px] top-6 sm:top-7 bottom-0 w-[2px] bg-gradient-to-b from-[#0894FF] via-[#C959DD] to-[#FF2E54] opacity-60 z-10" />

      {/* Main Experience Glow Card */}
      <ProfessionalCard glowColor={glow} hover>
        <div className="space-y-3 sm:space-y-4">
          {/* Role & Company Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-0.5 rounded-full bg-[#0894FF]/10 text-[#0894FF] border border-[#0894FF]/30">
                  {experience.type}
                </span>
              </div>
              <h3 className="font-gageda text-lg sm:text-xl font-bold text-white tracking-tight uppercase">{experience.role}</h3>
              <h4 className="font-gageda text-xs sm:text-sm font-semibold text-[#C959DD] flex items-center gap-1.5 mt-0.5">
                <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C959DD]" />
                {experience.company}
              </h4>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-zinc-300 font-mono">
              <span className="flex items-center gap-1 bg-[#050816] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-[#0894FF]" />
                {experience.duration}
              </span>
              <span className="flex items-center gap-1 bg-[#050816] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-[#FF2E54]" />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Responsibilities Bullets */}
          <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
            {experience.description.map((point, index) => (
              <div key={index} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0894FF] flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Key Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="bg-[#050816] border border-[#C959DD]/30 p-3 sm:p-4 rounded-lg space-y-1 sm:space-y-1.5">
              <h5 className="text-[11px] sm:text-xs font-mono font-bold text-[#C959DD] uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C959DD]" /> Key Impact & Deliverables
              </h5>
              <ul className="space-y-1 text-xs text-zinc-300">
                {experience.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0894FF] flex-shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Stacks */}
          <div className="pt-1 sm:pt-2 flex flex-wrap gap-1 sm:gap-1.5">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#050816] text-zinc-200 border border-white/12 hover:border-[#0894FF]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ProfessionalCard>
    </div>
  );
}
