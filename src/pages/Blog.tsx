
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../utils/blogUtils';
import type { BlogPostData } from '../articles/the-surveillance-state-of-mind';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getAllBlogPosts();
        setPosts(allPosts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">DISPATCHES</h1>
          
          <p className="font-mono text-white/90 mb-8">
            Reports from the frontlines of digital resistance. Analysis, tutorials, philosophy, and tactical information from the N1ghtw1re collective.
          </p>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent"></div>
              <p className="font-mono text-white/70 mt-4">Loading dispatches...</p>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map(post => (
                <article key={post.id} className="border border-white/20 p-6 hover:border-cyberpunk-green transition-colors">
                  <h2 className="font-glitch text-2xl text-white mb-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-cyberpunk-green transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="font-mono text-xs text-white/60">{post.date}</span>
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
                    to={`/blog/${post.id}`}
                    className="font-mono text-cyberpunk-green hover:underline"
                  >
                    READ FULL DISPATCH →
                  </Link>
                </article>
              ))}
            </div>
          )}
          
          <div className="mt-12 flex justify-center">
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
