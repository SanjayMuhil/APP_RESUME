export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  gradient: string;
  badgeBg: string;
  badgeText: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  level?: number;
  featured?: boolean;
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    subtitle: 'Modern, responsive, user-focused web interfaces',
    iconName: 'Layout',
    gradient: 'from-blue-500 to-cyan-500',
    badgeBg: 'bg-blue-500/10 border-blue-500/30',
    badgeText: 'text-blue-400',
    items: [
      { name: 'HTML5', featured: true, description: 'Semantic markup, accessibility, modern standards' },
      { name: 'CSS3', featured: true, description: 'Flexbox, Grid, custom animations, variables' },
      { name: 'Bootstrap', featured: false, description: 'Component frameworks, grid layout systems' },
      { name: 'JavaScript', featured: true, description: 'ES6+, Async/Await, DOM manipulation, APIs' },
      { name: 'React.js', featured: true, description: 'Hooks, State management, custom components' },
      { name: 'Next.js', featured: true, description: 'Server rendering, routing, static generation' },
      { name: 'Tailwind CSS', featured: true, description: 'Utility-first styling, design tokens' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    subtitle: 'RESTful APIs & data storage solutions',
    iconName: 'Database',
    gradient: 'from-purple-500 to-indigo-500',
    badgeBg: 'bg-purple-500/10 border-purple-500/30',
    badgeText: 'text-purple-400',
    items: [
      { name: 'Python', featured: true, description: 'FastAPI, scripts, automation, computer vision' },
      { name: 'MySQL', featured: true, description: 'Relational data modeling, SQL queries, indexing' },
      { name: 'REST APIs', featured: true, description: 'Endpoint design, JSON payload formatting' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    subtitle: 'Infrastructure, containerization & deployment pipelines',
    iconName: 'Cloud',
    gradient: 'from-emerald-500 to-teal-500',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/30',
    badgeText: 'text-emerald-400',
    items: [
      { name: 'Linux', featured: true, description: 'Server admin, shell scripting, system security' },
      { name: 'Docker', featured: true, description: 'Containerization, Dockerfiles, Compose' },
      { name: 'Git & GitHub', featured: true, description: 'Version control, branching, PR workflows' },
      { name: 'CI/CD Pipelines', featured: true, description: 'Automated build & deployment workflows' },
      { name: 'AWS EC2', featured: true, description: 'Instance provisioning, security groups, AMI' },
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Growth',
    subtitle: 'SEO, performance marketing & brand amplification',
    iconName: 'TrendingUp',
    gradient: 'from-amber-500 to-orange-500',
    badgeBg: 'bg-amber-500/10 border-amber-500/30',
    badgeText: 'text-amber-400',
    items: [
      { name: 'Search Engine Optimization (SEO)', featured: true, description: 'Technical & on-page keyword ranking' },
      { name: 'Pay Per Click (PPC)', featured: true, description: 'Ad campaigns, budget optimization, conversion' },
      { name: 'Social Media Marketing', featured: true, description: 'Content calendar, engagement strategies' },
      { name: 'Content Marketing', featured: true, description: 'Copywriting, blog outreach, lead magnets' },
      { name: 'Generative Engine Optimization (GEO)', featured: true, description: 'AI-driven content visibility' },
    ],
  },
];
