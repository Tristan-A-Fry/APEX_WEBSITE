
import React from "react";
import HeroSection from "../../components/HeroSection.jsx"; 
import WBSImage from "/public/services/project-controls/wbs-diagram.png"; 
import WBSImage2 from "/public/services/project-controls/wbs-diagram2.png"; 
import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";
import tempLogo from "../../assets/apex_logo_white.jpg";

const WBSSetupPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="WBS Setup"
        subtitle="Framework for Cost, Schedule, and Accountability Alignment"
        backgroundImage={WBSImage}
        position="center"
      />

      {/* Section 1 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={WBSImage}
            alt="WBS Overview"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 uppercase font-semibold mb-2">
            WBS SETUP
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Structured Project Alignment
          </h1>
          <p className="text-gray-700 mb-4">
            The Work Breakdown Structure (WBS) provides alignment with project execution and contracting strategy. It acts as a framework for organizing, planning, monitoring, analyzing, and controlling the project.
          </p>
          <p className="text-gray-700 mb-4">
            The WBS integrates schedule and budget elements, establishes control account responsibilities, and provides auditable data to support internal teams and project partners. It also supports structured reporting and financial transparency across the full project lifecycle.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={WBSImage2}
            alt="WBS Overview"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 uppercase font-semibold mb-2">
            WBS COMPONENTS
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            What the WBS Enables
          </h1>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Alignment with execution/contracting strategy</li>
            <li>Project organization and cost control structure</li>
            <li>Integration of cost, budget, forecast, and schedule</li>
            <li>Control account responsibility and traceability</li>
            <li>Audit-ready reporting and breakdowns for partners</li>
            <li>Supports systems like BOLO, EVM, and AFE structures</li>
          </ul>
        </div>
      </section>

      {/* Related Content */}
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
              link: "/schedule-mangement",
            },
            {
              title: "Quality Control & Inspections",
              image: tempLogo,
              category: "Our Operations",
              date: "April 21, 2025",
              link: "/quality-inspection",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default WBSSetupPage;
