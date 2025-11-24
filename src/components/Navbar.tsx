import { useState, useEffect, useRef } from "react";

const Navbar = () => {
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

  // Navigation Links Data
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className=" mx-auto px-6 flex items-center justify-between">
          {/* 1. Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-serif font-medium text-stone-800 tracking-tight"
          >
            Serenity<span className="text-rose-400">.</span>
          </a>

          {/* 2. Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.15em] text-stone-600 hover:text-stone-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {/* Book Button (Visible on all screens, but smaller on mobile) */}
            <button className="px-4 py-2 md:px-6 bg-[#d26444] text-white text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300">
              Book Now
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden text-stone-800 p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                // X Icon
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
                // Hamburger Icon
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

        {/* 4. Mobile Menu Overlay (Slide Down) */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-stone-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-stone-600 hover:text-stone-900"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
