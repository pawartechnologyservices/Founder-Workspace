
import FadeIn from "@/components/ui/fade-in";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface ProductFaqProps {
  faqs: FAQ[];
}

const ProductFaq = ({ faqs }: ProductFaqProps) => {
  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300">
                Find answers to common questions about this product.
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
                Have more questions? Check our detailed FAQ page or contact our support team.
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

export default ProductFaq;
