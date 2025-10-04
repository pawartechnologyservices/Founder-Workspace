
import FadeIn from "@/components/ui/fade-in";
import AnimatedText from "@/components/ui/animated-text";

interface PricingHeroProps {
  title: string;
  subtitle: string;
}

const PricingHero = ({ title, subtitle }: PricingHeroProps) => {
  return (
    <section className="pt-32 pb-20 bg-black relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 500 + 100}px`,
                height: `${Math.random() * 500 + 100}px`,
                transform: `translate(-50%, -50%) scale(${0.6 + Math.random() * 0.4})`,
                opacity: 0.05 + Math.random() * 0.05,
                filter: 'blur(100px)',
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            {title} Pricing
          </h1>
          <AnimatedText
            text={subtitle}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            delay={0.5}
          />
        </FadeIn>
        
        <FadeIn delay={300}>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="text-white">No credit card required</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="text-white">14-day free trial</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              <span className="text-white">Cancel anytime</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default PricingHero;
