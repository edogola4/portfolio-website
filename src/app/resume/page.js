// src/app/resume/page.js

import React from 'react';
import DownloadButton from '@/components/resume/DownloadButton';

// Dynamic imports for better performance
const Timeline = dynamic(() => import('@/components/resume/Timeline'), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

// Enhanced metadata with better SEO
export const metadata = {
  title: 'Edwin Ogola - Full Stack Software Engineer | Professional Resume',
  description: 'Experienced Full Stack Software Engineer specializing in React, Node.js, and cloud solutions for East African fintech markets. View my professional experience, skills, and certifications.',
  keywords: ['Full Stack Developer', 'Software Engineer', 'React', 'Node.js', 'Kenya', 'Fintech', 'M-Pesa'],
  authors: [{ name: 'Edwin Ogola' }],
  creator: 'Edwin Ogola',
  openGraph: {
    title: 'Edwin Ogola - Full Stack Software Engineer Resume',
    description: 'Professional resume showcasing expertise in modern web technologies and East African fintech solutions',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Edwin Ogola - Full Stack Software Engineer Resume',
    description: 'Professional resume showcasing expertise in modern web technologies'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

// Structured data for better SEO
const resumeSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Edwin Ogola",
  "jobTitle": "Full Stack Software Engineer",
  "description": "Experienced software engineer specializing in web applications for East African markets",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressCountry": "Kenya"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University of Nairobi"
  },
  "knowsAbout": ["React", "Node.js", "JavaScript", "AWS", "MongoDB", "M-Pesa Integration"],
  "workExperience": [
    {
      "@type": "WorkExperience",
      "jobTitle": "Senior Software Engineer",
      "employer": {
        "@type": "Organization",
        "name": "TechInnovate Kenya"
      },
      "startDate": "2022",
      "location": "Nairobi, Kenya"
    }
  ]
};

// Constants for better maintainability
const PROFESSIONAL_EXPERIENCE = [
  {
    id: 'tech-innovate',
    title: "Senior Software Engineer",
    company: "TechInnovate Kenya",
    location: "Nairobi, Kenya",
    period: "2022 - Present",
    description: "Led the development of scalable web applications focusing on financial technology solutions for East African markets. Implemented M-Pesa integration for multiple client projects, improving payment processing efficiency by 40%. Mentored junior developers and conducted code reviews to maintain high code quality standards.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "M-Pesa API"],
    achievements: [
      "Improved payment processing efficiency by 40%",
      "Led a team of 5 developers",
      "Implemented robust security measures for financial transactions"
    ]
  },
  {
    id: 'digital-solutions',
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    location: "Nairobi, Kenya",
    period: "2020 - 2022",
    description: "Designed and implemented responsive web applications for clients in the e-commerce and healthcare sectors. Developed RESTful APIs and integrated third-party services. Optimized application performance for users with varying internet connection speeds.",
    technologies: ["JavaScript", "React", "Express.js", "PostgreSQL", "Docker"],
    achievements: [
      "Delivered 15+ successful projects",
      "Reduced app load times by 60%",
      "Implemented offline-first architecture"
    ]
  },
  {
    id: 'techstart',
    title: "Web Developer",
    company: "TechStart Kenya",
    location: "Nairobi, Kenya",
    period: "2018 - 2020",
    description: "Developed and maintained client websites with a focus on responsive design and SEO optimization. Collaborated with the design team to implement UI/UX improvements based on user feedback.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
    achievements: [
      "Improved SEO rankings by 150%",
      "Maintained 99.9% uptime across all projects",
      "Reduced bounce rate by 35%"
    ]
  }
];

const EDUCATION = [
  {
    id: 'university-nairobi',
    title: "Bachelor of Science in Computer Science",
    company: "University of Nairobi",
    location: "Nairobi, Kenya",
    period: "2014 - 2018",
    description: "Graduated with First Class Honors. Specialized in Software Engineering and Database Systems. Final year project: Development of a mobile payment integration platform for small businesses.",
    technologies: [],
    grade: "First Class Honors",
    gpa: "3.8/4.0"
  },
  {
    id: 'moringa-school',
    title: "Full Stack Web Development Certification",
    company: "Moringa School",
    location: "Nairobi, Kenya",
    period: "2018",
    description: "Intensive 12-week bootcamp focusing on modern web development technologies and practices. Developed multiple full-stack projects including an e-commerce platform for local artisans.",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    id: 'aws-certification',
    title: "AWS Certified Solutions Architect - Associate",
    company: "Amazon Web Services",
    location: "Online",
    period: "2021",
    description: "Certification validating expertise in designing and deploying scalable systems on AWS.",
    technologies: ["AWS"],
    credentialId: "AWS-ASA-2021-EDO"
  }
];

const TECHNICAL_SKILLS = {
  "Frontend": {
    skills: ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript"],
    proficiency: "Expert"
  },
  "Backend": {
    skills: ["Node.js", "Express", "Python", "Django", "GraphQL"],
    proficiency: "Expert"
  },
  "Databases": {
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DynamoDB"],
    proficiency: "Advanced"
  },
  "DevOps": {
    skills: ["AWS", "Docker", "CI/CD", "Git", "Kubernetes"],
    proficiency: "Advanced"
  },
  "API Integration": {
    skills: ["RESTful APIs", "GraphQL", "M-Pesa", "Payment Gateways", "Microservices"],
    proficiency: "Expert"
  }
};

const SOFT_SKILLS = {
  "Leadership": ["Team leadership", "Mentoring", "Code reviews", "Strategic planning"],
  "Communication": ["Technical writing", "Client presentations", "Cross-functional collaboration"],
  "Project Management": ["Agile methodologies", "Scrum", "Kanban", "Risk assessment"],
  "Problem-solving": ["Analytical thinking", "Debugging", "Performance optimization", "System design"]
};

const CERTIFICATIONS = [
  {
    id: 'aws-solutions-architect',
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    period: "2021 - Present",
    credentialId: "AWS-ASA-2021-EDO",
    verificationUrl: "#"
  },
  {
    id: 'mongodb-developer',
    name: "MongoDB Certified Developer",
    issuer: "MongoDB Inc.",
    period: "2022 - Present",
    credentialId: "MDB-DEV-2022-EDO",
    verificationUrl: "#"
  },
  {
    id: 'scrum-master',
    name: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    period: "2023 - Present",
    credentialId: "CSM-2023-EDO",
    verificationUrl: "#"
  }
];

// Enhanced component with better error handling and accessibility
export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-primary-800 dark:text-white mb-3 font-display">Resume</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            My professional experience, education, and skills
          </p>
        </div>
        <DownloadButton className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg" />
      </div>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-primary-700 dark:text-white mb-10 pb-2 border-b border-neutral-200 dark:border-neutral-700">Professional Experience</h2>
        
        <div className="space-y-10">
          {/* Senior Software Engineer */}
          <div className="group relative pl-10 border-l-2 border-primary-300 dark:border-primary-600 hover:border-primary-500 transition-colors">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 group-hover:bg-accent-500 transition-colors ring-4 ring-white dark:ring-neutral-900"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Senior Software Engineer</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">TechInnovate Kenya</span>
                    <span className="mx-2 text-neutral-400">•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-100 dark:border-primary-800/50 whitespace-nowrap">
                  Jan 2023 - Present
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Led the development of scalable web applications focusing on financial technology solutions for East African markets. 
                Implemented M-Pesa integration for multiple client projects, improving payment processing efficiency by 40%. 
                Mentored junior developers and conducted code reviews to maintain high code quality standards.
              </p>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['React', 'Node.js', 'MongoDB', 'AWS', 'M-Pesa API', 'Microservices', 'Docker', 'Kubernetes'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Stack Developer */}
          <div className="group relative pl-10 border-l-2 border-tertiary-300 dark:border-tertiary-600 hover:border-tertiary-500 transition-colors">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-tertiary-500 group-hover:bg-accent-500 transition-colors ring-4 ring-white dark:ring-neutral-900"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Full Stack Developer</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Nairobi Digital Solutions</span>
                    <span className="mx-2 text-neutral-400">•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-tertiary-50 dark:bg-tertiary-900/20 text-tertiary-700 dark:text-tertiary-300 text-sm font-medium rounded-full border border-tertiary-100 dark:border-tertiary-800/50 whitespace-nowrap">
                  Jun 2021 - Dec 2022
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Developed and maintained full-stack applications using modern JavaScript frameworks.
                Collaborated with cross-functional teams to deliver high-quality software solutions.
                Implemented responsive designs and optimized frontend performance.
              </p>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Docker', 'Git'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Web Developer */}
          <div className="group relative pl-10 border-l-2 border-gold-300 dark:border-gold-600 hover:border-gold-500 transition-colors">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-500 group-hover:bg-accent-500 transition-colors ring-4 ring-white dark:ring-neutral-900"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Web Developer</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Freelance</span>
                    <span className="mx-2 text-neutral-400">•</span>
                    <span>Remote</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300 text-sm font-medium rounded-full border border-gold-100 dark:border-gold-800/50 whitespace-nowrap">
                  Mar 2021 - May 2021
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Worked with various clients to build responsive websites and web applications.
                Translated client requirements into functional and visually appealing designs.
                Gained experience with frontend technologies and basic backend integration.
              </p>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'PHP', 'WordPress', 'Git'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Operational Intern */}
          <div className="group relative pl-10 border-l-2 border-purple-500 hover:border-purple-600 transition-colors">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 group-hover:bg-accent-500 transition-colors ring-4 ring-white dark:ring-neutral-900"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Operational Intern</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Nairobi Tech Hub</span>
                    <span className="mx-2 text-neutral-400">•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full border border-purple-100 dark:border-purple-800/50 whitespace-nowrap">
                  Jan 2021 - Feb 2021
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Assisted in daily operational tasks and supported the IT department with technical support. 
                Gained hands-on experience with system administration and network troubleshooting. 
                Contributed to process improvement initiatives that increased team efficiency by 15%.
              </p>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['IT Support', 'System Administration', 'Troubleshooting', 'Documentation', 'Process Improvement'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-primary-700 dark:text-white mb-10 pb-2 border-b border-neutral-200 dark:border-neutral-700">Education & Certifications</h2>
        
        <div className="space-y-10">
          {/* AWS Certification */}
          <div className="relative pl-10 pb-8 border-l-2 border-primary-300 dark:border-primary-600 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 group-hover:bg-accent-500 transition-colors ring-4 ring-white dark:ring-neutral-900"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">AWS Certified Solutions Architect - Associate</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Amazon Web Services</span>
                    <span className="hidden sm:inline mx-2 text-neutral-400">•</span>
                    <span className="text-xs sm:text-sm">Credential ID: AWS-123456789</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-100 dark:border-primary-800/50 whitespace-nowrap">
                  May 2023 - May 2026
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-5 leading-relaxed">
                Earned industry-recognized certification demonstrating expertise in designing distributed systems on AWS. 
                Key competencies include architecting secure and robust applications, selecting appropriate AWS services, and implementing cost-optimized solutions.
              </p>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Key Skills</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['Cloud Architecture', 'AWS Services', 'Solution Design', 'Security', 'High Availability', 'Cost Optimization'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Stack Bootcamp */}
          <div className="relative pl-10 pb-8 border-l-2 border-tertiary-400 dark:border-tertiary-500 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-tertiary-500 ring-4 ring-white dark:ring-neutral-900 transition-colors group-hover:bg-accent-500"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Full Stack Web Development Bootcamp</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Moringa School</span>
                    <span className="hidden sm:inline mx-2 text-neutral-400">•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-tertiary-50 dark:bg-tertiary-900/20 text-tertiary-700 dark:text-tertiary-300 text-sm font-medium rounded-full border border-tertiary-100 dark:border-tertiary-800/50 whitespace-nowrap">
                  Jan 2022 - Apr 2022
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-5 leading-relaxed">
                Intensive 12-week program focusing on full-stack JavaScript development. 
                Developed multiple projects using modern frameworks and tools, including React, Node.js, and MongoDB. 
                Collaborated with peers using Agile methodologies and version control with Git.
              </p>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Technologies Mastered</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'REST APIs', 'Bootstrap', 'Jest'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Self-Directed Learning */}
          <div className="relative pl-10 border-l-2 border-gold-400 dark:border-gold-500 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-500 ring-4 ring-white dark:ring-neutral-900 transition-colors group-hover:bg-accent-500"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Self-Directed Learning</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Online courses, tutorials, and personal projects
                  </p>
                </div>
                <div className="px-4 py-1.5 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300 text-sm font-medium rounded-full border border-gold-100 dark:border-gold-800/50 whitespace-nowrap">
                  Jan 2021 - Dec 2021
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 mb-5 leading-relaxed">
                Dedicated over 1,000 hours to learning web development fundamentals through various online platforms including FreeCodeCamp, The Odin Project, and YouTube tutorials. 
                Built multiple personal projects to apply and reinforce knowledge. 
                Developed strong problem-solving skills and learned how to effectively utilize documentation and online resources.
              </p>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Areas of Focus</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git', 'Algorithms', 'Data Structures', 'Problem Solving'].map(topic => (
                    <span key={topic} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-primary-700 dark:text-white mb-10 pb-2 border-b border-neutral-200 dark:border-neutral-700">Key Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-1.5 bg-accent-500 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg mb-4 text-primary-800 dark:text-white">Frontend</h3>
            <div className="flex flex-wrap gap-2.5">
              {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-1.5 bg-tertiary-500 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2.5">
              {['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-1.5 bg-gold-500 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-4">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2.5">
              {['AWS', 'Docker', 'CI/CD', 'Git', 'GitHub Actions', 'Nginx', 'Linux', 'Agile/Scrum'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-primary-700 dark:text-white mb-10 pb-2 border-b border-neutral-200 dark:border-neutral-700">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* AWS Certification */}
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="w-10 h-1.5 bg-accent-500 rounded-full mb-4"></div>
                <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">AWS Certified Solutions Architect - Associate</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Amazon Web Services</p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <span className="px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 text-sm font-medium rounded-full border border-accent-100 dark:border-accent-800/50 whitespace-nowrap">
                  May 2023 - May 2026
                </span>
              </div>
            </div>
          </div>
          
          {/* MongoDB Certification */}
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="w-10 h-1.5 bg-tertiary-500 rounded-full mb-4"></div>
                <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-2 group-hover:text-tertiary-600 dark:group-hover:text-tertiary-400 transition-colors">MongoDB Certified Developer</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">MongoDB, Inc.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <span className="px-4 py-1.5 bg-tertiary-50 dark:bg-tertiary-900/20 text-tertiary-700 dark:text-tertiary-300 text-sm font-medium rounded-full border border-tertiary-100 dark:border-tertiary-800/50 whitespace-nowrap">
                  Valid until: 2025
                </span>
              </div>
            </div>
          </div>
          
          {/* Scrum Certification */}
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="w-10 h-1.5 bg-gold-500 rounded-full mb-4"></div>
                <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">Professional Scrum Master I (PSM I)</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Scrum.org</p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <span className="px-4 py-1.5 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300 text-sm font-medium rounded-full border border-gold-100 dark:border-gold-800/50 whitespace-nowrap">
                  Valid until: 2025
                </span>
              </div>
            </div>
          </div>
          
          {/* Cloud Certification */}
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex flex-col h-full">
              <div className="flex-grow">
                <div className="w-10 h-1.5 bg-primary-500 rounded-full mb-4"></div>
                <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">Google Cloud Professional Cloud Architect</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Google Cloud</p>
                <div className="mt-3">
                  <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">Cloud Architecture</span>
                  <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full ml-1">Database Design</span>
                  <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full ml-1">Solution Architecture</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <span className="px-4 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-100 dark:border-primary-800/50 whitespace-nowrap">
                  Issued: 2022 | Valid: 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-8">
        <DownloadButton className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg" />
      </div>
    </ErrorBoundary>
  );
}