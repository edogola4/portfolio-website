'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// Animation variants
const cardVariants = {
  initial: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    y: 2,
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

const starVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: (i) => ({
    opacity: 1, 
    scale: 1, 
    transition: { 
      delay: i * 0.1 + 0.3,
      duration: 0.4
    }
  })
};

const TestimonialCard = ({ testimonial, index = 0 }) => {
  // Motion values for floating and parallax effects
  const controls = useAnimation();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Create "breathing" floating animation with slight rotation
  useEffect(() => {
    // Unique timing offset based on index for staggered effect
    const startDelay = index * 0.4;
    
    const animateCard = async () => {
      await new Promise(resolve => setTimeout(resolve, startDelay * 1000));
      
      // Continuous subtle animation loop
      while (true) {
        // Float upward
        await controls.start({
          y: -3 - (Math.random() * 2),
          rotate: -0.5 + (Math.random()),
          transition: {
            duration: 3 + (Math.random() * 1.5),
            ease: "easeInOut"
          }
        });
        
        // Float downward
        await controls.start({
          y: 3 + (Math.random() * 2),
          rotate: 0.5 + (Math.random()),
          transition: {
            duration: 3 + (Math.random() * 1.5),
            ease: "easeInOut"
          }
        });
      }
    };
    
    animateCard();
    
    // No cleanup needed for demo purposes, but would be good practice in production
  }, [controls, index]);
  
  // Parallax effect handlers
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Convert to rotation degrees (± 4 degrees max)
    const rotX = (mouseY / (rect.height / 2)) * -4;
    const rotY = (mouseX / (rect.width / 2)) * 4;
    
    rotateX.set(rotX);
    rotateY.set(rotY);
  };
  
  const handleMouseLeave = () => {
    // Reset to neutral position with smooth animation
    rotateX.set(0);
    rotateY.set(0);
  };
  
  // Dynamic shadow based on card rotation
  const shadowBlur = useTransform(
    rotateY,
    [-4, 0, 4],
    ["15px 5px 25px -5px rgba(0,0,0,0.25)", "0 10px 30px -15px rgba(0,0,0,0.15)", "5px 15px 25px -5px rgba(0,0,0,0.25)"]
  );

  // Determine gradients (use defaults if not provided)
  const gradientStart = testimonial.gradientStart || '#3B82F6';
  const gradientEnd = testimonial.gradientEnd || '#8B5CF6';
  
  // Check if avatar exists
  const hasAvatar = Boolean(testimonial.avatar);
  
  // Determine if rating should be displayed
  const showRating = testimonial.rating !== undefined;
  
  return (
    <motion.div
      className="relative h-full p-1 rounded-2xl overflow-hidden"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      animate={controls}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        boxShadow: shadowBlur,
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Animated gradient border */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-20" 
        animate={{
          background: [
            `linear-gradient(135deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
            `linear-gradient(225deg, ${gradientStart} 0%, ${gradientEnd} 100%)`
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      <div className="h-full p-8 rounded-xl bg-white dark:bg-gray-800/90 backdrop-blur-sm shadow-lg flex flex-col relative group">
        {/* Cinematic background glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
        
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
        
        {/* Quote icon with glow */}
        <div className="relative mb-6 z-10">
          <div className="absolute -top-3 -left-3 w-16 h-16 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-xl opacity-70"></div>
          <motion.div 
            variants={quoteVariants}
            className="relative z-10 text-blue-500 dark:text-blue-400 opacity-80"
          >
            <FaQuoteLeft size={32} />
          </motion.div>
        </div>
        
        {/* Testimonial content with fade-in */}
        <motion.p 
          className="text-gray-600 dark:text-gray-300 italic leading-relaxed text-lg mb-6 flex-grow relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {testimonial.content}
        </motion.p>
        
        {/* Star rating (if rating is provided) */}
        {showRating && (
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                custom={i}
                variants={starVariants}
                initial="initial"
                animate="animate"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill={i < testimonial.rating ? 'currentColor' : 'none'}
                stroke="currentColor"
                style={{ 
                  color: i < testimonial.rating ? gradientStart : 'rgba(209, 213, 219, 0.5)'
                }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
        )}
        
        {/* Author info with enhanced hover effect */}
        <motion.div 
          className="flex items-center mt-auto"
          whileHover={{ x: 5, transition: { duration: 0.3, ease: "easeOut" } }}
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 shadow-md" 
               style={{ borderColor: gradientStart }}>
            {hasAvatar ? (
              <motion.div 
                className="h-full w-full"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name || 'Testimonial author'}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ) : (
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 h-full w-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {testimonial.name ? testimonial.name.charAt(0) : ''}
                </span>
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white text-lg">
              {testimonial.name}
            </h4>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              {testimonial.role || testimonial.position}
              {(testimonial.company || testimonial.position) && 
                `, ${testimonial.company || ''}`}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;