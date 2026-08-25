import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2,
  Cloud,
  Download,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Layers,
  Activity,
  Award,
  Terminal,
} from 'lucide-react';
import { personalInfo, coreProjects, liveProjectsList, resumeDownloadPath, resumeFilename } from '@/data';
import TypingKeyboard from '@/components/ui/TypingKeyboard';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16 pt-20 sm:pt-24 md:pt-28 text-white overflow-x-clip">
      {/* ── HERO SECTION (CENTERED WORKSTATION & COLORFUL AMBIENT GLOW) ── */}
      <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Responsive Futuristic Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:2.5rem_2.5rem] md:bg-[size:3.5rem_3.5rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-50 md:opacity-60 lg:opacity-75" />
        
        {/* Ambient Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[220px] sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[350px] lg:w-[600px] lg:h-[400px] bg-gradient-to-r from-[#0894FF]/20 via-[#C959DD]/20 to-[#FF2E54]/15 rounded-full blur-[70px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] pointer-events-none -z-10" />

        <div className="container-custom relative z-10 space-y-6 sm:space-y-8 md:space-y-10 text-center max-w-5xl mx-auto px-3 sm:px-6">
          {/* 1. INTRODUCTION HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3 sm:space-y-4 flex flex-col items-center"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#0B0F28]/90 border border-[#0894FF]/40 text-[#22D3EE] text-[11px] sm:text-xs font-mono font-bold shadow-[0_0_15px_rgba(8,148,255,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#0894FF] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#C959DD]" />
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Title (Gageda Font) */}
            <h1 className="heading-hero font-gageda font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Subtitle / Role */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base md:text-xl font-mono font-bold text-zinc-200">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-[#0894FF] flex-shrink-0" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] tracking-tight sm:tracking-normal">
                FULL STACK DEVELOPER · DEVOPS · DIGITAL MARKETING
              </span>
            </div>

            {/* Short Bio */}
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed max-w-2xl mx-auto px-2">
              {personalInfo.shortBio}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
              {['React.js', 'Next.js', 'AWS EC2', 'Docker', 'Linux', 'Tailwind CSS', 'FastAPI', 'SEO'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md bg-[#0B0F28] border border-white/12 text-[11px] sm:text-xs font-mono font-medium text-zinc-200 hover:border-[#0894FF]/40 transition-colors shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 2. CENTERED 3D WORKSTATION WITH COLORFUL GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center items-center py-1 sm:py-2"
            aria-label="Centered 3D Workstation Interactive Typing Animation"
          >
            {/* Glowing Backdrop Blob */}
            <div className="absolute inset-0 max-w-2xl mx-auto rounded-3xl bg-gradient-to-r from-[#0894FF]/25 via-[#C959DD]/25 to-[#FF2E54]/20 blur-3xl opacity-70 pointer-events-none" />

            <div className="relative z-10 w-full max-w-3xl">
              <TypingKeyboard
                autoTypeText="Sanjay Muhilarasu | Full Stack Developer & DevOps Engineer | React • Next.js • FastAPI • Docker • AWS EC2       "
                accentColor="#0894FF"
                secondaryAccent="#C959DD"
              />
            </div>
          </motion.div>

          {/* 3. CENTERED HERO CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link
              to="/projects"
              className="font-gageda w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg text-white bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] hover:shadow-[0_0_25px_rgba(8,148,255,0.5)] transition-all font-bold text-xs sm:text-sm flex items-center justify-center gap-2 uppercase tracking-wider active:scale-95"
            >
              <Code2 className="w-4 h-4 text-white" />
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <a
              href={resumeDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              download={resumeFilename}
              className="font-gageda w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#0B0F28] border border-[#C959DD]/40 hover:border-[#FF2E54] text-white font-bold text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(201,89,221,0.3)] transition-all flex items-center justify-center gap-2 uppercase tracking-wider active:scale-95"
            >
              <Download className="w-4 h-4 text-[#C959DD]" />
              <span>Download Resume</span>
            </a>

            <Link
              to="/contact"
              className="font-gageda w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#0B0F28] border border-white/20 hover:border-[#0894FF] text-zinc-200 hover:text-white font-bold text-xs sm:text-sm transition-all text-center uppercase tracking-wider active:scale-95"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="container-custom">
        <div className="gradient-divider" />
      </div>

      {/* ── KEY METRICS / COLORFUL IT HIGHLIGHTS ── */}
      <section className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <div className="p-3.5 sm:p-5 md:p-6 rounded-xl bg-[#0B0F28]/80 border border-[#0894FF]/30 hover:border-[#0894FF] shadow-lg shadow-black/40 hover:shadow-[0_10px_25px_rgba(8,148,255,0.2)] transition-all space-y-1 group">
            <div className="flex items-center justify-between text-zinc-400 mb-1.5 sm:mb-2">
              <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-[#0894FF] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#0894FF]">AWS</span>
            </div>
            <div className="font-gageda text-lg sm:text-2xl md:text-3xl font-extrabold text-white truncate">AWS EC2</div>
            <div className="text-[11px] sm:text-xs text-zinc-300 leading-tight">Cloud Deployment & Linux</div>
          </div>

          <div className="p-3.5 sm:p-5 md:p-6 rounded-xl bg-[#0B0F28]/80 border border-[#C959DD]/30 hover:border-[#C959DD] shadow-lg shadow-black/40 hover:shadow-[0_10px_25px_rgba(201,89,221,0.2)] transition-all space-y-1 group">
            <div className="flex items-center justify-between text-zinc-400 mb-1.5 sm:mb-2">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-[#C959DD] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#C959DD]">FRONTEND</span>
            </div>
            <div className="font-gageda text-lg sm:text-2xl md:text-3xl font-extrabold text-white truncate">React / Next</div>
            <div className="text-[11px] sm:text-xs text-zinc-300 leading-tight">Modern Scalable Web Apps</div>
          </div>

          <div className="p-3.5 sm:p-5 md:p-6 rounded-xl bg-[#0B0F28]/80 border border-[#FF2E54]/30 hover:border-[#FF2E54] shadow-lg shadow-black/40 hover:shadow-[0_10px_25px_rgba(255,46,84,0.2)] transition-all space-y-1 group">
            <div className="flex items-center justify-between text-zinc-400 mb-1.5 sm:mb-2">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF2E54] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#FF2E54]">LIVE APPS</span>
            </div>
            <div className="font-gageda text-lg sm:text-2xl md:text-3xl font-extrabold text-white truncate">6 Deployed</div>
            <div className="text-[11px] sm:text-xs text-zinc-300 leading-tight">Active Production Sites</div>
          </div>

          <div className="p-3.5 sm:p-5 md:p-6 rounded-xl bg-[#0B0F28]/80 border border-[#FF9004]/30 hover:border-[#FF9004] shadow-lg shadow-black/40 hover:shadow-[0_10px_25px_rgba(255,144,4,0.2)] transition-all space-y-1 group">
            <div className="flex items-center justify-between text-zinc-400 mb-1.5 sm:mb-2">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF9004] group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#FF9004]">GROWTH</span>
            </div>
            <div className="font-gageda text-lg sm:text-2xl md:text-3xl font-extrabold text-white truncate">SEO & PPC</div>
            <div className="text-[11px] sm:text-xs text-zinc-300 leading-tight">Digital Marketing Strategy</div>
          </div>
        </div>
      </section>

      {/* ── FEATURED CORE ENGINEERING PROJECTS ── */}
      <section className="container-custom space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0B0F28] text-[#22D3EE] border border-[#0894FF]/30 mb-2">
              <Code2 className="w-3.5 h-3.5 text-[#0894FF]" />
              <span>PROJECT SHOWCASE</span>
            </div>
            <h2 className="heading-section font-gageda font-extrabold text-white tracking-tight">
              Featured Core <span className="gradient-text">Engineering Projects</span>
            </h2>
          </div>

          <Link
            to="/projects"
            className="font-gageda inline-flex items-center gap-2 text-xs font-bold text-[#0894FF] hover:text-[#C959DD] uppercase tracking-wider transition-colors"
          >
            <span>VIEW ALL PROJECTS & LIVE DEMOS ({coreProjects.length + liveProjectsList.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* SECTION DIVIDER */}
      <div className="container-custom">
        <div className="gradient-divider" />
      </div>

      {/* ── SELECTED LIVE DEPLOYED APPS SHOWCASE ── */}
      <section className="container-custom space-y-6 sm:space-y-8">
        <div className="p-4 sm:p-8 md:p-10 rounded-2xl bg-[#0B0F28]/80 border border-white/15 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#0894FF]/10 text-[#0894FF] border border-[#0894FF]/30">
                LIVE PRODUCTION SITES
              </span>
              <h3 className="heading-card font-gageda font-bold text-white tracking-tight mt-2">
                Selected Deployed <span className="gradient-text">Live Web Applications</span>
              </h3>
              <p className="text-xs text-zinc-300 mt-1">
                Real web platforms built, deployed, and live on production cloud hosts.
              </p>
            </div>

            <Link
              to="/projects"
              className="font-gageda px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white font-bold text-xs hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] transition-all flex items-center gap-1.5 w-max uppercase tracking-wider"
            >
              <span>Explore Live Demos</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {liveProjectsList.map((live) => (
              <a
                key={live.id}
                href={live.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 sm:p-4 rounded-xl bg-[#050816] border border-white/10 hover:border-[#0894FF]/50 hover:shadow-[0_10px_25px_rgba(8,148,255,0.2)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black border border-white/10 mb-3">
                    <img
                      src={live.homepageImage || live.image}
                      alt={live.imageAlt || `${live.title} Live Preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-gageda font-bold text-white text-sm group-hover:text-[#0894FF] transition-colors truncate">
                      {live.title}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                    {live.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {live.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-300 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono font-bold text-[#0894FF] group-hover:text-white transition-colors">
                  <span>Visit Live App</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="container-custom">
        <div className="relative rounded-2xl p-6 sm:p-8 md:p-12 overflow-hidden text-center bg-gradient-to-r from-[#0894FF]/15 via-[#C959DD]/15 to-[#FF2E54]/10 border border-white/15 shadow-2xl space-y-4 sm:space-y-6">
          <h2 className="heading-hero font-gageda font-black text-white">
            Ready to Build Scalable <br />
            <span className="gradient-text">High-Performance Solutions?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-xl mx-auto">
            Available for full-stack engineering roles, cloud DevOps infrastructure deployment on AWS EC2, and digital growth initiatives.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <Link
              to="/contact"
              className="font-gageda w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(8,148,255,0.4)] hover:scale-105 active:scale-95 transition-all uppercase tracking-wider"
            >
              Get In Touch
            </Link>
            <a
              href={resumeDownloadPath}
              download={resumeFilename}
              className="font-gageda w-full sm:w-auto px-6 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#0B0F28] hover:bg-white/10 text-white font-bold text-xs sm:text-sm border border-white/15 transition-colors uppercase tracking-wider"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
