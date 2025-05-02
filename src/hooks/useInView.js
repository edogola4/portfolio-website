// hooks/useInView.js
import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook that detects when an element is in the viewport
 * @param {Object} options - IntersectionObserver options
 * @param {number} options.threshold - Percentage of element that needs to be visible
 * @param {string} options.root - Element that is used as the viewport
 * @param {string} options.rootMargin - Margin around the root
 * @returns {Array} [ref, isInView] - Ref to attach to element and boolean if in view
 */
export const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: options.threshold || 0.1,
      root: options.root || null,
      rootMargin: options.rootMargin || '0px',
    });
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold, options.root, options.rootMargin]);
  
  return [ref, isInView];
};

export default useInView;