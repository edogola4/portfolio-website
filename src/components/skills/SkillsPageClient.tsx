'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { skillDomains, type Skill, type SkillDomain } from '@/data/skills';
import { testimonials } from '@/data/shared-testimonials';

// ─── Constants ────────────────────────────────────────────────────────────────

const LEVEL_META = {
  Expert:     { color: '#2C5E4F', bg: 'bg-[#2C5E4F]/10 dark:bg-[#2C5E4F]/25', text: 'text-[#2C5E4F] dark:text-[#6B9FB1]' },
  Proficient: { color: '#3A5A6B', bg: 'bg-[#3A5A6B]/10 dark:bg-[#3A5A6B]/25', text: 'text-[#3A5A6B] dark:text-[#9BB8C3]' },
  Familiar:   { color: '#D4A373', bg: 'bg-[#D4A373]/15 dark:bg-[#D4A373]/20',  text: 'text-[#a07040] dark:text-[#D4A373]' },
} as const;

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

// SVG-only icons that don't exist in the devicon font
const SVG_ONLY: Record<string, string> = {
  'devicon-python-plain colored': `${CDN}/python/python-original.svg`,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): string {
  const c = hex.replace('#', '');
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return '255,255,255';
  return `${r},${g},${b}`;
}

function Monogram({ name, color }: { name: string; color: string }) {
  const letter = name.trim()[0]?.toUpperCase() ?? '?';
  const [r, g, b] = hexToRgb(color).split(',').map(Number);
  const textColor = (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.65 ? '#1a1a1a' : '#ffffff';
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill={color} />
      <text x="11" y="11" dominantBaseline="central" textAnchor="middle"
        fontSize="10" fontWeight="700" fill={textColor} fontFamily="system-ui,sans-serif">
        {letter}
      </text>
    </svg>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  if (!skill.deviconClass) return <Monogram name={skill.name} color={skill.color} />;
  const svgUrl = SVG_ONLY[skill.deviconClass];
  if (svgUrl) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={svgUrl} alt={skill.name} width={22} height={22} style={{ width: 22, height: 22, objectFit: 'contain' }} aria-hidden="true" />;
  }
  return <i className={skill.deviconClass} style={{ fontSize: 22, lineHeight: 1 }} aria-hidden="true" />;
}

// ─── Skill card ───────────────────────────────────────────────────────────────

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const meta = LEVEL_META[skill.level];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="bg-white dark:bg-[#1E2A35] rounded-xl border border-[#e8e2d6] dark:border-[#3A5A6B]/35 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: `${skill.color}18` }}>
            <SkillIcon skill={skill} />
          </div>
          <span className="font-semibold text-sm text-[#2B2D42] dark:text-[#F8F5F0]">{skill.name}</span>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${meta.bg} ${meta.text}`}>
          {skill.level}
        </span>
      </div>

      {/* Proficiency bar */}
      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#2B2D42]/50 dark:text-[#F8F5F0]/45">Proficiency</span>
          <span className="text-xs font-semibold text-[#2B2D42]/70 dark:text-[#F8F5F0]/65">{skill.proficiency}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-[#e8e2d6] dark:bg-[#3A5A6B]/25 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 0.7, delay: index * 0.04 + 0.2, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Domain tab ───────────────────────────────────────────────────────────────

function DomainTab({ domain, active, onClick }: { domain: SkillDomain; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
        active
          ? 'text-white shadow-sm'
          : 'bg-white dark:bg-[#1E2A35] text-[#2B2D42]/75 dark:text-[#F8F5F0]/70 border border-[#e8e2d6] dark:border-[#3A5A6B]/35 hover:border-[#2C5E4F]/40 dark:hover:border-[#6B9FB1]/40'
      }`}
      style={active ? { background: `linear-gradient(135deg, ${domain.accentColor}, ${domain.accentColor}cc)` } : {}}
    >
      {domain.label}
    </button>
  );
}

// ─── Stats bar ────────────────────────────────────────────────────────────────

const stats = [
  { value: '40+', label: 'Technologies' },
  { value: '5',   label: 'Domains' },
  { value: '2+',  label: 'Years Production' },
  { value: '10+', label: 'Projects Shipped' },
];

// ─── Main component ───────────────────────────────────────────────────────────

