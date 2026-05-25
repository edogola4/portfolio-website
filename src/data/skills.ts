// src/data/skills.ts
// CV-sourced skills data — all entries verified against Brandon Ogola's resume

export interface Skill {
  id: string;
  name: string;
  /** devicon font class — null triggers SVG monogram fallback */
  deviconClass: string | null;
  /** hex brand color for the monogram / accent */
  color: string;
  /** 0–100 proficiency */
  proficiency: number;
  /** Short label shown on the card */
  level: 'Expert' | 'Proficient' | 'Familiar';
}

export interface SkillDomain {
  id: string;
  label: string;
  description: string;
  accentColor: string;
  skills: Skill[];
}

// ─── Proficiency helper ───────────────────────────────────────────────────────
// Expert   ≥ 85  — daily driver, production use, can mentor others
// Proficient 65–84 — comfortable, shipped real projects
// Familiar  < 65  — used in projects, still learning

export const skillDomains: SkillDomain[] = [
  {
    id: 'languages-backend',
    label: 'Languages & Backend',
    description: 'Core languages and server-side frameworks used in production systems.',
    accentColor: '#2C5E4F',
    skills: [
      { id: 'csharp',     name: 'C#',                deviconClass: 'devicon-csharp-plain colored',             color: '#239120', proficiency: 92, level: 'Expert' },
      { id: 'dotnet',     name: '.NET 10',            deviconClass: 'devicon-dotnetcore-plain colored',         color: '#512BD4', proficiency: 90, level: 'Expert' },
      { id: 'aspnet',     name: 'ASP.NET Core',       deviconClass: 'devicon-dotnetcore-plain colored',         color: '#512BD4', proficiency: 90, level: 'Expert' },
      { id: 'typescript', name: 'TypeScript',         deviconClass: 'devicon-typescript-plain colored',         color: '#3178C6', proficiency: 88, level: 'Expert' },
      { id: 'javascript', name: 'JavaScript ES6+',    deviconClass: 'devicon-javascript-plain colored',         color: '#F7DF1E', proficiency: 85, level: 'Expert' },
      { id: 'python',     name: 'Python',             deviconClass: null,                                       color: '#3776AB', proficiency: 78, level: 'Proficient' },
      { id: 'sql',        name: 'SQL',                deviconClass: 'devicon-azuresqldatabase-plain',           color: '#CC2927', proficiency: 85, level: 'Expert' },
      { id: 'c',          name: 'C',                  deviconClass: 'devicon-c-plain colored',                  color: '#A8B9CC', proficiency: 65, level: 'Proficient' },
      { id: 'nodejs',     name: 'Node.js',            deviconClass: 'devicon-nodejs-plain colored',             color: '#339933', proficiency: 82, level: 'Proficient' },
      { id: 'fastify',    name: 'Fastify',            deviconClass: 'devicon-fastify-plain',                    color: '#202020', proficiency: 75, level: 'Proficient' },
      { id: 'express',    name: 'Express.js',         deviconClass: 'devicon-express-original',                 color: '#404040', proficiency: 80, level: 'Proficient' },
      { id: 'flask',      name: 'Flask',              deviconClass: 'devicon-flask-original',                   color: '#3A3A3A', proficiency: 72, level: 'Proficient' },
      { id: 'efcore',     name: 'Entity Framework',   deviconClass: null,                                       color: '#512BD4', proficiency: 88, level: 'Expert' },
      { id: 'prisma',     name: 'Prisma ORM',         deviconClass: 'devicon-prisma-plain',                     color: '#2D3748', proficiency: 75, level: 'Proficient' },
      { id: 'signalr',    name: 'SignalR',            deviconClass: null,                                       color: '#512BD4', proficiency: 80, level: 'Proficient' },
      { id: 'rest',       name: 'RESTful APIs',       deviconClass: null,                                       color: '#E07A5F', proficiency: 92, level: 'Expert' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'UI frameworks, state management, and styling tools used in client-facing products.',
    accentColor: '#3A5A6B',
    skills: [
      { id: 'nextjs',    name: 'Next.js 14',      deviconClass: 'devicon-nextjs-plain',                  color: '#1a1a1a', proficiency: 88, level: 'Expert' },
      { id: 'react',     name: 'React.js',        deviconClass: 'devicon-react-original colored',        color: '#61DAFB', proficiency: 85, level: 'Expert' },
      { id: 'blazor',    name: 'Blazor',          deviconClass: 'devicon-blazor-original colored',       color: '#512BD4', proficiency: 85, level: 'Expert' },
      { id: 'angular',   name: 'Angular',         deviconClass: 'devicon-angularjs-plain colored',       color: '#DD0031', proficiency: 65, level: 'Proficient' },
      { id: 'tailwind',  name: 'Tailwind CSS',    deviconClass: 'devicon-tailwindcss-plain colored',     color: '#06B6D4', proficiency: 90, level: 'Expert' },
      { id: 'zustand',   name: 'Zustand',         deviconClass: null,                                    color: '#443E38', proficiency: 75, level: 'Proficient' },
      { id: 'redux',     name: 'Redux Toolkit',   deviconClass: 'devicon-redux-original colored',        color: '#764ABC', proficiency: 78, level: 'Proficient' },
      { id: 'framer',    name: 'Framer Motion',   deviconClass: null,                                    color: '#E07A5F', proficiency: 80, level: 'Proficient' },
      { id: 'html5',     name: 'HTML5',           deviconClass: 'devicon-html5-plain colored',           color: '#E34F26', proficiency: 95, level: 'Expert' },
      { id: 'css3',      name: 'CSS3',            deviconClass: 'devicon-css3-plain colored',            color: '#1572B6', proficiency: 90, level: 'Expert' },
    ],
  },
  {
    id: 'data-cloud',
    label: 'Data & Cloud',
    description: 'Databases, cloud platforms, and DevOps tooling used in production deployments.',
    accentColor: '#6B7F82',
    skills: [
      { id: 'postgresql', name: 'PostgreSQL',      deviconClass: 'devicon-postgresql-plain colored',          color: '#336791', proficiency: 85, level: 'Expert' },
      { id: 'pgvector',   name: 'pgvector',        deviconClass: null,                                        color: '#336791', proficiency: 75, level: 'Proficient' },
      { id: 'sqlserver',  name: 'SQL Server',      deviconClass: 'devicon-microsoftsqlserver-plain colored',   color: '#CC2927', proficiency: 88, level: 'Expert' },
      { id: 'mysql',      name: 'MySQL',           deviconClass: 'devicon-mysql-plain colored',               color: '#4479A1', proficiency: 78, level: 'Proficient' },
      { id: 'mongodb',    name: 'MongoDB',         deviconClass: 'devicon-mongodb-plain colored',             color: '#47A248', proficiency: 75, level: 'Proficient' },
      { id: 'redis',      name: 'Redis',           deviconClass: 'devicon-redis-plain colored',               color: '#DC382D', proficiency: 75, level: 'Proficient' },
      { id: 'azure',      name: 'Azure',           deviconClass: 'devicon-azure-plain colored',               color: '#0078D4', proficiency: 85, level: 'Expert' },
      { id: 'aws',        name: 'AWS',             deviconClass: 'devicon-amazonwebservices-plain colored',    color: '#FF9900', proficiency: 72, level: 'Proficient' },
      { id: 'docker',     name: 'Docker',          deviconClass: 'devicon-docker-plain colored',              color: '#2496ED', proficiency: 80, level: 'Proficient' },
      { id: 'kubernetes', name: 'Kubernetes',      deviconClass: 'devicon-kubernetes-plain colored',          color: '#326CE5', proficiency: 68, level: 'Proficient' },
      { id: 'terraform',  name: 'Terraform',       deviconClass: 'devicon-terraform-plain colored',           color: '#7B42BC', proficiency: 75, level: 'Proficient' },
      { id: 'ghactions',  name: 'GitHub Actions',  deviconClass: 'devicon-githubactions-plain colored',       color: '#2088FF', proficiency: 80, level: 'Proficient' },
      { id: 'azuredevops',name: 'Azure DevOps',    deviconClass: 'devicon-azuredevops-plain colored',         color: '#0078D4', proficiency: 78, level: 'Proficient' },
      { id: 'git',        name: 'Git',             deviconClass: 'devicon-git-plain colored',                 color: '#F05032', proficiency: 92, level: 'Expert' },
    ],
  },
  {
    id: 'ai-integrations',
    label: 'AI & Integrations',
    description: 'AI/LLM APIs, payment gateways, and third-party integrations shipped in real products.',
    accentColor: '#E07A5F',
    skills: [
      { id: 'claude',      name: 'Anthropic Claude',     deviconClass: null, color: '#D4A853', proficiency: 78, level: 'Proficient' },
      { id: 'openai',      name: 'OpenAI Embeddings',    deviconClass: null, color: '#10A37F', proficiency: 75, level: 'Proficient' },
      { id: 'mpesa',       name: 'M-Pesa Daraja',        deviconClass: null, color: '#00A651', proficiency: 80, level: 'Proficient' },
      { id: 'pesapal',     name: 'Pesapal',              deviconClass: null, color: '#E31837', proficiency: 72, level: 'Proficient' },
      { id: 'shopify',     name: 'Shopify API',          deviconClass: 'devicon-shopify-plain colored', color: '#96BF48', proficiency: 70, level: 'Proficient' },
      { id: 'whatsapp',    name: 'WhatsApp Business',    deviconClass: null, color: '#25D366', proficiency: 72, level: 'Proficient' },
      { id: 'africas',     name: "Africa's Talking",     deviconClass: null, color: '#FF6600', proficiency: 70, level: 'Proficient' },
      { id: 'sendgrid',    name: 'SendGrid',             deviconClass: null, color: '#1A82E2', proficiency: 75, level: 'Proficient' },
      { id: 'turborepo',   name: 'Turborepo',            deviconClass: null, color: '#EF4444', proficiency: 72, level: 'Proficient' },
    ],
  },
  {
    id: 'practices',
    label: 'Practices & Testing',
    description: 'Engineering practices, testing frameworks, and quality standards applied across all projects.',
    accentColor: '#2C5E4F',
    skills: [
      { id: 'tdd',          name: 'TDD',                  deviconClass: null, color: '#2C5E4F', proficiency: 82, level: 'Proficient' },
      { id: 'xunit',        name: 'xUnit',                deviconClass: null, color: '#239120', proficiency: 85, level: 'Expert' },
      { id: 'jest',         name: 'Jest',                 deviconClass: 'devicon-jest-plain colored', color: '#C21325', proficiency: 78, level: 'Proficient' },
      { id: 'pytest',       name: 'pytest',               deviconClass: null, color: '#3776AB', proficiency: 72, level: 'Proficient' },
      { id: 'sonarqube',    name: 'SonarQube',            deviconClass: 'devicon-sonarqube-plain colored', color: '#4E9BCD', proficiency: 72, level: 'Proficient' },
      { id: 'cleanarch',    name: 'Clean Architecture',   deviconClass: null, color: '#2C5E4F', proficiency: 85, level: 'Expert' },
      { id: 'cqrs',         name: 'CQRS',                 deviconClass: null, color: '#3A5A6B', proficiency: 80, level: 'Proficient' },
      { id: 'solid',        name: 'SOLID Principles',     deviconClass: null, color: '#2C5E4F', proficiency: 88, level: 'Expert' },
      { id: 'microservices',name: 'Microservices',        deviconClass: null, color: '#6B7F82', proficiency: 78, level: 'Proficient' },
      { id: 'jwt',          name: 'JWT / Auth',           deviconClass: null, color: '#E07A5F', proficiency: 85, level: 'Expert' },
    ],
  },
];
