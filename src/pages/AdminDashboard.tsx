
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createBlogPost, fetchAllBlogPosts, updateBlogPost, deleteBlogPost, BlogPost } from '../utils/supabaseClient';
import Layout from '../components/layout/Layout';
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { useAuth } from '../context/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  
  // State for blog post form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [slug, setSlug] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);

  // Fetch blog posts
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blogPosts'],
    queryFn: async () => {
      const { data, error } = await fetchAllBlogPosts();
      if (error) throw error;
      return data as BlogPost[];
    }
  });

  // Create blog post mutation
  const createPostMutation = useMutation({
    mutationFn: async (newPost: Omit<BlogPost, 'id'>) => {
      const { data, error } = await createBlogPost(newPost);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
      resetForm();
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create blog post: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  // Update blog post mutation
  const updatePostMutation = useMutation({
    mutationFn: async ({ id, post }: { id: string; post: Partial<BlogPost> }) => {
      const { data, error } = await updateBlogPost(id, post);
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
      resetForm();
      setIsEditing(false);
      toast({
        title: "Success",
        description: "Blog post updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update blog post: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  // Delete blog post mutation
  const deletePostMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await deleteBlogPost(id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogPosts'] });
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete blog post: ${error.message}`,
        variant: "destructive",
      });
    }
  });

  const handleLogout = async () => {
    await logout();
    navigate('/admin');
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setTags('');
    setSlug('');
    setCurrentPostId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const processedTags = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
    const excerpt = content.substring(0, 150) + (content.length > 150 ? '...' : '');
    const date = new Date().toISOString();
    
    if (isEditing && currentPostId) {
      updatePostMutation.mutate({
        id: currentPostId,
        post: {
          title,
          content,
          excerpt,
          tags: processedTags,
          slug,
          published_at: date,
          author: 'N1GHTW1RE'
        }
      });
    } else {
      createPostMutation.mutate({
        title,
        content,
        excerpt,
        published_at: date,
        tags: processedTags,
        author: 'N1GHTW1RE',
        slug
      });
    }
  };

  const handleEdit = (post: BlogPost) => {
    setTitle(post.title);
    setContent(post.content);
    setTags(post.tags.join(', '));
    setSlug(post.slug);
    setCurrentPostId(post.id);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      deletePostMutation.mutate(id);
    }
  };

  const handleGenerateSlug = () => {
    const slugified = title.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setSlug(slugified);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-glitch text-3xl text-cyberpunk-green">ADMIN DASHBOARD</h1>
          <div className="flex items-center space-x-4">
            <p className="font-mono text-white/70">Logged in as {user?.email?.replace('@example.com', '')}</p>
            <Button 
              onClick={handleLogout}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-mono"
            >
              LOGOUT
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Blog Post Form */}
          <Card className="bg-black/60 border border-white/10">
            <CardContent className="pt-6">
              <h2 className="font-glitch text-xl text-cyberpunk-green mb-4">
                {isEditing ? 'EDIT POST' : 'CREATE NEW POST'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="font-mono text-sm text-white/80">Title</label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="bg-black/50 border-white/20 text-white font-mono"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <div className="flex-grow space-y-2">
                    <label htmlFor="slug" className="font-mono text-sm text-white/80">Slug</label>
                    <Input
                      id="slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      required
                      className="bg-black/50 border-white/20 text-white font-mono"
                    />
                  </div>
                  <div className="flex items-end">
                    <Button 
                      type="button"
                      onClick={handleGenerateSlug}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 font-mono h-10"
                    >
                      Generate
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="tags" className="font-mono text-sm text-white/80">Tags (comma separated)</label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="bg-black/50 border-white/20 text-white font-mono"
                    placeholder="cyberpunk, tutorial, philosophy"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="content" className="font-mono text-sm text-white/80">Content (Markdown)</label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    rows={12}
                    className="bg-black/50 border-white/20 text-white font-mono"
                    placeholder="Write your blog post content in Markdown format..."
                  />
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    type="submit" 
                    disabled={createPostMutation.isPending || updatePostMutation.isPending}
                    className="bg-cyberpunk-green hover:bg-cyberpunk-green/80 text-black font-mono flex-1"
                  >
                    {(createPostMutation.isPending || updatePostMutation.isPending) ? (
                      <>
                        <span className="mr-2">SAVING</span>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></div>
                      </>
                    ) : isEditing ? "UPDATE POST" : "PUBLISH POST"}
                  </Button>
                  
                  {isEditing && (
                    <Button 
                      type="button"
                      onClick={resetForm}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 font-mono"
                    >
                      CANCEL
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Blog Posts List */}
          <Card className="bg-black/60 border border-white/10">
            <CardContent className="pt-6">
              <h2 className="font-glitch text-xl text-cyberpunk-green mb-4">PUBLISHED POSTS</h2>
              
              {isLoading ? (
                <div className="text-center py-8">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyberpunk-green border-r-transparent"></div>
                  <p className="font-mono text-white/70 mt-2">Loading posts...</p>
                </div>
              ) : blogPosts && blogPosts.length > 0 ? (
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="border border-white/10 p-4 hover:border-cyberpunk-green/50 transition-colors">
                      <h3 className="font-glitch text-white mb-1">{post.title}</h3>
                      <p className="font-mono text-xs text-white/60 mb-2">
                        {new Date(post.published_at).toLocaleDateString()}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.map((tag, index) => (
                          <span 
                            key={index} 
                            className="px-1.5 py-0.5 text-xs font-mono bg-white/10 text-white/80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(post)}
                          className="border-white/20 text-white hover:bg-white/10 font-mono text-xs"
                        >
                          EDIT
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(post.id)}
                          className="border-cyberpunk-red text-cyberpunk-red hover:bg-cyberpunk-red/10 font-mono text-xs"
                        >
                          DELETE
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="font-mono text-white/70">No blog posts found. Create your first post!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
