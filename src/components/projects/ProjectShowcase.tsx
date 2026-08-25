import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectItem } from '@/data';
import { DesktopDevice } from './DesktopDevice';
import { MobileDevice } from './MobileDevice';
import { ProjectInfo } from './ProjectInfo';
import { ProjectNavigation } from './ProjectNavigation';

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  initialIndex?: number;
  className?: string;
}

export function ProjectShowcase({
  projects = [],
  initialIndex = 0,
  className = '',
}: ProjectShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [rotate, setRotate] = useState({ x: 4, y: -6 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeProject = projects[currentIndex] || projects[0];

  // Interactive 3D Cursor Tilt Logic
  const handleMouseMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate cursor position from center (-1 to 1)
    const mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
    const mouseY = (e.clientY - rect.top - height / 2) / (height / 2);

    // Limit maximum tilt angle
    const maxRotateY = 14;
    const maxRotateX = 10;

    setRotate({
      x: -mouseY * maxRotateX,
      y: mouseX * maxRotateY,
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Reset to subtle initial resting 3D angle
    setRotate({ x: 4, y: -6 });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  if (!activeProject) return null;

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Navigation & Carousel Header Bar */}
      <ProjectNavigation
        projects={projects}
        currentIndex={currentIndex}
        onSelectProject={setCurrentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Main 3D Device Showcase Container */}
      <div
        ref={containerRef}
        onPointerMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-2xl bg-[#0B0F28]/90 border border-white/15 p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden"
      >
        {/* Colorful Ambient Technology Glows around the devices */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#0894FF]/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-[#C959DD]/20 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#FF2E54]/15 rounded-full blur-[90px] pointer-events-none" />

        {/* Subtle grid background motif */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
          >
            {/* ── LEFT/TOP COLUMN: 3D DEVICES COMPOSITION (Desktop + Mobile Mockups) ── */}
            <div className="lg:col-span-7 relative flex items-center justify-center p-2 sm:p-4 min-h-[320px] sm:min-h-[420px] lg:min-h-[460px]">
              {/* Primary Desktop Device Mockup */}
              <div className="w-full max-w-[560px] mx-auto">
                <DesktopDevice
                  image={activeProject.homepageImage || activeProject.image}
                  title={activeProject.title}
                  url={activeProject.liveUrl}
                  rotateX={rotate.x}
                  rotateY={rotate.y}
                  isHovered={isHovered}
                />
              </div>

              {/* Secondary Overlapping Mobile Smartphone Mockup */}
              <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-6 md:right-10 w-[30%] max-w-[170px] min-w-[110px]">
                <MobileDevice
                  image={activeProject.mobileHomepageImage || activeProject.mobileImage || activeProject.homepageImage || activeProject.image}
                  title={activeProject.title}
                  url={activeProject.liveUrl}
                  rotateX={rotate.x * 0.8}
                  rotateY={rotate.y * 1.2}
                  isHovered={isHovered}
                />
              </div>
            </div>

            {/* ── RIGHT/BOTTOM COLUMN: PROJECT INFORMATION & STACK ── */}
            <div className="lg:col-span-5">
              <ProjectInfo project={activeProject} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProjectShowcase;
