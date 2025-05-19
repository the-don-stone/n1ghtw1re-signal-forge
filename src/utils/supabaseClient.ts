
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = 'https://madhpwjpxahwlefxazmj.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// BlogPost type definition
export type BlogPost = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  published_at: string;
  tags: string[];
  author: string;
  slug: string;
};

// Authentication helpers
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};

// Blog post CRUD operations
export const fetchAllBlogPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false });
  
  return { data, error };
};

export const fetchBlogPostBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();
  
  return { data, error };
};

export const createBlogPost = async (post: Omit<BlogPost, 'id'>) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select();
  
  return { data, error };
};

export const updateBlogPost = async (id: string, post: Partial<BlogPost>) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(post)
    .eq('id', id)
    .select();
  
  return { data, error };
};

export const deleteBlogPost = async (id: string) => {
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);
  
  return { error };
};
