// src/components/home/Hero.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  Variants,
} from 'framer-motion';
import { Engine, Container } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import { FiArrowRight } from 'react-icons/fi';
import { FaReact, FaGithub, FaLinkedin, FaStar } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoRocketOutline, IoStatsChart } from 'react-icons/io5';
import { MdHealthAndSafety } from 'react-icons/md';
import Script from 'next/script';
import { useLocale, useTranslations } from 'next-intl';
import {
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiAmazon,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiMysql,
  SiDotnet,
  SiBlazor,
  SiTerraform,
  SiGithubactions,
  SiRedis,
} from 'react-icons/si';
import { useEffect, useRef, useState, useCallback } from 'react';
import Typed from 'typed.js';

import { testimonials } from '@/data/shared-testimonials';

// ─── Types ─────────────────────────────────────────────────────────────────

// ─── Data ───────────────────────────────────────────────────────────────────

const techStack: TechItem[] = [
  // Core
  { icon: SiDotnet,        title: 'C# / .NET',     proficiency: 90, color: 'text-purple-600 dark:text-purple-400', category: 'core' },
  { icon: SiTypescript,    title: 'TypeScript',    proficiency: 88, color: 'text-blue-500 dark:text-blue-300',    category: 'core' },
  { icon: FaReact,         title: 'React',         proficiency: 85, color: 'text-cyan-500 dark:text-cyan-300',    category: 'core' },
  { icon: SiBlazor,        title: 'Blazor',        proficiency: 85, color: 'text-indigo-500 dark:text-indigo-300',category: 'core' },
  { icon: SiPython,        title: 'Python',        proficiency: 80, color: 'text-yellow-500 dark:text-yellow-300',category: 'core' },
  // Backend / DB
  { icon: SiNodedotjs,     title: 'Node.js',       proficiency: 82, color: 'text-green-600 dark:text-green-400',  category: 'backend' },
  { icon: SiPostgresql,    title: 'PostgreSQL',    proficiency: 85, color: 'text-blue-700 dark:text-blue-400',   category: 'backend' },
  { icon: SiMysql,         title: 'SQL Server',    proficiency: 88, color: 'text-red-600 dark:text-red-400',     category: 'backend' },
  { icon: SiMongodb,       title: 'MongoDB',       proficiency: 78, color: 'text-green-500 dark:text-green-300', category: 'backend' },
  { icon: SiRedis,         title: 'Redis',         proficiency: 75, color: 'text-red-500 dark:text-red-300',     category: 'backend' },
  // Cloud / DevOps
  { icon: SiAmazon,        title: 'Azure',         proficiency: 85, color: 'text-blue-500 dark:text-blue-300',   category: 'cloud' },
  { icon: SiDocker,        title: 'Docker',        proficiency: 80, color: 'text-sky-400 dark:text-sky-200',     category: 'cloud' },
  { icon: SiKubernetes,    title: 'Kubernetes',    proficiency: 72, color: 'text-blue-500 dark:text-blue-300',   category: 'cloud' },
  { icon: SiTerraform,     title: 'Terraform',     proficiency: 75, color: 'text-violet-500 dark:text-violet-300',category: 'tools' },
  { icon: SiGithubactions, title: 'GitHub Actions',proficiency: 80, color: 'text-gray-700 dark:text-gray-300',   category: 'tools' },
  { icon: SiGit,           title: 'Git',           proficiency: 92, color: 'text-orange-500 dark:text-orange-300',category: 'tools' },
];

const clientLogos = [
  { name: 'Safaricom',    logo: '/images/Clients/client1.png' },
  { name: 'Equity Bank',  logo: '/images/Clients/client2.png' },
  { name: 'Twiga Foods',  logo: '/images/Clients/client3.png' },
  { name: 'M-KOPA',       logo: '/images/Clients/client4.png' },
];

const highlights = [
  {
    icon: IoRocketOutline,
    value: '3+',
    label: 'Years Enterprise Experience',
    color: 'from-[#3A5A6B] to-[#6B7F82]',
  },
  {
    icon: FaStar,
    value: '15+',
    label: 'Projects Built & Deployed',
    color: 'from-[#E07A5F] to-[#D4673D]',
  },
  {
    icon: IoStatsChart,
    value: '.NET',
    label: '& Azure Specialist',
    color: 'from-[#6B9FB1] to-[#3A5A6B]',
  },
];

// ─── Animation Variants ─────────────────────────────────────────────────────

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, type: 'spring', stiffness: 280, damping: 20 },
  }),
};

