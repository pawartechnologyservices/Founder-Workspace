
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/fade-in";
import AuthModal from "@/components/auth/AuthModal";
import RequestDemoModal from "@/components/products/RequestDemoModal";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Code, Database, Settings, Layers, Server } from "lucide-react";

const DocumentationPage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Documentation categories
  const categories = [
    { 
      icon: BookOpen, 
      title: "Getting Started", 
      description: "Guide to help you set up and configure your workspace" 
    },
    { 
      icon: Code, 
      title: "API Reference", 
      description: "Complete reference for our REST APIs and integrations" 
    },
    { 
      icon: Database, 
      title: "Data Management", 
      description: "Learn how to efficiently manage your business data" 
    },
    { 
      icon: Settings, 
      title: "Configuration", 
      description: "System configuration and customization options" 
    },
    { 
      icon: Layers, 
      title: "SDK Libraries", 
      description: "Client libraries for multiple programming languages" 
    },
    { 
      icon: Server, 
      title: "Deployment", 
      description: "Installation and deployment strategies" 
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
                Documentation
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive guides and references to help you get the most out of our platform
              </p>
            </div>
            
            <div className="max-w-md mx-auto mb-12">
              <div className="relative">
                <Input 
                  placeholder="Search documentation..." 
                  className="bg-black/50 border-white/10 text-white pl-10"
                />
                <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400 h-4 w-4" />
              </div>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <FadeIn key={index} delay={200 + index * 100}>
                <a 
                  href="#"
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 block"
                >
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </a>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={500}>
            <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/10 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Need Technical Support?</h2>
                  <p className="text-gray-300 mb-6">
                    Our team of experts are ready to help you with any technical questions or issues you may encounter.
                  </p>
                  <a 
                    href="/resources/support" 
                    className="px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors inline-block"
                  >
                    Contact Support
                  </a>
                </div>
                
                <div className="text-right">
                  <img 
                    src="https://placehold.co/400x300/1A1F2C/FFFFFF/png?text=Support+Team" 
                    alt="Support Team" 
                    className="inline-block rounded-lg border border-white/10"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
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

export default DocumentationPage;
