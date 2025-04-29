// src/lib/projects.js

/**
 * Project data for Edwin Ogola's portfolio
 * Contains information about featured and all projects
 */

export const projects = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    slug: 'e-commerce-platform',
    description: 'A comprehensive e-commerce solution tailored for East African markets with M-Pesa integration, offline capabilities, and multilingual support.',
    longDescription: `This platform was developed to address the unique challenges of e-commerce in East Africa, 
    including intermittent connectivity, diverse payment preferences, and language diversity. Features include:

- M-Pesa integration for seamless mobile payments
- Offline-first experience using Progressive Web App (PWA) technology
- Multilingual support (English and Swahili)
- Product catalog management and inventory tracking
- Vendor onboarding and management system
- Low-bandwidth image optimization and caching`,
    imageUrl: '/images/projects/ecommerce.jpg',
    images: [
      '/images/projects/ecommerce-home.jpg',
      '/images/projects/ecommerce-product.jpg',
      '/images/projects/ecommerce-checkout.jpg'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Redis', 'Tailwind CSS', 'Redux', 'PWA', 'M-Pesa API'],
    category: 'Full Stack',
    featured: true,
    demoUrl: 'https://ecommerce-demo.edwinogola.dev',
    githubUrl: 'https://github.com/edwinogola/ecommerce-platform',
    completedAt: '2024-03-15',
    challenges: [
      "Implementing reliable payment processing with intermittent network connectivity",
      "Optimizing image loading for low-bandwidth environments",
      "Building a vendor onboarding system for non-technical users"
    ],
    solutions: [
      "Built a robust transaction verification and queuing system",
      "Implemented progressive image loading with local storage",
      "Created step-by-step onboarding with tooltips and tutorials"
    ],
    testimonial: {
      text: "Edwin's platform perfectly addressed our need to reach customers across Kenya, regardless of their device or connectivity situation.",
      author: "Jane Muthoni, CEO of Local Goods Kenya"
    }
  },
  {
    id: 'health-tracking-app',
    title: 'Community Health Tracking App',
    slug: 'health-tracking-app',
    description: 'Mobile-first health monitoring application for community health workers to track patient data in remote areas with limited connectivity.',
    longDescription: `This application helps community health workers collect and manage health data in rural areas. 
It works offline, syncs when connectivity is available, and provides real-time analytics. Features include:

- Recording patient data during home visits
- Sync and conflict resolution for offline data
- SMS alerts for critical situations
- Follow-up visit scheduling
- Role-based access and encryption
- Community trend analytics`,
    imageUrl: '/images/projects/health-app.jpg',
    images: [
      '/images/projects/health-dashboard.jpg',
      '/images/projects/health-tracking.jpg',
      '/images/projects/health-reports.jpg'
    ],
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express.js', 'SQLite', 'Chart.js'],
    category: 'Mobile',
    featured: true,
    demoUrl: 'https://health-demo.edwinogola.dev',
    githubUrl: 'https://github.com/edwinogola/community-health-tracker',
    completedAt: '2023-11-20',
    challenges: [
      "Ensuring reliable performance in low-connectivity areas",
      "Maintaining data privacy while enabling collaboration",
      "Designing intuitive UI for varying technical literacy levels"
    ],
    solutions: [
      "Built local-first data model with smart syncing",
      "Encrypted sensitive data and used role-based access control",
      "Conducted user testing with health workers to refine usability"
    ],
    testimonial: {
      text: "The health tracking app has transformed how we collect data in the field. The offline capabilities are perfect for our needs.",
      author: "Dr. Michael Ochieng, Health Program Director"
    }
  },
  {
    id: 'agricultural-management-system',
    title: 'Agricultural Marketplace',
    slug: 'agricultural-marketplace',
    description: 'Platform connecting small-scale farmers directly with buyers, featuring crop tracking, price updates, logistics, and SMS alerts.',
    longDescription: `This system helps farmers optimize production and sales through:

- Market price tracking and buyer connections
- Weather forecasts and crop management
- Real-time logistics coordination
- SMS notifications for non-smartphone users
- Voice prompts and icon-driven navigation`,
    imageUrl: '/images/projects/agri-marketplace.jpg',
    images: [
      '/images/projects/agri-dashboard.jpg',
      '/images/projects/agri-market.jpg',
      '/images/projects/agri-weather.jpg'
    ],
    technologies: ['Vue.js', 'React', 'Django', 'Node.js', 'PostgreSQL', 'Twilio API', 'Weather API', 'Redis', 'Docker', 'Tailwind CSS'],
    category: 'Full Stack',
    featured: true,
    demoUrl: 'https://agri-demo.edwinogola.com',
    githubUrl: 'https://github.com/edwinogola/agricultural-system',
    completedAt: '2024-01-10',
    challenges: [
      "Designing for users with minimal literacy and tech experience",
      "Providing real-time insights over unstable networks",
      "Ensuring equitable access via SMS"
    ],
    solutions: [
      "Used iconography and voice UI for navigation",
      "Implemented SMS updates and low-data UI",
      "Tested with real farmers to validate usability"
    ],
    testimonial: {
      text: "This system has changed how I farm. I now know when to plant, harvest, and where to sell for the best prices.",
      author: "John Kamau, Farmer"
    }
  },
  {
    id: 'fintech-solution',
    title: 'Microfinance Platform',
    slug: 'microfinance-platform',
    description: 'A digital microfinance solution offering microloans and mobile repayments for underserved entrepreneurs.',
    longDescription: `Built to increase financial inclusion in East Africa, this platform includes:

- Alternative credit scoring using non-traditional data
- Loan application and approval workflows
- M-Pesa-based disbursements and repayments
- Analytics dashboard for financial institutions
- Secure multi-factor authentication for feature phones`,
    imageUrl: '/images/projects/fintech.jpg',
    images: [
      '/images/projects/fintech-dashboard.jpg',
      '/images/projects/fintech-application.jpg',
      '/images/projects/fintech-analytics.jpg'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'AWS', 'M-Pesa API'],
    category: 'FinTech',
    featured: true,
    demoUrl: 'https://fintech-demo.edwinogola.com',
    githubUrl: 'https://github.com/edwinogola/microfinance-platform',
    completedAt: '2023-09-05',
    challenges: [
      "Developing secure login for users without smartphones",
      "Calculating credit scores using limited financial history",
      "Preventing loan fraud and abuse"
    ],
    solutions: [
      "Built USSD-compatible multi-factor authentication",
      "Used behavioral and mobile usage data for scoring",
      "Implemented fraud detection algorithms and manual review flags"
    ],
    testimonial: {
      text: "Edwin's microfinance platform has enabled us to serve clients we previously couldn't reach. The mobile integration is seamless.",
      author: "Sarah Njeri, Microfinance Director"
    }
  }
];

/**
 * Get all projects
 * @returns {Array} All projects
 */
export const getAllProjects = () => {
  return projects;
};

/**
 * Get featured projects for homepage
 * @returns {Array} Featured projects
 */
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

/**
 * Get a project by slug
 * @param {string} slug - Project slug
 * @returns {Object} Project object
 */
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

/**
 * Get projects by category
 * @param {string} category - Project category
 * @returns {Array} Filtered projects
 */
export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};
