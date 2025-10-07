// src/lib/constants/resume.js
export const CONTACT_INFO = {
  name: "Brandon Ogola",
  title: "Junior Full Stack Developer",
  email: "edogola4@gmail.com",
  phone: "+254-717-248673",
  location: "Nairobi, Kenya",
  linkedin: "https://linkedin.com/in/brandon-ogola-b77063232",
  github: "https://github.com/edogola4"
};

export const RESUME_CONFIG = {
  lastUpdated: new Date().toISOString(),
  version: "1.0.0",
  //downloadUrl: "/files/Edwin_B__Ogola_CV.pdf",
  downloadUrl: "/files/bran_don_ (1).pdf",
  printOptimized: true
};

export const PROFESSIONAL_SUMMARY = [
  "Computer Science graduate with comprehensive software engineering training combining theoretical foundations with intensive practical experience across three rigorous programs (CS Degree, ALX, Moringa School).",
  "Full-stack developer specializing in JavaScript, Python, React, Node.js, and AI/ML integration with proven track record of delivering measurable results.",
  "Developed AI chatbot achieving 95% accuracy, improved user engagement by 25%, and increased operational efficiency by 20%.",
  "Experienced in building scalable web applications, RESTful APIs, and intelligent systems."
];

export const TECHNICAL_SKILLS = {
  languages: ["JavaScript (ES6+)", "Python", "TypeScript", "C", "SQL", "HTML5", "CSS3"],
  frontend: ["React.js (18)", "Angular", "Redux Toolkit", "Framer Motion", "Responsive Design", "Mobile-First"],
  backend: ["Node.js", "Express.js", "Flask", "RESTful APIs", "Microservices", "JWT Authentication"],
  databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  ai_ml: ["TensorFlow", "NLP", "Machine Learning Models", "Intent Recognition", "Sentiment Analysis"],
  devops: ["Git/GitHub", "Docker", "AWS", "Railway", "CI/CD", "GitHub Actions", "Linux/Unix", "Shell Scripting"],
  practices: ["Agile", "Test-Driven Development", "Code Reviews", "Version Control", "Technical Documentation"],
  additional: ["Socket.io", "WebSockets", "Postman", "VS Code", "LaTeX"]
};

export const EXPERIENCE = [
  {
    id: 1,
    role: "Operations Intern",
    company: "Alliance Bioversity CIAT",
    period: "November 2024 — April 2025",
    location: "Nairobi, Kenya",
    achievements: [
      "Analyzed operational processes and created data-driven reports using Python and Excel, identifying efficiency improvements that reduced processing time by 20%",
      "Developed automated workflows and documentation systems that streamlined operations for a team of 12 members, improving collaboration and task tracking",
      "Collaborated with cross-functional teams to gather requirements and translated business needs into technical specifications and actionable solutions",
      "Built data processing scripts and tools using Python for automating repetitive tasks and generating insights from operational data"
    ]
  },
  {
    id: 2,
    role: "Software Developer Intern",
    company: "REAL BIZ Digital",
    period: "June 2023 — September 2023",
    location: "Nairobi, Kenya",
    achievements: [
      "Developed and maintained responsive web applications using React.js and Node.js, contributing to 3 client projects that improved user engagement by 25%",
      "Implemented RESTful APIs and integrated third-party services with senior developers, reducing data processing time by 30% through optimized backend logic",
      "Built AI-powered features and intelligent chatbot solutions, gaining hands-on experience integrating machine learning models into production web applications",
      "Participated in agile development processes, code reviews, and Git workflows, collaborating effectively in a team environment using modern development tools"
    ]
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Nairobi",
    period: "2021 — 2025",
    location: "Nairobi, Kenya",
    details: [
      "Comprehensive computer science curriculum covering Data Structures & Algorithms, Software Engineering, Database Management Systems",
      "Built multiple full-stack applications including web apps, database-driven systems, and AI projects",
      "Developed strong mathematical foundations in discrete mathematics, linear algebra, and statistical analysis"
    ]
  },
  {
    id: 2,
    degree: "ALX Software Engineering Program",
    institution: "ALX Africa",
    period: "2023 — 2024",
    location: "Remote",
    details: [
      "Intensive software engineering program emphasizing computer science fundamentals and system design",
      "Built 15+ projects including command-line applications and web applications with RESTful APIs",
      "Developed expertise in data structures, algorithms, Python scripting, and Linux/Unix administration"
    ]
  },
  {
    id: 3,
    degree: "Software Development Bootcamp",
    institution: "Moringa School",
    period: "June 2022 — December 2022",
    location: "Nairobi, Kenya",
    details: [
      "24-week full-stack development program specializing in JavaScript, React, Node.js, Python, and AI/ML",
      "Built 8+ production-ready applications with focus on intelligent systems and AI-powered features",
      "Graduated in top 15% of cohort, demonstrating excellence in technical problem-solving"
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    name: "AI-Powered E-Commerce Chatbot",
    technologies: ["Python", "TensorFlow", "Flask", "React.js", "NLP", "RESTful APIs"],
    description: [
      "Developed intelligent customer service chatbot achieving 95% accuracy in intent recognition",
      "Reduced average response time by 40% for e-commerce platforms",
      "Implemented natural language processing with machine learning models for sentiment analysis"
    ]
  },
  {
    id: 2,
    name: "TinyTots - Full-Stack E-Commerce Platform",
    technologies: ["React 18", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"],
    description: [
      "Built modern e-commerce platform for eco-friendly children's clothing",
      "Implemented complete CRUD operations, JWT authentication, and shopping cart functionality",
      "Developed mobile-first responsive design with Framer Motion animations"
    ]
  },
  {
    id: 3,
    name: "Real-Time Collaborative Code Editor",
    technologies: ["Socket.io", "Monaco Editor", "Node.js", "React", "Redis", "WebSockets"],
    description: [
      "Built collaborative coding platform supporting multiple programming languages",
      "Implemented WebSocket connections for real-time code synchronization",
      "Designed scalable architecture with Redis for session management"
    ]
  }
];

export const LANGUAGES = [
  { name: "English", level: "Native" },
  { name: "Swahili", level: "Native" }
];

export const ADDITIONAL_INFO = {
  openSource: "Active contributor to AI/ML projects on GitHub",
  community: "Regular participant in Nairobi tech meetups and workshops",
  professionalDevelopment: "Technical documentation proficiency (LaTeX) — Continuous learning in cloud-native development and system design"
};