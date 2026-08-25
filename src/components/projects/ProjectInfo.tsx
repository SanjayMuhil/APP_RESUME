import type { ProjectItem } from '@/data';
import { ExternalLink, Github, CheckCircle2, Code2, Globe, Sparkles, Layers } from 'lucide-react';

interface ProjectInfoProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectInfo({ project, className = '' }: ProjectInfoProps) {
  return (
    <div className={`space-y-6 select-text ${className}`}>
      {/* Category / Status Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#050816] text-[#22D3EE] border border-[#0894FF]/40">
          <Globe className="w-3.5 h-3.5 text-[#0894FF]" />
          <span>{project.badgeText || project.category}</span>
        </span>

        {project.liveUrl && (
          <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#050816] text-white border border-[#C959DD]/40">
            <span className="w-2 h-2 rounded-full bg-[#0894FF] animate-pulse" />
            <span>LIVE PRODUCTION</span>
          </span>
        )}

        {project.isFeatured && (
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#0894FF] to-[#C959DD] text-white shadow-sm">
            <Sparkles className="w-3 h-3 text-white" />
            <span>FEATURED SHOWCASE</span>
          </span>
        )}
      </div>

      {/* Title & Description */}
      <div className="space-y-3">
        <h2 className="font-gageda text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {project.title}
        </h2>
        <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl">
          {project.fullDescription || project.description}
        </p>
      </div>

      {/* Feature Bullet Points (if present) */}
      {project.features && project.features.length > 0 && (
        <div className="space-y-2 bg-[#050816] p-4 rounded-xl border border-white/12">
          <h4 className="text-xs font-mono font-bold text-[#0894FF] uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#0894FF]" />
            Key Architecture & Features:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0894FF] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies Pills */}
      <div className="space-y-2">
        <span className="text-xs font-mono font-bold text-[#C959DD] uppercase tracking-wider block">
          Technology Stack:
        </span>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1 bg-[#050816] text-zinc-200 rounded-lg border border-white/12 flex items-center gap-1.5 shadow-sm"
            >
              <Code2 className="w-3.5 h-3.5 text-[#C959DD]" />
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Primary Action Buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-gageda px-6 py-3 rounded-xl bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg transition-all active:scale-95 uppercase tracking-wider"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-gageda px-6 py-3 rounded-xl bg-[#050816] hover:bg-white/10 text-white text-xs sm:text-sm font-bold flex items-center gap-2 border border-white/20 transition-colors active:scale-95 uppercase tracking-wider"
          >
            <Github className="w-4 h-4 text-zinc-300" />
            <span>GitHub Repository</span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectInfo;
