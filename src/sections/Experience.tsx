import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { experiences } from '@/data/portfolio';
import { Briefcase, MapPin, ChevronRight } from 'lucide-react';

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      id="experience"
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
            <Briefcase className="w-4 h-4 text-zinc-400" />
            Work Experience
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Professional</span> Journey
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A timeline of my professional growth and the valuable experiences I've gained along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 transform md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-start md:items-center gap-8`}
              >
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-white/40 transform -translate-x-1/2 z-10 shadow-md"
                />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative p-6 md:p-8 rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all shadow-lg text-white"
                  >
                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-semibold">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-zinc-400 mb-4">
                        <MapPin className="w-4 h-4 text-zinc-400" />
                        <span className="font-medium text-zinc-300">{exp.company}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-6">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isVisible ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
                            className="flex items-start gap-2 text-zinc-300"
                          >
                            <ChevronRight className="w-4 h-4 text-zinc-400 mt-1 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty Space for Other Side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
