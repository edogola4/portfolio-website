'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TechItem {
  name: string;
  icon: string | null;
  color: string;
}

interface MarqueeRowProps {
  items: TechItem[];
  direction: 'left' | 'right';
  duration: number;
  label: string;
  ariaLabel: string;
  mobileDuration?: number;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const row1: TechItem[] = [
  { name: 'C#',               icon: 'devicon-csharp-plain',           color: '#239120' },
  { name: '.NET 10',          icon: 'devicon-dotnetcore-plain',       color: '#512BD4' },
  { name: 'ASP.NET Core',     icon: 'devicon-dotnetcore-plain',       color: '#512BD4' },
  { name: 'TypeScript',       icon: 'devicon-typescript-plain',       color: '#3178C6' },
  { name: 'JavaScript ES6+',  icon: 'devicon-javascript-plain',       color: '#F7DF1E' },
  { name: 'Python',           icon: 'devicon-python-plain',           color: '#3776AB' },
  { name: 'SQL',              icon: 'devicon-azuresqldatabase-plain',  color: '#CC2927' },
  { name: 'C',                icon: 'devicon-c-plain',                color: '#A8B9CC' },
  { name: 'Node.js',          icon: 'devicon-nodejs-plain',           color: '#339933' },
  { name: 'Fastify',          icon: 'devicon-fastify-plain',          color: '#202020' },
  { name: 'Express.js',       icon: 'devicon-express-original',       color: '#404040' },
  { name: 'Flask',            icon: 'devicon-flask-original',         color: '#FFFFFF' },
  { name: 'Entity Framework', icon: null,                             color: '#512BD4' },
  { name: 'Prisma ORM',       icon: 'devicon-prisma-plain',           color: '#2D3748' },
  { name: 'SignalR',          icon: null,                             color: '#512BD4' },
  { name: 'RESTful APIs',     icon: null,                             color: '#FF6B35' },
];

const row2: TechItem[] = [
  { name: 'Next.js 14',       icon: 'devicon-nextjs-plain',           color: '#FFFFFF' },
  { name: 'React.js',         icon: 'devicon-react-original',         color: '#61DAFB' },
  { name: 'Angular',          icon: 'devicon-angularjs-plain',        color: '#DD0031' },
  { name: 'Blazor',           icon: 'devicon-dotnetcore-plain',       color: '#512BD4' },
  { name: 'Tailwind CSS',     icon: 'devicon-tailwindcss-plain',      color: '#06B6D4' },
  { name: 'Zustand',          icon: null,                             color: '#443E38' },
  { name: 'Redux Toolkit',    icon: 'devicon-redux-original',         color: '#764ABC' },
  { name: 'Framer Motion',    icon: null,                             color: '#FF0055' },
  { name: 'PostgreSQL',       icon: 'devicon-postgresql-plain',       color: '#336791' },
  { name: 'pgvector',         icon: null,                             color: '#336791' },
  { name: 'SQL Server',       icon: 'devicon-microsoftsqlserver-plain', color: '#CC2927' },
  { name: 'MySQL',            icon: 'devicon-mysql-plain',            color: '#4479A1' },
  { name: 'MongoDB',          icon: 'devicon-mongodb-plain',          color: '#47A248' },
  { name: 'Redis',            icon: 'devicon-redis-plain',            color: '#DC382D' },
];

const row3: TechItem[] = [
  { name: 'Azure',              icon: 'devicon-azure-plain',              color: '#0078D4' },
  { name: 'AWS',                icon: 'devicon-amazonwebservices-plain',   color: '#FF9900' },
  { name: 'Docker',             icon: 'devicon-docker-plain',             color: '#2496ED' },
  { name: 'Kubernetes',         icon: 'devicon-kubernetes-plain',         color: '#326CE5' },
  { name: 'Terraform',          icon: 'devicon-terraform-plain',          color: '#7B42BC' },
  { name: 'GitHub Actions',     icon: 'devicon-githubactions-plain',      color: '#2088FF' },
  { name: 'Azure DevOps',       icon: 'devicon-azuredevops-plain',        color: '#0078D4' },
  { name: 'Railway',            icon: null,                               color: '#8B5CF6' },
  { name: 'Vercel',             icon: 'devicon-vercel-plain',             color: '#FFFFFF' },
  { name: 'Claude AI',          icon: null,                               color: '#D4A853' },
  { name: 'OpenAI Embeddings',  icon: null,                               color: '#10A37F' },
  { name: 'M-Pesa Daraja',      icon: null,                               color: '#00A651' },
  { name: 'Pesapal',            icon: null,                               color: '#E31837' },
  { name: 'Shopify API',        icon: 'devicon-shopify-plain',            color: '#96BF48' },
  { name: 'WhatsApp API',       icon: null,                               color: '#25D366' },
  { name: "Africa's Talking",   icon: null,                               color: '#FF6600' },
  { name: 'SendGrid',           icon: null,                               color: '#1A82E2' },
  { name: 'Turborepo',          icon: null,                               color: '#EF4444' },
  { name: 'SonarQube',          icon: 'devicon-sonarqube-plain',          color: '#4E9BCD' },
  { name: 'xUnit',              icon: null,                               color: '#239120' },
  { name: 'Jest',               icon: 'devicon-jest-plain',               color: '#C21325' },
  { name: 'TensorFlow',         icon: 'devicon-tensorflow-original',      color: '#FF6F00' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Convert hex #RRGGBB to "R, G, B" for CSS rgba() */
function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return '255, 255, 255';
  return `${r}, ${g}, ${b}`;
}

// ─── SVG Monogram (for icon: null items) ─────────────────────────────────────

function Monogram({ name, color }: { name: string; color: string }) {
  const letter = name.trim()[0]?.toUpperCase() ?? '?';
  // Determine text color: use white unless background is very light
  const rgb = hexToRgb(color);
  const [r, g, b] = rgb.split(', ').map(Number);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor = luminance > 0.65 ? '#1a1a1a' : '#ffffff';

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <circle cx="10" cy="10" r="10" fill={color} />
      <text
        x="10"
        y="10"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="9"
        fontWeight="700"
        fill={textColor}
        fontFamily="system-ui, sans-serif"
      >
        {letter}
      </text>
    </svg>
  );
}

// ─── Tech Pill ────────────────────────────────────────────────────────────────

function TechPill({ item }: { item: TechItem }) {
  const rgb = hexToRgb(item.color);

  return (
    <li
      className="marquee-pill"
      style={
        {
          '--pill-color': item.color,
          '--pill-rgb': rgb,
        } as React.CSSProperties
      }
      title={item.name}
    >
      {item.icon ? (
        <i className={`${item.icon} colored`} style={{ fontSize: '20px', width: '20px', height: '20px', lineHeight: 1 }} aria-hidden="true" />
      ) : (
        <Monogram name={item.name} color={item.color} />
      )}
      <span className="marquee-pill-label">{item.name}</span>
    </li>
  );
}

// ─── Marquee Row ──────────────────────────────────────────────────────────────

function MarqueeRow({ items, direction, duration, label, ariaLabel, mobileDuration = 22 }: MarqueeRowProps) {
  const animClass = direction === 'left' ? 'marquee-scroll-left' : 'marquee-scroll-right';

  return (
    <div className="marquee-row-wrapper">
      {/* Vertical label — hidden on mobile */}
      <span className="marquee-row-label" aria-hidden="true">
        {label}
      </span>

      {/* Scroll track with fade mask */}
      <div
        className="marquee-track"
        style={
          {
            '--duration': `${duration}s`,
            '--mobile-duration': `${mobileDuration}s`,
          } as React.CSSProperties
        }
      >
        <div className="marquee-inner">
          {/* Primary list — screen-reader visible */}
          <ul
            className={`marquee-list ${animClass}`}
            aria-label={ariaLabel}
          >
            {items.map((item) => (
              <TechPill key={`${item.name}-a`} item={item} />
            ))}
          </ul>
          {/* Duplicate for seamless loop — hidden from AT */}
          <ul
            className={`marquee-list ${animClass}`}
            aria-hidden="true"
          >
            {items.map((item) => (
              <TechPill key={`${item.name}-b`} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface TrustMarqueeProps {
  /** When true, renders without the outer section wrapper and entrance animation.
   *  Use this when embedding inside another animated container (e.g. Hero). */
  inline?: boolean;
}

export default function TrustMarquee({ inline = false }: TrustMarqueeProps) {
  const t = useTranslations('marquee');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const content = (
    <>
      <style>{`
        @keyframes marqueeScrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-row-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          min-height: 44px;
        }
        .marquee-row-label {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 0.55rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          white-space: nowrap;
          flex-shrink: 0;
          width: 1rem;
          user-select: none;
        }
        .marquee-track {
          flex: 1;
          overflow: hidden;
          min-height: 44px;
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
        .marquee-inner {
          display: flex;
          width: max-content;
        }
        .marquee-track:hover .marquee-list {
          animation-play-state: paused;
        }
        .marquee-list {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-shrink: 0;
        }
        .marquee-scroll-left {
          animation: marqueeScrollLeft var(--duration, 38s) linear infinite;
        }
        .marquee-scroll-right {
          animation: marqueeScrollRight var(--duration, 30s) linear infinite;
        }
        @media (max-width: 767px) {
          .marquee-scroll-left,
          .marquee-scroll-right {
            animation-duration: var(--mobile-duration, 22s);
          }
          .marquee-row-label { display: none; }
        }
        .marquee-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 9999px;
          padding: 0.375rem 0.75rem;
          margin-right: 1rem;
          cursor: default;
          transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .marquee-pill:hover {
          border-color: var(--pill-color);
          box-shadow: 0 0 16px color-mix(in srgb, var(--pill-color) 30%, transparent);
          background: rgba(var(--pill-rgb), 0.06);
        }
        .marquee-pill-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          line-height: 1;
        }
        .dark .marquee-pill-label { color: rgba(255,255,255,0.80); }
        :not(.dark) .marquee-pill {
          background: rgba(0,0,0,0.02);
          border-color: rgba(0,0,0,0.08);
        }
        :not(.dark) .marquee-pill:hover { background: rgba(var(--pill-rgb), 0.07); }
        :not(.dark) .marquee-pill-label { color: rgba(43,45,66,0.85); }
        :not(.dark) .marquee-row-label  { color: rgba(43,45,66,0.35); }
      `}</style>

      <p
        className="text-left mb-3 uppercase tracking-[0.24em] text-[0.58rem] font-semibold text-[#2B2D42]/50 dark:text-[#F8F5F0]/40 select-none"
        aria-hidden="true"
      >
        <span className="md:hidden">{t('headingShort')}</span>
        <span className="hidden md:inline">{t('heading')}</span>
      </p>

      <div className="flex flex-col gap-y-3">
        <MarqueeRow
          items={row1}
          direction="left"
          duration={38}
          mobileDuration={22}
          label={t('row1Label')}
          ariaLabel={t('row1Label')}
        />
        <div className="hidden md:block">
          <MarqueeRow
            items={row2}
            direction="right"
            duration={30}
            label={t('row2Label')}
            ariaLabel={t('row2Label')}
          />
        </div>
        <div className="hidden md:block">
          <MarqueeRow
            items={row3}
            direction="left"
            duration={44}
            label={t('row3Label')}
            ariaLabel={t('row3Label')}
          />
        </div>
      </div>
    </>
  );

  if (inline) {
    return (
      <div
        role="region"
        aria-label="Brandon Ogola tech stack"
        className="overflow-hidden"
      >
        {content}
      </div>
    );
  }

  return (
    <motion.section
      ref={ref}
      role="region"
      aria-label="Brandon Ogola tech stack"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="w-full overflow-hidden py-8 border-t border-b"
      style={{ borderColor: 'rgba(255,255,255,0.07)' }}
    >
      {content}
    </motion.section>
  );
}
