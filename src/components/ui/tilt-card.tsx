
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
  scale?: number;
  speed?: number;
  perspective?: number;
  border?: boolean;
  borderColor?: string;
  glareEnabled?: boolean;
  glarePosition?: string;
  glareMaxOpacity?: number;
}

const TiltCard = ({
  children,
  className,
  max = 10,
  scale = 1.05,
  speed = 1000,
  perspective = 1000,
  border = false,
  borderColor = "rgba(255, 255, 255, 0.2)",
  glareEnabled = false,
  glarePosition = "all",
  glareMaxOpacity = 0.2,
}: TiltCardProps) => {
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  });
  const [glareStyle, setGlareStyle] = useState({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 100%)",
    transform: "translateY(-100%)",
    opacity: "0",
    transition: `transform ${speed}ms ease-out`,
  });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const centerX = width / 2;
    const centerY = height / 2;
    
    const rotateX = ((y - centerY) / centerY) * max;
    const rotateY = -((x - centerX) / centerX) * max;

    // Apply tilt transform
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
    });

    // If glare is enabled, update glare position
    if (glareEnabled) {
      const glareX = (x / width) * 100;
      const glareY = (y / height) * 100;
      
      let glareTransform = "";
      
      switch (glarePosition) {
        case "top":
          glareTransform = `translateY(${glareY - 100}%)`;
          break;
        case "right":
          glareTransform = `translateX(${glareX}%)`;
          break;
        case "bottom":
          glareTransform = `translateY(${glareY}%)`;
          break;
        case "left":
          glareTransform = `translateX(${glareX - 100}%)`;
          break;
        default:
          // For "all" position, we'll use both X and Y
          glareTransform = `translateX(${glareX - 50}%) translateY(${glareY - 50}%)`;
      }
      
      setGlareStyle(prev => ({
        ...prev,
        transform: glareTransform,
        opacity: String(glareMaxOpacity),
      }));
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset to default position
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    });
    
    if (glareEnabled) {
      setGlareStyle(prev => ({
        ...prev,
        transform: "translateY(-100%)",
        opacity: "0",
      }));
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden transition-transform duration-300 ease-out",
        border && "border",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
        ...tiltStyle,
        borderColor: border ? borderColor : "transparent",
        transition: !isHovering ? `transform ${speed}ms ease-out` : "",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {glareEnabled && <div style={glareStyle as React.CSSProperties} />}
      {children}
    </div>
  );
};

export default TiltCard;
