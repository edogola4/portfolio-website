/**
 * Blog data for Brandon Ogola's portfolio
 * Planned articles on .NET, Azure, AI/ML, and software engineering
 */

export const blogPosts = [
  {
    id: '1',
    title: 'Building a Multi-Tenant API with ASP.NET Core and JWT Authentication',
    slug: 'multi-tenant-api-aspnet-jwt',
    excerpt: 'A practical walkthrough of how I architected the multi-tenant authentication layer for SmartSchedule Healthcare — covering tenant resolution, JWT configuration, role-based access control, and the security pitfalls I ran into along the way.',
    category: '.NET & C#',
    tags: ['ASP.NET Core', 'JWT', 'Multi-Tenant', 'Authentication', 'Security'],
    readTime: '8 min read',
    status: 'coming-soon'
  },
  {
    id: '2',
    title: 'Terraform on Azure from Scratch: Modules, Environments, and State Management',
    slug: 'terraform-azure-modules-environments',
    excerpt: 'How I structured Terraform modules for dev, staging, and production Azure environments on SmartSchedule — including networking, Key Vault, SQL Database, Redis, and Service Bus — and what I would do differently next time.',
    category: 'Azure & Cloud',
    tags: ['Terraform', 'Azure', 'IaC', 'DevOps', 'Infrastructure'],
    readTime: '10 min read',
    status: 'coming-soon'
  },
  {
    id: '3',
    title: 'Setting Up a Production CI/CD Pipeline with GitHub Actions, SonarCloud, and Azure DevOps',
    slug: 'production-cicd-github-actions-sonarcloud',
    excerpt: 'A detailed breakdown of the multi-stage pipeline I built for SmartSchedule Healthcare: automated testing, SonarCloud quality gates, OWASP dependency scanning, Trivy container security checks, and deployment to Azure — all triggered on PR merge.',
    category: 'DevOps',
    tags: ['CI/CD', 'GitHub Actions', 'SonarCloud', 'Azure DevOps', 'Security'],
    readTime: '12 min read',
    status: 'coming-soon'
  },
  {
    id: '4',
    title: 'Clean Architecture in .NET: How I Structure Enterprise Applications',
    slug: 'clean-architecture-dotnet-enterprise',
    excerpt: 'A practical guide to the layered architecture pattern I use across my .NET projects — separating Core, Infrastructure, and API concerns with interfaces, dependency injection, the Repository pattern, and MediatR for CQRS.',
    category: 'Architecture',
    tags: ['.NET', 'Clean Architecture', 'CQRS', 'MediatR', 'Design Patterns'],
    readTime: '9 min read',
    status: 'coming-soon'
  },
  {
    id: '5',
    title: 'Comparing GPT-3.5 Turbo and Claude 3 for Structured Data Extraction: Lessons from Building an LLM Evaluator',
    slug: 'gpt-vs-claude-structured-data-extraction',
    excerpt: 'What I learned building a Python framework to benchmark OpenAI GPT-3.5 Turbo against Anthropic Claude 3 on email signature extraction — covering prompt engineering strategies, evaluation methodology, and which model won and why.',
    category: 'AI/ML',
    tags: ['LLMs', 'GPT-3.5', 'Claude 3', 'Prompt Engineering', 'Python'],
    readTime: '7 min read',
    status: 'coming-soon'
  },
  {
    id: '6',
    title: 'ML.NET for No-Show Prediction: Building a Healthcare AI Model from Scratch',
    slug: 'mlnet-no-show-prediction-healthcare',
    excerpt: 'How I am approaching the no-show prediction feature in SmartSchedule Healthcare — feature engineering from appointment history, model selection in ML.NET, targeting 85% AUC-ROC, and the challenges of training on limited healthcare data.',
    category: 'AI/ML',
    tags: ['ML.NET', 'Machine Learning', 'Healthcare', 'Predictive Models', 'C#'],
    readTime: '11 min read',
    status: 'coming-soon'
  },
  {
    id: '7',
    title: 'HIPAA Compliance in a .NET Application: What It Actually Means in Code',
    slug: 'hipaa-compliance-dotnet-application',
    excerpt: 'Beyond the buzzword — a technical breakdown of what HIPAA compliance required me to implement in SmartSchedule: AES-256 encryption, audit logging, Azure Key Vault secret management, and how I verify compliance in CI.',
    category: '.NET & C#',
    tags: ['HIPAA', 'Security', 'Compliance', 'Azure', 'Encryption'],
    readTime: '10 min read',
    status: 'coming-soon'
  },
  {
    id: '8',
    title: 'From Local Startups to Enterprise SaaS: My Path as a Software Engineer in Nairobi',
    slug: 'software-engineer-journey-nairobi',
    excerpt: 'A honest account of my journey — from building solutions for East African organisations at Alliance Bioversity and REAL BIZ Digital, to architecting a healthcare SaaS platform targeting a $150B global market, and what I learned at each step.',
    category: 'Career',
    tags: ['Career', 'Software Engineering', 'Nairobi', 'East Africa', 'SaaS'],
    readTime: '6 min read',
    status: 'coming-soon'
  },
  {
    id: '9',
    title: 'Azure Service Bus vs Redis Pub/Sub: When to Use Which in a Microservices Architecture',
    slug: 'azure-service-bus-vs-redis-pubsub',
    excerpt: 'A practical comparison based on real decisions I made in SmartSchedule Healthcare — when to use Azure Service Bus for reliable async messaging versus Redis pub/sub for low-latency real-time events, with code examples in ASP.NET Core.',
    category: 'Azure & Cloud',
    tags: ['Azure Service Bus', 'Redis', 'Microservices', 'Messaging', 'ASP.NET Core'],
    readTime: '8 min read',
    status: 'coming-soon'
  },
  {
    id: '10',
    title: 'Building Real-Time Features with SignalR in Blazor Server: A Practical Guide',
    slug: 'signalr-blazor-server-realtime',
    excerpt: 'How I implemented live appointment updates and real-time dashboard data in SmartSchedule using SignalR — covering hub design, client reconnection handling, scaling across multiple instances with Redis backplane, and testing.',
    category: 'Architecture',
    tags: ['SignalR', 'Blazor', 'Real-Time', 'WebSockets', '.NET'],
    readTime: '9 min read',
    status: 'coming-soon'
  }
];

export function getAllPosts() {
  return blogPosts;
}

export function getAllCategories() {
  const categories = blogPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

export function getPostsByCategory(category) {
  if (category === 'All') return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function searchPosts(query) {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}
