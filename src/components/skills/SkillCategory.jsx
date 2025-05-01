// src/components/skills/SkillCategory.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ category }) => {
  return (
    <motion.div
      className="mb-16 p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg relative overflow-hidden group"
      style={{
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
      
      {/* Header with glow effect */}
      <div className="flex items-center mb-8 relative">
        {/* Icon container with glow */}
        {category.iconComponent && (
          <div className="mr-4 relative">
            <div className="absolute inset-0 bg-blue-400/30 dark:bg-blue-500/30 rounded-full blur-xl"></div>
            <div className="relative z-10 bg-gradient-to-br from-blue-500 to-indigo-600 w-12 h-12 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
              <span className="text-white">
                <category.iconComponent size={24} />
              </span>
            </div>
          </div>
        )}
        
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {category.title}
        </h3>
      </div>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl">
        {category.description}
      </p>
      
      <div className="space-y-8">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col md:flex-row md:items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center w-full md:w-1/3">
              {/* Icon with mini glow */}
              <div className="w-10 h-10 mr-4 relative flex-shrink-0">
                {skill.iconComponent && (
                  <>
                    <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-500/20 rounded-md blur-sm"></div>
                    <div className="relative z-10 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 w-full h-full rounded-md flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400">
                        <skill.iconComponent size={20} />
                      </span>
                    </div>
                  </>
                )}
              </div>
              
              <div>
                <span className="font-medium text-gray-800 dark:text-white text-lg">
                  {skill.name}
                </span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  ({skill.years} {skill.years === 1 ? 'year' : 'years'})
                </span>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="relative">
                {/* Background bar */}
                <div 
                  className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.1)"
                  }}
                >
                  {/* Progress bar with animated gradient */}
                  <motion.div
                    className="h-3 rounded-full relative"
                    style={{
                      background: "linear-gradient(90deg, #3B82F6 0%, #6366F1 100%)",
                      boxShadow: "0 1px 3px rgba(59, 130, 246, 0.5)"
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    {/* Shimmer effect */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" 
                      style={{
                        animation: "shimmer 2s infinite"
                      }}
                    ></div>
                    
                    {/* Percentage tooltip */}
                    <div 
                      className="absolute -right-1 -top-8 bg-blue-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        transform: "translateX(50%)"
                      }}
                    >
                      {skill.level}%
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;