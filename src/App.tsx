import "./App.css";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import Popover from "./components/Popover";
import BookingForm from "./components/BookingForm";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const openPopover = () => setIsPopoverOpen(true);
  const closePopover = () => setIsPopoverOpen(false);

  const handleBooking = () => {
    closePopover();
    toast.success("Appointment requested successfully!");
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Toaster />
      <Navbar
        heroRef={heroRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        pricingRef={pricingRef}
        reviewsRef={reviewsRef}
        scrollToSection={scrollToSection}
        openPopover={openPopover}
      />
      <HeroSection
        heroRef={heroRef}
        pricingRef={pricingRef}
        servicesRef={servicesRef}
        scrollToSection={scrollToSection}
        openPopover={openPopover}
      />
      <AboutSection aboutRef={aboutRef} />
      <ServicesSection servicesRef={servicesRef} />
      <PricingSection pricingRef={pricingRef} />
      <ReviewsSection reviewsRef={reviewsRef} />
      <Footer
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        pricingRef={pricingRef}
        reviewsRef={reviewsRef}
        scrollToSection={scrollToSection}
      />
      <Popover isOpen={isPopoverOpen} onClose={closePopover}>
        <BookingForm closePopover={handleBooking} />
      </Popover>
    </>
  );
}

export default App;
