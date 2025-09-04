// src/components/home/AboutPreview.tsx
'use client';

import Link from 'next/link';
import { motion, MotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import { memo, useMemo, useEffect, useState } from 'react';

/**
 * Props interface for AboutPreview component
 */
interface AboutPreviewProps {
  /** Custom class name for styling overrides */
  className?: string;
  /** Whether to reduce motion for accessibility */
  reduceMotion?: boolean;
}

/**
 * Animation variants for consistent motion design
 */
const animationVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth animation
    }
  }
} as const;

/**
 * Reduced motion variants for accessibility
 */
const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } }
} as const;

/**
 * AboutPreview component displays a brief introduction about the developer
 * with smooth animations and accessibility features
 */
const AboutPreview = memo<AboutPreviewProps>(({ 
  className = '',
  reduceMotion: forcedReduceMotion = false 
}) => {
  // Check user's motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const shouldReduceMotion = forcedReduceMotion || prefersReducedMotion;

  // Intersection observer for triggering animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '50px 0px', // Trigger animation slightly before element is visible
  });

  // Memoize animation variants based on motion preference
  const variants = useMemo(() => 
    shouldReduceMotion ? reducedMotionVariants : animationVariants,
    [shouldReduceMotion]
  );

  // Memoize motion props for performance
  const motionProps: MotionProps = useMemo(() => ({
    ref,
    initial: 'hidden',
    animate: inView ? 'visible' : 'hidden',
    variants,
    'data-testid': 'about-preview-section'
  }), [ref, inView, variants]);

  return (
    <section 
      className={`about-preview py-16 sm:py-20 lg:py-24 bg-[#F8F5F0] dark:bg-[#1E2A35] transition-colors duration-200 ${className}`}
      aria-labelledby="about-preview-heading"
      role="region"
      style={{
        // Performance optimizations
        willChange: 'transform, opacity',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      <div className="container-custom">
        <motion.div
          {...motionProps}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 
            id="about-preview-heading"
            className="text-3xl md:text-4xl font-bold mb-6 text-[#2B2D42] dark:text-[#F8F5F0]"
          >
            About Me
          </h2>
          <div className="h-1 w-24 bg-[#3A5A6B] dark:bg-[#6B7F82] mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg text-[#2B2D42]/90 dark:text-[#F8F5F0]/90 mb-6 leading-relaxed">
          I&apos;m a full-stack developer with a passion for building scalable web applications that solve real-world problems. 
            With expertise in modern JavaScript frameworks and cloud technologies, I create efficient and user-friendly digital experiences.
          </p>
          
          <p className="text-lg text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 mb-8 leading-relaxed">
            My journey in tech started with a curiosity about how things work, which led me to pursue a career in software development. 
            I specialize in building responsive, accessible, and performant web applications using the latest technologies.
          </p>
          
          <div className="mt-10">
            <Link 
              href="/about" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3A5A6B] hover:bg-[#2B3D4D] dark:bg-[#6B7F82] dark:hover:bg-[#5A6D72] transition-colors duration-200"
            >
              Learn More About Me
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Inline styles for better performance and reduced CSS bundle size */}
      <style jsx>{`
        .about-preview {
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .about-preview {
            font-size: 1.125rem;
            line-height: 1.7;
          }
        }

        @media (min-width: 1024px) {
          .about-preview {
            font-size: 1.25rem;
            line-height: 1.8;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .about-preview {
            --text-color: #000000;
            --bg-color: #ffffff;
            --border-color: #000000;
          }
          
          :global(.dark) .about-preview {
            --text-color: #ffffff;
            --bg-color: #000000;
            --border-color: #ffffff;
          }

          /* High contrast styles for the CTA button */
          :global(.about-cta-button) {
            border-color: currentColor !important;
            color: CanvasText !important;
            background-color: Canvas !important;
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .about-preview :global(*) {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Print styles */
        @media print {
          .about-preview {
            background: white !important;
            color: black !important;
          }
          
          .about-preview :global(.btn) {
            display: none;
          }
        }

        /* Enhanced focus styles */
        .about-preview :global(.btn:focus-visible) {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
          outline: 2px solid transparent;
        }

        /* Improved hover states */
        .about-preview :global(.btn:hover) {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
});

// Display name for debugging
AboutPreview.displayName = 'AboutPreview';

export default AboutPreview;

// Export types for external use
export type { AboutPreviewProps };