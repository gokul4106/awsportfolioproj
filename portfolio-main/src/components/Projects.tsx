import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import {
  ExternalLink,
  Github,
  Award,
  Sparkles,
  Cloud,
  Cpu,
  Layers,
  CheckCircle2,
  Play,
  FileText,
  Download,
  Send,
  Sliders,
  Zap,
  Activity,
  X,
  RefreshCw,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeDemoProject, setActiveDemoProject] = useState<Project | null>(null);

  // Filter projects
  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs uppercase tracking-widest font-extrabold text-sky-600 dark:text-sky-400 mb-2">
            PORTFOLIO SHOWCASE
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Featured Projects & Interactive Demos
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Explore Gokul M's hands-on work across Cloud Computing, AI Applications, Full-Stack Web Development, and Embedded IoT Hardware.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: 'AI & Machine Learning' },
            { id: 'cloud', label: 'AWS & Cloud Infrastructure' },
            { id: 'hardware', label: 'IoT & Hardware' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === tab.id
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                      {project.subtitle}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-[10px] font-extrabold flex items-center gap-1 border border-amber-200 dark:border-amber-800 flex-shrink-0">
                      <Award className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description[0]}
                </p>

                {/* Highlights list */}
                <div className="space-y-1.5 pt-2">
                  {project.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-700/80 text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                <button
                  onClick={() => setActiveDemoProject(project)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Try Interactive Demo
                </button>

                <div className="flex items-center gap-2 text-xs">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="View Code on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      title="Live Link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Demo Modal */}
      {activeDemoProject && (
        <InteractiveDemoModal
          project={activeDemoProject}
          onClose={() => setActiveDemoProject(null)}
        />
      )}
    </section>
  );
};

// Sub-component: Interactive Demo Modal
const InteractiveDemoModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-sky-500/20 text-sky-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm">{project.title}</h3>
              <p className="text-[11px] text-slate-400">Interactive Simulation & Live Preview</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content based on demoType */}
        <div className="p-6">
          {project.demoType === 'mockmate' && <MockMateDemo />}
          {project.demoType === 'nexiq' && <NexiqChatbotDemo />}
          {project.demoType === 'aws' && <AwsCloudDemo />}
          {project.demoType === 'lamp' && <SmartLampDemo />}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400 font-medium">Built by Gokul M</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700"
          >
            Close Demo
          </button>
        </div>

      </div>
    </div>
  );
};

// 1. Mock Mate AI Interview Demo
const MockMateDemo: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [evaluated, setEvaluated] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;
    setEvaluated(true);
  };

  return (
    <div className="space-y-5 text-left">
      <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/80">
        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
          MOCK MATE QUESTION #1 (AWS & CLOUD ARCHITECTURE)
        </span>
        <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-1">
          "Explain the primary differences between Amazon S3 object storage and EC2 block storage, and when to use each."
        </h4>
      </div>

      {!evaluated ? (
        <form onSubmit={handleEvaluate} className="space-y-3">
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            Type your candidate answer below:
          </label>
          <textarea
            rows={3}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="e.g. S3 is object storage for unstructured data and static files, whereas EC2 uses EBS block storage for root volumes and OS files..."
            className="w-full p-3 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-sky-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            Submit for AI Feedback
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                ✅ AI Evaluation Score: 94 / 100
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-900 text-emerald-900 dark:text-emerald-200 text-[10px] font-bold">
                PASSED
              </span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300">
              <strong className="font-semibold">AI Feedback:</strong> Excellent breakdown! You correctly identified S3 as object storage ideal for static assets, and EC2/EBS for block storage needed by running operating systems.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setShowCertificate(true)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Generate Certificate of Completion
            </button>
            <button
              onClick={() => {
                setEvaluated(false);
                setAnswer('');
                setShowCertificate(false);
              }}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
            >
              Reset Question
            </button>
          </div>
        </div>
      )}

      {/* Auto-Generated Certificate Preview */}
      {showCertificate && (
        <div className="mt-4 p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-dashed border-amber-300 dark:border-amber-700 space-y-3 text-center">
          <div className="inline-block p-2 rounded-full bg-amber-100 dark:bg-amber-900/80 text-amber-600 dark:text-amber-300">
            <Award className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-slate-900 dark:text-white text-base">
            CERTIFICATE OF ACHIEVEMENT
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            This verifies that <strong className="font-bold text-slate-900 dark:text-white">Gokul M (Portfolio Candidate)</strong> successfully passed the AI Technical Interview on AWS Cloud Fundamentals.
          </p>
          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
            Verification ID: MOCK-MATE-AWS-2026-88912 | Issuer: Mock Mate AI Platform
          </div>
        </div>
      )}
    </div>
  );
};

