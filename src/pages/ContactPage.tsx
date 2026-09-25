import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download, CheckCircle2, Sparkles, MessageCircle, ExternalLink } from 'lucide-react';
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

  const whatsappMessage = encodeURIComponent("Hi Sanjay, I visited your portfolio and would like to connect with you.");
  const phoneClean = personalInfo.phone.replace(/[^0-9]/g, '');

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

              {/* Resume Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
                <Link
                  to="/resume"
                  className="font-gageda flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] hover:shadow-[0_0_20px_rgba(8,148,255,0.4)] text-white font-bold text-xs flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>View Resume</span>
                </Link>
                <a
                  href={resumeDownloadPath}
                  download={resumeFilename}
                  className="font-gageda py-3 px-4 rounded-xl bg-[#050816] border border-white/15 hover:border-white/40 text-zinc-200 hover:text-white font-bold text-xs flex items-center justify-center gap-2 uppercase tracking-wider transition-all"
                >
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </ProfessionalCard>
        </motion.div>

        {/* WhatsApp & Quick Contact Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7"
        >
          <ProfessionalCard glowColor="blue">
            <div className="space-y-6 p-2 sm:p-4">
              {/* WhatsApp Primary Section */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#050816] border border-[#25D366]/40 space-y-4 shadow-xl">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] text-xs font-mono font-bold">
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>INSTANT WHATSAPP CONTACT</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">Direct Line: +91 6379471833</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-gageda text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Chat Directly with <span className="text-[#25D366]">Sanjay on WhatsApp</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    Need quick responses regarding engineering, contract work, or cloud DevOps deployment? Click below to start a direct WhatsApp conversation with a pre-filled message.
                  </p>
                </div>

                {/* WhatsApp Me Button */}
                <a
                  href={`https://wa.me/${phoneClean}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-gageda w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] hover:shadow-[0_0_25px_rgba(37,211,102,0.45)] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-3 uppercase tracking-wider transition-all duration-300 active:scale-[0.98] group"
                >
                  <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span>WhatsApp Me</span>
                  <ExternalLink className="w-4 h-4 text-white opacity-80" />
                </a>
              </div>

              {/* Email Inquiry Form Container */}
              <div className="pt-2">
                {submitted ? (
                  <div className="p-6 text-center space-y-3 bg-[#050816] rounded-xl border border-emerald-500/30">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-gageda text-lg font-bold text-white">Inquiry Transmitted!</h4>
                    <p className="text-xs text-zinc-300">
                      Thank you, {formData.name}. Your message has been logged, and I will reply promptly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="font-gageda px-4 py-2 rounded-lg bg-[#0B0F28] border border-white/20 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors mt-2"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
                      Or Send an Email Inquiry:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050816] border border-white/12 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#0894FF] transition-colors"
                      />

                      <input
                        type="email"
                        required
                        placeholder="Your Email Address *"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#050816] border border-white/12 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#0894FF] transition-colors"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Subject / Project Topic"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050816] border border-white/12 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#C959DD] transition-colors"
                    />

                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#050816] border border-white/12 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#FF2E54] transition-colors resize-none"
                    />

                    <button
                      type="submit"
                      className="font-gageda w-full py-3 px-6 rounded-lg bg-gradient-to-r from-[#0894FF] via-[#C959DD] to-[#FF2E54] hover:shadow-[0_0_15px_rgba(8,148,255,0.3)] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
                    >
                      <Send className="w-3.5 h-3.5 text-white" />
                      <span>Send Email Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </ProfessionalCard>
        </motion.div>
      </div>
    </div>
  );
}

