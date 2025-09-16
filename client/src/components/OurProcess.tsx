import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Search, Settings, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Discovery & Consultation",
    description: "We begin with an in-depth consultation to understand your business needs, challenges, and goals.",
    details: ["Business requirements analysis", "Current workflow assessment", "Goal setting and KPI definition"],
  },
  {
    icon: Search,
    number: "02", 
    title: "Solution Design",
    description: "Our experts design a customized solution architecture tailored specifically to your business processes.",
    details: ["Custom solution blueprint", "Integration planning", "User experience design"],
  },
  {
    icon: Settings,
    number: "03",
    title: "Implementation & Setup",
    description: "Seamless deployment with minimal disruption to your daily operations and comprehensive team training.",
    details: ["System configuration", "Data migration", "Team training sessions"],
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Optimize", 
    description: "Go live with confidence and continuous optimization to ensure you're getting maximum value.",
    details: ["Production deployment", "Performance monitoring", "Ongoing optimization"],
  },
];

export default function OurProcess() {
  const handleGetStarted = () => {
    console.log("Get Started clicked - would open contact form");
    // TODO: Navigate to contact form or booking system
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How Our Software Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial consultation to full deployment, we follow a proven methodology that ensures 
            successful implementation and long-term success for your business.
          </p>
        </div>

        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div 
                key={index} 
                className={`flex ${isEven ? 'lg:flex-row-reverse' : ''} gap-6 items-start`}
                data-testid={`process-step-${index + 1}`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
                      <span className="text-background font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 border-card-border bg-card hover-elevate">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-card-foreground">What's included:</h4>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg p-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our software solutions can streamline your operations and drive growth.
            </p>
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              data-testid="button-process-get-started"
              className="flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}