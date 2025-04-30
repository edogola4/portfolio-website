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
    description: 'A full-featured e-commerce platform built for East African markets with M-Pesa integration, multilingual support, and offline capabilities.',
    longDescription: `This project addressed the unique challenges of e-commerce in East Africa, including intermittent connectivity and diverse payment preferences. The platform features:

- Complete M-Pesa integration for seamless mobile payments
- Offline browsing with Progressive Web App technology
- Multilingual support (English, Swahili)
- Vendor management system for marketplace functionality
- Location-based delivery estimation
- Low-bandwidth image optimization`,
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Redis', 'Tailwind CSS'],
    category: 'Full Stack',
    featured: true,
    imageUrl: '/images/projects/ecommerce.jpg',
    demoUrl: 'https://ecommerce-demo.edwinogola.dev',
    githubUrl: 'https://github.com/edwinogola/ecommerce-platform',
    testimonial: {
      text: "Edwin's platform perfectly addressed our need to reach customers across Kenya, regardless of their device or connectivity situation.",
      author: "Jane Muthoni, CEO of Local Goods Kenya"
    },
    challenges: [
      "Implementing reliable payment processing that works with intermittent connectivity",
      "Optimizing image loading for low-bandwidth environments",
      "Building a vendor onboarding system that's accessible to non-technical users"
    ],
    solutions: [
      "Created a transaction queueing system that processes payments when connectivity is restored",
      "Implemented progressive image loading and local caching strategies",
      "Designed an intuitive, step-by-step onboarding process with comprehensive tutorials"
    ]
  },
  {
    id: 'health-tracking-app',
    title: 'Community Health Tracking App',
    slug: 'health-tracking-app',
    description: 'Mobile-first health monitoring application for community health workers to track patient data in remote areas with limited connectivity.',
    longDescription: `Developed for a Kenyan NGO, this progressive web application enables community health workers to:

- Record patient data during home visits without internet access
- Sync information when connectivity is available
- Generate health trend reports for communities
- Send SMS alerts for critical health situations
- Schedule follow-up visits and track outreach metrics`,
    technologies: ['React Native', 'Firebase', 'Express.js', 'SQLite', 'Chart.js'],
    category: 'Mobile',
    featured: true,
    imageUrl: '/images/projects/health-app.jpg',
    demoUrl: 'https://health-demo.edwinogola.dev',
    githubUrl: 'https://github.com/edwinogola/community-health-tracker',
    challenges: [
      "Creating a robust offline-first data architecture",
      "Ensuring patient data privacy while enabling necessary sharing between health workers",
      "Building intuitive interfaces for users with varying levels of technical expertise"
    ],
    solutions: [
      "Implemented local-first data with intelligent conflict resolution during syncing",
      "Developed a role-based access control system with encrypted data storage",
      "Conducted extensive user testing with actual community health workers to refine the UX"
    ]
  },
  {
    id: 'agricultural-marketplace',
    title: 'Agricultural Marketplace',
    slug: 'agricultural-marketplace',
    description: 'Platform connecting small-scale farmers directly with buyers, featuring real-time price tracking, logistics coordination, and SMS notifications.',
    longDescription: `This marketplace addresses key challenges in the East African agricultural supply chain:

- Eliminating middlemen to increase farmer profits
- Providing market price transparency
- Coordinating transportation logistics
- Supporting both web and SMS-based interactions for farmers with feature phones
- Implementing quality verification workflows`,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Twilio API', 'Tailwind CSS'],
    category: 'Full Stack',
    featured: true,
    imageUrl: '/images/projects/agri-marketplace.jpg',
    demoUrl: 'https://agri-demo.edwinogola.dev',
    githubUrl: 'https://github.com/edwinogola/agricultural-marketplace',
    testimonial: {
      text: "This platform has increased our members' income by over 30% by connecting us directly with buyers and giving us real-time price information.",
      author: "John Kamau, Nyeri Farmers Cooperative"
    },
    challenges: [
      "Building interfaces that work for both smartphone and feature phone users",
      "Creating a fair pricing system with transparency for all parties",
      "Coordinating complex logistics across rural areas"
    ],
    solutions: [
      "Developed a dual interface system with SMS fallback for all critical functions",
      "Implemented a blockchain-based price verification system",
      "Created an optimized route-planning algorithm for rural deliveries"
    ]
  },
  {
    id: 'education-platform',
    title: 'E-Learning Platform',
    slug: 'education-platform',
    description: 'Accessible e-learning system designed for low-bandwidth environments with downloadable content, peer-to-peer sharing, and offline assessment capabilities.',
    longDescription: `This educational platform was designed specifically for East African schools with limited internet infrastructure:

- Content preloading when connectivity is available
- Peer-to-peer content sharing via Bluetooth
- Offline video lessons with interactive elements
- Progress tracking that syncs when online
- Teacher dashboard for monitoring student engagement
- Gamification elements to increase student motivation`,
    technologies: ['Vue.js', 'Nuxt.js', 'Node.js', 'MongoDB', 'IndexedDB', 'WebRTC'],
    category: 'Web Application',
    featured: false,
    imageUrl: '/images/projects/education-platform.jpg',
    demoUrl: 'https://edu-demo.edwinogola.dev',
    githubUrl: 'https://github.com/edwinogola/education-platform',
    challenges: [
      "Delivering video content in low-bandwidth environments",
      "Creating assessment tools that work reliably offline",
      "Implementing secure peer-to-peer content sharing"
    ],
    solutions: [
      "Developed adaptive streaming with extreme compression options",
      "Built a robust offline assessment engine with delayed submission",
      "Created an encrypted sharing protocol for secure content distribution"
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