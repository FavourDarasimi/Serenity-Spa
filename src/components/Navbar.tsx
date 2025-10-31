import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent  ">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" className="text-3xl font-playfair ">
          Serenity <span className="text-rose-500">Spa</span>
        </a>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a
            href="#about"
            className="hover:text-rose-500  transition-colors duration-500 text-[19px]"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-rose-500  transition-colors duration-500 text-[19px]"
          >
            Services
          </a>
          <a
            href="#gallery"
            className="hover:text-rose-500  transition-colors duration-500 text-[19px]"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="hover:text-rose-500  transition-colors duration-500 text-[19px]"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
