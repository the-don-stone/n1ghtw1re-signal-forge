
-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  tags TEXT[] DEFAULT '{}',
  author TEXT NOT NULL DEFAULT 'N1GHTW1RE',
  slug TEXT UNIQUE NOT NULL
);

-- Insert some sample data
INSERT INTO blog_posts (title, content, excerpt, published_at, tags, author, slug)
VALUES 
(
  'Welcome to the Resistance', 
  '# Welcome to the Resistance\n\nThe future is not set. There is no fate but what we make for ourselves.\n\nIn a world dominated by mega-corporations and surveillance states, we must build our own tools, our own networks, our own communities.\n\n## Getting Started\n\n1. Learn basic encryption\n2. Use secure communication channels\n3. Contribute to open source projects\n4. Build local resilience\n\nThe revolution will not be centralized.',
  'The future is not set. There is no fate but what we make for ourselves. In a world dominated by mega-corporations and surveillance states...',
  NOW(),
  ARRAY['cyberpunk', 'resistance', 'privacy'],
  'N1GHTW1RE',
  'welcome-to-the-resistance'
),
(
  'Digital Self-Defense in 2025', 
  '# Digital Self-Defense\n\nProtecting yourself in the digital realm has never been more important.\n\n## Essential Tools\n\n- VPNs and Tor\n- Encrypted messaging\n- Local data storage\n- Password managers\n\n## Techniques\n\n- Compartmentalization\n- Digital minimalism\n- Regular security audits\n- Social engineering awareness',
  'Protecting yourself in the digital realm has never been more important. Learn about essential tools and techniques for digital self-defense in 2025.',
  NOW() - INTERVAL '2 DAYS',
  ARRAY['security', 'privacy', 'tutorial'],
  'N1GHTW1RE',
  'digital-self-defense-2025'
);

-- Set up Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for reading blog posts (public)
CREATE POLICY "Public can read blog posts"
  ON blog_posts
  FOR SELECT
  USING (true);

-- Create policy for inserting/updating/deleting blog posts (authenticated only)
CREATE POLICY "Authenticated users can modify blog posts"
  ON blog_posts
  FOR ALL
  USING (auth.role() = 'authenticated');
