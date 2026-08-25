import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { contactInfo, socialLinks } from '@/data/portfolio';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github,
  MessageSquare,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="contact"
      className="relative section-padding bg-[#050505] text-white overflow-hidden"
    >
      <div ref={ref} className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 text-sm font-medium mb-4"
          >
            <MessageSquare className="w-4 h-4 text-zinc-400" />
            Get In Touch
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Email</p>
                    <p className="font-semibold text-white">{contactInfo.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Phone</p>
                    <p className="font-semibold text-white">{contactInfo.phone}</p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-[#0A0A0A] border border-white/10 shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Location</p>
                    <p className="font-semibold text-white">{contactInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium text-zinc-300 mb-4">
                  Follow me on
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/30 transition-all shadow-md"
                    >
                      {link.icon === 'linkedin' && <Linkedin className="w-5 h-5 text-white" />}
                      {link.icon === 'github' && <Github className="w-5 h-5 text-white" />}
                      {link.icon === 'mail' && <Mail className="w-5 h-5 text-white" />}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-xl bg-[#0A0A0A] border border-white/10 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-zinc-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sanjay Muhilarasu"
                      required
                      className="bg-black border-white/10 text-white focus:border-white/30 focus:ring-0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-300">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Sanjay.muhilarasu@gmail.com"
                      required
                      className="bg-black border-white/10 text-white focus:border-white/30 focus:ring-0"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-zinc-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={4}
                      className="bg-black border-white/10 text-white focus:border-white/30 focus:ring-0 resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 rounded-lg bg-white text-black font-bold text-xs shadow-md hover:bg-zinc-200 transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin text-black" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 text-black" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
