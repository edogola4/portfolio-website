// src/components/projects/ProjectFilter.jsx
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export default function ProjectFilter({ categories }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') || 'All'
  );
  
  // Update the URL when the category changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (activeCategory === 'All') {
      params.delete('category');
    } else {
      params.set('category', activeCategory);
    }
    
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [activeCategory, router, pathname, searchParams]);
  
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