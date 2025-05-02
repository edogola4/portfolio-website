// src/lib/skills.js
/**
 * Skills and services data for Edwin Ogola's portfolio
 * Organized by categories for display
 */

import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiGithub,
  SiPython,
  SiDjango,
  SiFigma,
  SiAdobexd,
  SiHtml5,
  SiGraphql,
  SiRedis,
  SiVercel
} from 'react-icons/si';

import { 
  FaServer, 
  FaDatabase, 
  FaMobile, 
  FaCode,
  FaCloud,
  FaPaintBrush 
} from 'react-icons/fa';

import { TbApi, TbBrandReactNative } from 'react-icons/tb';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BsCodeSlash, BsDatabaseFillGear } from 'react-icons/bs';
import { BiMobileAlt } from 'react-icons/bi';
import { MdIntegrationInstructions, MdMiscellaneousServices } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Creating responsive, accessible, and performant user interfaces with modern JavaScript frameworks and libraries.',
    iconComponent: FaCode,
    gradientStart: '#3B82F6', // Blue
    gradientEnd: '#6366F1',   // Indigo
    skills: [
      {
        name: 'React',
        years: 4,
        level: 92,
        iconComponent: SiReact,
        color: '#61DAFB' // React's official color
      },
      {
        name: 'Next.js',
        years: 3,
        level: 85,
        iconComponent: SiNextdotjs,
        color: '#000000' // Next.js official color
      },
      {
        name: 'Tailwind CSS',
        years: 2,
        level: 90,
        iconComponent: SiTailwindcss,
        color: '#06B6D4' // Tailwind's official color
      },
      {
        name: 'JavaScript',
        years: 5,
        level: 95,
        iconComponent: SiJavascript,
        color: '#F7DF1E' // JavaScript's official color
      },
      {
        name: 'TypeScript',
        years: 3,
        level: 82,
        iconComponent: SiTypescript,
        color: '#3178C6' // TypeScript's official color
      },
      {
        name: 'HTML5/CSS3',
        years: 5,
        level: 95,
        iconComponent: SiHtml5,
        color: '#E34F26' // HTML5's official color
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Building robust, scalable, and secure server-side applications with modern technologies and frameworks.',
    iconComponent: FaServer,
    gradientStart: '#8B5CF6', // Purple
    gradientEnd: '#EC4899',   // Pink
    skills: [
      {
        name: 'Node.js',
        years: 4,
        level: 88,
        iconComponent: SiNodedotjs,
        color: '#339933' // Node.js's official color
      },
      {
        name: 'Express.js',
        years: 3,
        level: 85,
        iconComponent: SiExpress,
        color: '#000000' // Express's official color
      },
      {
        name: 'Python',
        years: 2,
        level: 75,
        iconComponent: SiPython,
        color: '#3776AB' // Python's official color
      },
      {
        name: 'Django',
        years: 1,
        level: 70,
        iconComponent: SiDjango,
        color: '#092E20' // Django's official color
      },
      {
        name: 'GraphQL',
        years: 2,
        level: 75,
        iconComponent: SiGraphql,
        color: '#E10098' // GraphQL's official color
      },
      {
        name: 'RESTful APIs',
        years: 4,
        level: 90,
        iconComponent: TbApi,
        color: '#FF5733' // Custom color
      }
    ]
  },
  {
    id: 'database',
    title: 'Database & Storage',
    description: 'Managing and optimizing data storage solutions with offline-first capabilities',
    iconComponent: FaDatabase,
    gradientStart: '#10B981', // Emerald
    gradientEnd: '#3B82F6',   // Blue
    skills: [
      {
        name: 'MongoDB',
        years: 3,
        level: 85,
        iconComponent: SiMongodb,
        color: '#47A248' // MongoDB's official color
      },
      {
        name: 'PostgreSQL',
        years: 3,
        level: 80,
        iconComponent: SiPostgresql,
        color: '#4169E1' // PostgreSQL's official color
      },
      {
        name: 'Firebase',
        years: 3,
        level: 85,
        iconComponent: SiFirebase,
        color: '#FFCA28' // Firebase's official color
      },
      {
        name: 'Redis',
        years: 2,
        level: 70,
        iconComponent: SiRedis,
        color: '#DC382D' // Redis's official color
      },
      {
        name: 'SQL',
        years: 4,
        level: 85,
        iconComponent: BsDatabaseFillGear,
        color: '#336791' // Generic SQL color
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications in the cloud with modern infrastructure and CI/CD practices.',
    iconComponent: FaCloud,
    gradientStart: '#EC4899', // Pink
    gradientEnd: '#F59E0B',   // Amber
    skills: [
      {
        name: 'Docker',
        years: 2,
        level: 75,
        iconComponent: SiDocker,
        color: '#2496ED' // Docker's official color
      },
      {
        name: 'AWS',
        years: 2,
        level: 70,
        iconComponent: SiAmazon,
        color: '#FF9900' // AWS's official color
      },
      {
        name: 'Google Cloud',
        years: 2,
        level: 70,
        iconComponent: SiGooglecloud,
        color: '#4285F4' // Google Cloud's official color
      },
      {
        name: 'CI/CD',
        years: 3,
        level: 80,
        iconComponent: MdIntegrationInstructions,
        color: '#16a34a' // Custom color
      },
      {
        name: 'Git & GitHub',
        years: 4,
        level: 90,
        iconComponent: SiGithub,
        color: '#181717' // GitHub's official color
      },
      {
        name: 'Kubernetes',
        years: 2,
        level: 65,
        iconComponent: SiKubernetes,
        color: '#326CE5' // Kubernetes's official color
      },
      {
        name: 'Vercel',
        years: 3,
        level: 85,
        iconComponent: SiVercel,
        color: '#000000' // Vercel's official color
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications optimized for East African markets with offline-first capabilities.',
    iconComponent: FaMobile,
    gradientStart: '#F59E0B', // Amber
    gradientEnd: '#10B981',   // Emerald
    skills: [
      {
        name: 'React Native',
        years: 3,
        level: 85,
        iconComponent: TbBrandReactNative,
        color: '#61DAFB' // React's official color
      },
      {
        name: 'Expo',
        years: 2,
        level: 75,
        iconComponent: BiMobileAlt,
        color: '#000020' // Expo color
      },
      {
        name: 'Mobile UI/UX',
        years: 3,
        level: 80,
        iconComponent: FaMobile,
        color: '#3B82F6' // Tailwind blue
      },
      {
        name: 'Progressive Web Apps',
        years: 3,
        level: 88,
        iconComponent: SiJavascript,
        color: '#4285F4' // Google's blue
      },
      {
        name: 'Offline-first Design',
        years: 4,
        level: 90,
        iconComponent: FaDatabase,
        color: '#3B82F6' // Tailwind blue
      }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Designing intuitive and culturally appropriate user interfaces for East African users and contexts.',
    iconComponent: FaPaintBrush,
    gradientStart: '#10B981', // Emerald
    gradientEnd: '#3B82F6',   // Blue
    skills: [
      {
        name: 'Figma',
        years: 3,
        level: 82,
        iconComponent: SiFigma,
        color: '#F24E1E' // Figma's official color
      },
      {
        name: 'Adobe XD',
        years: 2,
        level: 75,
        iconComponent: SiAdobexd,
        color: '#FF61F6' // Adobe XD's official color
      },
      {
        name: 'User Research',
        years: 4,
        level: 88,
        iconComponent: FaDatabase,
        color: '#6366F1' // Indigo
      }
    ]
  }
];

// Updated services with gradients and icons
export const services = [
  {
    id: 'webdev',
    title: 'Web Application Development',
    description: 'End-to-end web application development with modern JavaScript frameworks and responsive design principles.',
    iconComponent: SiReact,
    iconBgColor: '#61DAFB',
    gradientStart: '#3B82F6',
    gradientEnd: '#8B5CF6',
    features: [
      'Responsive and mobile-first design',
      'Progressive Web Apps (PWAs)',
      'Offline-first capabilities',
      'Integration with local payment providers',
      'Optimized for low-bandwidth environments'
    ],
    examples: ["E-commerce platforms", "Business management systems", "Educational portals"]
  },
  {
    id: 'mobiledev',
    title: 'Mobile Application Development',
    description: 'Cross-platform mobile applications built with React Native, optimized for the unique needs of East African users.',
    iconComponent: FaMobile,
    iconBgColor: '#10B981',
    gradientStart: '#10B981',
    gradientEnd: '#3B82F6',
    features: [
      'Cross-platform (iOS & Android)',
      'Offline-first architecture',
      'USSD integration capability',
      'Low data consumption',
      'Integration with local payment systems'
    ],
    examples: ["Mobile commerce apps", "Field data collection tools", "Community service applications"]
  },
  {
    id: 'api-integration',
    title: 'API Development & Integration',
    description: 'Custom API development and integration with popular East African services and platforms.',
    iconComponent: TbApi,
    iconBgColor: '#8B5CF6',
    gradientStart: '#8B5CF6',
    gradientEnd: '#EC4899',
    features: [
      'RESTful API development',
      'GraphQL API implementation',
      'M-Pesa integration',
      'Integration with local service providers',
      'API documentation and support'
    ],
    examples: ["Payment gateway integrations", "Third-party service connectors", "Microservices architecture"]
  },
  {
    id: 'database-design',
    title: 'Database Design & Optimization',
    description: 'Designing efficient database systems that perform well even with connectivity challenges.',
    iconComponent: BsDatabaseFillGear,
    iconBgColor: '#F59E0B',
    gradientStart: '#F59E0B',
    gradientEnd: '#EF4444',
    features: [
      'Schema design for optimal performance',
      'Data migration strategies',
      'Offline-first database solutions',
      'Query optimization for faster responses',
      'Data security implementation'
    ],
    examples: ["Customer data management systems", "Inventory management databases", "Analytics data warehouses"]
  },
  {
    id: 'cloudinfra',
    title: 'Cloud Infrastructure & DevOps',
    description: 'Setting up scalable and cost-effective cloud infrastructure tailored for African markets and constraints.',
    iconComponent: FaCloud,
    iconBgColor: '#8B5CF6',
    gradientStart: '#8B5CF6',
    gradientEnd: '#EC4899',
    features: [
      'Cost-optimized cloud architecture',
      'Edge deployment for improved latency',
      'CI/CD pipeline setup',
      'Container orchestration',
      'Disaster recovery planning'
    ],
    examples: ["Startup infrastructure setup", "Microservices deployment", "Serverless architectures"]
  },
  {
    id: 'tech-consulting',
    title: 'Technical Consultation',
    description: 'Strategic technical guidance for businesses looking to innovate in East African markets.',
    iconComponent: MdMiscellaneousServices,
    iconBgColor: '#F59E0B',
    gradientStart: '#F59E0B',
    gradientEnd: '#EF4444',
    features: [
      'Technology stack selection',
      'System architecture planning',
      'Market-specific tech adaptation strategies',
      'Digital transformation roadmaps',
      'Technical feasibility studies'
    ],
    examples: ["Startup technical planning", "Legacy system modernization", "Digital transformation initiatives"]
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    description: 'User-centered design with deep understanding of East African users, creating interfaces that work across diverse devices.',
    iconComponent: FaPaintBrush,
    iconBgColor: '#EC4899',
    gradientStart: '#EC4899',
    gradientEnd: '#8B5CF6',
    features: [
      'User research specific to local markets',
      'Interface design for diverse device ecosystems',
      'Cultural context-aware design',
      'Low-bandwidth consideration',
      'Usability testing with local users'
    ],
    examples: ["Mobile app interfaces", "Web application UIs", "Design systems"]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics Solutions',
    description: 'Custom data analytics solutions to extract insights from your business data.',
    iconComponent: IoAnalyticsSharp,
    iconBgColor: '#16a34a',
    gradientStart: '#16a34a',
    gradientEnd: '#3B82F6',
    features: [
      'Custom dashboard development',
      'Data visualization',
      'Automated reporting systems',
      'Business intelligence integration',
      'Predictive analytics'
    ],
    examples: ["Sales performance dashboards", "User behavior analytics", "Market trend analysis"]
  },
  {
    id: 'training',
    title: 'Developer Training',
    description: 'Customized training programs for development teams, focusing on modern web technologies and best practices.',
    iconComponent: SiJavascript,
    iconBgColor: '#F7DF1E',
    gradientStart: '#F7DF1E',
    gradientEnd: '#10B981',
    features: [
      'Modern JavaScript frameworks',
      'Progressive Web App development',
      'Offline-first architecture',
      'Performance optimization',
      'Secure API integration'
    ],
    examples: ["Team upskilling", "Developer onboarding", "Technical workshops"]
  }
];

// Updated testimonials with additional styling properties
export const testimonials = [
  
  {
    id: 'testi1',
    name: 'Jane Mwangi',
    role: 'CTO',
    company: 'TechKe Innovations',
    content: 'Edwin developed our company\'s e-commerce platform with specialized M-Pesa integration. His understanding of East African payment systems and ability to optimize for our market conditions was exceptional. The platform has seen a 200% increase in mobile conversions since launch.',
    avatar: '/images/testimonials/jane-mwangi.jpg',
    gradientStart: '#EC4899',
    gradientEnd: '#F59E0B',
    rating: 5
  },
  {
    id: 'testi2',
    name: 'David Omondi',
    role: 'Founder',
    company: 'EduTech Tanzania',
    content: 'We hired Edwin to build our educational platform that needed to work in areas with limited connectivity. His offline-first approach and optimization for low-bandwidth environments made our product accessible to thousands of students across rural Tanzania.',
    avatar: '/images/testimonials/david-omondi.jpg',
    gradientStart: '#F59E0B',
    gradientEnd: '#10B981',
    rating: 5
  },
  {
    id: 'testi3',
    name: 'Sarah Njeri',
    role: 'Product Manager',
    company: 'FinSolutions Africa',
    content: 'Edwin\'s technical skills are matched by his deep understanding of the East African tech ecosystem. He developed an API integration layer that connected our financial services with local platforms seamlessly. His work has been reliable and robust even at scale.',
    avatar: '/images/testimonials/sarah-njeri.jpg',
    gradientStart: '#10B981',
    gradientEnd: '#3B82F6',
    rating: 5
  }
];

/**
 * Get all skills across categories
 * @returns {Array} Flattened array of all skills
 */
export const getAllSkills = () => {
  return skillCategories.flatMap(category => category.skills);
};

/**
 * Get skills by category
 * @param {string} categoryId - Skill category ID
 * @returns {Array} Skills in the specified category
 */
export const getSkillsByCategory = (categoryId) => {
  const category = skillCategories.find(cat => cat.id === categoryId);
  return category ? category.skills : [];
};

/**
 * Get all services
 * @returns {Array} All services
 */
export const getAllServices = () => {
  return services;
};

/**
 * Get a service by ID
 * @param {string} id - Service ID
 * @returns {Object} Service object
 */
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};