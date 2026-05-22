'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface TechItem {
  name: string;
  icon: string | null;
  color: string;
}

interface MarqueeRowProps {
  items: TechItem[];
  direction: 'left' | 'right';
  duration: number; // seconds
  label: string;
}

const hexToRgb = (hex: string) => {
  const h = hex.replace('#', '').trim();
  const bigint = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, direction, duration, label }) => {
  const durationStr = `${duration}s`;
  const isLeft = direction === 'left';

  return (
    <div className="marquee-row" style={{ minHeight: 56 }}>
      <div className="marquee-label" aria-hidden={false}>
        <span>{label}</span>
      </div>

      <div className="marquee-track">
        <div
          className="marquee-inner"
          style={{
            animationName: isLeft ? 'scrollLeft' : 'scrollRight',
            animationDuration: durationStr,
          }}
        >
          {/* first list - accessible */}
          <ul className="marquee-list" aria-label={label} role="list">
            {items.map((item) => {
              const pillRgb = hexToRgb(item.color);
              return (
                <li key={`${label}-${item.name}`} className="marquee-item">
                  <div
                    className="tech-pill"
                    style={(() => {
                      const cssVars = { ['--pill-color']: item.color, ['--pill-rgb']: pillRgb } as React.CSSProperties;
                      return cssVars;
                    })()}
                  >
                    {item.icon ? (
                      // devicon <i> tag
                      <i className={`devicon ${item.icon} colored`} aria-hidden="true" style={{ width: 20, height: 20 }} />
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="monogram">
                        <circle cx="10" cy="10" r="10" fill={item.color} />
                        <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fontSize="9" fontWeight={700} fill="#fff">
                          {item.name.charAt(0)}
                        </text>
                      </svg>
                    )}
                    <span className="tech-label">{item.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* second list - aria-hidden duplicate */}
          <ul className="marquee-list" aria-hidden="true" tabIndex={-1}>
            {items.map((item) => {
              const pillRgb = hexToRgb(item.color);
              return (
                <li key={`${label}-dup-${item.name}`} className="marquee-item">
                  <div
                    className="tech-pill"
                    style={(() => {
                      const cssVars = { ['--pill-color']: item.color, ['--pill-rgb']: pillRgb } as React.CSSProperties;
                      return cssVars;
                    })()}
                  >
                    {item.icon ? (
                      <i className={`devicon ${item.icon} colored`} aria-hidden="true" style={{ width: 20, height: 20 }} />
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="monogram">
                        <circle cx="10" cy="10" r="10" fill={item.color} />
                        <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fontSize="9" fontWeight={700} fill="#fff">
                          {item.name.charAt(0)}
                        </text>
                      </svg>
                    )}
                    <span className="tech-label">{item.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .marquee-row { display: flex; align-items: center; gap: 12px; }
        .marquee-label { width: 6.5rem; flex-shrink: 0; display: flex; align-items: center; }
        .marquee-label span { transform: rotate(-90deg); transform-origin: left top; display: inline-block; text-transform: uppercase; letter-spacing: 0.18em; font-size: 0.55rem; color: var(--muted, rgba(255,255,255,0.6)); }

        .marquee-track { position: relative; width: 100%; overflow: hidden; -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%); mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%); }
        .marquee-inner { display: flex; width: 200%; }
        .marquee-list { display: flex; gap: 1rem; align-items: center; padding: 0 0.5rem; margin: 0; list-style: none; }
        .marquee-item { display: flex; align-items: center; }

        .tech-pill { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.375rem 0.75rem; border-radius: 9999px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); margin-right: 1rem; transition: all 0.15s ease; }
        .tech-pill .monogram { flex-shrink: 0; }
        .tech-pill i.devicon { width: 20px; height: 20px; font-size: 20px; flex-shrink: 0; }
        .tech-label { font-size: 0.78rem; font-weight: 500; color: inherit; }

        .tech-pill:hover { border-color: var(--pill-color); box-shadow: 0 0 16px rgba(var(--pill-rgb), 0.18); background: rgba(var(--pill-rgb), 0.06); }

        @keyframes scrollLeft {
          from { transform: translateX(0%); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0%); }
        }

        /* Pause on hover of the track */
        .marquee-track:hover .marquee-inner { animation-play-state: paused; }

        /* Responsive behaviour */
        @media (max-width: 767px) {
          .marquee-label { display: none; }
        }
      `}</style>

      <style jsx global>{`
        /* Set animation properties per inner element via inline style (animation-name/duration) */
        .marquee-inner { animation-timing-function: linear; animation-iteration-count: infinite; }

        /* Mobile: only show first row */
        @media (max-width: 767px) {
          .trust-marquee-row { display: none; }
          .trust-marquee-row.mobile-only { display: flex; }
        }
      `}</style>
    </div>
  );
};

export default function TrustMarquee() {
  const row1: TechItem[] = [
    { name: 'C#', icon: 'devicon-csharp-plain', color: '#239120' },
    { name: '.NET 10', icon: 'devicon-dotnetcore-plain', color: '#512BD4' },
    { name: 'ASP.NET Core', icon: 'devicon-dotnetcore-plain', color: '#512BD4' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'JavaScript ES6+', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
    { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
    { name: 'SQL', icon: 'devicon-azuresqldatabase-plain', color: '#CC2927' },
    { name: 'C', icon: 'devicon-c-plain', color: '#A8B9CC' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' },
    { name: 'Fastify', icon: 'devicon-fastify-plain', color: '#202020' },
    { name: 'Express.js', icon: 'devicon-express-original', color: '#404040' },
    { name: 'Flask', icon: 'devicon-flask-original', color: '#FFFFFF' },
    { name: 'Entity Framework', icon: null, color: '#512BD4' },
    { name: 'Prisma ORM', icon: 'devicon-prisma-plain', color: '#2D3748' },
    { name: 'SignalR', icon: null, color: '#512BD4' },
    { name: 'RESTful APIs', icon: null, color: '#FF6B35' },
  ];

  const row2: TechItem[] = [
    { name: 'Next.js 14', icon: 'devicon-nextjs-plain', color: '#FFFFFF' },
    { name: 'React.js', icon: 'devicon-react-original', color: '#61DAFB' },
    { name: 'Angular', icon: 'devicon-angularjs-plain', color: '#DD0031' },
    { name: 'Blazor', icon: 'devicon-dotnetcore-plain', color: '#512BD4' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain', color: '#06B6D4' },
    { name: 'Zustand', icon: null, color: '#443E38' },
    { name: 'Redux Toolkit', icon: 'devicon-redux-original', color: '#764ABC' },
    { name: 'Framer Motion', icon: null, color: '#FF0055' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain', color: '#336791' },
    { name: 'pgvector', icon: null, color: '#336791' },
    { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain', color: '#CC2927' },
    { name: 'MySQL', icon: 'devicon-mysql-plain', color: '#4479A1' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', color: '#47A248' },
    { name: 'Redis', icon: 'devicon-redis-plain', color: '#DC382D' },
  ];

  const row3: TechItem[] = [
    { name: 'Azure', icon: 'devicon-azure-plain', color: '#0078D4' },
    { name: 'AWS', icon: 'devicon-amazonwebservices-plain', color: '#FF9900' },
    { name: 'Docker', icon: 'devicon-docker-plain', color: '#2496ED' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', color: '#326CE5' },
    { name: 'Terraform', icon: 'devicon-terraform-plain', color: '#7B42BC' },
    { name: 'GitHub Actions', icon: 'devicon-githubactions-plain', color: '#2088FF' },
    { name: 'Azure DevOps', icon: 'devicon-azuredevops-plain', color: '#0078D4' },
    { name: 'Railway', icon: null, color: '#8B5CF6' },
    { name: 'Vercel', icon: 'devicon-vercel-plain', color: '#FFFFFF' },
    { name: 'Claude AI', icon: null, color: '#D4A853' },
    { name: 'OpenAI Embeddings', icon: null, color: '#10A37F' },
    { name: 'M-Pesa Daraja', icon: null, color: '#00A651' },
    { name: 'Pesapal', icon: null, color: '#E31837' },
    { name: 'Shopify API', icon: 'devicon-shopify-plain', color: '#96BF48' },
    { name: 'WhatsApp API', icon: null, color: '#25D366' },
    { name: "Africa's Talking", icon: null, color: '#FF6600' },
    { name: 'SendGrid', icon: null, color: '#1A82E2' },
    { name: 'Turborepo', icon: null, color: '#EF4444' },
    { name: 'SonarQube', icon: 'devicon-sonarqube-plain', color: '#4E9BCD' },
    { name: 'xUnit', icon: null, color: '#239120' },
    { name: 'Jest', icon: 'devicon-jest-plain', color: '#C21325' },
    { name: 'TensorFlow', icon: 'devicon-tensorflow-original', color: '#FF6F00' },
  ];

  return (
    <motion.section
      className="trust-marquee-section"
      role="region"
      aria-label="Brandon Ogola tech stack"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom py-8 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <h3 className="marquee-heading">FULL-STACK ARSENAL — 40+ TECHNOLOGIES</h3>

        <div className="flex flex-col gap-y-3">
          {/* Row 1 */}
          <div className="trust-marquee-row mobile-only" style={{ display: 'flex', alignItems: 'center' }}>
            <MarqueeRow items={row1} direction="left" duration={38} label="LANGUAGES & BACKEND" />
          </div>

          {/* Rows visible on desktop */}
          <div className="trust-marquee-row" style={{ display: 'flex', alignItems: 'center' }}>
            <MarqueeRow items={row1} direction="left" duration={38} label="LANGUAGES & BACKEND" />
          </div>

          <div className="trust-marquee-row" style={{ display: 'flex', alignItems: 'center' }}>
            <MarqueeRow items={row2} direction="right" duration={30} label="FRONTEND & DATA" />
          </div>

          <div className="trust-marquee-row" style={{ display: 'flex', alignItems: 'center' }}>
            <MarqueeRow items={row3} direction="left" duration={44} label="CLOUD · DEVOPS · AI" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust-marquee-section { width: 100%; background: transparent; }
        .container-custom { max-width: 1120px; margin: 0 auto; }
        .marquee-heading { text-align: center; text-transform: uppercase; letter-spacing: 0.24em; font-size: 0.58rem; color: rgba(255,255,255,0.75); margin-bottom: 1.5rem; }

        /* row visibility */
        .trust-marquee-row.mobile-only { display: none; }
        @media (max-width: 767px) {
          .marquee-heading { content: 'TECH STACK'; }
          .marquee-heading { text-align: center; text-transform: uppercase; letter-spacing: 0.18em; font-size: 0.72rem; }
          .trust-marquee-row { display: none; }
          .trust-marquee-row.mobile-only { display: flex; }
          .marquee-track { min-height: 52px; }
        }

        @media (min-width: 768px) {
          .trust-marquee-row { display: flex; }
        }

        /* ensure marquee-inner animations are applied per instance via inline styles */
        .marquee-inner { animation-play-state: running; }
      `}</style>
    </motion.section>
  );
}
