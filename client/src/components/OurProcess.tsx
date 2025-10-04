import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Search, Settings, Rocket, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

const steps = [
  {
    icon: MessageCircle,
    title: "Discovery & Consultation",
    description:
      "We begin with an in-depth consultation to understand your business needs, challenges, and goals.",
    details: [
      "Business requirements analysis",
      "Current workflow assessment",
      "Goal setting and KPI definition",
    ],
  },
  {
    icon: Search,
    title: "Solution Design",
    description:
      "Our experts design a customized solution architecture tailored specifically to your business processes.",
    details: ["Custom solution blueprint", "Integration planning", "User experience design"],
  },
  {
    icon: Settings,
    title: "Implementation & Setup",
    description:
      "Seamless deployment with minimal disruption to your daily operations and comprehensive team training.",
    details: ["System configuration", "Data migration", "Team training sessions"],
  },
  {
    icon: Rocket,
    title: "Launch & Optimize",
    description:
      "Go live with confidence and continuous optimization to ensure you're getting maximum value.",
    details: ["Production deployment", "Performance monitoring", "Ongoing optimization"],
  },
];

export default function OurProcess() {
  const [, setLocation] = useLocation();

  const handleGetStarted = () => {
    setLocation("/book-demo");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
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

        {/* Process Steps */}
        <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 place-items-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-md w-full group/card"
                data-testid={`process-step-${index + 1}`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 mb-6">
                  <div className="relative group/icon">
                    <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center group-hover/card:bg-primary/90 transition-all duration-300 ease-in-out transform group-hover/card:scale-105">
                      <Icon className="h-10 w-10 text-primary-foreground group-hover/card:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Card className="w-full border-card-border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 ease-in-out transform hover:-translate-y-2 group-hover/card:border-primary/30 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <CardContent className="p-8 relative z-10">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover/card:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed group-hover/card:text-foreground/80 transition-colors duration-300">
                      {step.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-card-foreground group-hover/card:text-foreground/90 transition-colors duration-300">
                        What's included:
                      </h4>
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground group-hover/card:text-foreground/70 transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover/card:scale-125 group-hover/card:bg-primary/80 transition-all duration-300" />
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
        <div className="mt-20 flex justify-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-lg p-12 max-w-3xl text-center">
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
              className="flex items-center gap-2 mx-auto relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
              <span className="relative z-10 text-white font-semibold">Get Started Today</span>
              <ArrowRight className="h-5 w-5 relative z-10 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Add the animation style */}
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