
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="block">
      <div
        className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-4">
          <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
          <div className="text-red-700 font-semibold tracking-wider">
            MORE
            <span className="block h-1 w-10 bg-red-700 mt-1"></span>
          </div>
        </div>
      </div>
    </Link>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ServiceCard;




