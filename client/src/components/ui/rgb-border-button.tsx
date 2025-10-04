
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RgbBorderButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

const RgbBorderButton = ({ children, className, ...props }: RgbBorderButtonProps) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt mt-3"></div>
      <Button 
        className={cn("relative px-6 py-2 bg-black border-0 rounded-lg text-white", className)} 
        {...props}
      >
        {children}
      </Button>
    </div>
  );
};

export default RgbBorderButton;
