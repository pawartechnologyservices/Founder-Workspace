import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  const handleContactSubmit = () => {
    console.log("Contact form submitted");
    // TODO: Implement contact form functionality
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
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Contact Our Team
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business? Let's discuss how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team is here to help you choose the right software solution for your business. 
                  Reach out to schedule a demo or discuss your specific requirements.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">hello@founderworkspace.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={handleContactSubmit}
                  data-testid="button-schedule-meeting"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule a Meeting
                </Button>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <Card className="border-card-border bg-card">
              <CardContent className="p-12 text-center">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Contact Form Coming Soon
                </h3>
                <p className="text-muted-foreground mb-8">
                  We're building an advanced contact form to make it easier for you to reach us.
                </p>
                <Button 
                  variant="outline"
                  onClick={handleContactSubmit}
                  data-testid="button-contact-placeholder"
                >
                  Get Notified When Ready
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}