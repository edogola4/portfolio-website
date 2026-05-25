'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TechPillItem {
  name: string;
  /** devicon font class (e.g. 'devicon-csharp-plain') — must exist in font variant */
  icon: string | null;
  /** CDN SVG URL — used when the icon exists only as SVG, not in the font */
  svgUrl?: string;
  color: string;
}

interface ClientLogoItem {
  name: string;
  logo: string;
  width: number;
  height: number;
}

// ─── CDN base ─────────────────────────────────────────────────────────────────

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

// ─── Row 1 data — Technologies ────────────────────────────────────────────────
// Rule: if the icon exists in the devicon FONT → use icon class + colored
//       if SVG-only (no font variant) → use svgUrl

const techItems: TechPillItem[] = [
  { name: 'C# / .NET',      icon: 'devicon-csharp-plain colored',             color: '#239120' },
  { name: 'TypeScript',     icon: 'devicon-typescript-plain colored',         color: '#3178C6' },
  { name: 'React',          icon: 'devicon-react-original colored',           color: '#61DAFB' },
  // Blazor — font has 'original' ✅
  { name: 'Blazor',         icon: 'devicon-blazor-original colored',          color: '#512BD4' },
  // Python — font only has 'plain' (flat/monochrome). Use SVG original for real logo.
  { name: 'Python',         icon: null, svgUrl: `${DI}/python/python-original.svg`, color: '#3776AB' },
  { name: 'Node.js',        icon: 'devicon-nodejs-plain colored',             color: '#339933' },
  { name: 'PostgreSQL',     icon: 'devicon-postgresql-plain colored',         color: '#336791' },
  { name: 'SQL Server',     icon: 'devicon-microsoftsqlserver-plain colored', color: '#CC2927' },
  { name: 'MongoDB',        icon: 'devicon-mongodb-plain colored',            color: '#47A248' },
  { name: 'Redis',          icon: 'devicon-redis-plain colored',              color: '#DC382D' },
  { name: 'Azure',          icon: 'devicon-azure-plain colored',              color: '#0078D4' },
  { name: 'Docker',         icon: 'devicon-docker-plain colored',             color: '#2496ED' },
  { name: 'Kubernetes',     icon: 'devicon-kubernetes-plain colored',         color: '#326CE5' },
  { name: 'Terraform',      icon: 'devicon-terraform-plain colored',          color: '#7B42BC' },
  { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored',      color: '#2088FF' },
  { name: 'Git',            icon: 'devicon-git-plain colored',                color: '#F05032' },
];

// ─── Row 2 data — Clients ─────────────────────────────────────────────────────

const clientItems: ClientLogoItem[] = [
  { name: 'Safaricom',   logo: '/images/Clients/client1.png', width: 120, height: 40 },
  { name: 'Equity Bank', logo: '/images/Clients/client2.png', width: 120, height: 40 },
  { name: 'Twiga Foods', logo: '/images/Clients/client3.png', width: 120, height: 40 },
  { name: 'M-KOPA',      logo: '/images/Clients/client4.png', width: 120, height: 40 },
];

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
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="9" cy="9" r="9" fill={color} />
      <text x="9" y="9" dominantBaseline="central" textAnchor="middle"
        fontSize="8" fontWeight="700" fill={textColor} fontFamily="system-ui,sans-serif">
        {letter}
      </text>
    </svg>
  );
}

/** Renders the correct icon: font <i>, CDN <img>, or SVG monogram fallback */
function TechIcon({ item }: { item: TechPillItem }) {
  if (item.svgUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.svgUrl}
        alt={item.name}
        width={18}
        height={18}
        style={{ width: 18, height: 18, flexShrink: 0, objectFit: 'contain' }}
        aria-hidden="true"
      />
    );
  }
  if (item.icon) {
    return (
      <i
        className={item.icon}
        style={{ fontSize: 18, width: 18, height: 18, lineHeight: 1, flexShrink: 0 }}
        aria-hidden="true"
      />
    );
  }
  return <Monogram name={item.name} color={item.color} />;
}

// ─── Pill ─────────────────────────────────────────────────────────────────────

