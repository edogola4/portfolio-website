// src/components/skills/ServiceCard.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative h-full rounded-2xl overflow-hidden"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br rounded-2xl"
           style={{ 
             background: `linear-gradient(135deg, ${service.gradientStart || '#3B82F6'} 0%, ${service.gradientEnd || '#8B5CF6'} 100%)`,
             opacity: 0.15
           }}>
        <motion.div
          className="absolute inset-0 opacity-0 bg-gradient-to-br"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.25 }}
          style={{ 
            background: `linear-gradient(135deg, ${service.gradientEnd || '#8B5CF6'} 0%, ${service.gradientStart || '#3B82F6'} 100%)`,
          }}
        />
      </div>
      
      <div className="h-full flex flex-col p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg">
        {/* Service Icon */}
        <motion.div 
          className="mb-6 w-16 h-16 rounded-lg p-4 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500"
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.7, ease: "easeInOut" }
          }}
        >
          <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-500/30 rounded-lg blur-xl"></div>
          <div className="relative z-10 flex items-center justify-center w-full h-full rounded-lg"
            style={{ 
              background: `linear-gradient(135deg, ${service.gradientStart || '#3B82F6'} 0%, ${service.gradientEnd || '#8B5CF6'} 100%)`,
              boxShadow: `0 8px 20px ${service.gradientStart || '#3B82F6'}30`
            }}>
            {service.iconComponent && (
              <service.iconComponent size={28} className="text-white" />
            )}
          </div>
        </motion.div>
        
        {/* Service Title */}
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h3>
        
        {/* Service Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        {/* Service Features */}
        <div className="mt-auto space-y-5">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-lg">
              Key Features
            </h4>
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <motion.span 
                    className="mr-3 mt-1 flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full text-white text-sm"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.gradientStart || '#3B82F6'} 0%, ${service.gradientEnd || '#8B5CF6'} 100%)`
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Examples Section */}
          {service.examples && service.examples.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-lg">Examples</h4>
              <div className="flex flex-wrap gap-2">
                {service.examples.map((example, idx) => (
                  <motion.span
                    key={idx}
                    className="text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full border border-blue-100 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {example}
                  </motion.span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Animated Learn More Link */}
        <motion.div 
          className="mt-6 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href={`/services/${service.id}`}
            className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn more
            <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;