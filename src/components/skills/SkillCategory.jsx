// src/components/skills/SkillCategory.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        {category.iconComponent && (
          <span className="text-blue-600 dark:text-blue-400 mr-3">
            <category.iconComponent size={24} />
          </span>
        )}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
          {category.title}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {category.description}
      </p>
      
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            className="flex flex-col md:flex-row md:items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center w-full md:w-1/3">
              <div className="w-8 h-8 mr-3 flex items-center justify-center">
                {skill.iconComponent && (
                  <span className="text-blue-600 dark:text-blue-400">
                    <skill.iconComponent size={20} />
                  </span>
                )}
              </div>
              <span className="font-medium text-gray-800 dark:text-white">
                {skill.name}
              </span>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                ({skill.years} {skill.years === 1 ? 'year' : 'years'})
              </span>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                  className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
