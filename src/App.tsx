import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import ParallaxBreak from "./components/ParallaxBreak";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ParallaxBreak />
      <ReviewsSection />
      <Footer />
    </>
  );
}

export default App;
