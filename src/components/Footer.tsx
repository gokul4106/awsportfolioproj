import React from 'react';
import { Cloud, ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-sky-500 text-white shadow-md">
                <Cloud className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-xl tracking-tight">GOKUL M</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Aspiring AWS Solutions Architect / DevOps Engineer based in Tiruppur, Tamil Nadu, India, with experience in AWS, web development, and AR/VR.
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="Email Gokul"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="Call Gokul"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              {PERSONAL_INFO.linkedin && (
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-extrabold text-white uppercase tracking-wider text-[11px]">
              Portfolio Navigation
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
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 flex items-center gap-2 transition-all"
            >
              <ArrowUp className="w-4 h-4 text-sky-400" />
              Back to Top
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/80 text-center md:flex md:items-center md:justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Gokul M. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center justify-center gap-1">
            Designed & Built with React, Tailwind CSS & AWS Cloud Inspiration
          </p>
        </div>

      </div>
    </footer>
  );
};
