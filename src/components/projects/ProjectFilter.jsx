// src/components/projects/ProjectFilter.jsx
'use client';

export default function ProjectFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
      <h2 className="text-lg font-medium mb-3">Filter Projects:</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}