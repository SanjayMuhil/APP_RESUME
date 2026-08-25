import type { Experience, Project, Education, Skill, SocialLink, ContactInfo, LiveProject } from '@/types';

export const contactInfo: ContactInfo = {
  phone: '+91 6379471833',
  email: 'sanjay.muhilarasu@gmail.com',
  location: 'Chennai, India',
  linkedin: 'https://linkedin.com/in/sanjay-muhilarasu-b08124279',
};

export const personalInfo = {
  name: 'Sanjay Muhilarasu',
  title: 'Full Stack DevOps | Frontend Developer | Digital Marketing',
  summary: 'DevOps enthusiast with foundational knowledge of Linux, Docker, Git, and CI/CD concepts, along with hands-on experience in deploying applications on AWS EC2 and managing containerized environments. Passionate about automation and building scalable and reliable systems. In addition, I have a growing interest in Digital Marketing, with basic knowledge of SEO, PPC, and Social Media Marketing. I enjoy creating engaging content, analyzing performance, and applying modern marketing strategies to improve online visibility and business growth. Eager to start my career as a DevOps Engineer while also leveraging digital marketing skills, and continuously learn modern tools, technologies, and best practices.',
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Frontend Developer | DevOps (AWS) | Digital Marketing',
    company: 'Kraqen Innovations LLP',
    duration: 'June 2025 – Present',
    location: 'Chennai',
    description: [
      'Developed responsive web applications using HTML, CSS, Bootstrap, Tailwind CSS, React.js, and Next.js.',
      'Deployed and maintained web applications on AWS EC2, configured Linux servers, and monitored system performance.',
      'Managed source code using Git and supported application deployment through basic CI/CD workflows.',
      'Optimized website performance, fixed bugs, and ensured cross-browser and mobile responsiveness.',
      'Created digital marketing content and social media campaigns to improve brand visibility and audience engagement.',
      'Collaborated with development and marketing teams to deliver high-quality web and digital solutions.',
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Next.js', 'AWS EC2', 'Linux', 'Git', 'CI/CD', 'Digital Marketing'],
  },
  {
    id: 2,
    role: 'Front-End Developer & DevOps (AWS) Intern',
    company: 'iNoesis Technologies Private Limited',
    duration: 'May 2025 – May 2026',
    location: 'Chennai',
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
  },
  {
    id: 3,
    role: 'Front-End Developer Intern',
    company: 'Pentagon-Innovations (MCC)',
    duration: 'July 2024 – Oct 2024',
    location: 'Chennai',
    description: [
      'Developed responsive web applications using HTML, CSS, Bootstrap, React.js, and Next.js.',
      'Built reusable and scalable UI components improving development efficiency.',
      'Collaborated with UI/UX designers to enhance layout consistency, reducing bounce rate by 15%.',
      'Improved user satisfaction by 25% through optimized UI performance.',
      'Ensured cross-device and cross-browser compatibility.',
      'Containerized applications using Docker for streamlined deployment.',
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'React.js', 'Next.js', 'Docker', 'UI/UX'],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enhancing Accessibility with Hand Gesture Recognition',
    description: 'Real-time assistive system for visually impaired users using AI and computer vision.',
    fullDescription: 'A revolutionary real-time assistive system designed to empower visually impaired users through advanced hand gesture recognition technology. The system enables cursor control through intuitive hand gestures and provides AI-generated audio feedback for seamless interaction with digital interfaces.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'LLaMA 2', 'Computer Vision'],
    image: '/project1.jpg',
    category: 'AI/ML',
    features: [
      'Real-time hand gesture recognition',
      'Cursor control via hand movements',
      'AI-generated audio feedback',
      'Computer vision integration',
      'Accessibility-focused design',
    ],
  },
  {
    id: 2,
    title: 'Quick Meet – Video Conferencing App',
    description: 'Cross-platform mobile app for video conferencing and real-time collaboration.',
    fullDescription: 'A comprehensive cross-platform mobile application that enables seamless video conferencing and collaboration. Built with modern technologies, it supports multiple participants with high-quality video/audio streaming, screen sharing capabilities, and real-time chat functionality.',
    technologies: ['React Native', 'WebRTC', 'Expo'],
    image: '/project2.jpg',
    category: 'Mobile',
    features: [
      'Create and join meetings instantly',
      'High-quality video/audio streaming',
      'Screen sharing capabilities',
      'Real-time chat functionality',
      'Cross-platform compatibility',
    ],
  },
  {
    id: 3,
    title: 'AI-Based Online Proctoring MVP',
    description: 'AI-powered proctoring system with real-time eye tracking, voice detection, and multi-face recognition.',
    fullDescription: 'Developed an AI-powered proctoring system with real-time eye tracking, voice detection, and multi-face recognition to detect cheating during virtual interviews and online exams. Built and deployed RESTful APIs using FastAPI, containerized the application with Docker, and tested endpoints using Postman for scalable and reliable performance.',
    technologies: ['FastAPI', 'Python', 'Docker', 'OpenCV', 'Postman'],
    image: '/project1.jpg',
    category: 'AI/ML',
    features: [
      'Real-time eye tracking and gaze analysis',
      'Voice detection and noise anomaly monitoring',
      'Multi-face recognition for identity verification',
      'RESTful API architecture built with FastAPI',
      'Docker containerization for reliable deployment',
      'Extensive Postman endpoint verification',
    ],
  },
];

