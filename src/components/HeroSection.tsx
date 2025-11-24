type props = {
  heroRef: React.RefObject<HTMLDivElement | null>;
  pricingRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  openPopover: () => void;
};
const HeroSection = ({
  heroRef,

  servicesRef,
  scrollToSection,
  openPopover,
}: props) => {
  return (
    <section
      ref={heroRef}
      className="h-[calc(100vh-var(--nav-h))] flex flex-col justify-center items-center bg-gradient-to-b from-white via-stone-100 to-stone-200 px-4"
    >
      <div className="space-y-6 max-w-4xl text-center">
        <div className="flex gap-2 items-center justify-center">
          <span className="w-3 h-3 bg-[#d26444] rounded-full animate-pulse "></span>
          <span className="text-[#888888] font-medium tracking-widest text-sm sm:text-base">
            Welcome to Serenity Spa
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold">
          Indulge in the Art of <br />{" "}
          <span className="text-[#d26444]">Relaxation</span>
        </h1>
        <h2 className="text-lg sm:text-xl text-[#888888]">
          Experience the ultimate in luxury wellness. From bespoke facials to
          full-body renewal,Serenity Spa offers a world-class retreat designed
          entirely around you
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center">
          <button
            onClick={openPopover}
            className="bg-[#d26444] border p-3 text-white rounded-lg text-[17px] hover:scale-105 transition duration-300 tracking-wider"
          >
            Reserve Appointment
          </button>
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="border p-3 rounded-lg text-[17px] w-full md:w-fit hover:scale-105 transition duration-300 tracking-wider"
          >
            Explore Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
