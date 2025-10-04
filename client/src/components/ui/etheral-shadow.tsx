import { EtheralShadow } from "@/components/ui/etheral-shadow";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Effect */}
      <EtheralShadow
        color={[0.8, 0.2, 0.6]} // pinkish tone
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-white">Hero Section</h1>
        <p className="mt-4 text-gray-200">With Etheral Shadow Background</p>
      </div>
    </section>
  );
};

export default Hero;
