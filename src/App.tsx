import "./App.css";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import OurQualitiesSection from "./components/our-qualities-section";
import PriceSection from "./components/price-section";
import ProgramsSection from "./components/programs-section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TrainersSection from "./components/trainers-section";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: controls the duration of the animation
      easing: "ease-in-out", // Optional: controls the easing of the animation
      once: false, // Optional: the animation happens only once
    });
  }, []);
  return (
    <main className="max-w-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <OurQualitiesSection />
      <TrainersSection />
      <PriceSection />
      <Footer />
    </main>
  );
}

export default App;
