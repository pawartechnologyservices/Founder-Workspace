import { useState, useEffect } from "react";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProductHighlights from "@/components/home/ProductHighlights";
import FeatureSlider from "@/components/home/FeatureSlider";
import PricingSection from "@/components/home/PricingSection";
// import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/auth/AuthModal";
import RequestDemoModal from "@/components/products/RequestDemoModal";

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>

      <Navbar 
        onAuthClick={() => setShowAuthModal(true)}
        onDemoClick={() => setShowDemoModal(true)}
      />
      
      <main>
        <Hero onDemoClick={() => setShowDemoModal(true)} />
        <About />
        <FeatureSlider />
        <ProductHighlights/>
        <PricingSection  />
        {/* <FaqSection /> */}
        <ContactSection />
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

export default Index;