
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getPostBySlug, type BlogPost as BlogPostType } from '../utils/blogApi';
import MarkdownRenderer from '../utils/markdownRenderer';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        const fetchedPost = await getPostBySlug(id);
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Failed to load blog post:', error);
        setNotFound(true);
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
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent"></div>
            <p className="font-mono text-white/70 mt-4">Loading dispatch...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/404" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <h1 className="font-glitch text-3xl md:text-4xl text-cyberpunk-green mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="font-mono text-sm text-white/60">
                {formatDate(post.created_at)}
              </span>
            </div>
            
            {post.excerpt && (
              <p className="font-mono text-lg text-white/90 border-l-2 border-cyberpunk-green pl-4">
                {post.excerpt}
              </p>
            )}
          </header>
          
          <div className="border-t border-white/20 pt-8">
            <MarkdownRenderer content={post.content} />
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;
