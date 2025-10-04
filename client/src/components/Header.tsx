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
          
          {/* Left side - Logo and Mobile Theme Toggle */}
          <div className="flex items-center">
            {/* Logo shifted more left */}
            <Link href="/">
              <div className="flex items-center px-0 py-1 cursor-pointer -ml-2">
                <div className="h-12 w-auto">
                  <Logo className="h-full w-auto" />
                </div>
              </div>
            </Link>
          </div>

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
                    <div className="w-[300px] p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
                      {products.map((product) => {
                        const Icon = product.icon;
                        return (
                          <Link key={product.title} href={product.href}>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-600 shadow-sm 
                                            hover:shadow-lg hover:border-primary/40 hover:scale-[1.02] 
                                            transition-all cursor-pointer mb-2 group">
                              <div className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="font-medium text-gray-900 dark:text-white">{product.title}</div>
                                <div className="text-xs text-gray-600 dark:text-gray-300">{product.desc}</div>
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
            <Button 
              onClick={handleBookMeet} 
              className="flex items-center gap-2 relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
              <Calendar className="h-4 w-4 relative z-10 text-white" />
              <span className="relative z-10 text-white font-semibold">Book a Meet</span>
            </Button>
          </div>

          {/* Mobile Right Side - Theme Toggle and Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle moved closer to hamburger */}
            <div className="mr-2">
              <ThemeToggle />
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            {/* Background with gradient and subtle pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.1),transparent_50%)]"></div>
            </div>
            
            <nav className="relative flex flex-col p-6 space-y-4">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location === "/" 
                      ? "text-primary bg-primary/20 border border-primary/20 shadow-sm" 
                      : "text-foreground hover:text-primary hover:bg-primary/10 hover:border hover:border-primary/10"
                  }`}
                >
                  Home
                </span>
              </Link>

              {/* Products */}
              <div className="border-t border-border/50 pt-4">
                <div className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Products</div>
                <div className="space-y-2">
                  {products.map((product) => {
                    const Icon = product.icon;
                    return (
                      <Link key={product.title} href={product.href} onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="flex items-center gap-3 px-4 py-3 text-base rounded-lg hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/10 transition-all cursor-pointer text-gray-900 dark:text-white">
                          <Icon className="h-5 w-5" />
                          {product.title}
                          <span className="ml-auto text-xs text-muted-foreground">→</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)}>
                <span
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location === "/faq" 
                      ? "text-primary bg-primary/20 border border-primary/20 shadow-sm" 
                      : "text-foreground hover:text-primary hover:bg-primary/10 hover:border hover:border-primary/10"
                  }`}
                >
                  FAQ
                </span>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <span
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location === "/contact"
                      ? "text-primary bg-primary/20 border border-primary/20 shadow-sm" 
                      : "text-foreground hover:text-primary hover:bg-primary/10 hover:border hover:border-primary/10"
                  }`}
                >
                  Contact
                </span>
              </Link>

              {/* Mobile Bottom */}
              <div className="flex flex-col gap-3 pt-6 border-t border-border/50">
                <Button 
                  onClick={() => {
                    handleBookMeet();
                    setIsMobileMenuOpen(false);
                  }} 
                  className="flex items-center justify-center gap-2 w-full relative overflow-hidden group py-4 text-base"
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 group-hover:animate-gradient-x transition-all duration-1000"></div>
                  <Calendar className="h-5 w-5 relative z-10 text-white" />
                  <span className="relative z-10 text-white font-semibold">Book a Meet</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

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
    </>
  );
} 