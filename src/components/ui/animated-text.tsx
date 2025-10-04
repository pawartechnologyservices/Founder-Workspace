
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  once?: boolean;
  direction?: "bottom" | "top" | "left" | "right";
  delay?: number;
}

const AnimatedText = ({
  text,
  className,
  speed = 0.05,
  once = true,
  direction = "bottom",
  delay = 0
}: AnimatedTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    if (hasAnimated && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            setHasAnimated(true);
            observer.disconnect();
          }
        } else {
          if (!once) {
            setIsInView(false);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [once, hasAnimated]);

  const getDirectionStyles = () => {
    switch (direction) {
      case "bottom":
        return "translate-y-8";
      case "top":
        return "-translate-y-8";
      case "left":
        return "-translate-x-8";
      case "right":
        return "translate-x-8";
      default:
        return "translate-y-8";
    }
  };

  return (
    <div ref={containerRef} className={cn("overflow-hidden", className)}>
      <div className="flex flex-wrap">
        {words.map((word, idx) => (
          <div key={idx} className="overflow-hidden mr-2 mb-2">
            <span
              className={cn(
                "inline-block transition-transform duration-700",
                isInView ? "translate-y-0 translate-x-0 opacity-100" : `${getDirectionStyles()} opacity-0`
              )}
              style={{ transitionDelay: `${delay + idx * speed}s` }}
            >
              {word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedText;
