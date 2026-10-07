import { Experience, Education, Certification, Achievement, Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Gokul M',
  headline: 'Software Engineer | Cloud Computing (AWS) Enthusiast',
  phone: '7604885302',
  phoneFormatted: '+91 7604885302',
  email: 'gokulsrimathi2006@gmail.com',
  location: 'Tiruppur, Tamil Nadu, India',
  availability: ['Open to Remote', 'Open to Relocate', 'Open to On-Site'],
  targetGoal: "Eager to contribute to Amazon's Quality Services organization by supporting testing and validation of Devices, Retail, and AWS products.",
  summary: `Final-year Computer Science and Engineering student with hands-on experience in AWS cloud services, web development, and quality/testing fundamentals. Currently pursuing an ongoing Cloud Computing internship, with prior experience building AWS-hosted static websites and full-stack applications. Strong foundation in Linux environments, Python, and web technologies, with a keen eye for detail, quality, and problem-solving.`,
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Cloud Computing Intern',
    company: 'Prime Vector',
    location: 'Hosur, India',
    period: "Jul '26 — Present",
    status: 'Ongoing',
    type: 'cloud',
    description: [
      'Currently undergoing hands-on training in cloud computing fundamentals, working with core AWS services including EC2, S3, IAM, VPC, and RDS.',
      'Gaining practical exposure to cloud infrastructure setup, deployment, and monitoring in a live project environment.',
      'Collaborating with a technical team to apply cloud concepts to real-world business use cases.'
    ],
    skills: ['AWS EC2', 'AWS S3', 'IAM', 'VPC', 'RDS', 'Linux', 'Cloud Infrastructure']
  },
  {
    id: 'exp-2',
    role: 'Web Development Intern',
    company: 'SBS Technologies Private Limited',
    location: 'Tamil Nadu, India',
    period: "Jun '25 — Jul '25",
    type: 'web',
    description: [
      'Worked hands-on with HTML5, CSS3, and Bootstrap 5.3 to build responsive web pages across all screen sizes.',
      'Focused on mobile-first design, ensuring layouts adapt smoothly from phone to desktop.',
      'Paid close attention to UI consistency and accessibility, improving overall user interaction quality.',
      'Gained practical experience with component-based design and Bootstrap grid system to write clean, scalable code.'
    ],
    skills: ['HTML5', 'CSS3', 'Bootstrap 5.3', 'JavaScript', 'Responsive Design', 'Mobile-First UI']
  },
  {
    id: 'exp-3',
    role: 'AR/VR Development Intern',
    company: 'Unity Based Development',
    location: 'Remote / Project-based',
    period: 'Internship Project',
    type: 'arvr',
    description: [
      'Developed immersive AR and VR applications using Unity engine.',
      'Designed interactive 3D environments and implemented game mechanics.',
      'Explored real-time rendering and immersive technologies for interactive user experiences.'
    ],
    skills: ['Unity 3D', 'C#', 'AR/VR', 'Real-Time Rendering', '3D Environments']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu-1',
    degree: 'B.E., Computer Science and Engineering',
    institution: 'Akshaya College of Engineering and Technology',
    period: 'Expected 2026',
    grade: 'CGPA: 7.56',
    details: 'Focus on Cloud Computing, Web Technologies, Operating Systems, Software Engineering, and Database Management.'
  },
  {
    id: 'edu-2',
    degree: 'HSC (Higher Secondary Certificate)',
    institution: 'Govt. Boys Higher Secondary School',
    period: "Jun '22 — Apr '23",
    grade: 'GPA: 76%',
    details: 'Mathematics, Physics, Chemistry, Computer Science stream.'
  },
  {
    id: 'edu-3',
    degree: 'SSLC (Secondary School Leaving Certificate)',
    institution: 'Bharathi Matriculation Higher Secondary School',
    period: "Jul '20 — Apr '21",
    grade: 'GPA: 80%',
    details: 'Secondary Education with strong foundations in Science and Mathematics.'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'AWS Solutions Architect – Fundamentals of Architecting on AWS',
    issuer: 'Amazon Web Services (AWS)',
    date: "Jul '26",
    badge: 'AWS Certified Architectural Fundamentals',
    skills: ['EC2', 'S3', 'VPC', 'Cloud Security', 'Scalability']
  },
  {
    id: 'cert-2',
    title: 'Bootstrap 5.3 Responsive Web Development',
    issuer: 'SBS Technologies',
    date: "Jun '25",
    badge: 'UI/UX Web Specialist',
    skills: ['Bootstrap 5.3', 'Responsive Layouts', 'CSS Utilities']
  },
  {
    id: 'cert-3',
    title: 'Introduction to Flutter App Development',
    issuer: 'Simply Learning',
    date: "Apr '25",
    badge: 'Mobile App Developer',
    skills: ['Flutter', 'Dart', 'Cross-Platform UI']
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-1',
    title: 'National Conference Paper Presentation — "AI Mock Mate"',
    event: 'ICSSR-SRC Sponsored National Conference on Artificial Intelligence',
    organization: 'K.S. Rangasamy College of Technology',
    date: "Oct '25",
    award: 'Published Research Presenter',
    description: 'Presented the research paper "AI Mock Mate" showcasing innovative AI applications for sustainable socio-economic development and automated candidate interview preparation.'
  },
  {
    id: 'ach-2',
    title: 'AI Innovators Expo — Third Place',
    event: 'Sri Eshwar THIRAN 2026',
    organization: 'Sri Eshwar College of Engineering',
    date: "Oct '25",
    award: '🏆 Third Place Winner',
    description: 'Secured Third Place for an innovative AI-based solution, demonstrating strong technical problem-solving abilities in a competitive intercollegiate event.'
  },
  {
    id: 'ach-3',
    title: 'Paper Presentation — UDHAYAM\'26',
    event: 'Intercollegiate Technical Fest',
    organization: 'Kalaignar Karunanidhi Institute of Technology',
    date: '2026',
    award: 'Recognized Presenter',
    description: 'Recognized for participation in a Paper Presentation event, demonstrating research, technical presentation, and effective communication skills.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'AI Mock Interview Platform (Mock Mate)',
    category: 'ai',
    subtitle: 'Personal Research Project & Award-Winning AI Platform',
    role: 'Lead Developer',
    featured: true,
    description: [
      'Built an AI-powered mock interview preparation platform using React.js, Node.js, TypeScript, and Tailwind CSS.',
      'Integrated real-time question generation, candidate speech evaluation, and instant feedback scoring.',
      'Implemented an auto-generated certificate of achievement feature with dynamic candidate data and instant PDF export.'
    ],
    techStack: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'jsPDF / PDF Export', 'Gemini AI'],
    highlights: [
      'National Conference research paper presentation at K.S. Rangasamy College of Technology.',
      'Auto-generates printable verification certificates upon interview completion.',
      'Adaptive interview difficulty tailored to candidate experience level.'
    ],
    demoType: 'mockmate',
    githubUrl: 'https://github.com',
    liveUrl: 'https://mockmate-demo.app'
  },
  {
    id: 'proj-2',
    title: 'Nexiq Chatbot',
    category: 'ai',
    subtitle: 'SBS Technologies Internship Project',
    role: 'Full-Stack Developer',
    period: "Jun '25 — Jul '25",
    featured: true,
    description: [
      'Built an AI-powered chatbot using HTML5, CSS3, and JavaScript, integrated directly with the Google Gemini API.',
      'Implemented real-time responses, file uploads, dark/light theme switching, and a modern glassmorphism UI.',
      'Deployed live on GitHub Pages with optimized client-side state handling and response streaming.'
    ],
    techStack: ['Google Gemini API', 'HTML5', 'CSS3', 'JavaScript', 'Glassmorphism UI', 'GitHub Pages'],
    highlights: [
      'Supports file attachment inspection and code snippet formatting.',
      'Smooth dark/light mode toggle with frosted glass aesthetic.',
      'Deployed live for public interaction.'
    ],
    demoType: 'nexiq',
    githubUrl: 'https://github.com',
    liveUrl: 'https://gokul-m.github.io/nexiq-chatbot'
  },
  {
    id: 'proj-3',
    title: 'AWS-Hosted Static Website',
    category: 'cloud',
    subtitle: 'UpSkill Campus — Cloud Computing Internship',
    role: 'Cloud Architect & Administrator',
    featured: true,
    description: [
      'Designed and deployed a static website using Amazon S3 for durable object storage and Amazon CloudFront for edge content delivery.',
      'Configured CloudFront distribution, custom SSL/TLS certificates, and bucket security policies for global low-latency access.',
      'Gained first-hand experience with AWS hosting, distribution, invalidations, and performance optimization.'
    ],
    techStack: ['AWS S3', 'AWS CloudFront', 'AWS IAM', 'Route 53', 'SSL/TLS', 'Performance Tuning'],
    highlights: [
      'Global CDN acceleration with sub-100ms loading speeds.',
      'Automated S3 sync pipeline for zero-downtime updates.',
      'Secured via CloudFront Origin Access Control (OAC).'
    ],
    demoType: 'aws',
    githubUrl: 'https://github.com',
    liveUrl: 'https://d111111abcdef8.cloudfront.net'
  },
  {
    id: 'proj-4',
    title: 'Smart Sensor Lamp',
    category: 'hardware',
    subtitle: 'Personal IoT & Embedded Systems Project',
    role: 'Embedded Hardware Developer',
    featured: false,
    description: [
      'Designed a smart sensor lamp that automatically adjusts brightness based on ambient light levels and user presence.',
      'Integrated ambient light (LDR) and motion (PIR) sensors for automatic on/off functionality, significantly improving energy efficiency.',
      'Built companion control interface in React Native connected to Node.js backend.'
    ],
    techStack: ['C++', 'Arduino IDE', 'PIR Motion Sensor', 'LDR Light Sensor', 'React Native', 'Node.js'],
    highlights: [
      'Energy-saving motion trigger with 10-second idle auto-dim.',
      'Adaptive ambient light dimming curve.',
      'Hardware micro-controller integration with C++.'
    ],
    demoType: 'lamp',
    githubUrl: 'https://github.com',
    liveUrl: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Cloud Computing & Infrastructure',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS EC2', level: 88, highlight: true },
      { name: 'AWS S3', level: 92, highlight: true },
      { name: 'AWS IAM & VPC', level: 85, highlight: true },
      { name: 'AWS RDS & CloudFront', level: 82, highlight: true },
      { name: 'Linux Operating System', level: 90, highlight: true }
    ]
  },
  {
    category: 'Web & Mobile Development',
    iconName: 'Code',
    skills: [
      { name: 'React.js & TypeScript', level: 88, highlight: true },
      { name: 'Node.js & Express', level: 84, highlight: true },
      { name: 'Tailwind CSS & Bootstrap 5.3', level: 92, highlight: true },
      { name: 'HTML5 / CSS3 / JavaScript', level: 95, highlight: true },
      { name: 'Flutter & React Native', level: 75, highlight: false }
    ]
  },
  {
    category: 'Programming & Core CS',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', level: 85, highlight: true },
      { name: 'C & C++', level: 80, highlight: true },
      { name: 'Data Structures & Algorithms', level: 78, highlight: false },
      { name: 'REST APIs & JSON', level: 88, highlight: true }
    ]
  },
  {
    category: 'Tools, Platforms & Testing',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 90, highlight: true },
      { name: 'VS Code', level: 95, highlight: true },
      { name: 'Unity 3D Engine', level: 72, highlight: false },
      { name: 'Arduino IDE & IoT', level: 78, highlight: false }
    ]
  }
];

export const QUICK_PROMPTS = [
  "Tell me about Gokul's AWS experience",
  "What projects has Gokul built?",
  "What certifications does Gokul hold?",
  "Is Gokul open for remote or relocation roles?"
];
