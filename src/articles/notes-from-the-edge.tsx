
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
  id: "notes-from-the-edge",
  title: "Notes From The Edge: Living Without GPS, Ads, or Permission",
  excerpt: "Every app asks for your location. Every site wants your consent. Every ad pretends to know you. I said no.",
  date: "2025-05-23",
  author: "ImVexd",
  tags: ["privacy", "degoogle", "sovereignty", "offline"]
};

// The markdown content of your article
const markdownContent = `
# 🛰️ Notes from the Edge: Living Without GPS, Ads, or Permission

*by ImVexd // N1ghtw1re Transmission 0037 // classified: public*

---

> _"Every app asks for your location. Every site wants your consent. Every ad pretends to know you. I said no. Here's what happened."_

---

## 🔥 The Premise

Most people live **on the grid**—not metaphorically, but *literally*. Your phone constantly broadcasts your coordinates, your browser bleeds your preferences, and your digital shadow walks ahead of you in every room.

I wanted out.

So I spent 30 days navigating life with:
- 📵 No GPS
- 🚫 No targeted ads
- ❌ No platform permissions

Here is what I learned—and how you can do it too.

---

## 🛠️ The Toolkit

Before unplugging the coordinates, I prepped my loadout:

- 🧭 [Magic Earth](https://www.magicearth.com/): offline maps that don't track
- 🔐 [GrapheneOS](https://grapheneos.org/): custom Android OS with hardened privacy
- 🧊 [Blokada](https://blokada.org/): system-wide ad-blocking
- 🦊 [Firefox Focus](https://play.google.com)

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
