// src/components/blog/BlogCard.jsx

const BlogCard = ({ post }) => {
  const { title, excerpt, category, readTime, status } = post;

  return (
    <article className="bg-white dark:bg-[#1E2A35] rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-[#e8e2d6] dark:border-[#3A5A6B]/35 flex flex-col h-full">
      <div className="p-6 flex flex-col h-full">
        {/* Category + Status */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#3A5A6B]/10 text-[#3A5A6B] dark:bg-[#6B7F82]/20 dark:text-[#6B9FB1]">
            {category}
          </span>
          {status === 'coming-soon' && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#E07A5F]/10 text-[#E07A5F] dark:bg-[#E07A5F]/15 dark:text-[#E07A5F]">
              Coming Soon
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#2B2D42] dark:text-[#F8F5F0] mb-3 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#2B2D42]/75 dark:text-[#F8F5F0]/75 mb-4 line-clamp-3 flex-grow leading-relaxed">
          {excerpt}
        </p>

        {/* Read time */}
        <div className="flex items-center text-xs text-[#2B2D42]/55 dark:text-[#F8F5F0]/55 mt-auto">
          <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
