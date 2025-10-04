
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingTable from "@/components/pricing/PricingTable";
import PricingFaq from "@/components/pricing/PricingFaq";
import AuthModal from "@/components/auth/AuthModal";
import RequestDemoModal from "@/components/products/RequestDemoModal";
import NotFound from "./NotFound";

type ProductType = "lead-management" | "erp-system" | "billing-system";

const products = {
  "lead-management": {
    title: "Customer Relationship Management",
    subtitle: "Transform your sales pipeline with powerful Customer Relationship Management"
  },
  "erp-system": {
    title: "ERP System",
    subtitle: "Streamline your business operations end-to-end"
  },
  "billing-system": {
    title: "Billing System",
    subtitle: "Flexible billing solutions for growing businesses"
  }
};

const PricingPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!productId || !(productId in products)) {
    return <NotFound />;
  }
  
  const product = products[productId as ProductType];

  return (
    <div className={`min-h-screen bg-black text-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar 
        onAuthClick={() => setShowAuthModal(true)}
        onDemoClick={() => setShowDemoModal(true)}
      />
      
      <main>
        <PricingHero 
          title={product.title} 
          subtitle={product.subtitle}
        />
        <PricingTable productId={productId as ProductType} onDemoClick={() => setShowDemoModal(true)} />
        <PricingFaq />
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      
      <RequestDemoModal 
        isOpen={showDemoModal}
        productId={productId as ProductType}
        onClose={() => setShowDemoModal(false)} 
      />
    </div>
  );
};

export default PricingPage;
