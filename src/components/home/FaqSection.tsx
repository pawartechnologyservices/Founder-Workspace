
import { useState } from "react";
import { Link } from "react-router-dom";
import FadeIn from "@/components/ui/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Founder Workspace?",
    answer: "Founder Workspace is a suite of business tools designed specifically for startups and growing businesses. Our platform offers Customer Relationship Management, ERP, and billing solutions to help founders scale their operations efficiently."
  },
  {
    question: "How does pricing work?",
    answer: "We offer three pricing tiers (Basic, Advanced, and Pro) with monthly, yearly, and lifetime options. Yearly plans come with a 20% discount compared to monthly billing. You can view specific pricing for each product on their respective pricing pages."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial for all our products with no credit card required. You can access all features during the trial period to evaluate if the software meets your needs."
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. All data is encrypted in transit and at rest. We are GDPR compliant, SOC 2 certified, and perform regular security audits to ensure your data remains protected."
  },
  {
    question: "Can I integrate with other tools I use?",
    answer: "Yes, all our systems are built with integration in mind. We offer native integrations with popular tools like Slack, Google Workspace, Microsoft 365, and many more. We also have an API for custom integrations."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support. Advanced plans include priority email support with faster response times. Pro plans include 24/7 phone and email support plus a dedicated account manager to help with your specific needs."
  }
];

const FaqSection = () => {
  return (
    <section id="faqs" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300">
                Find answers to common questions about our products and services.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-white hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
          
          <FadeIn delay={300}>
            <div className="mt-12 text-center">
              <p className="text-gray-300 mb-6">
                Still have questions? Check our detailed FAQ page or contact our support team.
              </p>
              <Link 
                to="/faqs"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                View All FAQs
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
