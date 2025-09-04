// src/components/home/SkillsOverview.tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiMonitor, 
  FiCloud, 
  FiTool 
} from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend',
    icon: <FiMonitor size={24} />,
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion']
  },
  {
    category: 'Backend',
    icon: <FiServer size={24} />,
    technologies: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs', 'Authentication']
  },
  {
    category: 'Database',
    icon: <FiDatabase size={24} />,
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Mongoose']
  },
  {
    category: 'DevOps',
    icon: <FiCloud size={24} />,
    technologies: ['AWS', 'Docker', 'CI/CD', 'GitHub Actions', 'Vercel', 'Digital Ocean']
  },
  {
    category: 'Mobile',
    icon: <FiCode size={24} />,
    technologies: ['React Native', 'Progressive Web Apps', 'Responsive Design', 'Mobile-First']
  },
  {
    category: 'Tools',
    icon: <FiTool size={24} />,
    technologies: ['Git', 'Jest', 'VS Code', 'Figma', 'Postman', 'Trello']
  }
];

const SkillsOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-beige-50 dark:bg-slate-900">
      <div className="container-custom">
        <h2 className="section-heading text-slate-800 dark:text-beige-50">Skills Overview</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-slate-100 dark:border-slate-700"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-beige-100 mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-beige-50">{skill.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="flex items-center text-slate-700 dark:text-beige-100">
                    <span className="w-2 h-2 bg-terracotta-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link 
            href="/skills" 
            className="inline-flex items-center px-6 py-3 border-2 border-slate-700 dark:border-beige-100 text-slate-700 dark:text-beige-100 font-medium rounded-lg hover:bg-slate-700 hover:text-beige-50 dark:hover:bg-beige-100 dark:hover:text-slate-800 transition-colors duration-300 group"
          >
            View All Skills & Services
            <svg 
              className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;