
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '../components/layout/Layout';
import { fetchBlogPostBySlug } from '../utils/supabaseClient';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blogPost', slug],
    queryFn: async () => {
      if (!slug) return null;
      const { data, error } = await fetchBlogPostBySlug(slug);
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-6">{post.title}</h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <span className="font-mono text-xs text-white/60">
              {new Date(post.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="font-mono text-xs text-cyberpunk-green">by {post.author}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">
                {tag}
              </span>
            ))}
          </div>
          
          <article className="prose prose-invert max-w-none font-mono">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              className="markdown-content"
            >
              {post.content}
            </ReactMarkdown>
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
