// src/components/home/FeaturedProjects.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

// This would come from your data source
const featuredProjects = [
  {
    id: 'fintech-app',
    title: 'M-Pesa Integration Platform',
    description: 'A seamless integration platform enabling businesses to easily connect with M-Pesa payment services across East Africa.',
    image: '/images/projects/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'M-Pesa API'],
    demoUrl: 'https://mpesa-integration.example.com',
    githubUrl: 'https://github.com/edwinogola/mpesa-integration',
  },
  {
    id: 'ecommerce',
    title: 'Kenyan Artisan Marketplace',
    description: 'An e-commerce platform connecting local artisans with global customers, complete with multi-currency support.',
    image: '/images/projects/project2.jpg',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://artisan-marketplace.example.com',
    githubUrl: 'https://github.com/edwinogola/artisan-marketplace',
  },
  {
    id: 'health-app',
    title: 'Rural Health Monitoring System',
    description: 'A progressive web app that works offline for rural health workers to collect and synchronize patient data.',
    image: '/images/projects/project3.jpg',
    technologies: ['React', 'PWA', 'IndexedDB', 'Firebase', 'Node.js'],
    demoUrl: 'https://health-monitor.example.com',
    githubUrl: 'https://github.com/edwinogola/health-monitor',
  },
];

const FeaturedProjects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-heading">Featured Projects</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {featuredProjects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="card overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between mt-auto">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link href="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;