import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AiChatModal } from './components/AiChatModal';
import { Sparkles, FileText } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-sky-500 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/10" />
        <div className="absolute right-[-8%] top-[20%] h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/10" />
        <div className="absolute bottom-[-12%] left-[20%] h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.75),_transparent_40%)] dark:bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.18),_transparent_38%)]" />
      </div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAiChat={() => setIsAiChatOpen(true)}
      />

      <main className="relative">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAiChat={() => setIsAiChatOpen(true)}
        />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>

      <Footer />

      {/* Floating Action Trigger for AI Assistant */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsAiChatOpen(true)}
          className="p-3.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-xl shadow-sky-500/30 hover:scale-105 transition-transform flex items-center gap-2 group"
          title="Ask Gokul AI Assistant"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="hidden sm:inline text-xs font-bold pr-1">Ask Gokul AI</span>
        </button>
      </div>

      {/* Modals */}
      {isResumeOpen && <ResumeModal onClose={() => setIsResumeOpen(false)} />}
      {isAiChatOpen && <AiChatModal onClose={() => setIsAiChatOpen(false)} />}
    </div>
  );
}
