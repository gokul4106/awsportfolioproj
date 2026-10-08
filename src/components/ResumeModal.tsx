import React, { useRef } from 'react';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_DATA, CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `
${PERSONAL_INFO.name}
${PERSONAL_INFO.headline}
Phone: ${PERSONAL_INFO.phoneFormatted} | Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
${PERSONAL_INFO.availability.join(' • ')}

SUMMARY:
${PERSONAL_INFO.summary}

EXPERIENCE:
${EXPERIENCES.map(e => `${e.role} | ${e.company} (${e.period})\n${e.description.map(d => `- ${d}`).join('\n')}`).join('\n\n')}

EDUCATION:
${EDUCATION_DATA.map(e => `${e.degree} - ${e.institution} (${e.period}) [${e.grade}]`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS_DATA.map(c => `${c.title} - ${c.issuer} (${c.date})`).join('\n')}

ACHIEVEMENTS:
${ACHIEVEMENTS_DATA.map(a => `${a.title} - ${a.organization} (${a.date}): ${a.description}`).join('\n')}

PROJECTS:
${PROJECTS_DATA.map(p => `${p.title}: ${p.description.join(' ')}`).join('\n\n')}

SKILLS:
${SKILL_CATEGORIES.map(c => `${c.category}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}
`;
    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 rounded-2xl max-w-4xl w-full border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        
        {/* Modal Controls Header */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm tracking-wide">GOKUL M - OFFICIAL RESUME</span>
            <span className="px-2 py-0.5 rounded bg-sky-900 text-sky-300 text-[10px] font-mono font-semibold">PDF PRINT READY</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied Text!' : 'Copy Plain Text'}
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans space-y-6 text-slate-900 dark:text-slate-100 print:p-0 print:overflow-visible" ref={printRef}>
          
          {/* Header */}
          <div className="text-center space-y-2 border-b-2 border-slate-800 dark:border-slate-300 pb-4">
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-slate-900 dark:text-white">
              GOKUL M
            </h1>
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {PERSONAL_INFO.headline}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span>📞 {PERSONAL_INFO.phoneFormatted}</span>
              <span>✉️ {PERSONAL_INFO.email}</span>
              <span>📍 {PERSONAL_INFO.location}</span>
            </div>
            <p className="text-[11px] font-semibold text-sky-600 dark:text-sky-400">
              {PERSONAL_INFO.availability.join(' • ')}
            </p>
          </div>

          {/* Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              SUMMARY
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              EXPERIENCE
            </h2>
            <div className="space-y-3">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline font-bold">
                    <span>{exp.role} <span className="font-normal text-slate-600 dark:text-slate-400">| {exp.company}, {exp.location}</span></span>
                    <span className="font-mono text-[11px] text-slate-600 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700 dark:text-slate-300 pl-1">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              EDUCATION
            </h2>
            <div className="space-y-2 text-xs">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline">
                  <div>
                    <strong className="font-bold">{edu.degree}</strong> | <span className="italic">{edu.institution}</span>
                  </div>
                  <div className="text-right font-mono text-[11px]">
                    <span className="font-bold text-sky-600 dark:text-sky-400 mr-2">{edu.grade}</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-xs space-y-1 text-slate-700 dark:text-slate-300 pl-1">
              {CERTIFICATIONS_DATA.map((cert) => (
                <li key={cert.id}>
                  <strong>{cert.title}</strong>, {cert.issuer} — <span className="font-mono">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              ACHIEVEMENTS
            </h2>
            <div className="space-y-1.5 text-xs">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div key={ach.id}>
                  <div className="flex justify-between font-bold">
                    <span>{ach.title} | <span className="italic font-normal">{ach.organization}</span></span>
                    <span className="font-mono text-[11px] text-slate-500">{ach.date}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 pl-2">
                    • {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              PROJECTS
            </h2>
            <div className="space-y-2 text-xs">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id}>
                  <strong className="font-bold">{p.title}</strong> | <span className="italic text-slate-600 dark:text-slate-400">{p.subtitle}</span>
                  <ul className="list-disc list-inside text-[11px] text-slate-700 dark:text-slate-300 pl-2 space-y-0.5">
                    {p.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-700 pb-0.5">
              SKILLS
            </h2>
            <div className="text-xs space-y-1">
              {SKILL_CATEGORIES.map((c) => (
                <div key={c.category}>
                  <strong className="font-bold">{c.category}: </strong>
                  <span className="text-slate-700 dark:text-slate-300">
                    {c.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
