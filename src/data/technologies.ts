import React from 'react';
import {
  ReactLogo,
  NextLogo,
  AWSLogo,
  DockerLogo,
  LinuxLogo,
  TailwindLogo,
  FastAPILogo,
  PythonLogo,
  SEOPPCLogo,
} from '@/components/icons/TechLogos';

export interface TechnologyItem {
  id: string;
  name: string;
  shortName?: string;
  category: 'Frontend' | 'Backend' | 'Cloud & DevOps' | 'Growth';
  brandColor: string;
  glowColor: string;
  tagline: string;
  icon: React.ReactNode;
}

// Exactly the 9 requested technologies in ordered sequence
export const technologies: TechnologyItem[] = [
  {
    id: 'react',
    name: 'React.js',
    shortName: 'React',
    category: 'Frontend',
    brandColor: '#61DAFB',
    glowColor: 'rgba(97, 218, 251, 0.45)',
    tagline: 'Modern UI Components & Hooks',
    icon: React.createElement(ReactLogo),
  },
  {
    id: 'next',
    name: 'Next.js',
    shortName: 'Next.js',
    category: 'Frontend',
    brandColor: '#FFFFFF',
    glowColor: 'rgba(255, 255, 255, 0.45)',
    tagline: 'SSR, SSG & Full-Stack React',
    icon: React.createElement(NextLogo),
  },
  {
    id: 'aws',
    name: 'AWS EC2',
    shortName: 'AWS EC2',
    category: 'Cloud & DevOps',
    brandColor: '#FF9900',
    glowColor: 'rgba(255, 153, 0, 0.45)',
    tagline: 'Cloud Instances, AMIs & VPC',
    icon: React.createElement(AWSLogo),
  },
  {
    id: 'docker',
    name: 'Docker',
    shortName: 'Docker',
    category: 'Cloud & DevOps',
    brandColor: '#2496ED',
    glowColor: 'rgba(36, 150, 237, 0.45)',
    tagline: 'Containerization & Compose',
    icon: React.createElement(DockerLogo),
  },
  {
    id: 'linux',
    name: 'Linux',
    shortName: 'Linux',
    category: 'Cloud & DevOps',
    brandColor: '#FCC624',
    glowColor: 'rgba(252, 198, 36, 0.45)',
    tagline: 'Server Admin & Shell Scripts',
    icon: React.createElement(LinuxLogo),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    shortName: 'Tailwind',
    category: 'Frontend',
    brandColor: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.45)',
    tagline: 'Utility-First Modern Styling',
    icon: React.createElement(TailwindLogo),
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    shortName: 'FastAPI',
    category: 'Backend',
    brandColor: '#009688',
    glowColor: 'rgba(0, 150, 136, 0.45)',
    tagline: 'High-Performance Python APIs',
    icon: React.createElement(FastAPILogo),
  },
  {
    id: 'python',
    name: 'Python',
    shortName: 'Python',
    category: 'Backend',
    brandColor: '#3776AB',
    glowColor: 'rgba(55, 118, 171, 0.45)',
    tagline: 'Backend Logic & Automation',
    icon: React.createElement(PythonLogo),
  },
  {
    id: 'seo-ppc',
    name: 'SEO & PPC',
    shortName: 'SEO & PPC',
    category: 'Growth',
    brandColor: '#FF9004',
    glowColor: 'rgba(255, 144, 4, 0.45)',
    tagline: 'Search Ranking & Paid Growth',
    icon: React.createElement(SEOPPCLogo),
  },
];
