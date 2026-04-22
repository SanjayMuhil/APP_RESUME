import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Megaphone,
  Globe,
  Linkedin,
  Search,
  PenTool,
  Star,
  Award,
  Zap,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Download,
  ExternalLink,
  Sparkles,
  MousePointer,
  Share2,
  Eye,
  Youtube,
  MessageCircle,
} from 'lucide-react';

// ── Data ──────────────────────────────────────────────────────────────────────

const dmPersonalInfo = {
  name: 'Sanjay Muhilarasu',
  role: 'Digital Marketing Intern',
  tagline: 'Driving Brand Visibility · Engaging Target Audiences · Amplifying Project Reach',
  email: 'sanjay.muhilarasu@gmail.com',
  phone: '+91 6379471833',
  location: 'Chennai, Tamil Nadu',
  linkedin: 'linkedin.com/in/sanjay-muhilarasu-b08124279',
  objective:
    'Highly motivated final-year BCA student with a passion for digital marketing and brand storytelling. Experienced in planning and executing end-to-end digital marketing strategies—from SEO-driven content creation and targeted social media campaigns to paid advertising and analytics-based optimisation. Adept at communicating project value clearly, attracting student and youth audiences, and improving organic and paid reach. Seeking a Digital Marketing Internship to apply creative skills and analytical thinking to real-world campaigns.',
};

