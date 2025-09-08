import { 
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaMobile,
  FaPaintBrush,
  FaChartLine,
  FaCogs,
  FaTools,
  FaUsers,
  FaLaptopCode,
  FaTerminal,
  FaSlack,
  FaTrello,
  FaSass,
  FaNpm,
  FaYarn,
  FaGithub,
  FaGitlab,
  FaDocker,
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaApple,
  FaAndroid,
  FaFigma,
  FaSketch,
  FaPython,
  FaJava,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaAngular
} from 'react-icons/fa';

// Note: Removed non-existent icons: 
// - FaNetworkWired, FaLinux, FaRaspberryPi, FaEthereum, FaFileAlt, FaJira, FaNotion, FaConfluence, FaGitAlt, FaBitbucket, FaAdobe, FaPhp

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  gradientStart: string;
  gradientEnd: string;
}

export interface Skill {
  id: string;
  name: string;
  years: number;
  category: string;
  icon: string;
  iconComponent?: React.ComponentType<{ className?: string }>;
  gradientStart: string;
  gradientEnd: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconComponent: React.ComponentType<{ className?: string }>;
  gradientStart: string;
  gradientEnd: string;
  skills: Skill[];
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Innovations Inc.',
    content: 'Edwin transformed our web application with his frontend expertise. His attention to detail and problem-solving skills were instrumental in delivering a seamless user experience.',
    rating: 5,
    gradientStart: '#3B82F6',
    gradientEnd: '#8B5CF6',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartUp Vision',
    content: 'Working with Edwin was a game-changer for our development team. His backend architecture skills helped us scale our application to handle 10x more users.',
    rating: 5,
    gradientStart: '#8B5CF6',
    gradientEnd: '#EC4899',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX Lead',
    company: 'DesignHub',
    content: 'Edwin has an exceptional eye for design implementation. He took our designs and brought them to life with pixel-perfect precision and smooth animations.',
    rating: 4,
    gradientStart: '#10B981',
    gradientEnd: '#3B82F6',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Engineering Manager',
    company: 'CloudScale',
    content: 'Edwin\'s expertise in cloud infrastructure and DevOps helped us reduce our deployment times by 70%. His solutions are both elegant and maintainable.',
    rating: 5,
    gradientStart: '#EC4899',
    gradientEnd: '#F59E0B',
  },
];

