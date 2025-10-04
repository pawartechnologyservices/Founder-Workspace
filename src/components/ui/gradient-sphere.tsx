
import React from "react";

interface GradientSphereProps {
  index: number;
  mousePosition: { x: number; y: number };
}

export const GradientSphere: React.FC<GradientSphereProps> = ({ index, mousePosition }) => {
  // Generate random positions and properties for each sphere
  const randomX = React.useMemo(() => Math.random() * 100, []);
  const randomY = React.useMemo(() => Math.random() * 100, []);
  const randomSize = React.useMemo(() => Math.random() * 300 + 50, []);
  const randomScale = React.useMemo(() => 0.4 + Math.random() * 0.6, []);
  const randomOpacity = React.useMemo(() => 0.05 + Math.random() * 0.1, []);
  const randomAnimationDuration = React.useMemo(() => 8 + Math.random() * 10, []);
  const randomDelay = React.useMemo(() => Math.random() * 5, []);
  
  // Choose gradient colors based on index
  const getGradient = () => {
    const gradients = [
      "from-blue-600 to-purple-600",
      "from-pink-600 to-blue-600",
      "from-purple-600 to-indigo-600",
      "from-indigo-600 to-cyan-600",
      "from-cyan-600 to-green-600"
    ];
    return gradients[index % gradients.length];
  };
  
  // Add subtle movement based on mouse position
  const offsetX = mousePosition.x * 20 - 10;
  const offsetY = mousePosition.y * 20 - 10;
  
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-r ${getGradient()}`}
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        transform: `translate(-50%, -50%) scale(${randomScale}) translate(${offsetX}px, ${offsetY}px)`,
        opacity: randomOpacity,
        filter: 'blur(70px)',
        animation: `pulse ${randomAnimationDuration}s infinite alternate ${randomDelay}s`,
        transition: 'transform 0.5s ease-out'
      }}
    />
  );
};
