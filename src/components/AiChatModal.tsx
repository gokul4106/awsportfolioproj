import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, User, RefreshCw, MessageSquare, ShieldCheck } from 'lucide-react';
import { QUICK_PROMPTS } from '../data/portfolioData';
import { ChatMessage } from '../types';

interface AiChatModalProps {
  onClose: () => void;
}

export const AiChatModal: React.FC<AiChatModalProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hello! I am Gokul M's AI Portfolio Assistant. Ask me about his AWS and DevOps skills, internships, projects, certifications, or availability.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
      });

      const data = await res.json();
      if (res.ok && data.response) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            content: data.response,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
      } else {
        throw new Error(data.error || 'Server error');
      }
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback response generator
      let fallbackText = "Gokul M is a final-year Computer Science and Engineering student aspiring to become an AWS Solutions Architect / DevOps Engineer. He has experience with AWS, web development, and AR/VR. Contact him at gokulsrimathi2006@gmail.com or +91 7604885302.";
      if (text.toLowerCase().includes('aws') || text.toLowerCase().includes('cloud')) {
        fallbackText = "Gokul completed a Cloud Computing internship at Prime Vector Private Limited, working with EC2, S3, IAM, VPC, and RDS. His skills also include CloudFront, cloud infrastructure setup, and monitoring.";
      } else if (text.toLowerCase().includes('project') || text.toLowerCase().includes('built')) {
        fallbackText = "Gokul's résumé highlights three projects: Nexiq Chatbot, an AI Mock Interview Platform (Mock Mate), and a Cloud-Hosted Personal Portfolio Website. His web development internship also included 10+ real-world projects.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: fallbackText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in">
      <div className="bg-slate-900 rounded-3xl max-w-lg w-full border border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.7)] flex flex-col h-[620px] max-h-[90vh] overflow-hidden my-auto relative">
        
        {/* Ambient Modal Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-600 text-white flex items-center justify-between shadow-lg relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-inner">
              <Sparkles className="w-5 h-5 text-sky-200 animate-pulse" />
            </div>
            <div>
              <h3 className="font-black text-base tracking-tight flex items-center gap-1.5">
                Ask Gokul AI <ShieldCheck className="w-4 h-4 text-sky-300" />
              </h3>
              <p className="text-[11px] text-sky-100 font-medium">Powered by Gemini AI Engine</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-sky-100 hover:text-white hover:bg-white/20 transition-all duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Prompts Bar */}
        <div className="p-3.5 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar relative z-10">
          <span className="text-slate-400 font-bold flex-shrink-0 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-sky-400" /> Suggestions:
          </span>
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-sky-950/80 border border-slate-800 hover:border-sky-500/50 text-slate-300 text-[11px] font-medium flex-shrink-0 transition-all duration-300 shadow-sm"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Messages Body */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4 text-xs font-sans relative z-10">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${
                m.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`p-2.5 rounded-2xl flex-shrink-0 shadow-md ${
                  m.role === 'user'
                    ? 'bg-gradient-to-br from-sky-500 to-indigo-600 text-white'
                    : 'bg-slate-800 text-sky-400 border border-slate-700'
                }`}
              >
                {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className="space-y-1 max-w-[82%]">
                <div
                  className={`p-4 rounded-2xl leading-relaxed whitespace-pre-wrap shadow-md ${
                    m.role === 'user'
                      ? 'bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-tr-none font-medium'
                      : 'bg-slate-800/90 text-slate-200 rounded-tl-none border border-slate-700/80 backdrop-blur-xl'
                  }`}
                >
                  {m.content}
                </div>
                <div
                  className={`text-[10px] text-slate-500 px-1 font-mono ${
                    m.role === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  {m.timestamp}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2.5 text-xs text-slate-400 p-3 rounded-2xl bg-slate-800/50 border border-slate-800 w-fit backdrop-blur-md">
              <RefreshCw className="w-4 h-4 animate-spin text-sky-400" />
              <span className="font-medium">Gokul AI is thinking...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-4 bg-slate-950 border-t border-slate-800 flex gap-2.5 relative z-10"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Gokul's experience, AWS, projects..."
            className="flex-1 px-4 py-3 text-xs rounded-2xl border border-slate-800 bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all shadow-inner"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-5 py-3 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:opacity-50 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-1.5 transition-all duration-300"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};