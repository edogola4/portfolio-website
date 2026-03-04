// src/lib/projects.js

/**
 * Project data for Brandon Ogola's portfolio
 * Contains information about featured and all projects
 */

export const projects = [
  {
    id: 'smartschedule-healthcare',
    title: 'SmartSchedule Healthcare',
    slug: 'smartschedule-healthcare',
    description: 'Enterprise-grade AI-powered healthcare appointment scheduling SaaS platform built on .NET 10 and Azure. Targets a $150B market with projected 40% no-show reduction and 50% administrative efficiency gains for healthcare providers.',
    longDescription: 'SmartSchedule Healthcare is an enterprise AI-powered appointment scheduling SaaS platform built on .NET 10 and Azure. It targets a $150B annual inefficiency in healthcare scheduling — helping providers reduce no-shows, automate administrative workflows, and integrate with existing EHR systems through a HIPAA-compliant, cloud-native architecture.',
    technologies: ['.NET 10', 'C#', 'ASP.NET Core', 'Blazor WebAssembly', 'Azure', 'ML.NET', 'Azure OpenAI', 'Terraform', 'Docker', 'SQL Server', 'Redis', 'SignalR'],
    category: '.NET & Azure',
    featured: true,
    badge: '🏥 Featured · Active Development',
    status: 'In Development — MVP Q2 2026',
    imageUrl: '/images/projects/smartschedule.jpg',
    githubUrl: 'https://github.com/edogola4/smartschedule-healthcare',
    challenges: [
      'Designing a HIPAA-compliant, zero-trust architecture on Azure that meets SOC 2 Type II standards without sacrificing developer velocity',
      'Building bidirectional EHR integration across fragmented systems (Epic, Cerner, Athena) using HL7 FHIR R4',
      'Training an ML.NET no-show prediction model with sufficient accuracy to be clinically useful (target: 85% AUC-ROC)'
    ],
    solutions: [
      'Implemented Azure Key Vault, Always Encrypted SQL, and end-to-end audit trails for HIPAA compliance with Terraform-managed infrastructure',
      'Abstracted EHR connectors behind a unified FHIR R4 adapter layer, enabling plug-and-play integration with major healthcare systems',
      'Designed a feature-rich ML pipeline using patient history, appointment type, and scheduling patterns as predictive signals in ML.NET'
    ],
    stats: [
      { value: '40%', label: 'Projected no-show reduction' },
      { value: '85%', label: 'ML prediction accuracy target' },
      { value: '<200ms', label: 'Target API response time' },
      { value: '$150B', label: 'Addressable market size' }
    ]
  },
  {
    id: 'tinytots-ecommerce',
    title: 'TinyTots — E-Commerce Platform',
    slug: 'tinytots-ecommerce',
    description: 'Full-stack e-commerce platform for eco-friendly children\'s and women\'s clothing. Features ML-powered product recommendations, secure M-Pesa payment integration, real-time order tracking, and 85% test coverage.',
    longDescription: 'TinyTots is a full-stack e-commerce platform for eco-friendly children\'s and women\'s clothing. Built with React, TypeScript, and a Node.js/Express backend, it features ML-powered product recommendations, M-Pesa payment integration, and a comprehensive test suite achieving 85% coverage.',
    technologies: ['React 18', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redux Toolkit', 'JWT', 'Jest', 'AWS', 'GitHub Actions'],
    category: 'Full Stack',
    featured: false,
    imageUrl: '/images/projects/tinytots.jpg',
    githubUrl: 'https://github.com/edogola4/TinyTots',
    challenges: [
      'Integrating M-Pesa\'s payment API reliably within a modern React/Node.js architecture',
      'Building a recommendation engine that works meaningfully with a relatively small product catalogue',
      'Maintaining high test coverage across both frontend and backend without slowing delivery'
    ],
    solutions: [
      'Built a dedicated M-Pesa service layer with transaction queuing and webhook handling for payment confirmation',
      'Implemented a collaborative filtering model using purchase history and browsing behaviour as recommendation signals',
      'Set up Jest and Pytest pipelines with automated coverage reporting via GitHub Actions, enforcing an 85% threshold on PRs'
    ],
    stats: [
      { value: '85%', label: 'Test coverage (Jest + Pytest)' },
      { value: '20+', label: 'REST API endpoints' },
      { value: '3', label: 'Client projects delivered' }
    ]
  },
  {
    id: 'realtime-collaboration',
    title: 'Real-Time Collaboration Platform',
    slug: 'realtime-collaboration',
    description: 'Collaborative coding platform with real-time document editing, live presence detection, and WebSocket-based communication. Built with a scalable microservices backend and Redis session management.',
    longDescription: 'A collaborative coding platform that enables multiple users to edit documents simultaneously with live presence detection and real-time synchronisation. Built with Socket.io for WebSocket communication, Redis for session management, and a microservices Node.js backend.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Socket.io', 'Redis', 'MongoDB', 'WebSockets', 'Winston'],
    category: 'Full Stack',
    featured: false,
    imageUrl: '/images/projects/collaboration.jpg',
    githubUrl: 'https://github.com/edogola4/code-editor',
    challenges: [
      'Handling concurrent edits from multiple users without conflicts or data loss',
      'Scaling WebSocket connections across a microservices architecture',
      'Maintaining consistent state between clients when connections drop and reconnect'
    ],
    solutions: [
      'Implemented operational transformation logic to reconcile concurrent edits and maintain document consistency',
      'Used Redis pub/sub to broadcast events across microservice instances, enabling horizontal scaling of Socket.io',
      'Built a reconnection protocol that replays missed events from a MongoDB-backed event log on client reconnect'
    ]
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Customer Support Chatbot',
    slug: 'ai-chatbot',
    description: 'Intelligent chatbot for e-commerce platforms achieving 95% accuracy in intent recognition and reducing customer support response time by 40% using NLP and TensorFlow.',
    longDescription: 'An intelligent customer support chatbot for e-commerce platforms, achieving 95% accuracy in intent recognition using TensorFlow NLP. It reduces customer support response time by 40% through context-aware conversation management and entity extraction.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'REST APIs', 'React', 'Node.js'],
    category: 'AI/ML',
    featured: false,
    imageUrl: '/images/projects/chatbot.jpg',
    githubUrl: 'https://github.com/edogola4',
    challenges: [
      'Training an intent classification model with high accuracy on a limited labelled dataset',
      'Managing conversation context across multi-turn interactions without a stateful session backend',
      'Integrating the Python ML model cleanly with a Node.js/React frontend'
    ],
    solutions: [
      'Used transfer learning on a pre-trained TensorFlow model, fine-tuned on domain-specific e-commerce intents',
      'Implemented a lightweight context window stored in Redis, tracking the last 5 turns per session',
      'Exposed the Python model as a REST microservice, consumed by the Node.js API layer'
    ],
    stats: [
      { value: '95%', label: 'Intent recognition accuracy' },
      { value: '40%', label: 'Reduction in support response time' }
    ]
  },
  {
    id: 'blazor-crud-demo',
    title: 'BlazorCrudDemo — Clean Architecture Showcase',
    slug: 'blazor-crud-demo',
    description: 'Production-ready .NET CRUD application demonstrating clean layered architecture, SOLID principles, real-time SignalR updates, and Entity Framework Core — built as a reference implementation for enterprise .NET patterns.',
    longDescription: 'A production-ready .NET CRUD application demonstrating clean layered architecture, SOLID principles, and real-time SignalR updates. Built as a personal reference implementation for enterprise .NET patterns including the Repository pattern, dependency injection, and AutoMapper.',
    technologies: ['C#', '.NET Core', 'Blazor Server', 'Entity Framework Core', 'SignalR', 'SQL Server', 'xUnit', 'AutoMapper'],
    category: '.NET & Azure',
    featured: false,
    imageUrl: '/images/projects/blazor-crud.jpg',
    githubUrl: 'https://github.com/edogola4/BlazorCrudDemo',
    challenges: [
      'Structuring a Blazor Server application that cleanly separates data access, business logic, and presentation concerns',
      'Implementing real-time updates without tight coupling between the SignalR hub and business logic layers',
      'Achieving meaningful test coverage on a Blazor Server component architecture'
    ],
    solutions: [
      'Applied strict layered architecture: Data Access → Business Logic → Presentation, with interfaces at every boundary',
      'Injected the SignalR hub as a notification service, keeping business logic decoupled from transport concerns',
      'Wrote xUnit tests targeting the service and repository layers independently, achieving 85% coverage'
    ],
    stats: [
      { value: '85%', label: 'xUnit code coverage' },
      { value: '3', label: 'Architectural layers (Data, BLL, UI)' }
    ]
  },
  {
    id: 'covid-dashboard',
    title: 'COVID-19 Data Visualization Dashboard',
    slug: 'covid-dashboard',
    description: 'Interactive dashboard visualising COVID-19 statistics across East Africa with real-time data updates, D3.js charts, and responsive design for all devices.',
    longDescription: 'An interactive D3.js dashboard visualising COVID-19 trends across East Africa. Features real-time data updates, regional breakdowns, and fully responsive design — built to make public health data accessible and readable on any device.',
    technologies: ['JavaScript', 'D3.js', 'HTML5', 'CSS3', 'REST APIs'],
    category: 'Data',
    featured: false,
    imageUrl: '/images/projects/covid-dashboard.jpg',
    githubUrl: 'https://github.com/edogola4/COVID-19-Interactive-Data-Visualization-Dashboard',
    challenges: [
      'Rendering performant D3.js visualisations with frequently updating datasets',
      'Presenting regional data meaningfully without overcrowding the visualisation',
      'Ensuring the dashboard was fully usable on low-end mobile devices'
    ],
    solutions: [
      'Debounced data refresh cycles and used D3 transitions to update charts in place rather than re-rendering from scratch',
      'Designed a drill-down interaction model: national overview → country → region, reducing visual complexity at each level',
      'Used a mobile-first CSS approach and lazy-loaded chart components to keep initial load fast on slower connections'
    ]
  },
  {
    id: 'microservices-cicd',
    title: 'Microservices Architecture with CI/CD',
    slug: 'microservices-cicd',
    description: 'Containerised microservices application with automated testing, full deployment pipeline, and AWS cloud orchestration — demonstrating production DevOps practices.',
    longDescription: 'A containerised microservices application demonstrating production DevOps practices: Docker containerisation, Kubernetes orchestration, automated testing pipelines, and AWS cloud deployment — all wired together with GitHub Actions CI/CD.',
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'CI/CD'],
    category: 'DevOps',
    featured: false,
    imageUrl: '/images/projects/microservices.jpg',
    githubUrl: 'https://github.com/edogola4',
    challenges: [
      'Coordinating service discovery and inter-service communication across independently deployed containers',
      'Building a CI/CD pipeline that runs tests, builds images, and deploys to AWS without manual intervention',
      'Managing environment parity between local Docker Compose and production Kubernetes'
    ],
    solutions: [
      'Used Kubernetes Services and environment-based DNS for service discovery across pods',
      'Built a GitHub Actions workflow: test → build Docker image → push to ECR → deploy to EKS, triggered on merge to main',
      'Defined all infrastructure in Docker Compose for local dev and equivalent Kubernetes manifests for production'
    ]
  },
  {
    id: 'email-signature-extraction',
    title: 'Email Signature Extraction with LLMs',
    slug: 'email-signature-extraction',
    description: 'A research-oriented Python project that evaluates and compares the performance of large language models — OpenAI GPT-3.5 Turbo and Anthropic Claude 3 — on the task of extracting structured data from email signatures and outputting clean JSON.',
    longDescription: 'A Python-based evaluation framework that benchmarks multiple large language models on a structured data extraction task. Given raw email signature text, the system prompts both OpenAI GPT-3.5 Turbo and Anthropic Claude 3 to extract contact information and return it as structured JSON — then measures and compares each model\'s accuracy, consistency, and output quality across a suite of test cases.',
    technologies: ['Python', 'C', 'CUDA', 'C++', 'OpenAI GPT-3.5', 'Anthropic Claude 3', 'Prompt Engineering'],
    category: 'AI/ML',
    featured: false,
    imageUrl: '/images/projects/email-signature.jpg',
    githubUrl: 'https://github.com/edogola4/Email-Signature-Extraction-with-LLMs',
    challenges: [
      'Designing prompts that reliably produce valid, consistently structured JSON output across two different LLMs with different response styles',
      'Building an evaluation framework that objectively measures and compares model performance without manual result inspection',
      'Handling the wide variability in email signature formats — from simple name/email pairs to complex multi-field corporate signatures'
    ],
    solutions: [
      'Iterated through multiple prompt engineering strategies, testing zero-shot, few-shot, and structured output prompting techniques to find the most consistent approach across both models',
      'Built an automated scoring pipeline in functions.py that parses JSON responses, validates field extraction, and computes accuracy metrics per test case',
      'Created a diverse test suite covering edge cases: missing fields, non-standard layouts, multilingual signatures, and varying levels of signature complexity'
    ],
    languages: [
      { name: 'Python', percentage: 98.6, color: '#3572A5' },
      { name: 'C', percentage: 0.6, color: '#555555' },
      { name: 'CUDA', percentage: 0.5, color: '#3A4E3A' },
      { name: 'C++', percentage: 0.2, color: '#f34b7d' },
      { name: 'Cython', percentage: 0.1, color: '#fedf5b' },
      { name: 'Fortran', percentage: 0.0, color: '#4d41b1' }
    ],
    stats: [
      { value: '2', label: 'LLMs evaluated (GPT-3.5 Turbo vs Claude 3)' },
      { value: '2', label: 'GitHub stars' }
    ]
  }
];

// Helper function to get all projects
export function getAllProjects() {
  return projects;
}

// Helper function to get featured projects
export function getFeaturedProjects() {
  return projects.filter(project => project.featured);
}

// Helper function to get a project by slug
export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}

// Helper function to get projects by category
export function getProjectsByCategory(category) {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
}

// Get all unique categories
export function getAllCategories() {
  const categories = projects.map(project => project.category);
  return ['All', ...new Set(categories)];
}