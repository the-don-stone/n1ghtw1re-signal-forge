
import React from 'react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = "" }) => {
  const renderMarkdown = (markdown: string) => {
    // Simple markdown parsing - you can extend this as needed
    let html = markdown;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="font-glitch text-xl text-white mb-4 mt-6">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="font-glitch text-2xl text-white mb-4 mt-8">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="font-glitch text-3xl text-cyberpunk-green mb-6 mt-8">$1</h1>');
    
    // Bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-cyberpunk-green">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="text-white/90">$1</em>');
    
    // Code blocks
    html = html.replace(/```([\s\S]*?)```/g, '<pre class="bg-black/50 border border-white/20 p-4 font-mono text-cyberpunk-green overflow-x-auto my-4"><code>$1</code></pre>');
    html = html.replace(/`(.*?)`/g, '<code class="bg-black/30 px-2 py-1 font-mono text-cyberpunk-green">$1</code>');
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-cyberpunk-green hover:underline">$1</a>');
    
    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li class="font-mono text-white/90 mb-2">$1</li>');
    html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside my-4">$1</ul>');
    
    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p class="font-mono text-white/90 mb-4">');
    html = '<p class="font-mono text-white/90 mb-4">' + html + '</p>';
    
    // Clean up empty paragraphs
    html = html.replace(/<p class="[^"]*"><\/p>/g, '');
    
    return html;
  };

  return (
    <div 
      className={`prose prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
};

export default MarkdownRenderer;
