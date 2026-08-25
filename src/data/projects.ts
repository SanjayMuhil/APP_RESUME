export interface ProjectItem {
  id: number | string;
  title: string;
  category: 'Full Stack & AI' | 'DevOps & Cloud' | 'Mobile & Web' | 'Live Production Sites';
  description: string;
  fullDescription?: string;
  technologies: string[];
  features?: string[];
  homepageImage: string;
  mobileHomepageImage?: string;
  image: string;
  mobileImage?: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  badgeText?: string;
  isFeatured?: boolean;
}

export interface LiveProjectDemo {
  id: number;
  title: string;
  url: string;
  description: string;
  technologies: string[];
  status: 'Live Deployed';
  homepageImage: string;
  mobileHomepageImage?: string;
  image: string;
  mobileImage?: string;
  imageAlt: string;
}

export const coreProjects: ProjectItem[] = [
  {
    id: 1,
    title: 'AI-Based Online Proctoring MVP',
    category: 'Full Stack & AI',
    description: 'AI-powered online proctoring system with real-time eye tracking, voice detection, and multi-face recognition.',
    fullDescription:
      'Developed an AI-powered proctoring system with real-time eye tracking, voice detection, and multi-face recognition to detect cheating during virtual interviews and online exams. Built and deployed RESTful APIs using FastAPI, containerized the application with Docker, and tested endpoints using Postman for scalable and reliable performance.',
    technologies: ['FastAPI', 'Python', 'Docker', 'OpenCV', 'Postman', 'AWS EC2'],
    features: [
      'Real-time eye tracking & gaze analysis',
      'Voice anomaly & audio detection',
      'Multi-face recognition for identity verification',
      'RESTful API architecture using FastAPI',
      'Docker containerization for portable cloud deployment',
      'Extensive Postman endpoint verification',
    ],
    homepageImage: '/projects/ai_proctoring.png',
    mobileHomepageImage: '/projects/ai_proctoring.png',
    image: '/projects/ai_proctoring.png',
    mobileImage: '/projects/ai_proctoring.png',
    imageAlt: 'AI-Based Online Proctoring Dashboard Interface with real-time facial recognition and gaze analytics',
    githubUrl: 'https://github.com/SanjayMuhil/ai-proctoring-mvp',
    badgeText: 'AI & Cloud MVP',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Enhancing Accessibility with Hand Gesture Recognition',
    category: 'Full Stack & AI',
    description: 'Real-time assistive system for visually impaired users using computer vision and AI feedback.',
    fullDescription:
      'A revolutionary real-time assistive system designed to empower visually impaired users through advanced hand gesture recognition technology. The system enables cursor control through intuitive hand gestures and provides AI-generated audio feedback for seamless interaction with digital interfaces.',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'LLaMA 2', 'Computer Vision'],
    features: [
      'Real-time hand gesture recognition',
      'Cursor control via hand movements',
      'AI-generated audio feedback',
      'Computer vision integration',
      'Accessibility-focused design',
    ],
    homepageImage: '/projects/gesture_recognition.png',
    mobileHomepageImage: '/projects/gesture_recognition.png',
    image: '/projects/gesture_recognition.png',
    mobileImage: '/projects/gesture_recognition.png',
    imageAlt: 'Hand Gesture Recognition Computer Vision Interface showing MediaPipe 3D tracking points and voice feedback waveform',
    githubUrl: 'https://github.com/SanjayMuhil/gesture-recognition-accessibility',
    badgeText: 'Computer Vision',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Quick Meet – Video Conferencing App',
    category: 'Mobile & Web',
    description: 'Cross-platform mobile app for real-time video conferencing and team collaboration.',
    fullDescription:
      'A comprehensive cross-platform mobile application that enables seamless video conferencing and collaboration. Built with modern technologies, it supports multiple participants with high-quality video/audio streaming, screen sharing capabilities, and real-time chat functionality.',
    technologies: ['React Native', 'WebRTC', 'Expo', 'JavaScript (ES6+)'],
    features: [
      'Create and join meetings instantly',
      'High-quality video/audio streaming',
      'Screen sharing capabilities',
      'Real-time chat functionality',
      'Cross-platform mobile compatibility',
    ],
    homepageImage: '/projects/quick_meet.png',
    mobileHomepageImage: '/projects/quick_meet.png',
    image: '/projects/quick_meet.png',
    mobileImage: '/projects/quick_meet.png',
    imageAlt: 'Quick Meet video conferencing app interface showing participant video tiles, WebRTC status, and audio controls',
    githubUrl: 'https://github.com/SanjayMuhil/quick-meet-webrtc',
    badgeText: 'Realtime WebRTC',
    isFeatured: false,
  },
];

