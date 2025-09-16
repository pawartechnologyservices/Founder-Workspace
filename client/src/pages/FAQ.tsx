import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Building, CreditCard, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "CRM",
    icon: Users,
    color: "from-pink-500 to-purple-500",
    questions: [
      {
        question: "What is CRM software?",
        answer: "Customer Relationship Management (CRM) software helps businesses manage interactions with customers and prospects. It centralizes customer data, tracks sales activities, and automates marketing processes to improve customer relationships and drive sales growth."
      },
      {
        question: "Can I integrate CRM with existing systems?",
        answer: "Yes, our CRM software offers seamless integration with popular business tools including email platforms, accounting software, marketing automation tools, and third-party applications through APIs and pre-built connectors."
      },
      {
        question: "Is it customizable?",
        answer: "Absolutely! Our CRM is highly customizable with configurable fields, custom workflows, personalized dashboards, and flexible reporting options to match your unique business processes and requirements."
      }
    ]
  },
  {
    category: "ERP",
    icon: Building,
    color: "from-purple-500 to-blue-500",
    questions: [
      {
        question: "What is ERP software?",
        answer: "Enterprise Resource Planning (ERP) software integrates and manages core business processes including finance, HR, manufacturing, supply chain, and operations in a unified system to improve efficiency and decision-making."
      },
      {
        question: "Can ERP be tailored to my industry?",
        answer: "Yes, our ERP solution is designed with industry-specific modules and configurations. Whether you're in manufacturing, retail, healthcare, or services, we can customize the system to meet your industry's unique requirements and compliance standards."
      },
      {
        question: "How secure is ERP data?",
        answer: "Data security is our top priority. Our ERP features enterprise-grade security including data encryption, role-based access controls, regular security audits, secure cloud infrastructure, and compliance with industry standards like SOC 2 and ISO 27001."
      }
    ]
  },
  {
    category: "Billing",
    icon: CreditCard,
    color: "from-blue-500 to-teal-500",
    questions: [
      {
        question: "How does billing software work?",
        answer: "Our billing software automates the entire invoicing process from quote generation to payment collection. It tracks services/products, calculates taxes, sends automated invoices, processes payments, and manages customer billing history in one streamlined platform."
      },
      {
        question: "Is it safe to process payments?",
        answer: "Yes, our billing software uses bank-level security with PCI DSS compliance, SSL encryption, and secure payment gateways. All sensitive payment data is encrypted and we follow strict security protocols to protect your business and customer information."
      },
      {
        question: "Can I automate recurring invoices?",
        answer: "Absolutely! Set up automated recurring billing cycles for subscriptions, memberships, or regular services. The system automatically generates and sends invoices, processes payments, handles failed transactions, and sends payment reminders to customers."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <HelpCircle className="h-3 w-3 mr-1" />
              Support
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our CRM, ERP, and Billing software solutions.
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqData.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.category} className="space-y-6">
                  {/* Section Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${section.color} p-3 flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.category} FAQs
                      </h2>
                      <p className="text-muted-foreground">
                        Common questions about our {section.category.toLowerCase()} solution
                      </p>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="grid gap-6">
                    {section.questions.map((faq, index) => (
                      <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`faq-card-${section.category.toLowerCase()}-${index}`}>
                        <CardHeader>
                          <CardTitle className="text-lg text-foreground flex items-start gap-3">
                            <span className="text-primary font-semibold">Q:</span>
                            {faq.question}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex gap-3">
                            <span className="text-primary font-semibold">A:</span>
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Our support team is here to help. Get in touch and we'll answer any questions about our software solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover-elevate transition-all duration-300"
                    data-testid="button-contact-us"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="mailto:support@foundersworkspace.com" 
                    className="inline-flex items-center justify-center rounded-md border border-primary text-primary px-6 py-3 text-sm font-medium hover-elevate transition-all duration-300"
                    data-testid="button-email-support"
                  >
                    Email Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}