import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects, liveProjects } from '@/data/portfolio';
import { Folder, ExternalLink, ChevronRight, Globe, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('all');

  const filters = ['all', 'AI/ML', 'Mobile', 'Python', 'Live Deployed'];

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'Live Deployed'
    ? projects
    : projects.filter(p => 
        p.category?.toLowerCase() === filter.toLowerCase() ||
        p.technologies.some(t => t.toLowerCase().includes(filter.toLowerCase()))
      );

  return (
    <section
      id="projects"
      className="relative section-padding bg-[#050505] text-white overflow-hidden"
    >
      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-sm font-medium mb-4"
          >
            <Folder className="w-4 h-4 text-zinc-400" />
            Featured Projects &amp; Live Web Apps
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Creative</span> Works
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Showcasing key AI, full-stack, and mobile projects, along with real live web applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setFilter(f)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-white text-black shadow-md font-semibold'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Core Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col"
              >
                <div className="relative flex flex-col h-full overflow-hidden rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-black border-b border-white/10">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-zinc-200 border border-white/10 text-xs font-semibold">
                        {project.category || 'Engineering'}
                      </span>
                    </div>

                    {/* Tech Badges */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <motion.button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-1.5 text-zinc-300 hover:text-white font-medium text-sm"
                        whileHover={{ x: 3 }}
                      >
                        View Project Details
                        <ChevronRight className="w-4 h-4 text-zinc-400" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── SELECTED LIVE PROJECTS SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-xl bg-[#0A0A0A] border border-white/10 p-8 md:p-10 shadow-xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-zinc-300 border border-white/10 text-xs font-semibold mb-2">
                <Globe className="w-3.5 h-3.5 text-zinc-400" /> Live Web Deployments
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Selected <span className="gradient-text">Live Deployed Projects</span>
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                Explore my live client, personal, and production web applications online.
              </p>
            </div>
            <Sparkles className="w-8 h-8 text-zinc-400 opacity-60 hidden sm:block" />
          </div>

          {/* Grid of 6 Live Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveProjects.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-xl bg-black border border-white/10 p-6 flex flex-col justify-between shadow-sm hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 animate-pulse" />
                    <span className="text-xs font-mono text-zinc-400">Live Production</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-300 text-[11px] font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black font-bold text-xs shadow-sm hover:bg-zinc-200 transition-colors"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                  View Live Demo
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border-white/20 text-white">
          {selectedProject && (
            <>
              {/* Image */}
              <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg bg-black border-b border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-zinc-400">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Full Description */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    About this Project
                  </h4>
                  <p className="text-zinc-300 leading-relaxed text-sm">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-center gap-2 text-zinc-300 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
