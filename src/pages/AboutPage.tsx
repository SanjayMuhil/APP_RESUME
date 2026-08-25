import { motion } from 'framer-motion';
import { User, Code2, Cloud, TrendingUp, ShieldCheck, Download, CheckCircle2 } from 'lucide-react';
import { personalInfo, resumeDownloadPath, resumeFilename } from '@/data';
import { ProfessionalCard } from '@/components/ui/ProfessionalCard';

export default function AboutPage() {
  return (
    <div className="container-custom py-24 md:py-28 space-y-16 text-white">
      {/* ── HEADER ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0F28] border border-[#0894FF]/40 text-[#22D3EE] text-xs font-mono font-bold shadow-[0_0_15px_rgba(8,148,255,0.25)]">
          <User className="w-3.5 h-3.5 text-[#0894FF]" />
          <span>ABOUT SANJAY MUHILARASU</span>
        </div>

        <h1 className="heading-hero font-gageda font-extrabold tracking-tight text-white leading-tight">
          Software Developer, <span className="gradient-text">DevOps & Cloud</span> Specialist
        </h1>

        <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
          Combining frontend engineering precision, AWS cloud infrastructure deployment, and data-driven digital marketing growth.
        </p>
      </motion.div>

      {/* ── MAIN BIO & IMAGE GRID ── */}
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl p-[2px] bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] shadow-[0_0_30px_rgba(8,148,255,0.3)]">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#050816]">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-[center_12%] scale-105 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#0B0F28]/90 backdrop-blur border border-white/12 text-center">
                  <span className="font-gageda text-xs font-bold text-white block">{personalInfo.name}</span>
                  <span className="text-[11px] font-mono text-[#0894FF]">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Executive Summary Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-6"
        >
          <ProfessionalCard glowColor="rainbow" className="space-y-4">
            <h3 className="font-gageda text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#0894FF]" />
              Professional Background & Vision
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {personalInfo.summary}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-300">
              <div className="bg-[#050816] px-3.5 py-2 rounded-lg border border-[#0894FF]/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0894FF]" />
                <span>Degree: BCA & MCA (Enrolled)</span>
              </div>
              <div className="bg-[#050816] px-3.5 py-2 rounded-lg border border-[#C959DD]/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C959DD]" />
                <span>Focus: DevOps & Frontend</span>
              </div>
            </div>
          </ProfessionalCard>

          <div className="flex items-center gap-4">
            <a
              href={resumeDownloadPath}
              target="_blank"
              rel="noopener noreferrer"
              download={resumeFilename}
              className="font-gageda px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] text-white font-bold text-sm shadow-md hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] transition-all flex items-center gap-2 uppercase tracking-wider"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download Official Resume</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* SECTION DIVIDER */}
      <div className="gradient-divider" />

      {/* ── CORE FOCUS AREAS GRID ── */}
      <div className="space-y-6 pt-2">
        <h2 className="heading-section font-gageda text-2xl font-bold text-white text-center">
          CORE COMPETENCIES & DOMAIN INTEREST
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Frontend Card */}
          <ProfessionalCard glowColor="blue" hover className="space-y-3">
            <div className="p-3 rounded-xl bg-[#050816] border border-[#0894FF]/40 text-[#0894FF] w-max shadow-md">
              <Code2 className="w-6 h-6 text-[#0894FF]" />
            </div>
            <h3 className="font-gageda text-lg font-bold text-white">Frontend Engineering</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Expertise in HTML5, CSS3, Bootstrap, JavaScript (ES6+), React.js, Next.js, and Tailwind CSS. Dedicated to creating responsive, high-performance user interfaces with clean architecture.
            </p>
            <ul className="space-y-1 text-xs text-zinc-300 pt-2 font-mono">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0894FF]" /> React.js Component Architecture</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0894FF]" /> Next.js & Server Rendering</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#0894FF]" /> Mobile & Cross-Browser Optimization</li>
            </ul>
          </ProfessionalCard>

          {/* DevOps & Cloud Card */}
          <ProfessionalCard glowColor="purple" hover className="space-y-3">
            <div className="p-3 rounded-xl bg-[#050816] border border-[#C959DD]/40 text-[#C959DD] w-max shadow-md">
              <Cloud className="w-6 h-6 text-[#C959DD]" />
            </div>
            <h3 className="font-gageda text-lg font-bold text-white">DevOps & AWS Infrastructure</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Hands-on experience configuring Ubuntu Linux servers, deploying instances on AWS EC2, managing Git version control workflows, containerizing applications with Docker, and monitoring cloud uptime.
            </p>
            <ul className="space-y-1 text-xs text-zinc-300 pt-2 font-mono">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C959DD]" /> AWS EC2 & AMI Backups</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C959DD]" /> Docker Containerization</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#C959DD]" /> Linux Shell & System Uptime</li>
            </ul>
          </ProfessionalCard>

          {/* Digital Marketing Card */}
          <ProfessionalCard glowColor="pink" hover className="space-y-3">
            <div className="p-3 rounded-xl bg-[#050816] border border-[#FF2E54]/40 text-[#FF2E54] w-max shadow-md">
              <TrendingUp className="w-6 h-6 text-[#FF2E54]" />
            </div>
            <h3 className="font-gageda text-lg font-bold text-white">Digital Marketing & Growth</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Proficient in search engine optimization (SEO), pay-per-click advertising (PPC), social media content creation, and Generative Engine Optimization (GEO) to maximize organic reach and conversion rates.
            </p>
            <ul className="space-y-1 text-xs text-zinc-300 pt-2 font-mono">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF2E54]" /> Technical & On-Page SEO</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF2E54]" /> Meta Ads & Audience Analytics</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FF2E54]" /> Content & GEO Optimization</li>
            </ul>
          </ProfessionalCard>
        </div>
      </div>
    </div>
  );
}
