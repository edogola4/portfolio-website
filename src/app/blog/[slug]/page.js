"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import BlogPost from '@/components/blog/BlogPost';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const slug = params?.slug;
    
    if (slug) {
      // Get the current post
      const currentPost = getPostBySlug(slug);
      
      if (currentPost) {
        setPost(currentPost);
        
        // Find related posts (same category)
        if (currentPost.categories && currentPost.categories.length > 0) {
          const allPosts = getAllPosts();
          const related = allPosts.filter(p => 
            p.id !== currentPost.id && 
            p.categories.some(cat => currentPost.categories.includes(cat))
          ).slice(0, 3);
          
          setRelatedPosts(related);
        }
      } else {
        // Post not found, redirect to blog listing
        router.push('/blog');
      }
    }
    
    setIsLoading(false);
  }, [params, router]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return null; // Will redirect in useEffect
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      {/* Article Content */}
      <BlogPost post={post} />
      
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Related Articles</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <div 
                key={relatedPost.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
              >
                <a href={`/blog/${relatedPost.slug}`} className="block">
                  <div className="p-5">
                    {/* Category */}
                    {relatedPost.categories && relatedPost.categories[0] && (
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {relatedPost.categories[0]}
                      </span>
                    )}
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    
                    {/* Date */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}