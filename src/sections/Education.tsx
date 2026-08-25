import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { education } from '@/data/portfolio';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="education"
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
            <GraduationCap className="w-4 h-4 text-zinc-400" />
            Education
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Academic</span> Background
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A strong educational foundation that has prepared me for a successful career in technology.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="relative h-full p-8 rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all shadow-lg overflow-hidden">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="relative w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6"
                >
                  <BookOpen className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-semibold mb-4">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    {edu.duration}
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-zinc-400 mb-4">
                    <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                    <span className="font-medium text-zinc-300">{edu.institution}</span>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {/* Achievement Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-white/10"
                  >
                    <Award className="w-4 h-4 text-zinc-300" />
                    <span className="text-sm font-medium text-zinc-300">
                      {index === 0 ? 'Completed' : 'In Progress'}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0A0A0A] border border-white/10">
            <GraduationCap className="w-5 h-5 text-white" />
            <span className="text-zinc-300">
              Always learning, always growing. Currently pursuing MCA while building real-world experience.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
