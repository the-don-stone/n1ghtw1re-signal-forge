
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../utils/blogUtils';
import type { BlogPostData } from '../articles/the-surveillance-state-of-mind';
import { Input } from '../components/ui/input';
import { Search } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPostData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPostData[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const allPosts = await getAllBlogPosts();
        setPosts(allPosts);
        setFilteredPosts(allPosts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPosts(posts);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filtered = posts.filter((post) => {
      // Check title
      if (post.title.toLowerCase().includes(searchTermLower)) return true;
      
      // Check author
      if (post.author.toLowerCase().includes(searchTermLower)) return true;
      
      // Check tags
      if (post.tags.some(tag => tag.toLowerCase().includes(searchTermLower))) return true;
      
      // Check excerpt (as a proxy for content since we don't load the full content here)
      if (post.excerpt.toLowerCase().includes(searchTermLower)) return true;
      
      return false;
    });
    
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">DISPATCHES</h1>
          
          <p className="font-mono text-white/90 mb-8">
            Reports from the frontlines of digital resistance. Analysis, tutorials, philosophy, and tactical information from the N1ghtw1re collective.
          </p>
          
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-white/50" />
            </div>
            <Input
              type="text"
              placeholder="Search dispatches by title, author, tags or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white placeholder:text-white/40"
            />
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent"></div>
              <p className="font-mono text-white/70 mt-4">Loading dispatches...</p>
            </div>
          ) : (
            <>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 border border-white/20 p-6">
                  <p className="font-mono text-white/70">No dispatches found matching your search.</p>
                </div>
              ) : (
                <div className="space-y-12">
                  {filteredPosts.map(post => (
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
            </>
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
