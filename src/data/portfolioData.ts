import { Experience, Education, Certification, Achievement, Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Gokul M',
  headline: 'Aspiring AWS Solutions Architect / DevOps Engineer',
  phone: '7604885302',
  phoneFormatted: '+91 7604885302',
  email: 'gokulsrimathi2006@gmail.com',
  location: 'Tiruppur, Tamil Nadu, India',
  availability: ['Open to Remote', 'Open to Relocate', 'Open to On-Site'],
  targetGoal: 'Seeking a Cloud / DevOps role to build scalable, secure, and reliable cloud solutions.',
  summary: 'Final-year Computer Science and Engineering student and aspiring AWS Solutions Architect / DevOps Engineer with hands-on experience in AWS cloud services (EC2, S3, IAM, VPC, RDS, CloudFront) and working knowledge of Linux, Docker, Kubernetes, Jenkins, and Git. Built and deployed AWS-hosted static websites and full-stack web applications using Python, JavaScript, React.js, and Node.js, with internships in cloud computing, web development, and AR/VR. Skilled in cloud infrastructure setup, deployment, monitoring, and API integration, with a keen eye for detail, quality, and problem-solving.',
  github: 'https://github.com/gokul4106',
  linkedin: '',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-apexplanet',
    role: 'Web Development Intern',
    company: 'ApexPlanet Software Pvt. Ltd.',
    location: 'Gaya, Bihar, India',
    period: "Jul '26 — Aug '26",
    type: 'web',
    description: [
      'Completed a 45-day web development internship, building 10+ real-world projects using HTML5, CSS3, and JavaScript.',
      'Developed a personal portfolio website with responsive layouts using Flexbox and CSS Grid, plus a contact form with JavaScript validation.',
      'Built a dynamic To-Do app with localStorage, an interactive quiz, a real-time joke generator using the Fetch API, and a full-stack e-commerce product listing page with filtering and sorting.',
      'Practiced DOM manipulation, responsive design, REST API integration, and cross-browser compatibility testing.'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Flexbox', 'CSS Grid', 'DOM', 'Fetch API', 'REST APIs']
  },
  {
    id: 'exp-cloud',
    role: 'Cloud Computing Intern',
    company: 'Prime Vector Private Limited',
    location: 'Hosur, Tamil Nadu, India',
    period: "Jun '26 — Jul '26",
    type: 'cloud',
    description: [
      'Gained hands-on experience with AWS EC2, S3, IAM, VPC, and RDS through practical cloud computing training.',
      'Practiced cloud infrastructure setup, deployment, and monitoring in a live project environment.',
      'Collaborated with a technical team to apply cloud concepts to real-world business use cases.'
    ],
    skills: ['AWS EC2', 'AWS S3', 'IAM', 'VPC', 'RDS', 'Cloud Infrastructure']
  },
  {
    id: 'exp-arvr',
    role: 'AR/VR Development Intern',
    company: 'Unity Based Development',
    location: 'Location not listed',
    period: 'Dates not listed',
    type: 'arvr',
    description: [
      'Developed immersive augmented and virtual reality applications using Unity.',
      'Designed interactive 3D environments and implemented core game mechanics.',
      'Explored real-time rendering and immersive technologies.'
    ],
    skills: ['Unity', 'AR/VR', '3D Environments', 'Game Mechanics', 'Real-Time Rendering']
  },
  {
    id: 'exp-sbs',
    role: 'Front-End Web Development Trainee (Bootstrap 5.3)',
    company: 'SBS Technologies Private Limited',
    location: 'Erode, India',
    period: "Jun '25 — Jul '25",
    type: 'web',
    description: [
      'Built responsive, mobile-first web pages using HTML5, CSS3, and Bootstrap 5.3.',
      'Applied Bootstrap’s grid system and component-based design to write clean, scalable, reusable code.',
      'Improved UI consistency and accessibility, enhancing how users interact with the page.',
      'Developed Nexiq, an AI-powered chatbot using JavaScript and the Google Gemini API, deployed on GitHub Pages.'
    ],
    skills: ['HTML5', 'CSS3', 'Bootstrap 5.3', 'JavaScript', 'Google Gemini API', 'Responsive Design']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu-be',
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'Akshaya College of Engineering and Technology',
    period: "Sep '23 — Present",
    grade: 'CGPA: 7.56',
    details: 'Coimbatore, Tamil Nadu, India'
  },
  {
    id: 'edu-hsc',
    degree: 'HSC',
    institution: 'Govt Boys Higher Secondary School',
    period: "Jun '22 — Apr '23",
    grade: '76%',
    details: 'Perundurai, Erode, Tamil Nadu, India'
  },
  {
    id: 'edu-sslc',
    degree: 'SSLC',
    institution: 'Bharathi Matriculation Higher Secondary School',
    period: "Jul '20 — Apr '21",
    grade: '80%',
    details: 'Vijayamangalam, Erode, Tamil Nadu, India'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-flutter',
    title: 'Introduction to Flutter Course',
    issuer: 'Simplilearn',
    date: "Apr '25",
    badge: 'Course Completion',
    skills: ['Flutter']
  },
  {
    id: 'cert-bootstrap',
    title: 'Bootstrap 5.3 Certification',
    issuer: 'SBS Technologies',
    date: "Jun '25",
    badge: 'Certification',
    skills: ['Bootstrap 5.3', 'Responsive Web Design']
  },
  {
    id: 'cert-aws',
    title: 'AWS Solutions Architect - Fundamentals of Architecting on AWS',
    issuer: 'Amazon Web Services (AWS)',
    date: "Jul '26",
    badge: 'Course Completion',
    skills: ['AWS', 'Cloud Architecture']
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-mockmate',
    title: 'National Conference Paper Presentation — AI Mock Mate',
    event: 'ICSSR-SRC Sponsored National Conference on Artificial Intelligence',
    organization: 'K.S. Rangasamy College of Technology',
    date: "Oct '25",
    award: 'Paper Presenter',
    description: 'Presented the research paper “AI Mock Mate,” showcasing practical AI applications for sustainable socio-economic development.'
  },
  {
    id: 'ach-thiran',
    title: 'AI Innovators Expo',
    event: 'Sri Eshwar THIRAN 2026',
    organization: 'Sri Eshwar College of Engineering',
    date: "Oct '25",
    award: 'Third Place',
    description: 'Secured third place in the AI Innovators Expo, demonstrating AI-based solutions and technical problem-solving.'
  },
  {
    id: 'ach-udhayam',
    title: "Paper Presentation — UDHAYAM'26",
    event: 'Intercollegiate Technical and Cultural Fest',
    organization: 'Kalaignar Karunanidhi Institute of Technology',
    date: '2026',
    award: 'Presenter',
    description: 'Recognized for participating in the Paper Presentation event, demonstrating research, presentation, and communication skills.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-nexiq',
    title: 'Nexiq Chatbot',
    category: 'ai',
    subtitle: 'SBS Technologies | Jun 2025 — Jul 2025',
    role: 'Web Development Project',
    period: "Jun '25 — Jul '25",
    featured: true,
    description: [
      'Developed an AI-powered chatbot using HTML5, CSS3, and JavaScript, integrated with the Google Gemini API for real-time responses.',
      'Implemented file uploads, a dark/light theme toggle, and a glassmorphism interface.',
      'Deployed the chatbot on GitHub Pages.'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Google Gemini API', 'GitHub Pages'],
    highlights: [
      'Integrated Google Gemini API for real-time chatbot responses.',
      'Added file uploads and a dark/light theme toggle.',
      'Deployed the project on GitHub Pages.'
    ],
    demoType: 'nexiq'
  },
  {
    id: 'proj-portfolio',
    title: 'Cloud-Hosted Personal Portfolio Website',
    category: 'cloud',
    subtitle: 'AWS | UpSkill Campus',
    role: 'Personal Project',
    period: "Jun '26",
    featured: true,
    description: [
      'Developed a responsive static portfolio website and deployed it using Amazon S3 and CloudFront on the AWS Free Tier.',
      'Applied least-privilege IAM access, HTTPS enforcement, and CDN-based performance optimization.',
      'Managed source code with Git and GitHub for version control.'
    ],
    techStack: ['Amazon S3', 'Amazon CloudFront', 'AWS IAM', 'HTTPS', 'Git', 'GitHub'],
    highlights: [
      'Hosted a responsive static website on Amazon S3 with CloudFront.',
      'Applied least-privilege access and HTTPS enforcement.',
      'Used Git and GitHub for source control.'
    ],
    demoType: 'aws'
  },
  {
    id: 'proj-mockmate',
    title: 'AI Mock Interview Platform (Mock Mate)',
    category: 'ai',
    subtitle: 'Personal Project',
    role: 'Full-Stack Developer',
    period: 'Present',
    featured: true,
    description: [
      'Built a full-stack, AI-powered mock interview preparation platform using React.js, Node.js, TypeScript, and Tailwind CSS.',
      'Implemented an auto-generated certificate of achievement with dynamic data and PDF export.'
    ],
    techStack: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    highlights: [
      'Full-stack interview preparation platform.',
      'Generates certificates with dynamic candidate data.',
      'Exports certificates to PDF.'
    ],
    demoType: 'mockmate'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Cloud & DevOps',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS EC2, S3, IAM, VPC, RDS & CloudFront', highlight: true },
      { name: 'Cloud Infrastructure Setup & Monitoring', highlight: true },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Jenkins' },
      { name: 'CI/CD' },
      { name: 'Linux' }
    ]
  },
  {
    category: 'Programming & Web',
    iconName: 'Code',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'HTML5 & CSS3' },
      { name: 'Bootstrap 5.3' },
      { name: 'Tailwind CSS' },
      { name: 'RESTful API Integration' }
    ]
  },
  {
    category: 'Tools & Platforms',
    iconName: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Unity (AR/VR Development)' }
    ]
  },
  {
    category: 'Languages',
    iconName: 'Terminal',
    skills: [
      { name: 'English' },
      { name: 'Tamil' }
    ]
  }
];

export const QUICK_PROMPTS = [
  'Tell me about Gokul’s AWS and DevOps skills',
  'What projects has Gokul built?',
  'What internships has Gokul completed?',
  'What certifications does Gokul hold?'
];
