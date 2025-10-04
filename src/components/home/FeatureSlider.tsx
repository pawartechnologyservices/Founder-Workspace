import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// Import local logo images
import CompanyLogo1 from "@/assets/images/logos/1.jpg";
import CompanyLogo2 from "@/assets/images/logos/2.jpg";
import CompanyLogo3 from "@/assets/images/logos/3.jpg";
import CompanyLogo4 from "@/assets/images/logos/4.jpg";
import CompanyLogo5 from "@/assets/images/logos/5.jpg";
import CompanyLogo6 from "@/assets/images/logos/6.jpg";
import CompanyLogo7 from "@/assets/images/logos/7.jpg";
import CompanyLogo8 from "@/assets/images/logos/8.jpg";
import CompanyLogo9 from "@/assets/images/logos/9.jpg";
import CompanyLogo10 from "@/assets/images/logos/10.jpg";

// Local company logos array
const companyLogos = [
  { src: CompanyLogo1, alt: "Company 1" },
  { src: CompanyLogo2, alt: "Company 2" },
  { src: CompanyLogo3, alt: "Company 3" },
  { src: CompanyLogo4, alt: "Company 4" },
  { src: CompanyLogo5, alt: "Company 5" },
  { src: CompanyLogo6, alt: "Company 6" },
  { src: CompanyLogo7, alt: "Company 7" },
  { src: CompanyLogo8, alt: "Company 8" },
  { src: CompanyLogo9, alt: "Company 9" },
  { src: CompanyLogo10, alt: "Company 10" }
];

const enterpriseFeatures = [
  {
    id: 1,
    title: "Role-based permissions",
    description: "Fine-grained access control for your team members based on their roles and responsibilities.",
    icon: "🔒"
  },
  {
    id: 2,
    title: "Global operations",
    description: "Multi-location, multi-currency support for businesses operating internationally.",
    icon: "🌍"
  },
  {
    id: 3,
    title: "Integrated logistics",
    description: "Comprehensive inventory and supply chain management built right in.",
    icon: "📦"
  },
  {
    id: 4,
    title: "Custom automations",
    description: "Streamline workflows with powerful automation tools and API integrations.",
    icon: "⚙"
  },
  {
    id: 5,
    title: "White-labeled portals",
    description: "Custom-branded client portals to maintain your professional image.",
    icon: "🎯"
  },
  {
    id: 6,
    title: "Priority support",
    description: "Dedicated account manager and 24/7 priority support when you need it.",
    icon: "📞"
  }
];

