import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Users, Award, Clock, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to protect your sensitive business data.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with 99.9% uptime guarantee for uninterrupted business operations.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools that bring your entire team together on one platform.",
  },
  {
    icon: Award,
    title: "Industry Leading",
    description: "Award-winning software trusted by Fortune 500 companies worldwide.",
  },
  {
    icon: Clock,
    title: "Quick Implementation",
    description: "Get up and running in days, not months, with our streamlined onboarding process.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock expert support to help you maximize your software investment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Founder Workspace Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another software company. We're your strategic partner in digital transformation, 
            committed to delivering solutions that grow with your business and exceed your expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-card-border bg-card hover-elevate transition-all duration-300 h-full"
                data-testid={`card-feature-${index}`}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Company Mission */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-12">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To empower businesses of all sizes with intelligent software solutions that simplify complex processes, 
              enhance productivity, and drive sustainable growth. We believe that great software should be powerful yet 
              simple, scalable yet personal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}