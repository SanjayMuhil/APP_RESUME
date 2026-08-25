export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  category?: string;
}

export interface LiveProject {
  id: number;
  title: string;
  url: string;
  description: string;
  technologies: string[];
  image?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  location?: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'digital-marketing';
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
}
