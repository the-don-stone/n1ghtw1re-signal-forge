
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getSupaBlogPostById, getSupaBlogPostByPermalink, SupaBlogPost } from '../utils/supablogUtils';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const TestBlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<SupaBlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadPost() {
      if (!id) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        // First try to get post by permalink
        let postData = await getSupaBlogPostByPermalink(id);
        
        // If not found by permalink, try by ID
        if (!postData) {
          postData = await getSupaBlogPostById(id);
        }

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
    }

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
            <Link to="/test-blog" className="font-mono text-cyberpunk-green hover:underline">
              ← BACK TO TEST BLOG
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
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-6">{post?.title}</h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <span className="font-mono text-xs text-white/60">
              {post && new Date(post.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="font-mono text-xs text-cyberpunk-green">from {post?.blog_location}</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-12">
            {post?.tags && post.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">
                {tag}
              </span>
            ))}
          </div>
          
          <article className="prose prose-invert max-w-none font-mono">
            {post && <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>}
          </article>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <Link 
              to="/test-blog" 
              className="inline-block font-mono text-cyberpunk-green hover:underline"
            >
              ← BACK TO TEST BLOG
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TestBlogPost;
