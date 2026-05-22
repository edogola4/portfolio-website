"use client";

import { useState, Suspense } from 'react';
import BlogCard from '@/components/blog/BlogCard';
import { getAllPosts, getAllCategories, getPostsByCategory } from '@/lib/blog';

function BlogContent() {
  const [posts, setPosts] = useState(getAllPosts());
  const [categories] = useState(getAllCategories());
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setPosts(getPostsByCategory(category));
  };

  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-4">
          Blog
        </h1>
        <div className="h-1 w-24 bg-[#3A5A6B] dark:bg-[#6B7F82] mx-auto mb-6 rounded-full" />
        <p className="text-lg text-[#2B2D42]/80 dark:text-[#F8F5F0]/80">
          Technical writing on .NET, Azure, AI/ML, and building production-grade software. Articles coming in 2026 — follow along on X or LinkedIn to get notified when they drop.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex flex-wrap gap-2 justify-center">
          {['All', ...categories].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-[#3A5A6B] text-white dark:bg-[#6B7F82]'
                  : 'bg-white text-[#2B2D42]/80 hover:bg-[#F8F5F0] border border-[#e8e2d6] dark:bg-[#1E2A35] dark:text-[#F8F5F0]/80 dark:border-[#3A5A6B]/35 dark:hover:bg-[#3A5A6B]/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-[#F8F5F0] to-neutral-100 dark:from-[#1E2A35] dark:to-[#141E26] rounded-2xl p-8 border border-[#e8e2d6] dark:border-[#3A5A6B]/35">
        <h2 className="text-2xl font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-2 text-center">
          Get notified when I publish
        </h2>
        <p className="text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 mb-6 text-center">
          No newsletter — just follow me where you already are.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://x.com/BrandonOgola"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-lg transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Follow on X → @BrandonOgola
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-ogola-b77063232/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="https://github.com/edogola4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
            Watch on GitHub
          </a>
        </div>
      </div>
    </>
  );
}

export default function BlogPage() {
  return (
    <main className="container-custom py-12 md:py-20">
      <Suspense fallback={
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <svg className="animate-spin h-8 w-8 mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="mt-2 text-[#2B2D42]/70 dark:text-[#F8F5F0]/70">Loading blog posts...</p>
          </div>
        </div>
      }>
        <BlogContent />
      </Suspense>
    </main>
  );
}
