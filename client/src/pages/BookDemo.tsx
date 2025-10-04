import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Building, CreditCard, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const productOptions = [
  { value: "crm", label: "CRM Software", icon: Users },
  { value: "erp", label: "ERP Software", icon: Building },
  { value: "billing", label: "Billing Software", icon: CreditCard },
  { value: "all", label: "All Products", icon: CheckCircle2 }
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

export default function BookDemo() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    preferredDate: "",
    preferredTime: "",
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Demo Scheduled!",
        description: `Thank you ${formData.fullName}! We'll send you a confirmation email with the demo details.`,
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        product: "",
        preferredDate: "",
        preferredTime: "",
        requirements: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Calendar className="h-3 w-3 mr-1" />
              Schedule Demo
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Book a Product Demo
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See our software solutions in action. Schedule a personalized demo and discover how we can transform your business operations.
            </p>
          </div>

          {/* Demo Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                Schedule Your Demo
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and our team will contact you to confirm your demo session.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      data-testid="input-demo-full-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your business email"
                      required
                      data-testid="input-demo-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                      required
                      data-testid="input-demo-company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      data-testid="input-demo-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Product of Interest *</Label>
                  <Select value={formData.product} onValueChange={(value) => handleSelectChange("product", value)}>
                    <SelectTrigger data-testid="select-demo-product">
                      <SelectValue placeholder="Select the product you'd like to see" />
                    </SelectTrigger>
                    <SelectContent>
                      {productOptions.map((option) => {
                        const Icon = option.icon;
                        return (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4" />
                              {option.label}
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      data-testid="input-demo-date"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleSelectChange("preferredTime", value)}>
                      <SelectTrigger data-testid="select-demo-time">
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {time}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Specific Requirements (Optional)</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                    placeholder="Tell us about your specific needs, team size, or any particular features you'd like to see..."
                    rows={4}
                    data-testid="textarea-demo-requirements"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 relative overflow-hidden group"
                    disabled={isSubmitting}
                    size="lg"
                    data-testid="button-schedule-demo"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    {isSubmitting ? (
                      <span className="relative z-10 text-white font-semibold">Scheduling Demo...</span>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5 relative z-10 text-white" />
                        <span className="relative z-10 text-white font-semibold">Schedule Demo</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* What to Expect */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  What to Expect in Your Demo
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Personalized Walkthrough</h4>
                    <p className="text-muted-foreground text-sm">
                      Our expert will tailor the demo to your specific business needs and use cases.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">45-Minute Session</h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive overview of features with time for Q&A and discussion.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">No Commitment</h4>
                    <p className="text-muted-foreground text-sm">
                      Explore our solutions with no pressure. Take your time to make the right decision.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />

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
    </div>
  );
}