// src/components/home/Hero.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { Engine } from "@tsparticles/engine";
import { Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { FiArrowRight } from 'react-icons/fi';
import { FaReact, FaGithub, FaLinkedin, FaTwitter, FaStar } from 'react-icons/fa';
import { BsArrowUpRight } from 'react-icons/bs';
import { IoRocketOutline, IoStatsChart } from 'react-icons/io5';
import Script from 'next/script';
import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiAmazon,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGraphql,
  SiKubernetes,
  SiGit,
  SiJavascript,
  SiMysql,
  SiExpress
} from 'react-icons/si';
import {
  FaUserSecret,
  FaBug,
  FaLock,
  FaShieldAlt,
  FaLaptopCode,
} from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

// Define the window interface to include tsParticles
declare global {
  interface Window {
    tsParticles: Engine; // Update type for better intellisense if needed
  }
}

// Enhanced icon data with proficiency levels
const iconData = [
  { icon: FaReact, title: 'React', proficiency: 95, color: 'text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200' },
  { icon: SiNextdotjs, title: 'Next.js', proficiency: 90, color: 'text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white' },
  { icon: SiTypescript, title: 'TypeScript', proficiency: 85, color: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300' },
  { icon: SiNodedotjs, title: 'Node.js', proficiency: 90, color: 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300' },
  { icon: SiMongodb, title: 'MongoDB', proficiency: 80, color: 'text-green-500 dark:text-green-300 hover:text-green-600 dark:hover:text-green-200' },
  { icon: SiAmazon, title: 'AWS', proficiency: 85, color: 'text-orange-500 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-200' },
  { icon: SiPython, title: 'Python', proficiency: 80, color: 'text-yellow-500 dark:text-yellow-300 hover:text-yellow-600 dark:hover:text-yellow-200' },
  { icon: SiRedux, title: 'Redux', proficiency: 85, color: 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300' },
  { icon: SiTailwindcss, title: 'Tailwind CSS', proficiency: 90, color: 'text-teal-400 dark:text-teal-300 hover:text-teal-500 dark:hover:text-teal-200' },
  { icon: SiPostgresql, title: 'PostgreSQL', proficiency: 75, color: 'text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300' },
  { icon: SiDocker, title: 'Docker', proficiency: 80, color: 'text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200' },
  { icon: SiGraphql, title: 'GraphQL', proficiency: 85, color: 'text-pink-500 dark:text-pink-300 hover:text-pink-600 dark:hover:text-pink-200' },
  { icon: SiKubernetes, title: 'Kubernetes', proficiency: 70, color: 'text-blue-400 dark:text-blue-200 hover:text-blue-500 dark:hover:text-blue-100' },
  { icon: SiGit, title: 'Git', proficiency: 90, color: 'text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300' },
  { icon: FaUserSecret, title: 'Ethical Hacking', proficiency: 70, color: 'text-red-500 dark:text-red-300 hover:text-red-600 dark:hover:text-red-200' },
  { icon: FaShieldAlt, title: 'Cybersecurity', proficiency: 75, color: 'text-indigo-500 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200' },
  { icon: FaBug, title: 'Vulnerability Scanning', proficiency: 65, color: 'text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300' },
  { icon: FaLock, title: 'Network Security', proficiency: 70, color: 'text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200' },
  { icon: FaLaptopCode, title: 'Technical Writing', proficiency: 85, color: 'text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300' },
  {
    icon: SiJavascript,
    title: 'JavaScript',
    proficiency: 90,
    color: 'text-yellow-400 dark:text-yellow-300 hover:text-yellow-500 dark:hover:text-yellow-200',
  },
  {
    icon: SiMysql,
    title: 'MySQL',
    proficiency: 75,
    color: 'text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300',
  },
  {
    icon: SiExpress,
    title: 'Express',
    proficiency: 80,
    color: 'text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200',
  },
];

// Actual client logos - Replace these with your actual client information
const clientLogos = [
  { name: 'Safaricom', logo: '/images/clients/client1.png' },
  { name: 'Equity Bank', logo: '/images/clients/client2.svg' },
  { name: 'Twiga Foods', logo: '/images/clients/client3.svg' },
  { name: 'M-KOPA', logo: '/images/clients/client4.svg' },
];

// Highlights/Stats to showcase achievements
const highlights = [
  { icon: IoRocketOutline, value: '15+', label: 'Projects Delivered', color: 'from-blue-500 to-purple-500' },
  { icon: FaStar, value: '100%', label: 'Client Satisfaction', color: 'from-yellow-500 to-orange-500' },
  { icon: IoStatsChart, value: '4+', label: 'Years Experience', color: 'from-green-500 to-teal-500' },
];

// Define correctly typed icon variants for framer-motion
const iconVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 300 }
  }),
};

