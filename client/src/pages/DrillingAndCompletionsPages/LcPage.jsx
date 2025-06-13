
import React from "react";
import lc1 from "/public/services/lc1.png";
import lc2 from "/public/services/lc2.jpg";
import lc3 from "/public/services/lc3.png";

import HeroSection from "../../components/HeroSection.jsx";

import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";
import tempLogo from "../../assets/apex_logo_white.jpg";
import drillingImage from "/public/services/drilling4.jpg";
import rigSelectionImage from "/public/services/rig-selection/rig1.jpg"; 
import lcImage from "/public/services/lc1.png";
import ucImage from "/public/services/uc1.png";


const LcPage = () => {
  return (
    <div>
      <HeroSection
        title="Lower Completions"
        subtitle="Lower Completions"
        backgroundImage={lc1}
        position="center"
      />
      {/* Section 1 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4 ">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={lc1}
            alt="Lower Completions 1"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 uppercase font-semibold mb-2">
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
      </section>

      {/* Section 2 */}
      <section className="flex flex-col  items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={lc2}
            alt="Lower Completions 2"
            className="w-full h-auto rounded shadow-lg "
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 uppercase font-semibold mb-2">
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
      </section>


      {/* Section 3 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4 ">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={lc3}
            alt="Lower completions 3"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 uppercase font-semibold mb-2">
            Completion Design Software
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Support from Start to Finish
          </h1>
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
      </section>
      <div className="flex justify-center flex-wrap gap-4">
       <RelatedContent
              title="related content"
              items={[
                {
                  title: "Rig Selection Process Explained",
                  image: rigSelectionImage,
                  category: "Our Services",
                  date: "May 15, 2025",
                  link: "/rig-selection-process",
                },
                {
                  title: "Drilling Operations Insights",
                  image: drillingImage,
                  category: "Our Operations",
                  date: "May 10, 2025",
                  link: "/drilling",
                },
                {
                  title: "Upper Completions",
                  image: ucImage,
                  category: "Our Operations",
                  date: "April 21, 2025",
                  link: "/upper-completions",
                },
                {
                  title: "Project Controls",
                  image: tempLogo,
                  category: "Project Controls",
                  date: "May 05, 2025",
                  link: "/project-controls",
                },
              ]}
            />
      </div>


    </div>
  );
};

export default LcPage;

