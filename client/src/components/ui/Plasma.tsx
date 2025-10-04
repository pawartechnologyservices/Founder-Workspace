import React, { useEffect, useRef } from "react";

interface PlasmaProps {
  color?: string;
  speed?: number;
  direction?: "forward" | "backward";
  scale?: number;
  opacity?: number;
  mouseInteractive?: boolean;
}

const Plasma: React.FC<PlasmaProps> = ({
  color = "#ff6b35",
  speed = 0.4,
  direction = "forward",
  scale = 1.0,
  opacity = 0.8,
  mouseInteractive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    const startTime = Date.now();

    const animate = () => {
      const time = (Date.now() - startTime) * 0.001 * speed;
      const dir = direction === "forward" ? 1 : -1;

      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const value =
            (Math.sin(x * 0.02 * scale + time * dir) +
              Math.sin(y * 0.02 * scale + time * dir) +
              Math.sin((x + y) * 0.02 * scale + time * dir)) /
            3;

          const r = Math.floor(255 * (0.5 + 0.5 * value));
          const g = Math.floor(128 + 127 * value);
          const b = Math.floor(200 - 100 * value);

          const idx = (y * width + x) * 4;
          data[idx] = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = opacity * 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    if (mouseInteractive) {
      const handleMouseMove = (e: MouseEvent) => {
        mouse.current.x = e.clientX / width - 0.5;
        mouse.current.y = e.clientY / height - 0.5;
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", resize);
    };
  }, [speed, direction, scale, opacity, mouseInteractive]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: "block" }}
    />
  );
};

export default Plasma;