const FeatureSlider = () => {
  const controls = useAnimation();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // RGB gradient colors for the cards
  const rgbGradients = [
    "from-purple-500 via-pink-500 to-red-500",
    "from-blue-500 via-cyan-500 to-green-500",
    "from-yellow-500 via-amber-500 to-orange-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-violet-500 via-purple-500 to-fuchsia-500",
    "from-rose-500 via-pink-500 to-red-500"
  ];

  return (
    <section 
      ref={ref}
      className="py-2 bg-black relative overflow-hidden"
      id="features"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={variants}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-black to-black"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 500 + 100}px`,
              height: `${Math.random() * 500 + 100}px`,
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              transform: `translate(-50%, -50%) scale(${0.6 + Math.random() * 0.4})`,
              filter: 'blur(80px)',
            }}
          />
        ))}
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Updated Enterprise Section with 6 RGB Cards */}
        <motion.div 
          className="mt-12"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            variants={itemVariants}
            custom={0}
          >
            <motion.h2 
              className="text-2xl md:text-4xl font-bold mb-1"
              variants={itemVariants}
              custom={1}
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                FOUNDERS WORKSPACE ENTERPRISE
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-8"
              variants={itemVariants}
              custom={2}
            >
              Scale without compromise. Tailored for high-growth businesses, with features to match your complexity.
            </motion.p>
          </motion.div>
          
          {/* 6 RGB Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                custom={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="relative group"
              >
                {/* RGB Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${rgbGradients[index]} rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300`}></div>
                
                {/* Card Content */}
                <div className="relative bg-navy-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full flex flex-col overflow-hidden">
                  {/* Hover number overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  >
                    <span className="text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      {feature.id}
                    </span>
                  </motion.div>
                  
                  {/* Feature icon with RGB gradient circle */}
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-full bg-gradient-to-br ${rgbGradients[index]} mr-3`}>
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mt-2 z-10">{feature.description}</p>
                  
                  {/* Animated RGB gradient background that moves on hover */}
                  <motion.div 
                    className="absolute -z-10 inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    initial={{ 
                      background: `linear-gradient(45deg, var(--tw-gradient-stops))`,
                      backgroundSize: '200% 200%',
                      backgroundPosition: '0% 0%'
                    }}
                    whileHover={{
                      backgroundPosition: '100% 100%',
                      transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Trusted Companies Section - Updated for mobile */}
          <motion.div 
            className="mt-24 md:mr-20 md:ml-20"
            variants={itemVariants}
            custom={6}
          >
            <motion.div 
              className="text-center max-w-3xl mx-auto mb-12"
              variants={itemVariants}
              custom={7}
            >
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-4"
                variants={itemVariants}
                custom={8}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Trusted by Industry Leaders
                </span>
              </motion.h2>
              <motion.p 
                className="text-gray-300"
                variants={itemVariants}
                custom={9}
              >
                Join thousands of businesses transforming their operations with our platform
              </motion.p>
            </motion.div>
            
            {/* Logo Marquee Container - Updated for mobile */}
            <div className="relative overflow-hidden py-10">
              {/* Dark background overlay */}
              <div className="absolute inset-0 bg-black/80 rounded-3xl md:-mx-4"></div>
              
              {/* Gradient fades - only show on desktop */}
              {!isMobile && (
                <>
                  <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
                  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black/80 to-transparent z-10"></div>
                </>
              )}
              
              {/* Mobile-specific layout */}
              {isMobile ? (
                <div className="grid grid-cols-2 gap-8 px-4">
                  {companyLogos.slice(0, 8).map((logo, i) => (
                    <motion.div
                      key={`mobile-logo-${i}`}
                      className="flex items-center justify-center p-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          delay: i * 0.1,
                          duration: 0.6 
                        }
                      }}
                      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                      whileHover={{
                        scale: 1.1,
                        transition: { 
                          type: "spring", 
                          stiffness: 300,
                          damping: 10 
                        }
                      }}
                    >
                      <div className="relative h-20 w-full flex items-center justify-center">
                        <motion.img 
                          src={logo.src} 
                          alt={logo.alt}
                          className="h-full w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ 
                            opacity: 1,
                            filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.7))'
                          }}
                        />
                        {/* Glow effect on hover */}
                        <motion.div 
                          className="absolute inset-0 rounded-full opacity-0"
                          initial={{ scale: 0.9 }}
                          whileHover={{
                            opacity: 0.3,
                            scale: 1.2,
                            background: 'radial-gradient(circle, rgba(34,211,238,1) 0%, rgba(0,0,0,0) 70%)'
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Desktop marquee animation (remains exactly the same)
                <motion.div
                  className="flex items-center"
                  animate={{
                    x: ["0%", "-100%"]
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {[...companyLogos, ...companyLogos].map((logo, i) => (
                    <motion.div
                      key={`logo-${i}`}
                      className="flex-shrink-0 px-8 md:px-12 relative"
                      onHoverStart={() => setHoveredLogo(i % companyLogos.length)}
                      onHoverEnd={() => setHoveredLogo(null)}
                      initial={{ opacity: 0.7, scale: 0.9 }}
                      whileInView={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { duration: 0.5 }
                      }}
                      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    >
                      <motion.div
                        className="relative"
                        whileHover={{ 
                          scale: 1.2,
                          transition: { 
                            type: "spring", 
                            stiffness: 300,
                            damping: 10 
                          }
                        }}
                        animate={{
                          filter: hoveredLogo === i % companyLogos.length ? 
                            'drop-shadow(0 0 12px rgba(34, 211, 238, 0.7))' : 'none',
                          opacity: hoveredLogo === null || hoveredLogo === i % companyLogos.length ? 1 : 0.6
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={logo.src} 
                          alt={logo.alt}
                          className="h-28 md:h-25 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSlider;