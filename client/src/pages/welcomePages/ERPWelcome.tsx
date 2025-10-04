import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  Calendar, 
  Building,
  Star,
  TrendingUp,
  Shield,
  Zap,
  Play,
  BarChart3,
  Database,
  Workflow,
  Users,
  Package,
  Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const productConfig = {
  icon: Building,
  title: "ERP Software",
  subtitle: "Enterprise Resource Planning", 
  description: "Unify your entire business operations with our powerful ERP solution. Streamline processes from inventory to finance and gain real-time insights into your business performance.",
  features: [
    "Comprehensive Inventory Management",
    "Financial Planning & Analysis",
    "Supply Chain Optimization",
    "Multi-location Support",
    "Real-time Business Intelligence",
    "Automated Reporting Suite",
    "Integration with Third-party Tools",
    "Scalable Architecture"
  ],
  benefits: [
    { icon: TrendingUp, title: "Improve Efficiency", description: "Reduce operational costs by up to 25%" },
    { icon: Building, title: "Unified Operations", description: "Connect all business processes seamlessly" },
    { icon: Shield, title: "Data Integrity", description: "Ensure accurate, real-time business data" },
    { icon: Zap, title: "Quick Decisions", description: "Make informed decisions with live insights" }
  ],
  highlight: "Ideal for Growing Businesses",
  industries: [
    { title: "Manufacturing", description: "Optimize production planning and resource allocation", icon: "🏭" },
    { title: "Distribution & Logistics", description: "Streamline warehouse operations and delivery processes", icon: "🚚" },
    { title: "Construction", description: "Manage projects, resources, and subcontractors efficiently", icon: "🏗️" },
    { title: "Healthcare", description: "Coordinate patient care, supplies, and administrative tasks", icon: "🏥" },
    { title: "Retail", description: "Unify online and offline operations and inventory", icon: "🛒" },
    { title: "Professional Services", description: "Track projects, resources, and billing in one system", icon: "📊" }
  ],
  stats: [
    { value: "25%", label: "Cost Reduction" },
    { value: "99.9%", label: "System Uptime" },
    { value: "50+", label: "Integrations" },
    { value: "24/7", label: "Global Support" }
  ]
};

