export interface WorkflowStage {
  step: number;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  description: string;
  techTags: string[];
}

export const developmentWorkflow: WorkflowStage[] = [
  {
    step: 1,
    title: 'Plan & Architecture',
    subtitle: 'System Requirements & Technical Planning',
    iconName: 'FileText',
    badge: 'STAGE 01',
    description:
      'Analyzing business specifications, sketching database models, defining API schemas, and selecting optimal frontend/cloud stack architectures.',
    techTags: ['System Design', 'API Specs', 'Wireframing', 'Requirement Analysis'],
  },
  {
    step: 2,
    title: 'UI/UX Design',
    subtitle: 'Wireframes & Modern Layout Design',
    iconName: 'Palette',
    badge: 'STAGE 02',
    description:
      'Designing clean, accessible, and responsive user interface mockups with dark/light themes and modern component design tokens.',
    techTags: ['Figma', 'UI/UX Principles', 'Component Tokens', 'Responsive Layouts'],
  },
  {
    step: 3,
    title: 'Frontend Engineering',
    subtitle: 'Client Interface & Component Logic',
    iconName: 'Layout',
    badge: 'STAGE 03',
    description:
      'Building fast, interactive web interfaces with HTML5, CSS3, Bootstrap, React.js, Next.js, and Tailwind CSS with state management and API integration.',
    techTags: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'JavaScript (ES6+)'],
  },
  {
    step: 4,
    title: 'Backend Services',
    subtitle: 'Business Logic & Execution Engines',
    iconName: 'Server',
    badge: 'STAGE 04',
    description:
      'Developing structured backend scripts and services in Python to handle data processing, AI model integration, and core application workflows.',
    techTags: ['Python', 'System Logic', 'Script Automation', 'Data Processing'],
  },
  {
    step: 5,
    title: 'Database Architecture',
    subtitle: 'Data Modeling & Relational Storage',
    iconName: 'Database',
    badge: 'STAGE 05',
    description:
      'Structuring relational databases with MySQL, optimizing tables, managing foreign keys, writing queries, and ensuring data integrity.',
    techTags: ['MySQL', 'Relational Schema', 'SQL Queries', 'Data Persistence'],
  },
  {
    step: 6,
    title: 'API Integration',
    subtitle: 'RESTful Endpoints & Communication',
    iconName: 'Cpu',
    badge: 'STAGE 06',
    description:
      'Building high-performance RESTful APIs using FastAPI, establishing JSON contracts, and verifying request/response payloads with Postman.',
    techTags: ['FastAPI', 'REST APIs', 'JSON Payloads', 'Postman Testing'],
  },
  {
    step: 7,
    title: 'Testing & QA',
    subtitle: 'Cross-Device & Endpoint Verification',
    iconName: 'CheckCircle2',
    badge: 'STAGE 07',
    description:
      'Validating API endpoints, conducting cross-browser and mobile responsiveness audits, and performing performance bug fixes.',
    techTags: ['Postman Collection', 'Cross-Browser QA', 'Responsiveness Audit', 'Bug Fixing'],
  },
  {
    step: 8,
    title: 'Docker Containerization',
    subtitle: 'Environment Isolation & Portability',
    iconName: 'Box',
    badge: 'STAGE 08',
    description:
      'Containerizing web applications and API services with Dockerfiles to guarantee uniform execution across development and production servers.',
    techTags: ['Docker', 'Container Images', 'Port Mapping', 'Environment Isolation'],
  },
  {
    step: 9,
    title: 'Git & CI/CD Pipelines',
    subtitle: 'Version Control & Automation',
    iconName: 'GitBranch',
    badge: 'STAGE 09',
    description:
      'Managing source code branches using Git/GitHub and orchestrating basic CI/CD deployment workflows for seamless release cycles.',
    techTags: ['Git', 'GitHub', 'CI/CD Workflows', 'Branching Strategy'],
  },
  {
    step: 10,
    title: 'AWS Cloud Deployment',
    subtitle: 'Production Hosting & Monitoring',
    iconName: 'Cloud',
    badge: 'STAGE 10',
    description:
      'Provisioning AWS EC2 Ubuntu instances, setting up security groups, configuring Linux web servers, monitoring uptime, and managing AMI backups.',
    techTags: ['AWS EC2', 'Linux (Ubuntu)', 'Security Groups', 'AMI Backups'],
  },
];

export const fullStackCategories = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive, accessible, and high-performance client web applications.',
    gradient: 'from-blue-500 to-cyan-500',
    techList: [
      { name: 'HTML5', detail: 'Semantic structure, WCAG accessibility, SEO-friendly markup' },
      { name: 'CSS3', detail: 'Custom grid, flexbox layouts, CSS variables, keyframe animations' },
      { name: 'Bootstrap', detail: 'Responsive grid system, pre-styled component frameworks' },
      { name: 'JavaScript (ES6+)', detail: 'Async/Await, DOM manipulation, ES modules, Fetch API' },
      { name: 'React.js', detail: 'Functional components, React Hooks, virtual DOM performance' },
      { name: 'Next.js', detail: 'Server-side rendering, static site generation, route optimization' },
      { name: 'Tailwind CSS', detail: 'Utility-first styling, design system tokens, dark mode' },
    ],
  },
  {
    title: 'Backend & API Engineering',
    description: 'Robust server logic, RESTful API architecture, and automated backend execution.',
    gradient: 'from-purple-500 to-indigo-500',
    techList: [
      { name: 'Python', detail: 'Core programming language for backend scripts & AI integration' },
      { name: 'FastAPI', detail: 'Modern, high-performance web framework for RESTful APIs' },
      { name: 'RESTful API Design', detail: 'HTTP methods, JSON payload standards, error handling' },
      { name: 'Postman Verification', detail: 'API endpoint testing, collection execution, documentation' },
    ],
  },
  {
    title: 'Database Management',
    description: 'Relational data modeling, structured query execution, and persistence.',
    gradient: 'from-emerald-500 to-teal-500',
    techList: [
      { name: 'MySQL', detail: 'Relational database schema design, indexing, SQL queries' },
      { name: 'Data Modeling', detail: 'Entity relationship design, normalization, foreign keys' },
    ],
  },
  {
    title: 'DevOps & AWS Deployment',
    description: 'Cloud infrastructure hosting, containerization, and system automation.',
    gradient: 'from-amber-500 to-orange-500',
    techList: [
      { name: 'Linux (Ubuntu)', detail: 'Server administration, bash commands, system monitoring' },
      { name: 'Docker', detail: 'Containerization of applications for environment consistency' },
      { name: 'Git & GitHub', detail: 'Source code version control, pull requests, repository management' },
      { name: 'CI/CD Concepts', detail: 'Automated build and deployment workflow pipelines' },
      { name: 'AWS EC2', detail: 'Cloud server provisioning, AMI backups, security configuration' },
    ],
  },
  {
    title: 'Digital Marketing & Growth',
    description: 'SEO optimization, performance marketing, and data-driven brand amplification strategies.',
    gradient: 'from-rose-500 to-pink-500',
    techList: [
      { name: 'Search Engine Optimization (SEO)', detail: 'Technical SEO, keyword research, on-page optimization' },
      { name: 'Pay Per Click (PPC)', detail: 'Ad campaign management, bid optimization, conversion tracking' },
      { name: 'Social Media Marketing', detail: 'Content strategy, engagement campaigns, audience growth' },
      { name: 'Content Marketing', detail: 'Copywriting, blog creation, content distribution strategy' },
      { name: 'Generative Engine Optimization (GEO)', detail: 'AI-driven content visibility and ranking' },
    ],
  },
];
