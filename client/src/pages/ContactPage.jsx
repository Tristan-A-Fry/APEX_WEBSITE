import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#2b2b2b]">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-black dark:text-white">
          Get In Touch With Us Now!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone */}
          <div className="bg-white rounded shadow p-6 flex flex-col items-center text-center border border-gray-200 dark:bg-[#232323] dark:text-white dark:border-gray-700">
            <PhoneIcon className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
            <a
              href="tel:+18005551234"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            >
              +1 800-555-1234
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded shadow p-6 flex flex-col items-center text-center border border-gray-200 dark:bg-[#232323] dark:text-white dark:border-gray-700">
            <EnvelopeIcon className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a
              href="mailto:info@yourcompany.com"
              className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
            >
              info@yourcompany.com
            </a>
            <a
              href="mailto:sales@yourcompany.com"
              className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors"
            >
              sales@yourcompany.com
            </a>
          </div>

          {/* Location */}
          <div className="bg-white rounded shadow p-6 flex flex-col items-center text-center border border-gray-200 dark:bg-[#232323] dark:text-white dark:border-gray-700">
            <MapPinIcon className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">
              123 Main Street, City, State, ZIP
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-white rounded shadow p-6 flex flex-col items-center text-center border border-gray-200 dark:bg-[#232323] dark:text-white dark:border-gray-700">
            <ClockIcon className="w-10 h-10 text-yellow-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monday to Saturday <br />
              9:00 AM to 6:00 PM
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;