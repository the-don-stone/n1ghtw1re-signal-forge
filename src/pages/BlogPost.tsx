
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogPostById, getAllBlogPosts } from '../utils/blogUtils';
import type { BlogPostData } from '../articles/the-surveillance-state-of-mind';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from "sonner";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<{ metadata: BlogPostData; Content: React.ComponentType } | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostData[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      try {
        if (!id) return;
        
        setLoading(true);
        const postData = await getBlogPostById(id);
        
        if (postData) {
          setPost(postData);
          loadRelatedPosts(postData.metadata);
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

  const loadRelatedPosts = async (currentPost: BlogPostData) => {
    try {
      // Get all blog posts
      const allPosts = await getAllBlogPosts();
      
      // Filter out the current post and find posts with matching tags
      const filtered = allPosts
        .filter(post => post.id !== currentPost.id)
        .filter(post => {
          // Check if any tag in this post matches any tag in the current post
          return post.tags.some(tag => currentPost.tags.includes(tag));
        });
      
      // Sort by relevance (number of matching tags)
      filtered.sort((a, b) => {
        const aMatchCount = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
        const bMatchCount = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
        return bMatchCount - aMatchCount;
      });
      
      setRelatedPosts(filtered);
    } catch (error) {
      console.error("Error loading related posts:", error);
    }
  };

  const handleRelatedPostClick = (relatedPost: BlogPostData | null, index: number) => {
    if (relatedPost) {
      navigate(`/blog/${relatedPost.id}`);
    } else {
      toast.info(`No more articles related to these topics are currently available.`);
    }
  };

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
            <h2 className="font-glitch text-2xl text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Button 
                variant="outline" 
                className="flex items-center justify-between py-6 h-auto text-left"
                onClick={() => handleRelatedPostClick(relatedPosts[0] || null, 0)}
              >
                <div>
                  <h3 className="font-glitch text-cyberpunk-green mb-2">
                    {relatedPosts[0]?.title || "No Related Article Found"}
                  </h3>
                  <p className="text-xs text-white/70 font-mono">
                    {relatedPosts[0] 
                      ? `Tags: ${relatedPosts[0].tags.join(', ')}`
                      : "No more articles with similar tags are currently available"}
                  </p>
                </div>
                <ArrowRight className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center justify-between py-6 h-auto text-left"
                onClick={() => handleRelatedPostClick(relatedPosts[1] || null, 1)}
              >
                <div>
                  <h3 className="font-glitch text-cyberpunk-green mb-2">
                    {relatedPosts[1]?.title || "No Related Article Found"}
                  </h3>
                  <p className="text-xs text-white/70 font-mono">
                    {relatedPosts[1]
                      ? `Tags: ${relatedPosts[1].tags.join(', ')}`
                      : "No more articles with similar tags are currently available"}
                  </p>
                </div>
                <ArrowRight className="ml-2" />
              </Button>
            </div>
            
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
