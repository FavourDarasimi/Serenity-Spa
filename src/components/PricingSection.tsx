import { motion } from "framer-motion";

type props = {
  pricingRef: React.RefObject<HTMLDivElement | null>;
};

const PricingSection = ({ pricingRef }: props) => {
  // Data for the menu
  const massages = [
    {
      name: "Swedish Massage",
      price: "$90",
      desc: "60 min • Gentle relaxation & circulation",
    },
    {
      name: "Deep Tissue",
      price: "$110",
      desc: "60 min • Muscle recovery & pain relief",
    },
    {
      name: "Hot Stone Therapy",
      price: "$125",
      desc: "75 min • Heat therapy & tension release",
    },
    {
      name: "Aromatherapy",
      price: "$100",
      desc: "60 min • Essential oils of your choice",
    },
  ];

  const facials = [
    {
      name: "Serenity Glow",
      price: "$130",
      desc: "60 min • Deep cleansing & hydration",
    },
    {
      name: "Hydra-Infusion",
      price: "$180",
      desc: "90 min • Intense moisture & plumping",
    },
    {
      name: "Anti-Aging Peel",
      price: "$150",
      desc: "60 min • Skin renewal & surfacing",
    },
    {
      name: "Express Facial",
      price: "$75",
      desc: "30 min • Quick refresh for busy schedules",
    },
  ];

  return (
    // bg-stone-50 creates the visual separation from the previous white section
    <motion.section
      id="pricing"
      ref={pricingRef}
      className="py-24 bg-stone-50 text-stone-800"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl px-6 mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-base md:text-[17px] font-bold tracking-[0.2em] uppercase text-stone-500">
            Treatment Menu
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-serif text-stone-800">
            Signature Treatments
          </h2>
          <p className="mt-4 text-stone-500 italic">
            Enhancements and add-ons available upon request.
          </p>
        </div>

        {/* The Menu Grid (Two Columns) */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* Column 1: Massage */}
          <div>
            <h4 className="mb-8 text-xl md:text-[22px] font-medium tracking-widest text-center uppercase border-b border-stone-200 pb-4">
              Massage & Body
            </h4>
            <div className="space-y-6">
              {massages.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Column 2: Facials */}
          <div>
            <h4 className="mb-8 text-xl md:text-[22px] font-medium tracking-widest text-center uppercase border-b border-stone-200 pb-4">
              Facials & Skincare
            </h4>
            <div className="space-y-6">
              {facials.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="mt-16 text-center">
          <a href="/Serenity-Spa-Menu.pdf" download>
            <button className="px-8 py-3 text-sm font-bold tracking-widest text-white uppercase bg-[#d26444] hover:scale-105 transition duration-300">
              Download Full Menu (PDF)
            </button>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

type MenuItemProps = {
  name: string;
  price: string;
  desc: string;
};
const MenuItem = ({ name, price, desc }: MenuItemProps) => (
  <div className="group">
    <div className="flex items-end justify-between w-full">
      <span className="text-[20px] font-serif text-stone-800 shrink-0 bg-stone-50 z-10 pr-2">
        {name}
      </span>
      <span className="flex-grow mb-1.5 border-b-2 border-dotted border-stone-300/50"></span>
      {/* Price */}
      <span className="text-[20px] font-medium text-stone-600 shrink-0 bg-stone-50 z-10 pl-2">
        {price}
      </span>
    </div>

    {/* Description */}
    <p className="mt-1 text-[16px] text-stone-400 font-sans">{desc}</p>
  </div>
);

export default PricingSection;
