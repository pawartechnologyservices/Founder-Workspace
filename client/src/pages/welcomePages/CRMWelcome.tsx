import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  Users, 
  Star,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CRMWelcome() {
  const [_, setLocation] = useLocation(); // ✅ import navigation hook

  const config = {
    icon: Users,
    title: "CRM Software",
    subtitle: "Customer Relationship Management",
    description:
      "Transform your customer relationships and accelerate sales growth with our comprehensive CRM platform. Manage leads, track opportunities, and deliver exceptional customer experiences.",
    features: [
      "Advanced Lead Management & Scoring",
      "Sales Pipeline Automation",
      "Customer Communication Hub",
      "Real-time Sales Analytics",
      "Email Marketing Integration",
      "Mobile CRM Application",
      "Custom Field Configuration",
      "Team Collaboration Tools",
    ],
    benefits: [
      {
        icon: TrendingUp,
        title: "Increase Sales",
        description: "Boost conversion rates by up to 30%",
      },
      {
        icon: Users,
        title: "Better Relationships",
        description: "Enhance customer satisfaction and loyalty",
      },
      {
        icon: Shield,
        title: "Data Security",
        description: "Enterprise-grade security for customer data",
      },
      {
        icon: Zap,
        title: "Faster Processes",
        description: "Automate repetitive sales tasks",
      },
    ],
    highlight: "Perfect for Sales Teams",
    industries: [
      {
        title: "Retail & E-commerce",
        description:
          "Personalize customer experiences and increase repeat purchases",
        icon: "🛍️",
      },
      {
        title: "Real Estate",
        description: "Manage property inquiries and automate follow-ups",
        icon: "🏠",
      },
      {
        title: "Healthcare",
        description: "Streamline patient communication and appointment scheduling",
        icon: "🏥",
      },
      {
        title: "Financial Services",
        description: "Track client portfolios and compliance requirements",
        icon: "💰",
      },
      {
        title: "Education",
        description: "Manage student inquiries and enrollment processes",
        icon: "🎓",
      },
      {
        title: "Hospitality",
        description: "Enhance guest experiences and loyalty programs",
        icon: "🏨",
      },
    ],
  };

  const Icon = config.icon;

  const handleBookDemo = () => {
    setLocation("/book-demo"); // ✅ client-side navigation
  };

  const handleGetStarted = () => {
    console.log(`Get started with ${config.title} clicked`);
    // TODO: Replace with real navigation (signup/contact)
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    <Star className="h-3 w-3 mr-1" />
                    {config.highlight}
                  </Badge>

                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    {config.title}
                  </h1>

                  <p className="text-xl text-primary font-medium">
                    {config.subtitle}
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {config.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handleBookDemo}
                    data-testid="button-book-demo-crm"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Book a Demo
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleGetStarted}
                    data-testid="button-get-started-crm"
                    className="flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Product Visual */}
              <div className="flex justify-center">
                <Card className="w-full max-w-md border-card-border bg-card">
                  <CardContent className="p-12 text-center">
                    <div className="w-24 h-24 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      {config.title}
                    </h3>
                    <p className="text-muted-foreground">
                      Professional software solution for modern businesses
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Key Features & Benefits
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover what makes our {config.title.toLowerCase()} the perfect
                choice for your business needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <Card className="border-card-border bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6">
                    What's Included
                  </h3>
                  <div className="space-y-4">
                    {config.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Why Choose Our Solution
                </h3>
                {config.benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <Card
                      key={index}
                      className="border-card-border bg-card hover-elevate"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <BenefitIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-2">
                              {benefit.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                CRM for Every Industry
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tailored solutions designed to meet the unique needs of your
                industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.industries.map((industry, index) => (
                <Link key={index} href="/crm-welcome">
                  <Card className="border-card-border bg-card hover-elevate cursor-pointer transition-all duration-300 hover:shadow-md h-full">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4">{industry.icon}</div>
                      <h3 className="font-semibold text-card-foreground mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <Card className="border-card-border bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses that trust our{" "}
                  {config.title.toLowerCase()} to drive their success. Start your
                  journey today with a personalized demo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={handleBookDemo}
                    data-testid="button-cta-book-demo-crm"
                    className="flex items-center gap-2"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule a Demo
                  </Button>

                  <Link href="/contact" data-testid="link-contact-crm">
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      Contact Sales
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
