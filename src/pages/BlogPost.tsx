
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostById } from '../utils/blogUtils';
import type { BlogPostData } from '../articles/the-surveillance-state-of-mind';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<{ metadata: BlogPostData; Content: React.ComponentType } | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (!id) return;
        
        setLoading(true);
        const postData = await getBlogPostById(id);
        
        if (postData) {
          setPost(postData);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent"></div>
            <p className="font-mono text-white/70 mt-4">Decrypting dispatch...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-glitch text-4xl text-cyberpunk-green mb-8">DISPATCH NOT FOUND</h1>
            <p className="font-mono text-white/90 mb-8">
              The dispatch you're looking for doesn't exist or has been encrypted.
            </p>
            <Link to="/blog" className="font-mono text-cyberpunk-green hover:underline">
              ← BACK TO ALL DISPATCHES
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const { metadata, Content } = post;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-6">{metadata.title}</h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <span className="font-mono text-xs text-white/60">{metadata.date}</span>
            <span className="font-mono text-xs text-cyberpunk-green">by {metadata.author}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-12">
            {metadata.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">
                {tag}
              </span>
            ))}
          </div>
          
          <article className="prose prose-invert max-w-none font-mono">
            <Content />
          </article>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <Link 
              to="/blog" 
              className="inline-block font-mono text-cyberpunk-green hover:underline"
            >
              ← BACK TO ALL DISPATCHES
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
