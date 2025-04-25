// src/lib/skills.js
/**
 * Skills and services data for Edwin Ogola's portfolio
 * Organized by categories for display
 */

export const skills = {
    frontend: [
      {
        name: 'React',
        icon: '/images/logos/react.svg',
        level: 'Advanced',
        years: 4
      },
      {
        name: 'Next.js',
        icon: '/images/logos/nextjs.svg',
        level: 'Advanced',
        years: 3
      },
      {
        name: 'TypeScript',
        icon: '/images/logos/typescript.svg',
        level: 'Advanced',
        years: 3
      },
      {
        name: 'Vue.js',
        icon: '/images/logos/vue.svg',
        level: 'Intermediate',
        years: 2
      },
      {
        name: 'Tailwind CSS',
        icon: '/images/logos/tailwind.svg',
        level: 'Advanced',
        years: 3
      },
      {
        name: 'SASS/SCSS',
        icon: '/images/logos/sass.svg',
        level: 'Advanced',
        years: 4
      },
      {
        name: 'React Native',
        icon: '/images/logos/react-native.svg',
        level: 'Intermediate',
        years: 2
      }
    ],
    backend: [
      {
        name: 'Node.js',
        icon: '/images/logos/nodejs.svg',
        level: 'Advanced',
        years: 4
      },
      {
        name: 'Express',
        icon: '/images/logos/express.svg',
        level: 'Advanced',
        years: 4
      },
      {
        name: 'Python',
        icon: '/images/logos/python.svg',
        level: 'Intermediate',
        years: 3
      },
      {
        name: 'Django',
        icon: '/images/logos/django.svg',
        level: 'Intermediate',
        years: 2
      },
      {
        name: 'GraphQL',
        icon: '/images/logos/graphql.svg',
        level: 'Advanced',
        years: 3
      },
      {
        name: 'PHP',
        icon: '/images/logos/php.svg',
        level: 'Intermediate',
        years: 2
      }
    ],
    database: [
      {
        name: 'MongoDB',
        icon: '/images/logos/mongodb.svg',
        level: 'Advanced',
        years: 4
      },
      {
        name: 'PostgreSQL',
        icon: '/images/logos/postgresql.svg',
        level: 'Advanced',
        years: 3
      },
      {
        name: 'MySQL',
        icon: '/images/logos/mysql.svg',
        level: 'Intermediate',
        years: 3
      },
      {
        name: 'Redis',
        icon: '/images/logos/redis.svg',
        level: 'Intermediate',
        years: 2
      },
      {
        name: 'Firebase',
        icon: '/images/logos/firebase.svg',
        level: 'Advanced',
        years: 3
      }
    ],
    devops: [
      {
        name: 'Docker',
        icon: '/images/logos/docker.svg',
        level: 'Intermediate',
        years: 2
      },
      {
        name: 'AWS',
        icon: '/images/logos/aws.svg',
        level: 'Intermediate',
        years: 2
      },
      {
        name: 'CI/CD',
        icon: '/images/logos/jenkins.svg',
        level: 'Intermediate',
        years: 2
      },
      {
        name: 'Git',
        icon: '/images/logos/git.svg',
        level: 'Advanced',
        years: 5
      },
      {
        name: 'Vercel',
        icon: '/images/logos/vercel.svg',
        level: 'Advanced',
        years: 3
      }
    ],
    other: [
      {
        name: 'RESTful APIs',
        icon: '/images/logos/api.svg',
        level: 'Advanced',
        years: 4
      },
      {
        name: 'Payment Integration',
        icon: '/images/logos/payment.svg',
        level: 'Advanced',
        years: 3
      },
      {
        name: 'M-Pesa API',
        icon: '/images/logos/mpesa.svg',
        level: 'Advanced',
        years: 3
      },
      {
        name: 'UI/UX Design',
        icon: '/images/logos/figma.svg',
        level: 'Intermediate',
        years: 2
      },
      {
        name: 'Testing (Jest, Cypress)',
        icon: '/images/logos/jest.svg',
        level: 'Intermediate',
        years: 2
      }
    ]
  };
  
  export const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'End-to-end web application development with focus on performance, scalability, and offline capability for East African markets.',
      icon: '/images/logos/web-dev.svg',
      features: [
        'Responsive, mobile-first design',
        'Progressive Web Applications (PWAs)',
        'Cross-browser compatibility',
        'Performance optimization for low-bandwidth environments',
        'SEO optimization'
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications built for Android and iOS using React Native and related technologies.',
      icon: '/images/logos/mobile-dev.svg',
      features: [
        'Cross-platform development (iOS & Android)',
        'Offline-first architecture',
        'Local data persistence',
        'Push notification integration',
        'App Store and Play Store deployment'
      ]
    },
    {
      id: 'api-development',
      title: 'API Development & Integration',
      description: 'Robust API development and third-party API integration, including payment gateways and other essential services.',
      icon: '/images/logos/api-dev.svg',
      features: [
        'RESTful API design and development',
        'GraphQL API implementation',
        'Third-party API integration',
        'API documentation with Swagger/OpenAPI',
        'M-Pesa and other payment gateway integration'
      ]
    },
    {
      id: 'database-design',
      title: 'Database Design & Management',
      description: 'Efficient database design, optimization, and management for various data needs and scale requirements.',
      icon: '/images/logos/database.svg',
      features: [
        'Relational and NoSQL database design',
        'Data modeling and schema optimization',
        'Query performance tuning',
        'Data migration and ETL processes',
        'Database scaling strategies'
      ]
    },
    {
      id: 'technical-consulting',
      title: 'Technical Consulting',
      description: 'Strategic technical advice for startups and businesses looking to leverage technology for growth in East African markets.',
      icon: '/images/logos/consulting.svg',
      features: [
        'Technology stack selection',
        'Technical architecture design',
        'Code review and optimization',
        'Performance audit and improvement',
        'Technical team mentoring'
      ]
    }
  ];
  
  /**
   * Get all skills across categories
   * @returns {Array} Flattened array of all skills
   */
  export const getAllSkills = () => {
    return Object.values(skills).flat();
  };
  
  /**
   * Get skills by category
   * @param {string} category - Skill category
   * @returns {Array} Skills in the specified category
   */
  export const getSkillsByCategory = (category) => {
    return skills[category] || [];
  };
  
  /**
   * Get all services
   * @returns {Array} All services
   */
  export const getAllServices = () => {
    return services;
  };
  
  /**
   * Get a service by ID
   * @param {string} id - Service ID
   * @returns {Object} Service object
   */
  export const getServiceById = (id) => {
    return services.find(service => service.id === id);
  };