// Enhanced skills data with additional technical and operations skills
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces with modern web technologies',
    iconComponent: FaCode,
    gradientStart: '#3B82F6',
    gradientEnd: '#6366F1',
    skills: [
      { id: 'react', name: 'React', years: 3, category: 'Frontend', icon: '⚛️', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
      { id: 'nextjs', name: 'Next.js', years: 2, category: 'Frontend', icon: '⏭️', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
      { id: 'typescript', name: 'TypeScript', years: 2, category: 'Frontend', icon: '📘', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
      { id: 'javascript', name: 'JavaScript', years: 3, category: 'Frontend', icon: '📜', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
      { id: 'tailwind', name: 'Tailwind CSS', years: 2, category: 'Frontend', icon: '🎨', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
      { id: 'html', name: 'HTML5', years: 4, category: 'Frontend', icon: '🔖', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
      { id: 'css', name: 'CSS3', years: 4, category: 'Frontend', icon: '🎨', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
      { id: 'redux', name: 'Redux', years: 2, category: 'Frontend', icon: '🔄', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
      { id: 'sass', name: 'Sass', years: 2, category: 'Frontend', icon: '💎', gradientStart: '#3B82F6', gradientEnd: '#6366F1' },
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Building scalable and efficient server-side applications and APIs',
    iconComponent: FaServer,
    gradientStart: '#8B5CF6',
    gradientEnd: '#EC4899',
    skills: [
      { id: 'nodejs', name: 'Node.js', years: 3, category: 'Backend', icon: '🟢', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'express', name: 'Express', years: 2, category: 'Backend', icon: '🚀', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'python', name: 'Python', years: 4, category: 'Backend', icon: '🐍', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'django', name: 'Django', years: 2, category: 'Backend', icon: '⚡', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'flask', name: 'Flask', years: 1, category: 'Backend', icon: '🍶', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'graphql', name: 'GraphQL', years: 2, category: 'Backend', icon: '📊', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'rest', name: 'RESTful APIs', years: 3, category: 'Backend', icon: '🔌', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'java', name: 'Java', years: 3, category: 'Backend', icon: '☕', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'spring', name: 'Spring Boot', years: 2, category: 'Backend', icon: '🌱', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
    ]
  },
  {
    id: 'database',
    name: 'Database & Data',
    description: 'Designing and optimizing database solutions and data processing',
    iconComponent: FaDatabase,
    gradientStart: '#10B981',
    gradientEnd: '#3B82F6',
    skills: [
      { id: 'mongodb', name: 'MongoDB', years: 2, category: 'Database', icon: '🍃', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'postgresql', name: 'PostgreSQL', years: 3, category: 'Database', icon: '🐘', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'mysql', name: 'MySQL', years: 3, category: 'Database', icon: '💾', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'redis', name: 'Redis', years: 1, category: 'Database', icon: '🔴', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'sql', name: 'SQL', years: 4, category: 'Database', icon: '📊', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'firebase', name: 'Firebase', years: 2, category: 'Database', icon: '🔥', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'pandas', name: 'Pandas', years: 2, category: 'Database', icon: '🐼', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'numpy', name: 'NumPy', years: 2, category: 'Database', icon: '#️⃣', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    description: 'Deploying and managing applications in the cloud with CI/CD',
    iconComponent: FaCloud,
    gradientStart: '#EC4899',
    gradientEnd: '#F59E0B',
    skills: [
      { id: 'docker', name: 'Docker', years: 2, category: 'DevOps', icon: '🐳', gradientStart: '#EC4899', gradientEnd: '#F59E0B' },
      { id: 'kubernetes', name: 'Kubernetes', years: 1, category: 'DevOps', icon: '☸️', gradientStart: '#EC4899', gradientEnd: '#F59E0B' },
      { id: 'aws', name: 'AWS', years: 2, category: 'DevOps', icon: '☁️', gradientStart: '#EC4899', gradientEnd: '#F59E0B' },
      { id: 'git', name: 'Git', years: 4, category: 'DevOps', icon: '🔀', gradientStart: '#EC4899', gradientEnd: '#F59E0B' },
      { id: 'github-actions', name: 'GitHub Actions', years: 2, category: 'DevOps', icon: '⚙️', gradientStart: '#EC4899', gradientEnd: '#F59E0B' },
      { id: 'jenkins', name: 'Jenkins', years: 1, category: 'DevOps', icon: '🤖', gradientStart: '#EC4899', gradientEnd: '#F59E0B' },
      { id: 'terraform', name: 'Terraform', years: 1, category: 'DevOps', icon: '🏗️', gradientStart: '#EC4899', gradientEnd: '#F59E0B' },
      { id: 'gcp', name: 'Google Cloud', years: 1, category: 'DevOps', icon: '☁️', gradientStart: '#EC4899', gradientEnd: '#F59E0B' },
    ]
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Building cross-platform mobile applications',
    iconComponent: FaMobile,
    gradientStart: '#F59E0B',
    gradientEnd: '#10B981',
    skills: [
      { id: 'react-native', name: 'React Native', years: 2, category: 'Mobile', icon: '📱', gradientStart: '#F59E0B', gradientEnd: '#10B981' },
      { id: 'expo', name: 'Expo', years: 1, category: 'Mobile', icon: '⚡', gradientStart: '#F59E0B', gradientEnd: '#10B981' },
      { id: 'swift', name: 'Swift', years: 1, category: 'Mobile', icon: '🕊️', gradientStart: '#F59E0B', gradientEnd: '#10B981' },
      { id: 'kotlin', name: 'Kotlin', years: 1, category: 'Mobile', icon: '📱', gradientStart: '#F59E0B', gradientEnd: '#10B981' },
    ]
  },
  {
    id: 'design',
    name: 'UI/UX & Design',
    description: 'Creating beautiful and intuitive user experiences',
    iconComponent: FaPaintBrush,
    gradientStart: '#10B981',
    gradientEnd: '#3B82F6',
    skills: [
      { id: 'figma', name: 'Figma', years: 3, category: 'Design', icon: '🎨', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'adobe-xd', name: 'Adobe XD', years: 2, category: 'Design', icon: '✏️', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'sketch', name: 'Sketch', years: 1, category: 'Design', icon: '✏️', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'ui-ux', name: 'UI/UX', years: 3, category: 'Design', icon: '✨', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    description: 'Extracting insights from data and building ML models',
    iconComponent: FaChartLine,
    gradientStart: '#8B5CF6',
    gradientEnd: '#3B82F6',
    skills: [
      { id: 'python', name: 'Python', years: 3, category: 'Data Science', icon: '🐍', gradientStart: '#8B5CF6', gradientEnd: '#3B82F6' },
      { id: 'r', name: 'R', years: 2, category: 'Data Science', icon: '📊', gradientStart: '#8B5CF6', gradientEnd: '#3B82F6' },
      { id: 'tensorflow', name: 'TensorFlow', years: 1, category: 'Data Science', icon: '🧠', gradientStart: '#8B5CF6', gradientEnd: '#3B82F6' },
      { id: 'pytorch', name: 'PyTorch', years: 1, category: 'Data Science', icon: '🔥', gradientStart: '#8B5CF6', gradientEnd: '#3B82F6' },
      { id: 'scikit-learn', name: 'Scikit-learn', years: 2, category: 'Data Science', icon: '📚', gradientStart: '#8B5CF6', gradientEnd: '#3B82F6' },
      { id: 'jupyter', name: 'Jupyter', years: 3, category: 'Data Science', icon: '📓', gradientStart: '#8B5CF6', gradientEnd: '#3B82F6' },
    ]
  },
  {
    id: 'operations',
    name: 'Operations & Tools',
    description: 'Tools and skills for efficient operations and productivity',
    iconComponent: FaCogs,
    gradientStart: '#EC4899',
    gradientEnd: '#8B5CF6',
    skills: [
      { id: 'excel', name: 'Excel/Sheets', years: 5, category: 'Operations', icon: '📊', gradientStart: '#EC4899', gradientEnd: '#8B5CF6' },
      { id: 'slack', name: 'Slack', years: 4, category: 'Operations', icon: '💬', gradientStart: '#EC4899', gradientEnd: '#8B5CF6' },
      { id: 'jira', name: 'Jira', years: 3, category: 'Operations', icon: '📋', gradientStart: '#EC4899', gradientEnd: '#8B5CF6' },
      { id: 'trello', name: 'Trello', years: 3, category: 'Operations', icon: '📌', gradientStart: '#EC4899', gradientEnd: '#8B5CF6' },
      { id: 'notion', name: 'Notion', years: 3, category: 'Operations', icon: '📝', gradientStart: '#EC4899', gradientEnd: '#8B5CF6' },
      { id: 'confluence', name: 'Confluence', years: 2, category: 'Operations', icon: '📚', gradientStart: '#EC4899', gradientEnd: '#8B5CF6' },
      { id: 'sap', name: 'SAP', years: 1, category: 'Operations', icon: '🏢', gradientStart: '#EC4899', gradientEnd: '#8B5CF6' },
      { id: 'salesforce', name: 'Salesforce', years: 1, category: 'Operations', icon: '☁️', gradientStart: '#EC4899', gradientEnd: '#8B5CF6' },
    ]
  },
  {
    id: 'other-tech',
    name: 'Other Technical Skills',
    description: 'Additional technical skills and tools',
    iconComponent: FaTools,
    gradientStart: '#10B981',
    gradientEnd: '#3B82F6',
    skills: [
      { id: 'latex', name: 'LaTeX', years: 3, category: 'Other', icon: '📝', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'bash', name: 'Bash/Shell', years: 3, category: 'Other', icon: '💻', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'linux', name: 'Linux', years: 3, category: 'Other', icon: '🐧', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'raspberry-pi', name: 'Raspberry Pi', years: 2, category: 'Other', icon: '🍓', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'arduino', name: 'Arduino', years: 1, category: 'Other', icon: '🔌', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'blockchain', name: 'Blockchain', years: 1, category: 'Other', icon: '⛓️', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
      { id: 'solidity', name: 'Solidity', years: 1, category: 'Other', icon: 'Ξ', gradientStart: '#10B981', gradientEnd: '#3B82F6' },
    ]
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    description: 'Interpersonal and professional skills',
    iconComponent: FaUsers,
    gradientStart: '#8B5CF6',
    gradientEnd: '#EC4899',
    skills: [
      { id: 'leadership', name: 'Leadership', years: 3, category: 'Soft Skills', icon: '👥', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'communication', name: 'Communication', years: 5, category: 'Soft Skills', icon: '💬', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'problem-solving', name: 'Problem Solving', years: 5, category: 'Soft Skills', icon: '🧩', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'teamwork', name: 'Teamwork', years: 5, category: 'Soft Skills', icon: '🤝', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'time-management', name: 'Time Management', years: 4, category: 'Soft Skills', icon: '⏱️', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'critical-thinking', name: 'Critical Thinking', years: 4, category: 'Soft Skills', icon: '💡', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
      { id: 'adaptability', name: 'Adaptability', years: 4, category: 'Soft Skills', icon: '🔄', gradientStart: '#8B5CF6', gradientEnd: '#EC4899' },
    ]
  }
];

// Flatten all skills for filtering
export const allSkills = skillCategories.flatMap(category => category.skills);
