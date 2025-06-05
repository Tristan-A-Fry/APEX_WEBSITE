
import React from "react";
import lc1 from "/public/services/lc1.png";
import lc2 from "/public/services/lc2.jpg";
import lc3 from "/public/services/lc3.png";

const LcPage = () => {
  return (
    <section className="py-12 px-4">
      {/* Main Lower Completions Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-red-600 uppercase font-semibold mb-2">
            Lower Completions
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Optimizing Production from the Ground Up
          </h1>
          <p className="text-gray-700 mb-4">
            We develop conventional and reversible synthetic drill-in and
            completion fluids used for Horizontal Open hole producers and water
            injectors. We also design Open hole Horizontal producers with heavy
            brine and low frac margin, complete unconventional and conventional
            reservoirs.
          </p>
          <p className="text-gray-700 mb-6">
            Completion projects range from: Multi-zone SMART completions (3
            zones); MST multi-zone frac systems; High angle Open Hole
            completions; and Cased hole frac pack completions. We also use
            software such as StimPlan (frac design and analysis), WellPlan
            (torque and drag), WellCat (well stress analysis), and ackPro (open
            hole gravel pack simulation).
          </p>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={lc1}
            alt="Lower Completions"
            className="w-full max-w-[600px] h-[300px] object-cover rounded shadow-lg w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>

      {/* Additional Section 1: Image Left */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={lc2}
            alt="Frac Systems"
            className="w-full max-w-[600px] h-[300px] object-cover rounded shadow-lg w-full h-auto rounded shadow-lg"
          />
        </div>
        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Advanced Frac Systems
          </h2>
          <p className="text-gray-700 mb-4">
            Our team delivers high-angle open hole completions and cased hole
            frac pack solutions, optimizing performance and ensuring maximum
            production efficiency.
          </p>
          <p className="text-gray-700 mb-6">
            We provide support for MST multi-zone frac systems, ensuring seamless
            operations and enhanced production for your unconventional reservoirs.
          </p>
        </div>
      </div>

      {/* Additional Section 2: Image Right */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={lc3}
            alt="Completion Design Software"
            className="w-full max-w-[600px] h-[300px] object-cover rounded shadow-lg w-full h-auto rounded shadow-lg"
          />
        </div>
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Completion Design & Simulation
          </h2>
          <p className="text-gray-700 mb-4">
            We utilize industry-leading software like StimPlan, WellPlan, WellCat,
            and ackPro to design, simulate, and optimize your lower completion
            systems.
          </p>
          <p className="text-gray-700 mb-6">
            This ensures every lower completion is tailored for optimal production
            and long-term efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LcPage;

