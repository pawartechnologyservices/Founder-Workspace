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
  ChevronDown,
  Calendar,
  Briefcase,
  Building2,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Home,
  DollarSign,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

// Industry Data
const crmIndustries = [
  { title: "Healthcare", desc: "Patient care & communication", icon: Stethoscope, href: "#" },
  { title: "Education", desc: "Enrollment & student management", icon: GraduationCap, href: "#" },
  { title: "Retail", desc: "Customer insights & loyalty", icon: ShoppingCart, href: "#" },
  { title: "Finance", desc: "Client portfolio tracking", icon: DollarSign, href: "#" },
  { title: "Manufacturing", desc: "B2B relationship management", icon: Building2, href: "#" },
  { title: "Real Estate", desc: "Property inquiries & sales", icon: Home, href: "#" },
];

const erpIndustries = [
  { title: "Automotive", desc: "Supply chain & production", icon: Briefcase, href: "#" },
  { title: "Logistics", desc: "Fleet & warehouse mgmt", icon: Building2, href: "#" },
  { title: "Hospitality", desc: "Guest experiences", icon: Home, href: "#" },
  { title: "Construction", desc: "Project tracking", icon: Briefcase, href: "#" },
  { title: "Energy", desc: "Operations & compliance", icon: Building2, href: "#" },
  { title: "Telecom", desc: "Service mgmt", icon: Briefcase, href: "#" },
];

const billingIndustries = [
  { title: "Freelancers", desc: "Invoices & payments", icon: Briefcase, href: "#" },
  { title: "Agencies", desc: "Multi-client billing", icon: Building2, href: "#" },
  { title: "SaaS", desc: "Subscriptions & recurring", icon: DollarSign, href: "#" },
  { title: "E-commerce", desc: "Online store billing", icon: ShoppingCart, href: "#" },
  { title: "Consulting", desc: "Project invoicing", icon: Briefcase, href: "#" },
  { title: "Healthcare Billing", desc: "Medical billing systems", icon: Stethoscope, href: "#" },
];

const products = [
  { title: "CRM Software", industries: crmIndustries },
  { title: "ERP Software", industries: erpIndustries },
  { title: "Billing Software", industries: billingIndustries },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openProduct, setOpenProduct] = useState<string | null>(null);
  const [location, setLocation] = useLocation();

  const handleBookMeet = () => setLocation("/book-meeting");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" data-testid="link-home">
          <div className="flex items-center space-x-3 px-2 py-1">
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
                  <div className="w-[620px] p-4 space-y-4">
                    {products.map((product) => (
                      <div
                        key={product.title}
                        className="rounded-lg bg-muted/40 hover:bg-muted/60 transition-all shadow-sm"
                      >
                        {/* Product Button */}
                        <button
                          onClick={() =>
                            setOpenProduct(openProduct === product.title ? null : product.title)
                          }
                          className="w-full flex items-center justify-between text-left px-4 py-3 font-semibold text-foreground"
                        >
                          <span>{product.title}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              openProduct === product.title ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </button>

                        {/* Dropdown Industries */}
                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden ${
                            openProduct === product.title
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="grid grid-cols-2 gap-4 p-4 animate-fadeIn">
                            {product.industries.map((industry, i) => {
                              const Icon = industry.icon;
                              return (
                                <a
                                  key={industry.title}
                                  href={industry.href}
                                  className="flex items-start gap-3 p-3 rounded-lg bg-card border shadow-sm hover:shadow-lg hover:border-primary/40 hover:scale-[1.02] transition-all"
                                  style={{ animationDelay: `${i * 80}ms` }}
                                >
                                  <div className="p-2 rounded-md bg-primary/10 text-primary">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <div>
                                    <div className="font-medium">{industry.title}</div>
                                    <div className="text-xs text-muted-foreground">
                                      {industry.desc}
                                    </div>
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
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

            {/* Products with collapsible */}
            {products.map((product) => (
              <div key={product.title}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md hover:bg-muted/40"
                  onClick={() =>
                    setOpenProduct(openProduct === product.title ? null : product.title)
                  }
                >
                  {product.title}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openProduct === product.title ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {openProduct === product.title && (
                  <div className="ml-4 mt-2 space-y-2">
                    {product.industries.map((ind) => (
                      <a
                        key={ind.title}
                        href={ind.href}
                        className="block px-3 py-2 text-sm text-muted-foreground rounded-md hover:bg-muted/30"
                      >
                        {ind.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

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
  );
}
