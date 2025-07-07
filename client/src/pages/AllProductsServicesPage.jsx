import React, { useState } from "react";
import products from "../components/Data/products.jsx";

const AllProductsServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Drilling & Completions",
    "SURF",
    "Project Controls",
    "Storage & Maitenence",
    "Subsea Inspections / I3P",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="bg-white text-white min-h-screen dark:bg-[#2b2b2b]">
      {/* Category Buttons */}
      <div className="w-screen flex flex-wrap justify-center gap-4 mb-10 bg-gray-white py-8 px-6 dark:!bg-[#2b2b2b] shadow-md">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer font-semibold text-lg
                        ${
                          selectedCategory === category
                            ? "text-black dark:text-white border-b-2 border-red-600"
                            : "text-black dark:text-white hover:text-red-600 hover:border-b-2 hover:border-red-600"
                        }`}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 p-6 bg-gray-100 dark:!bg-[#2b2b2b]" >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
              <h2 className="text-xl font-semi mb-2">{product.title}</h2>
              <a
                href={product.link}
                className="!text-red-700 !font-semibold hover:!underline"
              >
                MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsServicesPage;

