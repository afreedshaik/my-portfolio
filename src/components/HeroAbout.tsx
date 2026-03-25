import React from 'react';
import { motion } from 'motion/react';
import { PROFILE } from '../constants';
import { ArrowRight, ChevronRight, Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#3B82F6]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#3B82F6]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-[#A3A3A3] uppercase tracking-widest">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
              {PROFILE.name.split(' ').map((word, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl md:text-2xl text-[#A3A3A3] max-w-2xl font-medium leading-relaxed"
            >
              {PROFILE.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a 
                href="#projects"
                className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#3B82F6] hover:text-white transition-all duration-300 flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-transparent border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-4 bg-[#3B82F6]/20 blur-3xl rounded-full opacity-50" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 bg-[#111111]">
              <img 
                src={PROFILE.image} 
                alt={PROFILE.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/afreed/800/1000';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-[#3B82F6] uppercase tracking-widest">About Me</h2>
            <h3 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Engineering impact through <br />
              <span className="text-[#737373]">distributed intelligence.</span>
            </h3>
          </div>
          
          <div className="space-y-6 text-[#A3A3A3] text-lg leading-relaxed">
            <p>
              I am a Software Engineer based in the Bay Area, currently at Amazon (SDE II). 
              My expertise lies at the intersection of distributed systems, backend engineering, 
              and data platforms.
            </p>
            <p>
              With over 4.5 years of experience, I've focused on building scalable, 
              fault-tolerant microservices that handle millions of events per day. 
              I believe in the power of event-driven architectures and cloud-native 
              applications to solve complex real-world problems.
            </p>
            <p>
              At Amazon, I've been instrumental in reducing API latency by 35% and 
              maintaining 99.99% service availability for high-traffic production services. 
              I approach engineering with a focus on impact, scale, and a relentless 
              pursuit of system optimization.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6]/20 to-transparent blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-8 rounded-3xl border border-white/5 bg-[#111111] space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                <Terminal size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">Current Focus</h4>
                <p className="text-sm text-[#737373]">SDE II @ Amazon</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Distributed Systems Architecture",
                "Real-time Event Processing (Kafka)",
                "Cloud-Native Scalability (AWS/K8s)",
                "High-Availability Backend Services"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#A3A3A3]">
                  <ChevronRight size={14} className="text-[#3B82F6]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">4.5+</p>
                <p className="text-xs text-[#737373] uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">10M+</p>
                <p className="text-xs text-[#737373] uppercase tracking-widest mt-1">Daily Events</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
