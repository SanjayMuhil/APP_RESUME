import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useActiveSection } from '@/hooks/useScrollAnimation';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'dm-resume', label: '📣 DM Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/85 dark:bg-gray-900/85 backdrop-blur-xl shadow-xl border-b border-gray-200/50 dark:border-gray-800/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* 3D Animated Avatar Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center gap-3 group relative perspective-1000"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {/* 3D Outer Glow & Rotation Box */}
              <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center p-[2px] transition-transform duration-500 group-hover:[transform:rotateY(15deg)_rotateX(10deg)]">
                {/* 3D Animated Gradient Border */}
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-400 opacity-90 blur-[2px] group-hover:blur-[6px] group-hover:opacity-100 transition-all duration-300 animate-pulse" />
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600 via-purple-600 to-emerald-500 opacity-100" />
                
                {/* Inner 3D Image Frame */}
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-gray-900 shadow-inner z-10 border border-white/20">
                  <img
                    src="/profile.jpg"
                    alt="Sanjay Logo"
                    className="w-full h-full object-cover object-[center_12%] scale-110 group-hover:scale-125 transition-transform duration-500"
                  />
                  {/* Glossy Overlay Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Brand Name & 3D Status Indicator */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base md:text-lg tracking-tight gradient-text">
                    Sanjay
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping hidden sm:block" />
                </div>
                <span className="text-[10px] uppercase font-semibold text-gray-500 dark:text-gray-400 tracking-wider -mt-1 hidden sm:block">
                  DevOps · Dev
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="mx-4 mt-2 p-4 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 text-left font-medium rounded-xl transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