export default function SkillsPageClient() {
  const locale = useLocale();
  const [activeDomain, setActiveDomain] = useState(skillDomains[0].id);
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const currentDomain = skillDomains.find(d => d.id === activeDomain) ?? skillDomains[0];

  return (
    <div className="min-h-screen bg-[#F8F5F0] dark:bg-[#141E26]">

      {/* ── Hero header ── */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="bg-white dark:bg-[#1E2A35] border-b border-[#e8e2d6] dark:border-[#3A5A6B]/35"
      >
        <div className="container-custom py-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4">
            Skills &amp; Expertise
          </h1>
          <div className="h-1 w-16 bg-[#E07A5F] mx-auto mb-6 rounded-full" />
          <p className="text-lg text-[#2B2D42]/70 dark:text-[#F8F5F0]/70 max-w-2xl mx-auto leading-relaxed">
            2+ years of hands-on production experience across fintech, healthcare, and SaaS —
            from .NET enterprise backends to AI-powered integrations and cloud-native deployments.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-2xl mx-auto">
            {stats.map(s => (
              <div key={s.label} className="bg-[#F8F5F0] dark:bg-[#141E26] rounded-xl p-4 border border-[#e8e2d6] dark:border-[#3A5A6B]/35">
                <p className="text-2xl font-bold text-[#2C5E4F] dark:text-[#6B9FB1]">{s.value}</p>
                <p className="text-xs text-[#2B2D42]/60 dark:text-[#F8F5F0]/55 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Skills section ── */}
      <div className="container-custom py-14">

        {/* Domain tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillDomains.map(domain => (
            <DomainTab
              key={domain.id}
              domain={domain}
              active={activeDomain === domain.id}
              onClick={() => setActiveDomain(domain.id)}
            />
          ))}
        </div>

        {/* Domain description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDomain.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="mb-6">
              <p className="text-sm text-[#2B2D42]/65 dark:text-[#F8F5F0]/60">
                {currentDomain.description}
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mb-8">
              {(Object.entries(LEVEL_META) as [keyof typeof LEVEL_META, typeof LEVEL_META[keyof typeof LEVEL_META]][]).map(([level, meta]) => (
                <span key={level} className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${meta.bg} ${meta.text}`}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.color }} />
                  {level}
                </span>
              ))}
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentDomain.skills.map((skill, i) => (
                <SkillCard key={skill.id} skill={skill} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Testimonials ── */}
      <div className="bg-white dark:bg-[#1E2A35] border-t border-[#e8e2d6] dark:border-[#3A5A6B]/35">
        <motion.div
          ref={testimonialsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="container-custom py-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4">
              What Colleagues Say
            </h2>
            <div className="h-1 w-16 bg-[#E07A5F] mx-auto mb-5 rounded-full" />
            <p className="text-[#2B2D42]/70 dark:text-[#F8F5F0]/65 max-w-xl mx-auto">
              Feedback from people I&apos;ve worked with directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="bg-[#F8F5F0] dark:bg-[#141E26] rounded-xl p-6 border border-[#e8e2d6] dark:border-[#3A5A6B]/35 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array(5).fill(0).map((_, j) => (
                    <FaStar key={j} className="w-3.5 h-3.5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-5">
                  <FaQuoteLeft className="absolute -top-1 -left-0.5 text-[#e8e2d6] dark:text-[#3A5A6B]/40 text-2xl" />
                  <p className="pl-6 text-sm text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#e8e2d6] dark:border-[#3A5A6B]/25">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: 'linear-gradient(135deg, #2C5E4F, #3A5A6B)' }}
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2B2D42] dark:text-[#F8F5F0]">{t.author}</p>
                    <p className="text-xs text-[#2B2D42]/60 dark:text-[#F8F5F0]/55">
                      {t.position}, <span className="text-[#2C5E4F] dark:text-[#6B9FB1]">{t.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── CTA ── */}
      <div className="container-custom py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-3">
            Want to see these skills in action?
          </h2>
          <p className="text-[#2B2D42]/70 dark:text-[#F8F5F0]/65 mb-8 max-w-xl mx-auto">
            Browse the projects where these technologies were used in production, or get in touch to discuss your next build.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #2C5E4F, #3D7A6B)' }}
            >
              View Projects <FiExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold border-2 border-[#e8e2d6] dark:border-[#3A5A6B]/40 text-[#2B2D42] dark:text-[#F8F5F0] hover:border-[#2C5E4F] dark:hover:border-[#6B9FB1] transition-all duration-200 hover:-translate-y-0.5"
            >
              Get in Touch <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
