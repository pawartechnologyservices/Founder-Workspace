import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Building, CreditCard, ArrowRight, CheckCircle } from "lucide-react";

const software = [
  {
    icon: Users,
    title: "CRM Software",
    subtitle: "Customer Relationship Management",
    description: "Transform your customer relationships with our comprehensive CRM platform. Track leads, manage contacts, and boost sales performance with intelligent insights.",
    href: "/crm",
    key: "crm",
    features: [
      "Advanced Lead Management",
      "Sales Pipeline Automation", 
      "Customer Analytics Dashboard",
      "Email Marketing Integration",
      "Mobile CRM App",
    ],
    highlight: "Perfect for Sales Teams",
  },
  {
    icon: Building,
    title: "ERP Software", 
    subtitle: "Enterprise Resource Planning",
    description: "Unify your entire business operations with our powerful ERP solution. From inventory to finance, streamline every process for maximum efficiency.",
    href: "/erp",
    key: "erp", 
    features: [
      "Inventory Management System",
      "Financial Planning & Analysis",
      "Supply Chain Optimization",
      "Real-time Business Intelligence",
      "Multi-location Support",
    ],
    highlight: "Ideal for Growing Businesses",
  },
  {
    icon: CreditCard,
    title: "Billing Software",
    subtitle: "Simplify Invoicing & Payments", 
    description: "Automate your billing processes and get paid faster. Create professional invoices, track payments, and manage your cash flow effortlessly.",
    href: "/billing",
    key: "billing",
    features: [
      "Automated Invoice Generation",
      "Multiple Payment Gateways",
      "Recurring Billing Setup",
      "Financial Reporting Suite",
      "Tax Compliance Tools",
    ],
    highlight: "Essential for All Businesses",
  },
];

export default function SoftwareDetails() {
  const handleExploreAll = () => {
    console.log("Explore All Products clicked");
    // TODO: Navigate to products overview page
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Products
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Software Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive suite of business software designed to work together seamlessly. 
            Each solution can be used independently or as part of an integrated business ecosystem.
          </p>
        </div>

        <div className="space-y-8">
          {software.map((product, index) => {
            const Icon = product.icon;
            const isReverse = index % 2 === 1;
            
            return (
              <Card 
                key={product.key} 
                className="border-card-border bg-card hover-elevate transition-all duration-300"
                data-testid={`card-software-${product.key}`}
              >
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${isReverse ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content */}
                    <div className={`p-12 flex flex-col justify-center ${isReverse ? 'lg:col-start-2' : ''}`}>
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <Badge variant="outline">{product.highlight}</Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-card-foreground mb-2">
                          {product.title}
                        </h3>
                        <p className="text-primary font-medium mb-4">{product.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-sm font-semibold text-card-foreground mb-4">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-3">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <Link href={product.href} data-testid={`link-software-${product.key}`}>
                        <Button 
                          className="w-full sm:w-auto flex items-center gap-2"
                          data-testid={`button-learn-more-${product.key}`}
                        >
                          Learn More About {product.title}
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    {/* Visual */}
                    <div className={`bg-gradient-to-br from-primary/5 to-primary/10 p-12 flex items-center justify-center ${isReverse ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                          <Icon className="h-16 w-16 text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-card-foreground mb-2">
                          {product.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Professional software solution for modern businesses
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg p-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Need a Complete Solution?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Combine multiple products for a fully integrated business management system. 
              Contact us to design the perfect software ecosystem for your organization.
            </p>
            <Button 
              size="lg" 
              onClick={handleExploreAll}
              data-testid="button-explore-all-products"
              className="flex items-center gap-2"
            >
              Explore All Products
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}