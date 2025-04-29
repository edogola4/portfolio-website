// src/blog/BlogCard.jsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const BlogCard = ({ post, featured = false }) => {
  // Destructure post data
  const { slug, title, excerpt, coverImage, date, readTime, categories, author } = post;
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  // For tracking image loading state
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <article className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 
      hover:shadow-lg ${featured ? 'md:col-span-2 md:grid md:grid-cols-2 md:gap-0' : ''}`}>
      {/* Image container */}
      <Link href={`/blog/${slug}`} className={`block relative ${featured ? 'h-64 md:h-full' : 'h-48 sm:h-56'}`}>
        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity`}>
          {/* Skeleton loader */}
          <div className="w-full h-full flex items-center justify-center">
            <svg className="animate-pulse w-10 h-10 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v12H4z" />
              <path d="M4 16h4v4H4z" />
              <path d="M8 16h4v4H8z" />
              <path d="M12 16h4v4h-4z" />
              <path d="M16 16h4v4h-4z" />
            </svg>
          </div>
        </div>
        <Image
          src={coverImage || '/images/blog-placeholder.jpg'}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          sizes={featured 
            ? "(max-width: 768px) 100vw, 50vw" 
            : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
          priority={featured}
          onLoadingComplete={() => setImageLoaded(true)}
        />
        
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Featured
            </span>
          </div>
        )}
      </Link>
      
      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {categories && categories.slice(0, 3).map((category) => (
            <Link
              key={category}
              href={`/blog?category=${category}`}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
            >
              {category}
            </Link>
          ))}
          {categories && categories.length > 3 && (
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
              +{categories.length - 3} more
            </span>
          )}
        </div>
        
        {/* Title */}
        <Link href={`/blog/${slug}`} className="block group">
          <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
            {title}
          </h3>
        </Link>
        
        {/* Metadata */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          {author && (
            <>
              <div className="flex items-center">
                <div className="relative h-6 w-6 rounded-full overflow-hidden mr-2">
                  <Image
                    src={author.avatar || '/images/profile.jpg'}
                    alt={author.name}
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </div>
                <span className="mr-2">{author.name}</span>
              </div>
              <span className="mx-2">•</span>
            </>
          )}
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span>{readTime} min read</span>
        </div>
        
        {/* Excerpt */}
        <p className={`text-gray-600 dark:text-gray-300 mb-4 ${featured ? 'line-clamp-4' : 'line-clamp-3'}`}>
          {excerpt}
        </p>
        
        {/* Read more link - with auto-margin-top to push to bottom */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline mt-auto"
        >
          Read more
          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;