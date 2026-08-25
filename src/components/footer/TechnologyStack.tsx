import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { technologies } from '@/data/technologies';
import type { TechnologyItem } from '@/data/technologies';
import { Sparkles, Layers } from 'lucide-react';

interface TechnologyStackProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function TechnologyStack({
  title = 'TECHNOLOGY STACK',
  subtitle = 'Core Frameworks, Cloud Infrastructure & Modern Tooling',
  className = '',
}: TechnologyStackProps) {
  // Track currently active / hovered technology ID
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTech: TechnologyItem | undefined = technologies.find(
    (t) => t.id === activeId
  );

  const handleTouch = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      aria-label="Technology Stack Showcase"
      className={`w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-2 sm:px-4 ${className}`}
      ref={containerRef}
    >
      {/* Section Header */}
      <div className="space-y-2 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-300">
          <Sparkles className="w-3 h-3 text-[#0894FF] animate-pulse" />
          <span className="tracking-wider uppercase">// TECH ECOSYSTEM</span>
        </div>

        <h3 className="font-gageda text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase flex items-center justify-center gap-2">
          <span>{title}</span>
        </h3>

        {subtitle && (
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1. LAPTOP & DESKTOP: ORIGINAL SINGLE HORIZONTAL OVERLAPPING ROW (md+)      */}
      {/* ========================================================================= */}
      <div
        className="hidden md:flex flex-col items-center justify-center w-full"
        role="group"
        aria-label="Desktop Technology Stack Icons"
      >
        <div className="relative w-full flex items-center justify-center py-4 px-2">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 max-w-2xl mx-auto rounded-full bg-gradient-to-r from-[#0894FF]/10 via-[#C959DD]/10 to-[#FF2E54]/10 blur-3xl pointer-events-none -z-10" />

          {/* Horizontal Single Overlapping Row */}
          <div className="flex flex-nowrap items-center justify-center -space-x-4 lg:-space-x-5 py-3 max-w-full">
            {technologies.map((tech, index) => {
              const isActive = activeId === tech.id;
              const isAnyActive = activeId !== null;
              const isDimmed = isAnyActive && !isActive;

              return (
                <div
                  key={`desktop-${tech.id}`}
                  className="relative transition-all duration-300 ease-out"
                  style={{
                    zIndex: isActive ? 40 : 10 + index,
                  }}
                >
                  {/* Floating Tooltip Label (Above Icon on Hover/Focus) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key={`tooltip-desktop-${tech.id}`}
                        initial={{ opacity: 0, y: 8, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.92 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute -top-11 left-1/2 -translate-x-1/2 pointer-events-none z-50 whitespace-nowrap"
                      >
                        <div className="px-3 py-1 rounded-full bg-[#0B0F28]/95 border border-white/20 shadow-2xl backdrop-blur-md flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full animate-ping"
                            style={{ backgroundColor: tech.brandColor }}
                          />
                          <span className="font-gageda text-xs font-bold text-white tracking-wide">
                            {tech.name}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Circular Technology Mask Button */}
                  <motion.button
                    type="button"
                    onMouseEnter={() => setActiveId(tech.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onFocus={() => setActiveId(tech.id)}
                    onBlur={() => setActiveId(null)}
                    aria-label={`${tech.name} - ${tech.tagline}`}
                    className={`
                      relative rounded-full flex items-center justify-center cursor-pointer
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                      w-14 h-14 lg:w-16 lg:h-16
                      transition-colors duration-200
                      ${
                        isActive
                          ? 'border-2 border-white ring-2 ring-white/30'
                          : 'border-2 border-white/20 hover:border-white/50'
                      }
                    `}
                    style={{
                      backgroundColor: '#0B0F28',
                    }}
                    animate={{
                      y: isActive ? -8 : 0,
                      scale: isActive ? 1.08 : 1,
                      opacity: isDimmed ? 0.45 : 1,
                      boxShadow: isActive
                        ? `0 0 28px ${tech.brandColor}66, inset 0 0 14px ${tech.brandColor}33, 0 12px 24px -6px rgba(0,0,0,0.8)`
                        : `0 4px 14px rgba(0,0,0,0.5), inset 0 0 8px rgba(255,255,255,0.05)`,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    {/* Inner Gradient Border */}
                    <div
                      className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"
                      style={{
                        borderColor: isActive ? `${tech.brandColor}80` : 'rgba(255,255,255,0.15)',
                      }}
                    />

                    {/* Icon Container */}
                    <motion.div
                      className="relative flex items-center justify-center text-white"
                      animate={{
                        scale: isActive ? 1.12 : 1,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                        {tech.icon}
                      </div>
                    </motion.div>
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Desktop Inspector Bar */}
        <div className="min-h-[44px] flex items-center justify-center mt-1">
          <AnimatePresence mode="wait">
            {activeTech ? (
              <motion.div
                key={`inspector-${activeTech.id}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 px-4 py-1.5 rounded-xl bg-zinc-900/80 border border-white/10 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full shadow-sm"
                    style={{
                      backgroundColor: activeTech.brandColor,
                      boxShadow: `0 0 10px ${activeTech.brandColor}`,
                    }}
                  />
                  <span className="font-gageda text-sm font-extrabold text-white tracking-wide">
                    {activeTech.name}
                  </span>
                </div>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-400 font-mono">
                  {activeTech.tagline}
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="desktop-prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 text-xs font-mono text-zinc-500 py-1"
              >
                <Layers className="w-3.5 h-3.5 text-zinc-500" />
                <span>Hover any technology icon to inspect</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE ONLY: STRUCTURED 3-ROW x 3-COLUMN GRID (< 768px)               */}
      {/* ========================================================================= */}
      <div
        className="grid md:hidden w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm mx-auto px-1"
        role="group"
        aria-label="Mobile 3 by 3 Technology Grid"
      >
        <div className="grid grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-4 sm:gap-y-6 items-center justify-items-center w-full">
          {technologies.map((tech) => {
            const isActive = activeId === tech.id;
            const isAnyActive = activeId !== null;
            const isDimmed = isAnyActive && !isActive;

            return (
              <div
                key={`mobile-${tech.id}`}
                className="flex flex-col items-center justify-center w-full group select-none"
              >
                {/* Circular Masked Button */}
                <motion.button
                  type="button"
                  onClick={() => handleTouch(tech.id)}
                  onFocus={() => setActiveId(tech.id)}
                  onBlur={() => setActiveId(null)}
                  onTouchStart={() => handleTouch(tech.id)}
                  aria-label={tech.name}
                  aria-pressed={isActive}
                  title={tech.name}
                  className={`
                    relative rounded-full flex items-center justify-center cursor-pointer
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80
                    w-11 h-11 min-w-[40px] min-h-[40px] sm:w-13 sm:h-13
                    transition-colors duration-200
                    ${
                      isActive
                        ? 'border border-white/60 ring-2 ring-white/20'
                        : 'border border-white/15 hover:border-white/40'
                    }
                  `}
                  style={{
                    backgroundColor: '#0B0F28',
                  }}
                  animate={{
                    y: isActive ? -5 : 0,
                    scale: isActive ? 1.06 : 1,
                    opacity: isDimmed ? 0.5 : 1,
                    boxShadow: isActive
                      ? `0 0 22px ${tech.brandColor}55, inset 0 0 10px ${tech.brandColor}30, 0 8px 16px -4px rgba(0,0,0,0.7)`
                      : `0 4px 10px rgba(0,0,0,0.4), inset 0 0 6px rgba(255,255,255,0.04)`,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  {/* Inner Border Overlay */}
                  <div
                    className="absolute inset-0 rounded-full border pointer-events-none transition-colors duration-200"
                    style={{
                      borderColor: isActive ? `${tech.brandColor}80` : 'rgba(255,255,255,0.1)',
                    }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative flex items-center justify-center text-white"
                    animate={{
                      scale: isActive ? 1.1 : 1,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                    }}
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                      {tech.icon}
                    </div>
                  </motion.div>
                </motion.button>

                {/* Technology Name Label */}
                <motion.div
                  className="mt-1.5 text-center w-full max-w-[80px] sm:max-w-[100px] px-0.5"
                  animate={{
                    y: isActive ? -2 : 0,
                    opacity: isDimmed ? 0.45 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <span
                    className={`
                      block font-gageda font-bold truncate leading-tight transition-all duration-200
                      text-[10px] sm:text-xs
                      ${
                        isActive
                          ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                          : 'text-zinc-400'
                      }
                    `}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
