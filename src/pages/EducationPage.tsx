import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationList } from '@/data';
import EducationCard from '@/components/EducationCard';

export default function EducationPage() {
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
          <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
          <span>ACADEMIC BACKGROUND</span>
        </div>

        <h1 className="heading-hero font-gageda font-extrabold tracking-tight text-white">
          Degrees & <span className="gradient-text">Education</span>
        </h1>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          Academic foundation in Computer Applications and advanced software engineering studies.
        </p>
      </motion.div>

      {/* Education Cards Stack */}
      <div className="max-w-4xl mx-auto space-y-6">
        {educationList.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
