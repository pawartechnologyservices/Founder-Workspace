
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  direction = "up",
  className,
  duration = 500,
  delay = 0,
  threshold = 0.1,
  once = true
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            setHasAnimated(true);
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once, hasAnimated]);

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "-translate-y-10";
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      case "none":
        return "";
      default:
        return "translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all",
        isVisible
          ? "opacity-100 translate-x-0 translate-y-0"
          : `opacity-0 ${getDirectionClasses()}`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionProperty: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
