import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        message: ""
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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help. Reach out to us with any questions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      data-testid="input-full-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full flex items-center justify-center gap-2 relative overflow-hidden group"
                    disabled={isSubmitting}
                    data-testid="button-send-message"
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    {isSubmitting ? (
                      <span className="relative z-10 text-white font-semibold">Sending...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4 relative z-10 text-white" />
                        <span className="relative z-10 text-white font-semibold">Send Message</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team is here to help you choose the right software solution for your business. 
                  Reach out to schedule a demo or discuss your specific requirements.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email Us</h3>
                    <a 
                      href="mailto:support@foundersworkspace.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      hello@foundersworkspace.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Call Us</h3>
                    <a 
                      href="tel:+919876543210" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +91 9096649556
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">Office No A1002 Boulevard Towers,Sadhu Vaswani Chowk, Camp,Pune, Maharashtra,411001,India</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover-elevate transition-all duration-300 group relative overflow-hidden"
                    data-testid="link-linkedin"
                  >
                    <div className="absolute inset-0 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    <Linkedin className="h-5 w-5 relative z-10" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover-elevate transition-all duration-300 group relative overflow-hidden"
                    data-testid="link-twitter"
                  >
                    <div className="absolute inset-0 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    <Twitter className="h-5 w-5 relative z-10" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover-elevate transition-all duration-300 group relative overflow-hidden"
                    data-testid="link-facebook"
                  >
                    <div className="absolute inset-0 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    <Facebook className="h-5 w-5 relative z-10" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover-elevate transition-all duration-300 group relative overflow-hidden"
                    data-testid="link-instagram"
                  >
                    <div className="absolute inset-0 group-hover:animate-gradient-x transition-all duration-1000"></div>
                    <Instagram className="h-5 w-5 relative z-10" />
                  </a>
                </div>
              </div>
            </div>
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