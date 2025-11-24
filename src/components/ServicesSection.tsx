import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";

const ServicesSection = () => {
  const services = [
    {
      title: "Therapeutic Massage",
      desc: "Dissolve tension with our signature deep tissue and aromatherapy techniques.",
      image: service1,
      link: "#massage",
    },
    {
      title: "Organic Facials",
      desc: "Restore your natural glow with botanical treatments designed for hydration and renewal.",
      image: service2,
      link: "#facials",
    },
    {
      title: "Body Rituals",
      desc: "Full-body exfoliation, clay wraps, and hydrotherapy to detoxify the skin.",
      image: service3,
      link: "#body",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-base md:text-[17px] font-bold tracking-[0.2em] uppercase text-stone-500">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mt-3">
            Curated Wellness Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-6 aspect-[4/5] md:aspect-[3/4]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="text-center px-4">
                <h3 className="text-2xl font-serif text-stone-800 mb-3 group-hover:text-stone-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-500 leading-relaxed mb-4 text-[15px]">
                  {service.desc}
                </p>
                <span className="text-xs font-bold uppercase tracking-widest text-stone-800 border-b border-transparent group-hover:border-stone-800 transition-all">
                  Discover More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
