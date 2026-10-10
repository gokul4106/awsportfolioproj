import React from 'react';
import { ArrowRight, Download, Sparkles, CheckCircle2, MapPin, Mail, Phone, Cloud, ShieldCheck, Terminal, Cpu, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpeg';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAiChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAiChat }) => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#020617] text-slate-100">
      
      {/* Animated Background Glowing Orbs & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Floating Animated Background Blobs */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[400px] bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-transparent blur-[140px] rounded-full pointer-events-none animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-cyan-500/15 blur-[150px] rounded-full pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[300px] bg-purple-500/10 blur-[160px] rounded-full pointer-events-none animate-[pulse_7s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column - Main Info with Glass Card Container */}
          <div className="lg:col-span-7 space-y-6 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
            
            {/* Subtle Inner Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* AWS Cloud & DevOps Elite Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-wide shadow-lg shadow-sky-950/50 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <Cloud className="w-3.5 h-3.5 text-sky-400" />
              <span>Aspiring AWS Solutions Architect & DevOps Engineer</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">Gokul M</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-sky-200/90 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{PERSONAL_INFO.headline}</span>
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed font-normal border-l-2 border-sky-500/40 pl-4 py-1">
              {PERSONAL_INFO.summary}
            </p>

            {/* Availability Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Work Modes:
              </span>
              {PERSONAL_INFO.availability.map((status, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-slate-950/60 text-slate-200 border border-slate-800 shadow-sm flex items-center gap-1.5 backdrop-blur-md transition-all hover:border-sky-500/50 hover:bg-slate-900"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  {status}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-xl shadow-sky-500/25 hover:-translate-y-0.5 transition-all flex items-center gap-2.5 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <button
                onClick={onOpenAiChat}
                className="px-5 py-3.5 rounded-xl font-bold text-sm text-sky-200 bg-sky-950/70 hover:bg-sky-900/80 border border-sky-500/40 shadow-lg hover:-translate-y-0.5 flex items-center gap-2.5 transition-all backdrop-blur-xl"
              >
                <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
                <span>Ask AI Assistant</span>
              </button>

              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-xl font-bold text-sm text-slate-200 bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-lg hover:-translate-y-0.5 flex items-center gap-2.5 transition-all backdrop-blur-xl"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Print Resume</span>
              </button>
            </div>

            {/* Contact Quick Info Bar */}
            <div className="pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/60 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span className="truncate">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/60 backdrop-blur-sm">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-sky-300 transition-colors truncate">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950/40 border border-slate-800/60 backdrop-blur-sm">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-sky-300 transition-colors">
                  {PERSONAL_INFO.phoneFormatted}
                </a>
              </div>
            </div>

          </div>

          {/* Profile Photo - Elite Studio Look */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md group animate-[float_6s_ease-in-out_infinite]">
              {/* Vibrant Backglow Frame */}
              <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-sky-500/40 via-indigo-600/30 to-purple-600/40 blur-2xl opacity-80 group-hover:opacity-100 transition duration-700 animate-pulse" />
              
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border-2 border-sky-500/40 bg-slate-900 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:border-sky-400">
                <img
                  src={profilePhoto}
                  alt="Portrait of Gokul M"
                  className="h-full w-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-95" />
                
                {/* Top Floating Badge */}
                <div className="absolute left-4 top-4 rounded-full border border-sky-500/40 bg-slate-950/80 px-4 py-2 text-xs font-semibold text-sky-200 shadow-xl backdrop-blur-xl flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>AWS Cloud &amp; DevOps</span>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent pt-14">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" /> Computer Science Engineer
                  </p>
                  <p className="mt-1 text-2xl font-black tracking-tight text-white">Gokul M</p>
                  <p className="mt-1 text-sm text-slate-300 font-medium">Building secure, reliable cloud solutions</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};