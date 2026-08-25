import type { ProjectItem } from '@/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectNavigationProps {
  projects: ProjectItem[];
  currentIndex: number;
  onSelectProject: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
}

export function ProjectNavigation({
  projects,
  currentIndex,
  onSelectProject,
  onPrev,
  onNext,
  className = '',
}: ProjectNavigationProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Top Carousel Navigation Bar */}
      <div className="flex items-center justify-between gap-4 bg-[#0A0A0A] p-3 rounded-xl border border-white/10">
        {/* Previous Button */}
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous project"
          className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-all active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 text-zinc-300" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Index Counter & Current Title */}
        <div className="flex items-center gap-3 text-center truncate">
          <span className="text-xs font-mono font-bold text-zinc-400">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-700 hidden sm:inline-block" />
          <span className="text-xs font-bold text-white truncate max-w-[140px] sm:max-w-[240px]">
            {projects[currentIndex]?.title}
          </span>
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          aria-label="Next project"
          className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-all active:scale-95"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4 text-zinc-300" />
        </button>
      </div>

      {/* Direct Project Pill Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {projects.map((proj, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={proj.id}
              onClick={() => onSelectProject(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all flex items-center gap-2 border ${
                isActive
                  ? 'bg-white text-black font-bold border-white shadow-md'
                  : 'bg-[#0A0A0A] text-zinc-400 hover:text-white hover:bg-zinc-900 border-white/10'
              }`}
            >
              <span className="text-[10px] opacity-60">{String(idx + 1).padStart(2, '0')}</span>
              <span className="truncate max-w-[120px]">{proj.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectNavigation;
