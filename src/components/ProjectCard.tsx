import type { ProjectItem } from '@/data';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Code2,
  Layers,
  Brain,
  Globe,
  Smartphone,
  Eye,
} from 'lucide-react';
import { ProfessionalCard, ProfessionalCardHeader, ProfessionalCardContent, ProfessionalCardFooter } from '@/components/ui/ProfessionalCard';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect?: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  // Category Icon helper - vibrant IT colors
  const renderCategoryIcon = () => {
    switch (project.category) {
      case 'Full Stack & AI':
        return <Brain className="w-3.5 h-3.5 text-[#0894FF]" />;
      case 'DevOps & Cloud':
        return <Layers className="w-3.5 h-3.5 text-[#C959DD]" />;
      case 'Mobile & Web':
        return <Smartphone className="w-3.5 h-3.5 text-[#FF2E54]" />;
      default:
        return <Globe className="w-3.5 h-3.5 text-[#22D3EE]" />;
    }
  };

  const getGlow = () => {
    if (project.category === 'Full Stack & AI') return 'blue';
    if (project.category === 'DevOps & Cloud') return 'purple';
    if (project.category === 'Mobile & Web') return 'pink';
    return 'rainbow';
  };

  return (
    <ProfessionalCard
      glowColor={getGlow()}
      onClick={() => onSelect && onSelect(project)}
      className="cursor-pointer group"
      hover
    >
      {/* ── PROJECT PREVIEW IMAGE CONTAINER (16:9 Aspect Ratio) ── */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#050816] rounded-lg border border-white/12 mb-4">
        <img
          src={project.homepageImage || project.image}
          alt={project.imageAlt || `${project.title} Preview Screenshot`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent opacity-80 group-hover:opacity-40 transition-opacity rounded-lg" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#050816]/90 backdrop-blur-md text-white border border-[#0894FF]/40 shadow-md">
            {renderCategoryIcon()}
            <span>{project.badgeText || project.category}</span>
          </span>

          {project.isFeatured && (
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-[#0894FF] to-[#C959DD] text-white shadow-md">
              <Sparkles className="w-3 h-3 text-white" />
              Featured
            </span>
          )}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-[#050816]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none z-20 rounded-lg">
          <span className="px-4 py-2 rounded-lg bg-[#0B0F28] text-white font-gageda font-bold text-xs border border-[#0894FF]/40 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-lg">
            <Eye className="w-4 h-4 text-[#0894FF]" />
            <span>View Specs & Architecture</span>
          </span>
        </div>
      </div>

      {/* ── CARD HEADER ── */}
      <ProfessionalCardHeader>
        <h3 className="font-gageda text-lg md:text-xl font-bold text-white group-hover:text-[#0894FF] transition-colors tracking-tight line-clamp-1">
          {project.title}
        </h3>
      </ProfessionalCardHeader>

      {/* ── CARD BODY CONTENT ── */}
      <ProfessionalCardContent>
        <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Feature Highlights Bullet Points */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-1.5 bg-[#050816] p-3 rounded-lg border border-white/10">
            {project.features.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-[11px] text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0894FF] flex-shrink-0 mt-0.5" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Badges Layout */}
        <div>
          <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
            STACK ARCHITECTURE:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#050816] text-zinc-200 border border-white/12 flex items-center gap-1 hover:border-[#0894FF]/40 transition-colors"
              >
                <Code2 className="w-3 h-3 text-[#C959DD]" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ProfessionalCardContent>

      {/* ── CARD FOOTER ACTIONS ── */}
      <ProfessionalCardFooter>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect && onSelect(project);
          }}
          className="font-gageda text-xs font-semibold text-zinc-300 hover:text-white group-hover:underline flex items-center gap-1.5 focus:outline-none uppercase tracking-wider"
        >
          <Code2 className="w-4 h-4 text-[#0894FF]" />
          <span>Full Specs</span>
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-gageda px-3 py-1.5 rounded-lg bg-[#050816] hover:bg-white/10 text-zinc-200 hover:text-white transition-colors border border-white/12 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider"
              aria-label={`GitHub source code for ${project.title}`}
              title="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-gageda px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white transition-all flex items-center gap-1.5 text-xs font-bold shadow-md hover:shadow-[0_0_15px_rgba(8,148,255,0.4)] uppercase tracking-wider"
              aria-label={`Live demo for ${project.title}`}
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          )}
        </div>
      </ProfessionalCardFooter>
    </ProfessionalCard>
  );
}
