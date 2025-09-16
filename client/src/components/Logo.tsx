import logoImage from "@assets/logo_1758002139016.png";

interface LogoProps {
  className?: string;
  alt?: string;
}

export default function Logo({ className = "h-8 w-auto", alt = "Founder Workspace Logo" }: LogoProps) {
  return (
    <img 
      src={logoImage}
      alt={alt}
      className={className}
    />
  );
}