import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  GraduationCap,
  Mail,
  Download,
  Menu,
  X,
  Github,
  Linkedin,
  ChevronRight,
  Terminal,
  Layers,
} from 'lucide-react';
import { personalInfo, socialLinks, resumeDownloadPath, resumeFilename } from '@/data';

export const navRoutes = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: User },
  { path: '/full-stack', label: 'Full Stack', icon: Layers },
  { path: '/experience', label: 'Experience', icon: Briefcase },
  { path: '/skills', label: 'Skills', icon: Code2 },
  { path: '/projects', label: 'Projects', icon: FolderGit2 },
  { path: '/education', label: 'Education', icon: GraduationCap },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2 md:py-3'
          : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 md:h-16">
        {/* ── LEFT: 3D Avatar Brand Logo with Colorful Glow ── */}
        <NavLink
          to="/"
          className="group flex items-center gap-3 relative z-50 focus:outline-none rounded-xl p-1"
          aria-label="Sanjay Muhilarasu Home"
        >
          <div className="relative [perspective:1000px]">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center p-[1.5px] transition-transform duration-500 group-hover:[transform:rotateY(15deg)_rotateX(10deg)] bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] shadow-[0_0_15px_rgba(8,148,255,0.4)]">
              {/* Inner Avatar Image Container */}
              <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-[#050816] shadow-inner z-10">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_12%] scale-110 group-hover:scale-125 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Glowing Online Indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#0894FF] border-2 border-[#050816] rounded-full z-20 shadow-md">
              <span className="absolute inset-0 rounded-full bg-[#22D3EE] animate-ping opacity-75" />
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-gageda font-extrabold text-base md:text-lg tracking-tight text-white group-hover:text-[#0894FF] transition-colors">
                {personalInfo.name}
              </span>
              <Terminal className="w-3.5 h-3.5 text-[#C959DD] hidden sm:inline-block" />
            </div>
            <span className="text-[10px] font-mono font-bold tracking-wider gradient-text uppercase">
              FULL STACK · DEVOPS · AI
            </span>
          </div>
        </NavLink>

        {/* ── CENTER: Desktop Navigation Links ── */}
        <nav
          aria-label="Main Navigation"
          className="hidden xl:flex items-center gap-1 bg-[#0B0F28]/80 backdrop-blur-md border border-white/10 p-1.5 rounded-full shadow-lg"
        >
          {navRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  `font-gageda px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 uppercase tracking-wider ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white shadow-[0_0_15px_rgba(8,148,255,0.4)]'
                      : 'text-zinc-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{route.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* ── RIGHT: Social Links & Resume Download (Desktop) ── */}
        <div className="hidden md:flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 bg-[#0B0F28]/80 border border-white/10 px-2.5 py-1 rounded-full">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                title={social.name}
                aria-label={social.name}
              >
                {social.iconName === 'Github' && <Github className="w-3.5 h-3.5 text-white" />}
                {social.iconName === 'Linkedin' && <Linkedin className="w-3.5 h-3.5 text-[#0894FF]" />}
                {social.iconName === 'Mail' && <Mail className="w-3.5 h-3.5 text-[#FF9004]" />}
              </a>
            ))}
          </div>

          <a
            href={resumeDownloadPath}
            download={resumeFilename}
            className="font-gageda px-4 py-2 rounded-full bg-[#0B0F28] hover:bg-white/10 border border-[#0894FF]/50 hover:border-[#0894FF] text-white font-bold text-xs transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_12px_rgba(8,148,255,0.25)] hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] uppercase tracking-wider"
          >
            <Download className="w-3.5 h-3.5 text-[#0894FF]" />
            <span>Resume</span>
          </a>
        </div>

        {/* ── MOBILE MENU BUTTON ── */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={resumeDownloadPath}
            download={resumeFilename}
            className="font-gageda px-3 py-1.5 rounded-full bg-[#0B0F28] border border-[#0894FF]/50 text-white text-xs font-bold flex items-center gap-1 sm:hidden uppercase tracking-wider"
          >
            <Download className="w-3 h-3 text-[#0894FF]" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0B0F28] border border-white/10 text-white hover:bg-white/10 focus:outline-none transition-colors"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── FULL MOBILE NAVIGATION DRAWER ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="xl:hidden bg-[#050816]/98 border-b border-white/15 backdrop-blur-2xl overflow-hidden"
          >
            <div className="container-custom py-5 space-y-4">
              <nav className="grid grid-cols-2 gap-2">
                {navRoutes.map((route) => {
                  const Icon = route.icon;
                  return (
                    <NavLink
                      key={route.path}
                      to={route.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `font-gageda px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between uppercase tracking-wider transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white shadow-md'
                            : 'bg-[#0B0F28] text-zinc-300 hover:text-white border border-white/10'
                        }`
                      }
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span>{route.label}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </NavLink>
                  );
                })}
              </nav>

              {/* Mobile Drawer Bottom Socials & Download */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#0B0F28] border border-white/10 text-zinc-300 hover:text-white"
                      title={social.name}
                      aria-label={social.name}
                    >
                      {social.iconName === 'Github' && <Github className="w-4 h-4 text-white" />}
                      {social.iconName === 'Linkedin' && <Linkedin className="w-4 h-4 text-[#0894FF]" />}
                      {social.iconName === 'Mail' && <Mail className="w-4 h-4 text-[#FF9004]" />}
                    </a>
                  ))}
                </div>

                <a
                  href={resumeDownloadPath}
                  download={resumeFilename}
                  className="font-gageda px-4 py-2 rounded-lg bg-white text-black font-bold text-xs flex items-center gap-1.5 shadow-md uppercase tracking-wider"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
