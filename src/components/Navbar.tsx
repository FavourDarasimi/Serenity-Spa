import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hr } from "framer-motion/client";

type NavBarProps = {
  heroRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  pricingRef: React.RefObject<HTMLDivElement | null>;
  reviewsRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  openPopover: () => void;
};

const Navbar = ({
  heroRef,
  aboutRef,
  servicesRef,
  pricingRef,
  reviewsRef,
  scrollToSection,
  openPopover,
}: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateNavHeight = () => {
      if (!navRef.current) return;
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    };

    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  const navLinks = [
    { name: "About", ref: aboutRef, href: "#about" },
    { name: "Services", ref: servicesRef, href: "#services" },
    { name: "Pricing", ref: pricingRef, href: "#pricing" },
    { name: "Reviews", ref: reviewsRef, href: "#reviews" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (ref: React.RefObject<HTMLDivElement | null>) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      scrollToSection(ref);
    }, 100);
  };
  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className=" mx-auto px-6 flex items-center justify-between">
          {/* 1. Logo */}
          <h1
            onClick={() => scrollToSection(heroRef)}
            className="text-xl md:text-2xl font-serif font-medium text-stone-800 tracking-tight cursor-pointer"
          >
            Serenity<span className="text-rose-400">.</span>
          </h1>

          {/* 2. Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <h1
                key={link.name}
                // REMOVED ref={link.ref} HERE - This was the bug
                onClick={() => scrollToSection(link.ref)}
                className="text-xs cursor-pointer font-bold uppercase tracking-[0.15em] text-stone-600 hover:text-stone-900 transition-colors"
              >
                {link.name}
              </h1>
            ))}
          </div>

          {/* 3. CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={openPopover}
              className="px-4 py-2 md:px-6 bg-[#d26444] text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300"
            >
              Book Now
            </button>

            <button
              className="md:hidden text-stone-800 p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 4. Mobile Pricing Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg "
            >
              <div className="flex flex-col items-center py-8 space-y-6 z-10">
                {navLinks.map((link) => (
                  <h1
                    onClick={() => handleNavClick(link.ref)}
                    className="text-sm cursor-pointer font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900"
                  >
                    {link.name}
                  </h1>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
