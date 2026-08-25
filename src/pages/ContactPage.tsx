import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo, socialLinks, resumeDownloadPath, resumeFilename } from '@/data';
import { ProfessionalCard } from '@/components/ui/ProfessionalCard';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="container-custom py-24 md:py-28 space-y-16 text-white overflow-x-clip">
      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center max-w-3xl mx-auto px-2"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0F28] border border-[#0894FF]/40 text-[#22D3EE] text-xs font-mono font-bold shadow-[0_0_15px_rgba(8,148,255,0.25)]">
          <Mail className="w-3.5 h-3.5 text-[#0894FF]" />
          <span>GET IN TOUCH</span>
        </div>

        <h1 className="heading-hero font-gageda font-extrabold tracking-tight text-white">
          Let&apos;s Build Something <span className="gradient-text">Exceptional Together</span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
          Open for full-time opportunities, DevOps consulting, frontend engineering roles, and technical collaborations.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {/* Contact Direct Details Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <ProfessionalCard glowColor="purple">
            <div className="space-y-6">
              <h3 className="font-gageda text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C959DD]" /> Contact Details
              </h3>

              <div className="space-y-3 sm:space-y-4 text-sm">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-[#050816] border border-white/10 hover:border-[#0894FF]/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#0B0F28] text-white border border-[#0894FF]/30 group-hover:border-[#0894FF] transition-colors flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#0894FF]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-zinc-400 block">Email Address</span>
                    <span className="text-xs font-bold text-white group-hover:text-[#0894FF] transition-colors break-all">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-[#050816] border border-white/10 hover:border-[#C959DD]/50 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-[#0B0F28] text-white border border-[#C959DD]/30 group-hover:border-[#C959DD] transition-colors flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C959DD]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-zinc-400 block">Direct Phone</span>
                    <span className="text-xs font-bold text-white group-hover:text-[#C959DD] transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-[#050816] border border-white/10">
                  <div className="p-2.5 rounded-lg bg-[#0B0F28] text-white border border-[#FF2E54]/30 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF2E54]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-zinc-400 block">Location</span>
                    <span className="text-xs font-bold text-white">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Professional Networks:
                </h4>
                <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-gageda flex-1 min-w-[90px] flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 px-3 rounded-lg bg-[#050816] border border-white/12 hover:border-[#0894FF]/50 text-xs font-bold text-zinc-200 hover:text-white transition-all uppercase tracking-wider"
                    >
                      {social.iconName === 'Github' && <Github className="w-4 h-4 text-[#0894FF]" />}
                      {social.iconName === 'Linkedin' && <Linkedin className="w-4 h-4 text-[#C959DD]" />}
                      {social.iconName === 'Mail' && <Mail className="w-4 h-4 text-[#FF2E54]" />}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={resumeDownloadPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={resumeFilename}
                  className="font-gageda w-full py-3 sm:py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] text-white font-bold text-xs flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </ProfessionalCard>
        </motion.div>

        {/* Interactive Contact Form Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <ProfessionalCard glowColor="blue">
            {submitted ? (
              <div className="p-8 sm:p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-gageda text-2xl font-bold text-white">Message Transmitted!</h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Your inquiry has been received, and I will get back to you promptly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="font-gageda px-6 py-2.5 rounded-lg bg-[#0B0F28] border border-white/20 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-1">
                  <h3 className="font-gageda text-lg sm:text-xl font-bold text-white">Send Direct Communication</h3>
                  <p className="text-xs text-zinc-400">
                    Fill in the details below to start a conversation regarding engineering, cloud hosting, or collaborations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-zinc-300">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-white/12 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#0894FF] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-zinc-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-white/12 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#0894FF] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-zinc-300">Topic / Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry, Cloud Deployment, Job Opportunity..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-white/12 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#C959DD] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-zinc-300">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your requirements or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#050816] border border-white/12 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#FF2E54] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="font-gageda w-full py-3.5 px-8 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </ProfessionalCard>
        </motion.div>
      </div>
    </div>
  );
}
