import React, { useRef, useEffect } from "react";

type GradientBlindsProps = {
  gradientColors?: string[];
  angle?: number;
  noise?: number;
  blindCount?: number;
  blindMinWidth?: number;
  spotlightRadius?: number;
  spotlightSoftness?: number;
  spotlightOpacity?: number;
  mouseDampening?: number;
  distortAmount?: number;
  shineDirection?: "left" | "right" | "top" | "bottom";
  mixBlendMode?: string;
};

const GradientBlinds: React.FC<GradientBlindsProps> = ({
  gradientColors = ["#FF9FFC", "#5227FF"],
  angle = 0,
  noise = 0.3,
  blindCount = 12,
  blindMinWidth = 50,
  spotlightRadius = 0.5,
  spotlightSoftness = 1,
  spotlightOpacity = 1,
  mouseDampening = 0.15,
  distortAmount = 0,
  shineDirection = "left",
  mixBlendMode = "lighten",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const spotlight = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Gradient background
      const grad = ctx.createLinearGradient(
        0,
        0,
        Math.cos(angle) * width,
        Math.sin(angle) * height
      );
      gradientColors.forEach((color, i) =>
        grad.addColorStop(i / (gradientColors.length - 1), color)
      );
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Blinds
      const blindWidth = Math.max(width / blindCount, blindMinWidth);
      ctx.save();
      ctx.globalCompositeOperation = mixBlendMode as GlobalCompositeOperation;
      for (let i = 0; i < blindCount; i++) {
        ctx.fillStyle =
          i % 2 === 0 ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.1)";
        ctx.fillRect(i * blindWidth, 0, blindWidth, height);
      }
      ctx.restore();

      // Spotlight following mouse
      spotlight.current.x = lerp(
        spotlight.current.x,
        mouse.current.x,
        mouseDampening
      );
      spotlight.current.y = lerp(
        spotlight.current.y,
        mouse.current.y,
        mouseDampening
      );

      const spotlightGrad = ctx.createRadialGradient(
        spotlight.current.x,
        spotlight.current.y,
        0,
        spotlight.current.x,
        spotlight.current.y,
        spotlightRadius * Math.max(width, height)
      );
      spotlightGrad.addColorStop(
        0,
        `rgba(255,255,255,${spotlightOpacity})`
      );
      spotlightGrad.addColorStop(1, "transparent");

      ctx.fillStyle = spotlightGrad;
      ctx.fillRect(0, 0, width, height);

      animationFrame = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [
    gradientColors,
    angle,
    noise,
    blindCount,
    blindMinWidth,
    spotlightRadius,
    spotlightSoftness,
    spotlightOpacity,
    mouseDampening,
    distortAmount,
    shineDirection,
    mixBlendMode,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full absolute top-0 left-0"
      style={{ mixBlendMode }}
    />
  );
};

export default GradientBlinds;