export const liveProjectsList: LiveProjectDemo[] = [
  {
    id: 1,
    title: 'Portfolio Anushkatailor',
    url: 'https://anushkatailor.netlify.app/',
    description: 'Bespoke fashion tailor portfolio showcasing custom apparel designs & interactive catalog.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    status: 'Live Deployed',
    homepageImage: '/live/anushka.png',
    mobileHomepageImage: '/live/anushka.png',
    image: '/live/anushka.png',
    mobileImage: '/live/anushka.png',
    imageAlt: 'Anushka Tailor live website screenshot showing bespoke apparel design catalog',
  },
  {
    id: 2,
    title: 'Uzhavan Pathai',
    url: 'https://uzhavanpathai.vercel.app/',
    description: 'Agri-tech web platform empowering local farmers with market prices, crop insights & direct sales.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    status: 'Live Deployed',
    homepageImage: '/live/ulavan.png',
    mobileHomepageImage: '/live/ulavan.png',
    image: '/live/ulavan.png',
    mobileImage: '/live/ulavan.png',
    imageAlt: 'Uzhavan Pathai live agri-tech website screenshot showing crop market price analytics',
  },
  {
    id: 3,
    title: 'Myself Web App',
    url: 'https://celadon-wisp-11f26d.netlify.app/',
    description: 'Interactive personal web application with custom animations, tech showcase & dark mode UI.',
    technologies: ['React', 'CSS3', 'Vite'],
    status: 'Live Deployed',
    homepageImage: '/live/me.png',
    mobileHomepageImage: '/live/me.png',
    image: '/live/me.png',
    mobileImage: '/live/me.png',
    imageAlt: 'Myself Web App live website screenshot showing developer interactive dashboard',
  },
  {
    id: 4,
    title: 'Gusto Racing',
    url: 'https://gusto-racing.vercel.app/',
    description: 'High-performance motorsport racing team website with race calendars, driver rosters & results.',
    technologies: ['React', 'Tailwind CSS', 'WebGL'],
    status: 'Live Deployed',
    homepageImage: '/live/jogan.png',
    mobileHomepageImage: '/live/jogan.png',
    image: '/live/jogan.png',
    mobileImage: '/live/jogan.png',
    imageAlt: 'Gusto Racing live website screenshot showing telemetry dashboard and race schedule',
  },
  {
    id: 5,
    title: 'Geoffery Portfolio',
    url: 'https://geoffery-one.vercel.app/',
    description: 'Sleek developer portfolio featuring interactive project cards, dynamic styling & responsive UI.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    status: 'Live Deployed',
    homepageImage: '/live/geo.png',
    mobileHomepageImage: '/live/geo.png',
    image: '/live/geo.png',
    mobileImage: '/live/geo.png',
    imageAlt: 'Geoffery developer portfolio live website preview showing interactive project cards',
  },
  {
    id: 6,
    title: 'TN Vote 2026',
    url: 'https://tn-vote-26.netlify.app/',
    description: 'Electoral information & youth voter engagement web portal for Tamil Nadu elections 2026.',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    status: 'Live Deployed',
    homepageImage: '/live/vote.png',
    mobileHomepageImage: '/live/vote.png',
    image: '/live/vote.png',
    mobileImage: '/live/vote.png',
    imageAlt: 'TN Vote 2026 live website screenshot showing voter information analytics dashboard',
  },
];

// Unified project list for 3D Showcase
export const allShowcaseProjects: ProjectItem[] = [
  ...liveProjectsList.map((live) => ({
    id: `live-${live.id}`,
    title: live.title,
    category: 'Live Production Sites' as const,
    description: live.description,
    fullDescription: live.description,
    technologies: live.technologies,
    homepageImage: live.homepageImage || live.image,
    mobileHomepageImage: live.mobileHomepageImage || live.mobileImage || live.homepageImage || live.image,
    image: live.image || live.homepageImage,
    mobileImage: live.mobileImage || live.mobileHomepageImage || live.image,
    imageAlt: live.imageAlt,
    liveUrl: live.url,
    githubUrl: `https://github.com/SanjayMuhil/${live.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    badgeText: 'Live Production Site',
    isFeatured: true,
  })),
  ...coreProjects,
];
