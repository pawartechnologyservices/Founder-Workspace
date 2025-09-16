import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Sparkles } from "lucide-react";
import HeroProductCard from "./HeroProductCard";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-primary/2 to-transparent rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 opacity-0 translate-x-8 animate-in slide-in-from-left-8 fill-mode-forwards" style={{ animationDuration: '800ms' }}>
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit animate-in fade-in-0 fill-mode-forwards" style={{ animationDelay: '200ms' }}>
                <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
                Professional Software Solutions
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight opacity-0 translate-y-4 animate-in slide-in-from-bottom-4 fill-mode-forwards" style={{ animationDelay: '400ms', animationDuration: '800ms' }}>
                Empower Your Business with{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent animate-pulse">
                  Smart Software
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg opacity-0 translate-y-4 animate-in slide-in-from-bottom-4 fill-mode-forwards" style={{ animationDelay: '600ms', animationDuration: '800ms' }}>
                Transform your operations with our comprehensive suite of CRM, ERP, and Billing solutions. 
                Built for modern businesses that demand efficiency, scalability, and results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-4 animate-in slide-in-from-bottom-4 fill-mode-forwards" style={{ animationDelay: '800ms', animationDuration: '800ms' }}>
              <Button 
                size="lg" 
                onClick={handleBookAppointment}
                data-testid="button-hero-book-appointment"
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
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
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                <Star className="h-5 w-5" />
                Founders Club – Coming Soon
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border opacity-0 translate-y-4 animate-in slide-in-from-bottom-4 fill-mode-forwards" style={{ animationDelay: '1000ms', animationDuration: '800ms' }}>
              <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies worldwide</p>
              <div className="flex items-center gap-8">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Active Clients</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-foreground transition-colors group-hover:text-primary">24/7</div>
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
                href="/crm"
                icon="crm"
                delay={1200}
              />
              
              <HeroProductCard
                shortName="ERP"
                fullName="Enterprise Resource Planning"
                href="/erp" 
                icon="erp"
                delay={1400}
              />
              
              <HeroProductCard
                shortName="Billing"
                fullName="Billing Software"
                href="/billing"
                icon="billing"
                delay={1600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}