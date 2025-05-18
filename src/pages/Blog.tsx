
import React from 'react';
import Layout from '../components/layout/Layout';

const Blog = () => {
  // Mock blog posts data
  const posts = [
    {
      id: 1,
      title: "The Surveillance State of Mind",
      excerpt: "How psychological manipulation drives digital monitoring systems and how to develop mental resistance.",
      date: "2025-05-12",
      author: "Neural_Ghost",
      tags: ["psychology", "resistance", "surveillance"]
    },
    {
      id: 2,
      title: "Digital Alchemy: Transforming Control into Freedom",
      excerpt: "Exploring the mystical dimensions of code and how technological rituals can counter algorithmic control.",
      date: "2025-05-05",
      author: "CrypticSignal",
      tags: ["mysticism", "technology", "liberation"]
    },
    {
      id: 3,
      title: "OPSEC for Digital Dissidents",
      excerpt: "Practical strategies for maintaining operational security while engaging in digital resistance.",
      date: "2025-04-28",
      author: "0xShadow",
      tags: ["security", "privacy", "activism"]
    },
    {
      id: 4,
      title: "The Corporate Dreamscape: Escaping the Algorithm",
      excerpt: "How recommendation algorithms shape consciousness and techniques for breaking free from their influence.",
      date: "2025-04-21",
      author: "DataSpecter",
      tags: ["algorithms", "consciousness", "resistance"]
    },
    {
      id: 5,
      title: "Techno-Fascism Rising: Signs and Countermeasures",
      excerpt: "Analyzing the convergence of authoritarianism and surveillance technology, with strategies for resistance.",
      date: "2025-04-14",
      author: "ResistanceVector",
      tags: ["politics", "fascism", "technology"]
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-glitch text-4xl md:text-5xl text-cyberpunk-green mb-8">DISPATCHES</h1>
          
          <p className="font-mono text-white/90 mb-8">
            Reports from the frontlines of digital resistance. Analysis, tutorials, philosophy, and tactical information from the N1ghtw1re collective.
          </p>
          
          <div className="space-y-12">
            {posts.map(post => (
              <article key={post.id} className="border border-white/20 p-6 hover:border-cyberpunk-green transition-colors">
                <h2 className="font-glitch text-2xl text-white mb-3">
                  <a href={`#post-${post.id}`} className="hover:text-cyberpunk-green transition-colors">
                    {post.title}
                  </a>
                </h2>
                
                <div className="flex items-center space-x-4 mb-4">
                  <span className="font-mono text-xs text-white/60">{post.date}</span>
                  <span className="font-mono text-xs text-cyberpunk-green">by {post.author}</span>
                </div>
                
                <p className="font-mono text-white/90 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 text-xs font-mono bg-white/10 text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={`#post-${post.id}`} 
                  className="font-mono text-cyberpunk-green hover:underline"
                >
                  READ FULL DISPATCH →
                </a>
              </article>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <a 
              href="#archives" 
              className="inline-block px-6 py-3 bg-transparent border border-white text-white font-mono hover:bg-white/10 transition-colors"
            >
              VIEW ARCHIVES
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
