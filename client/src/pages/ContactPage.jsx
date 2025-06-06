import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Get In Touch With Us Now!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="bg-white rounded shadow p-6 flex flex-col items-center text-center border border-gray-200">
          <PhoneIcon className="w-10 h-10 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
          <a
            href="tel:+18005551234"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            +1 800-555-1234
          </a>
        </div>

        {/* Email */}
        <div className="bg-white rounded shadow p-6 flex flex-col items-center text-center border border-gray-200">
          <EnvelopeIcon className="w-10 h-10 text-red-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <a
            href="mailto:info@yourcompany.com"
            className="text-gray-600 hover:text-red-600 transition-colors"
          >
            info@yourcompany.com
          </a>
          <a
            href="mailto:sales@yourcompany.com"
            className="text-gray-600 hover:text-red-600 transition-colors"
          >
            sales@yourcompany.com
          </a>
        </div>

        {/* Location */}
        <div className="bg-white rounded shadow p-6 flex flex-col items-center text-center border border-gray-200">
          <MapPinIcon className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-gray-600">
            123 Main Street, City, State, ZIP
          </p>
        </div>

        {/* Working Hours */}
        <div className="bg-white rounded shadow p-6 flex flex-col items-center text-center border border-gray-200">
          <ClockIcon className="w-10 h-10 text-yellow-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-600">
            Monday to Saturday <br />
            9:00 AM to 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


// import React from "react";
// import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
//
// const ContactPage = () => {
//   return (
//     <div className="w-full mx-auto px-4 py-8 text-center">
//      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
//           <p className="mb-8 text-center">
//             We’d love to hear from you! Reach out using the options below.
//           </p>
//
//           {/* Button Sections */}
//           <div className="flex flex-col md:flex-row w-full">
//             {/* Call Section */}
//             <div className="w-full md:w-1/2 bg-white py-6 flex justify-center items-center">
//               <a
//                 href="tel:+1234567890"
//                 className="flex flex-col items-center group"
//               >
//                 <PhoneIcon className="w-32 h-32 text-red-600 group-hover:text-red-700 transition-colors duration-300" />
//                 <span className="mt-2 text-xl text-red-600 font-semibold group-hover:underline">
//                   Call Us: 111-111-1111
//                 </span>
//               </a>
//             </div>
//
//             {/* Email Section */}
//             <div className="w-full md:w-1/2 bg-gray-100 py-6 flex justify-center items-center">
//               <a
//                 href="mailto:info@yourcompany.com"
//                 className="flex flex-col items-center group"
//               >
//                 <EnvelopeIcon className="w-32 h-32 text-red-900 group-hover:text-red-700 transition-colors duration-300" />
//                 <span className="text-xl mt-2 text-blue-600 font-semibold group-hover:underline">
//                   Email Us: apex@gmail.com
//                 </span>
//               </a>
//             </div>
//           </div>
//
//       <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
//       <p className="mb-8 text-center">
//         We’d love to hear from you! Find us at our location below.
//       </p>
//
//       <div className="w-full h-64 md:h-200 rounded overflow-hidden shadow-lg">
//         <iframe
//           title="Company Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.893979989602!2d-95.53980092334113!3d30.183022374854065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647304b0e163d49%3A0x223f44d2833e1ca8!2s6700%20Woodlands%20Pkwy%2C%20The%20Woodlands%2C%20TX%2077382!5e0!3m2!1sen!2sus!4v1749072403928!5m2!1sen!2sus"
//           className="w-full h-full border-0"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// };
//
// export default ContactPage;
//
