// src/components/home/Hero.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { Engine, Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { FiArrowRight } from 'react-icons/fi';
import { FaReact, FaGithub, FaLinkedin, FaStar } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsArrowUpRight } from 'react-icons/bs';
import { IoRocketOutline, IoStatsChart } from 'react-icons/io5';
import Script from 'next/script';
import Head from 'next/head';
import { useLocale, useTranslations } from 'next-intl';
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
    tsParticles: Engine;
    BMC?: { init: () => void }; // Add BMC for manual initialization
  }
}

// Enhanced icon data with proficiency levels
const iconData = [
  { icon: FaReact, title: 'React', proficiency: 90, color: 'text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200' },
  { icon: SiTypescript, title: 'TypeScript', proficiency: 85, color: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300' },
  { icon: SiJavascript, title: 'JavaScript', proficiency: 90, color: 'text-yellow-500 dark:text-yellow-300 hover:text-yellow-600 dark:hover:text-yellow-200' },
  { icon: SiPython, title: 'Python', proficiency: 88, color: 'text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300' },
  { icon: SiNodedotjs, title: 'Node.js', proficiency: 85, color: 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300' },
  { icon: SiExpress, title: 'Express', proficiency: 83, color: 'text-gray-700 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200' },
  { icon: SiMongodb, title: 'MongoDB', proficiency: 85, color: 'text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300' },
  { icon: SiPostgresql, title: 'PostgreSQL', proficiency: 80, color: 'text-blue-800 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-200' },
  { icon: SiMysql, title: 'MySQL', proficiency: 78, color: 'text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200' },
  { icon: SiDocker, title: 'Docker', proficiency: 75, color: 'text-blue-500 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-200' },
  { icon: SiAmazon, title: 'AWS', proficiency: 70, color: 'text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300' },
  { icon: SiGit, title: 'Git', proficiency: 88, color: 'text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300' },
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

// Actual client logos
const clientLogos = [
  { name: 'Safaricom', logo: '/images/Clients/client1.png' },
  { name: 'Equity Bank', logo: '/images/Clients/client2.png' },
  { name: 'Twiga Foods', logo: '/images/Clients/client3.png' },
  { name: 'M-KOPA', logo: '/images/Clients/client4.png' },
];

// Highlights/Stats to showcase senior-level achievements
const highlights = [
  { icon: IoRocketOutline, value: '3+', label: 'Years Enterprise Experience', color: 'from-[#3A5A6B] to-[#6B7F82]' },
  { icon: FaStar, value: '15+', label: 'Large-scale Projects', color: 'from-[#E07A5F] to-[#D4673D]' },
  { icon: IoStatsChart, value: 'Cloud-Native', label: 'System Architect', color: 'from-[#6B9FB1] to-[#3A5A6B]' },
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

// Custom tilt effect hook
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

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

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
  const particlesContainerRef = useRef<Container | null | undefined>(undefined);
  const locale = useLocale();
  const t = useTranslations('home');
  
  // SEO Metadata - Moved to page metadata in layout files

  const testimonials = [
    {
      quote: "Edwin's AI chatbot solution improved our customer response time by 40% and achieved 95% accuracy in intent recognition.",
      author: "John Mwangi",
      position: "CTO, REAL BIZ Digital"
    },
    {
      quote: "His ability to translate business requirements into technical solutions is exceptional. A valuable asset to any team.",
      author: "Dr. Jane Atieno",
      position: "Senior Researcher, Alliance Bioversity CIAT"
    },
    {
      quote: "Edwin's full-stack development skills and attention to detail resulted in a 25% increase in user engagement on our platform.",
      author: "Michael Ochieng",
      position: "Product Manager, REAL BIZ Digital"
    }
  ];

  const [tiltRef, tilt] = useCustomTilt({
    max: 15,
    speed: 500,
    reset: true,
  });

  const profileImageY = useTransform(scrollY, [0, 500], [0, -50]);
  const titleY = useTransform(scrollY, [0, 500], [0, -30]);
  const subtitleOpacity = useTransform(scrollY, [0, 200, 300], [1, 0.8, 0]);

  useEffect(() => {
    if (typedElementRef.current) {
      typedRef.current = new Typed(typedElementRef.current, {
        strings: [
          'Scaling enterprise systems',
          'Building cloud architectures',
          'Designing distributed systems',
          '.NET & Azure specialist',
          'Production-grade backend engineer',
          'Infrastructure as Code expert'
        ],
        typeSpeed: 50,
        backSpeed: 35,
        backDelay: 2000,
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

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const initializeParticles = async () => {
      await loadFull(window.tsParticles);
      if (particlesInitialized.current || prefersReducedMotion || typeof window === 'undefined' || !window.tsParticles) {
        return;
      }

      const heroParticlesContainer = document.getElementById("hero-particles");
      if (!heroParticlesContainer) return;

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
                  width: 1500,
                  height: 1500
                }
              },
              color: { value: "#3A5A6B" },
              shape: {
                type: "triangle",
                options: {
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
                  default: "bounce"
                },
                attract: { enable: false }
              }
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: { enable: true, mode: "bubble" },
                onClick: { enable: false },
                resize: { enable: true }
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

    if (window.tsParticles && !particlesInitialized.current) {
      initializeParticles();
    }

    return () => {
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
                    width: 1500,
                    height: 1500
                  }
                },
                color: { value: "#3A5A6B" },
                shape: {
                  type: "triangle",
                  options: {
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
                  random: true,
                  outModes: {
                    default: "bounce"
                  },
                  direction: "none",
                  attract: { enable: false }
                }
              },
              interactivity: {
                detectsOn: "window",
                events: {
                  onHover: { enable: true, mode: "bubble" },
                  onClick: { enable: false },
                  resize: { enable: true }
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

      initializeParticles();
    }
  };

  // Initialize BMC button manually if needed
  useEffect(() => {
    if (typeof window !== 'undefined' && window.BMC) {
      try {
        window.BMC.init();
      } catch (error) {
        console.error("Failed to initialize BMC button:", error);
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Edwin Ogola",
    "url": "https://edwinogola.com",
    "jobTitle": "Full Stack Developer & AI Enthusiast",
    "knowsAbout": ["Web Development", "AI/ML", "Cloud Architecture", "East African Tech", "Software Engineer"],
    "image": "https://edwinogola.com/images/profile.png",
    "sameAs": [
      "https://github.com/edogola4",
      "https://www.linkedin.com/in/brandon-ogola-b77063232/",
      "https://x.com/BrandonOgola"
    ]
  };

  const proficiencyStyle = (percentage: number) => ({
    width: `${percentage}%`,
  });

  return (
    <>
      <Head>
        <title>Edwin Ogola - Full Stack Developer & AI Enthusiast</title>
        <meta name="description" content="I'm Edwin Ogola, a full stack developer and AI enthusiast with a passion for building innovative web applications." />
        <meta name="keywords" content="full stack developer, AI enthusiast, web development, AI/ML, cloud architecture" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Edwin Ogola" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://edwinogola.com" />
        <meta property="og:title" content="Edwin Ogola - Full Stack Developer & AI Enthusiast" />
        <meta property="og:description" content="I'm Edwin Ogola, a full stack developer and AI enthusiast with a passion for building innovative web applications." />
        <meta property="og:image" content="https://edwinogola.com/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://edwinogola.com" />
        <meta property="twitter:title" content="Edwin Ogola - Full Stack Developer & AI Enthusiast" />
        <meta property="twitter:description" content="I'm Edwin Ogola, a full stack developer and AI enthusiast with a passion for building innovative web applications." />
        <meta property="twitter:image" content="https://edwinogola.com/images/og-image.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://edwinogola.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Edwin Ogola",
            "url": "https://edwinogola.com",
            "sameAs": [
              "https://github.com/edwinogola",
              "https://linkedin.com/in/edwin-ogola",
              "https://twitter.com/edwinogola"
            ],
            "jobTitle": "Full Stack Developer & AI Enthusiast",
            "worksFor": {
              "@type": "Organization",
              "name": "Freelance"
            },
            "description": "I'm Edwin Ogola, a full stack developer and AI enthusiast with a passion for building innovative web applications."
          })}
        </script>
      </Head>
      
      <section
        className="relative min-h-screen pt-20 pb-16 md:py-28 bg-gradient-to-br from-[#F8F5F0] to-[#EFEAE2] dark:from-[#1E2A35] dark:to-[#141E26] overflow-hidden"
        id="hero"
      >
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

      {/* Background geometric patterns */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#3A5A6B]/10 to-[#6B7F82]/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-[#E07A5F]/10 to-[#3A5A6B]/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-[#6B7F82]/10 to-[#3A5A6B]/10 blur-3xl"></div>
      </div>

      {/* tsParticles Script */}
      <Script
        id="tsparticles-script"
        src="https://cdn.jsdelivr.net/npm/tsparticles@2.9.3/tsparticles.bundle.min.js"
        onLoad={handleTsParticlesLoad}
        strategy="lazyOnload"
      />

      {/* Buy me a coffee Script */}
      <Script
        id="bmc-script"
        src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
        strategy="afterInteractive"
        data-name="bmc-button"
        data-slug="BRAN.DON"
        data-color="#E07A5F"
        data-emoji=""
        data-font="Inter"
        data-text="Buy me a coffee"
        data-outline-color="#3A5A6B"
        data-font-color="#2B2D42"
        data-coffee-color="#2B2D42"
      />

      {/* Particles container */}
      <div
        id="hero-particles"
        className="absolute inset-0 z-0"
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
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
          {/* Availability badge */}
          <Link href={`/${locale}/contact`} className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-[#3A5A6B] text-[#F8F5F0] dark:bg-[#6B7F82] dark:text-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
            <span className="w-2 h-2 bg-[#E07A5F] rounded-full mr-2 animate-pulse"></span>
            {t('availableForProjects')}
            <BsArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#F8F5F0] dark:text-white" />
          </Link>

          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <span className="text-[#2B2D42] dark:text-white">Senior Software Engineer</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A5A6B] to-[#6B7F82] dark:from-[#6B9FB1] dark:to-[#9BB8C3] font-bold">
                <span ref={typedElementRef} className="typed-text"></span>
              </span>
            </motion.h1>

            <motion.p
              style={{ opacity: subtitleOpacity }}
              className="text-xl md:text-2xl text-[#2B2D42]/90 dark:text-[#F8F5F0]/90 mb-6 leading-relaxed"
            >
              Architecting scalable systems and building enterprise cloud solutions. Expertise in .NET, Azure, distributed systems, and production-grade backend engineering.
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
                  className="bg-white/60 dark:bg-[#1E2A35]/60 backdrop-blur-sm rounded-lg p-4 border border-[#e8e2d6] dark:border-[#3A5A6B]/40 hover:bg-white/80 dark:hover:bg-[#1E2A35]/80 hover:border-[#3A5A6B]/60 transition-all duration-300"
                >
                  <div className={`w-12 h-12 mb-3 rounded-lg flex items-center justify-center bg-gradient-to-br ${highlight.color} text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2D42] dark:text-white mb-1">{highlight.value}</h3>
                  <p className="text-sm text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 font-medium">{highlight.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Testimonial carousel */}
          <motion.div
            className="relative bg-white/60 dark:bg-[#1E2A35]/60 backdrop-blur-sm rounded-lg p-5 border border-[#e8e2d6] dark:border-[#3A5A6B]/40 mb-8 overflow-hidden"
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
                {/*<p className="text-gray-700 dark:text-gray-300 italic mb-2">"{testimonials[activeTestimonial].quote}"</p>*/}
                <p className="text-gray-700 dark:text-gray-300 italic mb-2">
                  &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {testimonials[activeTestimonial].author}, <span className="font-normal text-gray-600 dark:text-gray-400">{testimonials[activeTestimonial].position}</span>
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-3 right-4 flex space-x-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeTestimonial === index ? 'bg-[#3A5A6B]' : 'bg-gray-300 dark:bg-gray-600'}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link
              href={`/${locale}/projects`}
              className="btn btn-primary flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-[#3A5A6B] to-[#6B7F82] text-[#F8F5F0] rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-semibold"
            >
              View Projects <FiArrowRight className="text-lg" />
            </Link>
            
            <a
              href="/files/Brandon_Resume.pdf"
              download="Brandon_Ogola_Resume.pdf"
              className="btn btn-secondary flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#3A5A6B] text-[#3A5A6B] dark:border-[#6B7F82] dark:text-[#6B7F82] rounded-lg hover:bg-[#3A5A6B]/5 dark:hover:bg-[#6B7F82]/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
            >
              Download Resume
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <Link
              href={`/${locale}/contact`}
              className="btn btn-outline flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#E07A5F] text-[#E07A5F] dark:border-[#F4A261] dark:text-[#F4A261] rounded-lg hover:bg-[#E07A5F]/5 dark:hover:bg-[#F4A261]/10 transition-all duration-300 transform hover:-translate-y-1 font-semibold"
            >
              Contact Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>

          {/* Social & CTA Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 pt-2"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-[#2B2D42]/70 dark:text-[#F8F5F0]/70">Connect:</span>
              <a
                href="https://github.com/edogola4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-[#3A5A6B]/10 dark:hover:bg-[#6B7F82]/10 hover:text-[#3A5A6B] dark:hover:text-[#6B9FB1] transition-all duration-300"
                title="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/brandon-ogola-b77063232/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-500/10 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                title="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/EdwinOgola"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Profile"
                className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-all duration-300"
                title="X (Twitter)"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-[#e8e2d6] dark:border-[#3A5A6B]/20"
          >
            <p className="text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0] mb-4 uppercase tracking-wide">Tech Stack</p>
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
                      className={`w-9 h-9 transition-all duration-300 cursor-pointer filter ${selectedTech?.title === item.title ? 'scale-125 drop-shadow-lg' : 'hover:scale-110 opacity-75 hover:opacity-100'} ${item.color}`}
                      title={item.title}
                      aria-label={item.title}
                    />
                    <AnimatePresence>
                      {selectedTech?.title === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1 } }}
                          className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#1E2A35] rounded-lg shadow-xl p-3 z-10 w-40 pointer-events-none border border-[#e8e2d6] dark:border-[#3A5A6B]/40"
                        >
                          <p className="text-center text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0]">{item.title}</p>
                          <div className="w-full bg-[#e8e2d6] dark:bg-[#3A5A6B]/30 h-2 rounded-full mt-2">
                            <div
                              className="bg-gradient-to-r from-[#3A5A6B] to-[#6B7F82] h-2 rounded-full transition-all duration-300"
                              style={proficiencyStyle(item.proficiency)}
                            ></div>
                          </div>
                          <p className="text-xs text-center mt-1 text-[#2B2D42]/80 dark:text-[#F8F5F0]/80">{item.proficiency}%</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Worked with logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-8 border-t border-[#e8e2d6] dark:border-[#3A5A6B]/20"
          >
            <p className="text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0] mb-4 uppercase tracking-wide">Trusted By Enterprise Companies</p>
            <div className="flex flex-wrap items-center gap-8">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1, scale: 1.08 }}
                  transition={{ delay: index * 0.15 }}
                  className="h-11 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  title={client.name}
                >
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={120}
                    height={44}
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: profileImageY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex flex-col items-center"
        >
          <motion.div
            ref={tiltRef}
            style={{
              transformPerspective: '1000px',
              rotateX: prefersReducedMotion ? 0 : tilt.x,
              rotateY: prefersReducedMotion ? 0 : tilt.y,
              scale: prefersReducedMotion ? 1 : (tilt.x !== 0 || tilt.y !== 0) ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-lg mx-auto aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3A5A6B]/30 to-[#6B7F82]/30 rounded-full blur-3xl animate-pulse"></div>
            <motion.div
              className="absolute -right-6 -top-6 w-20 h-20 bg-[#E07A5F]/20 dark:bg-[#E07A5F]/10 rounded-full blur-md z-0"
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute -left-4 bottom-8 w-16 h-16 bg-[#6B7F82]/20 dark:bg-[#6B7F82]/10 rounded-full blur-md z-0"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <div className="relative bg-white dark:bg-[#1E2A35] rounded-full overflow-hidden border-8 border-white dark:border-[#1E2A35] shadow-xl">
              <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
                <iframe 
                  src="https://my.spline.design/particles-3b8a1d4c1f5b5e5e5e5e5e5e5e5e5e5e/" 
                  frameBorder="0" 
                  width="100%" 
                  height="100%"
                  style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
                  title="Particle animation background"
                  aria-hidden="true"
                  loading="lazy"
                />
              </div>
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

          {/* Buy me a coffee button */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 bmc-button"
            style={{
              minHeight: '40px',
              '--bmc-button-color': '#E07A5F',
              '--bmc-button-text-color': '#2B2D42',
              '--bmc-button-outline-color': '#3A5A6B',
              '--bmc-button-hover-color': '#d86a4f',
              '--bmc-button-font': 'Inter, sans-serif',
            }}
            data-name="bmc-button"
            data-slug="BRAN.DON"
            data-color="#E07A5F"
            data-emoji=""
            data-font="Inter"
            data-text="Buy me a coffee"
            data-outline-color="#3A5A6B"
            data-font-color="#2B2D42"
            data-coffee-color="#2B2D42"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">Loading Buy me a coffee...</span>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
            <span className="text-sm text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 mb-2 group-hover:text-[#3A5A6B] dark:group-hover:text-[#6B7F82] transition-colors">Scroll Down</span>
            <div className="relative h-8 w-6 flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-[#3A5A6B] dark:bg-[#6B7F82] absolute"
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
                className="w-1.5 h-1.5 rounded-full bg-[#3A5A6B]/70 dark:bg-[#6B7F82]/70 absolute"
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
                className="w-1.5 h-1.5 rounded-full bg-[#3A5A6B]/40 dark:bg-[#6B7F82]/40 absolute"
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
    </>
  );
};

export default Hero;
