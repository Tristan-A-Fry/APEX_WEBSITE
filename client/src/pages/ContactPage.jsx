

import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="mb-8 text-center">
        We’d love to hear from you! Find us at our location below.
      </p>

      <div className="w-full h-64 md:h-200 rounded overflow-hidden shadow-lg">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.893979989602!2d-95.53980092334113!3d30.183022374854065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647304b0e163d49%3A0x223f44d2833e1ca8!2s6700%20Woodlands%20Pkwy%2C%20The%20Woodlands%2C%20TX%2077382!5e0!3m2!1sen!2sus!4v1749072403928!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;

