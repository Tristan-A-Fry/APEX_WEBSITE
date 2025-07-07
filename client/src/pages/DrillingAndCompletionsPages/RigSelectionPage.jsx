import React from "react";
import HeroSection from "../../components/HeroSection.jsx"; 
import SlideshowHeroSection from "../../components/SlideshowHeroSection.jsx";

import rigSelectionImage from "/public/services/rig-selection/rig1.jpg"; 
import rigSelectionImage2 from "/public/services/rig-selection/rig2.jpg"; 
import rigSelectionImage3 from "/public/services/rig-selection/rig3.png"; 
import heroImage from "/public/services/rig-selection/rig-hero.jpg"; 

import drillingImage from "/public/services/drilling4.jpg";
import lcImage from "/public/services/lc1.png";
import ucImage from "/public/services/uc1.png";


import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";

const RigSelectionPage = () => {
  const heroImages = [rigSelectionImage, rigSelectionImage2, rigSelectionImage3];

  return (
    <div className="bg-white dark:bg-[#2b2b2b] min-h-screen">
      {/* Hero Section */}
      
      <SlideshowHeroSection
        images={heroImages}
        title="Rig Selection"
        subtitle="The Excellence in Rig Selection & Operations"
      />

      {/* Section 1 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4 ">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={rigSelectionImage}
            alt="Rig Selection"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Rig Selection Overview
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            The Foundation of Efficient Offshore Operations
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Rig selection is at the heart of efficient, safe, and cost-effective oil and gas operations. At Apex Subsea, we leverage our extensive knowledge of rig types — from jack-ups to semi-submersibles and drillships — to recommend the best solutions for your project's specific requirements. This process ensures that your operations are optimized from the outset.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            By analyzing technical specifications, operational needs, and environmental factors, we help you make informed decisions that align with your budget and safety goals. Our team's experience ensures that every rig meets or exceeds industry standards for performance and reliability.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col  items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={rigSelectionImage2}
            alt="Rig Selection"
            className="w-full h-auto rounded shadow-lg "
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Rig Acceptance Services
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Ensuring Operational Readiness & Safety
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our rig acceptance services are comprehensive and thorough. We conduct rigorous inspections of BOP systems, riser systems, control systems, and all critical equipment to verify that the rig meets the highest safety and performance standards before mobilization. This approach reduces costly downtime and ensures regulatory compliance.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Apex Subsea's experts oversee every detail, from mechanical integrity to operational readiness, giving you peace of mind that your rig is fully prepared for its mission. We leave no stone unturned when it comes to safety and efficiency.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4 ">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={rigSelectionImage3}
            alt="Rig Selection"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 dark:text-red-400 uppercase font-semibold mb-2">
            Project Management & Beyond
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            Comprehensive Support from Start to Finish
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Beyond rig selection, our team provides complete project management, from initial feasibility studies to final handover. We handle risk assessments, pre-commissioning, integrated acceptance testing, and everything in between — ensuring seamless transitions between each project phase.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Apex Subsea is committed to delivering excellence at every stage, with a focus on safety, efficiency, and cost-effectiveness. Let us help you achieve your operational goals with confidence.
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
              ]}
            />
      </div>
    </div>
  );
};

export default RigSelectionPage;


