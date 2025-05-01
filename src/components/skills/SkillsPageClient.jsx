'use client';

import React, { useEffect, useState } from 'react';
import { skillCategories, services, testimonials } from '@/lib/skills';
import SkillCategory from '@/components/skills/SkillCategory';
import ServiceCard from '@/components/skills/ServiceCard';
import TestimonialCard from '@/components/skills/TestimonialCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';

export default function SkillsPageClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <AnimatePresence>
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-4 py-16 overflow-hidden"
        >
          {/* Hero Section with Glow Effect */}
          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl opacity-20 -z-10 animate-blob animation-delay-2000"></div>
            
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                duration: 0.8 
              }}
              className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
            >
              Skills & Services
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              As a Full Stack Software Engineer focused on East African markets, I bring a specialized skill set 
              tailored to the unique challenges and opportunities of the region. From offline-first applications 
              to integrated payment solutions, I deliver technology that works for local contexts.
            </motion.p>
          </div>

          {/* Technical Skills Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <div className="flex items-center justify-center mb-16">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
                  Technical Skills
                </h2>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-12">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <SkillCategory category={category} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32 relative"
          >
            {/* Background effect */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 mix-blend-multiply animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 mix-blend-multiply animate-pulse animation-delay-2000"></div>
            </div>
            
            <div className="flex items-center justify-center mb-16">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
                  Services Offered
                </h2>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Tilt
                    options={{
                      max: 15,
                      scale: 1.02,
                      speed: 500,
                      glare: true,
                      "max-glare": 0.1,
                    }}
                    className="h-full"
                  >
                    <ServiceCard service={service} index={index} />
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-32"
          >
            <div className="flex items-center justify-center mb-16">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
                  Client Testimonials
                </h2>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Tilt
                    options={{
                      max: 10,
                      scale: 1.02,
                      speed: 500,
                    }}
                    className="h-full"
                  >
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </Tilt>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-20 text-center rounded-2xl p-12 shadow-xl relative overflow-hidden"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 -z-10"></div>
            
            {/* Glowing orbs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl mix-blend-multiply -z-10 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full filter blur-3xl mix-blend-multiply -z-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-pink-400/10 rounded-full filter blur-3xl mix-blend-multiply -z-10 animate-blob animation-delay-4000"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Need specialized development for East African markets?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let&apos;s discuss how my skills and services can help bring your project to life with solutions
              tailored for the unique challenges and opportunities in the region.
            </p>
            <motion.a 
              href="/contact" 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 55px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 3.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-4 px-10 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}