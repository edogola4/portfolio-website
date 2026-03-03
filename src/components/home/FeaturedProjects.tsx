// src/components/home/FeaturedProjects.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

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
  const locale = useLocale();
  const t = useTranslations('home');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#141E26]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-[#3A5A6B] dark:bg-[#6B7F82] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-[#1E2A35] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2B2D42] dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium rounded-full bg-[#F8F5F0] dark:bg-[#2C3E50] text-[#3A5A6B] dark:text-[#6B7F82]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[#3A5A6B] dark:text-[#6B7F82] hover:text-[#2B3D4D] dark:hover:text-[#5A6D72] transition-colors"
                  >
                    <FiExternalLink className="mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[#3A5A6B] dark:text-[#6B7F82] hover:text-[#2B3D4D] dark:hover:text-[#5A6D72] transition-colors"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* View all projects CTA */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center justify-center px-5 py-3 rounded-md text-sm font-semibold bg-[#3A5A6B] text-white hover:bg-[#2B3D4D] dark:bg-[#6B7F82] dark:hover:bg-[#5A6D72] transition-colors"
          >
            {t('viewAllProjects', {defaultMessage: 'View all projects'})}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;