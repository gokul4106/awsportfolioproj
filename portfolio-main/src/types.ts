export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  status?: string;
  description: string[];
  skills: string[];
  type: 'cloud' | 'web' | 'arvr';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organization: string;
  date: string;
  description: string;
  award?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'ai' | 'cloud' | 'web' | 'hardware';
  subtitle: string;
  role: string;
  period?: string;
  description: string[];
  techStack: string[];
  highlights: string[];
  demoType: 'mockmate' | 'nexiq' | 'aws' | 'lamp';
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // percentage
    highlight?: boolean;
  }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
