
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/apex_logo_white.jpg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DrillingDropdown from "./DrillingDropdown.jsx";
import SystemsEngineeringDropdown from "./SystemsEngineeringDropdown";
import SubseaFacilitiesDropdown from "./SubseaFacilitiesDropdown.jsx";
import ProjectControlsDropdown from "./ProjectControlsDropdown.jsx";
import SubseaWellAccessDropdown from "./SubseaWellAccessDropdown.jsx";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow w-full">
      <div className="relative flex items-center justify-between px-8 py-4">

        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          <span className="text-xl font-semibold text-gray-900">Apex Subsea Inc.</span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-6">

          <Link
            to="/home"
            className="!text-gray-700 hover:!text-red-500 flex items-center gap-1 cursor-pointer"
          >
            Home
          </Link>

          <DrillingDropdown />
          <SubseaFacilitiesDropdown />
          <ProjectControlsDropdown />
          <SystemsEngineeringDropdown />
          <SubseaWellAccessDropdown /> 

        </nav>

        {/* Right: Hamburger (Mobile only) */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-8 pb-4">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Drilling and Completions</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Subsea Facilities</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Project Controls</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Systems Engineering</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Subsea Well Access</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;

