import { NavLink } from 'react-router-dom';
import { Terminal, Github, Linkedin, Mail, Download, ArrowUp, Cpu, ShieldCheck } from 'lucide-react';
import { personalInfo, socialLinks, resumeDownloadPath, resumeFilename } from '@/data';
import { navRoutes } from './Navbar';
import TechnologyStack from './footer/TechnologyStack';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] text-zinc-400 border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#0894FF]/5 via-[#C959DD]/5 to-transparent blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-16 pb-12">
        {/* ========================================================================= */}
        {/* 1. Interactive Technology Stack Showcase (Centered Top Section)          */}
        {/* ========================================================================= */}
        <div className="mb-14">
          <TechnologyStack
            title="TECHNOLOGY STACK"
            subtitle="Core Frameworks, Cloud Infrastructure & Modern Tooling"
          />
        </div>

        {/* Separator Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent my-10" />

        {/* ========================================================================= */}
        {/* 2. Main Footer Navigation Grid                                           */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand & Identity Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-bold text-sm shadow-md">
                <Terminal className="w-4 h-4 text-[#0894FF]" />
              </div>
              <span className="font-gageda font-extrabold text-lg tracking-tight text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              {personalInfo.title}
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-300 bg-zinc-900/90 border border-white/10 px-3 py-1.5 rounded-lg w-max shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Available for Full-time & DevOps Roles</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3 md:pl-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
              <span className="text-[#0894FF]">//</span> Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {navRoutes.map((route) => (
                <li key={route.path}>
                  <NavLink
                    to={route.path}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group py-0.5"
                  >
                    <span className="text-zinc-600 group-hover:text-[#0894FF] transition-colors">›</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">{route.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Resume Column */}
          <div className="space-y-4 md:pl-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
              <span className="text-[#C959DD]">//</span> Connect & Resume
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all shadow-sm group"
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.iconName === 'Github' && <Github className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />}
                  {social.iconName === 'Linkedin' && <Linkedin className="w-4 h-4 text-[#0894FF] group-hover:scale-110 transition-transform" />}
                  {social.iconName === 'Mail' && <Mail className="w-4 h-4 text-[#FF9004] group-hover:scale-110 transition-transform" />}
                </a>
              ))}
            </div>

            <a
              href={resumeDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              download={resumeFilename}
              className="font-gageda inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg text-black bg-white hover:bg-zinc-200 transition-all shadow-md uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5 text-black" />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. Bottom Bar & Scroll-To-Top                                            */}
        {/* ========================================================================= */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1.5 text-zinc-500">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </p>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500 font-mono text-[11px] flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5 text-[#0894FF]" /> Built with React, Vite & Tailwind
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-800 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