function TechPill({ item }: { item: TechPillItem }) {
  return (
    <li
      className="tm-pill"
      style={{ '--pill-color': item.color, '--pill-rgb': hexToRgb(item.color) } as React.CSSProperties}
      title={item.name}
    >
      <TechIcon item={item} />
      <span className="tm-pill-label">{item.name}</span>
    </li>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TrustMarquee() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <>
      <style>{`
        @keyframes tmLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes tmRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .tm-track {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .tm-inner {
          display: flex;
          width: max-content;
          align-items: center;
        }
        .tm-left  { animation: tmLeft  36s linear infinite; }
        .tm-right { animation: tmRight 28s linear infinite; }
        .tm-track:hover .tm-left,
        .tm-track:hover .tm-right {
          animation-play-state: paused;
        }
        .tm-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.85rem;
          margin-right: 0.75rem;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.03);
          white-space: nowrap;
          cursor: default;
          transition: border-color 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
          flex-shrink: 0;
        }
        .tm-pill:hover {
          border-color: var(--pill-color);
          box-shadow: 0 0 14px rgba(var(--pill-rgb), 0.28);
          background: rgba(var(--pill-rgb), 0.07);
        }
        .tm-pill-label {
          font-size: 0.76rem;
          font-weight: 500;
          line-height: 1;
          color: rgba(255,255,255,0.72);
        }
        .tm-logo-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: 2.5rem;
          flex-shrink: 0;
          opacity: 0.55;
          filter: grayscale(1);
          transition: opacity 0.2s ease, filter 0.2s ease;
          cursor: default;
        }
        .tm-logo-wrap:hover { opacity: 1; filter: grayscale(0); }
        :not(.dark) .tm-pill {
          border-color: rgba(0,0,0,0.08);
          background: rgba(0,0,0,0.02);
        }
        :not(.dark) .tm-pill:hover { background: rgba(var(--pill-rgb), 0.07); }
        :not(.dark) .tm-pill-label { color: rgba(43,45,66,0.82); }
        :not(.dark) .tm-logo-wrap { filter: grayscale(1) brightness(0.7); }
        :not(.dark) .tm-logo-wrap:hover { filter: grayscale(0) brightness(1); }
      `}</style>

      <motion.section
        ref={ref}
        role="region"
        aria-label="Technologies and clients"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full py-10 border-t border-b border-[#e8e2d6]/60 dark:border-white/[0.06] bg-[#F8F5F0]/50 dark:bg-[#1E2A35]/40 overflow-hidden"
      >
        <div className="flex flex-col gap-y-5">

          {/* ── Row 1: Technologies → left ── */}
          <div>
            <p className="text-center text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#2B2D42]/40 dark:text-[#F8F5F0]/35 mb-3 select-none">
              Technologies
            </p>
            <div className="tm-track">
              <div className="tm-inner">
                <ul className="tm-inner tm-left" aria-label="Technologies" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {techItems.map(item => <TechPill key={`${item.name}-a`} item={item} />)}
                </ul>
                <ul className="tm-inner tm-left" aria-hidden="true" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {techItems.map(item => <TechPill key={`${item.name}-b`} item={item} />)}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Row 2: Trusted By → right ── */}
          <div>
            <p className="text-center text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#2B2D42]/40 dark:text-[#F8F5F0]/35 mb-3 select-none">
              Trusted By
            </p>
            <div className="tm-track">
              <div className="tm-inner">
                <div className="tm-inner tm-right" aria-label="Clients" role="list">
                  {clientItems.map(c => (
                    <div key={`${c.name}-a`} className="tm-logo-wrap" role="listitem" title={c.name}>
                      <Image src={c.logo} alt={`${c.name} logo`} width={c.width} height={c.height} className="h-8 w-auto object-contain" />
                    </div>
                  ))}
                </div>
                <div className="tm-inner tm-right" aria-hidden="true">
                  {clientItems.map(c => (
                    <div key={`${c.name}-b`} className="tm-logo-wrap" title={c.name}>
                      <Image src={c.logo} alt="" width={c.width} height={c.height} className="h-8 w-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.section>
    </>
  );
}
