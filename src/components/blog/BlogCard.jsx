import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ post }) => {
  // Destructure post data
  const { slug, title, excerpt, coverImage, date, readTime, categories } = post;

  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 sm:h-56 md:h-64 w-full">
          <Image
            src={coverImage || '/images/blog-placeholder.jpg'}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            priority={false}
          />
        </div>
      </Link>
      
      <div className="p-5">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-3">
          {categories && categories.map((category) => (
            <span 
              key={category}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {category}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <Link href={`/blog/${slug}`} className="block">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </Link>
        
        {/* Metadata */}
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span>{readTime} min read</span>
        </div>
        
        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Read more link */}
        <Link 
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
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