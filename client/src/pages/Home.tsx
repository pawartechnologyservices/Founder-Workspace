import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About"
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import SoftwareDetails from "@/components/SoftwareDetails";
import Cts from "@/components/Cts"
import Ourteam from "@/components/Ourteam"
import Client from "@/components/Client"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <About/>
        <WhyChooseUs />
        <OurProcess />
        <SoftwareDetails />
        <Client/>
        <Cts/>
        <Ourteam/>
      </main>
      <Footer />
    </div>
  );
}