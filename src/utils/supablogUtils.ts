
import { supabase } from "../integrations/supabase/client";

export interface SupaBlogPost {
  id: string;
  created_at: string;
  title: string;
  meta_description: string;
  keywords: string[];
  tags: string[];
  blog_location: string;
  content: string;
  permalink?: string;
}

// Create a permalink from the title
export const createPermalink = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

// Get all blog posts from a specific location
export const getSupaBlogPostsByLocation = async (location: string): Promise<SupaBlogPost[]> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('blog_location', location)
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  
  return data as SupaBlogPost[];
};

// Get a specific blog post by ID
export const getSupaBlogPostById = async (id: string): Promise<SupaBlogPost | null> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error('Error fetching blog post by ID:', error);
    return null;
  }
  
  return data as SupaBlogPost;
};

// Get a specific blog post by permalink
export const getSupaBlogPostByPermalink = async (permalink: string): Promise<SupaBlogPost | null> => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('permalink', permalink)
    .single();
  
  if (error) {
    console.error('Error fetching blog post by permalink:', error);
    return null;
  }
  
  return data as SupaBlogPost;
};

// Create a new blog post
export const createSupaBlogPost = async (post: Omit<SupaBlogPost, 'id' | 'created_at'>): Promise<SupaBlogPost | null> => {
  // Generate permalink if not provided
  const postWithPermalink = {
    ...post,
    permalink: post.permalink || createPermalink(post.title)
  };

  const { data, error } = await supabase
    .from('posts')
    .insert([postWithPermalink])
    .select()
    .single();
  
  if (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
  
  return data as SupaBlogPost;
};

// Update an existing blog post
export const updateSupaBlogPost = async (id: string, post: Partial<SupaBlogPost>): Promise<SupaBlogPost | null> => {
  // If title is being updated and permalink isn't specified, update permalink too
  const postToUpdate = { ...post };
  if (post.title && !post.permalink) {
    postToUpdate.permalink = createPermalink(post.title);
  }

  const { data, error } = await supabase
    .from('posts')
    .update(postToUpdate)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
  
  return data as SupaBlogPost;
};
