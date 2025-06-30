

import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import DrillingDropdown from "./DrillingDropdown.jsx";
import StorageMaitenenceDropdown from "./StorageMaitenenceDropdown.jsx";
import ProjectControlsDropdown from "./ProjectControlsDropdown.jsx";
import SurfDropdown from "./SurfDropwdown.jsx";
import SubseaInspectionsDropdown from "./SubseaInspectionsDropdown.jsx";

import { ChevronRightIcon } from '@heroicons/react/24/solid'

const ProductsDropdown = () => {
  const [isMainOpen, setIsMainOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const dropdownRef = useRef(null);

  return (
    <div className="relative cursor-pointer px-1 py-3">
      <div
        ref={dropdownRef}
        className="relative cursor-pointer"
        // onMouseLeave={() => setOpenSubmenu(null)}
      >
        {/* Main Label */}
        <div
          onClick={() => setIsMainOpen(!isMainOpen)}
          className="font-semibold text-gray-700 dark:text-white hover:text-red-700 flex items-center gap-1"
        >
          Products & Services
          <span
            className={`text-red-700 transform transition-transform duration-400 ${
              isMainOpen ? "rotate-90" : ""
            }`}
          >
            <ChevronRightIcon className="w-5 h-5" strokeWidth={2} />
          </span>
        </div>

        {/* Main Dropdown */}
        {isMainOpen && (
          <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded shadow-lg z-50 dark:bg-[#2b2b2b] dark:text-white dark:border-gray-700">
            {/* All Products & Services Link */}
            <div className="px-4 py-2 hover:bg-red-100">
              <Link to="/all-products-services" className="!text-black dark:!text-white">
                All Products & Services
              </Link>
            </div>

            {/* Drilling Accordion */}
            <div>
              <div
                onClick={() => {
                  if (openSubmenu === "drilling") {
                    setOpenSubmenu(null);
                  } else {
                    setOpenSubmenu("drilling");
                  }
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer "
              >
                Drilling & Completions
                <span
                  className={`transform transition-transform duration-400 ${
                    openSubmenu === "drilling" ? "rotate-90" : ""
                  } text-red-700`}
                >
                  <ChevronRightIcon className="w-4 h-6" />
                </span>
              </div>
              {openSubmenu === "drilling" && (
                <div className="px-4 py-2">
                  <DrillingDropdown />
                </div>
              )}
            </div>

            {/* Project Controls Accordion */}
            <div>
              <div
                onClick={() => {
                  if (openSubmenu === "project-controls") {
                    setOpenSubmenu(null);
                  } else {
                    setOpenSubmenu("project-controls");
                  }
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer"
              >
                Project Controls
                <span
                  className={`transform transition-transform duration-400 ${
                    openSubmenu === "project-controls" ? "rotate-90" : ""
                  } text-red-700`}
                >
                  <ChevronRightIcon className="w-4 h-6" />
                </span>
              </div>
              {openSubmenu === "project-controls" && (
                <div className="px-4 py-2">
                  <ProjectControlsDropdown />
                </div>
              )}
            </div>

            {/* Storage & Maitenence Accordion */}
            <div>
              <div
                onClick={() => {
                  if (openSubmenu === "storage-maitenence") {
                    setOpenSubmenu(null);
                  } else {
                    setOpenSubmenu("storage-maitenence");
                  }
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer"
              >
                Storage & Maitenence 
                <span
                  className={`transform transition-transform duration-400 ${
                    openSubmenu === "storage-maitenence" ? "rotate-90" : ""
                  } text-red-700`}
                >
                  <ChevronRightIcon className="w-4 h-6" />
                </span>
              </div>
              {openSubmenu === "storage-maitenence" && (
                <div className="px-4 py-2">
                  <StorageMaitenenceDropdown />
                </div>
              )}
            </div>

            {/* SURF Accordion */}
            <div>
              <div
                onClick={() => {
                  if (openSubmenu === "surf") {
                    setOpenSubmenu(null);
                  } else {
                    setOpenSubmenu("surf");
                  }
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer"
              >
                  SURF 
                <span
                  className={`transform transition-transform duration-400 ${
                    openSubmenu === "surf" ? "rotate-90" : ""
                  } text-red-700`}
                >
                  <ChevronRightIcon className="w-4 h-6" />
                </span>
              </div>
              {openSubmenu === "surf" && (
                <div className="px-4 py-2">
                  <SurfDropdown/>
                </div>
              )}
            </div>

            {/* Subsea Inspection Accordion */}
            <div>
              <div
                onClick={() => {
                  if (openSubmenu === "subsea-inspections") {
                    setOpenSubmenu(null);
                  } else {
                    setOpenSubmenu("subsea-inspections");
                  }
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100 flex items-center justify-between cursor-pointer"
              >
                Subsea Inspections 
                <span
                  className={`transform transition-transform duration-400 ${
                    openSubmenu === "subsea-inspections" ? "rotate-90" : ""
                  } text-red-700`}
                >
                  <ChevronRightIcon className="w-4 h-6" />
                </span>
              </div>
              {openSubmenu === "subsea-inspections" && (
                <div className="px-4 py-2">
                  <SubseaInspectionsDropdown />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsDropdown;

