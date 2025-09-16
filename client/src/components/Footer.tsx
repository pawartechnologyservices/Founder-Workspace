import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Users, Building, CreditCard } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const softwareLinks = [
  { label: "CRM Software", href: "/crm", icon: Users },
  { label: "ERP Software", href: "/erp", icon: Building },
  { label: "Billing Software", href: "/billing", icon: CreditCard },
];

const contactInfo = [
  { icon: Mail, label: "hello@founderworkspace.com" },
  { icon: Phone, label: "+1 (555) 123-4567" },
  { icon: MapPin, label: "San Francisco, CA" },
];

export default function Footer() {
  const handleNewsletterSignup = () => {
    console.log("Newsletter signup clicked");
    // TODO: Implement newsletter signup functionality
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" data-testid="link-footer-home">
                <div className="flex items-center space-x-2 mb-6 hover-elevate active-elevate-2 rounded-md px-2 py-1 w-fit">
                  <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">FW</span>
                  </div>
                  <span className="font-semibold text-lg text-foreground">Founder Workspace</span>
                </div>
              </Link>
              
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Empowering businesses with intelligent software solutions. We specialize in CRM, ERP, 
                and Billing systems that drive growth and operational excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Icon className="h-4 w-4 text-primary" />
                      <span>{contact.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Quick Links</h3>
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <Link key={link.href} href={link.href} data-testid={`link-footer-${link.label.toLowerCase()}`}>
                    <div className="text-sm text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors w-fit">
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Software Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-6">Our Software</h3>
              <div className="space-y-4">
                {softwareLinks.map((software) => {
                  const Icon = software.icon;
                  return (
                    <Link key={software.href} href={software.href} data-testid={`link-footer-${software.href.replace('/', '')}`}>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors w-fit">
                        <Icon className="h-4 w-4" />
                        {software.label}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Newsletter & Bottom */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <h4 className="font-medium text-foreground mb-2">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest updates on our software solutions and industry insights.
              </p>
              <Button 
                onClick={handleNewsletterSignup}
                data-testid="button-newsletter-signup"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Subscribe to Newsletter
              </Button>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 Founder Workspace. All rights reserved.
              </p>
              <div className="flex items-center justify-center lg:justify-end gap-6 mt-2">
                <Link href="/privacy" data-testid="link-footer-privacy">
                  <span className="text-xs text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors">
                    Privacy Policy
                  </span>
                </Link>
                <Link href="/terms" data-testid="link-footer-terms">
                  <span className="text-xs text-muted-foreground hover:text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors">
                    Terms of Service
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}