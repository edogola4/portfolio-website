// src/components/home/SkillsOverview.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { skillCategories } from '@/data/testimonials';

const SkillsOverview = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.name === selectedCategory);

  return (
    <div ref={ref} className="py-16 bg-stone-50 dark:bg-stone-900/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-stone-700 dark:text-stone-300 max-w-2xl mx-auto mb-8">
            A showcase of my technical skills and the technologies I work with
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'All'
                  ? 'bg-amber-700 text-amber-50 shadow-md'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((category) => {
              const Icon = category.iconComponent;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  style={{
                    background: selectedCategory === category.name 
                      ? `linear-gradient(135deg, ${category.gradientStart}, ${category.gradientEnd})`
                      : 'bg-stone-200 dark:bg-stone-700'
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCategories.flatMap(category => 
              category.skills.map((skill, index) => (
                <motion.div
                  key={`${category.id}-${skill.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white dark:bg-stone-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-200 dark:border-stone-700"
                >
                  <div className="p-6 bg-white dark:bg-stone-800">
                    <div className="flex items-center mb-4">
                      <div 
                        className="p-2 rounded-lg mr-4 flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${skill.gradientStart}, ${skill.gradientEnd})`
                        }}
                      >
                        <span className="text-white">{skill.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.years}+ years experience
                        </p>
                      </div>
                    </div>
                    {skill.description && (
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {skill.description}
                      </p>
                    )}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>Proficiency</span>
                        <span>{Math.min(skill.years * 20, 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${Math.min(skill.years * 20, 100)}%`,
                            background: `linear-gradient(90deg, ${skill.gradientStart}, ${skill.gradientEnd})`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            href="/skills"
            className="inline-flex items-center px-10 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-amber-100 via-amber-50 to-stone-50 text-amber-900 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 border border-amber-200 dark:from-amber-900 dark:via-amber-800 dark:to-stone-900 dark:text-amber-100 dark:border-amber-800 transition-all duration-300 transform hover:scale-105 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-700"
          >
            View Full Skills Breakdown
            <svg 
              className="w-5 h-5 ml-2 -mr-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsOverview;