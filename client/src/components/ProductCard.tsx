import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Building, CreditCard } from "lucide-react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  icon: "crm" | "erp" | "billing";
  features?: string[];
}

const iconMap = {
  crm: Users,
  erp: Building, 
  billing: CreditCard,
};

export default function ProductCard({ title, subtitle, description, href, icon, features = [] }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[icon];

  const handleLearnMore = () => {
    console.log(`Learn more about ${title} clicked`);
  };

  return (
    <Card 
      className="group relative overflow-hidden border-card-border bg-card hover-elevate transition-all duration-300 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${icon}`}
    >
      <CardContent className="p-8 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div className={`w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "bg-primary scale-110" : ""
          }`}>
            <Icon className={`h-8 w-8 transition-colors duration-300 ${
              isHovered ? "text-primary-foreground" : "text-primary"
            }`} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-2">{title}</h3>
            <Badge variant="secondary" className="mb-3">
              {subtitle}
            </Badge>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-card-foreground">Key Features:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action */}
        <div className="mt-6 pt-4 border-t border-card-border">
          <Link href={href} data-testid={`link-product-card-${icon}`}>
            <Button 
              variant="ghost" 
              className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              onClick={handleLearnMore}
              data-testid={`button-learn-more-${icon}`}
            >
              Learn More
              <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`} />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}