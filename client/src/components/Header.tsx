import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Menu,
  X,
  Calendar,
  Users,
  Building2,
  DollarSign,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleBookMeet = () => setLocation("/book-meeting");

  const products = [
    { 
      title: "CRM", 
      desc: "Customer relationship management",
      icon: Users,
      href: "/crm-welcome" 
    },
    { 
      title: "ERP", 
      desc: "Enterprise resource planning",
      icon: Building2,
      href: "/erp-welcome" 
    },
    { 
      title: "Billing", 
      desc: "Invoicing and payment processing",
      icon: DollarSign,
      href: "/billing-welcome" 
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-3 px-2 py-1 cursor-pointer">
              <div className="h-12 w-auto">
                <Logo className="h-full w-auto" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  location === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </span>
            </Link>

            {/* Products Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 space-y-2">
                      {products.map((product) => {
                        const Icon = product.icon;
                        return (
                          <Link key={product.title} href={product.href}>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-card border shadow-sm hover:shadow-lg hover:border-primary/40 hover:scale-[1.02] transition-all cursor-pointer">
                              <div className="p-2 rounded-md bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="font-medium">{product.title}</div>
                                <div className="text-xs text-muted-foreground">
                                  {product.desc}
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Other Nav */}
            <Link href="/faq">
              <span
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  location === "/faq" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                FAQ
              </span>
            </Link>
            <Link href="/contact">
              <span
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                  location === "/contact"
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Contact
              </span>
            </Link>
          </nav>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button onClick={handleBookMeet} className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Book a Meet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t shadow-lg absolute top-16 left-0 w-full z-40">
            <nav className="flex flex-col p-4 space-y-3">
              <Link href="/">
                <span
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    location === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Home
                </span>
              </Link>

              {/* Products */}
              <div className="border-t pt-3">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Products</div>
                <div className="space-y-1">
                  {products.map((product) => {
                    const Icon = product.icon;
                    return (
                      <Link key={product.title} href={product.href}>
                        <div className="flex items-center gap-3 px-3 py-2 text-sm rounded-md hover:bg-muted/30 cursor-pointer">
                          <Icon className="h-4 w-4" />
                          {product.title}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link href="/faq">
                <span
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    location === "/faq" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  FAQ
                </span>
              </Link>
              <Link href="/contact">
                <span
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    location === "/contact"
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Contact
                </span>
              </Link>

              {/* Mobile Bottom */}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <ThemeToggle />
                <Button onClick={handleBookMeet} className="flex items-center gap-2 w-full mt-2">
                  <Calendar className="h-4 w-4" />
                  Book a Meet
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}