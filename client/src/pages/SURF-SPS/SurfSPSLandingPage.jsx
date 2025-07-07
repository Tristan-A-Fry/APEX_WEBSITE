import { Link } from "react-router-dom";
import React from "react";
import HeroSection from "../../components/HeroSection.jsx";
import heroImage from "/public/services/rig-selection/rig1.jpg"; 
import apexLogo from "../../assets/apex_logo_white.jpg";

const SurfSPSLandingPage = () => {
  return (
    <div className="pb-12 bg-white dark:bg-[#2b2b2b] min-h-screen">
      <HeroSection
        title="SURF & SPS Services"
        subtitle="Comprehensive Solutions Across Subsea Production Systems and Flowlines"
        backgroundImage={heroImage}
        position="center"
      />

      {/* Intro Paragraph */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
          Our SURF (Subsea Umbilicals, Risers, and Flowlines) and SPS (Subsea Production Systems) services provide full-lifecycle support from concept to execution. We integrate multidisciplinary engineering with efficient execution strategies to enable safe, cost-effective, and high-performance subsea field development.
        </p>
      </div>

      {/* Info Boxes */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition dark:bg-[#232323] dark:border-gray-700 dark:text-white">
          <img src={apexLogo} alt="SURF Execution Framework" className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">SURF Execution Framework</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              From early-phase concept selection through installation and handover, our structured SURF execution model ensures streamlined planning, engineering, procurement, and commissioning of subsea infrastructure.
            </p>
            <Link to="/surf-execution" className="!text-red-700 !font-semibold hover:!underline dark:!text-red-400">
              Learn more →
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition dark:bg-[#232323] dark:border-gray-700 dark:text-white">
          <img src={apexLogo} alt="Systems Engineering" className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Systems Engineering</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Integrated design for XT, jumpers, umbilicals, and flowlines including flow assurance, hydraulic analysis, span/buckling studies, and interface management across SPS and SURF packages.
            </p>
            <Link to="/systems-engineering" className="!text-red-700 !font-semibold hover:!underline dark:!text-red-400">
              Learn more →
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition dark:bg-[#232323] dark:border-gray-700 dark:text-white">
          <img src={apexLogo} alt="Skid Packaging" className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Skid Packaging & I&E Management</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Engineering, integration, and management of topside control skids including HPU, CIU, and TUTA. Full support from FEED to installation and commissioning.
            </p>
            <Link to="/skid-packaging" className="!text-red-700 !font-semibold hover:!underline dark:!text-red-400">
              Learn more →
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition dark:bg-[#232323] dark:border-gray-700 dark:text-white">
          <img src={apexLogo} alt="Controls and DCS" className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Controls & DCS Integration</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Subsea-to-topside control system design including DCS interface, leak detection, remote monitoring, cause-and-effect documentation, and system integration testing.
            </p>
            <Link to="/controls-dcs" className="!text-red-700 !font-semibold hover:!underline dark:!text-red-400">
              Learn more →
            </Link>
          </div>
        </div>
      </div>

      {/* Highlight Box */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-red-200 border-l-4 border-red-500 p-6 rounded dark:bg-[#3b1f1f] dark:border-red-700">
          <p className="font-bold text-red-800 dark:text-red-300">
            At Apex Subsea, we deliver robust SURF and SPS services that optimize subsea development—from conceptual planning to final handover—ensuring system integrity, operational reliability, and seamless integration across all components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SurfSPSLandingPage;

