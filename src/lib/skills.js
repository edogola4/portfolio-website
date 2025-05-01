// src/lib/skills.js
/**
 * Skills and services data for Edwin Ogola's portfolio
 * Organized by categories for display
 */

import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGithub, 
  FaMobile, FaDatabase, FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5,
  SiExpress, SiDjango, SiGraphql, SiMongodb, SiPostgresql,
  SiFirebase, SiRedis, SiVercel
} from 'react-icons/si';
import { TbApi, TbBrandReactNative } from 'react-icons/tb';
import { BsCodeSlash, BsDatabaseFillGear } from 'react-icons/bs';
import { BiMobileAlt } from 'react-icons/bi';
import { MdIntegrationInstructions, MdMiscellaneousServices } from 'react-icons/md';
import { IoAnalyticsSharp } from 'react-icons/io5';

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces optimized for various devices and connection speeds",
    iconComponent: FaCode,
    skills: [
      { name: "React", level: 90, iconComponent: FaReact, years: 4 },
      { name: "Next.js", level: 85, iconComponent: SiNextdotjs, years: 3 },
      { name: "JavaScript", level: 95, iconComponent: SiJavascript, years: 5 },
      { name: "TypeScript", level: 80, iconComponent: SiTypescript, years: 2 },
      { name: "Tailwind CSS", level: 90, iconComponent: SiTailwindcss, years: 3 },
      { name: "HTML5/CSS3", level: 95, iconComponent: SiHtml5, years: 5 },
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Building robust server-side applications and APIs with focus on performance and reliability",
    iconComponent: BsCodeSlash,
    skills: [
      { name: "Node.js", level: 85, iconComponent: FaNodeJs, years: 4 },
      { name: "Express", level: 80, iconComponent: SiExpress, years: 3 },
      { name: "Python", level: 75, iconComponent: FaPython, years: 2 },
      { name: "Django", level: 70, iconComponent: SiDjango, years: 1 },
      { name: "GraphQL", level: 75, iconComponent: SiGraphql, years: 2 },
      { name: "RESTful APIs", level: 90, iconComponent: TbApi, years: 4 },
    ]
  },
  {
    id: "database",
    title: "Database & Storage",
    description: "Managing and optimizing data storage solutions with offline-first capabilities",
    iconComponent: FaDatabase,
    skills: [
      { name: "MongoDB", level: 85, iconComponent: SiMongodb, years: 3 },
      { name: "PostgreSQL", level: 80, iconComponent: SiPostgresql, years: 3 },
      { name: "Firebase", level: 85, iconComponent: SiFirebase, years: 3 },
      { name: "Redis", level: 70, iconComponent: SiRedis, years: 2 },
      { name: "SQL", level: 85, iconComponent: BsDatabaseFillGear, years: 4 },
    ]
  },
  {
    id: "devops",
    title: "DevOps & Deployment",
    description: "Automating and streamlining development workflows for efficient delivery",
    iconComponent: FaDocker,
    skills: [
      { name: "Docker", level: 75, iconComponent: FaDocker, years: 2 },
      { name: "AWS", level: 70, iconComponent: FaAws, years: 2 },
      { name: "CI/CD", level: 80, iconComponent: MdIntegrationInstructions, years: 3 },
      { name: "Git/GitHub", level: 90, iconComponent: FaGithub, years: 4 },
      { name: "Vercel", level: 85, iconComponent: SiVercel, years: 3 },
    ]
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Creating cross-platform mobile applications optimized for East African markets",
    iconComponent: FaMobile,
    skills: [
      { name: "React Native", level: 80, iconComponent: TbBrandReactNative, years: 2 },
      { name: "Expo", level: 75, iconComponent: BiMobileAlt, years: 2 },
      { name: "Mobile UI/UX", level: 80, iconComponent: FaMobile, years: 3 },
    ]
  }
];

