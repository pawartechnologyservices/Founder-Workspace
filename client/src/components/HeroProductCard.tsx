import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, CreditCard, ArrowRight } from "lucide-react";

interface HeroProductCardProps {
  shortName: string;
  fullName: string;
  href: string;
  icon: "crm" | "erp" | "billing";
  delay?: number;
}

const iconMap = {
  crm: Users,
  erp: Building, 
  billing: CreditCard,
};

export default function HeroProductCard({ shortName, fullName, href, icon, delay = 0 }: HeroProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[icon];

  const handleViewProduct = () => {
    console.log(`View ${shortName} product clicked`);
  };

  return (
    <div 
      className="animate-slide-in-from-bottom"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card 
        className="group relative overflow-hidden border-card-border bg-card/80 backdrop-blur-sm hover-elevate transition-all duration-500 hover:scale-105 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-testid={`hero-card-${icon}`}
      >
        <CardContent className="p-6">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-500 ${
              isHovered ? "bg-primary scale-110 rotate-3" : ""
            }`}>
              <Icon className={`h-6 w-6 transition-all duration-500 ${
                isHovered ? "text-primary-foreground scale-110" : "text-primary"
              }`} />
            </div>
          </div>

          {/* Content */}
          <div className="text-center space-y-3">
            <h3 className="text-lg font-bold text-card-foreground transition-colors duration-300">
              {shortName}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {fullName}
            </p>
          </div>

          {/* Button */}
          <div className="mt-4">
            <Link href={href} data-testid={`link-hero-card-${icon}`}>
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full text-xs justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                onClick={handleViewProduct}
                data-testid={`button-view-product-${icon}`}
              >
                View Product
                <ArrowRight className={`h-3 w-3 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`} />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}