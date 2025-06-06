
// src/pages/HomePage.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

import completions from "/public/services/oilrig.jpg";
import monitoring from "../assets/apex_logo_white.jpg";
import intelligence from "../assets/apex_logo_white.jpg";
import optimisation from "../assets/apex_logo_white.jpg";

const logoSizes = {
  bp: "h-24",
  hwcgBlack: "h-24 text-black",
  shell: "h-20",
  talos: "h-32",
  totalenergies: "h-20",
  anadarko: "h-32",
  default: "h-24"
};

export default function HomePage() {

  const services = [
    { title: "Drilling & Completions", image: completions, link: "/drillingcompletions" },
    { title: "SURF", image: monitoring, link: "#" },
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

      

      <section className="flex flex-col md:flex-row h-auto bg-white dark:bg-[#2b2b2b] text-black dark:text-white mt-24 gap-32 pb-24">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="/bg-images/drill.jpg"
            alt="Our Approach"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: Text & Features */}
        <div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-12 space-y-6">
          <div>
            <h3 className="text-xl text-red-700  font-bold uppercase">Uncover </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase">the Excellence in Engineering & Operations</h2>
          </div>

          <h4 className="text-xl md:text-2xl font-semibold">
            Providing reliable control systems across the full energy market
          </h4>

          <p className=" text-xl text-gray-500 dark:text-white leading-relaxed">
          Apex Subsea’s consulting team provides turnkey solutions around Upper Completions, Well interventions, and other life of field operations from the Rig/MSV. Our <span className="text-red-700"> experienced facilities engineering team </span> has delivered successful Subsea Tie Backs covering SPS and SURF areas from concept, engineering, procurement, and offshore installation operations.
          </p>

          {/* Feature Badges */}
          <div className="flex gap-12 justify-center">
            {/* Badge 1 */}
            <div className="flex flex-col items-center">
              <div className="rounded-full border-4 border-red-700 w-16 h-16 flex items-center justify-center text-lg font-bold text-black dark:text-white bg-white dark:bg-[#2b2b2b]">
                200+
              </div>
              <p className="text-m text-red-700 mt-2 text-center">
                200+ years combined experience
              </p>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center">
              <div className="rounded-full border-4 border-red-700 w-16 h-16 flex items-center justify-center text-lg font-bold text-black bg-white dark:text-white bg-white dark:bg-[#2b2b2b]">
                200+
              </div>
              <p className="text-m text-red-700 mt-2 text-center">
                Deepwater wells in production
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            to="/all-products-services"
            className="!text-white !font-semibold">
            <button className="mt-4 w-max px-6 py-3 !bg-red-700 hover:!bg-red-500 text-white !font-bold rounded shadow">
              Read More →
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-[#2b2b2b]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-12">
            Our Services
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

      <section id="partners" className="py-20 bg-white dark:bg-[#2b2b2b]">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white mb-12">Our Partners</h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
          {["bp", "hwcgBlack", "talos", "shell", "totalenergies", "anadarko"].map((partner) => (
            <div
              key={partner}
              className="w-60 h-28 bg-white rounded-lg flex items-center justify-center 
                         shadow-md hover:shadow-[0_4px_20px_rgba(239,68,68,0.6)] transition-shadow duration-300"
            >
              <img
                src={`/partner-logos/${partner}.png`}
                alt={`${partner} logo`}
                className={`object-contain ${logoSizes[partner] || logoSizes.default}`}
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

