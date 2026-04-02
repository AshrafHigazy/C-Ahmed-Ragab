// Page: Root landing page — assembles all sections in order
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import CoachIntro from "../components/sections/CoachIntro";
import TransformationSlider from "../components/sections/TransformationSlider";
import HowToSection from "../components/sections/HowToSection";
import ProgramIncludes from "../components/sections/ProgramIncludes";
import PricingPackages from "../components/sections/PricingPackages";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-black selection:bg-gold selection:text-black">
        <HeroSection />
        <CoachIntro />
        <HowToSection />
        <TransformationSlider />
        <ProgramIncludes />
        <PricingPackages />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
