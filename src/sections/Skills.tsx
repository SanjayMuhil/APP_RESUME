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
  FileCode
} from 'lucide-react';

const categoryConfig = {
  frontend: {
    label: 'Frontend Development',
    icon: Layout,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-600 dark:text-blue-400',
  },
  backend: {
    label: 'Backend & Database',
    icon: Database,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/10',
    textColor: 'text-purple-600 dark:text-purple-400',
  },
  devops: {
    label: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-600 dark:text-emerald-400',
  },
  tools: {
    label: 'Tools & Technologies',
    icon: Wrench,
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-600 dark:text-amber-400',
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
      className="relative section-padding bg-gray-50 dark:bg-gray-800/50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-medium mb-4"
          >
            <Cpu className="w-4 h-4" />
            Technical Skills
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of skills I've acquired through education, projects, and professional experience.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => {
            const config = categoryConfig[category as keyof typeof categoryConfig];
            const CategoryIcon = config.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 md:p-8 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center`}>
                      <CategoryIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {config.label}
                      </h3>
                      <p className={`text-sm ${config.textColor}`}>
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
                          transition={{ duration: 0.5, delay: categoryIndex * 0.15 + skillIndex * 0.1 }}
                          className="group"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`w-8 h-8 rounded-lg ${config.bgColor} flex items-center justify-center`}>
                              <SkillIcon className={`w-4 h-4 ${config.textColor}`} />
                            </div>
                            <span className="flex-1 font-medium text-gray-700 dark:text-gray-300">
                              {skill.name}
                            </span>
                            <span className={`text-sm font-semibold ${config.textColor}`}>
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isVisible ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3,
                                ease: [0.16, 1, 0.3, 1]
                              }}
                              className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${config.color}`}
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
            { label: 'Frontend Skills', value: '8+', icon: Layout },
            { label: 'Backend Skills', value: '2+', icon: Database },
            { label: 'Cloud & DevOps', value: '3+', icon: Cloud },
            { label: 'Tools & Tech', value: '3+', icon: Wrench },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
