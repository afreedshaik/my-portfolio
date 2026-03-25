import React from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE, PROJECTS } from '../constants';
import { Briefcase, Calendar, MapPin, Layers, Cpu, Workflow, ChevronRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Experience</h2>
          <h3 className="text-4xl font-bold tracking-tight text-white leading-tight">
            Building at <span className="text-[#737373]">scale.</span>
          </h3>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:hidden" />
              
              <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
                <div className="space-y-2">
                  <p className="text-sm font-bold text-white uppercase tracking-widest">{exp.period}</p>
                  <div className="flex items-center gap-2 text-sm text-[#737373]">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>

                <div className="p-8 rounded-3xl border border-white/5 bg-[#111111] hover:border-[#3B82F6]/30 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                      <h4 className="text-2xl font-bold text-white">{exp.role}</h4>
                      <p className="text-[#3B82F6] font-medium">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.slice(0, 4).map((t, j) => (
                        <span key={j} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-[#A3A3A3] uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.impact.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[#A3A3A3] leading-relaxed">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#3B82F6] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-4">
          <h2 className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">Projects</h2>
          <h3 className="text-4xl font-bold tracking-tight text-white leading-tight">
            Architecting <span className="text-[#737373]">distributed systems.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-white/5 bg-[#111111] hover:border-[#3B82F6]/50 transition-all duration-500 flex flex-col h-full"
            >
              <div className="mb-8 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-500">
                  {i === 0 ? <Workflow size={24} /> : i === 1 ? <Cpu size={24} /> : <Layers size={24} />}
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-[#3B82F6] transition-colors">{project.title}</h4>
                <p className="text-sm text-[#A3A3A3] leading-relaxed line-clamp-3">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">Architecture</p>
                  <p className="text-xs text-[#A3A3A3] italic leading-relaxed">
                    {project.architecture}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">Key Achievements</p>
                  <ul className="space-y-2">
                    {project.achievements.map((ach, j) => (
                      <li key={j} className="text-xs text-[#A3A3A3] flex gap-2">
                        <ChevronRight size={12} className="text-[#3B82F6] shrink-0 mt-0.5" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-[10px] font-bold text-[#737373] uppercase tracking-widest">
                    {t}
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
