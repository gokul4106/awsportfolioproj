import React from 'react';
import { Cloud, ArrowRight, Download, Sparkles, Server, Shield, CheckCircle2, MapPin, Mail, Phone, Award } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpeg';
import { PERSONAL_INFO } from '../data/portfolioData';

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
              <span>AWS Solutions Architect / DevOps Engineer</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Gokul.M</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                Cloud & DevOps Enthusiast <span className="text-sky-500">|</span> Full-Stack Developer
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Final-year Computer Science and Engineering student with hands-on experience in AWS cloud services, Linux environments, Docker, Kubernetes, and full-stack web development. Experienced in building AWS-hosted applications and responsive UI experiences, with a focus on cloud infrastructure, deployment, and reliable product delivery.
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

          {/* Right Column - Profile Photo + Interactive AWS Cloud Architecture Snippet Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-800/80 p-4 shadow-lg shadow-slate-200/30 dark:shadow-black/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10" />
              <div className="relative flex items-center justify-center">
                <div className="overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-xl shadow-sky-200/30 dark:border-slate-800 dark:shadow-sky-950/30">
                  <img
                    src={profilePhoto}
                    alt="Gokul M profile"
                    className="h-50 w-50 object-cover object-top sm:h-60 sm:w-60"
                  />
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden group">
              {/* Decorative top bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 font-mono text-slate-400">gokul-aws-infrastructure.yml</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-400 font-mono text-[10px] font-bold">
                  LIVE AWS LAB
                </span>
              </div>

              {/* AWS Service Grid */}
              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Server className="w-4 h-4 text-sky-400" />
                    <div>
                      <p className="font-bold text-slate-200">AWS EC2 / VPC Subnet</p>
                      <p className="text-[10px] text-slate-400">Compute & Isolated Network</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                    ● Active
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Cloud className="w-4 h-4 text-amber-400" />
                    <div>
                      <p className="font-bold text-slate-200">AWS S3 + CloudFront CDN</p>
                      <p className="text-[10px] text-slate-400">Static Storage & Global Edge</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px]">
                    ● Sub-100ms
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-indigo-400" />
                    <div>
                      <p className="font-bold text-slate-200">AWS IAM & RDS Security</p>
                      <p className="text-[10px] text-slate-400">Role-Based Policy & Database</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px]">
                    Encrypted
                  </span>
                </div>
              </div>

              {/* Quick Resume Highlights */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400">B.E. CSE Grade:</span>
                  <span className="ml-1.5 font-bold text-white bg-slate-800 px-2 py-0.5 rounded">7.56 CGPA</span>
                </div>
                <div>
                  <span className="text-slate-400">Target Role:</span>
                  <span className="ml-1.5 font-bold text-sky-400">Amazon QA & AWS</span>
                </div>
              </div>

              {/* Award Ribbon */}
              <div className="mt-4 p-2.5 rounded-xl bg-sky-950/80 border border-sky-800/80 flex items-center gap-2 text-xs text-sky-300">
                <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="truncate">3rd Place Winner @ Sri Eshwar THIRAN 2026 AI Expo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
