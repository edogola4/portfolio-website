'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DownloadButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative group"
    >
      <a 
        href="/files/edwin-ogola-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-between gap-3 px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg group hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
        download
      >
        <span className="relative z-10 flex items-center gap-2 text-sm font-semibold md:text-base">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
          Download CV
        </span>
        
        {/* Animated arrow on hover */}
        <motion.span 
          className="relative z-10"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.3 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" 
            />
          </svg>
        </motion.span>
        
        {/* Animated background effect */}
        <span className="absolute inset-0 w-0 bg-white/20 group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </a>
    </motion.div>
  );
};

export default DownloadButton;