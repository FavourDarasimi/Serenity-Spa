import image from "../assets/image1.png";
import { motion } from "framer-motion";

type props = {
  aboutRef: React.RefObject<HTMLDivElement | null>;
};

const AboutSection = ({ aboutRef }: props) => {
  return (
    <section
      ref={aboutRef}
      id="about"
      className=" py-20 lg:py-0 lg:h-[calc(100vh-var(--nav-h))] flex flex-col lg:flex-row gap-12 lg:gap-40 justify-center items-center bg-white px-4"
    >
      <motion.img
        src={image}
        alt=""
        className="w-full max-w-md lg:max-w-none lg:w-[700px] lg:h-[700px] object-cover hover:scale-105 duration-500 transition rounded-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true }}
      />
      <motion.div
        className="max-w-[450px] text-center lg:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true }}
      >
        <div className="flex gap-3 items-center mb-4 justify-center lg:justify-start">
          <span className="w-10 h-[2px] bg-stone-400"></span>
          <h1 className="text-2xl tracking-widest font-bold ">Our Approach</h1>
        </div>
        <h2 className="text-4xl lg:text-5xl pt-7 font-serif leading-tight mb-6">
          The Science of Calm
        </h2>
        <p className="leading-relaxed text-base lg:text-[18px] mb-8">
          Relaxation meeting results. Our team of expert estheticians and
          massage therapists provides bespoke treatments tailored to your body's
          unique needs. Experience the highest standard of care in an
          environment of absolute luxury
        </p>
        <button className="bg-[#d26444] border p-3 text-white rounded-lg text-[17px] hover:scale-105 transition duration-300 tracking-wider">
          Learn more about us
        </button>
      </motion.div>
    </section>
  );
};

export default AboutSection;
