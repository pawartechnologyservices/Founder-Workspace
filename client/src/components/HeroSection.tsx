import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function HeroSection() {
  const handleBookAppointment = () => {
    console.log("Book Appointment clicked - would open scheduling system");
    // TODO: Integrate with real meeting scheduling system
  };

  const handleFoundersClub = () => {
    console.log("Founders Club clicked - coming soon");
    // TODO: Implement founders club functionality
  };

  return (
    <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Star className="h-3 w-3 mr-1" />
                Professional Software Solutions
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Empower Your Business with{" "}
                <span className="text-primary">Smart Software</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Transform your operations with our comprehensive suite of CRM, ERP, and Billing solutions. 
                Built for modern businesses that demand efficiency, scalability, and results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={handleBookAppointment}
                data-testid="button-hero-book-appointment"
                className="flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleFoundersClub}
                data-testid="button-hero-founders-club"
                disabled
                className="flex items-center gap-2"
              >
                <Star className="h-5 w-5" />
                Founders Club – Coming Soon
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies worldwide</p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Active Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Product Cards */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-2">Our Solutions</h2>
              <p className="text-muted-foreground">Choose the perfect software for your business needs</p>
            </div>

            <div className="grid gap-4">
              <ProductCard
                title="CRM Software"
                subtitle="Customer Relationship Management" 
                description="Build stronger customer relationships and boost sales performance."
                href="/crm"
                icon="crm"
                features={["Lead Management", "Sales Analytics", "Customer Support"]}
              />
              
              <ProductCard
                title="ERP Software"
                subtitle="Enterprise Resource Planning"
                description="Streamline operations and gain real-time business insights."
                href="/erp" 
                icon="erp"
                features={["Inventory Control", "Financial Planning", "Process Automation"]}
              />
              
              <ProductCard
                title="Billing Software"
                subtitle="Simplify Invoicing & Payments"
                description="Automate billing processes and accelerate payments."
                href="/billing"
                icon="billing"
                features={["Automated Invoicing", "Payment Gateway", "Financial Reports"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}