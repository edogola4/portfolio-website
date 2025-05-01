// src/components/skills/TestimonialCard.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl shadow-lg h-full flex flex-col relative group"
      style={{
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Subtle border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Quote icon with glow */}
      <div className="relative mb-6">
        <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-xl opacity-70"></div>
        <motion.div 
          initial={{ rotate: 0 }}
          whileHover={{ rotate: -15 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-blue-500 dark:text-blue-400 opacity-80"
        >
          <FaQuoteLeft size={36} />
        </motion.div>
      </div>
      
      {/* Testimonial content */}
      <p className="text-gray-600 dark:text-gray-300 mb-8 italic leading-relaxed text-lg flex-grow">
        "{testimonial.content}"
      </p>
      
      {/* Author info with hover effect */}
      <motion.div 
        className="flex items-center mt-auto"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-14 w-14 relative rounded-full overflow-hidden mr-4 border-2 border-blue-100 dark:border-blue-900 shadow-md">
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 h-full w-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white text-lg">
            {testimonial.name}
          </h4>
          <p className="text-sm text-blue-600 dark:text-blue-400">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;