export const liveProjects: LiveProject[] = [
  {
    id: 1,
    title: 'Portfolio Anushkatailor',
    url: 'https://anushkatailor.netlify.app/',
    description: 'Modern bespoke fashion tailor portfolio showcasing custom apparel designs & interactive catalog.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/live/anushka.png',
  },
  {
    id: 2,
    title: 'Uzhavan Pathai',
    url: 'https://uzhavanpathai.vercel.app/',
    description: 'Agricultural web platform empowering farmers with market prices, crop insights & direct sales.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/live/ulavan.png',
  },
  {
    id: 3,
    title: 'Myself Personal Web App',
    url: 'https://celadon-wisp-11f26d.netlify.app/',
    description: 'Interactive personal web application with custom animations, tech showcase & dark mode.',
    technologies: ['React', 'CSS3', 'Vite'],
    image: '/live/me.png',
  },
  {
    id: 4,
    title: 'Gusto Racing',
    url: 'https://gusto-racing.vercel.app/',
    description: 'High-performance motorsport racing team website with race calendars, team rosters & results.',
    technologies: ['React', 'Tailwind CSS', 'WebGL'],
    image: '/live/jogan.png',
  },
  {
    id: 5,
    title: 'Geoffery Portfolio',
    url: 'https://geoffery-one.vercel.app/',
    description: 'Sleek developer portfolio featuring interactive project cards, dynamic styling & responsive UI.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    image: '/live/geo.png',
  },
  {
    id: 6,
    title: 'TN Vote 2026',
    url: 'https://tn-vote-26.netlify.app/',
    description: 'Electoral information & voter engagement web portal for Tamil Nadu elections 2026.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    image: '/live/vote.png',
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Madras Christian College, Chennai',
    duration: 'Jul 2022 – Apr 2025',
    location: 'Chennai',
    description: 'Specialized in software development with focus on web technologies, programming fundamentals, and project execution.',
  },
  {
    id: 2,
    degree: 'Master of Computer Application (MCA)',
    institution: 'University of Madras - Distance Education, Chennai',
    duration: 'Oct 2025 – Jul 2027',
    location: 'Chennai',
    description: 'Pursuing advanced studies in computer applications with emphasis on DevOps, cloud infrastructure, and emerging tech.',
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend', icon: 'html' },
  { name: 'CSS3', level: 92, category: 'frontend', icon: 'css' },
  { name: 'Bootstrap', level: 90, category: 'frontend', icon: 'layout' },
  { name: 'JavaScript', level: 88, category: 'frontend', icon: 'javascript' },
  { name: 'React.js', level: 88, category: 'frontend', icon: 'react' },
  { name: 'Next.js', level: 80, category: 'frontend', icon: 'server' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: 'wind' },

  // Backend/Database
  { name: 'Python', level: 82, category: 'backend', icon: 'code' },
  { name: 'MySQL', level: 75, category: 'backend', icon: 'database' },

  // DevOps & Cloud
  { name: 'Linux', level: 80, category: 'devops', icon: 'terminal' },
  { name: 'Docker', level: 78, category: 'devops', icon: 'container' },
  { name: 'Git / GitHub', level: 88, category: 'devops', icon: 'git-branch' },
  { name: 'CI/CD', level: 75, category: 'devops', icon: 'refresh-cw' },
  { name: 'AWS EC2', level: 80, category: 'devops', icon: 'cloud' },

  // Digital Marketing
  { name: 'Search Engine Optimization (SEO)', level: 85, category: 'digital-marketing', icon: 'search' },
  { name: 'Pay Per Click (PPC)', level: 78, category: 'digital-marketing', icon: 'mouse-pointer' },
  { name: 'Social Media Marketing', level: 88, category: 'digital-marketing', icon: 'share-2' },
  { name: 'Content Marketing', level: 82, category: 'digital-marketing', icon: 'file-text' },
  { name: 'Content Creation', level: 85, category: 'digital-marketing', icon: 'edit' },
  { name: 'Generative Engine Optimization (GEO)', level: 75, category: 'digital-marketing', icon: 'zap' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sanjay-muhilarasu-b08124279', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/SanjayMuhil', icon: 'github' },
  { name: 'Email', url: 'mailto:sanjay.muhilarasu@gmail.com', icon: 'mail' },
];
