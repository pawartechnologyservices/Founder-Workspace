
import FadeIn from "@/components/ui/fade-in";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingFaqs = [
  {
    question: "How does the billing cycle work?",
    answer: "Our billing cycles are based on the plan you choose. Monthly plans are billed every month from your sign-up date. Yearly plans are billed once a year and come with a 20% discount compared to monthly billing. Lifetime plans are a one-time payment for perpetual access to the software."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference for the remainder of your billing cycle. When downgrading, the new rate will take effect at the start of your next billing cycle."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with our service within the first 14 days, you can request a full refund. For lifetime plans, we offer a 30-day money-back guarantee."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards including Visa, MasterCard, American Express, and Discover. We also accept PayPal for all purchases. For enterprise plans, we can arrange alternative payment methods including wire transfers and purchase orders."
  },
  {
    question: "Do I need to provide a credit card for the free trial?",
    answer: "No, you can sign up for our 14-day free trial without providing any payment information. When your trial is about to end, we'll send you a reminder to select a plan if you wish to continue using our services."
  }
];

const PricingFaq = () => {
  return (
    <section className="py-20 bg-navy-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Pricing FAQs
              </h2>
              <p className="text-gray-300">
                Answers to common questions about our pricing and billing.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Accordion type="single" collapsible className="w-full">
              {pricingFaqs.map((faq, index) => (
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

export default PricingFaq;
