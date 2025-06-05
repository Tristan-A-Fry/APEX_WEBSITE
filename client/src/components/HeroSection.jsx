
import React from "react";

const HeroSection = ({ title, subtitle, backgroundImage, position = "center" }) => {
  return (
    <div
      className={`relative w-full h-[300px] md:h-[400px] bg-cover ${
        position === "top" ? "bg-top" :
        position === "bottom" ? "bg-bottom" :
        "bg-center"
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;

