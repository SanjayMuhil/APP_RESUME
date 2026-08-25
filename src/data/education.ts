export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Madras Christian College, Chennai',
    duration: 'Jul 2022 – Apr 2025',
    location: 'Chennai, India',
    status: 'Graduated',
    description:
      'Specialized in computer applications and software development, building foundational expertise in programming languages, web engineering, database management, and computer network architecture.',
    highlights: [
      'Focus on Web Development, Software Engineering & Data Structures',
      'Led academic project team on digital web applications & system tools',
      'Active participant in computer science technology seminars & workshops',
    ],
  },
  {
    id: 2,
    degree: 'Master of Computer Application (MCA)',
    institution: 'University of Madras - Distance Education, Chennai',
    duration: 'Oct 2025 – Jul 2027',
    location: 'Chennai, India',
    status: 'Enrolled / In Progress',
    description:
      'Pursuing advanced postgraduate studies in computer applications with emphasis on cloud computing, enterprise software engineering, DevOps deployment strategies, and advanced database architectures.',
    highlights: [
      'Advanced Cloud Architecture & Containerization',
      'Enterprise Software Security & System Automation',
      'Continuous learning in modern DevOps tools (AWS, Docker, Linux)',
    ],
  },
];
