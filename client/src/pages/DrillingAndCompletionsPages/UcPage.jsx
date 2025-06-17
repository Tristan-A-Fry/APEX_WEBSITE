

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



const UcPage = () => {
  return (
    <div>
      <HeroSection 
        title="Upper Completions"
        subtitle="Upper Completions"
        backgroundImage={ucImage}
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
            Upper Completions 
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Key Deliverables – IWOCS & SSTT 
          </h1>
          <p className="text-gray-700 mb-4">
            Apex Subsea provides back office and engineering support for major OEMs covering XT, SSTT, and IWOCS equipment. Our team manages SPS handover to drilling and wells, while coordinating rig readiness including interfaces, BOP test tools, and software integration.
          </p>
          <p className="text-gray-700 mb-6">
            Offshore kickoff services include SSTT, IWOCS, and XT/TH OEM deployment. We're responsible for FAT, SIT, and offshore loadout, ensuring interface alignment between completions, rig, and facilities. We supervise rig procedures and topside operations, while following quality assurance mandates from operators, BSEE, and API.
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
            OEM Experience & Interface Management
          </h2>
          <p className="text-gray-700 mb-4">
            Our experience spans across a wide range of OEMs for XT, SSTT, CTLF, and IWOCS, including OneSubsea, TechnipFMC, Schlumberger, Halliburton, Expro, Aker Solutions, JDR, and Oceaneering. We support hydraulic and electrical interface management for IWOCS to XT, as well as PETU/MCS software compatibility.
          </p>
          <p className="text-gray-700 mb-6">
            We configure SSTT/Spanner JT setups, manage BOP stack to XT landing sequences, DHPT gauge communications, ROV interfaces, and downhole operational functions. Additional responsibilities include stack integration, chemical injection, and spares readiness for seamless execution of upper completions.
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
            Upper Completion Tooling & Execution
          </h2>
          <p className="text-gray-700 mb-4">
            Apex Subsea provides full support across upper completion tooling from planning to execution. This includes readiness of subsea trees, THRT adapters, IWOCS reels, umbilicals, jumper testing, and HPU setup for offshore operation.
          </p>
          <p className="text-gray-700 mb-6">
            We manage the integration of tooling with rig procedures, creating action plans that include Spanner JT configurations, ESD/EDS logic, and equipment mobilization. Our team ensures seamless handover of SPS packages to the rig team, enabling safe, compliant, and efficient upper completion deployment.
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
                  title: "Lower Completions",
                  image: lc1,
                  category: "Our Operations",
                  date: "April 21, 2025",
                  link: "/lower-completions",
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

export default UcPage;
