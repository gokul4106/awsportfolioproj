import { Experience, Education, Certification, Achievement, Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Gokul.M',
  headline: 'AWS Solutions Architect / DevOps Engineer',
  phone: '7604885302',
  phoneFormatted: '+91 7604885302',
  email: 'gokulsrimathi2006@gmail.com',
  location: 'Tiruppur, Tamil Nadu, India',
  availability: ['Open to Remote', 'Open to Relocate', 'Open to On-Site'],
  targetGoal: 'Seeking a Cloud / DevOps role to build scalable, secure, and reliable cloud solutions.',
  summary: `Final-year Computer Science and Engineering student and aspiring AWS Solutions Architect / DevOps Engineer with hands-on experience in AWS cloud services (EC2, S3, IAM, VPC, RDS, CloudFront) and working knowledge of Linux, Docker, Kubernetes, Jenkins, and Git. Built and deployed AWS-hosted static websites and full-stack web applications using Python, JavaScript, React.js, and Node.js, with internships in cloud computing, web development, and AR/VR. Skilled in cloud infrastructure setup, deployment, monitoring, and API integration, with a keen eye for detail, quality, and problem-solving. Seeking a Cloud / DevOps role to build scalable, secure, and reliable cloud solutions.`,
  github: 'https://github.com/gokul-m',
  linkedin: 'https://www.linkedin.com/in/gokul-m',
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Front-End Web Development Trainee (Bootstrap 5.3)',
    company: 'SBS Technologies Private Limited',
    location: 'Erode, India',
    period: "Jun '25 — Jul '25",
    type: 'web',
    description: [
      'Built responsive, mobile-first web pages using HTML5, CSS3, and Bootstrap 5.3 that adapt seamlessly from phone to desktop.',
      'Applied Bootstrap’s grid system and component-based design to write clean, scalable, and reusable code.',
      'Improved UI consistency and accessibility, enhancing how users interact with the page.'
    ],
    skills: ['HTML5', 'CSS3', 'Bootstrap 5.3', 'Responsive Design', 'Accessibility', 'UI/UX']
  },
  {
    id: 'exp-2',
    role: 'AR/VR Development Intern',
    company: 'Unity Based Development',
    location: 'Project-based',
    period: 'Internship Project',
    type: 'arvr',
    description: [
      'Developed immersive AR and VR applications using Unity.',
      'Designed interactive 3D environments and implemented core game mechanics.',
      'Explored real-time rendering and immersive technologies for interactive user experiences.'
    ],
    skills: ['Unity 3D', 'C#', 'AR/VR', 'Real-Time Rendering', '3D Environments']
  },
  {
    id: 'exp-3',
    role: 'Cloud Computing Intern',
    company: 'Prime Vector Private Limited',
    location: 'Hosur, Tamil Nadu, India',
    period: "Jun '26 — Jul '26",
    status: 'Completed',
    type: 'cloud',
    description: [
      'Gained hands-on experience with AWS services including EC2, S3, IAM, VPC, and RDS through practical cloud computing training.',
      'Practiced cloud infrastructure setup, deployment, and monitoring in a live project environment.',
      'Collaborated with a technical team to apply cloud concepts to real-world business use cases.'
    ],
    skills: ['AWS EC2', 'AWS S3', 'IAM', 'VPC', 'RDS', 'Linux', 'Cloud Infrastructure']
  },
  {
    id: 'exp-4',
    role: 'Web Development Intern',
    company: 'ApexPlanet Software Pvt. Ltd.',
    location: 'Gaya, Bihar, India',
    period: "Jul '26 — Aug '26",
    type: 'web',
    description: [
      'Completed a 45-day web development internship, building 10+ real-world projects using HTML5, CSS3, and JavaScript.',
      'Developed a personal portfolio website, responsive layouts with Flexbox and CSS Grid, and a contact form with JavaScript validation.',
      'Built a dynamic To-Do application, quiz application, joke generator, and full-stack e-commerce product listing page with filtering and sorting.'
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation', 'REST APIs', 'Responsive Design']
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu-1',
    degree: 'SSLC, Bharathi Matriculation Higher Sec School',
    institution: 'Vijayamangalam, Erode, Tamil Nadu, India',
    period: "Jul '20 — Apr '21",
    grade: '80%',
    details: 'Secondary education with strong fundamentals in science and mathematics.'
  },
  {
    id: 'edu-2',
    degree: 'HSC, Govt Boys Hr Sec School',
    institution: 'Perundurai, Erode, Tamil Nadu, India',
    period: "Jun '22 — Apr '23",
    grade: '76%',
    details: 'Completed in the Mathematics, Physics, Chemistry, and Computer Science stream.'
  },
  {
    id: 'edu-3',
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'Akshaya College of Engineering and Technology',
    period: "Sep '23 — Present",
    grade: 'CGPA: 7.56',
    details: 'Currently pursuing final-year studies with focus on cloud computing, web technologies, operating systems, software engineering, and databases.'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'Introduction to Flutter Course',
    issuer: 'Simplilearn',
    date: "Apr '25",
    badge: 'Mobile App Developer',
    skills: ['Flutter', 'Dart', 'Cross-Platform UI']
  },
  {
    id: 'cert-2',
    title: 'Bootstrap 5.3 Certification',
    issuer: 'SBS Technologies',
    date: "Jun '25",
    badge: 'UI/UX Web Specialist',
    skills: ['Bootstrap 5.3', 'Responsive Layouts', 'CSS Utilities']
  },
  {
    id: 'cert-3',
    title: 'AWS Solutions Architect - Fundamentals of Architecting on AWS',
    issuer: 'Amazon Web Services (AWS)',
    date: "Jul '26",
    badge: 'AWS Certified Architectural Fundamentals',
    skills: ['EC2', 'S3', 'VPC', 'Cloud Security', 'Scalability']
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-1',
    title: 'National Conference Paper Presentation – AI Mock Mate',
    event: 'ICSSR-SRC Sponsored National Conference on Artificial Intelligence',
    organization: 'K.S. Rangasamy College of Technology',
    date: "Oct '25",
    award: 'Presented Research Paper',
    description: 'Presented the research paper "AI Mock Mate" at the ICSSR-SRC Sponsored National Conference on Artificial Intelligence, showcasing practical applications of AI for sustainable socio-economic development.'
  },
  {
    id: 'ach-2',
    title: 'AI Innovators Expo',
    event: 'Sri Eshwar THIRAN 2026',
    organization: 'Sri Eshwar College of Engineering',
    date: "Oct '25",
    award: 'Third Place',
    description: 'Secured Third Place in the AI Innovators Expo, showcasing AI-based solutions and technical problem-solving in a competitive intercollegiate event.'
  },
  {
    id: 'ach-3',
    title: 'UDHAYAM\'26',
    event: 'Paper Presentation',
    organization: 'Kalaignar Karunanidhi Institute of Technology',
    date: '2026',
    award: 'Recognized Presenter',
    description: 'Recognized for participating in the Paper Presentation event at UDHAYAM\'26, demonstrating research, presentation, and communication skills.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Nexiq Chatbot',
    category: 'ai',
    subtitle: 'SBS Technologies Internship Project',
    role: 'Web Developer',
    period: "Jun '25 — Jul '25",
    featured: true,
    description: [
      'Developed an AI-powered chatbot using HTML5, CSS3, and JavaScript, integrated with the Google Gemini API for real-time responses.',
      'Implemented file uploads, a dark/light theme toggle, and a glassmorphism UI; deployed live on GitHub Pages.',
      'Focused on real-time interaction flows, user-friendly design, and responsive front-end behavior.'
    ],
    techStack: ['Google Gemini API', 'HTML5', 'CSS3', 'JavaScript', 'Glassmorphism UI', 'GitHub Pages'],
    highlights: [
      'Supports file attachment inspection and code snippet formatting.',
      'Includes a smooth dark/light mode toggle and polished glassmorphism visual style.',
      'Deployed live for public interaction and demonstration.'
    ],
    demoType: 'nexiq',
    githubUrl: 'https://github.com',
    liveUrl: 'https://gokul-m.github.io/nexiq-chatbot'
  },
  {
    id: 'proj-2',
    title: 'AWS - Hosted Static Website',
    category: 'cloud',
    subtitle: 'UpSkill Campus — Cloud Computing Internship',
    role: 'Cloud Hosted Portfolio Developer',
    period: "Jun '26 — Jun '26",
    featured: true,
    description: [
      'Developed a responsive static portfolio site and deployed it using Amazon S3 plus CloudFront on the AWS Free Tier.',
      'Applied IAM least-privilege access, HTTPS enforcement, and CDN-based performance optimization.',
      'Managed source code with Git and GitHub for version control and deployment workflows.'
    ],
    techStack: ['AWS S3', 'AWS CloudFront', 'AWS IAM', 'Route 53', 'HTTPS', 'Git/GitHub'],
    highlights: [
      'Built and hosted a personal portfolio website on secure AWS infrastructure.',
      'Used CloudFront for faster global content delivery and scalability.',
      'Improved hosting experience through AWS security and reliability practices.'
    ],
    demoType: 'aws',
    githubUrl: 'https://github.com',
    liveUrl: 'https://d111111abcdef8.cloudfront.net'
  },
  {
    id: 'proj-3',
    title: 'AI Mock Interview Platform (Mock Mate)',
    category: 'ai',
    subtitle: 'Personal Project',
    role: 'Lead Developer',
    featured: true,
    description: [
      'Built a full-stack, AI-powered mock interview preparation platform using React.js, Node.js, TypeScript, and Tailwind CSS.',
      'Implemented AI-driven interview workflows with immediate candidate assessment and feedback loops.',
      'Added an auto-generated certificate of achievement feature with dynamic data and PDF export.'
    ],
    techStack: ['React.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'pdf export', 'Gemini AI'],
    highlights: [
      'Presented the research paper “AI Mock Mate” at a national conference.',
      'Generates printable achievement certificates for interview completion.',
      'Designed to support adaptive interview practice and candidate evaluation.'
    ],
    demoType: 'mockmate',
    githubUrl: 'https://github.com',
    liveUrl: 'https://mockmate-demo.app'
  },
  {
    id: 'proj-4',
    title: 'Smart Sensor Lamp',
    category: 'hardware',
    subtitle: 'Personal IoT & Embedded Systems Project',
    role: 'Embedded Hardware Developer',
    featured: false,
    description: [
      'Designed a smart sensor lamp that automatically adjusts brightness based on ambient light and user presence.',
      'Integrated LDR and PIR sensors to enable automatic on/off and energy-efficient operation.',
      'Built a companion control interface in React Native connected to a Node.js backend.'
    ],
    techStack: ['C++', 'Arduino IDE', 'PIR Motion Sensor', 'LDR Light Sensor', 'React Native', 'Node.js'],
    highlights: [
      'Improves energy efficiency through motion-triggered automation.',
      'Uses adaptive lighting based on ambient conditions.',
      'Combines hardware control with a software monitoring interface.'
    ],
    demoType: 'lamp',
    githubUrl: 'https://github.com',
    liveUrl: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Cloud & DevOps',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS EC2', level: 88, highlight: true },
      { name: 'AWS S3', level: 92, highlight: true },
      { name: 'AWS IAM', level: 86, highlight: true },
      { name: 'AWS VPC', level: 82, highlight: true },
      { name: 'AWS RDS & CloudFront', level: 82, highlight: true },
      { name: 'Docker', level: 74, highlight: false },
      { name: 'Kubernetes', level: 70, highlight: false },
      { name: 'Jenkins', level: 72, highlight: false },
      { name: 'Linux', level: 90, highlight: true }
    ]
  },
  {
    category: 'Programming & Web',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 85, highlight: true },
      { name: 'JavaScript', level: 90, highlight: true },
      { name: 'TypeScript', level: 80, highlight: true },
      { name: 'React.js', level: 88, highlight: true },
      { name: 'Node.js', level: 84, highlight: true },
      { name: 'HTML5 / CSS3', level: 95, highlight: true },
      { name: 'Bootstrap 5.3', level: 90, highlight: true },
      { name: 'Tailwind CSS', level: 82, highlight: true }
    ]
  },
  {
    category: 'Core CS & Tools',
    iconName: 'Terminal',
    skills: [
      { name: 'C / C++', level: 80, highlight: true },
      { name: 'REST API Integration', level: 88, highlight: true },
      { name: 'Git & GitHub', level: 90, highlight: true },
      { name: 'VS Code', level: 95, highlight: true },
      { name: 'Unity', level: 72, highlight: false },
      { name: 'Arduino IDE', level: 76, highlight: false }
    ]
  }
];

export const QUICK_PROMPTS = [
  'Tell me about Gokul\'s AWS experience',
  'What projects has Gokul built?',
  'What certifications does Gokul hold?',
  'Is Gokul open for remote or relocation roles?'
];
