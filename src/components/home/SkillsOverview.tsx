'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { SiDotnet, SiTypescript, SiReact, SiBlazor, SiPython, SiAmazon, SiDocker, SiPostgresql, SiNodedotjs, SiGit } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';

const coreSkills = [
  { icon: SiDotnet,     name: 'C# / .NET',   color: 'text-purple-600 dark:text-purple-400' },
  { icon: SiTypescript, name: 'TypeScript',   color: 'text-blue-500 dark:text-blue-300' },
  { icon: SiReact,      name: 'React',        color: 'text-cyan-500 dark:text-cyan-300' },
  { icon: SiBlazor,     name: 'Blazor',       color: 'text-indigo-500 dark:text-indigo-300' },
  { icon: SiPython,     name: 'Python',       color: 'text-yellow-500 dark:text-yellow-300' },
  { icon: SiAmazon,     name: 'Azure',        color: 'text-blue-500 dark:text-blue-300' },
  { icon: SiDocker,     name: 'Docker',       color: 'text-sky-400 dark:text-sky-200' },
  { icon: SiPostgresql, name: 'PostgreSQL',   color: 'text-blue-700 dark:text-blue-400' },
  { icon: SiNodedotjs,  name: 'Node.js',      color: 'text-green-600 dark:text-green-400' },
  { icon: SiGit,        name: 'Git',          color: 'text-orange-500 dark:text-orange-300' },
];

const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const staggerContainer = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const SkillsOverview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const locale = useLocale();

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-neutral-100 dark:bg-[#141E26]"
      aria-labelledby="skills-overview-heading"
    >
      <div className="container-custom">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2
            id="skills-overview-heading"
            className="text-3xl md:text-4xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4"
          >
            Core Technical Skills
          </h2>
          <div className="h-1 w-24 bg-[#3A5A6B] dark:bg-[#6B7F82] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 max-w-2xl mx-auto">
            Technologies I use to build production-grade applications
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto"
        >
          {coreSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                custom={index * 0.05}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#1E2A35] border border-[#e8e2d6] dark:border-[#3A5A6B]/35 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className={`w-12 h-12 ${skill.color}`} aria-hidden="true" />
                <span className="text-sm font-medium text-[#2B2D42] dark:text-[#F8F5F0]/90 text-center">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href={`/${locale}/skills`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold bg-[#3A5A6B] text-white hover:bg-[#2B3D4D] dark:bg-[#6B7F82] dark:hover:bg-[#5A6D72] shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            View Full Skills Breakdown
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsOverview;
