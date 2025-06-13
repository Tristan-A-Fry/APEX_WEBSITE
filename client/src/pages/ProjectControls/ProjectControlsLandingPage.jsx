import { Link } from "react-router-dom";
import React from "react";
import HeroSection from "../../components/HeroSection.jsx";
import heroImage from "/public/services/rig-selection/rig1.jpg"; 
import rigImage from "/public/services/rig-selection/rig1.jpg";
import drillingImage from "/public/services/drilling4.jpg";
import lcImage from "/public/services/lc1.png";
import ucImage from "/public/services/uc1.png";

const ProjectControlsLandingPage = () => {
  return (

    <div className="pb-12">
      <HeroSection
        title="Project Controls"
        subtitle="Enabling Data-Driven Decisions Across the Project Lifecycle"
        backgroundImage={heroImage}
        position="center"
      />

      {/* Intro Paragraph */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <p className="text-gray-700 text-lg mb-12">
         Project Controls ensures alignment between project scope, schedule, and cost through proactive planning, monitoring, and analysis. By integrating key data across disciplines, our approach enables informed decision-making, risk mitigation, and improved project performance from initiation to closeout.
        </p>
      </div>

      {/* Info Boxes */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition">
          <img 
            src={rigImage} 
            alt="Cost Controls"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Cost Controls</h3>
            <p className="text-gray-700 mb-4">
              Effectively manage project budgets by tracking expenditures, forecasting costs, and aligning spending with scope and progress to ensure financial accountability across all phases. 
            </p>
            <Link
              to="/cost-control"
              className="!text-red-700 !font-semibold hover:!underline"
            >
              Learn more →
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition">
          <img 
            src={drillingImage} 
            alt="Schedule Management"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Schedule Management</h3>
          <p className="text-gray-700 mb-4">
           Plan, monitor, and optimize project timelines using integrated methodologies to ensure on-time delivery, mitigate delays, and support critical path execution. 
          </p>
          <Link
            to="/schedule-management"
            className="!text-red-700 !font-semibold hover:!underline"
          >
            Learn more →
          </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition">
          <img 
            src={lcImage} 
            alt="Lower Completions"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Lower Completions</h3>
          <p className="text-gray-700 mb-4">
            Designing and implementing lower completions to maximize production
            efficiency and well integrity, tailored to your reservoir conditions.
          </p>
          <Link
            to="/lower-completions"
            className="!text-red-700 !font-semibold hover:!underline"
          >
            Learn more →
          </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition">
          <img 
            src={ucImage} 
            alt="Upper Completions"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Upper Completions</h3>
          <p className="text-gray-700 mb-4">
            Seamless upper completion design and installation to connect the
            wellbore to the production system efficiently and safely.
          </p>
          <Link
            to="/upper-completions"
            className="!text-red-700 !font-semibold hover:!underline"
          >
            Learn more → 
          </Link>
          </div>
        </div>
      </div>

      {/* Highlight Box */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-red-200 border-l-4 border-red-500 p-6 rounded">
          <p className="font-bold text-red-800">
            At Apex Subsea, we are committed to providing best-in-class project controls that deliver cost certainty, schedule assurance, and data-driven insights at every stage of the project lifecycle. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectControlsLandingPage;

