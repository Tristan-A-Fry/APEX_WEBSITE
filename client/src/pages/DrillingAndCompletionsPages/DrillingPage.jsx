

import React from "react";
import drilling1 from "/public/services/drilling1.jpg";
import drilling2 from "/public/services/drilling2.jpg";
import drilling3 from "/public/services/drilling3.jpg";


const DrillingPage = () => {
  return (
    <section className="py-12 px-4">
      {/* Main Drilling Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={drilling1}
            alt="Drilling"
            className="w-full max-w-[600px] h-[300px] object-cover rounded shadow-lg"
          />
        </div>
        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-red-600 uppercase font-semibold mb-2">
            Drilling
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Drilling Services
          </h1>
          <p className="text-gray-700 mb-4">
            Our drilling services include developing Field Development Plans including: full costs, and timelines associated with each step of the execution, developing and executing detailed FEED plans, selecting all equipment required to drill and complete wells, developing detailed drilling and completions procedures with clear and concise instructions for operations, and tendering new service contracts for drilling and completion services based on technical and commercial evaluations.
          </p>
          <p className="text-gray-700 mb-6">
            We also prepare Detailed AFE’s for all operations, evaluate, select, and manage drilling contractors, and use Peloton Wellview software to track rig-based daily operating summaries, operational performance, and costs.
          </p>
        </div>
      </div>

      {/* Additional Section 1: Image Left */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={drilling2}
            alt="BOP Maintenance"
            className="w-full max-w-[600px] h-[300px] object-cover rounded shadow-lg"
          />
        </div>
        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            BOP Maintenance & Reliability
          </h2>
          <p className="text-gray-700 mb-4">
            We focus on vendor periodic performance reviews to discuss equipment reliability issues, including spare part availability. Frequency: minimum monthly or more frequently if needed, working directly with the BOP component manufacturer (OEM supplier) instead of BOP OEMs for SPM valves and other control components.
          </p>
          <p className="text-gray-700 mb-6">
            This approach enables better QA/QC of components, reviewing Root Cause Failure Analysis to identify and eliminate the causes of component failure, planning processes for between well maintenance activities, and ensuring adequate staffing for 24-hour operation.
          </p>
        </div>
      </div>

      {/* Additional Section 2: Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={drilling3}
            alt="Well Integrity"
            className="w-full max-w-[600px] h-[300px] object-cover rounded shadow-lg"
          />
        </div>
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Well Integrity
          </h2>
          <p className="text-gray-700 mb-4">
            Well integrity is ensured throughout the operational period, with known and anticipated operational limits to ensure safe drilling in time and budget. We verify system compliance, define operating limits for each condition, and determine system responses under defined variations to provide loads for equipment design and capacity.
          </p>
          <p className="text-gray-700 mb-6">
            This includes operability envelopes, ship response times, load histograms for fatigue life estimates, and more. We also support the execution of safety strategy, including fatigue testing as needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DrillingPage;