// ─── Custom Hook: 3D Tilt ───────────────────────────────────────────────────

const useCustomTilt = (
  options: TiltOptions = {}
): [React.RefObject<HTMLDivElement | null>, TiltState] => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const { max = 15, speed = 500, reset = true } = options;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const onMove = (e: MouseEvent) => {
      if (timeout) clearTimeout(timeout);
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setTilt({
        x: (y / rect.height) * max * 2 - max,
        y: -((x / rect.width) * max * 2 - max),
      });
    };

    const onLeave = () => {
      if (reset) timeout = setTimeout(() => setTilt({ x: 0, y: 0 }), speed);
    };

    const onEnter = () => { if (timeout) clearTimeout(timeout); };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseenter', onEnter);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseenter', onEnter);
      if (timeout) clearTimeout(timeout);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, tilt];
};

// ─── Component ───────────────────────────────────────────────────────────────

const Hero = () => {
  const typedRef    = useRef<Typed | null>(null);
  const typedEl     = useRef<HTMLSpanElement | null>(null);
  const particlesInitialized = useRef(false);
  const particlesContainerRef = useRef<Container | null | undefined>(undefined);

  const [selectedTech,       setSelectedTech]       = useState<TechItem | null>(null);
  const [activeTestimonial,  setActiveTestimonial]  = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { scrollY } = useScroll();
  const locale = useLocale();
  const t = useTranslations('home');

  const profileImageY  = useTransform(scrollY, [0, 500], [0, -50]);
  const titleY         = useTransform(scrollY, [0, 500], [0, -30]);
  const subtitleOpacity = useTransform(scrollY, [0, 200, 300], [1, 0.8, 0]);

  // ── Typed.js ────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!typedEl.current) return;
    typedRef.current = new Typed(typedEl.current, {
      strings: [
        'Scale enterprise systems',
        'Architect cloud solutions',
        '.NET & Azure specialist'
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
    return () => { typedRef.current?.destroy(); };
  }, []);

  // ── Prefers-reduced-motion ───────────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // ── tsParticles ─────────────────────────────────────────────────────────
  const initParticles = useCallback(async () => {
    if (
      particlesInitialized.current ||
      prefersReducedMotion ||
      typeof window === 'undefined' ||
      !window.tsParticles
    ) return;

    const container = document.getElementById('hero-particles');
    if (!container) return;

    try {
      await loadFull(window.tsParticles);
      particlesContainerRef.current = await window.tsParticles.load({
        id: 'hero-particles',
        options: {
          fpsLimit: 60,
          fullScreen: { enable: false, zIndex: 0 },
          particles: {
            number: { value: 28, density: { enable: true, width: 1500, height: 1500 } },
            color: { value: '#3A5A6B' },
            shape: { type: 'triangle' },
            opacity: { value: { min: 0.08, max: 0.25 } },
            size: { value: { min: 2, max: 5 } },
            move: {
              enable: true,
              speed: 1.2,
              direction: 'none',
              random: true,
              outModes: { default: 'bounce' },
            },
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: { enable: true, mode: 'bubble' },
              resize: { enable: true },
            },
            modes: { bubble: { distance: 200, size: 7, duration: 2, opacity: 0.7 } },
          },
          detectRetina: true,
          pauseOnBlur: true,
        },
      });
      particlesInitialized.current = true;
    } catch (err) {
      console.error('Particles init failed:', err);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.tsParticles && !particlesInitialized.current) {
        initParticles();
      }
    }, 100);
    
    return () => {
      clearTimeout(timer);
      if (particlesContainerRef.current && particlesInitialized.current) {
        try { 
          particlesContainerRef.current.destroy(); 
          particlesInitialized.current = false; 
        } catch { /* ignore */ }
      }
    };
  }, [initParticles]);

  // ── Testimonial auto-rotate ──────────────────────────────────────────────
  useEffect(() => {
    const id = setInterval(
      () => setActiveTestimonial(p => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(id);
  }, []);

  const [tiltRef, tilt] = useCustomTilt({ max: 15, speed: 500, reset: true });

  const proficiencyStyle = (pct: number) => ({ width: `${pct}%` });

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── JSON-LD ────────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Brandon Ogola',
            url: 'https://portfolio-website-five-sigma-91.vercel.app',
            jobTitle: 'Software Engineer',
            knowsAbout: ['.NET', 'Azure', 'TypeScript', 'C#', 'Cloud Architecture', 'SaaS'],
            image: 'https://portfolio-website-five-sigma-91.vercel.app/images/profile.png',
            sameAs: [
              'https://github.com/edogola4',
              'https://www.linkedin.com/in/brandon-ogola-b77063232/',
              'https://x.com/BrandonOgola',
            ],
          }),
        }}
      />

      {/* ── tsParticles CDN ────────────────────────────────────────────────── */}
      <Script
        id="tsparticles-script"
        src="https://cdn.jsdelivr.net/npm/tsparticles@2.9.3/tsparticles.bundle.min.js"
        onLoad={initParticles}
        strategy="lazyOnload"
      />

      <section
        className="relative min-h-screen pt-8 pb-16 md:pt-10 md:pb-20 bg-gradient-to-br from-[#F8F5F0] to-[#EFEAE2] dark:from-[#1E2A35] dark:to-[#141E26] overflow-hidden"
        id="hero"
      >
        {/* ── Ambient blobs ─────────────────────────────────────────────────── */}
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#3A5A6B]/10 to-[#6B7F82]/10 blur-3xl" />
          <div className="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-[#E07A5F]/8 to-[#3A5A6B]/8 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-gradient-to-br from-[#6B7F82]/8 to-[#3A5A6B]/8 blur-3xl" />
        </div>

        {/* ── Particles canvas ──────────────────────────────────────────────── */}
        <div
          id="hero-particles"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ width: '100%', height: '100%' }}
        />

        {/* ── Main grid ─────────────────────────────────────────────────────── */}
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center relative z-10">

          {/* ════════════════════════ LEFT COLUMN ════════════════════════════ */}
          <motion.div
            style={{ y: titleY }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-7"
          >

            {/* ── Status badges ──────────────────────────────────────────────── */}
            <motion.div variants={fadeInUp}>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#3A5A6B] text-[#F8F5F0] dark:bg-[#6B7F82] dark:text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span className="w-2 h-2 bg-[#E07A5F] rounded-full animate-pulse" />
                {t('availableForProjects')}
              </Link>
            </motion.div>

            {/* ── Name + Typed headline ──────────────────────────────────────── */}
            <motion.div variants={fadeInUp}>

              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-tight tracking-tight">
                <span className="text-[#2B2D42] dark:text-white">Brandon Ogola</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A5A6B] to-[#6B7F82] dark:from-[#6B9FB1] dark:to-[#9BB8C3]">
                  <span ref={typedEl} />
                </span>
              </h1>
            </motion.div>

            {/* ── Description ───────────────────────────────────────────────── */}
            <motion.p
              variants={fadeInUp}
              style={{ opacity: subtitleOpacity }}
              className="text-base md:text-lg text-[#2B2D42]/85 dark:text-[#F8F5F0]/85 leading-relaxed max-w-xl"
            >
              Full-stack engineer with 3+ years building production-grade systems in{' '}
              <strong className="text-[#3A5A6B] dark:text-[#6B9FB1] font-semibold">.NET, TypeScript &amp; Azure</strong>.
              Currently architecting SmartSchedule Healthcare — an AI-powered scheduling SaaS
              targeting a{' '}
              <strong className="text-[#E07A5F] font-semibold">$150B market</strong>.
            </motion.p>

            {/* ── Featured project callout ───────────────────────────────────── */}
            <motion.div
              variants={fadeInUp}
              className="flex items-start gap-4 p-4 rounded-xl border-2 border-[#3A5A6B]/25 dark:border-[#6B9FB1]/30 bg-gradient-to-r from-[#3A5A6B]/8 to-transparent dark:from-[#3A5A6B]/15 dark:to-transparent backdrop-blur-sm"
            >
              <span className="text-2xl mt-0.5 shrink-0">🏥</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#2B2D42] dark:text-white mb-0.5">
                  SmartSchedule Healthcare — Active Development
                </p>
                <p className="text-xs text-[#2B2D42]/70 dark:text-[#F8F5F0]/70 mb-2 leading-relaxed">
                  Enterprise AI scheduling SaaS · .NET 10 + Azure · MVP Q2 2026
                </p>
                <Link
                  href={`/${locale}/projects`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#3A5A6B] dark:text-[#6B9FB1] hover:gap-2 transition-all duration-200"
                >
                  View Project <FiArrowRight className="text-xs" />
                </Link>
              </div>
            </motion.div>

            {/* ── Stats ─────────────────────────────────────────────────────── */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-3"
            >
              {highlights.map(h => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    variants={fadeInUp}
                    className="bg-white/60 dark:bg-[#1E2A35]/60 backdrop-blur-sm rounded-xl p-4 border border-[#e8e2d6] dark:border-[#3A5A6B]/35 hover:border-[#3A5A6B]/50 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 mb-3 rounded-lg flex items-center justify-center bg-gradient-to-br ${h.color} text-white shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-bold text-[#2B2D42] dark:text-white leading-none mb-1">{h.value}</p>
                    <p className="text-xs text-[#2B2D42]/65 dark:text-[#F8F5F0]/65 font-medium leading-snug">{h.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ── Testimonial carousel ───────────────────────────────────────── */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-white/60 dark:bg-[#1E2A35]/60 backdrop-blur-sm rounded-xl p-5 border border-[#e8e2d6] dark:border-[#3A5A6B]/35 overflow-hidden"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-3.5 h-3.5" />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                >
                  <p className="text-sm text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 italic leading-relaxed mb-3">
                    &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3A5A6B] to-[#6B7F82] flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {testimonials[activeTestimonial].author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#2B2D42] dark:text-white leading-none">
                        {testimonials[activeTestimonial].author}
                      </p>
                      <p className="text-xs text-[#2B2D42]/60 dark:text-[#F8F5F0]/60 mt-0.5">
                        {testimonials[activeTestimonial].position},{' '}
                        <span className="text-[#3A5A6B] dark:text-[#6B9FB1] font-medium">
                          {testimonials[activeTestimonial].company}
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === i
                        ? 'bg-[#3A5A6B] dark:bg-[#6B9FB1] w-4'
                        : 'bg-[#e8e2d6] dark:bg-[#3A5A6B]/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* ── CTAs ──────────────────────────────────────────────────────── */}
            

            {/* ── Tech stack ────────────────────────────────────────────────── */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 border-t border-[#e8e2d6] dark:border-[#3A5A6B]/20"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2B2D42]/55 dark:text-[#F8F5F0]/55 mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-5">
                {techStack.map((item, i) => {
                  const Icon = item.icon;
                  const isActive = selectedTech?.title === item.title;
                  return (
                    <motion.div
                      key={item.title}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={iconVariants}
                      onMouseEnter={() => setSelectedTech(item)}
                      onMouseLeave={() => setSelectedTech(null)}
                      className="relative"
                    >
                      <Icon
                        className={`w-8 h-8 cursor-pointer transition-all duration-200 ${item.color} ${
                          isActive
                            ? 'scale-125 drop-shadow-lg opacity-100'
                            : 'opacity-60 hover:opacity-90 hover:scale-110'
                        }`}
                        title={item.title}
                        aria-label={item.title}
                      />

                      {/* Tooltip */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.1 } }}
                            className="absolute -top-[4.5rem] left-1/2 -translate-x-1/2 z-20 w-36 pointer-events-none bg-white dark:bg-[#1E2A35] rounded-xl shadow-xl border border-[#e8e2d6] dark:border-[#3A5A6B]/40 p-3"
                          >
                            <p className="text-center text-xs font-semibold text-[#2B2D42] dark:text-[#F8F5F0] mb-1.5">
                              {item.title}
                            </p>
                            <div className="w-full h-1.5 rounded-full bg-[#e8e2d6] dark:bg-[#3A5A6B]/30">
                              <div
                                className="h-1.5 rounded-full bg-gradient-to-r from-[#3A5A6B] to-[#6B7F82] transition-all duration-300"
                                style={proficiencyStyle(item.proficiency)}
                              />
                            </div>
                            <p className="text-center text-xs mt-1 text-[#2B2D42]/70 dark:text-[#F8F5F0]/70">
                              {item.proficiency}%
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* ── Client logos ──────────────────────────────────────────────── */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 border-t border-[#e8e2d6] dark:border-[#3A5A6B]/20"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2B2D42]/55 dark:text-[#F8F5F0]/55 mb-4">
                Top Clients include:
              </p>
              <div className="flex flex-wrap items-center gap-7">
                {clientLogos.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.55 }}
                    whileHover={{ opacity: 1, scale: 1.07 }}
                    transition={{ delay: i * 0.12, duration: 0.2 }}
                    className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
                    title={c.name}
                  >
                    <Image
                      src={c.logo}
                      alt={`${c.name} logo`}
                      width={110}
                      height={40}
                      className="h-full w-auto object-contain"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ═══════════════════════ RIGHT COLUMN ════════════════════════════ */}
          <motion.div
            style={{ y: profileImageY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="relative flex flex-col items-center justify-start lg:pt-0"
          >
            {/* ── Decorative glow ─────────────────────────────────────────── */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3A5A6B]/20 to-[#6B7F82]/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

            <motion.div
              className="absolute -right-5 -top-5 w-16 h-16 bg-[#E07A5F]/15 dark:bg-[#E07A5F]/10 rounded-full blur-md"
              animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
              className="absolute -left-3 bottom-10 w-14 h-14 bg-[#6B7F82]/15 dark:bg-[#6B7F82]/10 rounded-full blur-md"
              animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
            />

            {/* ── 3D-tilt image ─────────────────────────────────────────────── */}
            <motion.div
              ref={tiltRef}
              style={{
                transformPerspective: '1000px',
                rotateX: prefersReducedMotion ? 0 : tilt.x,
                rotateY: prefersReducedMotion ? 0 : tilt.y,
                scale: prefersReducedMotion ? 1 : tilt.x !== 0 || tilt.y !== 0 ? 1.04 : 1,
              }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-md mx-auto"
            >
              {/* Pulsing availability ring */}
              <div className="absolute inset-[-6px] rounded-full border-2 border-[#3A5A6B]/40 dark:border-[#6B9FB1]/40 animate-pulse z-10 pointer-events-none" />
              <div className="absolute inset-[-12px] rounded-full border border-[#3A5A6B]/15 dark:border-[#6B9FB1]/15 z-10 pointer-events-none" />

              <div className="relative rounded-full overflow-hidden border-8 border-white dark:border-[#1E2A35] shadow-2xl aspect-square bg-[#F8F5F0] dark:bg-[#1E2A35]">
                <Image
                  src="/images/profile.png"
                  alt="Brandon Ogola — Software Engineer"
                  width={900}
                  height={900}
                  className="w-full h-auto object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iOTAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
                />
              </div>
            </motion.div>

            {/* ── Floating badge: SmartSchedule ─────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.45 }}
              className="absolute -right-4 top-1/4 bg-white dark:bg-[#1E2A35] rounded-xl shadow-lg border border-[#e8e2d6] dark:border-[#3A5A6B]/40 px-3.5 py-2.5 max-w-[10rem] hidden lg:block"
            >
              <div className="flex items-center gap-2 mb-1">
                <MdHealthAndSafety className="text-[#E07A5F] w-4 h-4 shrink-0" />
                <p className="text-[0.65rem] font-bold text-[#2B2D42] dark:text-white leading-tight">
                  SmartSchedule
                </p>
              </div>
              <p className="text-[0.6rem] text-[#2B2D42]/60 dark:text-[#F8F5F0]/60 leading-snug">
                AI SaaS · .NET 10 + Azure
              </p>
              <span className="inline-block mt-1.5 px-1.5 py-0.5 text-[0.55rem] font-semibold rounded-full bg-[#E07A5F]/15 text-[#E07A5F]">
                MVP Q2 2026
              </span>
            </motion.div>

            {/* ── Floating badge: GitHub contributions ──────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95, duration: 0.45 }}
              className="absolute -left-4 bottom-1/4 bg-white dark:bg-[#1E2A35] rounded-xl shadow-lg border border-[#e8e2d6] dark:border-[#3A5A6B]/40 px-3.5 py-2.5 hidden lg:block"
            >
              <div className="flex items-center gap-2">
                <FaGithub className="text-[#2B2D42] dark:text-white w-4 h-4 shrink-0" />
                <div>
                  <p className="text-[0.65rem] font-bold text-[#2B2D42] dark:text-white leading-none">
                    2,535
                  </p>
                  <p className="text-[0.58rem] text-[#2B2D42]/55 dark:text-[#F8F5F0]/55 leading-snug">
                    contributions last year
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ──────────────────────────────────────────────── */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            aria-label="Scroll to next section"
            onKeyDown={e => e.key === 'Enter' && window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs text-[#2B2D42]/60 dark:text-[#F8F5F0]/60 mb-2 group-hover:text-[#3A5A6B] dark:group-hover:text-[#6B9FB1] transition-colors">
              Scroll Down
            </span>
            <motion.div
              className="w-5 h-8 rounded-full border-2 border-[#3A5A6B]/40 dark:border-[#6B7F82]/40 flex justify-center pt-1.5"
              animate={{ borderColor: ['rgba(58,90,107,0.4)', 'rgba(58,90,107,0.8)', 'rgba(58,90,107,0.4)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-1 rounded-full bg-[#3A5A6B] dark:bg-[#6B9FB1]"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default Hero;