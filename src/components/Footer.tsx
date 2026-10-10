import React from 'react';
import { Cloud, ArrowUp, Github, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] text-slate-300 border-t border-slate-900 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-950 border border-sky-500/40 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="font-black text-white text-xl tracking-tight">GOKUL M</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              Aspiring AWS Solutions Architect / DevOps Engineer based in Tiruppur, Tamil Nadu, India, with experience in AWS, web development, and AR/VR.
            </p>

            <div className="flex items-center gap-3 text-xs">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:text-sky-300 text-slate-300 transition-all shadow-sm"
                title="Email Gokul"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-300 text-slate-300 transition-all shadow-sm"
                title="Call Gokul"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 hover:text-sky-300 text-slate-300 transition-all shadow-sm"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              {PERSONAL_INFO.linkedin && (
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-300 text-slate-300 transition-all shadow-sm"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-sky-400" /> Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-slate-400 font-medium">
              <a href="#about" className="hover:text-sky-400 transition-colors">About Gokul</a>
              <a href="#experience" className="hover:text-sky-400 transition-colors">Work Experience</a>
              <a href="#projects" className="hover:text-sky-400 transition-colors">Projects & Demos</a>
              <a href="#skills" className="hover:text-sky-400 transition-colors">Skills Matrix</a>
              <a href="#education" className="hover:text-sky-400 transition-colors">Education & Awards</a>
              <a href="#contact" className="hover:text-sky-400 transition-colors">Contact Form</a>
            </div>
          </div>

          {/* Back to top button */}
          <div className="md:col-span-3 flex md:justify-end items-center">
            <button
              onClick={scrollToTop}
              className="px-4 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-bold border border-slate-800 hover:border-sky-500/50 flex items-center gap-2 transition-all shadow-md group"
            >
              <ArrowUp className="w-4 h-4 text-sky-400 group-hover:-translate-y-0.5 transition-transform" />
              Back to Top
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/80 text-center md:flex md:items-center md:justify-between text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Gokul M. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center justify-center gap-1 text-slate-400">
            Designed & Built with React, Tailwind CSS & AWS Cloud Inspiration
          </p>
        </div>

      </div>
    </footer>
  );
};