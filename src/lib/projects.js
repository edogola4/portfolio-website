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
      description: 'A comprehensive e-commerce solution tailored for East African markets with M-Pesa integration and offline capabilities.',
      longDescription: `This platform was developed to address the unique challenges of e-commerce in East Africa, 
      including intermittent connectivity and local payment preferences. Features include product catalog management, 
      inventory tracking, M-Pesa payment integration, and an offline-first approach for browsing products.`,
      image: '/images/projects/ecommerce.jpg',
      images: [
        '/images/projects/ecommerce-home.jpg',
        '/images/projects/ecommerce-product.jpg',
        '/images/projects/ecommerce-checkout.jpg'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'M-Pesa API', 'PWA'],
      category: 'Full Stack',
      featured: true,
      demoUrl: 'https://ecommerce-demo.edwinogola.com',
      githubUrl: 'https://github.com/edwinogola/ecommerce-platform',
      completedAt: '2024-03-15',
      challenges: `Implementing reliable payment processing with M-Pesa while handling network interruptions was a significant challenge. 
      I developed a robust transaction verification system and implemented local storage for cart persistence.`,
      testimonial: {
        text: "Edwin's e-commerce solution revolutionized how we do business online. The M-Pesa integration works flawlessly even in areas with spotty connectivity.",
        author: "Jane Muthoni, Business Owner"
      }
    },
    {
      id: 'health-tracking-app',
      title: 'Health Tracking Application',
      slug: 'health-tracking-app',
      description: 'Mobile-first health tracking application designed for community health workers in rural Kenya.',
      longDescription: `This application helps community health workers collect and manage health data in rural areas. 
      It works offline, syncs when connectivity is available, and provides real-time analytics for health administrators. 
      Implemented with data security features and GDPR compliance.`,
      image: '/images/projects/health-app.jpg',
      images: [
        '/images/projects/health-dashboard.jpg',
        '/images/projects/health-tracking.jpg',
        '/images/projects/health-reports.jpg'
      ],
      technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js'],
      category: 'Mobile Development',
      featured: true,
      demoUrl: 'https://health-app-demo.edwinogola.com',
      githubUrl: 'https://github.com/edwinogola/health-tracking-app',
      completedAt: '2023-11-20',
      challenges: `Ensuring reliable performance in low-connectivity areas was critical for this project. 
      I implemented efficient data synchronization protocols and optimized storage for minimal data loss.`,
      testimonial: {
        text: "The health tracking app has transformed how we collect data in the field. The offline capabilities are perfect for our needs.",
        author: "Dr. Michael Ochieng, Health Program Director"
      }
    },
    {
      id: 'agricultural-management-system',
      title: 'Agricultural Management System',
      slug: 'agricultural-management-system',
      description: 'A comprehensive system for small-scale farmers to manage crops, track market prices, and connect with buyers.',
      longDescription: `This platform helps farmers optimize their production by providing weather forecasts, crop management tools, 
      and market price tracking. It connects farmers directly with buyers, eliminating middlemen and improving profit margins. 
      The system sends SMS notifications for critical alerts to ensure farmers without smartphones can still benefit.`,
      image: '/images/projects/agri-system.jpg',
      images: [
        '/images/projects/agri-dashboard.jpg',
        '/images/projects/agri-market.jpg',
        '/images/projects/agri-weather.jpg'
      ],
      technologies: ['Vue.js', 'Django', 'Python', 'PostgreSQL', 'Twilio API', 'Weather API', 'Docker'],
      category: 'Web Application',
      featured: true,
      demoUrl: 'https://agri-demo.edwinogola.com',
      githubUrl: 'https://github.com/edwinogola/agricultural-system',
      completedAt: '2024-01-10',
      challenges: `Designing a system usable by farmers with varying technical abilities was challenging. 
      I created an intuitive interface with minimal text, using icons and voice prompts where appropriate.`,
      testimonial: {
        text: "This system has changed how I farm. I now know when to plant, harvest, and where to sell for the best prices.",
        author: "John Kamau, Farmer"
      }
    },
    {
      id: 'fintech-solution',
      title: 'Microfinance Platform',
      slug: 'microfinance-platform',
      description: 'A digital microfinance solution for small businesses and entrepreneurs in East Africa.',
      longDescription: `This platform facilitates microloans for entrepreneurs who typically lack access to traditional banking. 
      It features a custom credit scoring algorithm that considers alternative data points relevant to the East African market. 
      The system includes tools for loan application, disbursement via mobile money, and repayment tracking.`,
      image: '/images/projects/fintech.jpg',
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
      challenges: `Implementing a secure yet accessible authentication system for users with varying levels of technical literacy was complex. 
      I developed a multi-factor authentication system that works with basic feature phones via USSD.`,
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