// Fade in variant for content
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Define types for the tilt options and tilt state
interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  reset?: boolean;
}

interface TiltState {
  x: number;
  y: number;
}

// Custom tilt effect hook with proper TypeScript typings
//const useCustomTilt = (options: TiltOptions = {}): [React.RefObject<HTMLDivElement>, TiltState] => {
const useCustomTilt = (options: TiltOptions = {}): [React.RefObject<HTMLDivElement | null>, TiltState] => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      max = 15,
      speed = 500,
      reset = true,
    } = options;

    let timeout: ReturnType<typeof setTimeout> | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (!element) return;

      if (timeout) clearTimeout(timeout);

      const rect = element.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Calculate mouse position relative to the element
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate tilt values (invert to make it look more natural)
      const tiltX = ((y / height) * max * 2) - max;
      const tiltY = -((x / width) * max * 2) + max;

      setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
      if (reset) {
        timeout = setTimeout(() => {
          setTilt({ x: 0, y: 0 });
        }, speed);
      }
    };

    const handleMouseEnter = () => {
      if (timeout) clearTimeout(timeout);
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
      if (timeout) clearTimeout(timeout);
    };
  }, [options]);

  return [ref, tilt];
};

const Hero = () => {
  const typedRef = useRef<Typed | null>(null);
  const typedElementRef = useRef<HTMLSpanElement | null>(null);
  const [selectedTech, setSelectedTech] = useState<(typeof iconData)[0] | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollY } = useScroll();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const particlesInitialized = useRef(false);
  //const particlesContainerRef = useRef(null);
  const particlesContainerRef = useRef<Container | null | undefined>(undefined);

  // Array of testimonials
  const testimonials = [
    {
      quote: "Edwin delivered our AI-powered supply chain solution on time and under budget.",
      author: "Sarah Kamau",
      position: "CTO, Twiga Foods"
    },
    {
      quote: "His technical skill and understanding of East African markets is unmatched.",
      author: "James Mwangi",
      position: "Product Lead, Equity Bank"
    },
    {
      quote: "The most reliable developer we've worked with. Highly recommended!",
      author: "Lucy Wanjiru",
      position: "Founder, TechKE"
    }
  ];

  // Custom tilt effect for profile image
  const [tiltRef, tilt] = useCustomTilt({
    max: 15,
    speed: 500,
    reset: true,
  });

  // Parallax effect values
  const profileImageY = useTransform(scrollY, [0, 500], [0, -50]);
  const titleY = useTransform(scrollY, [0, 500], [0, -30]);
  const subtitleOpacity = useTransform(scrollY, [0, 200, 300], [1, 0.8, 0]);

  // Initialize typed.js
  useEffect(() => {
    if (typedElementRef.current) {
      typedRef.current = new Typed(typedElementRef.current, {
        strings: [
          'Full Stack Software Engineer',
          'NLP Specialist',
          'AI | Machine Learning Student',
          'AWS Cloud Architect',
          'Cybersecurity Enthusiast',
          'Ethical Hacking Explorer',
          'Technical Writer & Educator',
          'Web Application Security Analyst'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        startDelay: 300,
        loop: true,
        smartBackspace: true,
        fadeOut: true,
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 300,
        showCursor: true,
        cursorChar: '|'
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Initialize particles - but make sure they're contained to the Hero section
  useEffect(() => {
    // Function to initialize particles - prevents duplicate initialization
    const initializeParticles = async () => {
      await loadFull(window.tsParticles);
      if (particlesInitialized.current || prefersReducedMotion ||
        typeof window === 'undefined' || !window.tsParticles) {
        return;
      }

      const heroParticlesContainer = document.getElementById("hero-particles");
      if (!heroParticlesContainer) return;

      try {
        // Store the container reference for cleanup
        particlesContainerRef.current = await window.tsParticles.load({
          id: "hero-particles",
          options: {
            fpsLimit: 60,
            fullScreen: { enable: false, zIndex: 0 },
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  // area: 1500  // This is the correct property in v3
                  width: 1500,
                  height: 1500
                }
              },
              color: { value: "#2e86de" },
              shape: {
                type: "triangle",
                options: {  // In v3, stroke is defined in options
                  triangle: {
                    sides: 3
                  }
                }
              },
              opacity: {
                value: { min: 0.1, max: 0.3 }
              },
              size: {
                value: { min: 2, max: 6 }
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                outModes: {
                  default: "bounce"  // In v3, outModes is an object with default property
                },
                attract: { enable: false }
              }
            },
            interactivity: {
              detectsOn: "window",  // Changed from canvas to window, as detectsOn is deprecated
              events: {
                onHover: { enable: true, mode: "bubble" },
                onClick: { enable: false },
                resize: { enable: true }  // In v3, resize is an object
              },
              modes: {
                bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8 }
              }
            },
            detectRetina: true,
            pauseOnBlur: true
          }
        });




        particlesInitialized.current = true;
      } catch (error) {
        console.error("Failed to initialize particles:", error);
      }
    };

    // Attempt to initialize immediately if script is already loaded
    if (window.tsParticles && !particlesInitialized.current) {
      initializeParticles();
    }

    return () => {
      // Clean up particles when component unmounts
      if (particlesContainerRef.current && particlesInitialized.current) {
        try {
          particlesContainerRef.current.destroy();
          particlesInitialized.current = false;
        } catch (error) {
          console.error("Failed to destroy particles:", error);
        }
      }
    };
  }, [prefersReducedMotion]);

  // Handle script load event
  const handleTsParticlesLoad = () => {
    if (typeof window !== 'undefined' && window.tsParticles && !particlesInitialized.current && !prefersReducedMotion) {
      const initializeParticles = async () => {
        try {
          particlesContainerRef.current = await window.tsParticles.load({
            id: "hero-particles",
            options: {
              fpsLimit: 60,
              fullScreen: { enable: false, zIndex: 0 },
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    //area: 1500  // Changed from value to area
                    width: 1500,
                    height: 1500
                  }
                },
                color: { value: "#2e86de" },
                shape: {
                  type: "triangle",
                  options: {  // In v3, stroke is defined in options
                    triangle: {
                      sides: 3
                    }
                  }
                },
                opacity: {
                  value: { min: 0.1, max: 0.3 }  // Changed from random: true
                },
                size: {
                  value: { min: 2, max: 6 }  // Changed from random: true
                },
                move: {
                  enable: true,
                  speed: 1.5,
                  random: true,
                  outModes: {
                    default: "bounce"  // In v3, outModes is an object with default property
                  },
                  direction: "none",
                  attract: { enable: false }
                }
              },
              interactivity: {
                detectsOn: "window",  // Changed from canvas to window
                events: {
                  onHover: { enable: true, mode: "bubble" },
                  onClick: { enable: false },
                  resize: { enable: true }  // In v3, resize is an object
                },
                modes: {
                  bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8 }
                }
              },
              detectRetina: true,  // Changed from retina_detect
              pauseOnBlur: true
            }
          });

          particlesInitialized.current = true;
        } catch (error) {
          console.error("Failed to initialize particles:", error);
        }
      };

      initializeParticles();
    }
  };
  // Cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Edwin Ogola",
    "url": "https://edwinogola.com",
    "jobTitle": "Full Stack Software Engineer",
    "knowsAbout": ["Web Development", "AI/ML", "Cloud Architecture", "East African Tech", "Software Engineer"],
    "image": "https://edwinogola.com/images/profile.png",
    "sameAs": [
      "https://github.com/edogola4",
      "https://www.linkedin.com/in/brandon-ogola-b77063232/",
      "https://x.com/BrandonOgola"
    ]
  };

  // Extract width value as a style to avoid inlining in JSX
  const proficiencyStyle = (percentage: number) => ({
    width: `${percentage}%`,
  });

  return (
    <section
      className="relative min-h-screen pt-20 pb-16 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
      id="hero"
    >
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background geometric patterns */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-primary-300/20 to-secondary-300/20 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-secondary-300/20 to-primary-300/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-blue-300/20 to-purple-300/20 blur-3xl"></div>
      </div>

      {/* Optimized particles effect with tsParticles - CONTAINED within the hero section */}
      <Script
        id="tsparticles-script"
        src="https://cdn.jsdelivr.net/npm/tsparticles@2.9.3/tsparticles.bundle.min.js"
        onLoad={handleTsParticlesLoad}
        strategy="lazyOnload"
      />

      {/* IMPORTANT: Fixed container for tsParticles with explicit dimensions */}
      <div
        id="hero-particles"
        className="absolute inset-0 z-0"
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden', // Important to keep particles contained
          pointerEvents: 'none' // Allow interactions with elements beneath
        }}
      ></div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Availability badge - made clickable */}
          <Link href="/contact" className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Available for projects
            <BsArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">I&apos;m Edwin Ogola</span>
              <br />
              <span className="inline-flex text-gray-800 dark:text-gray-100">
                <span ref={typedElementRef} className="typed-text"></span>
              </span>
            </motion.h1>

            <motion.p
              style={{ opacity: subtitleOpacity }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
            >
              Building AI-powered web applications that solve unique challenges in East African markets
            </motion.p>
          </div>

          {/* Highlight stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            animate="visible"
          >
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.label}
                  variants={fadeInUp}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
                >
                  <div className={`w-10 h-10 mb-2 rounded-lg flex items-center justify-center bg-gradient-to-br ${highlight.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{highlight.value}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{highlight.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Testimonial carousel */}
          <motion.div
            className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mb-6 overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-center mb-1">
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500 mr-1" />
              <FaStar className="text-yellow-500" />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 dark:text-gray-300 italic mb-2">&quot;{testimonials[activeTestimonial].quote}&quot;</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {testimonials[activeTestimonial].author}, <span className="font-normal text-gray-600 dark:text-gray-400">{testimonials[activeTestimonial].position}</span>
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-3 right-4 flex space-x-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeTestimonial === index ? 'bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="btn btn-primary flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Browse My Projects <FiArrowRight className="text-lg" />
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline px-6 py-3 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/edogola4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-ogola-b77063232/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/BrandonOgola"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-6">
              {iconData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={iconVariants}
                    onMouseEnter={() => setSelectedTech(item)}
                    onMouseLeave={() => setSelectedTech(null)}
                    className="relative"
                  >
                    <Icon
                      className={`w-8 h-8 transition-all duration-300 cursor-pointer ${selectedTech?.title === item.title ? 'scale-125' : 'hover:scale-110'} ${item.color}`}
                      title={item.title}
                      aria-label={item.title}
                    />

                    {/* Skill proficiency tooltip */}
                    <AnimatePresence>
                      {selectedTech?.title === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1 } }}
                          className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 z-10 w-32 pointer-events-none"
                        >
                          <p className="text-center text-sm font-medium">{item.title}</p>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-1">
                            <div
                              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                              style={proficiencyStyle(item.proficiency)}
                            ></div>
                          </div>
                          <p className="text-xs text-center mt-1">{item.proficiency}%</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Worked with logos */}
          {/* Worked with logos */}
          <div className="pt-4">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Trusted By</p>
            <div className="flex flex-wrap items-center gap-6">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={40}
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: profileImageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Custom tilt effect without react-tilt dependency */}
          <motion.div
            ref={tiltRef}
            style={{
              transformPerspective: '1000px',
              rotateX: prefersReducedMotion ? 0 : tilt.x,
              rotateY: prefersReducedMotion ? 0 : tilt.y,
              scale: prefersReducedMotion ? 1 : (tilt.x !== 0 || tilt.y !== 0) ? 1.05 : 1,
              //transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg mx-auto aspect-square"
          >
            {/* Enhanced background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-3xl animate-pulse"></div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -right-6 -top-6 w-20 h-20 bg-yellow-400/20 dark:bg-yellow-400/10 rounded-full blur-md z-0"
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute -left-4 bottom-8 w-16 h-16 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-md z-0"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />

            {/* Profile image with subtle gradient overlay */}
            <div className="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
              <Image
                src="/images/profile.png"
                alt="Edwin Ogola"
                width={900}
                height={900}
                className="w-full h-auto object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iOTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator with animated dot trail */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            role="button"
            aria-label="Scroll down"
            tabIndex={0}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">Scroll Down</span>

            {/* Animated dots trail */}
            <div className="relative h-8 w-6 flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary-500 absolute"
                animate={{
                  y: [0, 14, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0
                }}
              />
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary-500/70 absolute"
                animate={{
                  y: [0, 14, 0],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              />
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-primary-500/40 absolute"
                animate={{
                  y: [0, 14, 0],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: 0.4
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;