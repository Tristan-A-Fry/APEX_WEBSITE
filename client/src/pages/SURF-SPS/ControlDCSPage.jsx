import React from "react";
import HeroSection from "../../components/HeroSection.jsx";
import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";

import DCS1 from "/public/services/surf/dcs/dcs1.png";
import DCS2 from "/public/services/surf/dcs/dcs2.png";

import tempLogo from "../../assets/apex_logo_white.jpg";
import drillingImage from "/public/services/drilling4.jpg";

const ControlDCSPage = () => {
  return (
    <div className="bg-white dark:bg-[#2b2b2b] min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Controls & DCS Integration"
        subtitle="Integrated Subsea and Topside Control Systems"
        backgroundImage={DCS1}
        position="center"
      />

      {/* Section 1 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={DCS1}
            alt="DCS System Overview"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Control Architecture
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Seamless System Integration from Subsea to DCS
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>System Integration Design</strong> ensures all subsystems—MCS, SSLD, HPU, CIU, and more—work together as one seamless unit. <br />
            <strong>MCS/DCS Interface</strong> supports real-time and historical data control through integrated platforms. <br />
            <strong>Safety System Integration</strong> bridges subsea and topside safety systems for optimal reliability.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={DCS2}
            alt="Subsea DCS Integration Example"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Assurance, Compliance, and Monitoring
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Real-Time Operations Support
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Compliance</strong> with regulatory and industry standards is enforced through rigorous documentation. <br />
            <strong>Engineering Documentation</strong> includes Cause & Effect, Narratives, P&IDs, wiring diagrams, and commissioning procedures. <br />
            <strong>Subsea Leak Detection</strong> and <strong>Flow Assurance Monitoring</strong> enable real-time alerts, automated reporting, and performance optimization.
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
              date: "June 14, 2025",
              link: "/systems-engineering",
            },
            {
              title: "Skid Packaging",
              image: tempLogo,
              category: "Our Services",
              date: "June 10, 2025",
              link: "/skid-packaging",
            },
            {
              title: "SURF Execution",
              image: tempLogo,
              category: "Our Services",
              date: "June 08, 2025",
              link: "/surf-execution",
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

export default ControlDCSPage;

