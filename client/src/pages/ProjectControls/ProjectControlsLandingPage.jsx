import { Link } from "react-router-dom";
import React from "react";
import HeroSection from "../../components/HeroSection.jsx";
import heroImage from "/public/services/rig-selection/rig1.jpg"; 
import tempImage from "../../assets/apex_logo_white.jpg"


const ProjectControlsLandingPage = () => {
  return (
    <div className="pb-12 bg-white dark:bg-[#2b2b2b] min-h-screen">
      <HeroSection
        title="Project Controls"
        subtitle="Enabling Data-Driven Decisions Across the Project Lifecycle"
        backgroundImage={heroImage}
        position="center"
      />

      {/* Intro Paragraph */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12">
         Project Controls ensures alignment between project scope, schedule, and cost through proactive planning, monitoring, and analysis. By integrating key data across disciplines, our approach enables informed decision-making, risk mitigation, and improved project performance from initiation to closeout.
        </p>
      </div>

      {/* Info Boxes */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition dark:bg-[#232323] dark:border-gray-700 dark:text-white">
          <img 
            src={tempImage} 
            alt="Cost Controls"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Cost Controls</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Effectively manage project budgets by tracking expenditures, forecasting costs, and aligning spending with scope and progress to ensure financial accountability across all phases. 
            </p>
            <Link
              to="/cost-control"
              className="!text-red-700 !font-semibold hover:!underline dark:!text-red-400"
            >
              Learn more →
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition dark:bg-[#232323] dark:border-gray-700 dark:text-white">
          <img 
            src={tempImage} 
            alt="Schedule Management"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Schedule Management</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
           Plan, monitor, and optimize project timelines using integrated methodologies to ensure on-time delivery, mitigate delays, and support critical path execution. 
          </p>
          <Link
            to="/schedule-management"
            className="!text-red-700 !font-semibold hover:!underline dark:!text-red-400"
          >
            Learn more →
          </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition dark:bg-[#232323] dark:border-gray-700 dark:text-white">
          <img 
            src={tempImage} 
            alt="Quality Control and Inspection"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Quality Control and Inspection</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            INSERT TEXT
          </p>
          <Link
            to="/quality-inspection"
            className="!text-red-700 !font-semibold hover:!underline dark:!text-red-400"
          >
            Learn more →
          </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition dark:bg-[#232323] dark:border-gray-700 dark:text-white">
          <img 
            src={tempImage} 
            alt="WBS Setup"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">WBS Setup</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            INSERT TEXT
          </p>
          <Link
            to="/wbs-setup"
            className="!text-red-700 !font-semibold hover:!underline dark:!text-red-400"
          >
            Learn more → 
          </Link>
          </div>
        </div>
      </div>

      {/* Highlight Box */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-red-200 border-l-4 border-red-500 p-6 rounded dark:bg-[#3b1f1f] dark:border-red-700">
          <p className="font-bold text-red-800 dark:text-red-300">
            At Apex Subsea, we are committed to providing best-in-class project controls that deliver cost certainty, schedule assurance, and data-driven insights at every stage of the project lifecycle. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectControlsLandingPage;

