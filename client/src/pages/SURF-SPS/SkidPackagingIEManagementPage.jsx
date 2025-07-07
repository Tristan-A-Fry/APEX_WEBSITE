import React from "react";
import HeroSection from "../../components/HeroSection.jsx";
import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";

import SKID1 from "/public/services/SURF/skid/skid1.png";
import SKID2 from "/public/services/SURF/skid/skid2.png";

import tempLogo from "../../assets/apex_logo_white.jpg";
import drillingImage from "/public/services/drilling4.jpg";

const SkidPackagingIEManagementPage = () => {
  return (
    <div className="bg-white dark:bg-[#2b2b2b] min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Skid Packaging & I&E Management"
        subtitle="End-to-End Oversight for Skid-Based Control Infrastructure"
        backgroundImage={SKID1}
        position="center"
      />

      {/* Section 1 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={SKID1}
            alt="Skid Equipment and Wiring"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Topside Skid Management
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Integrated Design, Fabrication & Oversight
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Full oversight and management of topside skid packages including
            HPU, CIU, TUTA, and BSDV units. Our support spans from FEED through
            startup, encompassing CWI inspections, engineering design reviews,
            and schedule/budget management. We coordinate vendor, hydraulic,
            controls, and I&E interfaces to ensure seamless integration.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={SKID2}
            alt="Skid Instrumentation and Layout"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Instrumentation & Electrical Coordination
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Smart Control Infrastructure Deployment
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our scope includes developing network schedules, I/O lists, and
            instrument indexes. We handle power and comms routing, tubing
            schedules, platform layouts, and component selection. Mechanical
            interconnects and on-site field oversight ensure compliance with
            commissioning and operational goals.
          </p>
        </div>
      </section>

      {/* Related Content */}
      <div className="flex justify-center flex-wrap gap-4">
        <RelatedContent
          title="related content"
          items={[
            {
              title: "Systems Engineering",
              image: tempLogo,
              category: "Our Services",
              date: "June 10, 2025",
              link: "/systems-engineering",
            },
            {
              title: "SURF Execution",
              image: tempLogo,
              category: "Our Services",
              date: "June 12, 2025",
              link: "/surf-execution",
            },
            {
              title: "Controls & DCS",
              image: tempLogo,
              category: "Our Services",
              date: "June 05, 2025",
              link: "/controls-dcs",
            },
            {
              title: "Drilling and Completions",
              image: drillingImage,
              category: "Our Operations",
              date: "April 21, 2025",
              link: "/drillingcompletions",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SkidPackagingIEManagementPage;

