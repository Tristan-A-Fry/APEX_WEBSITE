import React from "react";
import { Link } from "react-router-dom";

const RelatedContent = ({ title, items }) => {
  return (
    <div className="w-full bg-gray-100 dark:bg-[#232323]">
      <section className="max-w-7xl mx-auto py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 capitalize text-center dark:text-white">
          {title}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group relative flex bg-white rounded overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 dark:bg-[#2b2b2b]"
            >
              {/* Image */}
              {item.image && (
                <div className="flex-shrink-0 w-1/2 md:w-1/2 p-2 dark:bg-[#232323]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                </div>
              )}
              {/* Content */}
              <div className="flex flex-col justify-center p-4 dark:bg-[#2b2b2b]">
                <div className="!text-red-800 dark:!text-red-400 font-semibold text-sm md:text-base">
                  {item.title}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mt-1">
                  {item.category} | {item.date}
                </div>
              </div>

              {/* Animated underline*/}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-red-800 dark:bg-red-400 transition-all duration-900 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RelatedContent;
