
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/fade-in";
import AnimatedText from "@/components/ui/animated-text";
import RgbBorderButton from "@/components/ui/rgb-border-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AuthModal from "@/components/auth/AuthModal";
import RequestDemoModal from "@/components/products/RequestDemoModal";

const SupportPage = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Common support questions
  const supportFaqs = [
    {
      question: "How do I reset my account password?",
      answer: "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions sent to your email to create a new password."
    },
    {
      question: "Can I upgrade my subscription plan?",
      answer: "Yes, you can upgrade your subscription at any time. Navigate to Account Settings > Billing and select the 'Change Plan' option to view available upgrades."
    },
    {
      question: "How do I export my data from the platform?",
      answer: "To export your data, go to the Data Management section and select the 'Export' option. You can choose between various export formats including CSV, Excel, or JSON."
    },
    {
      question: "Is there a limit on the number of users I can add?",
      answer: "User limits depend on your subscription plan. Basic plans support up to 5 users, while Advanced and Pro plans support 15 and unlimited users respectively."
    },
    {
      question: "Do you offer custom integrations with other platforms?",
      answer: "Yes, we offer custom integrations with many popular platforms. Please contact our support team with your specific requirements for a custom integration quote."
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
                Customer Support
              </h1>
              <AnimatedText
                text="We're here to help you succeed with our platform"
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                delay={0.5}
              />
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <FadeIn delay={300}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Get Help</h2>
                <p className="text-gray-300 mb-6">
                  Our support team is ready to assist you with any questions or issues. Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="bg-black/50 border-white/10 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="bg-black/50 border-white/10 text-white"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="supportType" className="block text-sm font-medium text-gray-300 mb-1">
                      Support Category
                    </label>
                    <select 
                      id="supportType" 
                      className="w-full bg-black/50 border border-white/10 text-white rounded-md px-3 py-2"
                    >
                      <option>Technical Support</option>
                      <option>Billing Inquiry</option>
                      <option>Account Access</option>
                      <option>Feature Request</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Description
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Describe your issue in detail" 
                      rows={5}
                      className="bg-black/50 border-white/10 text-white"
                    />
                  </div>
                  
                  <div>
                    <RgbBorderButton className="w-full">
                      Submit Support Request
                    </RgbBorderButton>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={500} direction="left">
              <div>
                <h2 className="text-2xl font-bold mb-6">Common Questions</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {supportFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                      <AccordionTrigger className="text-white hover:text-purple-400 transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Need More Help?</h3>
                  <p className="text-gray-300 mb-4">
                    Check out our comprehensive documentation for detailed guides and tutorials.
                  </p>
                  <a 
                    href="/resources/documentation" 
                    className="text-purple-400 hover:text-purple-300 transition-colors flex items-center"
                  >
                    Browse Documentation
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </FadeIn>
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

export default SupportPage;
