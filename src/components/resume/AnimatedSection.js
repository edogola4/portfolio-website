// src/components/resume/AnimatedSection.js
import React from 'react';
import { useIntersectionObserver } from '../../lib/hooks/useIntersectionObserver';

export default function AnimatedSection({ 
  children, 
  className = '', 
  animationClass = 'animate-fadeInUp',
  delay = 0 
}) {
  const { elementRef, hasIntersected } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={`${className} ${hasIntersected ? animationClass : 'opacity-0'}`}
      style={{ 
        animationDelay: `${delay}ms`,
        transition: 'opacity 0.6s ease-out'
      }}
    >
      {children}
    </div>
  );
}