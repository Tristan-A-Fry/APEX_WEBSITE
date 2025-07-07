// src/pages/HomePage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import FeatureSlider from "../components/FeatureSlider.jsx";
import GulfMap from "../components/GulfMap.jsx";

import completions from "/public/services/oilrig.jpg";
import monitoring from "../assets/apex_logo_white.jpg";
import intelligence from "../assets/apex_logo_white.jpg";
import optimisation from "../assets/apex_logo_white.jpg";

const logoSizes = {
  bp: "h-24",
  hwcgBlack: "h-24 text-black",
  shell: "h-20",
  talos: "h-32",
  beaconn2: "h-32",
  default: "h-24"
};

export default function HomePage() {

  const services = [
    { title: "Drilling & Completions", image: completions, link: "/drilling-completions" },
    { title: "SURF", image: monitoring, link: "/surf-sps" },
    { title: "Storage & Maitenence", image: optimisation, link: "#" },
    { title: "Subsea Inspections / I3P", image: intelligence, link: "#" },
  ];


  return (
    <main className="flex-grow w-full bg-white dark:bg-[#2b2b2b]">
      <section className="relative h-[600px] overflow-hidden ">
        {/* ✅ Video - Background Layer */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/test_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* ✅ Overlay - On Top of Video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

        {/* ✅ Text - Top Layer */}
        <div className="absolute z-20 flex items-center h-full pl-16">
          <div className="max-w-xl text-left text-white">
            <h1 className="text-4xl font-bold mb-4">Welcome to Apex Subsea Inc.</h1>
            <p className="text-lg text-white">Securing a sustainable energy future, together.</p>
          </div>
        </div>
      </section>

      {/* Core Operations Section */}
      <section className="py-20 bg-gray-100 dark:bg-[#313131]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
            Core Operations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      <FeatureSlider />

      <GulfMap />
      

      <section id="partners" className="py-20 bg-white dark:bg-[#2b2b2b]">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">Our Partners</h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-2 sm:gap-6 sm:px-4">
          {[
            "bp", "hwcgBlack", "talos", "shell","beaconn2", "repsol","oxy","eni","kosmos","woodside","karoon"
          ].map((partner) => (
            <div
              key={partner}
              className="w-full h-20 xs:h-24 sm:h-28 bg-white dark:bg-[#2b2b2b] rounded-lg flex items-center justify-center shadow-md hover:shadow-[0_4px_20px_rgba(239,68,68,0.6)] transition-shadow duration-300"
            >
              <img
                src={`/partner-logos/${partner}.png`}
                alt={`${partner} logo`}
                className={`object-contain max-h-12 xs:max-h-16 sm:max-h-20 ${logoSizes[partner] || logoSizes.default}`}
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

