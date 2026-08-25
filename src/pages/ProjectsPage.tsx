import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  Sparkles,
  ExternalLink,
  X,
  CheckCircle2,
  Globe,
  Grid,
  Brain,
  Smartphone,
  Github,
  Code2,
  Layers,
} from 'lucide-react';
import { coreProjects, liveProjectsList, allShowcaseProjects, type ProjectItem } from '@/data';
import ProjectCard from '@/components/ProjectCard';
import ProjectShowcase from '@/components/projects/ProjectShowcase';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Filter projects for the 3D Showcase and main list
  const showcaseProjects = allShowcaseProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'ai' && p.category === 'Full Stack & AI') return true;
    if (filter === 'mobile' && p.category === 'Mobile & Web') return true;
    if (filter === 'live' && (p.category === 'Live Production Sites' || p.liveUrl)) return true;
    return true;
  });

  const filteredCoreProjects = coreProjects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'ai' && p.category === 'Full Stack & AI') return true;
    if (filter === 'mobile' && p.category === 'Mobile & Web') return true;
    return false;
  });

  return (
    <div className="container-custom py-24 md:py-28 space-y-16">
      {/* ── SECTION HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0F28] border border-[#0894FF]/40 text-[#22D3EE] text-xs font-mono font-bold shadow-[0_0_15px_rgba(8,148,255,0.25)]">
          <FolderGit2 className="w-3.5 h-3.5 text-[#0894FF]" />
          <span>3D LIVE PROJECT SHOWCASE & ENGINEERING PORTFOLIO</span>
        </div>

        <h1 className="heading-hero font-gageda font-extrabold tracking-tight text-white leading-tight">
          Building Practical <br className="hidden sm:inline" />
          <span className="gradient-text">
            Technology Solutions
          </span>
        </h1>

        <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
          Interactive 3D device showcase featuring desktop and mobile previews of live client web applications, AI computer vision MVPs, and full-stack web platforms.
        </p>
      </motion.div>

      {/* ── CATEGORY FILTER TABS ── */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {[
          { id: 'all', label: 'All Projects', icon: Grid },
          { id: 'live', label: 'Live Production Sites', icon: Globe },
          { id: 'ai', label: 'Full Stack & AI MVPs', icon: Brain },
          { id: 'mobile', label: 'Mobile & Web Apps', icon: Smartphone },
        ].map((tab) => {
          const IconComponent = tab.icon;
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`font-gageda px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 uppercase tracking-wider ${
                isActive
                  ? 'bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white shadow-[0_0_20px_rgba(8,148,255,0.4)]'
                  : 'bg-[#0B0F28] text-zinc-300 hover:text-white hover:bg-white/10 border border-white/12'
              }`}
            >
              <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#0894FF]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ── FEATURED 3D LIVE PROJECT SHOWCASE ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#C959DD]" />
            <h2 className="heading-section font-gageda text-xl md:text-2xl font-bold text-white tracking-tight">
              3D Live Interactive Showcase
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-300">
            Desktop & Mobile Responsive View
          </span>
        </div>

        <ProjectShowcase projects={showcaseProjects} />
      </div>

      {/* SECTION DIVIDER */}
      <div className="gradient-divider" />

      {/* ── CORE SYSTEM MVPS GRID WITH FILTER ANIMATIONS ── */}
      {filter !== 'live' && (
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h2 className="heading-section font-gageda text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#0894FF]" /> Core AI Systems & MVPs
            </h2>
            <span className="text-xs font-mono text-zinc-300">
              Showing {filteredCoreProjects.length} Core Projects
            </span>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredCoreProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <ProjectCard project={project} onSelect={setSelectedProject} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* ── VERIFIED LIVE PRODUCTION WEBSITES ── */}
      {(filter === 'all' || filter === 'live') && (
        <div className="space-y-6 pt-4">
          <div className="p-7 md:p-10 rounded-2xl bg-[#0B0F28]/80 border border-white/15 space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#050816] text-[#22D3EE] border border-[#0894FF]/30">
                  <Globe className="w-3.5 h-3.5 text-[#0894FF]" />
                  <span>LIVE PRODUCTION DEPLOYMENTS</span>
                </div>
                <h2 className="heading-section font-gageda text-2xl md:text-3xl font-bold text-white tracking-tight mt-2">
                  Live Deployed Client Applications
                </h2>
                <p className="text-xs text-zinc-300 mt-1">
                  Direct external links to live production websites built and deployed by Sanjay.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveProjectsList.map((live) => (
                <a
                  key={live.id}
                  href={live.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl bg-[#050816] border border-white/12 hover:border-[#0894FF]/50 hover:shadow-[0_12px_30px_rgba(8,148,255,0.25)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-lg"
                >
                  {/* 16:9 Live Website Preview Image Container */}
                  <div className="relative w-full aspect-video overflow-hidden bg-black border-b border-white/10">
                    <img
                      src={live.homepageImage || live.image}
                      alt={live.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                    {/* Status Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#22D3EE] border border-[#0894FF]/40 flex items-center gap-1.5 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0894FF] animate-ping" />
                        {live.status}
                      </span>
                    </div>

                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 bg-[#050816]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none z-20">
                      <span className="font-gageda px-4 py-2 rounded-lg bg-gradient-to-r from-[#0894FF] to-[#C959DD] text-white font-bold text-xs shadow-md flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ExternalLink className="w-4 h-4 text-white" />
                        <span>View Live Project ↗</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-gageda text-lg font-bold text-white group-hover:text-[#0894FF] transition-colors tracking-tight">
                          {live.title}
                        </h3>
                        <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#0894FF] transition-colors flex-shrink-0" />
                      </div>

                      <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
                        {live.description}
                      </p>
                    </div>

                    {/* Technology Badges Layout */}
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block mb-1.5">
                        TECH STACK:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {live.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono px-2.5 py-0.5 bg-[#0B0F28] text-zinc-200 rounded-md border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="px-6 py-3.5 bg-[#0B0F28] border-t border-white/10 flex items-center justify-between">
                    <span className="font-gageda text-xs font-semibold text-zinc-300 group-hover:underline flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#0894FF]" />
                      Live Website Preview
                    </span>
                    <span className="font-gageda px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white font-bold text-xs shadow-sm flex items-center gap-1 uppercase tracking-wider">
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3 text-white" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── INTERACTIVE PROJECT DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050816]/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B0F28] border border-[#0894FF]/40 p-6 md:p-8 shadow-[0_0_40px_rgba(8,148,255,0.3)] space-y-6 text-white"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-[#050816] hover:bg-white/10 text-zinc-300 hover:text-white transition-colors z-20 border border-white/12"
                aria-label="Close Project Details Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Home Page Preview at top of details page */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/12">
                <img
                  src={selectedProject.homepageImage || selectedProject.image}
                  alt={selectedProject.imageAlt || `${selectedProject.title} Home Page Preview`}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#050816] text-[#22D3EE] border border-[#0894FF]/40">
                  {selectedProject.badgeText || selectedProject.category}
                </span>
                <h2 className="font-gageda text-2xl font-bold text-white tracking-tight mt-2">
                  {selectedProject.title}
                </h2>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.fullDescription || selectedProject.description}
              </p>

              {/* Key Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="space-y-2 bg-[#050816] p-4 rounded-xl border border-white/10">
                  <h4 className="text-xs font-mono font-bold text-[#0894FF] uppercase tracking-wider">
                    Key Features & Engineering Highlights:
                  </h4>
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#0894FF] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies */}
              <div className="pt-2 space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#C959DD] uppercase tracking-wider">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 bg-[#050816] text-zinc-200 rounded-md border border-white/12 flex items-center gap-1.5"
                    >
                      <Code2 className="w-3.5 h-3.5 text-[#C959DD]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="font-gageda px-5 py-2.5 rounded-lg bg-[#050816] text-zinc-300 hover:text-white font-semibold text-xs border border-white/12 uppercase tracking-wider"
                >
                  Close Modal
                </button>

                <div className="flex items-center gap-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-gageda px-4 py-2.5 rounded-lg bg-[#050816] hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-2 border border-white/20 uppercase tracking-wider"
                    >
                      <Github className="w-4 h-4 text-white" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-gageda px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white text-xs font-bold flex items-center gap-2 shadow-md hover:shadow-[0_0_15px_rgba(8,148,255,0.4)] uppercase tracking-wider"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
