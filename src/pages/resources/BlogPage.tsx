
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/fade-in";
import AuthModal from "@/components/auth/AuthModal";
import RequestDemoModal from "@/components/products/RequestDemoModal";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const BlogPage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Maximizing Lead Conversion with AI Insights",
      excerpt: "Learn how to use AI-driven analytics to improve your lead conversion rates and boost sales.",
      date: "May 15, 2025",
      category: "CRM",
      image: "https://placehold.co/600x400/1A1F2C/FFFFFF/png?text=Lead+Conversion+AI",
      author: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Streamlining Financial Operations for Startups",
      excerpt: "Discover proven strategies to optimize your financial processes and reduce operational costs.",
      date: "May 10, 2025",
      category: "Finance",
      image: "https://placehold.co/600x400/1A1F2C/FFFFFF/png?text=Financial+Operations",
      author: "Michael Chen"
    },
    {
      id: 3,
      title: "Setting Up Recurring Billing: A Complete Guide",
      excerpt: "Step-by-step instructions to implement an effective recurring billing system for your business.",
      date: "May 5, 2025",
      category: "Billing",
      image: "https://placehold.co/600x400/1A1F2C/FFFFFF/png?text=Recurring+Billing",
      author: "Emma Rodriguez"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar 
        onAuthClick={() => setShowAuthModal(true)}
        onDemoClick={() => setShowDemoModal(true)}
      />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Our Blog
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Latest insights, tips, and strategies for optimizing your business operations
              </p>
            </div>
            
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Input 
                  placeholder="Search articles..." 
                  className="bg-black/50 border-white/10 text-white pl-10"
                />
                <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400 h-4 w-4" />
              </div>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <FadeIn key={post.id} delay={200 + index * 100}>
                <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-medium py-1 px-2 rounded">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>By {post.author}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <a 
                      href={`#/blog/${post.id}`} 
                      className="text-purple-400 font-medium hover:text-purple-300 transition-colors inline-flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <a 
              href="#" 
              className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
            >
              Load More Articles
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      
      <RequestDemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />
    </div>
  );
};

export default BlogPage;