const skills = [
  { name: 'SEO / SEM', level: 82, icon: Search, color: 'from-blue-500 to-blue-600', bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400' },
  { name: 'Social Media Marketing', level: 88, icon: Share2, color: 'from-pink-500 to-rose-600', bg: 'bg-pink-500/10', text: 'text-pink-600 dark:text-pink-400' },
  { name: 'Content Creation', level: 85, icon: PenTool, color: 'from-purple-500 to-violet-600', bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400' },
  { name: 'Web Advertising (PPC)', level: 75, icon: Megaphone, color: 'from-amber-500 to-orange-600', bg: 'bg-amber-500/10', text: 'text-amber-600 dark:text-amber-400' },
  { name: 'Google Analytics', level: 78, icon: BarChart3, color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400' },
  { name: 'Campaign Strategy', level: 80, icon: Target, color: 'from-indigo-500 to-blue-600', bg: 'bg-indigo-500/10', text: 'text-indigo-600 dark:text-indigo-400' },
  { name: 'Audience Engagement', level: 87, icon: Users, color: 'from-rose-500 to-pink-600', bg: 'bg-rose-500/10', text: 'text-rose-600 dark:text-rose-400' },
  { name: 'Brand Promotion', level: 84, icon: TrendingUp, color: 'from-cyan-500 to-sky-600', bg: 'bg-cyan-500/10', text: 'text-cyan-600 dark:text-cyan-400' },
];

const experiences = [
  {
    id: 1,
    role: 'Digital Marketing Project Lead',
    company: 'Academic Capstone Project — MCC Chennai',
    duration: 'Jan 2025 – Apr 2025',
    type: 'project',
    color: 'from-blue-500 to-purple-600',
    points: [
      'Planned and executed a complete end-to-end digital marketing strategy for a student-facing web application, achieving 500+ organic impressions within the first month.',
      'Created SEO-optimised blog posts, landing pages, and social media copy targeting college students across Chennai.',
      'Designed and managed Instagram & LinkedIn campaigns, growing follower engagement by 40% through consistent, on-brand visual content using Canva.',
      'Ran Google Ads PPC campaigns with a ₹2,000 budget, achieving a CTR of 3.2% — above the industry average of 2%.',
      'Tracked campaign performance through Google Analytics, producing weekly insights reports and iterating strategies accordingly.',
      'Promoted the project to target student audiences via WhatsApp groups, campus events, and influencer micro-campaigns.',
    ],
  },
  {
    id: 2,
    role: 'Front-End Developer Intern',
    company: 'Pentagon Innovations, Chennai',
    duration: 'Jul 2024 – Oct 2024',
    type: 'internship',
    color: 'from-emerald-500 to-teal-600',
    points: [
      'Collaborated with the marketing team to improve landing page conversion rates by 25% through A/B testing and UI optimisation.',
      'Contributed to web content strategy by writing clear, action-oriented copy aligned with SEO best practices.',
      'Supported social media asset creation (banners, promotional cards) using Canva for company LinkedIn and Instagram pages.',
      'Analysed user behaviour data from Google Analytics to identify high-bounce pages and recommended content improvements.',
    ],
  },
];

const tools = [
  { name: 'Google Ads', icon: '🎯', category: 'Paid Advertising', color: 'from-blue-400 to-blue-600' },
  { name: 'Google Analytics', icon: '📊', category: 'Analytics', color: 'from-amber-400 to-orange-500' },
  { name: 'Canva', icon: '🎨', category: 'Design', color: 'from-purple-400 to-pink-500' },
  { name: 'Instagram', icon: '📸', category: 'Social Media', color: 'from-pink-400 to-rose-600' },
  { name: 'Facebook Ads', icon: '📘', category: 'Paid Advertising', color: 'from-blue-500 to-indigo-600' },
  { name: 'LinkedIn', icon: '💼', category: 'B2B Marketing', color: 'from-sky-500 to-blue-600' },
  { name: 'Google Search Console', icon: '🔍', category: 'SEO', color: 'from-emerald-400 to-green-600' },
  { name: 'WhatsApp Business', icon: '💬', category: 'Messaging', color: 'from-green-400 to-emerald-600' },
  { name: 'Mailchimp', icon: '📧', category: 'Email Marketing', color: 'from-yellow-400 to-amber-500' },
  { name: 'Meta Business Suite', icon: '📱', category: 'Social Media', color: 'from-indigo-400 to-violet-600' },
];

const strengths = [
  {
    title: 'Project Promotion Expertise',
    description: 'Proven ability to craft and execute full promotional strategies for student-level projects—from zero to measurable reach using both organic and paid channels.',
    icon: Megaphone,
    color: 'from-pink-500 to-rose-600',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
  },
  {
    title: 'Creative Content Creator',
    description: 'Skilled at designing visually appealing graphics (Canva) and writing engaging copy that resonates with youth and student audiences across Instagram, LinkedIn, and beyond.',
    icon: PenTool,
    color: 'from-purple-500 to-violet-600',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    title: 'Analytics-Driven Mindset',
    description: 'Comfortable reading campaign data, identifying trends, and translating insights into actionable improvements—ensuring every rupee of ad spend delivers maximum ROI.',
    icon: BarChart3,
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    title: 'Strong Communicator',
    description: 'Ability to communicate complex project value in simple, compelling language—building trust with audiences and stakeholders alike.',
    icon: Globe,
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    title: 'Student Audience Specialist',
    description: 'Deep understanding of student behaviour, trending platforms, and campus marketing channels that convert awareness into active users and advocates.',
    icon: Users,
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    title: 'Digital-First Thinker',
    description: 'Always exploring new platforms, formats, and growth hacking techniques to stay ahead of digital trends and deliver fresh, effective marketing campaigns.',
    icon: Zap,
    color: 'from-indigo-500 to-blue-600',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
  },
];

const metrics = [
  { label: 'Organic Impressions', value: '500+', icon: Eye, color: 'text-blue-500' },
  { label: 'Engagement Growth', value: '40%', icon: TrendingUp, color: 'text-emerald-500' },
  { label: 'Google Ads CTR', value: '3.2%', icon: MousePointer, color: 'text-amber-500' },
  { label: 'CTA Conversion Rate', value: '25%', icon: CheckCircle, color: 'text-purple-500' },
];

const portfolio = [
  {
    platform: 'Instagram',
    handle: '@shineon.stories',
    url: 'https://www.instagram.com/shineon.stories',
    description: 'Short-form visual content, reels, and story campaigns to build brand awareness and engage student audiences.',
    icon: Share2,
    gradient: 'from-pink-500 via-rose-500 to-orange-400',
    bg: 'bg-pink-50 dark:bg-pink-900/20',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-200 dark:border-pink-800',
    stat: '📸 Reels · Stories · Collab Posts',
  },
  {
    platform: 'YouTube',
    handle: '@sanjay_shineonstories16',
    url: 'https://youtube.com/@sanjay_shineonstories16',
    description: 'Long-form and short-form video content promoting projects, tutorials, and digital storytelling for student communities.',
    icon: Youtube,
    gradient: 'from-red-500 to-red-600',
    bg: 'bg-red-50 dark:bg-red-900/20',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-800',
    stat: '🎬 Videos · Shorts · Playlists',
  },
  {
    platform: 'WhatsApp Channel',
    handle: 'ShineOn Stories',
    url: 'https://whatsapp.com/channel/0029VbCEzxF47XeFM4osp31x',
    description: 'Direct broadcast channel for content updates, campaign announcements, and audience engagement via WhatsApp.',
    icon: MessageCircle,
    gradient: 'from-green-500 to-emerald-600',
    bg: 'bg-green-50 dark:bg-green-900/20',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    stat: '💬 Broadcasts · Updates · Promotions',
  },
];

// ── Component ──────────────────────────────────────────────────────────────────

// Minimal type declaration for html2pdf.js (no @types package exists)
declare function html2pdf(): {
  set(opts: object): ReturnType<typeof html2pdf>;
  from(el: HTMLElement): ReturnType<typeof html2pdf>;
  save(): void;
};

export default function DigitalMarketingResume() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [expandedExp, setExpandedExp] = useState<number | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    const element = resumeRef.current;
    if (!element) return;

    // Dynamically import html2pdf.js (avoids SSR issues)
    const html2pdfLib = await import('html2pdf.js');
    const h2p = (html2pdfLib.default || html2pdfLib) as typeof html2pdf;

    const opt = {
      margin:       [8, 8, 8, 8],
      filename:     'Sanjay_Muhilarasu_Digital_Marketing_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, logging: false },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] },
    };

    h2p().set(opt).from(element).save();
  };


  return (
    <section
      id="dm-resume"
      className="relative section-padding overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
    >
      {/* ── Decorative blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-pink-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 rounded-full bg-amber-400/5 blur-3xl" />
      </div>

      <div ref={ref} className="container-custom relative z-10">
        {/* printable region — ref attached here captures full resume */}
        <div ref={resumeRef}>

        {/* ── HEADER BADGE ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/10 to-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
            <Sparkles className="h-4 w-4 text-pink-500" />
            Digital Marketing Intern · Student Resume
            <Sparkles className="h-4 w-4 text-pink-500" />
          </span>
        </motion.div>

        {/* ── HERO CARD ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 overflow-hidden rounded-3xl border border-white/40 dark:border-gray-700/40 shadow-2xl"
        >
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-12 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  {dmPersonalInfo.name}
                </h1>
                <p className="text-xl font-semibold text-white/90 mb-3">{dmPersonalInfo.role}</p>
                <p className="text-sm text-white/70 max-w-xl">{dmPersonalInfo.tagline}</p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-white/80 min-w-max">
                <span className="flex items-center gap-2">📧 {dmPersonalInfo.email}</span>
                <span className="flex items-center gap-2">📞 {dmPersonalInfo.phone}</span>
                <span className="flex items-center gap-2">📍 {dmPersonalInfo.location}</span>
                <a
                  href={`https://${dmPersonalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> {dmPersonalInfo.linkedin}
                </a>
              </div>
            </div>
          </div>

          {/* Metric bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200/50 dark:divide-gray-700/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col items-center justify-center p-5 gap-1">
                <m.icon className={`h-6 w-6 ${m.color}`} />
                <span className={`text-2xl font-extrabold ${m.color}`}>{m.value}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center">{m.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── TWO-COLUMN LAYOUT ── */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-1 flex flex-col gap-8">

            {/* Objective */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Objective</h2>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {dmPersonalInfo.objective}
              </p>
            </motion.div>

            {/* Tools & Platforms */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tools & Platforms</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="group flex items-center gap-1.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 cursor-default shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600 transition-all"
                  >
                    <span>{tool.icon}</span>
                    {tool.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Bachelor of Computer Application (BCA)</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Madras Christian College, Chennai</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Jul 2022 – Apr 2025</p>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">Master of Computer Application (MCA)</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">University of Madras — Distance Education</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Oct 2025 – Jul 2027 (Pursuing)</p>
                </div>
              </div>
            </motion.div>

            {/* Canva Design Guide CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <PenTool className="h-5 w-5" />
                  <h3 className="font-bold text-lg">Canva Design Guide</h3>
                </div>
                <p className="text-sm text-white/80 mb-4">
                  Scroll down to see a complete Canva resume design guide — layout, colours, fonts & placement tips.
                </p>
                <button
                  onClick={() => document.getElementById('canva-guide')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center gap-2 rounded-xl bg-white/20 hover:bg-white/30 px-4 py-2 text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> View Design Tips
                </button>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Digital Marketing Skills</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${skill.bg}`}>
                        <skill.icon className={`h-4 w-4 ${skill.text}`} />
                      </div>
                      <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className={`text-xs font-bold ${skill.text}`}>{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.4, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                  <Megaphone className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Internship & Project Experience</h2>
              </div>
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    layout
                    className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
                  >
                    {/* Card header */}
                    <button
                      onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                      className="w-full text-left"
                    >
                      <div className={`flex items-start justify-between gap-4 bg-gradient-to-r ${exp.color} p-5 text-white`}>
                        <div>
                          <p className="font-bold text-lg leading-tight">{exp.role}</p>
                          <p className="text-sm text-white/80 mt-0.5">{exp.company}</p>
                          <p className="text-xs text-white/60 mt-1">{exp.duration}</p>
                        </div>
                        <div className="mt-1 flex-shrink-0">
                          {expandedExp === exp.id ? (
                            <ChevronUp className="h-5 w-5 text-white/80" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-white/80" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expandable points */}
                    <AnimatePresence initial={false}>
                      {expandedExp === exp.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="bg-gray-50 dark:bg-gray-800/60"
                        >
                          <ul className="p-5 space-y-2.5">
                            {exp.points.map((pt, i) => (
                              <li key={i} className="flex gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                <p className="text-xs text-gray-400 dark:text-gray-500 text-center">Click a card to expand details</p>
              </div>
            </motion.div>

            {/* Key Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Key Strengths</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.07 }}
                    whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0,0,0,0.12)' }}
                    className={`rounded-2xl ${s.bg} border border-gray-200/50 dark:border-gray-700/50 p-5 transition-all`}
                  >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${s.color}`}>
                      <s.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mb-1.5 font-bold text-gray-900 dark:text-white text-sm">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">{s.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── DIGITAL MARKETING PORTFOLIO ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-orange-500">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Digital Marketing Portfolio</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Live platforms — content creation, audience engagement &amp; personal branding</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {portfolio.map((p, i) => (
                  <motion.a
                    key={p.platform}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                    whileHover={{ y: -5, boxShadow: '0 16px 32px rgba(0,0,0,0.14)' }}
                    className={`group relative rounded-2xl ${p.bg} border ${p.border} p-5 flex flex-col gap-3 transition-all`}
                  >
                    {/* Platform header */}
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} shadow-sm`}>
                        <p.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-gray-900 dark:text-white">{p.platform}</p>
                        <p className={`text-xs font-medium ${p.text}`}>{p.handle}</p>
                      </div>
                    </div>
                    {/* Description */}
                    <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">{p.description}</p>
                    {/* Stat chip */}
                    <span className={`inline-flex items-center gap-1 rounded-lg border ${p.border} ${p.bg} px-2 py-1 text-xs font-medium ${p.text}`}>
                      {p.stat}
                    </span>
                    {/* Visit link */}
                    <div className={`flex items-center gap-1 text-xs font-semibold ${p.text} mt-auto`}>
                      <ExternalLink className="h-3.5 w-3.5" />
                      Visit Channel
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── CANVA DESIGN GUIDE ── */}
        <motion.div
          id="canva-guide"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <PenTool className="h-7 w-7" />
              <h2 className="text-2xl font-bold">Canva Resume Design Guide</h2>
            </div>
            <p className="text-white/80 text-sm max-w-2xl">
              Follow these guidelines to create a stunning, ATS-friendly digital marketing resume in Canva that stands out to recruiters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
            {/* Layout */}
            <div className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-lg">📐</span> Layout
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" /> Use A4 / US Letter single-page</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" /> Two-column: narrow left sidebar + wide right body</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" /> Header block full-width with gradient background</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" /> 0.6–0.8 in margins; inner padding 16–20 pt</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" /> Left sidebar: Contact, Skills, Tools, Education</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-emerald-500 flex-shrink-0" /> Right body: Objective, Experience, Strengths</li>
              </ul>
            </div>

            {/* Colors */}
            <div className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-lg">🎨</span> Colour Palette
              </h3>
              <div className="space-y-2">
                {[
                  { label: 'Primary', hex: '#4F46E5', name: 'Indigo 600' },
                  { label: 'Accent', hex: '#EC4899', name: 'Pink 500' },
                  { label: 'Dark Text', hex: '#1E293B', name: 'Slate 800' },
                  { label: 'Body Text', hex: '#475569', name: 'Slate 600' },
                  { label: 'Background', hex: '#F8FAFC', name: 'Slate 50' },
                  { label: 'White', hex: '#FFFFFF', name: 'Pure White' },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-3 text-sm">
                    <div className="h-6 w-6 rounded-md border border-gray-200 shadow-sm flex-shrink-0" style={{ backgroundColor: c.hex }} />
                    <span className="font-medium text-gray-700 dark:text-gray-300">{c.label}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-xs ml-auto">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fonts */}
            <div className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-lg">🔤</span> Font Styles
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Name (H1):</span>
                  <br />DM Sans Bold / Poppins Bold · 28–32 pt
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Section Titles:</span>
                  <br />Poppins SemiBold · 11–12 pt · UPPERCASE
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Body Text:</span>
                  <br />Inter Regular · 9–10 pt · 1.4 line-height
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Role / Job Titles:</span>
                  <br />Inter SemiBold · 10–11 pt · Indigo colour
                </li>
                <li>
                  <span className="font-semibold text-gray-800 dark:text-gray-200">Skill Tags:</span>
                  <br />Inter Medium · 8 pt · Pill-shaped chips
                </li>
              </ul>
            </div>

            {/* Content Tips */}
            <div className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-lg">✨</span> Content Tips
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Add icons (rocket/chart) next to section titles</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Use subtle horizontal dividers between sections</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Skill bars: thin gradient rectangles (4 pt height)</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Include 3–4 metric chips (e.g. "3.2% CTR") in header</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Light gradient header (indigo→pink) for visual impact</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Keep white space generous — avoid clutter</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Export as PDF (ATS-safe) not JPG/PNG</li>
                <li className="flex gap-2"><CheckCircle className="h-4 w-4 mt-0.5 text-indigo-500 flex-shrink-0" /> Use Canva's "Digital Marketing Resume" template as base</li>
              </ul>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gray-50 dark:bg-gray-800/60 px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              💡 <strong className="text-gray-700 dark:text-gray-300">Pro Tip:</strong> Search "Digital Marketing Resume" in Canva's template library and customise the colour scheme to the palette above.
            </p>
            <a
              href="https://www.canva.com/resumes/templates/digital-marketing/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-shadow flex-shrink-0"
            >
              <ExternalLink className="h-4 w-4" /> Open in Canva
            </a>
          </div>
        </motion.div>

        </div>{/* end resumeRef div */}

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            📄 Click below to download a clean PDF of this resume directly to your device.
          </p>
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <Download className="h-4 w-4" /> Download PDF Resume
          </button>
        </motion.div>


      </div>
    </section>
  );
}
