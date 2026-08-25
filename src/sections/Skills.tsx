import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { skills } from '@/data/portfolio';
import { 
  Cpu, 
  Database, 
  Cloud, 
  Wrench,
  Code2,
  Layout,
  Wind,
  Server,
  Terminal,
  Settings,
  GitBranch,
  Eye,
  Hand,
  Smartphone,
  FileCode,
  Megaphone,
  Search,
  MousePointer,
  Share2,
  FileText,
  Edit,
  Zap,
  Container,
  RefreshCw
} from 'lucide-react';

const categoryConfig: Record<string, {
  label: string;
  icon: React.ElementType;
}> = {
  frontend: {
    label: 'Frontend Development',
    icon: Layout,
  },
  backend: {
    label: 'Backend & Database',
    icon: Database,
  },
  devops: {
    label: 'DevOps & Cloud',
    icon: Cloud,
  },
  'digital-marketing': {
    label: 'Digital Marketing & Growth',
    icon: Megaphone,
  },
  tools: {
    label: 'Tools & Technologies',
    icon: Wrench,
  },
};

const iconMap: Record<string, React.ElementType> = {
  html: FileCode,
  css: Layout,
  javascript: Code2,
  react: Cpu,
  mobile: Smartphone,
  wind: Wind,
  server: Server,
  database: Database,
  code: Code2,
  terminal: Terminal,
  cloud: Cloud,
  settings: Settings,
  'git-branch': GitBranch,
  eye: Eye,
  hand: Hand,
  search: Search,
  'mouse-pointer': MousePointer,
  'share-2': Share2,
  'file-text': FileText,
  edit: Edit,
  zap: Zap,
  container: Container,
  'refresh-cw': RefreshCw,
};

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section
      id="skills"
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
            <Cpu className="w-4 h-4 text-zinc-400" />
            Technical &amp; Marketing Skills
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills &amp; Expertise</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Organized by domain: Frontend, Backend, DevOps/Cloud, Digital Marketing, and Core Tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
            const config = categoryConfig[category] || categoryConfig['tools'];
            const CategoryIcon = config.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="relative"
              >
                <div className="rounded-xl bg-[#0A0A0A] border border-white/10 p-6 md:p-8 h-full shadow-lg hover:border-white/20 transition-all">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {config.label}
                      </h3>
                      <p className="text-sm text-zinc-400">
                        {categorySkills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => {
                      const SkillIcon = iconMap[skill.icon] || Code2;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: categoryIndex * 0.15 + skillIndex * 0.08 }}
                          className="group"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                              <SkillIcon className="w-4 h-4 text-zinc-300" />
                            </div>
                            <span className="flex-1 font-medium text-zinc-200 text-sm sm:text-base">
                              {skill.name}
                            </span>
                            <span className="text-sm font-semibold text-zinc-300">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="relative h-2 bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isVisible ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                duration: 1.4, 
                                delay: categoryIndex * 0.15 + skillIndex * 0.08 + 0.2,
                                ease: [0.16, 1, 0.3, 1]
                              }}
                              className="absolute inset-y-0 left-0 rounded-full bg-white"
                            />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Frontend Skills', value: '7+', icon: Layout },
            { label: 'Cloud & DevOps', value: '5+', icon: Cloud },
            { label: 'Backend & DB', value: '2+', icon: Database },
            { label: 'Digital Marketing', value: '6+', icon: Megaphone },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center p-6 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-lg"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-white" />
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
