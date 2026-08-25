import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Github, Mail, Download } from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';
import { personalInfo, socialLinks } from '@/data/portfolio';

// AI Neural Network 3D Particle Background
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let mouse = { x: -9999, y: -9999 };

    type Particle = {
      x: number; y: number; z: number;
      vx: number; vy: number; vz: number;
      baseX: number; baseY: number;
      size: number; opacity: number;
      hue: number; pulse: number; pulseSpeed: number;
    };

    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 14000));
      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x, y, z: Math.random(),
          baseX: x, baseY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.005,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          hue: Math.random() < 0.5 ? 217 : (Math.random() < 0.5 ? 263 : 160),
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
        });
      }
    };

    const PROJECT_FACTOR = 600;

    const project = (x: number, y: number, z: number) => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const scale = PROJECT_FACTOR / (PROJECT_FACTOR + z * 200);
      return {
        sx: cx + (x - cx) * scale,
        sy: cy + (y - cy) * scale,
        scale,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.vx += (dx / dist) * force * 1.2;
          p.vy += (dy / dist) * force * 1.2;
        }

        // Drift back to base
        p.vx += (p.baseX - p.x) * 0.003;
        p.vy += (p.baseY - p.y) * 0.003;

        // Dampen
        p.vx *= 0.94;
        p.vy *= 0.94;

        p.x += p.vx;
        p.y += p.vy;
        p.z = Math.max(0, Math.min(1, p.z + p.vz));
        if (p.z <= 0 || p.z >= 1) p.vz *= -1;

        // Wrap
        if (p.x < 0) { p.x = canvas.width; p.baseX = p.x; }
        if (p.x > canvas.width) { p.x = 0; p.baseX = 0; }
        if (p.y < 0) { p.y = canvas.height; p.baseY = p.y; }
        if (p.y > canvas.height) { p.y = 0; p.baseY = 0; }

        p.pulse += p.pulseSpeed;

        const { sx, sy, scale } = project(p.x, p.y, p.z);
        const r = p.size * scale * (1 + 0.3 * Math.sin(p.pulse));
        const alpha = p.opacity * scale;

        // Outer glow
        const grd = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 5);
        grd.addColorStop(0, `hsla(${p.hue}, 90%, 65%, ${alpha * 0.8})`);
        grd.addColorStop(0.4, `hsla(${p.hue}, 90%, 65%, ${alpha * 0.3})`);
        grd.addColorStop(1, `hsla(${p.hue}, 90%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(sx, sy, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 75%, ${alpha})`;
        ctx.fill();
      });

      // Neural connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const { sx: ax, sy: ay } = project(a.x, a.y, a.z);
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const { sx: bx, sy: by } = project(b.x, b.y, b.z);
          const dx = ax - bx;
          const dy = ay - by;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const t = 1 - dist / 160;
            const hue = a.hue === b.hue ? a.hue : (a.hue + b.hue) / 2;
            const grad = ctx.createLinearGradient(ax, ay, bx, by);
            grad.addColorStop(0, `hsla(${a.hue}, 80%, 65%, ${t * 0.6})`);
            grad.addColorStop(1, `hsla(${b.hue}, 80%, 65%, ${t * 0.6})`);
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.strokeStyle = grad;
            ctx.lineWidth = t * 1.5 * ((a.z + b.z) / 2 + 0.3);
            ctx.stroke();
            // Pulse dot on connection midpoint
            if (Math.sin(a.pulse) > 0.7) {
              const mx = (ax + bx) / 2;
              const my = (ay + by) / 2;
              ctx.beginPath();
              ctx.arc(mx, my, 2, 0, Math.PI * 2);
              ctx.fillStyle = `hsla(${hue}, 100%, 80%, ${t * 0.9})`;
              ctx.fill();
            }
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => { resize(); createParticles(); });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}

export default function Hero() {
  const { displayText: nameText, isComplete: nameComplete } = useTypingEffect(
    personalInfo.name,
    80,
    500
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden particles-bg"
    >
      {/* Deep Space AI Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#0a0f2e] to-[#05091a]" />

      {/* Glowing Orbs – 3D depth layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Back orb – large, slow, bluish */}
        <motion.div
          animate={{ scale: [1, 1.25, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/3 -right-1/3 w-[80vw] h-[80vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(139,92,246,0.10) 50%, transparent 75%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Mid orb – purple */}
        <motion.div
          animate={{ scale: [1.15, 1, 1.15], rotate: [360, 180, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/3 -left-1/3 w-[70vw] h-[70vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(16,185,129,0.08) 55%, transparent 75%)',
            filter: 'blur(70px)',
          }}
        />
        {/* Foreground accent – teal/cyan flicker */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.015) 2px, rgba(6,182,212,0.015) 4px)',
            backgroundSize: '100% 4px',
          }}
        />
      </div>

      {/* Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left text-white"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Hello, I'm
            </motion.div>

            {/* Name with Typing Effect */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="gradient-text typing-cursor">{nameText}</span>
            </h1>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: nameComplete ? 1 : 0, y: nameComplete ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              {personalInfo.title}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: nameComplete ? 1 : 0, y: nameComplete ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              
              <motion.a
                href="/Sanjay.Muhilarasu_update.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Sanjay_Muhilarasu_Resume.pdf"
                className="px-8 py-4 rounded-xl border-2 border-white/20 hover:border-blue-500 bg-white/5 backdrop-blur-md text-white font-semibold flex items-center justify-center gap-2 hover:bg-blue-500/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: nameComplete ? 1 : 0, y: nameComplete ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all shadow-lg"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                  {link.icon === 'github' && <Github className="w-5 h-5" />}
                  {link.icon === 'mail' && <Mail className="w-5 h-5" />}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Animated 3D Cyberpunk Profile Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-75 blur-sm"
              />

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              >
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_15%]"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Digital Marketing</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">DevOps</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
