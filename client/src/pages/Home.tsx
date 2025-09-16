import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import SoftwareDetails from "@/components/SoftwareDetails";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <OurProcess />
        <SoftwareDetails />
      </main>
      <Footer />
    </div>
  );
}