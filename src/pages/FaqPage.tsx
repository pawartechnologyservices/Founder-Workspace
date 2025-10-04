
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/auth/AuthModal";
import RequestDemoModal from "@/components/products/RequestDemoModal";
import { 
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqData = {
  general: [
    {
      question: "What is Founder Workspace?",
      answer: "Founder Workspace is a suite of business tools designed specifically for startups and growing businesses. Our platform offers Customer Relationship Management, ERP, and billing solutions to help founders scale their operations efficiently."
    },
    {
      question: "How do I get started with Founder Workspace?",
      answer: "Getting started is easy. You can sign up for a free trial of any of our products, book a demo with our team, or contact us directly to discuss your specific business needs."
    },
    {
      question: "Do you offer integration with other tools?",
      answer: "Yes, all our systems are built with integration in mind. We offer native integrations with popular tools like Slack, Google Workspace, Microsoft 365, and many more. We also have an API for custom integrations."
    },
    {
      question: "How secure is my data with Founder Workspace?",
      answer: "We take security seriously. All data is encrypted in transit and at rest. We are GDPR compliant, SOC 2 certified, and perform regular security audits to ensure your data remains protected."
    }
  ],
  leadManagement: [
    {
      question: "How does lead scoring work?",
      answer: "Our lead scoring system uses AI to analyze prospect behavior and engagement, helping you prioritize your sales efforts on the most promising leads."
    },
    {
      question: "Can I integrate with my existing Customer Relationship Management?",
      answer: "Yes, our Customer Relationship Management integrates seamlessly with popular CRM platforms including Salesforce, HubSpot, and more."
    },
    {
      question: "How long does implementation take?",
      answer: "Most customers are up and running within 1-2 weeks, with our team providing full support throughout the onboarding process."
    },
    {
      question: "Can I automate follow-ups with leads?",
      answer: "Absolutely! You can create automated email sequences, SMS follow-ups, and task reminders based on lead activity and engagement triggers."
    }
  ],
  erp: [
    {
      question: "Is the Customer Relationship Management cloud-based?",
      answer: "Yes, our ERP system is fully cloud-based, allowing secure access from anywhere while eliminating the need for expensive on-premise infrastructure."
    },
    {
      question: "Can it handle multiple currencies?",
      answer: "Absolutely. Our ERP supports multiple currencies, tax rules, and can handle operations across different countries and regions."
    },
    {
      question: "What kind of reporting capabilities does it have?",
      answer: "The system includes over 50 pre-built reports and a custom report builder with data visualization tools to create your own dashboards."
    },
    {
      question: "Is the ERP suitable for my industry?",
      answer: "Our ERP system is designed with flexibility in mind and can be adapted to various industries. We have specific configurations for SaaS, e-commerce, professional services, manufacturing, and wholesale."
    }
  ],
  billing: [
    {
      question: "What payment gateways do you support?",
      answer: "We support all major payment gateways including Stripe, PayPal, Braintree, Authorize.net, and many regional payment providers."
    },
    {
      question: "Can I offer different pricing plans?",
      answer: "Yes, you can create unlimited pricing plans with different billing cycles, trial periods, and custom pricing rules."
    },
    {
      question: "How does your system handle failed payments?",
      answer: "Our system includes smart dunning management with configurable retry schedules, customer communications, and recovery tools to minimize revenue loss."
    },
    {
      question: "Can I generate financial reports?",
      answer: "Yes, the billing system includes comprehensive reporting for revenue recognition, forecasting, taxes, and can generate financial statements compatible with popular accounting software."
    }
  ]
};

const FaqPage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("general");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Navbar 
        onAuthClick={() => setShowAuthModal(true)} 
        onDemoClick={() => setShowDemoModal(true)}
      />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>

          <p className="text-lg text-gray-300 text-center mb-12">
            Find answers to common questions about Founder Workspace products and services
          </p>

          <Tabs defaultValue="general" className="w-full mb-10">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="leadManagement">Customer Relationship Management</TabsTrigger>
              <TabsTrigger value="erp">ERP System</TabsTrigger>
              <TabsTrigger value="billing">Billing System</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqData.general.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="leadManagement" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqData.leadManagement.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="erp" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqData.erp.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="billing" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                {faqData.billing.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          </Tabs>
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

export default FaqPage;
