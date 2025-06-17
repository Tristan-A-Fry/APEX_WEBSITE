
import React from "react";
import HeroSection from "../../components/HeroSection.jsx";
import SlideshowHeroSection from "../../components/SlideshowHeroSection.jsx";

import SE1 from "/public/services/surf/systems-engineering/SE5.png"; // Replace with correct path
import SE2 from "/public/services/surf/systems-engineering/SE1.png"; // Replace with correct path

import drillingImage from "/public/services/drilling4.jpg";
import tempLogo from "../../assets/apex_logo_white.jpg";

import RelatedContent from "../../components/relatedContent/RelatedContent.jsx";

const SystemsEngineeringPage = () => {
  const heroImages = [SE1, SE2];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Systems Engineering"
        subtitle="Comprehensive Engineering Across XT, Umbilical & Controls Systems"
        backgroundImage={SE2}
        position="center"
      />


      {/* Section 1 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={SE1}
            alt="Systems Engineering XT & Umbilicals"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 uppercase font-semibold mb-2">
            XT & Umbilical Engineering
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Precision Engineering for Field Hardware
          </h1>
          <p className="text-gray-700 mb-4">
            XT Engineering includes trim type and sizing, DH line sizing,
            intervention requirements (PTT, CT, DHPT), and integration of
            operability, hydraulic and electrical systems. We evaluate choke Cv,
            insulation, interfaces across BOP, jumpers, and tubing hangers.
            Umbilical Engineering encompasses cross-section design, dynamic &
            static analysis, route studies, terminations, and testing protocols
            like SIT with MCS.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex flex-col items-center gap-8 py-12 px-4">
        <div className="w-full max-w-3xl mx-auto">
          <img
            src={SE2}
            alt="SURF Flow Assurance and Controls Integration"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-red-800 uppercase font-semibold mb-2">
            SURF Flow Assurance & DCS Integration
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Integrated Flowline Design & Control Systems
          </h1>
          <p className="text-gray-700 mb-4">
            From planned/unplanned shutdowns and insulation requirements to
            route selection, span, buckling and walking analysis, our Systems
            Engineering supports reliable flowline and jumper performance. We
            specialize in MCS/DCS system design, signal integration,
            engineering documentation, and full project life cycle support
            including leak detection, compliance, and condition monitoring.
          </p>
        </div>
      </section>

      {/* Related Content */}
      <div className="flex justify-center flex-wrap gap-4">
        <RelatedContent
          title="related content"
          items={[
            {
              title: "SURF Execution",
              image: tempLogo,
              category: "Our Services",
              date: "June 16, 2025",
              link: "/surf-execution",
            },
            {
              title: "Controls & DCS",
              image: tempLogo,
              category: "Our Services",
              date: "June 10, 2025",
              link: "/controls-dcs",
            },
            {
              title: "Skid Packaging",
              image: tempLogo,
              category: "Our Services",
              date: "June 06, 2025",
              link: "/skid-packaging",
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

export default SystemsEngineeringPage;

