// src/components/skills/SkillCategory.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ category }) => {
  const [isHovered, setIsHovered] = useState(null);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-12 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
    >
      <div className="flex items-center mb-6">
        {category.iconComponent && (
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg mr-4 text-blue-600 dark:text-blue-400"
          >
            <category.iconComponent size={28} />
          </motion.div>
        )}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {category.title}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8 font-light text-lg">
        {category.description}
      </p>
      
      <div className="space-y-6">
        {category.skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(skill.name)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
              <div className="flex items-center w-full md:w-1/3">
                <div className="w-10 h-10 mr-3 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-full">
                  {skill.iconComponent && (
                    <motion.span 
                      className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                      animate={isHovered === skill.name ? { scale: 1.2 } : { scale: 1 }}
                    >
                      <skill.iconComponent size={20} />
                    </motion.span>
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.years} {skill.years === 1 ? 'year' : 'years'} experience
                  </span>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="relative">
                  <div className="h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  
                  {isHovered === skill.name && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -top-8 left-0 bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 rounded text-xs"
                      style={{ left: `calc(${skill.level}% - 20px)` }}
                    >
                      {skill.level}%
                    </motion.div>
                  )}
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