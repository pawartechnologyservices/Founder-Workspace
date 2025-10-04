import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductPricing from "@/components/products/ProductPricing";
import ProductFaq from "@/components/products/ProductFaq";
import AuthModal from "@/components/auth/AuthModal";
import RequestDemoModal from "@/components/products/RequestDemoModal";
import NotFound from "./NotFound";

// Icons
import { 
  FiTrendingUp, FiFilter, FiZap, FiBarChart2, FiAward, FiMail, 
  FiDollarSign, FiPackage, FiUsers, FiTruck, FiCreditCard, 
  FiPieChart, FiFileText, FiLayers, FiShield, FiClock, FiGrid,
  FiCheckCircle, FiDatabase, FiCpu, FiGlobe, FiCode, FiLock
} from "react-icons/fi";
import { FaRobot, FaQrcode, FaCalculator } from "react-icons/fa";

// Video imports
import leadManagementDemo from "@/assets/video/lead-management-demo.mp4";
import erpSystemDemo from "@/assets/video/erp-system-demo.mp4";
import billingSystemDemo from "@/assets/video/billing-system-demo.mp4";

// Logo imports for marquee
import CompanyLogo1 from "@/assets/images/logos/1.jpg";
import CompanyLogo2 from "@/assets/images/logos/2.jpg";
import CompanyLogo3 from "@/assets/images/logos/3.jpg";
import CompanyLogo4 from "@/assets/images/logos/4.jpg";
import CompanyLogo5 from "@/assets/images/logos/5.jpg";
import CompanyLogo6 from "@/assets/images/logos/6.jpg";
import CompanyLogo7 from "@/assets/images/logos/7.jpg";
import CompanyLogo8 from "@/assets/images/logos/8.jpg";
import CompanyLogo9 from "@/assets/images/logos/9.jpg";
import CompanyLogo10 from "@/assets/images/logos/10.jpg";

type ProductType = "lead-management" | "erp-system" | "billing-system";

