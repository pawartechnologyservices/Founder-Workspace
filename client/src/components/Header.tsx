import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, X, Calendar } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const products = [
  {
    title: "CRM Software",
    description: "Customer Relationship Management",
    href: "/crm",
  },
  {
    title: "ERP Software", 
    description: "Enterprise Resource Planning",
    href: "/erp",
  },
  {
    title: "Billing Software",
    description: "Simplify Invoicing & Payments", 
    href: "/billing",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const handleBookMeet = () => {
    console.log("Book a Meet clicked - would open scheduling system");
    // TODO: Integrate with real meeting scheduling system
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" data-testid="link-home">
          <div className="flex items-center space-x-3 hover-elevate active-elevate-2 rounded-md px-2 py-1">
            <Logo />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" data-testid="link-nav-home">
            <span className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
              location === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}>
              Home
            </span>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger data-testid="button-products-dropdown" className="text-sm font-medium">
                  Products <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-96 p-4">
                    <div className="grid gap-3">
                      {products.map((product) => (
                        <div key={product.href}>
                          <Link href={product.href} data-testid={`link-product-${product.href.replace('/', '')}`}>
                            <div className="block space-y-1 rounded-md p-3 hover-elevate active-elevate-2">
                              <div className="text-sm font-medium leading-none">{product.title}</div>
                              <p className="text-sm leading-snug text-muted-foreground">
                                {product.description}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/faq" data-testid="link-nav-faq">
            <span className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
              location === "/faq" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}>
              FAQ
            </span>
          </Link>

          <Link href="/contact" data-testid="link-nav-contact">
            <span className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
              location === "/contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}>
              Contact
            </span>
          </Link>
        </nav>

        {/* Book a Meet Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button onClick={handleBookMeet} data-testid="button-book-meet" className="flex items-center gap-2">
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
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" data-testid="link-mobile-home" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="block py-2 text-sm font-medium hover-elevate active-elevate-2 px-3 rounded-md">Home</div>
            </Link>
            
            <div className="space-y-2">
              <div className="text-sm font-medium text-muted-foreground px-3">Products</div>
              {products.map((product) => (
                <Link 
                  key={product.href} 
                  href={product.href} 
                  data-testid={`link-mobile-${product.href.replace('/', '')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="block py-2 pl-6 pr-3 text-sm hover-elevate active-elevate-2 rounded-md">
                    <div className="font-medium">{product.title}</div>
                    <div className="text-xs text-muted-foreground">{product.description}</div>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/faq" data-testid="link-mobile-faq" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="block py-2 text-sm font-medium hover-elevate active-elevate-2 px-3 rounded-md">FAQ</div>
            </Link>

            <Link href="/contact" data-testid="link-mobile-contact" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="block py-2 text-sm font-medium hover-elevate active-elevate-2 px-3 rounded-md">Contact</div>
            </Link>

            <div className="pt-4 border-t space-y-4">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <Button onClick={handleBookMeet} data-testid="button-mobile-book-meet" className="w-full flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" />
                Book a Meet
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}