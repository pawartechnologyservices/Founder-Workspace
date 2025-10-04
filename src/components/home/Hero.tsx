import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedText from "@/components/ui/animated-text";
import RgbBorderButton from "@/components/ui/rgb-border-button";
import { GradientSphere } from "@/components/ui/gradient-sphere";

interface HeroProps {
  onDemoClick: () => void;
}

const Hero = ({ onDemoClick }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const bookmanStyle = {
    fontFamily: '"Bookman Old Style", Bookman, "URW Bookman L", "Palatino Linotype", serif',
    fontWeight: 700,
    letterSpacing: '0.03em',
    lineHeight: 1.1
  };

  const mobileBookmanStyle = {
    fontFamily: '"Bookman Old Style", Bookman, "URW Bookman L", "Palatino Linotype", serif',
    fontWeight: 400,
    letterSpacing: '0.02em',
    lineHeight: 1.3
  };

  const softwareCards = [
    {
      title: "CRM",
      subtitle: "Customer Relationship Management",
      description: "Streamline your lead pipeline with intelligent tracking and automation",
      color: "from-cyan-500 to-blue-600",
      link: "https://pts-crm-software.netlify.app/"
    },
    {
      title: "ERP",
      subtitle: "Enterprise Resource Planning",
      description: "Comprehensive business management for seamless operations",
      color: "from-purple-500 to-indigo-600",
      link: "https://pts-erp-systeme.netlify.app/"
    },
    {
      title: "Billing System",
      subtitle: "Smart Financial Operations",
      description: "Automated invoicing, payments and financial reporting",
      color: "from-pink-500 to-rose-600",
      link: "https://pts-billing-system.netlify.app/",
    }
  ];

  return (
    <div
      ref={heroRef}
      className="relative min-h-[100vh] flex flex-col lg:flex-row justify-center items-center overflow-hidden pt-16 w-full"
      style={{
        background: 'linear-gradient(135deg, #000000, #0f172a)',
        perspective: '1000px'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: isMobile ? 15 : 30 }).map((_, i) => (
            <GradientSphere
              key={i}
              index={i}
              mousePosition={mousePosition}
              size={isMobile ? 100 : 200}
            />
          ))}
        </div>

        {!isMobile && (
          <>
            <div
              className="absolute inset-0 grid grid-cols-10 grid-rows-10 transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${(mousePosition.y - 0.5) * -15}deg) rotateY(${(mousePosition.x - 0.5) * 15}deg)`,
                transformStyle: 'preserve-3d',
                perspective: '1200px'
              }}
            >
              {Array.from({ length: 100 }).map((_, i) => {
                const row = Math.floor(i / 10);
                const col = i % 10;
                return (
                  <div
                    key={i}
                    className="border border-white/5 transition-opacity duration-300"
                    style={{
                      opacity: 0.05 + (Math.abs(mousePosition.x - col / 10) + Math.abs(mousePosition.y - row / 10)) * 0.15
                    }}
                  />
                );
              })}
            </div>

            {/* Animated connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {Array.from({ length: 8 }).map((_, i) => {
                const x1 = Math.random() * 100;
                const y1 = Math.random() * 100;
                const x2 = Math.random() * 100;
                const y2 = Math.random() * 100;
                return (
                  <line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;50"
                      dur={`${Math.random() * 10 + 10}s`}
                      repeatCount="indefinite"
                    />
                  </line>
                );
              })}
            </svg>
          </>
        )}

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: isMobile ? 20 : 40 }).map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-10 z-10 flex flex-col lg:flex-row items-center justify-between w-full py-8 lg:py-0">
        {isMobile ? (
          <div className="w-full px-4 text-center mt-8 mb-6">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-white mb-8  leading-tight px-2" style={mobileBookmanStyle}>
                A unified Software Suite built to run your Business
              </h1>
              
              <p className="text-base text-gray-300 mb-6 leading-relaxed px-4" style={mobileBookmanStyle}>
                A powerful, privacy-first platform crafted for founders, startups, and scale-ups.
              </p>
              
              <div className="w-full  px-2 flex flex-col items-center gap-4 mb-5 ">
                <RgbBorderButton
                  onClick={onDemoClick}
                  size="md"
                  className="text-white w-full max-w-xs hover:scale-[1.02] transition-transform duration-300"
                  style={mobileBookmanStyle}
                >
                  Request a Demo
                </RgbBorderButton>
                
                    <RgbBorderButton
                  onClick={onDemoClick}
                  size="md"
                  className="text-white w-full mt-5 max-w-xs hover:scale-[1.02] transition-transform duration-300"
                  style={mobileBookmanStyle}
                >
                  Founders Club - Coming Soon
                </RgbBorderButton>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl lg:max-w-2xl text-left mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold leading-tight">
              <div className="flex flex-col items-start">
                <AnimatedText
                  text="A unified Software Suite built to run your business"
                  className="mb-0"
                  delay={0.1}
                  style={{
                    ...bookmanStyle,
                    background: 'linear-gradient(90deg, #ff4d4d, #f9cb28, #4facfe)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    textShadow: '0 0 15px rgba(255, 77, 77, 0.5)',
                    animation: 'rgbShift 5s infinite alternate'
                  }}
                />
              </div>
            </h1>

            <AnimatedText
              text="A powerful, privacy-first platform crafted for founders, startups, and scale-ups. From education and operations to billing and productivity—Founders Club powers your journey."
              className="text-lg text-gray-300 mt-4 mb-8 mx-auto lg:mx-0 leading-relaxed"
              delay={1}
              style={{
                fontFamily: '"Bookman Old Style", Bookman, "URW Bookman L", serif',
                fontWeight: 300,
                letterSpacing: '0.03em'
              }}
            />

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <RgbBorderButton
                onClick={onDemoClick}
                size="lg"
                className="text-white hover:scale-[1.02] transition-transform duration-300"
                style={bookmanStyle}
              >
                Request a Demo
              </RgbBorderButton>
              
             <RgbBorderButton
                onClick={onDemoClick}
                size="lg"
                className="text-white hover:scale-[1.02] transition-transform duration-300"
                style={bookmanStyle}
              >
                  Founders Club - Coming Soon
              </RgbBorderButton>
            </div>
          </div>
        )}

        {/* Software Cards - Desktop View */}
        {!isMobile && (
          <div className="relative w-full max-w-md xl:max-w-md mb-12 mr-16 ml-8">
            <div className="relative space-y-4">
              {softwareCards.map((card, index) => (
                <div
                  key={index}
                  className={`relative p-5 rounded-xl bg-gradient-to-br ${card.color} border border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
                  style={{
                    boxShadow: `0 8px 20px -5px ${index === 0 ? 'rgba(0, 194, 255, 0.3)' : index === 1 ? 'rgba(124, 58, 237, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
                    transform: activeCard === index ? 'translateY(-3px)' : 'none',
                    zIndex: activeCard === index ? 10 : 1
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-white mr-2">{card.title}</h3>
                      <span className="text-xs text-white/80">{card.subtitle}</span>
                    </div>
                    <p className="text-white/90 text-sm mb-3">{card.description}</p>
                    <Link to={card.link}>
                      <button className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md transition-colors duration-200 border border-white/20">
                        View Details →
                      </button>
                    </Link>
                  </div>
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Software Cards - Mobile View */}
      {isMobile && (
        <div className="w-full px-4 mb-8 z-10 mt-4">
        
          <div className="grid grid-cols-1 gap-4 px-4">
            {softwareCards.map((card, index) => (
              <Link to={card.link} key={index} className="block">
                <div
                  className={`relative p-5 rounded-xl bg-gradient-to-br ${card.color} border border-white/10 overflow-hidden transition-transform duration-200 active:scale-95`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-bold text-white mr-2">{card.title}</h3>
                      <span className="text-xs text-white/80">{card.subtitle}</span>
                    </div>
                    <p className="text-white/90 text-sm mb-3">{card.description}</p>
                    <div className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md transition-colors duration-200 border border-white/20 inline-block">
                      View Details →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Glow effects */}
      {!isMobile && (
        <>
          <div
            className="absolute left-70 top-1/4 w-16 h-16 rounded-full blur-xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #4facfe 0%, transparent 70%)',
              transform: `translate(${(mousePosition.x - 0.5) * 30}px, ${(mousePosition.y - 0.5) * 30}px)`
            }}
          />
          <div
            className="absolute right-20 bottom-1/3 w-24 h-24 rounded-full blur-xl opacity-20"
            style={{
              background: 'radial-gradient(circle, #00f2fe 0%, transparent 70%)',
              transform: `translate(${(mousePosition.x - 0.5) * -40}px, ${(mousePosition.y - 0.5) * -40}px)`
            }}
          />
        </>
      )}

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes rgbShift {
          0% {
            filter: hue-rotate(0deg);
          }
          100% {
            filter: hue-rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;