
// src/components/FeatureSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

import trappedPressure1 from "../../public/saftey-moment/trapped-pressure1.png";
import trappedPressure2 from "../../public/saftey-moment/trapped-pressure2.png";


export default function FeatureSlider() {
  return (
    <section className="w-full mt-24">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 5000, // 5 seconds between slides
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="w-full h-auto"
      >
        {/* === Slide 1 === */}
        <SwiperSlide>
          <div className="group relative flex flex-col md:flex-row h-auto bg-white dark:bg-[#2b2b2b] text-black dark:text-white gap-12 pb-24">
            <div className="md:w-1/2">
              <img
                src="/bg-images/drill.jpg"
                alt="Our Approach"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="md:w-1/2 flex flex-col justify-center px-8 py-12 space-y-6">
              <div>
                <h3 className="text-xl text-red-700 font-bold uppercase">Uncover</h3>
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase">
                  The Excellence in Engineering & Operations
                </h2>
              </div>

              <h4 className="text-xl md:text-2xl font-semibold">
                Providing reliable control systems across the full energy market
              </h4>

              <p className="text-xl text-gray-500 dark:text-white leading-relaxed">
                Apex Subsea’s consulting team provides turnkey solutions around Upper Completions, Well interventions, and other life of field operations from the Rig/MSV. Our
                <span className="text-red-700"> experienced facilities engineering team </span>
                has delivered successful Subsea Tie Backs covering SPS and SURF areas from concept, engineering, procurement, and offshore installation operations.
              </p>

              <div className="flex gap-12 justify-center">
                <div className="flex flex-col items-center">
                  <div className="rounded-full border-4 border-red-700 w-16 h-16 flex items-center justify-center text-lg font-bold text-black dark:text-white bg-white dark:bg-[#2b2b2b]">
                    200+
                  </div>
                  <p className="text-m text-red-700 mt-2 text-center">
                    200+ years combined experience
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="rounded-full border-4 border-red-700 w-16 h-16 flex items-center justify-center text-lg font-bold text-black bg-white dark:text-white dark:bg-[#2b2b2b]">
                    200+
                  </div>
                  <p className="text-m text-red-700 mt-2 text-center">
                    Deepwater wells in production
                  </p>
                </div>
              </div>

              <Link
                to="/all-products-services"
                className="!text-white !font-semibold"
              >
                <button className="mt-4 w-max px-6 py-3 !bg-red-700 hover:!bg-red-500 text-white !font-bold rounded shadow">
                  Read More →
                </button>
              </Link>
            </div>
            {/* Hover indicator */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 group-hover:w-full bg-red-700 transition-all duration-500 rounded-full"></div>
          </div>
        </SwiperSlide>

        {/* === Slide 2 === */}
        <SwiperSlide>
          <div className="group relative flex flex-col md:flex-row h-auto bg-white dark:bg-[#2b2b2b] text-black dark:text-white gap-12 pb-24">
            {/* Left Column: Text */}
            <div className="md:w-1/2 flex flex-col justify-center px-8 py-12 space-y-6">
              <div>
                <h3 className="text-xl text-red-700 font-bold uppercase">Safety Moment</h3>
                <h2 className="text-3xl md:text-4xl font-extrabold">Trapped Pressure</h2>
              </div>

              <p className="text-lg text-gray-700 dark:text-white leading-relaxed">
                Differential pressure is the primary method of actuation for many components. To create differential pressure, pressure must be stored at a higher pressure somewhere to then move to lower pressure source and equalize.
              </p>
              <p className="text-lg text-gray-700 dark:text-white leading-relaxed">
                Many components such as this check valve are used in the transfer of pressure from one location to another.
              </p>
            </div>

            {/* Right Column: Images */}
            <div className="md:w-1/2 flex flex-col md:flex-row items-center justify-center gap-6 px-6">
              <img
                src= {trappedPressure1}
                alt="Check Valve Side"
                className="w-full md:w-1/2 h-100 object-contain rounded shadow-lg "
              />
              <img
                src= {trappedPressure2}
                alt="Check Valve Internal"
                className="w-full md:w-1/2 h-100 object-contain rounded shadow-lg"
              />
            </div>
            {/* Hover indicator */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 group-hover:w-full bg-red-700 transition-all duration-500 rounded-full"></div>
          </div>
        </SwiperSlide>

        {/* === SLIDE 3 === */}
        <SwiperSlide>
          <div className="group relative flex flex-col items-center bg-white dark:bg-[#2b2b2b] text-black dark:text-white px-4 py-12 gap-8">
            <div className="text-center max-w-4xl">
              <h3 className="text-xl text-red-700 font-bold uppercase">SEMS Strategy</h3>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
                Protecting People, Assets & the Environment
              </h2>
            </div>

            {/* Diagram */}
            <div className="grid grid-cols-[auto_1fr_auto] gap-6 w-full max-w-6xl">
              {/* Left labels */}
              <div className="flex flex-col justify-between py-4 text-right pr-4 font-semibold text-blue-900">
                <span>Protect</span>
                <span>Focus</span>
                <span>Execute</span>
              </div>

              {/* Core Content Grid */}
              <div className="flex flex-col gap-4 w-full">
                {/* Protect Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-700 text-white font-semibold p-4 text-center rounded">People</div>
                  <div className="bg-blue-700 text-white font-semibold p-4 text-center rounded">Facilities & Resources</div>
                  <div className="bg-blue-700 text-white font-semibold p-4 text-center rounded">Environment</div>
                </div>

                {/* Focus Row */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded text-center space-y-2">
                  <div className="grid grid-cols-3 font-bold">
                    <span>Health</span>
                    <span>Safety & Risk</span>
                    <span>Quality</span>
                  </div>
                  <div className="grid grid-cols-6 text-sm text-gray-700 dark:text-white">
                    <span>Occupational Health</span>
                    <span>Industrial Hygiene</span>
                    <span>Occupational Safety</span>
                    <span>Industrial Safety (IM)</span>
                    <span>ISO 14001 EMS</span>
                    <span>ISO 29001 QMS</span>
                  </div>
                </div>

                {/* Execute Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-700 text-white font-semibold p-4 text-center rounded">Process</div>
                  <div className="bg-red-700 text-white font-semibold p-4 text-center rounded">Technology</div>
                  <div className="bg-red-700 text-white font-semibold p-4 text-center rounded">Measurement/KPIs</div>
                </div>
              </div>

              {/* Right labels */}
              <div className="flex flex-col justify-between py-4 text-left pl-4 font-semibold text-red-800">
                <span>Assets</span>
                <span>Priorities</span>
                <span>Enablers</span>
              </div>
            </div>
            {/* Hover indicator */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 group-hover:w-full bg-red-700 transition-all duration-500 rounded-full"></div>
          </div>
        </SwiperSlide>


      </Swiper>
    </section>
  );
}
