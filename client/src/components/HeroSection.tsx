import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star } from "lucide-react";
import HeroProductCard from "./HeroProductCard";

export default function HeroSection() {
  const handleBookDemo = () => {
    window.location.href = "/book-demo";
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-10 lg:py-32 -mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className="space-y-8 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="w-fit animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                Professional Software Solutions
              </Badge>

              <h1
                className="text-3xl lg:text-5xl font-bold text-foreground leading-tight animate-slide-in-from-bottom"
                style={{ animationDelay: "400ms" }}
              >
                Unlock the Power of Your Business with CRM, ERP & Billing{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse whitespace-nowrap">
                  The Business Trinity
                </span>
              </h1>

              <p
                className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-slide-in-from-bottom"
                style={{ animationDelay: "600ms" }}
              >
                "Integrated software solutions that streamline operations, boost
                efficiency, and grow with your business."
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-in-from-bottom"
              style={{ animationDelay: "800ms" }}
            >
              <Button
                size="lg"
                onClick={handleBookDemo}
                data-testid="button-hero-book-demo"
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <Calendar className="h-5 w-5" />
                Book Demo
              </Button>

              <Button
                size="lg"
                variant="outline"
                data-testid="button-hero-book-meeting"
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <Star className="h-5 w-5" />
                Founders Club - coming Soon
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className="pt-8 border-t border-border animate-slide-in-from-bottom"
              style={{ animationDelay: "1000ms" }}
            >
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by innovative companies worldwide
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                    500+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Active Clients
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                    99.9%
                  </div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                    24/7
                  </div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Compact Product Cards */}
          <div className="flex justify-center lg:justify-end">
            <div className="grid gap-4 max-w-sm w-full">
              <HeroProductCard
                shortName="CRM"
                fullName="Customer Relationship Management"
                description="Manage leads, automate follow-ups, and track sales across multiple industries."
                href="/crm-welcome"
                index={0}
                delay={1200}
              />

              <HeroProductCard
                shortName="ERP"
                fullName="Enterprise Resource Planning"
                description="Centralize operations, manage inventory, and optimize
workflows tailored to your industry."
                href="/erp-welcome"
                index={1}
                delay={1400}
              />

              <HeroProductCard
                shortName="Billing"
                fullName="Smart Financial Operations"
                description="Automate invoicing, track payments, and manage taxes for your business sector."
                href="/billing-welcome"
                index={2}
                delay={1600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}