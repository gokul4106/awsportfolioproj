import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cloud, Code, Terminal, Wrench, Search, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-sky-500" />;
      case 'Code':
        return <Code className="w-5 h-5 text-indigo-500" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-500" />;
      default:
        return <Wrench className="w-5 h-5 text-emerald-500" />;
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-sky-600 dark:text-sky-400 mb-2">
            TECHNICAL PROFICIENCY
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Cloud, Full-Stack & Tooling Matrix
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            A comprehensive overview of Gokul M's technical capabilities, cloud service mastery, and programming competencies.
          </p>
        </div>

        {/* Quick Search */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search skills e.g., AWS, Python, React, Linux..."
            className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const filteredSkills = cat.skills.filter((s) =>
              s.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-md space-y-5"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/60 pb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {filteredSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          {skill.highlight && <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />}
                          {skill.name}
                        </span>
                        <span className="font-semibold text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
