import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { skillCategories } from '@/data';
import SkillCard from '@/components/SkillCard';

export default function SkillsPage() {
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
          <Code2 className="w-3.5 h-3.5 text-zinc-400" />
          <span>TECHNICAL MATRIX</span>
        </div>

        <h1 className="heading-hero font-gageda font-extrabold tracking-tight text-white">
          Skills & <span className="gradient-text">Technology Stacks</span>
        </h1>

        <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
          Comprehensive inventory of verified development languages, cloud infrastructure platforms, databases, and growth marketing tools.
        </p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <SkillCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
