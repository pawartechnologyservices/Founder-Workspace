// components/ui/SafeImage.tsx
import { Img } from "react-image";
import { useEffect, useRef, useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
}

const SafeImage = ({ src, alt, className }: SafeImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Img
      src={src}
      alt={alt}
      className={className}
      onLoad={() => {
        if (isMounted.current) {
          setLoaded(true);
        }
      }}
    />
  );
};

export default SafeImage;
