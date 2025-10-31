import React from "react";
import image from "../assets/meditating-removebg-preview.png";

const HeroSection = () => {
  return (
    <div className="h-screen flex items-center ">
      <div className="w-[50%] ml-20">
        <h1 className="text-3xl font-semibold">
          Welcome to Serenity <span className="text-rose-400">Spa</span>
        </h1>
        <h1 className="text-7xl text-rose-400 font-semibold mt-4">
          Relax. Refresh. Rejuvenate.
        </h1>
        <h1 className="text-6xl font-semibold mt-3">
          Discover a sanctuary of wellness in the heart of your city.
        </h1>
        <button className=" mt-10 text-xl bg-rose-400 hover:bg-rose-600 hover:scale-105 transition-all duration-500 ease-in-out py-4 px-10 rounded-full text-white">
          Book Now
        </button>
      </div>
      <div className="relative w-[50%]">
        <img
          src={image}
          className="object-cover "
          //   style={{
          //     maskImage:
          //       "linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          //     maskComposite: "intersect",
          //     WebkitMaskImage:
          //       "linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          //     WebkitMaskComposite: "source-in",
          //   }}

          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 15%), linear-gradient(to bottom, transparent, black 15%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 15%), linear-gradient(to bottom, transparent, black 15%)",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
