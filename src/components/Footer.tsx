const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
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
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-white transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white transition-colors">
                Reviews
              </a>
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
        <p>
          Designed with <span className="text-rose-400">♥</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
