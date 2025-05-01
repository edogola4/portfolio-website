// src/components/skills/TestimonialCard.jsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
    >
      <div className="flex items-start mb-4">
        <span className="text-blue-500 dark:text-blue-400 opacity-30 mr-3">
          <FaQuoteLeft size={24} />
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <div className="h-12 w-12 relative rounded-full overflow-hidden mr-4">
          {testimonial.avatar ? (
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="bg-blue-100 dark:bg-blue-900 h-full w-full flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-400 font-bold">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;