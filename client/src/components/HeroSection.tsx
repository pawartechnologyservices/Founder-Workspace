import { useEffect, useRef, useState } from "react";
import { GradientSphere } from "@/components/ui/gradient-sphere";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { Link } from "wouter";

interface HeroProps {
  onDemoClick: () => void;
}

const Hero = ({ onDemoClick }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const softwareCards = [
    {
      title: "CRM",
      subtitle: "Customer Relationship Management",
      description: "Manage leads, automate follow-ups, and track sales across multiple industries.",
      color: "from-cyan-500 to-blue-600",
      link: "/crm-welcome",
    },
    {
      title: "ERP",
      subtitle: "Enterprise Resource Planning",
      description: "Centralize operations, manage inventory, and optimize workflows tailored to your industry.",
      color: "from-purple-500 to-indigo-600",
      link: "/erp-welcome",
    },
    {
      title: "Billing",
      subtitle: "Smart Financial Operations",
      description: "Automate invoicing, track payments, and manage taxes for your business sector.",
      color: "from-pink-500 to-rose-600",
      link: "/billing-welcome",
    },
  ];

  return (
    <div
      ref={heroRef}
      className="relative min-h-[100vh] flex flex-col lg:flex-row justify-center items-center overflow-hidden pt-16 lg:pt-3 w-full px-4 lg:pl-20"
      style={{ perspective: "1000px" }}
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <HeroGeometric badge="" title1="" title2="" />
      </div>

      {/* Gradient Spheres */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: isMobile ? 15 : 30 }).map((_, i) => (
            <GradientSphere
              key={i}
              index={i}
              mousePosition={mousePosition}
              size={isMobile ? 10 : 200}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 flex flex-col lg:flex-row items-center justify-between w-full py-8 lg:py-0 -mt-16">
        
        {/* LEFT SIDE */}
        <div className="max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
          {/* Badge */}
          <span className="inline-block px-4 py-1 text-sm font-medium text-white bg-[#6B4F3D] rounded-full mb-4">
            Professional Software Solutions
          </span>

          {/* Gradient Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            The Business Trinity
          </h2>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Unlock the Power of Your Business with CRM, ERP & Billing
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl">
            Integrated software solutions that streamline operations, boost
            efficiency, and grow with your business.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
            <Link href="/book-demo">
              <button
                onClick={onDemoClick}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg hover:scale-[1.03] transition-transform w-full sm:w-auto"
              >
                <FaCalendarAlt /> Book Demo
              </button>
            </Link>

            <button
              disabled
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-400 to-purple-600 shadow-lg opacity-90 w-full sm:w-auto"
            >
              <FaStar /> Founders Club - Coming Soon
            </button>
          </div>

          {/* Stats Section - Contained in black background */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 lg:p-0 lg:bg-transparent lg:backdrop-blur-none border border-white/10 lg:border-none">
            <div className="flex justify-between lg:justify-start lg:gap-10 text-white text-center">
              <div className="flex-1 lg:flex-none">
                <p className="text-2xl font-bold">30+</p>
                <p className="text-sm text-white">Active Clients</p>
              </div>
              <div className="flex-1 lg:flex-none">
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-sm text-white">Uptime</p>
              </div>
              <div className="flex-1 lg:flex-none">
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-sm text-white">Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Software Cards */}
        <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-md mb-8 lg:mb-0 lg:mr-16 lg:ml-8">
          <div className="relative space-y-4">
            {softwareCards.map((card, index) => (
              <div
                key={index}
                className={`relative p-5 rounded-xl bg-gradient-to-br ${card.color} border border-white/10 overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
                style={{
                  boxShadow: `0 8px 20px -5px ${
                    index === 0
                      ? "rgba(0, 194, 255, 0.3)"
                      : index === 1
                      ? "rgba(124, 58, 237, 0.3)"
                      : "rgba(244, 63, 94, 0.3)"
                  }`,
                  transform: activeCard === index ? "translateY(-3px)" : "none",
                  zIndex: activeCard === index ? 10 : 1,
                }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-white mr-2">{card.title}</h3>
                    <span className="text-xs text-white/80 mt-1 sm:mt-0">{card.subtitle}</span>
                  </div>
                  <p className="text-white/90 text-sm mb-3">{card.description}</p>

                  <Link href={card.link}>
                    <span className="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md transition-colors duration-200 border border-white/20 inline-block cursor-pointer">
                      View Details →
                    </span>
                  </Link>
                </div>
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;