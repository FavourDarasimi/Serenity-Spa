import spawide from "../assets/spa-wide.webp";
import { motion } from "framer-motion";

const ParallaxBreak = () => {
  return (
    <section
      className="relative h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        // You will need a very wide, high-res image for this
        backgroundImage: `url(${spawide})`,
      }}
    >
      {/* Dark Overlay to make text pop */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white italic tracking-wide mb-4">
          "Silence is the ultimate luxury."
        </h3>
        <p className="text-white/80 text-xs sm:text-sm md:text-base font-medium tracking-[0.2em] uppercase">
          The Serenity Lounge
        </p>
      </motion.div>
    </section>
  );
};

export default ParallaxBreak;
