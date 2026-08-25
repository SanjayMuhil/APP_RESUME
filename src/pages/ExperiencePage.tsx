import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experiences } from '@/data';
import ExperienceCard from '@/components/ExperienceCard';

export default function ExperiencePage() {
  return (
    <div className="container-custom py-24 md:py-28 space-y-12 text-white">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-xs font-mono font-bold">
          <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
          <span>WORK EXPERIENCE & HISTORY</span>
        </div>

        <h1 className="heading-hero font-gageda font-extrabold tracking-tight text-white">
          Professional <span className="gradient-text">Development Journey</span>
        </h1>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          Chronological record of roles in Frontend Engineering, AWS DevOps Infrastructure management, and Digital Marketing execution.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto pt-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={exp.id} experience={exp} isFirst={idx === 0} />
        ))}
      </div>
    </div>
  );
}
