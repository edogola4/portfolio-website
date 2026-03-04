// src/components/about/TechStack.jsx
"use client";

import { motion } from 'framer-motion';

// Tech stack icons from react-icons
import { SiDotnet, SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMicrosoftsqlserver, SiPostgresql, SiMongodb, SiRedis, SiMicrosoftazure, SiAmazonaws, SiDocker, SiKubernetes, SiTerraform, SiGithubactions, SiGit } from 'react-icons/si';
import { TbBrandBlazor } from 'react-icons/tb';

const iconComponents = {
  csharp: SiDotnet,
  dotnet: SiDotnet,
  typescript: SiTypescript,
  python: SiPython,
  react: SiReact,
  blazor: TbBrandBlazor,
  nextjs: SiNextdotjs,
  aspnet: SiDotnet,
  nodejs: SiNodedotjs,
  express: SiExpress,
  sqlserver: SiMicrosoftsqlserver,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  azure: SiMicrosoftazure,
  aws: SiAmazonaws,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  terraform: SiTerraform,
  github: SiGithubactions,
  git: SiGit
};

function TechCard({ tech, index }) {
  const IconComponent = iconComponents[tech.icon];
  
  const getIconColor = (icon) => {
    const colors = {
      csharp: '#239120',
      dotnet: '#512BD4',
      typescript: '#3178C6',
      python: '#3776AB',
      react: '#61DAFB',
      blazor: '#512BD4',
      nextjs: '#000000',
      aspnet: '#512BD4',
      nodejs: '#339933',
      express: '#000000',
      sqlserver: '#CC2927',
      postgresql: '#4169E1',
      mongodb: '#47A248',
      redis: '#DC382D',
      azure: '#0078D4',
      aws: '#FF9900',
      docker: '#2496ED',
      kubernetes: '#326CE5',
      terraform: '#7B42BC',
      github: '#181717',
      git: '#F05032'
    };
    return colors[icon] || '#6B7F82';
  };
  
  const getLevelColor = (level) => {
    const colors = {
      'Expert': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Proficient': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Familiar': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
    };
    return colors[level] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)'
      }}
      className="bg-white dark:bg-neutral-800/50 rounded-xl p-4 transition-all duration-300 border border-neutral-100 dark:border-neutral-700/50 hover:border-accent-100 dark:hover:border-accent-800/50 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ type: "spring", duration: 1 }}
            style={{ color: getIconColor(tech.icon) }}
            className="text-2xl mr-3"
          >
            {IconComponent && <IconComponent />}
          </motion.div>
          <span className="font-semibold text-sm text-primary-800 dark:text-white">
            {tech.name}
          </span>
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getLevelColor(tech.level)}`}>
          {tech.level}
        </span>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const techCategories = [
    {
      title: "Core Languages",
      technologies: [
        { name: "C# / .NET", icon: "csharp", level: "Expert" },
        { name: "TypeScript", icon: "typescript", level: "Proficient" },
        { name: "Python", icon: "python", level: "Proficient" },
      ]
    },
    {
      title: "Frontend",
      technologies: [
        { name: "React", icon: "react", level: "Proficient" },
        { name: "Blazor", icon: "blazor", level: "Proficient" },
        { name: "Next.js", icon: "nextjs", level: "Proficient" },
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "ASP.NET Core", icon: "aspnet", level: "Expert" },
        { name: "Node.js", icon: "nodejs", level: "Proficient" },
        { name: "Express", icon: "express", level: "Proficient" },
      ]
    },
    {
      title: "Database",
      technologies: [
        { name: "SQL Server", icon: "sqlserver", level: "Expert" },
        { name: "PostgreSQL", icon: "postgresql", level: "Proficient" },
        { name: "MongoDB", icon: "mongodb", level: "Proficient" },
        { name: "Redis", icon: "redis", level: "Familiar" },
      ]
    },
    {
      title: "Cloud/DevOps",
      technologies: [
        { name: "Azure", icon: "azure", level: "Proficient" },
        { name: "AWS", icon: "aws", level: "Proficient" },
        { name: "Docker", icon: "docker", level: "Proficient" },
        { name: "Kubernetes", icon: "kubernetes", level: "Familiar" },
      ]
    },
    {
      title: "Tools",
      technologies: [
        { name: "Terraform", icon: "terraform", level: "Familiar" },
        { name: "GitHub Actions", icon: "github", level: "Proficient" },
        { name: "Git", icon: "git", level: "Expert" },
      ]
    }
  ];

  return (
    <section id="tech-stack" className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.h2 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-800 dark:text-white"
            >
              Technical Stack
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-accent-500 to-accent-600 mx-auto mt-3 sm:mt-4 rounded-full"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto px-4 sm:px-6"
            >
              Technologies I work with regularly, organized by experience level: Expert, Proficient, and Familiar.
            </motion.p>
          </div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {techCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-neutral-50/50 dark:bg-neutral-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm border border-neutral-100 dark:border-neutral-800/50"
              >
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold text-primary-800 dark:text-white mb-2 sm:mb-0"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="hidden sm:block h-px sm:ml-4 bg-gradient-to-r from-accent-500/30 to-transparent flex-grow" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
      </div>
    </section>
  );
}