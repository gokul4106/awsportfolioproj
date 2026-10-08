import React from 'react';
import { Target, Cloud, CheckCircle2, Terminal, Code2, Briefcase, Server, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const stats = [
    { label: 'Web Projects', value: '10+', sub: 'Built during web development internship', icon: Code2, color: 'text-sky-500' },
    { label: 'Internships', value: '4', sub: 'Cloud, web & AR/VR', icon: Briefcase, color: 'text-indigo-500' },
    { label: 'AWS Services', value: '6', sub: 'EC2, S3, IAM, VPC, RDS & CloudFront', icon: Server, color: 'text-amber-500' },
    { label: 'Featured Projects', value: '3', sub: 'AI, cloud hosting & web', icon: Layers, color: 'text-emerald-500' },
  ];

  const highlights = [
    'Hands-on experience with AWS EC2, S3, IAM, VPC, RDS, and CloudFront.',
    'Working knowledge of Linux, Docker, Kubernetes, Jenkins, Git, and CI/CD.',
    'Built responsive websites and full-stack applications with React.js, Node.js, and TypeScript.',
    'Integrated the Google Gemini API into an AI-powered chatbot.',
    'Built web projects with responsive layouts, API integration, and cross-browser testing.'
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-sky-600 dark:text-sky-400 mb-2">
            ABOUT GOKUL M
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Building cloud, DevOps, and web development skills
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.label}</span>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">{stat.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800/90 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/60 pb-4">
              <div className="p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Background & Passion</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Final-year Computer Science and Engineering student</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Key Engineering Strengths
              </h4>
              <div className="space-y-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card - Target Career Goal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg space-y-5 relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Career Objective</h3>
                  <p className="text-xs text-sky-400">AWS Solutions Architecture & DevOps</p>
                </div>
              </div>

              <blockquote className="text-xs sm:text-sm text-slate-200 italic leading-relaxed border-l-2 border-sky-500 pl-3">
                "{PERSONAL_INFO.targetGoal}"
              </blockquote>

              <div className="pt-3 border-t border-slate-800/80 space-y-2.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Target Domain:</span>
                  <span className="font-semibold text-sky-300">AWS Cloud & DevOps</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Focus Areas:</span>
                  <span className="font-semibold text-emerald-300">Cloud infrastructure & deployment</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Relocation:</span>
                  <span className="font-semibold text-amber-300">Ready to Relocate / On-Site</span>
                </div>
              </div>
            </div>

            {/* Quick Tech Badges */}
            <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Core Tech Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {['AWS EC2', 'AWS S3', 'IAM', 'VPC', 'RDS', 'CloudFront', 'Docker', 'Kubernetes', 'Jenkins', 'Linux', 'Python', 'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Tailwind CSS', 'Bootstrap 5.3', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
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
