import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { personalInfo } from '@/data/portfolio';
import { Code2, Palette, Lightbulb, Rocket, Download, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, efficient code',
  },
  {
    icon: Palette,
    title: 'Responsive Design',
    description: 'Pixel-perfect on all devices',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Finding creative solutions',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Adapting to new technologies',
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      className="relative section-padding bg-[#050505] text-white overflow-hidden"
    >
      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4 text-zinc-400" />
            About Me
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let Me <span className="gradient-text">Introduce</span> Myself
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Main Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl bg-[#0A0A0A] border border-white/10 p-8 md:p-10 shadow-lg">
              <div className="relative">
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
                  {personalInfo.summary}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {['React.js', 'Tailwind CSS', 'Devops', 'AWS', 'Digital Marketing', 'HTML', 'CSS', 'Next.js'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="px-4 py-2 rounded-full bg-zinc-900 text-zinc-300 text-sm font-medium border border-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href="/Sanjay.Muhilarasu_update.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Sanjay_Muhilarasu_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold shadow-md hover:bg-zinc-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5 text-black" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-md"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
