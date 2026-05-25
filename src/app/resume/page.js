// src/app/resume/page.js
'use client';

import React from 'react';
import Link from 'next/link';

const techBadge = (tech) => (
  <span key={tech} className="px-3 py-1.5 bg-neutral-50 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 text-xs font-medium rounded-full border border-neutral-100 dark:border-neutral-700">
    {tech}
  </span>
);

const SectionHeading = ({ children }) => (
  <div className="flex items-center mb-10">
    <h2 className="text-2xl font-semibold text-[#2C5E4F] dark:text-[#E8F5E9] pr-4 whitespace-nowrap">{children}</h2>
    <div className="flex-1 border-t border-[#2C5E4F]/20 dark:border-[#E8F5E9]/20" />
  </div>
);

const TimelineDot = ({ color = 'primary' }) => (
  <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-4 ring-white dark:ring-neutral-900 transition-colors duration-300
    ${color === 'accent' ? 'bg-[#D4A373] group-hover:bg-[#E07A5F]' : 'bg-[#2C5E4F] dark:bg-[#4A8C5E] group-hover:bg-[#E07A5F]'}`}
  />
);

export default function ResumePage() {
  return (
    <main className="container-custom py-12 max-w-5xl">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-bold text-[#2C5E4F] dark:text-[#E8F5E9] mb-2">Professional Resume</h1>
          <p className="text-[#2B2D42]/70 dark:text-neutral-300">Software Engineer · Nairobi, Kenya · Open to remote &amp; hybrid</p>
        </div>
        <a
          href="/files/EdOgola (1).pdf"
          download="Brandon_Ogola_CV.pdf"
          className="inline-flex items-center gap-2 bg-[#E07A5F] hover:bg-[#c9664d] text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Full CV
        </a>
      </div>

      {/* ── Professional Summary ── */}
      <section className="mb-16">
        <SectionHeading>Professional Summary</SectionHeading>
        <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm">
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Software Engineer with 2+ years of hands-on experience delivering full-stack applications across fintech, healthcare, and SaaS domains. Proven ability to ship production-grade systems end-to-end — from RESTful API design and database optimisation to cloud deployment and CI/CD automation. Built and integrated real-world payment systems (M-Pesa, Pesapal), AI-powered features (Anthropic Claude, OpenAI embeddings), and scalable infrastructure on Azure and AWS. Track record of measurable impact: 35% faster API response times, 40% reduction in manual processing, and consistently high test coverage. Currently based in Nairobi; open to on-site, hybrid, and remote-first opportunities globally.
          </p>
        </div>
      </section>

      {/* ── Professional Experience ── */}
      <section className="mb-20">
        <SectionHeading>Professional Experience</SectionHeading>

        <div className="space-y-10">

          {/* Currently Building */}
          <div className="bg-gradient-to-br from-[#2C5E4F]/5 to-[#E07A5F]/5 dark:from-[#2C5E4F]/20 dark:to-[#E07A5F]/20 rounded-2xl p-8 border-2 border-[#E07A5F]/30 dark:border-[#E07A5F]/50 shadow-sm">
            <div className="flex items-center mb-4">
              <span className="w-3 h-3 bg-[#E07A5F] rounded-full animate-pulse mr-3" />
              <h2 className="text-xl font-bold text-[#2C5E4F] dark:text-[#E8F5E9]">Currently Building</h2>
            </div>
            <h3 className="text-lg font-bold text-[#2B2D42] dark:text-white mb-1">SmartSchedule Healthcare — Enterprise AI Scheduling SaaS</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">.NET 10 · Azure · Microservices · CQRS · Terraform · MVP Q2 2026</p>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm">
              Architecting a HIPAA-compliant appointment scheduling SaaS targeting 40% no-show reduction and 50% administrative efficiency gains. Cloud-native microservices on Azure with full Terraform IaC across dev/staging/production, Azure DevOps CI/CD, SonarQube quality gates, and a 50+ page technical specification.
            </p>
          </div>

          {/* Software Engineer — Cognativ */}
          <div className="group relative pl-10 border-l-2 border-[#2C5E4F] dark:border-[#4A8C5E] hover:border-[#E07A5F] transition-all duration-300">
            <TimelineDot />
            <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-[#2C5E4F] dark:text-white mb-1">Software Engineer</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Cognativ Technology Limited</span>
                    <span className="mx-2">·</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-[#2C5E4F]/10 dark:bg-[#2C5E4F]/30 text-[#2C5E4F] dark:text-[#6B9FB1] text-sm font-medium rounded-full whitespace-nowrap">
                  November 2025 – January 2026
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Designed and shipped RESTful APIs for the SmartSaaS™ enterprise cloud platform using ASP.NET Core and C#, serving clients across multiple industries</li>
                <li>Cut API response times by 35% by restructuring SQL Server queries, adding targeted indexes, and implementing Entity Framework Core migrations</li>
                <li>Built real-time Blazor Server components with SignalR-powered live data synchronisation, reducing client-reported latency complaints to near zero</li>
                <li>Drove test coverage to 80% via xUnit unit and integration tests; contributed to CI/CD pipeline setup and architectural design reviews</li>
              </ul>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-5">
                <div className="flex flex-wrap gap-2">
                  {['C#', 'ASP.NET Core', '.NET 10', 'Blazor Server', 'Entity Framework Core', 'SQL Server', 'SignalR', 'xUnit', 'Azure DevOps'].map(techBadge)}
                </div>
              </div>
            </div>
          </div>

          {/* Freelance — May 2025 */}
          <div className="group relative pl-10 border-l-2 border-[#D4A373] dark:border-[#D4A373] hover:border-[#E07A5F] transition-all duration-300">
            <TimelineDot color="accent" />
            <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-[#2C5E4F] dark:text-white mb-1">Freelance Full-Stack Developer</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Self-Employed</span>
                    <span className="mx-2">·</span>
                    <span>Remote</span>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-[#D4A373]/15 dark:bg-[#D4A373]/20 text-[#a07040] dark:text-[#D4A373] text-sm font-medium rounded-full whitespace-nowrap">
                  May 2025 – October 2025
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Architected SmartSchedule Healthcare — an AI-powered SaaS platform on .NET 10+ and Azure using microservices, CQRS/Event Sourcing, and Terraform Infrastructure as Code</li>
                <li>Delivered a Blazor CRUD application with SignalR real-time notifications and 85% unit test coverage, following clean layered architecture throughout</li>
                <li>Contributed to open source projects on GitHub, shipping pull requests that improved code quality across distributed developer communities</li>
              </ul>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-5">
                <div className="flex flex-wrap gap-2">
                  {['.NET 10', 'C#', 'Blazor', 'Azure', 'Terraform', 'CQRS', 'SignalR', 'Docker', 'GitHub Actions'].map(techBadge)}
                </div>
              </div>
            </div>
          </div>

          {/* Operations Intern — Alliance Bioversity */}
          <div className="group relative pl-10 border-l-2 border-[#2C5E4F] dark:border-[#4A8C5E] hover:border-[#E07A5F] transition-all duration-300">
            <TimelineDot />
            <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-[#2C5E4F] dark:text-white mb-1">Operations Intern</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Alliance Bioversity CIAT</span>
                    <span className="mx-2">·</span>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-[#2C5E4F]/10 dark:bg-[#2C5E4F]/30 text-[#2C5E4F] dark:text-[#6B9FB1] text-sm font-medium rounded-full whitespace-nowrap">
                  November 2024 – April 2025
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Built Python/Flask RESTful APIs that automated data workflows, cutting operational processing time by 20%</li>
                <li>Designed and deployed internal web applications used by a cross-functional team of 12, eliminating 40% of recurring manual tasks</li>
                <li>Integrated PostgreSQL with Python services, writing optimised queries and data validation pipelines for accurate reporting</li>
                <li>Authored API specifications and system architecture diagrams that became the team&apos;s primary technical reference, reducing onboarding time for new staff</li>
              </ul>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-5">
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'PostgreSQL', 'REST APIs', 'Docker'].map(techBadge)}
                </div>
              </div>
            </div>
          </div>

          {/* Freelance — Oct 2023 */}
          <div className="group relative pl-10 border-l-2 border-[#D4A373] dark:border-[#D4A373] hover:border-[#E07A5F] transition-all duration-300">
            <TimelineDot color="accent" />
            <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-[#2C5E4F] dark:text-white mb-1">Freelance Full-Stack Developer</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">Self-Employed</span>
                    <span className="mx-2">·</span>
                    <span>Remote</span>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-[#D4A373]/15 dark:bg-[#D4A373]/20 text-[#a07040] dark:text-[#D4A373] text-sm font-medium rounded-full whitespace-nowrap">
                  October 2023 – October 2024
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Built Riggs London Kenya — a mobile-first e-commerce monorepo using Next.js 14, Fastify, PostgreSQL with pgvector, and Redis; integrated M-Pesa STK Push, Pesapal, and an Anthropic Claude AI chatbot for purchase guidance</li>
                <li>Implemented semantic product search using OpenAI text-embedding-3-small and pgvector; delivered real-time order notifications via WhatsApp Business API, Africa&apos;s Talking, and SendGrid with Shopify as inventory source of truth</li>
                <li>Built a real-time collaborative coding platform using TypeScript, Node.js, Socket.io, and Redis with WebSocket-powered multi-user synchronisation</li>
                <li>Deployed all projects on AWS/Railway/Vercel with GitHub Actions CI/CD pipelines for automated testing and zero-downtime releases</li>
              </ul>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-5">
                <div className="flex flex-wrap gap-2">
                  {['Next.js 14', 'Fastify', 'PostgreSQL', 'pgvector', 'Redis', 'Prisma', 'Turborepo', 'M-Pesa Daraja', 'Anthropic Claude', 'OpenAI', 'TypeScript', 'Node.js', 'Socket.io'].map(techBadge)}
                </div>
              </div>
            </div>
          </div>

          {/* Software Developer Intern — REAL BIZ */}
          <div className="group relative pl-10 border-l-2 border-[#2C5E4F] dark:border-[#4A8C5E] hover:border-[#E07A5F] transition-all duration-300">
            <TimelineDot />
            <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-5">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-[#2C5E4F] dark:text-white mb-1">Software Developer Intern</h3>
                  <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="font-medium">REAL BIZ Digital</span>
                    <span className="mx-2">·</span>
                    <span>Remote</span>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-[#2C5E4F]/10 dark:bg-[#2C5E4F]/30 text-[#2C5E4F] dark:text-[#6B9FB1] text-sm font-medium rounded-full whitespace-nowrap">
                  June 2023 – September 2023
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300 text-sm">
                <li>Delivered responsive web applications in React.js, TypeScript, and Node.js across 3 client projects, lifting user engagement by 25%</li>
                <li>Designed Express.js REST APIs that reduced data processing time by 30% through backend optimisation and efficient query design</li>
                <li>Built reusable React component library with Redux Toolkit state management, adopted across all active client projects</li>
                <li>Achieved 75% test coverage with Jest unit and integration tests across all 3 projects</li>
              </ul>
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 mt-5">
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Redux Toolkit', 'MongoDB', 'Jest', 'Git'].map(techBadge)}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Education ── */}
      <section className="mb-20">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-8">

          <div className="relative pl-10 border-l-2 border-[#2C5E4F]/40 dark:border-[#4A8C5E]/60 group">
            <TimelineDot />
            <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#2C5E4F] dark:text-white mb-1">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">University of Nairobi · Nairobi, Kenya</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1.5 bg-[#2C5E4F]/10 dark:bg-[#2C5E4F]/30 text-[#2C5E4F] dark:text-[#6B9FB1] text-sm font-medium rounded-full whitespace-nowrap">2021 – 2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Data Structures &amp; Algorithms, Database Management Systems, Software Engineering, Operating Systems, Computer Networks &amp; Security, Distributed Systems.
              </p>
            </div>
          </div>

          <div className="relative pl-10 border-l-2 border-[#D4A373]/60 dark:border-[#D4A373]/60 group">
            <TimelineDot color="accent" />
            <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#2C5E4F] dark:text-white mb-1">ALX Software Engineering Program</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">ALX Africa · Remote</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1.5 bg-[#D4A373]/15 dark:bg-[#D4A373]/20 text-[#a07040] dark:text-[#D4A373] text-sm font-medium rounded-full whitespace-nowrap">2023 – 2024</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Intensive programme covering CS fundamentals, low-level programming in C, system design, and software architecture. Built 15+ projects spanning RESTful APIs, full-stack applications, and system utilities.
              </p>
            </div>
          </div>

          <div className="relative pl-10 border-l-2 border-[#2C5E4F]/40 dark:border-[#4A8C5E]/60 group">
            <TimelineDot />
            <div className="bg-white dark:bg-neutral-900/50 rounded-xl p-7 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#2C5E4F] dark:text-white mb-1">Software Development Bootcamp</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Moringa School · Nairobi, Kenya</p>
                </div>
                <span className="mt-2 md:mt-0 px-4 py-1.5 bg-[#2C5E4F]/10 dark:bg-[#2C5E4F]/30 text-[#2C5E4F] dark:text-[#6B9FB1] text-sm font-medium rounded-full whitespace-nowrap">June 2022 – December 2022</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                24-week full-stack programme covering JavaScript, TypeScript, React, Node.js, Python, and database management. Delivered 8+ production-ready applications using agile methodologies, TDD, and pair programming.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Technical Skills ── */}
      <section className="mb-20">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'Languages', color: 'accent', skills: ['C#', 'TypeScript', 'JavaScript (ES6+)', 'Python', 'SQL', 'C'] },
            { label: 'Backend', color: 'primary', skills: ['ASP.NET Core (.NET 10+)', 'Node.js', 'Fastify', 'Express.js', 'Flask', 'Entity Framework Core', 'Prisma ORM', 'RESTful APIs', 'SignalR'] },
            { label: 'Frontend', color: 'secondary', skills: ['Next.js 14', 'React.js', 'Angular', 'Blazor (Server & WASM)', 'Tailwind CSS', 'Zustand', 'Redux Toolkit', 'Framer Motion'] },
            { label: 'Databases', color: 'primary', skills: ['PostgreSQL (pgvector)', 'SQL Server', 'MySQL', 'MongoDB', 'Redis'] },
            { label: 'Cloud & DevOps', color: 'accent', skills: ['Azure', 'AWS', 'Railway', 'Vercel', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Azure DevOps', 'CI/CD Pipelines'] },
            { label: 'AI & Integrations', color: 'secondary', skills: ['Anthropic Claude API', 'OpenAI Embeddings', 'pgvector Semantic Search', 'M-Pesa Daraja API', 'Pesapal', 'Shopify API', 'WhatsApp Business API', 'Africa\'s Talking', 'SendGrid'] },
            { label: 'Testing & Quality', color: 'primary', skills: ['TDD', 'xUnit', 'Jest', 'pytest', 'SonarQube', 'Unit & Integration Testing'] },
            { label: 'Practices', color: 'accent', skills: ['Clean Architecture', 'SOLID', 'Microservices', 'CQRS', 'Dependency Injection', 'JWT Authentication', 'Agile/Scrum', 'Turborepo (Monorepo)'] },
          ].map(({ label, color, skills }) => (
            <div key={label} className="bg-white dark:bg-neutral-900/50 rounded-xl p-6 border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300">
              <div className={`w-10 h-1.5 rounded-full mb-4 ${
                color === 'accent' ? 'bg-[#E07A5F]' : color === 'secondary' ? 'bg-[#D4A373]' : 'bg-[#2C5E4F]'
              }`} />
              <h3 className="font-bold text-base text-[#2C5E4F] dark:text-white mb-3">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(techBadge)}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
