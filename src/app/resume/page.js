// src/app/resume/page.js

import React from 'react';
import Timeline from '@/components/resume/Timeline';
import DownloadButton from '@/components/resume/DownloadButton';

export const metadata = {
  title: 'Resume | Edwin Ogola - Full Stack Software Engineer',
  description: 'Professional resume and career timeline of Edwin Ogola, Full Stack Software Engineer specializing in web applications for East African markets.',
};

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Resume</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            My professional experience, education and skills
          </p>
        </div>
        <DownloadButton />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Professional Experience</h2>
        <Timeline 
          items={[
            {
              title: "Senior Software Engineer",
              company: "TechInnovate Kenya",
              location: "Nairobi, Kenya",
              period: "2022 - Present",
              description: "Led the development of scalable web applications focusing on financial technology solutions for East African markets. Implemented M-Pesa integration for multiple client projects, improving payment processing efficiency by 40%. Mentored junior developers and conducted code reviews to maintain high code quality standards.",
              technologies: ["React", "Node.js", "MongoDB", "AWS", "M-Pesa API"]
            },
            {
              title: "Full Stack Developer",
              company: "Digital Solutions Ltd",
              location: "Nairobi, Kenya",
              period: "2020 - 2022",
              description: "Designed and implemented responsive web applications for clients in the e-commerce and healthcare sectors. Developed RESTful APIs and integrated third-party services. Optimized application performance for users with varying internet connection speeds.",
              technologies: ["JavaScript", "React", "Express.js", "PostgreSQL", "Docker"]
            },
            {
              title: "Web Developer",
              company: "TechStart Kenya",
              location: "Nairobi, Kenya",
              period: "2018 - 2020",
              description: "Developed and maintained client websites with a focus on responsive design and SEO optimization. Collaborated with the design team to implement UI/UX improvements based on user feedback.",
              technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"]
            }
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Education</h2>
        <Timeline 
          items={[
            {
              title: "Bachelor of Science in Computer Science",
              company: "University of Nairobi",
              location: "Nairobi, Kenya",
              period: "2014 - 2018",
              description: "Graduated with First Class Honors. Specialized in Software Engineering and Database Systems. Final year project: Development of a mobile payment integration platform for small businesses.",
              technologies: []
            },
            {
              title: "Full Stack Web Development Certification",
              company: "Moringa School",
              location: "Nairobi, Kenya",
              period: "2018",
              description: "Intensive 12-week bootcamp focusing on modern web development technologies and practices. Developed multiple full-stack projects including an e-commerce platform for local artisans.",
              technologies: ["JavaScript", "React", "Node.js", "MongoDB"]
            },
            {
              title: "AWS Certified Solutions Architect - Associate",
              company: "Amazon Web Services",
              location: "Online",
              period: "2021",
              description: "Certification validating expertise in designing and deploying scalable systems on AWS.",
              technologies: ["AWS"]
            }
          ]}
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Key Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-3">Technical Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-32 font-medium">Frontend:</span>
                <span>React.js, Next.js, Tailwind CSS, JavaScript (ES6+)</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Backend:</span>
                <span>Node.js, Express, Python, Django</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Databases:</span>
                <span>MongoDB, PostgreSQL, MySQL, Redis</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">DevOps:</span>
                <span>AWS, Docker, CI/CD, Git</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">API Integration:</span>
                <span>RESTful APIs, GraphQL, M-Pesa, Payment Gateways</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3">Soft Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-32 font-medium">Leadership:</span>
                <span>Team leadership, Mentoring, Code reviews</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Communication:</span>
                <span>Technical writing, Client presentations</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Project:</span>
                <span>Agile methodologies, Scrum, Kanban</span>
              </li>
              <li className="flex items-center">
                <span className="w-32 font-medium">Problem-solving:</span>
                <span>Analytical thinking, Debugging, Optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Certifications</h2>
        <ul className="space-y-4">
          <li className="flex flex-col md:flex-row md:items-center">
            <span className="font-medium md:w-1/3">AWS Certified Solutions Architect</span>
            <span className="md:w-1/3">Amazon Web Services</span>
            <span className="text-gray-600 dark:text-gray-400">2021 - Present</span>
          </li>
          <li className="flex flex-col md:flex-row md:items-center">
            <span className="font-medium md:w-1/3">MongoDB Certified Developer</span>
            <span className="md:w-1/3">MongoDB Inc.</span>
            <span className="text-gray-600 dark:text-gray-400">2022 - Present</span>
          </li>
          <li className="flex flex-col md:flex-row md:items-center">
            <span className="font-medium md:w-1/3">Certified Scrum Master</span>
            <span className="md:w-1/3">Scrum Alliance</span>
            <span className="text-gray-600 dark:text-gray-400">2023 - Present</span>
          </li>
        </ul>
      </section>

      <div className="flex justify-center mt-8">
        <DownloadButton />
      </div>
    </main>
  );
}