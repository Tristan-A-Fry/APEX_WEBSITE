import React from "react";
import HeroSection from "../../components/HeroSection.jsx"; 
import SlideshowHeroSection from "../../components/SlideshowHeroSection.jsx";

import QCI1 from "/public/services/project-controls/QCI1.jpg";
import QCI2 from "/public/services/project-controls/QCI2.jpg";

import drillingImage from "/public/services/drilling4.jpg";

import tempLogo from "../../assets/apex_logo_white.jpg";

import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";

const QualityControlInspectionPage = () => {
  const heroImages = [QCI1, QCI2];

  return (
    <div className="bg-white dark:bg-[#2b2b2b] min-h-screen">
      {/* Hero Section */}
      
      <SlideshowHeroSection
        images={heroImages}
        title="Quality Control & Inspections"
        subtitle="Assuring Quality and Compliance Across All Project Stages"
      />

      {/* Section 1 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4 ">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={QCI1}
            alt="Quality Control 1"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
           Quality Control & Inspections 
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            End-to-End Quality Oversight 
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Quality Control and Inspection services: Work with OEM to define Quality plan, ITP, provide I3P surveillance at manufacturing sites during fabrication, assembly and testing phase, work with OEM disposition on NCR’s​, and review inspection reports, MRB’s, NCR’s.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col  items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={QCI2}
            alt="Quality Control 2"
            className="w-full h-auto rounded shadow-lg "
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Quality Control & Inspections
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Onsite Inspection Across OEM & Equipment Stages
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Onesite Inspectors available at OEM sites from Fab, Assembly, FAT, EFAT, SIT & loadout:​ XT, TH build, FAT, EFAT, SIT, ​ SSTT, Spanner Joint​ Upper completions running tool package; THRT, ITC, BOP tools etc​ Pipe, coating & insulation ​ Spool base inspection for pipe welding, stalking​ Control system, SCM, MCS ​ HPU, TUTA build, testing ​ Umbilical fabrication, FAT, EFAT​ UTA and Distribution ​ Valves, Connectors, Hubs​ PLET, Jumper integration, loadout​ Dockside testing, sea fastening etc.
          </p>
        </div>
      </section>


      <div className="flex justify-center flex-wrap gap-4">
       <RelatedContent
              title="related content"
              items={[
                {
                  title: "Cost Controls",
                  image: tempLogo,
                  category: "Our Services",
                  date: "May 15, 2025",
                  link: "/cost-control",
                },
                {
                  title: "Schedule Management",
                  image: tempLogo,
                  category: "Our Operations",
                  date: "May 10, 2025",
                  link: "/schedule-management",
                },
                {
                  title: "WBS Setup",
                  image: tempLogo,
                  category: "Our Services",
                  date: "May 05, 2025",
                  link: "/wbs-setup",
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

export default QualityControlInspectionPage;



