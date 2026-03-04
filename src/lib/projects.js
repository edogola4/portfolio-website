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
    longDescription: `SmartSchedule Healthcare is an enterprise-grade AI-powered appointment scheduling SaaS platform targeting the $150B healthcare market. Built on .NET 10 and Azure, it addresses critical pain points in healthcare operations:

- 🤖 AI no-show prediction targeting 85% accuracy with ML.NET
- 🔒 HIPAA-compliant architecture with zero-trust security
- 🔗 Bidirectional EHR integration (Epic, Cerner, Athena via HL7 FHIR R4)
- ⚡ Target: <200ms API response, 99.9% uptime
- 📊 200+ user stories, 6-sprint MVP roadmap
- 🎯 MVP launch Q2 2026 with 10 beta customers

The platform combines enterprise-grade architecture with AI/ML integration to deliver measurable business outcomes for healthcare providers.`,
    technologies: ['.NET 10', 'C#', 'ASP.NET Core', 'Blazor WebAssembly', 'Azure', 'ML.NET', 'Azure OpenAI', 'Terraform', 'Docker', 'SQL Server', 'Redis', 'SignalR'],
    category: '.NET & Azure',
    featured: true,
    badge: '🏥 Featured · Active Development',
    status: 'In Development — MVP Q2 2026',
    imageUrl: '/images/projects/smartschedule.jpg',
    githubUrl: 'https://github.com/edogola4/smartschedule-healthcare',
    highlights: [
      '🤖 AI no-show prediction targeting 85% accuracy with ML.NET',
      '🔒 HIPAA-compliant architecture with zero-trust security',
      '🔗 Bidirectional EHR integration (Epic, Cerner, Athena via HL7 FHIR R4)',
      '⚡ Target: <200ms API response, 99.9% uptime',
      '📊 200+ user stories, 6-sprint MVP roadmap',
      '🎯 MVP launch Q2 2026 with 10 beta customers'
    ]
  },
  {
    id: 'tinytots-ecommerce',
    title: 'TinyTots — E-Commerce Platform',
    slug: 'tinytots-ecommerce',
    description: 'Full-stack e-commerce platform for eco-friendly children\'s and women\'s clothing. Features ML-powered product recommendations, secure M-Pesa payment integration, real-time order tracking, and 85% test coverage.',
    longDescription: `TinyTots is a full-stack e-commerce platform specializing in eco-friendly children's and women's clothing. Built with modern web technologies and best practices:

- 🤖 ML-powered product recommendation engine
- 💳 M-Pesa payment gateway integration
- 📦 Real-time inventory management
- ✅ 85% test coverage with Jest and Pytest
- 🚀 Deployed on AWS with CI/CD via GitHub Actions

The platform demonstrates production-grade full-stack development with a focus on user experience and business metrics.`,
    technologies: ['React 18', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Redux Toolkit', 'JWT', 'Jest', 'AWS', 'GitHub Actions'],
    category: 'Full Stack',
    featured: false,
    imageUrl: '/images/projects/tinytots.jpg',
    githubUrl: 'https://github.com/edogola4/TinyTots',
    highlights: [
      '🤖 ML-powered product recommendation engine',
      '💳 M-Pesa payment gateway integration',
      '📦 Real-time inventory management',
      '✅ 85% test coverage with Jest and Pytest',
      '🚀 Deployed on AWS with CI/CD via GitHub Actions'
    ]
  },
  {
    id: 'realtime-collaboration',
    title: 'Real-Time Collaboration Platform',
    slug: 'realtime-collaboration',
    description: 'Collaborative coding platform with real-time document editing, live presence detection, and WebSocket-based communication. Built with a scalable microservices backend and Redis session management.',
    longDescription: `A real-time collaboration platform enabling multiple users to work together seamlessly:

- 🔄 WebSocket real-time sync via Socket.io
- 👥 Live user presence and typing indicators
- 📝 Collaborative document/code editing
- 🏗️ Microservices architecture with Redis sessions
- 🔍 Message history and search functionality

Demonstrates expertise in real-time systems, WebSocket communication, and scalable backend architecture.`,
    technologies: ['TypeScript', 'React', 'Node.js', 'Socket.io', 'Redis', 'MongoDB', 'WebSockets', 'Winston'],
    category: 'Full Stack',
    featured: false,
    imageUrl: '/images/projects/collaboration.jpg',
    githubUrl: 'https://github.com/edogola4/code-editor',
    highlights: [
      '🔄 WebSocket real-time sync via Socket.io',
      '👥 Live user presence and typing indicators',
      '📝 Collaborative document/code editing',
      '🏗️ Microservices architecture with Redis sessions',
      '🔍 Message history and search functionality'
    ]
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Customer Support Chatbot',
    slug: 'ai-chatbot',
    description: 'Intelligent chatbot for e-commerce platforms achieving 95% accuracy in intent recognition and reducing customer support response time by 40% using NLP and TensorFlow.',
    longDescription: `An AI-powered customer support chatbot built with TensorFlow and NLP:

- 🧠 95% intent recognition accuracy with TensorFlow NLP
- ⚡ 40% faster customer support response time
- 💬 Context-aware conversation management
- 🎯 Entity recognition and classification

Demonstrates practical application of AI/ML in production environments with measurable business impact.`,
    technologies: ['Python', 'TensorFlow', 'NLP', 'REST APIs', 'React', 'Node.js'],
    category: 'AI/ML',
    featured: false,
    imageUrl: '/images/projects/chatbot.jpg',
    githubUrl: 'https://github.com/edogola4',
    highlights: [
      '🧠 95% intent recognition accuracy with TensorFlow NLP',
      '⚡ 40% faster customer support response time',
      '💬 Context-aware conversation management',
      '🎯 Entity recognition and classification'
    ]
  },
  {
    id: 'blazor-crud-demo',
    title: 'BlazorCrudDemo — Clean Architecture Showcase',
    slug: 'blazor-crud-demo',
    description: 'Production-ready .NET CRUD application demonstrating clean layered architecture, SOLID principles, real-time SignalR updates, and Entity Framework Core — built as a reference implementation for enterprise .NET patterns.',
    longDescription: `A production-ready .NET CRUD application showcasing enterprise architecture patterns:

- 🏗️ Clean layered architecture (Data, Business Logic, Presentation)
- ⚡ Real-time updates via SignalR
- ✅ 85% code coverage with xUnit
- 💉 Dependency injection + Repository pattern throughout
- 🔄 AutoMapper for DTO conversions

Built as a reference implementation for enterprise .NET development best practices.`,
    technologies: ['C#', '.NET Core', 'Blazor Server', 'Entity Framework Core', 'SignalR', 'SQL Server', 'xUnit', 'AutoMapper'],
    category: '.NET & Azure',
    featured: false,
    imageUrl: '/images/projects/blazor-crud.jpg',
    githubUrl: 'https://github.com/edogola4/BlazorCrudDemo',
    highlights: [
      '🏗️ Clean layered architecture (Data, Business Logic, Presentation)',
      '⚡ Real-time updates via SignalR',
      '✅ 85% code coverage with xUnit',
      '💉 Dependency injection + Repository pattern throughout',
      '🔄 AutoMapper for DTO conversions'
    ]
  },
  {
    id: 'covid-dashboard',
    title: 'COVID-19 Data Visualization Dashboard',
    slug: 'covid-dashboard',
    description: 'Interactive dashboard visualising COVID-19 statistics across East Africa with real-time data updates, D3.js charts, and responsive design for all devices.',
    longDescription: `An interactive data visualization dashboard for COVID-19 statistics:

- 📈 D3.js interactive regional visualisations
- 🔄 Real-time data updates
- 🗺️ East Africa regional breakdown and trends
- 📱 Fully responsive across all devices

Demonstrates data visualization expertise and ability to present complex information in accessible formats.`,
    technologies: ['JavaScript', 'D3.js', 'HTML5', 'CSS3', 'REST APIs'],
    category: 'Data',
    featured: false,
    imageUrl: '/images/projects/covid-dashboard.jpg',
    githubUrl: 'https://github.com/edogola4/COVID-19-Interactive-Data-Visualization-Dashboard',
    highlights: [
      '📈 D3.js interactive regional visualisations',
      '🔄 Real-time data updates',
      '🗺️ East Africa regional breakdown and trends',
      '📱 Fully responsive across all devices'
    ]
  },
  {
    id: 'microservices-cicd',
    title: 'Microservices Architecture with CI/CD',
    slug: 'microservices-cicd',
    description: 'Containerised microservices application with automated testing, full deployment pipeline, and AWS cloud orchestration — demonstrating production DevOps practices.',
    longDescription: `A containerised microservices application showcasing DevOps best practices:

- 🐳 Docker containerisation
- ☸️ Kubernetes orchestration
- 🔄 CI/CD with GitHub Actions
- ✅ Automated testing and deployment
- ☁️ AWS cloud infrastructure

Demonstrates expertise in modern DevOps practices and cloud-native architecture.`,
    technologies: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'CI/CD'],
    category: 'DevOps',
    featured: false,
    imageUrl: '/images/projects/microservices.jpg',
    githubUrl: 'https://github.com/edogola4',
    highlights: [
      '🐳 Docker containerisation',
      '☸️ Kubernetes orchestration',
      '🔄 CI/CD with GitHub Actions',
      '✅ Automated testing and deployment',
      '☁️ AWS cloud infrastructure'
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