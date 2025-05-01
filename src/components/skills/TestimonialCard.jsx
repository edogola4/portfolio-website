// src/components/skills/TestimonialCard.jsx
'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// Extracted animation variants for better organization
const cardVariants = {
  hover: {
    y: -5,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  tap: {
    y: 2,
    scale: 0.98,
    transition: {
      duration: 0.2
    }
  }
};

const quoteVariants = {
  initial: { opacity: 0.8, scale: 1 },
  hover: { 
    opacity: 1, 
    scale: 1.1,
    rotate: -15,
    transition: { 
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

const TestimonialCard = ({ testimonial, index }) => {
  // Motion values for floating animation
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);
  const controls = useAnimation();
  
  // Breathing effect - cards slowly move up and down with slight rotation
  useEffect(() => {
    // Create a unique timing offset based on index
    const startDelay = index * 0.4;
    
    // Set up animation sequence with randomized values for organic feel
    const animateCard = async () => {
      await new Promise(resolve => setTimeout(resolve, startDelay * 1000));
      
      while (true) {
        // Floating upward
        await controls.start({
          y: -3 - (Math.random() * 3),
          rotate: -0.5 + (Math.random() * 1),
          transition: {
            duration: 3 + (Math.random() * 2),
            ease: "easeInOut"
          }
        });
        
        // Floating downward
        await controls.start({
          y: 3 + (Math.random() * 3),
          rotate: 0.5 + (Math.random() * 1),
          transition: {
            duration: 3 + (Math.random() * 2),
            ease: "easeInOut"
          }
        });
      }
    };
    
    animateCard();
  }, [controls, index]);
  
  // Create parallax effect for hover
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to card center (in percentage)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Convert to rotation degrees (± 5 degrees max)
    const rotX = (mouseY / (rect.height / 2)) * -5;
    const rotY = (mouseX / (rect.width / 2)) * 5;
    
    rotateX.set(rotX);
    rotateY.set(rotY);
  };
  
  const handleMouseLeave = () => {
    // Reset to neutral position
    rotateX.set(0);
    rotateY.set(0);
  };
  
  // Transform for dynamic shadow
  const shadowBlur = useTransform(
    rotateY,
    [-5, 0, 5],
    ["15px 5px 25px -5px rgba(0,0,0,0.3)", "0 10px 30px -15px rgba(0,0,0,0.15)", "5px 15px 25px -5px rgba(0,0,0,0.3)"]
  );
  
  // Check if we have an avatar image
  const hasAvatar = Boolean(testimonial.avatar);
  
  return (
    <motion.div
      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-8 rounded-xl h-full flex flex-col relative group"
      style={{
        boxShadow: shadowBlur,
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cinematic background glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
      
      {/* Animated spotlight effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-300/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Quote icon with glow and animation */}
      <div className="relative mb-6 z-10">
        <div className="absolute -top-3 -left-3 w-16 h-16 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-xl opacity-70"></div>
        <motion.div 
          variants={quoteVariants}
          initial="initial"
          whileHover="hover"
          className="relative z-10 text-blue-500 dark:text-blue-400 opacity-80"
        >
          <FaQuoteLeft size={36} />
        </motion.div>
      </div>
      
      {/* Testimonial content with subtle fade-in */}
      <motion.p 
        className="text-gray-600 dark:text-gray-300 mb-8 italic leading-relaxed text-lg flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        "{testimonial.content}"
      </motion.p>
      
      {/* Author info with enhanced hover effect */}
      <motion.div 
        className="flex items-center mt-auto"
        whileHover={{ x: 5, transition: { duration: 0.3, ease: "easeOut" } }}
      >
        <div className="h-14 w-14 relative rounded-full overflow-hidden mr-4 border-2 border-blue-100 dark:border-blue-900 shadow-md">
          {hasAvatar ? (
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