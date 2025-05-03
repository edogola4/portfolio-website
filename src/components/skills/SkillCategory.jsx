// src/components/skills/SkillCategory.jsx
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { darken, lighten } from 'color2k';

const SkillCategory = ({ category }) => {
  const [isHovered, setIsHovered] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Combine container and card hover variants
  const combinedContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
        staggerChildren: 0.1,
      },
    },
    hover: {
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      borderColor: "rgba(99, 102, 241, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={combinedContainerVariants}
      whileHover="hover"
      className="mb-12 p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 transition-all duration-300"
    >
      <motion.div 
        className="flex items-center mb-8"
        variants={childVariants}
      >
        {category.iconComponent && (
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="p-4 rounded-lg mr-5 flex items-center justify-center"
            style={{ 
              background: `linear-gradient(135deg, ${category.gradientStart || '#3B82F6'} 0%, ${category.gradientEnd || '#8B5CF6'} 100%)`,
              boxShadow: `0 4px 15px ${category.gradientStart || '#3B82F6'}40`
            }}
          >
            <category.iconComponent size={32} className="text-white" />
          </motion.div>
        )}
        <div>
          <motion.h3 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {category.title}
          </motion.h3>
          <motion.div 
            className="h-1 w-24 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
      
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-10 font-light text-lg leading-relaxed"
        variants={childVariants}
      >
        {category.description}
      </motion.p>
      
      <div className="space-y-8">
        {category.skills.map((skill, index) => {
          const brandColor = skill.color || "#4f46e5";
          const gradientEnd = lighten(brandColor, 0.2);
          
          return (
            <motion.div
              key={skill.name}
              className="group bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              variants={childVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)', 
                borderLeft: `4px solid ${brandColor}` 
              }}
              onMouseEnter={() => setIsHovered(skill.name)}
              onMouseLeave={() => setIsHovered(null)}
              custom={index}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-4">
                <div className="flex items-center w-full md:w-1/3">
                  <motion.div 
                    className="w-12 h-12 mr-4 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${brandColor}15` }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  >
                    {skill.iconComponent && (
                      <motion.span 
                        className="transition-colors duration-300"
                        style={{ color: brandColor }}
                        animate={isHovered === skill.name ? { scale: 1.2 } : { scale: 1 }}
                      >
                        <skill.iconComponent size={24} />
                      </motion.span>
                    )}
                  </motion.div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-lg">
                      {skill.name}
                    </span>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'} experience
                      </span>
                      <motion.span 
                        className="ml-2 px-2 py-0.5 text-xs rounded-full text-white"
                        style={{ 
                          background: `linear-gradient(90deg, ${brandColor} 0%, ${gradientEnd} 100%)` 
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}
                      </motion.span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3">
                  <div className="relative">
                    <div className="h-3 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-3 rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${brandColor} 0%, ${gradientEnd} 100%)`,
                          boxShadow: `0 0 10px ${brandColor}80`
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    <AnimatedTooltip isVisible={isHovered === skill.name} level={skill.level} color={brandColor} />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const AnimatedTooltip = ({ isVisible, level, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
    transition={{ duration: 0.2 }}
    className="absolute -top-10 left-0 px-3 py-1.5 rounded-lg text-white font-medium text-sm"
    style={{ 
      left: `calc(${level}% - 20px)`,
      background: color || '#4f46e5',
      boxShadow: `0 4px 15px ${color || '#4f46e5'}50`
    }}
  >
    {level}%
  </motion.div>
);

export default SkillCategory;