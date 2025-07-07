import React from "react";
import drilling1 from "/public/services/drilling1.jpg";
import drilling2 from "/public/services/drilling2.jpg";
import drilling3 from "/public/services/drilling3.jpg";

import rigSelectionImage from "/public/services/rig-selection/rig1.jpg"; 
import rigSelectionImage2 from "/public/services/rig-selection/rig2.jpg"; 
import rigSelectionImage3 from "/public/services/rig-selection/rig3.png"; 
import heroImage from "/public/services/rig-selection/rig-hero.jpg"; 

import drillingImage from "/public/services/drilling4.jpg";
import lcImage from "/public/services/lc1.png";
import ucImage from "/public/services/uc1.png";

import tempLogo from "../../assets/apex_logo_white.jpg";

import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";

import HeroSection from "../../components/HeroSection.jsx";


const DrillingPage = () => {
  return (
    <div className="bg-white dark:bg-[#2b2b2b] min-h-screen">
      <HeroSection 
        title="Drilling"
        subtitle="Drilling"
        backgroundImage={drilling1}
        position="center"
        />

        {/* Section 1 */}
        <section className="flex flex-col items-center gap-8 py-12 px-4 ">
          <div className="w-full max-w-3xl mx-auto">
            <img
              src={drilling1}
              alt="Rig Selection"
              className="w-full h-auto rounded shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
                Drilling Process 
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
                Comprehensive Drilling Services
            </h1>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our drilling services include developing Field Development Plans including: full costs, and timelines associated with each step of the execution, developing and executing detailed FEED plans, selecting all equipment required to drill and complete wells, developing detailed drilling and completions procedures with clear and concise instructions for operations, and tendering new service contracts for drilling and completion services based on technical and commercial evaluations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We also prepare Detailed AFE’s for all operations, evaluate, select, and manage drilling contractors, and use Peloton Wellview software to track rig-based daily operating summaries, operational performance, and costs.
            </p>
          </div>
        </section>

      {/* Section 2 */}
      <section className="flex flex-col  items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={drilling2}
            alt="Rig Selection"
            className="w-full h-auto rounded shadow-lg "
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            BOP Maintenance & Reliability
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Maximizing BOP Reliability & Uptime
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
              We focus on vendor periodic performance reviews to discuss equipment reliability issues, including spare part availability. Frequency: minimum monthly or more frequently if needed, working directly with the BOP component manufacturer (OEM supplier) instead of BOP OEMs for SPM valves and other control components.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
              This approach enables better QA/QC of components, reviewing Root Cause Failure Analysis to identify and eliminate the causes of component failure, planning processes for between well maintenance activities, and ensuring adequate staffing for 24-hour operation.
        
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4 ">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={drilling3}
            alt="Rig Selection"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Well Integrity 
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Well Integrity Through Engineered Limits 
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
              Well integrity is ensured throughout the operational period, with known and anticipated operational limits to ensure safe drilling in time and budget. We verify system compliance, define operating limits for each condition, and determine system responses under defined variations to provide loads for equipment design and capacity.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
              This includes operability envelopes, ship response times, load histograms for fatigue life estimates, and more. We also support the execution of safety strategy, including fatigue testing as needed.
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
                  title: "Lower Completions",
                  image: lcImage,
                  category: "Our Services",
                  date: "May 05, 2025",
                  link: "/lower-completions",
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
                  category: "Our Operations",
                  date: "April 21, 2025",
                  link: "/project-controls",
                },
              ]}
            />
      </div>
    </div>
  );
};

export default DrillingPage;


