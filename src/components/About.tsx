import React from 'react';
import { Target, Cloud, CheckCircle2, Terminal, Code2, Briefcase, Server, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const stats = [
    { label: 'Web Projects', value: '10+', sub: 'Built during web development internship', icon: Code2, color: 'text-sky-400', glow: 'hover:border-sky-500/50 hover:shadow-[0_10px_30px_-10px_rgba(56,189,248,0.25)]' },
    { label: 'Internships', value: '4', sub: 'Cloud, web & AR/VR', icon: Briefcase, color: 'text-indigo-400', glow: 'hover:border-indigo-500/50 hover:shadow-[0_10px_30px_-10px_rgba(99,102,241,0.25)]' },
    { label: 'AWS Services', value: '6', sub: 'EC2, S3, IAM, VPC, RDS & CloudFront', icon: Server, color: 'text-amber-400', glow: 'hover:border-amber-500/50 hover:shadow-[0_10px_30px_-10px_rgba(251,191,36,0.25)]' },
    { label: 'Featured Projects', value: '3', sub: 'AI, cloud hosting & web', icon: Layers, color: 'text-emerald-400', glow: 'hover:border-emerald-500/50 hover:shadow-[0_10px_30px_-10px_rgba(52,211,153,0.25)]' },
  ];

  const highlights = [
    'Hands-on experience with AWS EC2, S3, IAM, VPC, RDS, and CloudFront.',
    'Working knowledge of Linux, Docker, Kubernetes, Jenkins, Git, and CI/CD.',
    'Built responsive websites and full-stack applications with React.js, Node.js, and TypeScript.',
    'Integrated the Google Gemini API into an AI-powered chatbot.',
    'Built web projects with responsive layouts, API integration, and cross-browser testing.'
  ];

  return (
    <section id="about" className="py-24 bg-[#020617] relative overflow-hidden text-slate-100 border-y border-slate-900">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-xl">
            <Cloud className="w-3.5 h-3.5 text-sky-400" />
            <span>ABOUT GOKUL M</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Building cloud, DevOps, and web development skills
          </h2>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`group p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${stat.glow}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{stat.label}</span>
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-4xl font-black text-white mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs font-medium text-slate-400 leading-relaxed">{stat.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-2xl p-8 rounded-3xl border border-slate-800 shadow-[0_12px_40px_rgb(0,0,0,0.4)] space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3.5 border-b border-slate-800 pb-5">
              <div className="p-3.5 rounded-2xl bg-sky-950 border border-sky-500/40 text-sky-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight">Background & Passion</h3>
                <p className="text-xs font-medium text-slate-400">Final-year Computer Science and Engineering student</p>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {PERSONAL_INFO.summary}
            </p>

            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Key Engineering Strengths
              </h4>
              <div className="space-y-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-200 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card - Target Career Goal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950/90 to-slate-900 text-white p-8 rounded-3xl border border-sky-500/40 shadow-[0_12px_40px_rgba(0,0,0,0.5)] space-y-6 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3.5">
                <div className="p-3.5 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg tracking-tight">Career Objective</h3>
                  <p className="text-xs font-medium text-sky-400">AWS Solutions Architecture & DevOps</p>
                </div>
              </div>

              <blockquote className="text-sm text-slate-200 italic leading-relaxed border-l-2 border-sky-400 pl-4 py-1.5 bg-slate-950/40 rounded-r-xl shadow-inner">
                "{PERSONAL_INFO.targetGoal}"
              </blockquote>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs">
                <div className="flex justify-between items-center text-slate-300 p-3 rounded-2xl bg-slate-950/50 border border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                  <span className="text-slate-400 font-medium">Target Domain:</span>
                  <span className="font-bold text-sky-300">AWS Cloud & DevOps</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 p-3 rounded-2xl bg-slate-950/50 border border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                  <span className="text-slate-400 font-medium">Focus Areas:</span>
                  <span className="font-bold text-emerald-300">Cloud infrastructure & deployment</span>
                </div>
                <div className="flex justify-between items-center text-slate-300 p-3 rounded-2xl bg-slate-950/50 border border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
                  <span className="text-slate-400 font-medium">Relocation:</span>
                  <span className="font-bold text-amber-300">Ready to Relocate / On-Site</span>
                </div>
              </div>
            </div>

            {/* Quick Tech Badges */}
            <div className="bg-slate-900/80 backdrop-blur-2xl p-6 rounded-3xl border border-slate-800 shadow-[0_12px_30px_rgb(0,0,0,0.3)] space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {['AWS EC2', 'AWS S3', 'IAM', 'VPC', 'RDS', 'CloudFront', 'Docker', 'Kubernetes', 'Jenkins', 'Linux', 'Python', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Tailwind CSS', 'Bootstrap 5.3', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-950/90 text-slate-300 border border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-sky-500/50 hover:text-sky-300 hover:scale-105"
                  >
                    {tech}
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