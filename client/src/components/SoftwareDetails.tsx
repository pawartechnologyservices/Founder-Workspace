import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import crmImg from "../assets/images/1.png";
import erpImg from "../assets/images/2.png";
import billingImg from "../assets/images/3.png";

const software = [
  {
    image: crmImg,
    title: "CRM Software",
    subtitle: "Customer Relationship Management",
    description:
      "Transform your customer relationships with our comprehensive CRM platform. Track leads, manage contacts, and boost sales performance with intelligent insights.",
    href: "/crm-welcome",
    key: "crm",
    features: [
      "Advanced Lead Management",
      "Sales Pipeline Automation",
      "Customer Analytics Dashboard",
      "Email Marketing Integration",
      "Mobile CRM App",
    ],
    highlight: "Perfect for Sales Teams",
    imageSide: "right",
  },
  {
    image: erpImg,
    title: "ERP Software",
    subtitle: "Enterprise Resource Planning",
    description:
      "Unify your entire business operations with our powerful ERP solution. From inventory to finance, streamline every process for maximum efficiency.",
    href: "/erp-welcome",
    key: "erp",
    features: [
      "Inventory Management System",
      "Financial Planning & Analysis",
      "Supply Chain Optimization",
      "Real-time Business Intelligence",
      "Multi-location Support",
    ],
    highlight: "Ideal for Growing Businesses",
    imageSide: "left",
  },
  {
    image: billingImg,
    title: "Billing Software",
    subtitle: "Invoicing & Payments",
    description:
      "Simplify your invoicing and billing with our easy-to-use Billing software. Automate payments, manage invoices, and track revenue with ease.",
    href: "/billing-welcome",
    key: "billing",
    features: [
      "Automated Invoicing",
      "Recurring Payments",
      "Multi-currency Support",
      "Tax & Compliance Handling",
      "Financial Reports",
    ],
    highlight: "Great for SMEs & Startups",
    imageSide: "right",
  },
];

export default function SoftwareDetails() {
  const handleExploreAll = () => {
    console.log("Explore All Products clicked");
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Products
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Software Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of business software designed to
            work together seamlessly. Each solution can be used independently or
            as part of an integrated ecosystem.
          </p>
        </div>

        {/* Products */}
        <div className="space-y-16">
          {software.map((product) => {
            const isImageOnRight = product.imageSide === "right";

            return (
              <Card
                key={product.key}
                className="relative overflow-hidden border border-card-border/50 bg-card/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl"
              >
                <CardContent className="p-0">
                  <div
                    className={`grid lg:grid-cols-2 gap-0 items-stretch ${
                      isImageOnRight ? "" : "lg:grid-flow-col-dense"
                    }`}
                  >
                    {/* Text Content */}
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${
                        isImageOnRight ? "" : "lg:col-start-2"
                      }`}
                    >
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge variant="outline">{product.highlight}</Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-card-foreground mb-2">
                          {product.title}
                        </h3>
                        <p className="text-primary font-medium mb-4">
                          {product.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-card-foreground mb-4">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {product.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 hover:text-primary transition-colors"
                            >
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link href={product.href}>
                        <Button className="w-full sm:w-auto flex items-center gap-2 relative overflow-hidden group">
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
                          <span className="relative z-10 text-white font-semibold">
                            Learn More About {product.title}
                          </span>
                          <ArrowRight className="h-4 w-4 relative z-10 text-white" />
                        </Button>
                      </Link>
                    </div>

                    {/* Image Section */}
                    <div
                      className={`relative overflow-hidden ${
                        isImageOnRight ? "lg:col-start-2" : "lg:col-start-1"
                      }`}
                    >
                      <div className="relative w-full h-full min-h-[350px] lg:min-h-[400px] overflow-hidden group">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-10 lg:p-14 shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need a Complete Solution?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Combine multiple products for a fully integrated business
              management system. Contact us to design the perfect ecosystem for
              your organization.
            </p>
            <Button
              size="lg"
              onClick={handleExploreAll}
              className="flex items-center gap-2 mx-auto relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
              <span className="relative z-10 text-white font-semibold">
                Explore All Products
              </span>
              <ArrowRight className="h-5 w-5 relative z-10 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient animation */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .group:hover .animate-gradient-x {
          animation: gradient-x 1.5s ease infinite;
        }
      `}</style>
    </section>
  );
}
