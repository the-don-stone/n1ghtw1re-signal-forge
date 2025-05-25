
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

interface BlogPostEditorProps {
  post: BlogPost | null;
  onSave: () => void;
  onCancel: () => void;
}

const BlogPostEditor: React.FC<BlogPostEditorProps> = ({ post, onSave, onCancel }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [published, setPublished] = useState(post?.published || false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = post ? `/api/blog-admin/${post.id}` : '/api/blog-admin';
      const method = post ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          excerpt: excerpt || null,
          published,
        }),
      });

      if (response.ok) {
        onSave();
      } else {
        throw new Error('Failed to save post');
      }
    } catch (error) {
      console.error('Failed to save post:', error);
      alert('Failed to save post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="font-glitch text-2xl text-white">
          {post ? 'EDIT POST' : 'NEW POST'}
        </h2>
        <Button
          onClick={onCancel}
          variant="outline"
          className="font-mono border-white/20 text-white hover:bg-white/10"
        >
          CANCEL
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="title" className="font-mono text-white">
            Title
          </Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white"
            required
          />
        </div>

        <div>
          <Label htmlFor="excerpt" className="font-mono text-white">
            Excerpt (optional)
          </Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white h-20"
            placeholder="Brief description of the post..."
          />
        </div>

        <div>
          <Label htmlFor="content" className="font-mono text-white">
            Content (Markdown)
          </Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="font-mono bg-black/30 border-white/20 focus:border-cyberpunk-green text-white h-96"
            placeholder="Write your post content in Markdown..."
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="rounded border-white/20 bg-black/30 text-cyberpunk-green focus:ring-cyberpunk-green"
          />
          <Label htmlFor="published" className="font-mono text-white">
            Published
          </Label>
        </div>

        <div className="flex space-x-4">
          <Button
            type="submit"
            disabled={loading}
            className="font-mono bg-cyberpunk-green text-black hover:bg-cyberpunk-green/80"
          >
            {loading ? 'SAVING...' : 'SAVE POST'}
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            variant="outline"
            className="font-mono border-white/20 text-white hover:bg-white/10"
          >
            CANCEL
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogPostEditor;
