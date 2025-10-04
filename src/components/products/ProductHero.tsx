import React from "react";
import { Download } from "lucide-react";

type ValidProductType = "lead-management" | "erp-system" | "billing-system";

interface ProductHeroProps {
  title: string;
  description: string;
  video: string;
  onDemoClick: () => void;
  productType: ValidProductType;
  siteUrl: string;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  description,
  video,
  onDemoClick,
  productType = "lead-management",
  siteUrl
}) => {
  // Product display names
  const PRODUCT_NAMES: Record<ValidProductType, string> = {
    "lead-management": "CRM",
    "erp-system": "ERP",
    "billing-system": "Billing"
  };

  // PDF file names mapping
  const PDF_FILES: Record<ValidProductType, string> = {
    "lead-management": "crm.pdf",
    "erp-system": "erp.pdf",
    "billing-system": "billing.pdf"
  };

  // Safely get product type with fallback
  const safeProductType = Object.keys(PRODUCT_NAMES).includes(productType) 
    ? productType as ValidProductType 
    : "lead-management";

  const handleDownload = () => {
    const pdfUrl = `/docs/${PDF_FILES[safeProductType]}`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = PDF_FILES[safeProductType];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVisitSite = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = siteUrl;
    
    // First try window.location
    const newWindow = window.open("", "_blank");
    if (newWindow) {
      newWindow.location.href = url;
    } else {
      // Fallback to regular link
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container relative z-20 px-6 py-24 md:py-32 lg:py-40 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onDemoClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                Request {PRODUCT_NAMES[safeProductType]} Demo
              </button>
              
              <a
                href={siteUrl}
                onClick={handleVisitSite}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/30 text-center"
              >
                Visit {PRODUCT_NAMES[safeProductType]} Site
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border-4 border-white/20">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                key={video}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleDownload}
                className="bg-transparent hover:bg-white/5 text-white text-sm font-medium py-2 px-4 rounded border border-white/20 flex items-center gap-2 transition-colors duration-200"
              >
                <Download className="h-4 w-4" />
                <span>Download {PRODUCT_NAMES[safeProductType]} Documentation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;