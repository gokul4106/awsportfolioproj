import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Cloud, Globe, Layers, Sparkles, Terminal } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(EXPERIENCES[0].id);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'web':
        return <Globe className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  const activeExp = EXPERIENCES.find((e) => e.id === activeTab) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 bg-[#020617] relative overflow-hidden text-slate-100 border-y border-slate-900">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-xl">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>CAREER HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Hands-on Internships & Industry Exposure
          </h2>
        </div>

        {/* Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Tabs */}
          <div className="lg:col-span-4 space-y-3.5">
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 flex items-start gap-4 group relative overflow-hidden ${
                    isActive
                      ? 'bg-slate-900/90 border-sky-500/80 shadow-[0_10px_30px_-10px_rgba(56,189,248,0.3)] scale-[1.02]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  <div className={`p-3 rounded-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    isActive ? 'bg-sky-950 border border-sky-500/40 text-sky-400 shadow-inner' : 'bg-slate-950 border border-slate-800 text-slate-400'
                  }`}>
                    {getTypeIcon(exp.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className={`font-extrabold text-sm truncate transition-colors ${isActive ? 'text-sky-300' : 'text-white group-hover:text-sky-200'}`}>
                        {exp.role}
                      </h3>
                      {exp.status && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold shrink-0">
                          {exp.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 font-medium truncate mt-1">
                      {exp.company}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3 h-3 text-sky-400" />
                      {exp.period}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Details Card */}
          <div className="lg:col-span-8 bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-[0_12px_40px_rgb(0,0,0,0.4)] relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Role Header */}
            <div className="border-b border-slate-800 pb-6 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2.5 tracking-tight">
                  <span>{activeExp.role}</span>
                  <span className="text-sky-400">@</span>
                  <span className="bg-gradient-to-r from-sky-400 to-indigo-300 bg-clip-text text-transparent">{activeExp.company}</span>
                </h3>

                {activeExp.status && (
                  <span className="px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{activeExp.status}</span>
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  {activeExp.period}
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 shadow-inner">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {activeExp.location}
                </span>
              </div>
            </div>

            {/* Description Points */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Key Responsibilities & Deliverables
              </h4>
              <ul className="space-y-3.5">
                {activeExp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed bg-slate-950/50 p-3.5 rounded-2xl border border-slate-800/80 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <ChevronRight className="w-4 h-4 text-sky-400 flex-shrink-0 mt-1" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div className="pt-5 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeExp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-950 text-sky-300 border border-sky-500/30 shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-sky-400 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};