// src/app/resume/page.js

'use client';

import React from 'react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl bg-[#F7F7F7] dark:bg-[#1E1E1E]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-[#1E3F2B] dark:text-[#E8F5E9] mb-3 font-display">Professional Resume</h1>
          <p className="text-lg text-[#5A6A6F] dark:text-neutral-300">
            A comprehensive overview of my professional journey and expertise
          </p>
        </div>
        <Link 
          href="/files/Ogola.pdf" 
          download="Ogola.pdf"
          className="bg-[#D45D42] hover:bg-[#B84C35] text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Full CV
        </Link>
      </div>

      <section className="mb-20">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl font-semibold text-[#1E3F2B] dark:text-[#E8F5E9] pr-4">Professional Experience</h2>
          <div className="flex-1 border-t border-[#1E3F2B]/30 dark:border-[#E8F5E9]/30"></div>
        </div>
        
        <div className="space-y-10">
          {/* Software Engineer - Cognativ */}
          <div className="group relative pl-10 border-l-2 border-[#1E3F2B] dark:border-[#4A8C5E] hover:border-[#D45D42] transition-all duration-300">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1E3F2B] dark:bg-[#4A8C5E] group-hover:bg-[#D45D42] transition-colors duration-300 ring-4 ring-white dark:ring-[#1E3F2B]"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Software Engineer</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Cognativ Technology Limited</span>
                    <span className="mx-2 text-neutral-400">•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-100 dark:border-primary-800/50 whitespace-nowrap">
                  November 2024 – January 2026
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Developed and maintained scalable backend services and APIs for SmartSaaS™ enterprise cloud platform using .NET Core, C#, Blazor Server, and Entity Framework Core</li>
                <li>Reduced API response times by 35% through strategic indexing, query optimisation, and Entity Framework Core migrations</li>
                <li>Built responsive Blazor Server components with real-time data synchronisation via SignalR, improving UX across enterprise clients</li>
                <li>Achieved 95% bug-free deployment rate collaborating with Product, QA, and DevOps teams in agile sprints</li>
                <li>Maintained 80% code coverage through unit and integration testing with xUnit</li>
                <li>Designed RESTful APIs with comprehensive error handling, validation, and JWT authentication following industry security standards</li>
                <li>Mentored junior developers on .NET best practices, SOLID principles, and clean code architecture</li>
              </ul>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-5">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['C#', 'ASP.NET Core', '.NET Core', 'Blazor Server', 'Entity Framework Core', 'SQL Server', 'SignalR', 'RESTful APIs', 'xUnit', 'Azure DevOps'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Operations Intern - Alliance Bioversity */}
          <div className="group relative pl-10 border-l-2 border-[#D4A017] dark:border-[#E8B949] hover:border-[#D45D42] transition-all duration-300">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#D4A017] group-hover:bg-[#D45D42] transition-colors duration-300 ring-4 ring-white dark:ring-[#1E3F2B]"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Operations Intern</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Alliance Bioversity CIAT</span>
                    <span className="mx-2 text-neutral-400">•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-[#F8F1E5] dark:bg-[#2D2318] text-[#D45D42] dark:text-[#E89A7B] text-sm font-medium rounded-full border border-[#F0E0D0] dark:border-[#4A3A2A] whitespace-nowrap shadow-sm">
                  November 2024 – April 2025
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Developed automated backend systems using Python and Flask, reducing operational processing time by 20% through optimised data workflows</li>
                <li>Built scalable data processing tools and internal web applications for a cross-functional team of 12 members, reducing manual tasks by 40%</li>
                <li>Integrated PostgreSQL with Python applications, writing optimised SQL queries and implementing data validation for accurate reporting</li>
                <li>Wrote comprehensive technical documentation including API specifications, system architecture diagrams, and user guides</li>
                <li>Collaborated with stakeholders in agile environment to gather requirements and translate business needs into technical specifications</li>
              </ul>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-5">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['Python', 'Flask', 'Django', 'PostgreSQL', 'REST APIs', 'Docker'].map(tech => (
                    <span key={tech} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Software Developer Intern - REAL BIZ */}
          <div className="group relative pl-10 border-l-2 border-[#1E3F2B] dark:border-[#4A8C5E] hover:border-[#D45D42] transition-all duration-300">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1E3F2B] dark:bg-[#4A8C5E] group-hover:bg-[#D45D42] transition-colors duration-300 ring-4 ring-white dark:ring-[#1E3F2B]"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Software Developer Intern</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">REAL BIZ Digital</span>
                    <span className="mx-2 text-neutral-400">•</span>
                    <span>Remote</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-tertiary-50 dark:bg-tertiary-900/20 text-tertiary-700 dark:text-tertiary-300 text-sm font-medium rounded-full border border-tertiary-100 dark:border-tertiary-800/50 whitespace-nowrap">
                  June 2023 – September 2023
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Developed and maintained responsive web applications using React.js, TypeScript, and Node.js for 3 client projects, increasing user engagement by 25%</li>
                <li>Designed and implemented RESTful APIs with Express.js, reducing data processing time by 30% through efficient algorithms</li>
                <li>Built reusable React components following component-based architecture with Redux Toolkit for state management</li>
                <li>Achieved 75% code coverage writing unit and integration tests with Jest</li>
                <li>Participated in agile ceremonies including sprint planning, retrospectives, and daily standups</li>
              </ul>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-5">
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {['React', 'TypeScript', 'Node.js', 'Express.js', 'Redux Toolkit', 'MongoDB', 'Jest', 'Git'].map(tech => (
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

      {/* Currently Building Section */}
      <section className="mb-20">
        <div className="bg-gradient-to-br from-[#1E3F2B]/5 to-[#D45D42]/5 dark:from-[#1E3F2B]/20 dark:to-[#D45D42]/20 rounded-2xl p-8 border-2 border-[#D45D42]/30 dark:border-[#D45D42]/50 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-3 h-3 bg-[#D45D42] rounded-full animate-pulse mr-3"></div>
            <h2 className="text-2xl font-bold text-[#1E3F2B] dark:text-[#E8F5E9]">Currently Building</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-2">SmartSchedule Healthcare — Enterprise AI Scheduling SaaS</h3>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#D45D42] text-white text-sm font-semibold rounded-full">Healthcare Technology Architect</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-semibold rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Active Development
                </span>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Architecting an enterprise-grade HIPAA-compliant healthcare appointment scheduling platform on .NET 10 and Azure. Features AI-powered no-show prediction targeting 85% ML accuracy, bidirectional EHR integration via HL7 FHIR R4, and Terraform-managed multi-environment Azure infrastructure.
            </p>
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3 uppercase tracking-wider">Tech Stack</h4>
              <div className="flex flex-wrap gap-2.5">
                {['.NET 10', 'C#', 'ASP.NET Core', 'Blazor', 'Azure', 'ML.NET', 'Terraform', 'Docker', 'SQL Server', 'GitHub Actions', 'SonarCloud'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-primary-700 dark:text-white mb-10 pb-2 border-b border-neutral-200 dark:border-neutral-700">Education & Certifications</h2>
        
        <div className="space-y-10">
          {/* University of Nairobi */}
          <div className="relative pl-10 pb-8 border-l-2 border-primary-300 dark:border-primary-600 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 group-hover:bg-accent-500 transition-colors ring-4 ring-white dark:ring-neutral-900"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Bachelor of Science in Computer Science</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">University of Nairobi</span>
                    <span className="hidden sm:inline mx-2 text-neutral-400">•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full border border-primary-100 dark:border-primary-800/50 whitespace-nowrap">
                  2021 – 2025
                </div>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-200 text-sm font-semibold rounded-full">Top 15% of graduating class</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Comprehensive software engineering curriculum covering Data Structures & Algorithms, Software Engineering, Database Management Systems, Operating Systems, Computer Networks & Security, Distributed Systems, and Cloud Computing. Built multiple full-stack applications demonstrating complete software development lifecycle expertise.
              </p>
            </div>
          </div>

          {/* ALX Software Engineering */}
          <div className="relative pl-10 pb-8 border-l-2 border-tertiary-400 dark:border-tertiary-500 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-tertiary-500 ring-4 ring-white dark:ring-neutral-900 transition-colors group-hover:bg-accent-500"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">ALX Software Engineering Program</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">ALX Africa</span>
                    <span className="hidden sm:inline mx-2 text-neutral-400">•</span>
                    <span>Remote</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-tertiary-50 dark:bg-tertiary-900/20 text-tertiary-700 dark:text-tertiary-300 text-sm font-medium rounded-full border border-tertiary-100 dark:border-tertiary-800/50 whitespace-nowrap">
                  2023 – 2024
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-200 text-sm font-semibold rounded-full">Top 15% of cohort</span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full">1,200+ hours</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Intensive software engineering program emphasising computer science fundamentals, low-level programming in C, system design, and software architecture. Built 15+ projects including RESTful APIs, full-stack web applications, and system utilities using Python, C, and JavaScript.
              </p>
            </div>
          </div>

          {/* Moringa School */}
          <div className="relative pl-10 border-l-2 border-gold-400 dark:border-gold-500 group">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold-500 ring-4 ring-white dark:ring-neutral-900 transition-colors group-hover:bg-accent-500"></div>
            <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-1">Software Development Bootcamp</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Moringa School</span>
                    <span className="hidden sm:inline mx-2 text-neutral-400">•</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="px-4 py-1.5 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300 text-sm font-medium rounded-full border border-gold-100 dark:border-gold-800/50 whitespace-nowrap">
                  June 2022 – December 2022
                </div>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-gold-100 dark:bg-gold-900/30 text-gold-800 dark:text-gold-200 text-sm font-semibold rounded-full">Top 15% of cohort</span>
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full">24-week program</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Intensive full-stack development program covering JavaScript, TypeScript, React, Node.js, Python, and database management. Graduated in top 15% of cohort with 8+ production-ready applications demonstrating software engineering best practices and modern development workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-primary-700 dark:text-white mb-10 pb-2 border-b border-neutral-200 dark:border-neutral-700">Key Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-1.5 bg-accent-500 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg mb-4 text-primary-800 dark:text-white">Core Languages</h3>
            <div className="flex flex-wrap gap-2.5">
              {['C#', '.NET', 'TypeScript', 'JavaScript (ES6+)', 'Python', 'C', 'SQL'].map(skill => (
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
              {['ASP.NET Core', '.NET Core', 'Entity Framework Core', 'Blazor Server', 'Node.js', 'Express.js', 'Flask', 'RESTful APIs', 'Microservices', 'SignalR'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-1.5 bg-gold-500 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2.5">
              {['React.js', 'TypeScript', 'Blazor WebAssembly', 'Redux Toolkit', 'HTML5', 'CSS3', 'Responsive Design'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-1.5 bg-primary-500 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-4">Databases</h3>
            <div className="flex flex-wrap gap-2.5">
              {['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-1.5 bg-accent-500 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-4">Cloud & DevOps</h3>
            <div className="flex flex-wrap gap-2.5">
              {['Azure', 'AWS', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'GitHub Actions', 'Azure DevOps', 'Linux/Unix'].map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-10 h-1.5 bg-tertiary-500 rounded-full mb-4"></div>
            <h3 className="font-bold text-lg text-primary-800 dark:text-white mb-4">Testing & Quality</h3>
            <div className="flex flex-wrap gap-2.5">
              {['xUnit', 'Jest', 'pytest', 'TDD', 'Integration Testing', 'SonarQube', 'Code Coverage'].map(skill => (
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
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">AWS Certified Solutions Architect – Associate</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">Amazon Web Services</p>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                  Designing distributed systems on AWS with emphasis on high availability, scalability, and cost-optimised architectures for web applications.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <span className="px-4 py-1.5 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 text-sm font-medium rounded-full border border-accent-100 dark:border-accent-800/50 whitespace-nowrap">
                  2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
