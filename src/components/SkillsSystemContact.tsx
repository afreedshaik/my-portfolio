import React from 'react';
import { motion } from 'motion/react';
import { SKILLS, SYSTEM_DESIGN, PROFILE } from '../constants';
import { Github, Linkedin, Mail, Send, ChevronRight, Layers, Cpu, Workflow } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Skills</h2>
          <h3 className="text-4xl font-bold tracking-tight text-white leading-tight">
            Engineering <span className="text-[#737373]">toolbox.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-[#111111] hover:border-[#3B82F6]/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                  <skill.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">{skill.category}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span key={j} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-[#A3A3A3] hover:text-white hover:bg-white/10 transition-colors duration-300">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SystemDesign() {
  return (
    <section id="system-design" className="py-32 px-6 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">System Design</h2>
          <h3 className="text-4xl font-bold tracking-tight text-white leading-tight">
            Architectural <span className="text-[#737373]">thinking.</span>
          </h3>
        </div>

        <div className="p-12 rounded-3xl border border-white/5 bg-[#111111] relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid md:grid-cols-[1fr_400px] gap-20 items-center relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-white">{SYSTEM_DESIGN.title}</h4>
                <p className="text-lg text-[#A3A3A3] leading-relaxed">
                  {SYSTEM_DESIGN.description}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">Trade-offs & Decisions</p>
                <div className="space-y-4">
                  {SYSTEM_DESIGN.tradeoffs.map((trade, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                      <p className="text-sm font-bold text-white">{trade.topic}</p>
                      <p className="text-sm text-[#A3A3A3] leading-relaxed">
                        {trade.decision}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="aspect-square rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 flex items-center justify-center relative group-hover:border-[#3B82F6]/50 transition-colors duration-500">
                <div className="grid grid-cols-2 gap-4 w-full h-full">
                  <div className="rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-[#3B82F6]">
                    <Layers size={32} />
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-[#3B82F6]">
                    <Cpu size={32} />
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-[#3B82F6]">
                    <Workflow size={32} />
                  </div>
                  <div className="rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-[#3B82F6]">
                    <Send size={32} />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center text-white shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                    <Workflow size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Contact</h2>
          <h3 className="text-4xl font-bold tracking-tight text-white leading-tight">
            Let's build <span className="text-[#737373]">together.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-[400px_1fr] gap-20">
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg text-[#A3A3A3] leading-relaxed">
                I'm always open to discussing distributed systems, backend architecture, 
                or new engineering opportunities.
              </p>
              
              <div className="space-y-4">
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-[#111111] hover:border-[#3B82F6]/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">Email</p>
                    <p className="text-sm font-medium text-white">{PROFILE.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-[#111111] hover:border-[#3B82F6]/30 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Send size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">Phone</p>
                    <p className="text-sm font-medium text-white">{PROFILE.phone}</p>
                  </div>
                </div>

                <a 
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-[#111111] hover:border-[#3B82F6]/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">LinkedIn</p>
                    <p className="text-sm font-medium text-white">afreedshaik183</p>
                  </div>
                </a>

                <a 
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-[#111111] hover:border-[#3B82F6]/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">GitHub</p>
                    <p className="text-sm font-medium text-white">afreedshaik</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="p-12 rounded-3xl border border-white/5 bg-[#111111]">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder:text-[#404040] focus:outline-none focus:border-[#3B82F6] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder:text-[#404040] focus:outline-none focus:border-[#3B82F6] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full px-0 py-4 bg-transparent border-b border-white/10 text-white placeholder:text-[#404040] focus:outline-none focus:border-[#3B82F6] transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="px-12 py-4 bg-white text-black font-bold rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300 flex items-center gap-2 group"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
