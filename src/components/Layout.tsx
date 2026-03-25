import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { PROFILE } from '../constants';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'System Design', href: '#system-design' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-[#3B82F6] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter hover:text-white transition-colors"
          >
            AFREED<span className="text-[#3B82F6]">.</span>SHAIK
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-medium text-[#A3A3A3] hover:text-white transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <div className="h-4 w-px bg-white/10 mx-2" />
            <div className="flex items-center gap-4">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A3A3A3] hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#A3A3A3] hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-white/5 bg-[#0A0A0A] px-6 py-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-[#A3A3A3] hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-sm text-[#737373]">
              © {new Date().getFullYear()} Afreed Hussain Shaik. Built with React & Tailwind.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="text-[#737373] hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#737373] hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="text-[#737373] hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
