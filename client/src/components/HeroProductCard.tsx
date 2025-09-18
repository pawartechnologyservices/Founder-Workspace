import { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProductCardProps {
  shortName: string;
  fullName: string;
  description: string;
  href: string;
  index: number;
  delay?: number;
}

export default function HeroProductCard({ shortName, fullName, description, href, index, delay = 0 }: HeroProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleViewDetails = () => {
    console.log(`View ${shortName} details clicked`);
  };

  // Define colors based on index (matching the image)
  const backgroundColor =
    index === 0
      ? "bg-[#136bb4]" // CRM - dark blue
      : index === 1
      ? "bg-[#5b3dbd]" // ERP - dark purple
      : "bg-[#b72452]"; // Billing - dark pink/red

  const circleColor =
    index === 0
      ? "bg-[#0078d4]" // Blue circle for CRM
      : index === 1
      ? "bg-[#6b2dd6]" // Purple circle for ERP
      : "bg-[#e63757]"; // Pink circle for Billing

  return (
    <div
      className="animate-slide-in-from-bottom w-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Card
        className={`group relative overflow-hidden border-0 transition-all duration-300 hover:shadow-lg
          w-full max-w-[380px] h-[180px] md:max-w-[720px] md:h-[200px] ${backgroundColor}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-testid={`hero-card-${shortName.toLowerCase()}`}
      >
        {/* Circle in bottom right corner */}
        <div className={`absolute bottom-0 right-0 w-20 h-20 rounded-tl-full ${circleColor} opacity-20`}></div>

        <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full relative z-10">
          {/* Content */}
          <div>
           <div className="flex items-baseline whitespace-nowrap">
  <h3 className="text-lg md:text-xl font-medium text-white">
    {shortName}
  </h3>
  <span className="ml-2 text-sm md:text-base font-semibold text-white/60">
    {fullName}
  </span>
</div>


            {/* Description - now allowed to wrap naturally */}
            <p className="mt-2 text-sm md:text-base text-white leading-relaxed">
              {description}
            </p>
          </div>

          {/* Button */}
          <Link href={href} data-testid={`link-hero-card-${shortName.toLowerCase()}`}>
            <Button
              variant="ghost"
              className="px-0 text-sm md:text-base font-medium text-white hover:text-white border border-transparent hover:border-white transition-colors duration-300"
              onClick={handleViewDetails}
              data-testid={`button-view-details-${shortName.toLowerCase()}`}
            >
              View Details
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}