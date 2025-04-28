// src / app / blog / page.js
"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BlogCard from '@/components/blog/BlogCard';
import { getAllPosts, getAllCategories, getPostsByCategory, searchPosts } from '@/lib/blog';

export default function BlogPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchQuery = searchParams.get('search');

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(categoryParam || 'all');
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');

  // Initialize data
  useEffect(() => {
    setCategories(['all', ...getAllCategories()]);
    
    // Handle category filter from URL
    if (categoryParam) {
      setPosts(getPostsByCategory(categoryParam));
      setActiveCategory(categoryParam);
    } 
    // Handle search query from URL
    else if (searchQuery) {
      setPosts(searchPosts(searchQuery));
      setSearchTerm(searchQuery);
    }
    // Default: show all posts
    else {
      setPosts(getAllPosts());
    }
  }, [categoryParam, searchQuery]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSearchTerm('');
    
    if (category === 'all') {
      setPosts(getAllPosts());
      window.history.pushState({}, '', '/blog');
    } else {
      const filteredPosts = getPostsByCategory(category);
      setPosts(filteredPosts);
      window.history.pushState({}, '', `/blog?category=${category}`);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchTerm.trim()) {
      const results = searchPosts(searchTerm);
      setPosts(results);
      setActiveCategory('all');
      window.history.pushState({}, '', `/blog?search=${encodeURIComponent(searchTerm)}`);
    } else {
      setPosts(getAllPosts());
      window.history.pushState({}, '', '/blog');
    }
  };

  return (
    <main className="container mx-auto px-4 py-12 md:py-20">
      {/* Page Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog & Articles
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Insights, tutorials, and thoughts on web development, with a focus on East African tech ecosystems.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="max-w-5xl mx-auto mb-10 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button 
              type="submit"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="max-w-5xl mx-auto mb-8">
        <p className="text-gray-600 dark:text-gray-400">
          {posts.length === 0 
            ? 'No articles found.' 
            : `Showing ${posts.length} article${posts.length === 1 ? '' : 's'}${
                activeCategory !== 'all' ? ` in ${activeCategory}` : ''
              }${searchTerm ? ` matching "${searchTerm}"` : ''}.`
          }
        </p>
      </div>

      {/* Blog Posts Grid */}
      {posts.length > 0 ? (
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto text-center py-12">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h2 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No articles found</h2>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter to find what you&apos;re looking for.
          </p>
          <div className="mt-6">
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
                setPosts(getAllPosts());
                window.history.pushState({}, '', '/blog');
              }}
              className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500"
            >
              View all articles
            </button>
          </div>
        </div>
      )}
    </main>
  );
}