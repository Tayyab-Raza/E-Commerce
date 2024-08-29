import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Card3 = () => {

  //arrow components
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer text-black bg-gray-300 rounded-full hover:bg-white ml-14 p-2"
        onClick={onClick}
      >
        <FaArrowRight size={15} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 cursor-pointer text-black bg-gray-300 rounded-full hover:bg-white mr-14 p-2"
        onClick={onClick}
      >
        <FaArrowLeft size={15} />
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      id: 1,
      name: "Nutremite AstaReal...",
      category: "ANTIOXIDANTS, VITAMINS...",
      originalPrice: 516,
      discountedPrice: 413,
      discount: 20,
      hot: true,
      imageUrl: "path_to_image/food1.jpg",
    },
  ];


  return (
     <div className="p-14">
      <div className="relative mx-auto max-w-7xl ">
        <h1 className="text-3xl font-semibold pb-8 text-black text-center">FEATURED PRODUCTS</h1>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="w-full p-4">
              <div className="border p-2 rounded-md shadow hover:shadow-lg transition bg-white">
                {product.hot && (
                  <span className="relative top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    HOT
                  </span>
                )}
                <div className="relative bg-white">
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Card3
