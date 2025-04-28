// src /blog / BlogPost.jsx
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const BlogPost = ({ post }) => {
  const { title, date, author, coverImage, content, categories, readTime } = post;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Add syntax highlighting for code blocks when component mounts
  useEffect(() => {
    // This would typically use a library like Prism.js or highlight.js
    // Here's a placeholder for where you'd initialize syntax highlighting
    if (typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightAll();
    }
  }, [content]);

  return (
    <article className="mx-auto max-w-3xl">
      {/* Hero section with blog title */}
      <div className="mb-8">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {categories && categories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${category}`}
              className="text-sm font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-6 gap-3">
          {/* Author info with avatar */}
          {author && (
            <div className="flex items-center">
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                <Image
                  src={author.avatar || '/images/profile.jpg'}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-medium">{author.name}</span>
            </div>
          )}
          
          <span>•</span>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
      </div>

      {/* Cover image */}
      {coverImage && (
        <div className="relative h-64 md:h-96 w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      )}

      {/* Article content */}
      <div 
        className="prose prose-lg max-w-none dark:prose-invert prose-img:rounded-xl prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:rounded prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:p-1 prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Article footer */}
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
          {/* Share buttons */}
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="text-gray-700 dark:text-gray-300 mr-3">Share:</span>
            <div className="flex gap-2">
              <button 
                aria-label="Share on Twitter"
                className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
              <button 
                aria-label="Share on LinkedIn"
                className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
              <button 
                aria-label="Share on Facebook"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Back to blog link */}
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center"
          >
            <svg className="w-4 h-4 mr-2 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;