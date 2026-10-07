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
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-300 selection:bg-sky-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAiChat={() => setIsAiChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
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

      {/* Footer */}
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
