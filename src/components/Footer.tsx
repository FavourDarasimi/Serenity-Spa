const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">
        {/* Column 1: Brand */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-white text-2xl font-serif mb-4">Serenity.</h3>
          <p className="leading-relaxed mb-4">
            A sanctuary for the senses. <br />
            Reconnect with your inner calm.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-xs">
            Explore
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Membership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
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
        <div>
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
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-xs flex justify-between">
        <p>&copy; 2025 Serenity Spa. All rights reserved.</p>
        <p>
          Designed with <span className="text-rose-400">♥</span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
