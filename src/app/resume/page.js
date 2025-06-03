// src/app/resume/page.js

import React, { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorBoundary from '@/components/ui/ErrorBoundary';
import DownloadButtonWrapper from '@/components/resume/DownloadButtonWrapper';
import styles from './resume.module.css';

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
    <ErrorBoundary fallback={<div>Something went wrong loading the resume.</div>}>
      <div className={styles.resumeContainer}>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeSchema) }}
        />
        
        <main className="container mx-auto px-4 py-12 max-w-5xl" role="main">
          {/* Header Section */}
          <header className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                Professional Resume
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                Edwin Ogola - Full Stack Software Engineer
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Specializing in modern web applications and fintech solutions
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Suspense fallback={<div className="w-32 h-10 bg-gray-200 animate-pulse rounded" />}>
                <DownloadButtonWrapper />
              </Suspense>
            </div>
          </header>

          {/* Professional Experience Section */}
          <section className="mb-12" aria-labelledby="experience-heading">
            <h2 
              id="experience-heading"
              className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 text-gray-800 dark:text-white"
            >
              Professional Experience
            </h2>
            <Suspense fallback={<LoadingSpinner />}>
              <Timeline 
                items={PROFESSIONAL_EXPERIENCE}
                className={styles.timeline}
                itemClassName={styles.timelineItem}
                cardClassName={styles.timelineCard}
                dotClassName={styles.timelineDot}
              />
            </Suspense>
          </section>

          {/* Education Section */}
          <section className="mb-12" aria-labelledby="education-heading">
            <h2 
              id="education-heading"
              className="text-2xl font-semibold mb-6 border-b-2 border-green-500 pb-2 text-gray-800 dark:text-white"
            >
              Education & Training
            </h2>
            <Suspense fallback={<LoadingSpinner />}>
              <Timeline 
                items={EDUCATION}
                className={styles.timeline}
                itemClassName={styles.timelineItem}
                cardClassName={styles.timelineCard}
                dotClassName={styles.timelineDot}
              />
            </Suspense>
          </section>

          {/* Skills Section */}
          <section className="mb-12" aria-labelledby="skills-heading">
            <h2 
              id="skills-heading"
              className="text-2xl font-semibold mb-6 border-b-2 border-purple-500 pb-2 text-gray-800 dark:text-white"
            >
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-medium mb-4 text-blue-600 dark:text-blue-400">
                  Technical Expertise
                </h3>
                <div className="space-y-4">
                  {Object.entries(TECHNICAL_SKILLS).map(([category, { skills, proficiency }]) => (
                    <div key={category} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {category}:
                        </span>
                        <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                          {proficiency}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {skills.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-medium mb-4 text-green-600 dark:text-green-400">
                  Professional Skills
                </h3>
                <div className="space-y-4">
                  {Object.entries(SOFT_SKILLS).map(([category, skills]) => (
                    <div key={category} className="border-l-4 border-green-500 pl-4">
                      <span className="font-medium text-gray-700 dark:text-gray-300 block mb-2">
                        {category}:
                      </span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {skills.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-12" aria-labelledby="certifications-heading">
            <h2 
              id="certifications-heading"
              className="text-2xl font-semibold mb-6 border-b-2 border-orange-500 pb-2 text-gray-800 dark:text-white"
            >
              Professional Certifications
            </h2>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div 
                  key={cert.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Credential ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="text-gray-600 dark:text-gray-400">
                      {cert.period}
                    </span>
                    {cert.verificationUrl && cert.verificationUrl !== '#' && (
                      <a 
                        href={cert.verificationUrl}
                        className="block text-blue-600 dark:text-blue-400 text-sm hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify ${cert.name} certification`}
                      >
                        Verify Credential
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <footer className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Suspense fallback={<div className="w-32 h-10 bg-gray-200 animate-pulse rounded" />}>
              <DownloadButtonWrapper />
            </Suspense>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </footer>
        </main>
      </div>
    </ErrorBoundary>
  );
}