'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { SiDotnet, SiTypescript, SiReact, SiBlazor, SiPython, SiAmazon, SiDocker, SiPostgresql, SiNodedotjs, SiGit } from 'react-icons/si';

const coreSkills = [
  { icon: SiDotnet, name: 'C# / .NET', color: 'text-purple-600 dark:text-purple-400' },
  { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500 dark:text-blue-300' },
  { icon: SiReact, name: 'React', color: 'text-cyan-500 dark:text-cyan-300' },
  { icon: SiBlazor, name: 'Blazor', color: 'text-indigo-500 dark:text-indigo-300' },
  { icon: SiPython, name: 'Python', color: 'text-yellow-500 dark:text-yellow-300' },
  { icon: SiAmazon, name: 'Azure', color: 'text-blue-500 dark:text-blue-300' },
  { icon: SiDocker, name: 'Docker', color: 'text-sky-400 dark:text-sky-200' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: 'text-blue-700 dark:text-blue-400' },
  { icon: SiNodedotjs, name: 'Node.js', color: 'text-green-600 dark:text-green-400' },
  { icon: SiGit, name: 'Git', color: 'text-orange-500 dark:text-orange-300' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const SkillsOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const locale = useLocale();

  return (
    <div ref={ref} className="py-16 bg-stone-50 dark:bg-stone-900/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            Core Technical Skills
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300 max-w-2xl mx-auto">
            Technologies I use to build production-grade applications
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto"
        >
          {coreSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                custom={index * 0.05}
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white dark:bg-stone-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className={`w-12 h-12 ${skill.color}`} />
                <span className="text-sm font-medium text-stone-700 dark:text-stone-300 text-center">
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
            className="inline-flex items-center px-10 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-amber-100 via-amber-50 to-stone-50 text-amber-900 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 border border-amber-200 dark:from-amber-900 dark:via-amber-800 dark:to-stone-900 dark:text-amber-100 dark:border-amber-800 transition-all duration-300 transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-700"
          >
            View Full Skills Breakdown
            <svg
              className="w-5 h-5 ml-2 -mr-1"
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
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsOverview;
