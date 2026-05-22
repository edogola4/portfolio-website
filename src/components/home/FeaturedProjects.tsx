// src/components/home/FeaturedProjects.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

// Badge type for project items
interface Badge {
  label: string;
  value?: string;
  color?: string;
}

// Use featured projects from the shared data source
import { getFeaturedProjects } from '@/lib/projects';

type Project = {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
  badges?: Badge[];
  badge?: string;
  imageUrl?: string;
  image?: string;
};

const featuredProjects = getFeaturedProjects() as Project[];

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
          {featuredProjects.map((project) => {
            const imageSrc = project.image || project.imageUrl || '/images/projects/project-placeholder.jpg';
            const isRiggs = project.slug === 'riggs-london-kenya' || (project.title && project.title.toLowerCase().includes('riggs'));

            return (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-[#1E2A35] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={imageSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-[#2B2D42] dark:text-white mb-0">
                      {project.title}
                    </h3>
                    {/* subtle badge accent */}
                    {project.badges && project.badges.length > 0 ? (
                      <div className="flex-shrink-0">
                        {project.badges.map((b: Badge) => (
                          <span
                            key={b.label}
                            className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${b.color === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-[#E07A5F]/10 text-[#E07A5F]'} `}
                          >
                            {b.label} {b.value ? `· ${b.value}` : ''}
                          </span>
                        ))}
                      </div>
                    ) : project.badge ? (
                      <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F]">
                        {project.badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.technologies || project.technologies)?.map((tech: string) => (
                      <span 
                        key={tech} 
                        className={`px-2 py-1 text-xs font-medium rounded-full bg-[#F8F5F0] dark:bg-[#2C3E50] text-[#3A5A6B] dark:text-[#6B7F82]`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-[#3A5A6B] dark:text-[#6B7F82] hover:text-[#2B3D4D] dark:hover:text-[#5A6D72] transition-colors"
                        aria-label={`Open ${project.title} demo`}
                      >
                        <FiExternalLink className="mr-1" /> Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-[#3A5A6B] dark:text-[#6B7F82] hover:text-[#2B3D4D] dark:hover:text-[#5A6D72] transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub className="mr-1" /> {isRiggs ? t('viewOnGithub', { defaultMessage: 'View on GitHub →' }) : t('code', { defaultMessage: 'Code' })}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
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