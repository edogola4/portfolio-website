// src/components/projects/ProjectFilter.jsx
'use client';

export default function ProjectFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="border-b border-[#e8e2d6] dark:border-[#3A5A6B]/35 pb-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-[#2B2D42]/55 dark:text-[#F8F5F0]/55 mb-3">
        Filter Projects
      </h2>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-[#3A5A6B] text-white dark:bg-[#6B7F82] shadow-sm'
                : 'bg-white dark:bg-[#1E2A35] text-[#2B2D42]/80 dark:text-[#F8F5F0]/80 border border-[#e8e2d6] dark:border-[#3A5A6B]/35 hover:bg-[#F8F5F0] dark:hover:bg-[#3A5A6B]/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
