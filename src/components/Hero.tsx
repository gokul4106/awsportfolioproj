import React from 'react';
import { ArrowRight, Download, Sparkles, CheckCircle2, MapPin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/profile-photo.jpeg';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAiChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAiChat }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 dark:bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Info */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* AWS Cloud Badge Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 dark:bg-sky-950/80 border border-sky-300/80 dark:border-sky-800/80 text-sky-800 dark:text-sky-300 text-xs font-bold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>Aspiring AWS Solutions Architect & DevOps Engineer</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Gokul M</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.summary}
            </p>

            {/* Availability Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">Work Modes:</span>
              {PERSONAL_INFO.availability.map((status, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                  {status}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenAiChat}
                className="px-5 py-3 rounded-xl font-bold text-sm text-sky-900 dark:text-sky-200 bg-sky-100/90 dark:bg-sky-950/80 hover:bg-sky-200 dark:hover:bg-sky-900/80 border border-sky-300 dark:border-sky-800 shadow-sm flex items-center gap-2 transition-all"
              >
                <Sparkles className="w-4 h-4 text-sky-500" />
                <span>Ask AI Assistant</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/90 border border-slate-300 dark:border-slate-700 shadow-sm flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Print Resume</span>
              </button>
            </div>

            {/* Contact Quick Info Bar */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <span className="truncate">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline truncate">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">
                  {PERSONAL_INFO.phoneFormatted}
                </a>
              </div>
            </div>

          </div>

          {/* Profile Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sky-400/30 via-indigo-500/20 to-violet-500/30 blur-xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 dark:border-slate-700 bg-slate-200 dark:bg-slate-800 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Portrait of Gokul M"
                  className="h-full w-full object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />
                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-slate-950/55 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md">
                  AWS Cloud &amp; DevOps
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Computer Science Engineer</p>
                  <p className="mt-1 text-2xl font-extrabold tracking-tight">Gokul M</p>
                  <p className="mt-1 text-sm text-slate-200">Building secure, reliable cloud solutions</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
