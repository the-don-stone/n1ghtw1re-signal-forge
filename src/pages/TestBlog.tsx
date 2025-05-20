
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { getSupaBlogPostsByLocation, SupaBlogPost } from '../utils/supablogUtils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const TestBlog = () => {
  const [posts, setPosts] = useState<SupaBlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<'newest' | 'oldest' | 'title'>('newest');
  const [allTags, setAllTags] = useState<string[]>([]);

  // Load posts from Supabase
  useEffect(() => {
    async function loadPosts() {
      try {
        setLoading(true);
        const blogPosts = await getSupaBlogPostsByLocation('Collective');
        setPosts(blogPosts);
        
        // Extract all unique tags
        const tags = blogPosts.reduce((acc: string[], post) => {
          if (post.tags) {
            post.tags.forEach(tag => {
              if (!acc.includes(tag)) {
                acc.push(tag);
              }
            });
          }
          return acc;
        }, []);
        
        setAllTags(tags);
      } catch (e) {
        console.error('Failed to load blog posts:', e);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  // Filter and sort posts
  const filteredPosts = posts
    .filter(post => {
      // Filter by search query
      const matchesSearch = 
        searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.meta_description && post.meta_description.toLowerCase().includes(searchQuery.toLowerCase()));
      
      // Filter by selected tags
      const matchesTags = 
        selectedTags.length === 0 || 
        (post.tags && selectedTags.some(tag => post.tags.includes(tag)));
      
      return matchesSearch && matchesTags;
    })
    .sort((a, b) => {
      // Sort by selected option
      switch (sortOption) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green">TEST COLLECTIVE DISPATCHES</h1>
          </div>
          
          <p className="font-mono text-white/90 mb-8">
            This is a test blog section pulling data from Supabase. It shows blog posts from the "Collective" location.
          </p>
          
          {/* Search and filter controls */}
          <div className="mb-10 space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="search"
                  placeholder="Search dispatches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-black/40 border-white/20 text-white placeholder:text-white/50 font-mono"
                />
              </div>
              <div>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as 'newest' | 'oldest' | 'title')}
                  className="bg-black/40 border border-white/20 text-white px-4 py-2 rounded w-full font-mono"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Title A-Z</option>
                </select>
              </div>
            </div>
            
            {allTags.length > 0 && (
              <Accordion type="single" collapsible className="bg-black/40 border border-white/20 rounded">
                <AccordionItem value="tags" className="border-white/20">
                  <AccordionTrigger className="px-4 py-2 font-mono text-white">
                    Filter by Tags ({selectedTags.length > 0 ? `${selectedTags.length} selected` : 'none selected'})
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="flex flex-wrap gap-2">
                      {allTags.map(tag => (
                        <Button
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          onClick={() => handleTagToggle(tag)}
                          className={`text-xs font-mono ${selectedTags.includes(tag) ? 'bg-cyberpunk-green hover:bg-cyberpunk-green/90' : 'bg-white/10 hover:bg-white/20'}`}
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )}
          </div>
          
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
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="font-mono text-white/70">No dispatches found matching your criteria.</p>
              {selectedTags.length > 0 || searchQuery !== '' ? (
                <Button 
                  onClick={() => {
                    setSelectedTags([]);
                    setSearchQuery('');
                  }} 
                  className="mt-4 bg-cyberpunk-green hover:bg-cyberpunk-green/90"
                >
                  Reset Filters
                </Button>
              ) : null}
            </div>
          ) : (
            <div className="space-y-12">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="border border-white/20 bg-black/40 text-white">
                  <CardHeader>
                    <CardTitle className="font-glitch text-2xl text-white">
                      <Link 
                        to={`/test-blog/${post.permalink || post.id}`} 
                        className="hover:text-cyberpunk-green transition-colors"
                      >
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
                        <span 
                          key={index} 
                          className={`px-2 py-1 text-xs font-mono cursor-pointer ${
                            selectedTags.includes(tag) 
                              ? 'bg-cyberpunk-green text-white' 
                              : 'bg-white/10 text-white/80 hover:bg-white/20'
                          }`}
                          onClick={() => handleTagToggle(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to={`/test-blog/${post.permalink || post.id}`}
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
