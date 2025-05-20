
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Collective from "./pages/Collective";
import Tools from "./pages/Tools";
import Manifesto from "./pages/Manifesto";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TestBlog from "./pages/TestBlog";
import TestBlogPost from "./pages/TestBlogPost";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/collective" element={<Collective />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/test-blog" element={<TestBlog />} />
            <Route path="/test-blog/:id" element={<TestBlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
