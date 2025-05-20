
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getSupaBlogPostsByLocation, SupaBlogPost } from '../utils/supablogUtils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const TestBlog = () => {
  const [posts, setPosts] = useState<SupaBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const blogPosts = await getSupaBlogPostsByLocation('Collective');
        setPosts(blogPosts);
      } catch (e) {
        console.error('Failed to load blog posts:', e);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green">TEST COLLECTIVE DISPATCHES</h1>
          </div>
          
          <p className="font-mono text-white/90 mb-8">
            This is a test blog section pulling data from Supabase. It shows blog posts from the "Collective" location.
          </p>
          
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent"></div>
              <p className="font-mono text-white/70 mt-4">Loading dispatches from encrypted channels...</p>
            </div>
          ) : error ? (
            <div className="border border-red-500/50 bg-red-900/20 p-6 rounded">
              <p className="font-mono text-red-400">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-red-900/50 text-white font-mono hover:bg-red-900/70"
              >
                Retry Connection
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-mono text-white/70">No dispatches found in this location.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map((post) => (
                <Card key={post.id} className="border border-white/20 bg-black/40 text-white">
                  <CardHeader>
                    <CardTitle className="font-glitch text-2xl text-white">
                      <Link to={`/test-blog/${post.id}`} className="hover:text-cyberpunk-green transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="font-mono text-xs text-white/60">
                      {new Date(post.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-mono text-white/90 mb-4">
                      {post.meta_description || post.content.substring(0, 150) + '...'}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags && post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/test-blog/${post.id}`}
                      className="font-mono text-cyberpunk-green hover:underline"
                    >
                      READ FULL DISPATCH →
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          
          <div className="mt-12 border-t border-white/20 pt-8">
            <Link to="/blog" className="font-mono text-cyberpunk-green hover:underline">
              ← BACK TO ORIGINAL BLOG
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestBlog;
