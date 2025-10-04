
import { useRef, useState, useEffect } from "react";

interface ImageMarqueeProps {
  images: string[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

const ImageMarquee = ({
  images,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
}: ImageMarqueeProps) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [duplicatedImages, setDuplicatedImages] = useState<string[]>([]);

  // Duplicate the images to create a seamless loop
  useEffect(() => {
    setDuplicatedImages([...images, ...images, ...images]);
  }, [images]);

  const directionMultiplier = direction === "left" ? -1 : 1;
  const speedStyle = {
    animationDuration: `${100 / speed}s`,
    animationDirection: direction === "left" ? "normal" : "reverse",
    animationPlayState: isPaused ? "paused" : "running",
  };

  return (
    <div 
      className="w-full overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div 
        ref={marqueeRef}
        className="flex animate-marquee whitespace-nowrap py-4"
        style={speedStyle}
      >
        {duplicatedImages.map((image, index) => (
          <div 
            key={`${image}-${index}`} 
            className="mx-4 flex-shrink-0"
          >
            <img 
              src={image} 
              alt={`Marquee image ${index}`}
              className="h-24 w-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