interface ProductData {
  title: string;
  description: string;
  heroVideo: string;
  siteUrl: string;
  features: {
    title: string;
    description: string;
    icon: JSX.Element;
    highlights?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const products: Record<ProductType, ProductData> = {
  "lead-management": {
    title: "Customer Relationship Management",
    description: "Turn leads into loyal customers with our AI-powered Customer Relationship Management solution",
    heroVideo: leadManagementDemo,
    siteUrl: "https://pts-crm-system.netlify.app/",
    features: [
      { 
        title: "AI-Powered Lead Scoring", 
        description: "Our system automatically scores leads based on behavior, engagement, and demographic data",
        icon: <FiTrendingUp className="w-8 h-8" />,
        highlights: [
          "Real-time scoring updates",
          "Custom scoring criteria",
          "Predictive lead quality assessment"
        ]
      },
      { 
        title: "Automated Lead Capture", 
        description: "Capture leads from all channels with zero manual entry",
        icon: <FiFilter className="w-8 h-8" />,
        highlights: [
          "Website forms integration",
          "Social media lead capture",
          "Email parsing technology"
        ]
      },
      { 
        title: "Smart Workflows", 
        description: "Automate your lead nurturing with intelligent workflows",
        icon: <FiZap className="w-8 h-8" />,
        highlights: [
          "Behavior-triggered automation",
          "Multi-channel nurturing",
          "Personalized follow-ups"
        ]
      },
      { 
        title: "Advanced Analytics", 
        description: "Gain deep insights into your sales funnel performance",
        icon: <FiBarChart2 className="w-8 h-8" />,
        highlights: [
          "Conversion rate tracking",
          "ROI by lead source",
          "Pipeline forecasting"
        ]
      },
      { 
        title: "Lead Distribution", 
        description: "Automatically assign leads to the right sales reps",
        icon: <FiUsers className="w-8 h-8" />,
        highlights: [
          "Round-robin distribution",
          "Territory-based assignment",
          "Skill-based routing"
        ]
      },
      { 
        title: "AI Assistant", 
        description: "Our AI suggests next best actions for each lead",
        icon: <FaRobot className="w-8 h-8" />,
        highlights: [
          "Conversation recommendations",
          "Meeting scheduling",
          "Personalized content suggestions"
        ]
      }
    ],
    faqs: [
      { 
        question: "How does lead scoring work?", 
        answer: "Our lead scoring system uses machine learning to analyze prospect behavior, engagement levels, firmographic data, and intent signals to calculate a dynamic score that updates in real-time." 
      },
      { 
        question: "Can I integrate with my existing Customer Relationship Management?", 
        answer: "Yes, our system offers seamless two-way integration with all major CRM platforms including Salesforce, HubSpot, and Zoho with pre-built connectors." 
      }
    ]
  },
  "erp-system": {
    title: "Enterprise Resource Planning",
    description: "Unify your business operations with our next-generation ERP platform",
    heroVideo: erpSystemDemo,
    siteUrl: "https://pts-erp-software.netlify.app/",
    features: [
      { 
        title: "Unified Dashboard", 
        description: "Get a 360° view of your business operations in one place",
        icon: <FiGrid className="w-8 h-8" />,
        highlights: [
          "Customizable widgets",
          "Real-time KPI tracking",
          "Department-specific views"
        ]
      },
      { 
        title: "Smart Inventory", 
        description: "AI-powered inventory management with predictive analytics",
        icon: <FiPackage className="w-8 h-8" />,
        highlights: [
          "Automated reordering",
          "Multi-location tracking",
          "Barcode scanning"
        ]
      },
      { 
        title: "Financial Suite", 
        description: "Complete financial management with advanced reporting",
        icon: <FiDollarSign className="w-8 h-8" />,
        highlights: [
          "Multi-currency support",
          "Automated reconciliation",
          "Tax compliance tools"
        ]
      },
      { 
        title: "HR & Payroll", 
        description: "Streamline your human resources processes",
        icon: <FiUsers className="w-8 h-8" />,
        highlights: [
          "Automated payroll",
          "Time tracking",
          "Benefits administration"
        ]
      },
      { 
        title: "Supply Chain AI", 
        description: "Optimize your supply chain with predictive analytics",
        icon: <FiTruck className="w-8 h-8" />,
        highlights: [
          "Vendor performance scoring",
          "Demand forecasting",
          "Route optimization"
        ]
      },
      { 
        title: "Manufacturing Module", 
        description: "End-to-end production management system",
        icon: <FiLayers className="w-8 h-8" />,
        highlights: [
          "Bill of materials",
          "Quality control",
          "Maintenance scheduling"
        ]
      }
    ],
    faqs: [
      { 
        question: "Is the ERP system cloud-based?", 
        answer: "Yes, our ERP is a fully cloud-native solution with 99.99% uptime SLA, accessible from anywhere with enterprise-grade security." 
      },
      { 
        question: "Can it handle multiple currencies?", 
        answer: "Absolutely. Our ERP supports unlimited currencies with automatic exchange rate updates and handles complex international tax scenarios." 
      }
    ]
  },
  "billing-system": {
    title: "Advanced Billing System",
    description: "Revolutionize your billing processes with our intelligent platform",
    heroVideo: billingSystemDemo,
    siteUrl: "https://pts-billing-system.netlify.app/",
    features: [
      { 
        title: "Smart Invoicing", 
        description: "Generate professional invoices with advanced customization",
        icon: <FiFileText className="w-8 h-8" />,
        highlights: [
          "Auto-generated invoices",
          "Custom templates",
          "Multi-language support"
        ]
      },
      { 
        title: "QR Code Payments", 
        description: "Enable instant payments with dynamic QR codes",
        icon: <FaQrcode className="w-8 h-8" />,
        highlights: [
          "One-click payment",
          "Mobile wallet integration",
          "Transaction tracking"
        ]
      },
      { 
        title: "Advanced Calculator", 
        description: "Built-in calculator for complex billing scenarios",
        icon: <FaCalculator className="w-8 h-8" />,
        highlights: [
          "Tax calculations",
          "Discount scenarios",
          "Currency conversion"
        ]
      },
      { 
        title: "Subscription Engine", 
        description: "Manage recurring billing with flexible options",
        icon: <FiClock className="w-8 h-8" />,
        highlights: [
          "Multiple billing cycles",
          "Prorated charges",
          "Usage-based billing"
        ]
      },
      { 
        title: "Product Catalog", 
        description: "Beautiful product display with rich media",
        icon: <FiPackage className="w-8 h-8" />,
        highlights: [
          "Image galleries",
          "Variant management",
          "Bulk pricing"
        ]
      },
      { 
        title: "Revenue Analytics", 
        description: "Comprehensive financial reporting suite",
        icon: <FiPieChart className="w-8 h-8" />,
        highlights: [
          "AR aging reports",
          "Revenue recognition",
          "Churn analysis"
        ]
      }
    ],
    faqs: [
      { 
        question: "What payment gateways do you support?", 
        answer: "We support 25+ payment processors including Stripe, PayPal, Square, and all major banks with direct API integrations." 
      },
      { 
        question: "Can I offer different pricing plans?", 
        answer: "Yes, you can create unlimited pricing tiers with custom rules, volume discounts, and promotional pricing with expiration dates." 
      }
    ]
  }
};

// Local company logos array for marquee
const companyLogos = [
  { src: CompanyLogo1, alt: "Company 1" },
  { src: CompanyLogo2, alt: "Company 2" },
  { src: CompanyLogo3, alt: "Company 3" },
  { src: CompanyLogo4, alt: "Company 4" },
  { src: CompanyLogo5, alt: "Company 5" },
  { src: CompanyLogo6, alt: "Company 6" },
  { src: CompanyLogo7, alt: "Company 7" },
  { src: CompanyLogo8, alt: "Company 8" },
  { src: CompanyLogo9, alt: "Company 9" },
  { src: CompanyLogo10, alt: "Company 10" }
];

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [productId]);

