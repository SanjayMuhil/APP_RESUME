import type { Experience, Project, Education, Skill, SocialLink, ContactInfo } from '@/types';

export const contactInfo: ContactInfo = {
  phone: '+91 6379471833',
  email: 'sanjay.muhilarasu@gmail.com',
  location: 'OMR, Chennai',
  linkedin: 'linkedin.com/in/sanjay-muhilarasu-b08124279',
};

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Front-End Developer Intern',
    company: 'Pentagon-Innovations',
    duration: 'July 2024 – October 2024',
    description: [
   '• Designed responsive user interfaces using HTML, CSS, Bootstrap, React.js, and Next.js, improving user satisfaction ratings by 25%.',
'• Built scalable and reusable UI components using Bootstrap and Flutter frameworks.',
'• Enhanced user experience and layout consistency through collaboration with UI/UX designers, leading to a 15% decrease in bounce rates.',
'• Debugged and resolved front-end issues, ensuring cross-device and cross-browser compatibility.',
'• Used Git for version control and team collaboration, improving project delivery timelines.',
'• Containerized applications using Docker for consistent development and deployment environments.',
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'Flutter', 'Git', 'Docker', 'React.js', 'Next.js'],
  },
  {
    id: 2,
    role: 'Front-End Developer & DevOps (AWS) Intern',
    company: 'iNoesis Technologies Private Limited',
    duration: 'May 2024 – June 2024',
    description: [
      '• Deployed web applications on AWS EC2 and managed cloud-based infrastructure, reducing downtime by 30%.',
'• Managed application deployments using Git and basic CI/CD workflows.',
'• Configured and maintained Linux servers using command-line tools for optimal performance.',
'• Monitored server performance and executed AMI backups to ensure system reliability.',
'• Developed responsive web applications using HTML, CSS, Bootstrap, React.js, Tailwind CSS, and React Native.',
'• Customized Bootstrap components and UI frameworks to enhance user experience.',
'• Ensured cross-browser compatibility and mobile responsiveness, achieving a 20% increase in mobile traffic.',
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'React.js', 'Tailwind', 'React Native','devops', 'Github', 'AWS', 'Linux'],
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
    description: 'Cross-platform mobile app for seamless video conferencing and collaboration.',
    fullDescription: 'A comprehensive cross-platform mobile application that enables seamless video conferencing and collaboration. Built with modern technologies, it supports multiple participants with high-quality video/audio streaming, screen sharing capabilities, and real-time chat functionality.',
    technologies: ['React Native', 'WebRTC', 'Firebase', 'Node.js', 'Redux', 'Expo'],
    image: '/project2.jpg',
    features: [
      'Create and join meetings instantly',
      'High-quality video/audio streaming',
      'Screen sharing capabilities',
      'Real-time chat functionality',
      'Cross-platform compatibility',
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Madras Christian College, Chennai',
    duration: 'July 2022 – April 2025',
    description: 'Specialized in software development with focus on web technologies and programming fundamentals.',
  },
  {
    id: 2,
    degree: 'Master of Computer Application (MCA)',
    institution: 'University of Madras - Distance Education, Chennai',
    duration: 'Oct 2025 – July 2027',
    description: 'Pursuing advanced studies in computer applications with emphasis on emerging technologies.',
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend', icon: 'html' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: 'css' },
  { name: 'JavaScript', level: 85, category: 'frontend', icon: 'javascript' },
  { name: 'React.js', level: 88, category: 'frontend', icon: 'react' },
  { name: 'React Native', level: 80, category: 'frontend', icon: 'mobile' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: 'wind' },
  { name: 'Bootstrap', level: 90, category: 'frontend', icon: 'layout' },
  { name: 'Next.js', level: 75, category: 'frontend', icon: 'server' },
  
  // Backend/Database
  { name: 'MySQL', level: 70, category: 'backend', icon: 'database' },
  { name: 'Python', level: 75, category: 'backend', icon: 'code' },
  
  // DevOps & Cloud
  { name: 'Linux', level: 65, category: 'devops', icon: 'terminal' },
  { name: 'AWS', level: 60, category: 'devops', icon: 'cloud' },
  { name: 'DevOps', level: 55, category: 'devops', icon: 'settings' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools', icon: 'git-branch' },
  { name: 'OpenCV', level: 70, category: 'tools', icon: 'eye' },
  { name: 'MediaPipe', level: 65, category: 'tools', icon: 'hand' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sanjay-muhilarasu-b08124279', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/SanjayMuhil', icon: 'github' },
  { name: 'Email', url: 'mailto:sanjay.muhilarasu@gmail.com', icon: 'mail' },
];

export const personalInfo = {
  name: 'Sanjay Muhilarasu',
  title: 'Front-End Developer | DevOps | AWS | Linux Enthusiast',
  summary: 'BCA graduate specializing in front-end development with expertise in HTML, CSS, Bootstrap, React.js, and Tailwind. Proficient in creating dynamic and responsive web templates that enhance user experience, resulting in a 30% increase in user engagement. Knowledgeable in Linux,AWS, and DevOps, contributing to efficient project workflows and reducing deployment times by 20%. Committed to merging technology and creativity to deliver engaging digital solutions.',
};
