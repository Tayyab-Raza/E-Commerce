import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Card1 = () => {
  const categories = [
    "View all",
    "Antioxidants",
    "Ayurvedic",
    "Digestive Health",
    "General Health",
    "Herbal, Specialty Supplements",
    "Immune Health",
    "Men Health",
    "Organic",
    "Personal Care",
    "Sexual Health",
    "Vitamins&Minerals",
    "Women Health"
  ];

  const [selectedCategory, setSelectedCategory] = useState("View All");

  const handleCheckboxChange = (category) => {
    setSelectedCategory(category);
  }

  const products = [
    {
      id: 1,
      name: "Nutremite AstaReal...",
      category: "ANTIOXIDANTS, VITAMINS...",
      originalPrice: 516,
      discountedPrice: 413,
      discount: 20,
      hot: true,
      imageUrl: "path_to_image/food1.jpg",
    },
    {
      id: 2,
      name: "Nutremite Abso curc...",
      category: "MEN HEALTH, WOMEN HEALTH...",
      originalPrice: 1073,
      discountedPrice: 858,
      discount: 20,
      hot: true,
      imageUrl: "path_to_image/food2.jpg",
    },
    {
      id: 3,
      name: "Nutremite Abso curc...",
      category: "MEN HEALTH, WOMEN HEALTH...",
      originalPrice: 1073,
      discountedPrice: 858,
      discount: 20,
      hot: true,
      imageUrl: "path_to_image/food2.jpg",
    },
    {
      id: 4,
      name: "Nutremite Abso curc...",
      category: "MEN HEALTH, WOMEN HEALTH...",
      originalPrice: 1073,
      discountedPrice: 858,
      discount: 20,
      hot: true,
      imageUrl: "path_to_image/food2.jpg",
    },
    {
      id: 5,
      name: "Nutremite Abso curc...",
      category: "MEN HEALTH, WOMEN HEALTH...",
      originalPrice: 1073,
      discountedPrice: 858,
      discount: 20,
      hot: true,
      imageUrl: "path_to_image/food2.jpg",
    },
  ];
  return (
    <>
    <div className="bg-gray-100 p-4 mt-14">
      <div className="pl-14">
      <h2 className="text-xl font-bold">Popular Departments</h2>
      <p className="text-sm">Products From These Categories Often Buy</p>
      </div>
      <div className="pl-14 pt-5">
      <h2 className="text-xl font-bold">Most Popular</h2>
      <p className="text-sm">All our new arrivals in a exclusive brand selection</p>
      </div>


    {/* Sidebar */}
    <div className="flex mt-14 mx-8 bg-white">
    <div className="w-1/5 p-4">
      <h2 className="text-lg font-bold mb-4">Sort By</h2>
      <div>
        {categories.map((category, index) => (
          <label key={index} className="block mb-2 text-blue-500">
            <input
              type="checkbox"
              checked={selectedCategory === category}
              onChange={() => handleCheckboxChange(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>
    </div>

        {/* card */}
      <div className="w-4/5 p-4">
        <div className="grid grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-2 rounded-md shadow hover:shadow-lg transition"
            >
              {product.hot && (
                <span className="relative top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  HOT
                </span>
              )}
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">{product.category}</p>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="line-through text-gray-400 text-sm">
                    ₹{product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-red-500 text-lg">
                    ₹{product.discountedPrice.toFixed(2)}
                  </span>
                </div>
                <button className="mt-4 flex items-center justify-center w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Card1;