  if (!productId || !(productId in products)) {
    return <NotFound />;
  }

  const product = products[productId as ProductType];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const featureCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen bg-gray-900 text-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
    >
      <Navbar 
        onAuthClick={() => setShowAuthModal(true)}
        onDemoClick={() => setShowDemoModal(true)}
      />
      
      <main className="pt-16">
        <ProductHero 
          title={product.title} 
          description={product.description}
          video={product.heroVideo}
          onDemoClick={() => setShowDemoModal(true)}
          productType={productId as ProductType}
          siteUrl={product.siteUrl}
        />
        
        {/* Features Section */}
        <motion.section 
          className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              variants={itemVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Powerful Features
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Everything you need to transform your business operations
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={featureCardVariants}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  
                  {feature.highlights && (
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <FiCheckCircle className="text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        <motion.div 
          className="bg-gray-900 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <ProductPricing productId={productId as ProductType} />
        </motion.div>
        
        {/* Marquee Logo Section */}
        <motion.div 
          className="bg-gray-800 py-12 overflow-hidden relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Trusted by Industry Leaders
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join thousands of businesses using our {product.title.toLowerCase()} solution
              </p>
            </motion.div>
            
            {/* Marquee Container */}
            <div className="relative overflow-hidden py-6">
              {/* Gradient fades */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-800 to-transparent z-10"></div>
              
              {/* Marquee animation */}
              <motion.div
                className="flex items-center"
                animate={{
                  x: ["0%", "-100%"]
                }}
                transition={{
                  duration: isMobile ? 40 : 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Double the logos for seamless looping */}
                {[...companyLogos, ...companyLogos].map((logo, i) => (
                  <motion.div
                    key={`logo-${i}`}
                    className="flex-shrink-0 px-8 md:px-12"
                    whileHover={{ 
                      scale: 1.2,
                      transition: { 
                        type: "spring", 
                        stiffness: 300,
                        damping: 10 
                      }
                    }}
                    initial={{ opacity: 0.7, scale: 0.9 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.5 }
                    }}
                    viewport={{ once: true }}
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className={`h-28 md:h-26 object-contain grayscale hover:grayscale-0 transition-all duration-300 ${i % 2 === 0 ? 'opacity-90' : 'opacity-70'}`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gray-800 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <ProductFaq faqs={product.faqs} />
        </motion.div>
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
    </motion.div>
  );
};

export default ProductPage;