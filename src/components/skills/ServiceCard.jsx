// src/components/skills/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md h-full flex flex-col"
    >
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
        {service.iconComponent && (
          <span className="text-blue-600 dark:text-blue-400">
            <service.iconComponent size={24} />
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {service.description}
      </p>
      
      <div className="mt-auto">
        <h4 className="font-medium text-gray-800 dark:text-white mb-2">Key Features:</h4>
        <ul className="space-y-2 mb-4">
          {service.features.map((feature, idx) => (
            <motion.li 
              key={idx} 
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-green-500 mr-2 mt-1">✓</span>
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
        
        <div>
          <h4 className="font-medium text-gray-800 dark:text-white mb-2">Examples:</h4>
          <div className="flex flex-wrap gap-2">
            {service.examples.map((example, idx) => (
              <motion.span 
                key={idx}
                className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
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
      </div>
    </motion.div>
  );
};

export default ServiceCard;
