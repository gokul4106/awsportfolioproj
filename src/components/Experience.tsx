import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Cloud, Globe, Layers } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(EXPERIENCES[0].id);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'cloud':
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case 'web':
        return <Globe className="w-5 h-5 text-indigo-500" />;
      default:
        return <Layers className="w-5 h-5 text-amber-500" />;
    }
  };

  const activeExp = EXPERIENCES.find((e) => e.id === activeTab) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-sky-600 dark:text-sky-400 mb-2">
            CAREER HISTORY
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hands-on Internships & Industry Exposure
          </p>
        </div>

        {/* Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeTab;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-white dark:bg-slate-800 border-sky-500 shadow-md ring-1 ring-sky-500/30'
                      : 'bg-slate-50/80 dark:bg-slate-800/40 border-slate-200/80 dark:border-slate-700/60 hover:bg-white dark:hover:bg-slate-800/70'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                    isActive ? 'bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400' : 'bg-slate-200/60 dark:bg-slate-700/60 text-slate-600 dark:text-slate-400'
                  }`}>
                    {getTypeIcon(exp.type)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-bold text-sm truncate ${isActive ? 'text-sky-600 dark:text-sky-400' : 'text-slate-900 dark:text-white'}`}>
                        {exp.role}
                      </h3>
                      {exp.status && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold">
                          {exp.status}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                      {exp.company}
                    </p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Details Card */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-800/90 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-md">
            
            {/* Role Header */}
            <div className="border-b border-slate-100 dark:border-slate-700/60 pb-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>{activeExp.role}</span>
                  <span className="text-sky-500">@</span>
                  <span className="text-sky-600 dark:text-sky-400">{activeExp.company}</span>
                </h3>

                {activeExp.status && (
                  <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800">
                    ● {activeExp.status}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-500" />
                  {activeExp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                  {activeExp.location}
                </span>
              </div>
            </div>

            {/* Description Points */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Responsibilities & Deliverables
              </h4>
              <ul className="space-y-3">
                {activeExp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                    <ChevronRight className="w-4 h-4 text-sky-500 flex-shrink-0 mt-1" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeExp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-50 dark:bg-sky-950/70 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60"
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
