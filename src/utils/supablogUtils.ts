
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
}

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
    console.error('Error fetching blog post:', error);
    return null;
  }
  
  return data as SupaBlogPost;
};
