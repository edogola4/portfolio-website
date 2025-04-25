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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-heading">Skills Overview</h2>
        
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
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mr-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              
              <ul className="space-y-2">
                {skill.technologies.map((tech) => (
                  <li key={tech} className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="/skills" className="btn btn-outline">
            View All Skills & Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;