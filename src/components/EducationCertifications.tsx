import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Trophy, Calendar, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-sky-600 dark:text-sky-400 mb-2">
            ACADEMICS, CERTS & AWARDS
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education, Certifications & Honors
          </p>
        </div>

        {/* Top Grid: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold border border-sky-200 dark:border-sky-800">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-sky-500" />
                      {edu.period}
                    </span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-700/60">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">
                Courses & Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        {cert.badge}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-1">
                        {cert.title}
                      </h4>
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-indigo-500" />
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Issued by <strong className="text-slate-900 dark:text-white">{cert.issuer}</strong>
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section: Achievements & Conference Papers */}
        <div className="space-y-6 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl text-slate-900 dark:text-white">
                Honors, Awards & Research Papers
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Conference presentations, competitions & technical events</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS_DATA.map((ach) => (
              <div
                key={ach.id}
                className="bg-white dark:bg-slate-800/90 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    {ach.award}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">{ach.date}</span>
                </div>

                <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                  {ach.title}
                </h4>

                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                  {ach.organization}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
