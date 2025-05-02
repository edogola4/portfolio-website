// src/components/about/TechStack.jsx
"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Tech stack icons from react-icons
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux,
    SiNodedotjs, SiExpress, SiPython, SiDjango, SiGraphql,
    SiMongodb, SiPostgresql, SiFirebase, SiRedis,
    SiDocker, SiAmazon, // ✅ Use SiAmazon instead of SiAmazonaws
    SiVercel, SiGithubactions
  } from 'react-icons/si';
  

const iconComponents = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  nodejs: SiNodedotjs,
  express: SiExpress,
  python: SiPython,
  django: SiDjango,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  firebase: SiFirebase,
  redis: SiRedis,
  docker: SiDocker,
  aws: SiAmazon,
  vercel: SiVercel,
  github: SiGithubactions
};

// Custom hook for intersection observer
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isInView.current) {
        setIsInView.current = true;
        if (ref.current) {
          ref.current.setAttribute('data-in-view', 'true');
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
}

function TechCard({ tech, index }) {
  const IconComponent = iconComponents[tech.icon];
  
  // Get color for each technology
  const getIconColor = (icon) => {
    const colors = {
      react: '#61DAFB',
      nextjs: '#000000',
      typescript: '#3178C6',
      tailwind: '#06B6D4',
      redux: '#764ABC',
      nodejs: '#339933',
      express: '#000000',
      python: '#3776AB',
      django: '#092E20',
      graphql: '#E10098',
      mongodb: '#47A248',
      postgresql: '#4169E1',
      firebase: '#FFCA28',
      redis: '#DC382D',
      docker: '#2496ED',
      aws: '#FF9900',
      vercel: '#000000',
      github: '#181717'
    };
    return colors[icon] || '#6366F1'; // Default to indigo if not found
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800"
    >
      <div className="flex items-center mb-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ type: "spring", duration: 1 }}
          style={{ color: getIconColor(tech.icon) }}
          className="text-3xl mr-3"
        >
          {IconComponent && <IconComponent />}
        </motion.div>
        <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">
          {tech.name}
        </span>
      </div>
      
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
            Proficiency
          </span>
          <span className="text-xs font-semibold inline-block text-indigo-600 dark:text-indigo-300">
            {tech.level}%
          </span>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${tech.level}%` }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-indigo-600"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const techCategories = [
    {
      title: "Frontend Development",
      technologies: [
        { name: "React", icon: "react", level: 90 },
        { name: "Next.js", icon: "nextjs", level: 85 },
        { name: "TypeScript", icon: "typescript", level: 80 },
        { name: "Tailwind CSS", icon: "tailwind", level: 90 },
        { name: "Redux", icon: "redux", level: 75 },
      ]
    },
    {
      title: "Backend Development",
      technologies: [
        { name: "Node.js", icon: "nodejs", level: 85 },
        { name: "Express", icon: "express", level: 80 },
        { name: "Python", icon: "python", level: 75 },
        { name: "Django", icon: "django", level: 70 },
        { name: "GraphQL", icon: "graphql", level: 65 },
      ]
    },
    {
      title: "Database & Storage",
      technologies: [
        { name: "MongoDB", icon: "mongodb", level: 80 },
        { name: "PostgreSQL", icon: "postgresql", level: 75 },
        { name: "Firebase", icon: "firebase", level: 85 },
        { name: "Redis", icon: "redis", level: 65 },
      ]
    },
    {
      title: "DevOps & Deployment",
      technologies: [
        { name: "Docker", icon: "docker", level: 70 },
        { name: "AWS", icon: "aws", level: 75 },
        { name: "Vercel", icon: "vercel", level: 90 },
        { name: "GitHub Actions", icon: "github", level: 80 },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Technical Stack
            </span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mt-2 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            These are the technologies I work with regularly. I'm always expanding my toolkit and exploring new technologies to improve my development capabilities.
          </motion.p>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-8">
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.title}
                </motion.h3>
                <div className="ml-4 h-px bg-gradient-to-r from-indigo-500 to-transparent flex-grow" />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.technologies.map((tech, techIndex) => (
                  <TechCard 
                    key={techIndex} 
                    tech={tech} 
                    index={techIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}