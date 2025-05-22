
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
  id: "markdown-example",
  title: "Markdown Article Example",
  excerpt: "An example article written in Markdown format.",
  date: "2025-05-23",
  author: "N1ghtw1re",
  tags: ["markdown", "tutorial", "example"]
};

// The markdown content of your article
const markdownContent = `
# Markdown Article Example

## Introduction to Markdown

Markdown is a lightweight markup language with plain-text formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML.

## Why Use Markdown?

- **Simplicity**: Easy to learn and use
- **Portability**: Plain text can be opened anywhere
- **Flexibility**: Can be converted to HTML, PDF, and many other formats

## Cybersecurity Tips in Markdown

### 1. Use Strong Passwords

Always use *strong, unique passwords* for each service. Consider using a **password manager** to keep track of them.

### 2. Enable Two-Factor Authentication

> Two-factor authentication adds an extra layer of security to your accounts by requiring two different forms of identification.

### 3. Keep Systems Updated

\`\`\`bash
# Example update commands
sudo apt update && sudo apt upgrade -y  # Ubuntu/Debian
sudo pacman -Syu                        # Arch Linux
brew update && brew upgrade             # macOS
\`\`\`

## Conclusion

Markdown makes it easy to write formatted content without having to deal with complex HTML tags. It's perfect for blog posts, documentation, and more.

[Learn more about Markdown](https://www.markdownguide.org/)
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
    <div>
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
