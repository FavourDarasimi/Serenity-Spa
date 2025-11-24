import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image1.png";

const AboutSection = () => {
  return (
    <section className="h-[calc(100vh-var(--nav-h))] flex gap-40 justify-center items-center bg-white">
      <img
        src={image}
        alt=""
        className="w-[700px] h-[700px] object-cover hover:scale-105 duration-500 transition rounded-lg"
      />
      <div className="max-w-[450px]">
        <div className="flex gap-3 items-center mb-4">
          <span className="w-10 h-[2px] bg-stone-400"></span>
          <h1 className="text-2xl tracking-widest font-bold ">Our Approach</h1>
        </div>
        <h2 className="text-5xl pt-7 font-serif leading-tight mb-6">
          The Science of Calm
        </h2>
        <p className="leading-relaxed text-[18px] mb-8">
          Relaxation meeting results. Our team of expert estheticians and
          massage therapists provides bespoke treatments tailored to your body's
          unique needs. Experience the highest standard of care in an
          environment of absolute luxury
        </p>
        <button className="bg-[#d26444] border p-3 text-white rounded-lg text-[17px] hover:scale-105 transition duration-300 tracking-wider">
          Learn more about us
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