export const services = [
  {
    id: "web-development",
    title: "Web Application Development",
    description: "End-to-end development of scalable web applications optimized for East African markets.",
    iconComponent: FaCode,
    features: [
      "Responsive design for all device types",
      "Progressive Web App capabilities for offline use",
      "Optimization for variable connection speeds",
      "Localization for East African languages",
      "Performance optimization for lower-end devices"
    ],
    examples: ["E-commerce platforms", "Business management systems", "Educational portals"]
  },
  {
    id: "mobile-apps",
    title: "Mobile Application Development",
    description: "Cross-platform mobile applications that work efficiently across various devices popular in East Africa.",
    iconComponent: BiMobileAlt,
    features: [
      "Cross-platform solutions (iOS & Android)",
      "Offline functionality for areas with spotty connectivity",
      "Low data consumption features",
      "Integration with local payment systems",
      "Lightweight alternatives for entry-level smartphones"
    ],
    examples: ["Mobile commerce apps", "Field data collection tools", "Community service applications"]
  },
  {
    id: "api-integration",
    title: "API Development & Integration",
    description: "Custom API development and integration with popular East African services and platforms.",
    iconComponent: TbApi,
    features: [
      "RESTful API development",
      "GraphQL API implementation",
      "M-Pesa integration",
      "Integration with local service providers",
      "API documentation and support"
    ],
    examples: ["Payment gateway integrations", "Third-party service connectors", "Microservices architecture"]
  },
  {
    id: "database-design",
    title: "Database Design & Optimization",
    description: "Designing efficient database systems that perform well even with connectivity challenges.",
    iconComponent: BsDatabaseFillGear,
    features: [
      "Schema design for optimal performance",
      "Data migration strategies",
      "Offline-first database solutions",
      "Query optimization for faster responses",
      "Data security implementation"
    ],
    examples: ["Customer data management systems", "Inventory management databases", "Analytics data warehouses"]
  },
  {
    id: "tech-consulting",
    title: "Technical Consultation",
    description: "Strategic technical guidance for businesses looking to innovate in East African markets.",
    iconComponent: MdMiscellaneousServices,
    features: [
      "Technology stack selection",
      "System architecture planning",
      "Market-specific tech adaptation strategies",
      "Digital transformation roadmaps",
      "Technical feasibility studies"
    ],
    examples: ["Startup technical planning", "Legacy system modernization", "Digital transformation initiatives"]
  },
  {
    id: "data-analytics",
    title: "Data Analytics Solutions",
    description: "Custom data analytics solutions to extract insights from your business data.",
    iconComponent: IoAnalyticsSharp,
    features: [
      "Custom dashboard development",
      "Data visualization",
      "Automated reporting systems",
      "Business intelligence integration",
      "Predictive analytics"
    ],
    examples: ["Sales performance dashboards", "User behavior analytics", "Market trend analysis"]
  }
];

export const testimonials = [
  {
    id: "testimonial1",
    name: "Jane Mwangi",
    position: "CTO at TechKe Innovations",
    company: "TechKe",
    content: "Edwin developed our company's e-commerce platform with specialized M-Pesa integration. His understanding of East African payment systems and ability to optimize for our market conditions was exceptional. The platform has seen a 200% increase in mobile conversions since launch.",
    avatar: "/images/testimonials/jane-mwangi.jpg"
  },
  {
    id: "testimonial2",
    name: "David Omondi",
    position: "Founder",
    company: "EduTech Tanzania",
    content: "We hired Edwin to build our educational platform that needed to work in areas with limited connectivity. His offline-first approach and optimization for low-bandwidth environments made our product accessible to thousands of students across rural Tanzania.",
    avatar: "/images/testimonials/david-omondi.jpg"
  },
  
  {
    id: "testimonial3",
    name: "Sarah Njeri",
    position: "Product Manager",
    company: "FinSolutions Africa",
    content: "Edwin's technical skills are matched by his deep understanding of the East African tech ecosystem. He developed an API integration layer that connected our financial services with local platforms seamlessly. His work has been reliable and robust even at scale.",
    avatar: "/images/testimonials/sarah-njeri.jpg"
  }
];
  
  /**
   * Get all skills across categories
   * @returns {Array} Flattened array of all skills
   */
  export const getAllSkills = () => {
    return Object.values(skills).flat();
  };
  
  /**
   * Get skills by category
   * @param {string} category - Skill category
   * @returns {Array} Skills in the specified category
   */
  export const getSkillsByCategory = (category) => {
    return skills[category] || [];
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