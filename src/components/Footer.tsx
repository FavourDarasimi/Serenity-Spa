import { motion } from "framer-motion";

type FooterProps = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  pricingRef: React.RefObject<HTMLDivElement | null>;
  reviewsRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
};

const Footer = ({
  aboutRef,
  servicesRef,
  pricingRef,
  reviewsRef,
  scrollToSection,
}: FooterProps) => {
  return (
    <motion.footer
      className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1: Brand */}
        <div className="col-span-1 md:col-span-1 text-center sm:text-left">
          <h3 className="text-white text-2xl font-serif mb-4">Serenity.</h3>
          <p className="leading-relaxed mb-4">
            A sanctuary for the senses. <br />
            Reconnect with your inner calm.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-xs">
            Explore
          </h4>
          <ul className="space-y-2">
            <li
              className="hover:text-white transition-colors cursor-pointer"
              onClick={() => scrollToSection(aboutRef)}
            >
              About Us
            </li>
            <li
              className="hover:text-white transition-colors cursor-pointer"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </li>
            <li
              className="hover:text-white transition-colors cursor-pointer"
              onClick={() => scrollToSection(pricingRef)}
            >
              Menu
            </li>
            <li
              className="hover:text-white transition-colors cursor-pointer"
              onClick={() => scrollToSection(reviewsRef)}
            >
              Reviews
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-xs">
            Visit Us
          </h4>
          <p className="leading-relaxed">
            123 Wellness Blvd,
            <br />
            Beverly Hills, CA 90210
          </p>
          <p className="mt-4">hello@serenityspa.com</p>
          <p>+1 (555) 123-4567</p>
        </div>

        {/* Column 4: Newsletter (Optional) */}
        <div className="text-center sm:text-left">
          <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-xs">
            Hours
          </h4>
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span>Mon - Fri</span>{" "}
              <span className="text-white">9am - 8pm</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>{" "}
              <span className="text-white">10am - 6pm</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span> <span className="text-white">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-xs flex flex-col sm:flex-row justify-between text-center sm:text-left">
        <p className="mb-2 sm:mb-0">
          &copy; 2025 Serenity Spa. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};
export default Footer;
