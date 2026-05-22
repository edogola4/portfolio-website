// src/components/projects/ProjectCard.jsx
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

/** @param {'amber'|'teal'|'red'|'blue'|'green'|undefined} color */
function badgeClasses(color) {
  switch (color) {
    case 'amber':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    case 'teal':
      return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300';
    case 'green':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    default:
      // brand accent (Burnt Sienna) — default for SmartSchedule etc.
      return 'bg-[#E07A5F]/15 text-[#E07A5F] dark:bg-[#E07A5F]/20 dark:text-[#E07A5F]';
  }
}

/** @param {'amber'|'teal'|'red'|'blue'|'green'|undefined} color */
function statusClasses(color) {
  switch (color) {
    case 'amber':
      return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/40';
    default:
      return 'bg-[#3A5A6B]/10 text-[#3A5A6B] border-[#3A5A6B]/20 dark:bg-[#6B7F82]/20 dark:text-[#6B9FB1] dark:border-[#6B7F82]/30';
  }
}

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white dark:bg-[#1E2A35] rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-[#e8e2d6] dark:border-[#3A5A6B]/35 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-48 w-full shrink-0">
        <Image
          src={project.imageUrl}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
        />
        {project.badge && (
          <div className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${badgeClasses(project.badgeColor)}`}>
            {project.badge}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Status */}
        {project.status && (
          <span className={`self-start text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${statusClasses(project.badgeColor)}`}>
            {project.status}
          </span>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights (Riggs-style) */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-4 space-y-1">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-[#2B2D42]/70 dark:text-[#F8F5F0]/70">
                <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#F8F5F0] dark:bg-[#3A5A6B]/20 text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 border border-[#e8e2d6] dark:border-[#3A5A6B]/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-[#F8F5F0] dark:bg-[#3A5A6B]/20 text-[#2B2D42]/60 dark:text-[#F8F5F0]/60 border border-[#e8e2d6] dark:border-[#3A5A6B]/30">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-[#3A5A6B] dark:text-[#6B9FB1] hover:text-[#2B3D4D] dark:hover:text-[#9BB8C3] transition-colors"
          >
            View Details →
          </Link>
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="text-[#2B2D42]/60 dark:text-[#F8F5F0]/60 hover:text-[#3A5A6B] dark:hover:text-[#6B9FB1] transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#2B2D42]/70 dark:text-[#F8F5F0]/70 hover:text-[#3A5A6B] dark:hover:text-[#6B9FB1] transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                {project.isPrivate ? 'Private' : 'View on GitHub'}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
