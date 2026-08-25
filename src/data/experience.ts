export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  achievements?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Frontend Developer | DevOps (AWS) | Digital Marketing',
    company: 'Kraqen Innovations LLP',
    duration: 'June 2025 – Present',
    location: 'Chennai, India',
    type: 'Full-time / Project Lead',
    description: [
      'Developed responsive web applications using HTML, CSS, Bootstrap, Tailwind CSS, React.js, and Next.js.',
      'Deployed and maintained web applications on AWS EC2, configured Linux servers, and monitored system performance.',
      'Managed source code using Git and supported application deployment through basic CI/CD workflows.',
      'Optimized website performance, fixed bugs, and ensured cross-browser and mobile responsiveness.',
      'Created digital marketing content and social media campaigns to improve brand visibility and audience engagement.',
      'Collaborated with development and marketing teams to deliver high-quality web and digital solutions.',
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Next.js', 'AWS EC2', 'Linux', 'Git', 'CI/CD', 'Digital Marketing'],
    achievements: [
      'Successfully deployed multi-tier client web apps on AWS EC2 with 99.9% uptime',
      'Boosted audience engagement across digital campaigns by over 35%',
    ],
  },
  {
    id: 2,
    role: 'Front-End Developer & DevOps (AWS) Intern',
    company: 'iNoesis Technologies Private Limited',
    duration: 'May 2025 – May 2026',
    location: 'Chennai, India',
    type: 'Internship',
    description: [
      'Deployed web applications on AWS EC2 and managed cloud-based infrastructure, reducing downtime by 30%.',
      'Managed application deployments using Git and basic CI/CD workflows.',
      'Configured and maintained Linux servers using command-line tools for optimal performance.',
      'Monitored server performance and executed AMI backups to ensure system reliability.',
      'Developed responsive web applications using HTML, CSS, Bootstrap, React.js, Tailwind CSS, and Next.js.',
      'Customized Bootstrap components and UI frameworks to enhance user experience.',
      'Ensured cross-browser compatibility and mobile responsiveness, achieving a 20% increase in mobile traffic.',
    ],
    technologies: ['AWS EC2', 'Linux', 'Git', 'CI/CD', 'HTML', 'CSS', 'Bootstrap', 'React.js', 'Tailwind CSS', 'Next.js'],
    achievements: [
      'Reduced server downtime by 30% through automated AWS monitoring',
      'Increased mobile traffic by 20% by implementing responsive UI optimizations',
    ],
  },
  {
    id: 3,
    role: 'Front-End Developer Intern',
    company: 'Pentagon-Innovations (MCC)',
    duration: 'July 2024 – Oct 2024',
    location: 'Chennai, India',
    type: 'Internship',
    description: [
      'Developed responsive web applications using HTML, CSS, Bootstrap, React.js, and Next.js.',
      'Built reusable and scalable UI components improving development efficiency.',
      'Collaborated with UI/UX designers to enhance layout consistency, reducing bounce rate by 15%.',
      'Improved user satisfaction by 25% through optimized UI performance.',
      'Ensured cross-device and cross-browser compatibility.',
      'Containerized applications using Docker for streamlined deployment.',
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'React.js', 'Next.js', 'Docker', 'UI/UX'],
    achievements: [
      'Reduced bounce rate by 15% through consistent layout polish',
      'Containerized core applications with Docker for portable deployment',
    ],
  },
];
