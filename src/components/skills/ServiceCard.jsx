// src/components/skills/ServiceCard.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg h-full flex flex-col relative group"
      style={{
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Subtle border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Icon with glow effect */}
      <div className="group-hover:scale-110 transition-transform duration-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 relative">
        <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-500/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div className="relative z-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg w-full h-full flex items-center justify-center">
          {service.iconComponent && (
            <span className="text-white">
              <service.iconComponent size={26} />
            </span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>
      
      <div className="mt-auto space-y-5">
        <div>
          <h4 className="font-semibold text-gray-800 dark:text-white mb-3 text-lg">
            Key Features
          </h4>
          <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <motion.li
                key={idx}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="flex-shrink-0 text-blue-500 dark:text-blue-400 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
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
      </div>
    </motion.div>
  );
};

export default ServiceCard;