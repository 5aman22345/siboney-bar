import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import DrinkMenu from "@/components/sections/DrinkMenu";
import Especialidades from "@/components/sections/Especialidades";
import InfoSection from "@/components/sections/InfoSection";
import HoursSection from "@/components/sections/HoursSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <About />
        <Gallery />
        <DrinkMenu />
        <Especialidades />
        <InfoSection />
        <HoursSection />
        <CTASection />
      </main>

      <Footer />

      {/* Sticky bottom bar, visible only on mobile */}
      <StickyMobileCTA />
    </>
  );
}
