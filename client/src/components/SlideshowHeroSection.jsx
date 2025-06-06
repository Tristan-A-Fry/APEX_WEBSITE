
import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const SlideshowHeroSection = ({ images, title, subtitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[1600px] md:h-[900px] overflow-hidden">
      {/* Background Image */}
      <img
        key={currentIndex} // key forces re-render for animation
        src={images[currentIndex]}
        alt={title}
        className="w-full h-full object-cover zoom-out"
      />

      {/* Overlay */}
      <div className="absolute inset-0 !bg-black/30 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">{subtitle}</p>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 !bg-black/50 rounded-full p-2 hover:bg-black/70"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 !bg-black/50 rounded-full p-2 hover:bg-black/70"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>

      {/* Dots (optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SlideshowHeroSection;