// 2. Nexiq Chatbot Glassmorphism Demo
const NexiqChatbotDemo: React.FC = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am Nexiq Chatbot powered by Google Gemini API. How can I assist you with code or cloud questions today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input;
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: `Nexiq Chatbot response: Great question about "${userMsg}". Gokul M built this glassmorphism UI with real-time Gemini API streaming!`,
        },
      ]);
    }, 600);
  };

  return (
    <div className="space-y-4">
      {/* Chat Glassmorphism container */}
      <div className="h-60 overflow-y-auto p-4 rounded-xl bg-slate-900/90 text-white border border-slate-700/80 space-y-3 text-xs font-sans shadow-inner">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                m.role === 'user'
                  ? 'bg-sky-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Nexiq Chatbot something..."
          className="flex-1 p-2.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

// 3. AWS Cloud Simulator Demo
const AwsCloudDemo: React.FC = () => {
  const [latency, setLatency] = useState(24);
  const [cached, setCached] = useState(true);

  const testLatency = () => {
    setLatency(Math.floor(Math.random() * 15) + 18);
  };

  const toggleCache = () => {
    setCached(!cached);
    setLatency(cached ? 180 : 24);
  };

  return (
    <div className="space-y-4 text-left">
      <div className="p-4 rounded-xl bg-slate-900 text-slate-100 border border-slate-800 font-mono text-xs space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <span className="font-bold text-amber-400">AWS S3 + CloudFront Distribution</span>
          <span className="text-[10px] text-emerald-400">● SSL Active (TLS 1.3)</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
          <div className="p-2 rounded bg-slate-800 border border-slate-700">
            <span className="block text-slate-400">User Request</span>
            <span className="font-bold text-sky-400">Edge Location</span>
          </div>
          <div className="p-2 rounded bg-slate-800 border border-slate-700">
            <span className="block text-slate-400">CDN Cache</span>
            <span className={`font-bold ${cached ? 'text-emerald-400' : 'text-rose-400'}`}>
              {cached ? 'HIT (200 OK)' : 'MISS (Origin Fetch)'}
            </span>
          </div>
          <div className="p-2 rounded bg-slate-800 border border-slate-700">
            <span className="block text-slate-400">Origin</span>
            <span className="font-bold text-amber-400">S3 Bucket</span>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-between text-xs">
          <span>Measured Latency: <strong className="text-emerald-400">{latency} ms</strong></span>
          <span>Global Edges: <strong className="text-sky-400">450+ Points</strong></span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={testLatency}
          className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Test Request Latency
        </button>
        <button
          onClick={toggleCache}
          className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300"
        >
          {cached ? 'Purge CDN Cache (Origin Fetch)' : 'Enable Edge Cache (24ms)'}
        </button>
      </div>
    </div>
  );
};

// 4. Smart Lamp Simulator Demo
const SmartLampDemo: React.FC = () => {
  const [ambientLight, setAmbientLight] = useState(25); // 0 to 100
  const [motionDetected, setMotionDetected] = useState(true);

  // Calculate lamp brightness: if no motion, 0%; else inverse of ambient light
  const lampBrightness = motionDetected ? Math.max(0, 100 - ambientLight) : 0;

  return (
    <div className="space-y-5 text-left">
      {/* Visual Lamp Preview */}
      <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col items-center justify-center space-y-3 relative overflow-hidden">
        <div
          className="w-20 h-20 rounded-full transition-all duration-500 flex items-center justify-center shadow-2xl"
          style={{
            backgroundColor: `rgba(251, 191, 36, ${lampBrightness / 100})`,
            boxShadow: `0 0 ${lampBrightness / 2}px rgba(251, 191, 36, ${lampBrightness / 100})`,
          }}
        >
          <Zap className={`w-8 h-8 ${lampBrightness > 20 ? 'text-slate-900' : 'text-amber-500'}`} />
        </div>

        <div className="text-center">
          <h4 className="font-extrabold text-sm text-slate-100">Smart Sensor Lamp Status</h4>
          <p className="text-xs text-slate-400">
            Output Brightness: <strong className="text-amber-400">{lampBrightness}%</strong> | Power Usage: <strong className="text-emerald-400">{(lampBrightness * 0.12).toFixed(1)}W</strong>
          </p>
        </div>
      </div>

      {/* Interactive Controls */}
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
            <span>Ambient Room Light Sensor (LDR)</span>
            <span>{ambientLight}% ({ambientLight > 60 ? 'Bright Daylight' : 'Dim Room'})</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={ambientLight}
            onChange={(e) => setAmbientLight(Number(e.target.value))}
            className="w-full accent-amber-500"
          />
        </div>

        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
            PIR Motion Sensor Trigger
          </span>
          <button
            onClick={() => setMotionDetected(!motionDetected)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              motionDetected
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            {motionDetected ? '● Motion Detected' : 'Idle (No Motion)'}
          </button>
        </div>
      </div>
    </div>
  );
};
