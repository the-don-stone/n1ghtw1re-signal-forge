
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchAllBlogPosts, BlogPost } from '../utils/supabaseClient';
import Layout from '../components/layout/Layout';

const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const { data, error } = await fetchAllBlogPosts();
      if (error) throw error;
      return data as BlogPost[];
    }
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">DISPATCHES</h1>
          
          <p className="font-mono text-white/90 mb-8">
            Reports from the frontlines of digital resistance. Analysis, tutorials, philosophy, and tactical information from the N1ghtw1re collective.
          </p>
          
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent"></div>
              <p className="font-mono text-white/70 mt-4">Loading dispatches...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 border border-cyberpunk-red/50 bg-cyberpunk-red/10 p-4">
              <p className="font-mono text-white/90">Error loading blog posts. Please try again later.</p>
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="space-y-12">
              {posts.map(post => (
                <article key={post.id} className="border border-white/20 p-6 hover:border-cyberpunk-green transition-colors">
                  <h2 className="font-glitch text-2xl text-white mb-3">
                    <Link to={`/blog/${post.slug}`} className="hover:text-cyberpunk-green transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="font-mono text-xs text-white/60">
                      {new Date(post.published_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="font-mono text-xs text-cyberpunk-green">by {post.author}</span>
                  </div>
                  
                  <p className="font-mono text-white/90 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    READ FULL DISPATCH →
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-white/20 p-4">
              <p className="font-mono text-white/90">No dispatches available yet. Check back soon.</p>
              <Link to="/" className="font-mono text-cyberpunk-green hover:underline mt-4 inline-block">
                ← Return to base
              </Link>
            </div>
          )}
          
          <div className="mt-12 flex justify-between">
            <Link 
              to="/admin" 
              className="inline-block font-mono text-cyberpunk-green hover:underline"
            >
              ADMIN LOGIN
            </Link>
            
            <a 
              href="#archives" 
              className="inline-block px-6 py-3 bg-transparent border border-white text-white font-mono hover:bg-white/10 transition-colors"
            >
              VIEW ARCHIVES
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
