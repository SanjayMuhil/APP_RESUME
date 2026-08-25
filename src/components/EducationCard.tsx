import type { EducationItem } from '@/data';
import { GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { ProfessionalCard, ProfessionalCardHeader, ProfessionalCardContent } from '@/components/ui/ProfessionalCard';

interface EducationCardProps {
  item: EducationItem;
}

export default function EducationCard({ item }: EducationCardProps) {
  const glow = item.id === 1 ? 'purple' : 'blue';

  return (
    <ProfessionalCard glowColor={glow} hover>
      <ProfessionalCardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-xl bg-[#050816] border border-[#0894FF]/30 text-white shadow-md">
              <GraduationCap className="w-6 h-6 text-[#0894FF]" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#0894FF]/10 text-[#0894FF] border border-[#0894FF]/30">
                {item.status}
              </span>
              <h3 className="font-gageda text-lg md:text-xl font-bold text-white tracking-tight mt-1">{item.degree}</h3>
              <h4 className="font-gageda text-sm font-semibold text-[#C959DD]">{item.institution}</h4>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-300 font-mono">
            <span className="flex items-center gap-1 bg-[#050816] px-3 py-1 rounded-lg border border-white/10">
              <Calendar className="w-3.5 h-3.5 text-[#0894FF]" /> {item.duration}
            </span>
            <span className="flex items-center gap-1 bg-[#050816] px-3 py-1 rounded-lg border border-white/10 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF2E54]" /> {item.location}
            </span>
          </div>
        </div>
      </ProfessionalCardHeader>

      <ProfessionalCardContent>
        <p className="text-xs text-zinc-300 leading-relaxed">{item.description}</p>

        {item.highlights && item.highlights.length > 0 && (
          <div className="space-y-1.5 pt-2">
            {item.highlights.map((hl, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle className="w-3.5 h-3.5 text-[#0894FF] flex-shrink-0" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        )}
      </ProfessionalCardContent>
    </ProfessionalCard>
  );
}
