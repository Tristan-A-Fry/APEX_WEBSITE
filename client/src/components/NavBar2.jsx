

import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/apex_logo_white.jpg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from '@heroicons/react/24/solid'

import DarkModeToggle from "../utils/DarkModeToggle.jsx";


import DrillingDropdown from "./DrillingDropdown.jsx";
import SystemsEngineeringDropdown from "./SystemsEngineeringDropdown";
import SubseaFacilitiesDropdown from "./SubseaFacilitiesDropdown.jsx";
import ProjectControlsDropdown from "./ProjectControlsDropdown.jsx";
import SubseaWellAccessDropdown from "./SubseaWellAccessDropdown.jsx";
import ProductsDropdown from "./ProductsDropdown.jsx";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() =>{
    if(darkMode){
      document.documentElement.classList.add('dark');
    }
    else{

      document.documentElement.classList.remove('dark');
    }
  },[darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-[#2b2b2b] shadow w-full">
      <div className="relative flex items-center justify-between px-8 py-4">

        {/* Left: Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Company Logo" className="h-12 w-auto" />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">Apex Subsea Inc.</span>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-6">

          <Link
            to="/"
            className="!font-semibold !text-gray-700 dark:!text-white hover:!text-red-700 flex items-center gap-1 cursor-pointer"
          >
            Home
          </Link>

          <ProductsDropdown />

          <Link
            to="/news"
            className="!font-semibold !text-gray-700 dark:!text-white hover:!text-red-700 flex items-center gap-1 cursor-pointer"
          >
            News
          </Link>
          <Link
            to="/about"
            className="!font-semibold !text-gray-700 dark:!text-white hover:!text-red-700 flex items-center gap-1 cursor-pointer"
          >
            About Us
          </Link>

          <DarkModeToggle />

          <Link
            to="/contact"
          >
            <button className="!bg-red-700 hover:!bg-red-500 text-white !font-bold rounded shadow"> Contact Us </button>
          </Link>


        </nav>

        {/* Right: Hamburger (Mobile only) */}
        <div className="xl:hidden">
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
        <div className="lg:hidden px-8 pb-4">
          <nav className="flex flex-col space-y-2 text-gray-700">
          <Link
            to="/"
            className="!text-gray-700 hover:!text-red-500 flex items-center gap-1 cursor-pointer"
          >
            Home
          </Link>
          

          <Link
            to="/news"
            className="font-semibold !text-gray-700 hover:!text-red-500 flex items-center gap-1 cursor-pointer"
          >
            News
          </Link>
          <Link
            to="/about"
            className="font-semibold !text-gray-700 hover:!text-red-500 flex items-center gap-1 cursor-pointer"
          >
            About Us
          </Link>


          <ProductsDropdown />
          <Link
            to="/contact"
          >
            <button className="!bg-red-700 hover:!bg-red-500 text-white !font-bold rounded shadow"> Contact Us </button>
          </Link>

          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