export default function ERPWelcome() {
  const config = productConfig;
  const Icon = config.icon;
  const [, setLocation] = useLocation();

  const handleBookDemo = () => {
    setLocation("/book-demo");
  };

  const handleGetStarted = () => {
    window.location.href = "https://pts-erp-appli.netlify.app/"; 
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      
      <main>
        {/* Hero Banner */}
        <section className="relative bg-gradient-to-br from-background via-background to-primary/5 py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
          </div>

          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit animate-fade-in">
                    <Star className="h-3 w-3 mr-1" />
                    {config.highlight}
                  </Badge>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in-up delay-100">
                    {config.title}
                  </h1>
                  
                  <p className="text-xl text-primary font-medium animate-fade-in-up delay-200">
                    {config.subtitle}
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-300">
                    {config.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
                  <Button 
                    size="lg" 
                    onClick={handleBookDemo}
                    data-testid="button-book-demo-erp"
                    className="flex items-center gap-2 relative overflow-hidden group"
                  >
                    {/* Animated gradient background - Keeping original pink/purple/blue */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    <Calendar className="h-5 w-5 relative z-10 text-white" />
                    <span className="relative z-10 text-white font-semibold">Book a Demo</span>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleGetStarted}
                    data-testid="button-get-started-erp"
                    className="flex items-center gap-2 relative overflow-hidden group border-primary"
                  >
                    {/* Animated gradient background - Keeping original pink/purple/blue */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    <span className="relative z-10 text-white font-semibold">Get Started</span>
                    <ArrowRight className="h-5 w-5 relative z-10 text-white" />
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 animate-fade-in-up delay-500">
                  {config.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary animate-count-up">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-float">
                <div className="relative w-full max-w-2xl mx-auto">
                  {/* Main ERP Dashboard Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="ERP Software Dashboard"
                      className="w-full h-auto object-cover"
                    />
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float-delayed">
                      <BarChart3 className="h-6 w-6 text-orange-500" />
                    </div>
                    
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-float-delayed-2">
                      <Database className="h-6 w-6 text-blue-500" />
                    </div>
                    
                    <div className="absolute top-1/2 -right-6 bg-white rounded-lg shadow-lg p-3 animate-bounce-slow">
                      <Workflow className="h-6 w-6 text-purple-500" />
                    </div>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse"></div>
          
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Key Features & Benefits
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover what makes our {config.title.toLowerCase()} the perfect choice for your business needs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <Card className="border-card-border bg-card animate-slide-in-left">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-card-foreground mb-6">
                    What's Included
                  </h3>
                  <div className="space-y-4">
                    {config.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 animate-pulse" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <div className="space-y-6 animate-slide-in-right">
                <h3 className="text-xl font-semibold text-foreground">
                  Why Choose Our Solution
                </h3>
                {config.benefits.map((benefit, index) => {
                  const BenefitIcon = benefit.icon;
                  return (
                    <Card 
                      key={index} 
                      className="border-card-border bg-card hover-elevate transform hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse">
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

        {/* Advanced Features Section */}
        <section className="py-20 bg-background relative">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Advanced ERP Capabilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive business management solutions for enterprises of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Business Intelligence */}
              <Card className="border-card-border bg-card/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 animate-fade-in-up">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 animate-pulse">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Business Intelligence
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Real-time analytics and reporting across all business units with predictive insights
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    <Play className="h-4 w-4" />
                    Learn More
                  </div>
                </CardContent>
              </Card>

              {/* Supply Chain */}
              <Card className="border-card-border bg-card/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 animate-fade-in-up delay-200">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 animate-pulse">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Supply Chain Management
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    End-to-end supply chain optimization from procurement to delivery and inventory
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    <Play className="h-4 w-4" />
                    Learn More
                  </div>
                </CardContent>
              </Card>

              {/* Global Operations */}
              <Card className="border-card-border bg-card/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 animate-fade-in-up delay-400">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 animate-pulse">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    Global Operations
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Multi-currency, multi-language support for international business operations
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    <Play className="h-4 w-4" />
                    Learn More
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                ERP for Every Industry
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tailored solutions designed to meet the unique needs of your industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.industries.map((industry, index) => (
                <Link key={index} href="/erp">
                  <Card 
                    className="border-card-border bg-card hover-elevate cursor-pointer transform hover:scale-105 transition-all duration-300 h-full animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="text-3xl mb-4 transform hover:scale-110 transition-transform duration-300">
                        {industry.icon}
                      </div>
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
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <Card className="border-card-border bg-gradient-to-r from-primary/10 via-primary/5 to-orange-500/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-4 animate-fade-in-up">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
                  Join thousands of businesses that trust our {config.title.toLowerCase()} to drive their success. 
                  Start your journey today with a personalized demo.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
                  <Button 
                    size="lg"
                    onClick={handleBookDemo}
                    data-testid="button-cta-book-demo-erp"
                    className="flex items-center gap-2 relative overflow-hidden group"
                  >
                    {/* Animated gradient background - Keeping original pink/purple/blue */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    <Calendar className="h-5 w-5 relative z-10 text-white" />
                    <span className="relative z-10 text-white font-semibold">Schedule a Demo</span>
                  </Button>
                  
                  <Link href="/contact" data-testid="link-contact-erp">
                    <Button 
                      size="lg"
                      variant="outline"
                      className="flex items-center gap-2 relative overflow-hidden group border-primary"
                    >
                      {/* Animated gradient background - Keeping original pink/purple/blue */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
                      <span className="relative z-10 text-white font-semibold">Contact Sales</span>
                      <ArrowRight className="h-5 w-5 relative z-10 text-white" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />

      {/* Enhanced Animation Styles */}
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
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes count-up {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .group:hover .animate-gradient-x {
          animation: gradient-x 1.5s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 4s ease-in-out infinite 1s;
        }
        
        .animate-float-delayed-2 {
          animation: float 5s ease-in-out infinite 2s;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-count-up {
          animation: count-up 0.8s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in-up 0.4s ease-out forwards;
        }
        
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(241 245 249 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
}