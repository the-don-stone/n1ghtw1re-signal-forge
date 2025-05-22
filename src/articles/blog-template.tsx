
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
}

export const metadata: BlogPostData = {
  id: "blog-template", // Change this for new articles
  title: "Blog Post Template", // Change this for new articles
  excerpt: "A brief excerpt of the blog post goes here.", // Change this for new articles
  date: "2025-05-23", // Change this for new articles
  author: "YourName", // Change this for new articles
  tags: ["template", "example"] // Change this for new articles
};

// The markdown content of your article
const markdownContent = `
# Main Heading

## Introduction

This is a paragraph of text. You can write **bold text**, *italic text*, and [links](https://example.com).

- List item 1
- List item 2
- List item 3

## Another Section

> This is a blockquote with some important information.

\`\`\`
// This is a code block
function example() {
  return "Hello, world!";
}
\`\`\`

### Subsection

More content goes here...
`;

// Custom components for styling the markdown
const markdownComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="font-glitch text-3xl text-white mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="font-glitch text-2xl text-white mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-glitch text-xl text-cyberpunk-green mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="font-mono text-white/90 mb-4">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-6 mb-6 space-y-2 font-mono text-white/90">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2 font-mono text-white/90">{children}</ol>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-cyberpunk-green pl-4 italic font-mono text-white/80 mb-4">{children}</blockquote>
  ),
  code: ({ node, inline, className, children, ...props }: any) => {
    if (inline) {
      return <code className="font-mono bg-white/10 px-1 rounded text-cyberpunk-green" {...props}>{children}</code>;
    }
    return (
      <pre className="font-mono bg-black/50 p-4 rounded mb-4 overflow-x-auto">
        <code className="text-cyberpunk-green" {...props}>{children}</code>
      </pre>
    );
  },
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <a href={href} className="text-cyberpunk-green hover:underline" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

const Content: React.FC = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        components={markdownComponents}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default Content;
