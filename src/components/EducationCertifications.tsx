import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Trophy, Calendar, Sparkles } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#020617] relative overflow-hidden text-slate-100 border-y border-slate-900">
      
      {/* Animated Background Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-sky-500/10 blur-[160px] rounded-full pointer-events-none animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-500/10 blur-[160px] rounded-full pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-950/90 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_25px_rgba(56,189,248,0.2)] backdrop-blur-xl animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin" />
            <span>ACADEMICS, CERTS & AWARDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_15px_rgba(56,189,248,0.3)]">
            Education, Certifications & Honors
          </h2>
        </div>

        {/* Top Grid: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-sky-950/90 border border-sky-500/40 text-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-black text-xl text-white tracking-tight">
                Academic Background
              </h3>
            </div>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="group relative bg-slate-900/70 backdrop-blur-2xl p-6 rounded-3xl border border-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-sky-500/60 hover:shadow-[0_15px_40px_-10px_rgba(56,189,248,0.3)] hover:-translate-y-1 transition-all duration-500 space-y-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <h4 className="font-extrabold text-base text-white group-hover:text-sky-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="px-3.5 py-1 rounded-full bg-sky-950/90 text-sky-300 text-xs font-bold border border-sky-500/40 shadow-sm shrink-0">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-300 relative z-10">
                    {edu.institution}
                  </p>

                  <div className="flex items-center justify-between pt-2 text-xs text-slate-400 font-medium border-t border-slate-800/80 relative z-10">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      {edu.period}
                    </span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-400 pt-2 border-t border-slate-800/80 leading-relaxed relative z-10">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="p-3.5 rounded-2xl bg-indigo-950/90 border border-indigo-500/40 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-black text-xl text-white tracking-tight">
                Courses & Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="group relative bg-slate-900/70 backdrop-blur-2xl p-6 rounded-3xl border border-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-indigo-500/60 hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.3)] hover:-translate-y-1 transition-all duration-500 space-y-3.5 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between gap-3 relative z-10">
                    <div>
                      <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-indigo-950/90 text-indigo-300 border border-indigo-500/40 shadow-sm">
                        {cert.badge}
                      </span>
                      <h4 className="font-extrabold text-base text-white mt-2 group-hover:text-indigo-300 transition-colors">
                        {cert.title}
                      </h4>
                    </div>

                    <span className="text-xs font-mono font-bold text-slate-400 flex items-center gap-1.5 shrink-0 bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-medium relative z-10">
                    Issued by <strong className="text-white font-bold">{cert.issuer}</strong>
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/80 relative z-10">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-slate-950 text-slate-300 border border-slate-800 shadow-sm transition-colors hover:border-indigo-500/50 hover:text-indigo-300"
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
        <div className="space-y-6 pt-10 border-t border-slate-800">
          <div className="flex items-center gap-3.5">
            <div className="p-3.5 rounded-2xl bg-amber-950/90 border border-amber-500/40 text-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-xl text-white tracking-tight">
                Honors, Awards & Research Papers
              </h3>
              <p className="text-xs font-medium text-slate-400 mt-0.5">Conference presentations, competitions & technical events</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS_DATA.map((ach) => (
              <div
                key={ach.id}
                className="group relative bg-slate-900/70 backdrop-blur-2xl p-6 rounded-3xl border border-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-amber-500/60 hover:shadow-[0_15px_40px_-10px_rgba(251,191,36,0.3)] hover:-translate-y-1 transition-all duration-500 space-y-4 overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-xl text-[10px] font-extrabold bg-amber-950/90 text-amber-300 border border-amber-500/40 shadow-sm">
                      {ach.award}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">{ach.date}</span>
                  </div>

                  <h4 className="font-extrabold text-sm text-white group-hover:text-amber-300 transition-colors">
                    {ach.title}
                  </h4>

                  <p className="text-xs font-bold text-sky-400">
                    {ach.organization}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 relative z-10">
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