// src/components/blog/BlogCard.jsx

const BlogCard = ({ post }) => {
  const { title, excerpt, category, readTime, status } = post;
  
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="p-6 flex flex-col h-full">
        {/* Category and Status */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {category}
          </span>
          {status === 'coming-soon' && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
              Coming Soon
            </span>
          )}
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        {/* Read time */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-auto">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
