import { Link } from "react-router-dom";
import React from "react";
// import heroImage from "/public/services/rig-selection.jpg"; // Replace with your hero image
import HeroSection from "../../components/HeroSection.jsx";
import heroImage from "/public/services/rig-selection/rig1.jpg"; // Replace with your hero image
import rigImage from "/public/services/rig-selection/rig1.jpg";
import drillingImage from "/public/services/drilling4.jpg";
import lcImage from "/public/services/lc1.png";
import ucImage from "/public/services/uc1.png";

const StorageMaitenenceLandingPage = () => {
  return (

    <div className="pb-12">
      <HeroSection
        title="Storage & Maitenence"
        subtitle="Delivering safe, reliable, and cost-effective drilling and completions solutions."
        backgroundImage={heroImage}
        position="center"
      />

      {/* Intro Paragraph */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <p className="text-gray-700 text-lg mb-6">
          At Apex Subsea, our Drilling and Completions team provides
          comprehensive services that optimize well performance, minimize risks,
          and ensure operational efficiency across the entire well lifecycle.
          From project planning to execution, we deliver reliable solutions
          tailored to your unique reservoir challenges.
        </p>
      </div>

      {/* Info Boxes */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition">
          <img 
            src={rigImage} 
            alt="Rig Services"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Rig Selection</h3>
            <p className="text-gray-700 mb-4">
              Comprehensive rig selection services to match the right rig to your
              project’s requirements, ensuring efficiency and cost-effectiveness.
            </p>
            <Link
              to="/rig-selection"
              className="!text-red-700 !font-semibold hover:!underline"
            >
              Learn more →
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded shadow p-6 hover:shadow-lg transition">
          <img 
            src={drillingImage} 
            alt="Drilling Services"
            className="w-full h-[200px] object-cover rounded-t" />
          <div className="p-6">
          <h3 className="text-xl font-bold mb-2">Drilling Services</h3>
          <p className="text-gray-700 mb-4">
            End-to-end drilling support from planning to execution, covering rig
            site management, equipment selection, and drilling operations.
          </p>
          <Link
            to="/drilling"
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
            At Apex Subsea, we are committed to providing best-in-class drilling
            and completions services that ensure well integrity, safety, and
            maximum production efficiency while meeting environmental and
            regulatory requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StorageMaitenenceLandingPage;
